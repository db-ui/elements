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
npm pack --quiet --workspace=@db-ui/elements"$PACKAGE_ENDING"
npm pack --quiet --workspace=@db-ui/ngx-elements"$PACKAGE_ENDING"
npm pack --quiet --workspace=@db-ui/react-elements"$PACKAGE_ENDING"
npm pack --quiet --workspace=@db-ui/v-elements"$PACKAGE_ENDING"

TAG="latest"
if [[ $PRE_RELEASE == 'true' ]]; then
  TAG="next"
fi

echo "📰 Publish Package to Registry with tag: $TAG)"
for REGISTRY in 'GITHUB' 'NPM'
do
  echo "🔒 Authenticate $REGISTRY NPM Registry"
  if [[ $REGISTRY == 'GITHUB' ]]; then
    npm config set @db-ui:registry https://npm.pkg.github.com
    npm set //npm.pkg.github.com/:_authToken "$GPR_TOKEN"
    echo "🔑 Authenticated with GITHUB"
  elif [[ $REGISTRY == 'NPM' ]]; then
    npm config set @db-ui:registry https://registry.npmjs.org/
    npm set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
    echo "🔑 Authenticated with NPM"
  else
    echo "Could not authenticate with $REGISTRY"
    exit 1
  fi
  npm publish --tag "$TAG" db-ui-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --provenance
  npm publish --tag "$TAG" db-ui-ngx-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --provenance
  npm publish --tag "$TAG" db-ui-react-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --provenance
  npm publish --tag "$TAG" db-ui-v-elements"$PACKAGE_ENDING"-"$VALID_SEMVER_VERSION".tgz --provenance
done
