import http from 'k6/http';
import { authenticateUsingAih } from './oauth/oauth.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export const options = {
    stages: [
        { duration: '1s', target: 600 }
    ],
    thresholds: {},
};

export function setup() {