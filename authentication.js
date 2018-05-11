const zapier = require('zapier-platform-core');

const testAuth = (z /*, bundle*/) => {
    
    // Load the .env variables
    zapier.tools.env.inject();
    
    // Send a request to the Zapier verify endpoint. 200 response for success.
    // Returns the user's name
    return z.request({
        url: `${process.env.HOLLY_ENDPOINT}/zapier/verify`,
    }).then((response) => {
        if (response.status === 401) {
            throw new Error('The API Key you supplied is invalid');
        }
        return response.json;
    });
};

module.exports = {
    type: 'custom',
    fields: [
        {
            key: 'api_token',
            label: 'API Key',
            required: true,
            type: 'string',
            helpText: 'Found on your user settings page.'
        }
    ],
    // The test method allows Zapier to verify that the credentials a user provides are valid. We'll execute this
    // method whenver a user connects their account for the first time.
    test: testAuth,
    // name is the key in the json returned from testAuth
    connectionLabel: (z, bundle) => {
        return bundle.inputData.name;
    }
};