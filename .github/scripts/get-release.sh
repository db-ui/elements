#!/usr/bin/env bash

if [[ $GITHUB_REF == refs/tags/v*  ]]
then
  if [[ $GITHUB_ACTOR != 'dependabot[bot]' ]]
  then
    if [[ $GITHUB_COMMITISH == 'main' && $GITHUB_RELEASE == true  ]]
    then
      echo "RELEASE=true" >> "$GITHUB_ENV"
    elif [[ $GITHUB_PRE_RELEASE == true  ]]
    then
      echo "PRE_RELEASE=true" >> "$GITHUB_ENV"
    fi
   else
     echo "Dependabot has no permission to publish!"
     exit 1
   fi
else
  echo "Your tag has to start with 'v-'"
  exit 1
fi
