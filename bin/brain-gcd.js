#!/usr/bin/env node

import { rule, gcd } from '../../src/games/gcd.js';
import gameStart from '../../src/index.js';

gameStart(gcd, rule);
