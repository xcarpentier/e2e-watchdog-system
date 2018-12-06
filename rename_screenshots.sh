#!/bin/sh

find ./artifacts/ -type d -not -empty -exec mv \{\}/afterEach.png \{\}_$TRAVIS_BUILD_NUMBER.png \;