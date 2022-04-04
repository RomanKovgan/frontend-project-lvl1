#!/usr/bin/env node

import { rule, calculate } from '../../src/games/calc.js';
import gameStart from '../../src/index.js';

gameStart(calculate, rule);
