#!/usr/bin/env node

import { rule, primeNumber } from '../../src/games/prime.js';
import gameStart from '../../src/index.js';

gameStart(primeNumber, rule);
