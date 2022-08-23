#!/usr/bin/env bash

echo "➕ Create temp or public dir: $NAME"
if [[ $RELEASE == "true" ]]; then
  mkdir temp
  echo "    Created 'temp' dir"
else
  mkdir public
  echo "    Created 'public' dir"
fi


echo "📥 Get gh-pages tar"
wget -q https://github.com/db-ui/elements/tarball/gh-pages

echo "📦 Unpack Tar"
if [[ $RELEASE == "true" ]]; then
  tar -zxf gh-pages -C temp --strip-components 1
else
  tar -zxf gh-pages -C public --strip-components 1
fi

echo "📁 Bundle public"
if [[ $RELEASE == "true" ]]; then
  echo "    Move ./out ./public"
  mv ./out ./public
  if [ -d ./temp/review ]; then
    echo "    Move ./temp/review ./public"
    mv ./temp/review ./public
  fi
  if [ -d ./temp/version ]; then
    echo "    Move ./temp/version ./public"
    mv ./temp/version ./public
  fi
elif [[ $PRE_RELEASE == "true" ]]; then
  if [[ ! -d ./public/version ]]; then
    echo "    Make dir ./public/version"
    mkdir ./public/version
  fi
  if [[ -d ./public/version/"$NAME" ]]; then
    echo "    Remove dir ./public/version/$NAME"
    rm -rf ./public/version/"$NAME"
  fi
  mv ./out ./public/version/"$NAME"
else
  if [[ ! -d ./public/review ]]; then
    echo "    Make dir ./public/review"
    mkdir ./public/review
  fi
  if [[ -d ./public/review/"$NAME" ]]; then
    echo "    Remove dir ./public/review/$NAME"
    rm -rf ./public/review/"$NAME"
  fi
  mv ./out ./public/review/"$NAME"
fi
