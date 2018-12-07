#!/bin/sh

find ./artifacts/ -type d -not -empty -exec mv \{\}/beforeEach.png \{\}_0_before_$TRAVIS_BUILD_NUMBER.png \;
find ./artifacts/ -type d -not -empty -exec mv \{\}/afterEach.png \{\}_1_after_$TRAVIS_BUILD_NUMBER.png \;