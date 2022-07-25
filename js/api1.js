import http from 'k6/http';
import { authenticateUsingAih } from './oauth/oauth.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";