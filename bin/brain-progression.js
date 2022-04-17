#!/usr/bin/env node

import gameStart from '../../src/index.js';
import { rule, progression } from '../../src/games/progression.js';

gameStart(progression, rule);
