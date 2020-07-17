#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Test11Stack } from '../lib/test11-stack';

const app = new cdk.App();
new Test11Stack(app, 'Test11Stack');
