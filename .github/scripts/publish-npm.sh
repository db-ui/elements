#!/usr/bin/env bash

echo "🛠 Forge all packages version numbers"
echo "which package verison ?: $VALID_SEMVER_VERSION"
npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/elements
npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/ngx-elements
npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/react-elements
npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/v-elements

npm pkg set 'dependencies.@db-ui/elements'=\'"$VALID_SEMVER_VERSION"\' --workspace=@db-ui/ngx-elements
npm pkg set 'dependencies.@db-ui/elements'=\'"$VALID_SEMVER_VERSION"\' --workspace=@db-ui/react-elements
npm pkg set 'dependencies.@db-ui/elements'=\'"$VALID_SEMVER_VERSION"\' --workspace=@db-ui/v-elements

PACKAGE_ENDING=""
if [[ $DBUI_THEME != 'default' ]]; then
  echo "Forge $DBUI_THEME string replacement..."
  npx -y replace-in-file @db-ui/elements @db-ui/elements-"$DBUI_THEME" 'packages/**/*.*'
  PACKAGE_ENDING="-$DBUI_THEME"
fi

echo "🔑 Authenticate with NPM Registry"
npm config set registry https://npm.pkg.github.com
npm set //npm.pkg.github.com/:_authToken "$GPR_TOKEN"
npm set //registry.npmjs.org/:_authToken "$NPM_TOKEN"


echo "📰 Publish Package to Registry (dry run)"

if [[ $RELEASE == 'true' ]]; then
  npm publish --dry-run --workspace=@db-ui/elements"$PACKAGE_ENDING"
  npm publish --dry-run --workspace=@db-ui/ngx-elements"$PACKAGE_ENDING"
  npm publish --dry-run --workspace=@db-ui/react-elements"$PACKAGE_ENDING"
  npm publish --dry-run --workspace=@db-ui/v-elements"$PACKAGE_ENDING"
elif [[ $PRE_RELEASE == 'true' ]]; then
  npm publish --tag next --dry-run --workspace=@db-ui/elements"$PACKAGE_ENDING"
  npm publish --tag next --dry-run --workspace=@db-ui/ngx-elements"$PACKAGE_ENDING"
  npm publish --tag next --dry-run --workspace=@db-ui/react-elements"$PACKAGE_ENDING"
  npm publish --tag next --dry-run --workspace=@db-ui/v-elements"$PACKAGE_ENDING"
fi
