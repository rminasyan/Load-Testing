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
    const clientAuthResp = authenticateUsingAih('EXTERNAL_SYSTEM', 'password', 'API')
    return clientAuthResp;
}

export default function (data) {
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.access_token}`,
        },
    };
    const api1Url = 'https://yoursiteexample.com/endpointnameexample';
    const res = http.get(api1Url, params);
}

export function handleSummary(data) {
    return {
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
        'Api1.html': htmlReport(data),
        'loadtest-results.xml': jUnit(data),
        'summary.json': JSON.stringify(data),