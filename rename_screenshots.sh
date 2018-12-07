#!/bin/sh

find ./artifacts/ -type d -not -empty -exec mv \{\}/beforeEach.png \{\}_before_$TRAVIS_BUILD_NUMBER.png \;
find ./artifacts/ -type d -not -empty -exec mv \{\}/afterEach.png \{\}_after_$TRAVIS_BUILD_NUMBER.png \;