#!/bin/sh

find ./artifacts/ -type d -not -empty -exec mv \{\}/beforeEach.png \{\}_1.png \;
find ./artifacts/ -type d -not -empty -exec mv \{\}/afterEach.png \{\}_2.png \;