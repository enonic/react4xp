#!/usr/bin/env node

import buildConstants from "../index";

const [, , ...argv] = process.argv; // eslint-disable-line no-undef

buildConstants(argv[0], argv[1], argv[2]);
