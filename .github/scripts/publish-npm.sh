#!/usr/bin/env bash

if [[ -z $VALID_SEMVER_VERSION ]]; then
  echo "Version is missing!"
  exit 1
fi

if [[ $RELEASE == 'false' && $PRE_RELEASE == 'false' ]]; then
  echo "RELEASE and PRE_RELEASE are false, there should be an error in the pipeline!"
  exit 1
fi

echo "🛠 Forge all packages version numbers"
echo "which package version ?: $VALID_SEMVER_VERSION"

npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/elements
npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/ngx-elements
npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/react-elements
npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/v-elements

npm pkg set dependencies.@db-ui/elements"$PACKAGE_ENDING"="$VALID_SEMVER_VERSION" --workspace=@db-ui/ngx-elements
npm pkg set dependencies.@db-ui/elements"$PACKAGE_ENDING"="$VALID_SEMVER_VERSION" --workspace=@db-ui/react-elements
npm pkg set dependencies.@db-ui/elements"$PACKAGE_ENDING"="$VALID_SEMVER_VERSION" --workspace=@db-ui/v-elements

if [[ $DBUI_THEME != 'default' ]]; then
  echo "Forge $DBUI_THEME string replacement..."
  npx -y replace-in-file @db-ui/elements @db-ui/elements"$PACKAGE_ENDING" 'packages/**/*.*'
  npx -y replace-in-file @db-ui/ngx-elements @db-ui/ngx-elements"$PACKAGE_ENDING" 'packages/**/*.*'
  npx -y replace-in-file @db-ui/react-elements @db-ui/react-elements"$PACKAGE_ENDING" 'packages/**/*.*'
  npx -y replace-in-file @db-ui/v-elements @db-ui/v-elements"$PACKAGE_ENDING" 'packages/**/*.*'
fi

echo "📦 Create packages"
npm pack --workspace=@db-ui/elements"$PACKAGE_ENDING"
npm pack --workspace=@db-ui/ngx-elements"$PACKAGE_ENDING"
npm pack --workspace=@db-ui/react-elements"$PACKAGE_ENDING"
npm pack --workspace=@db-ui/v-elements"$PACKAGE_ENDING"

NEXT=""
if [[ $PRE_RELEASE == 'true' ]]; then
  NEXT="--tag next"
fi

echo "📰 Publish Package to Registry ($NEXT)"
for REGISTRY in NPM GITHUB;
do
  echo "🔑 Authenticate $REGISTRY NPM Registry"
  if [[ $REGISTRY == 'NPM' ]]; then
    npm config set registry https://registry.npmjs.org/
    npm set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
  elif [[ $REGISTRY == 'GITHUB' ]]; then
    npm config set registry https://npm.pkg.github.com
    npm set //npm.pkg.github.com/:_authToken "$GPR_TOKEN"
  fi
  npm publish db-ui-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --quiet "$NEXT"
  npm publish db-ui-ngx-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --quiet "$NEXT"
  npm publish db-ui-react-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --quiet "$NEXT"
  npm publish db-ui-v-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --quiet "$NEXT"
done
