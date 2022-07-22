import http from 'k6/http';

export function authenticateUsingAih(clientId, clientSecret, scope) {
    let url = "https://exampleURL/connect/token"
    const requestBody = {
        client_id: clientId,
        client_secret: clientSecret,
        scope: scope,
    };
    requestBody['grant_type'] = 'client_credentials';
    requestBody['client_id'] = requestBody.client_id;
    requestBody['client_secret'] = requestBody.client_secret;