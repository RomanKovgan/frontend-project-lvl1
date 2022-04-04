#!/usr/bin/env node

import { rule, evenNumber } from '../../src/games/even.js';
import gameStart from '../../src/index.js';

gameStart(evenNumber, rule);
