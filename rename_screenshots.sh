#!/bin/sh

timestamp=`date "+%Y-%m-%d-%H-%M"`
find ./artifacts/ -type d -not -empty -exec mv \{\}/beforeEach.png \{\}_1_$timestamp.png \;
find ./artifacts/ -type d -not -empty -exec mv \{\}/afterEach.png \{\}_2_$timestamp.png \;