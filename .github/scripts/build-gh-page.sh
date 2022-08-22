#!/usr/bin/env bash

echo "➕ Create temp or public dir: $NAME"
if [[ $RELEASE == "true" ]]; then
  mkdir temp
  echo "Created 'temp' dir"
else
  mkdir public
  echo "Created 'public' dir"
fi


echo "📥 Get gh-pages tar"
wget -q https://github.com/db-ui/elements/tarball/gh-pages

echo "📦 Unpack Tar"
if [[ $RELEASE == "true" ]]; then
  tar -zxf gh-pages -C temp --strip-components 1
else
  tar -zxf gh-pages -C public --strip-components 1
fi

echo "📁 Move ./out folder to public"
if [[ $RELEASE == "true" ]]; then
  mv ./out ./public
  if [ -d ./temp/review ]; then
    mv ./temp/review ./public
  fi
  if [ -d ./temp/version ]; then
    mv ./temp/version ./public
  fi
elif [[ $PRE_RELEASE == "true" ]]; then
  if [[ ! -d ./public/version ]]; then
    mkdir ./public/version
  fi
  mv ./out ./public/version/"$NAME"
else
  if [[ ! -d ./public/review ]]; then
    mkdir ./public/review
  fi
  if [[ -d ./public/review/"$NAME" ]]; then
    rm -rf ./public/review/"$NAME"
  fi
  mv ./out ./public/review/"$NAME"
fi
