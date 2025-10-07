#!/usr/bin/env bash
set -e

GIT_NAME="learning-paths-block"

if [[ "$OSTYPE" == "darwin"* ]]; then
	realpath() { [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"; }
	ROOT=$(dirname $(dirname $(realpath "$0")))
else
	ROOT=$(dirname $(dirname $(readlink -f $0)))
fi

cd $ROOT/$PLUGIN_NAME

# Run the setup scripts
for FILE in * ; do
	if [ "$FILE" = "package.json" ]; then
		yarn install && yarn build
	fi
done
