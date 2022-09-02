#!/usr/bin/env bash

if [[ -z $NAME ]]
then
  echo "NAME variable is missing"
  exit 1
fi

if [[ $RELEASE == "true" ]]; then
  echo "https://db-ui.github.io/elements"
elif [[ $PRE_RELEASE == "true" ]]; then
  echo "https://db-ui.github.io/elements/version/${NAME}"
else
  echo "https://db-ui.github.io/elements/review/${NAME}"
fi
