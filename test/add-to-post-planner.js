'use strict';
const should = require('should');
const zapier = require('zapier-platform-core');
const App = require('../index');
const appTester = zapier.createAppTester(App);

//This is an automated test for the Repo Trigger which populates the repo dropdown.
//It will run every time the `zapier test` command is executed.
describe('Create post', () => {
    zapier.tools.env.inject();

    it('should create a "draft" post with current date/time in Team > Post Planner > Category as defined in .env', (done) => {
        const bundle = {
            authData: {
                api_token: process.env.HOLLY_TEST_API_KEY
            },
            inputData: {
                brand_id: process.env.HOLLY_TEST_TEAM_ID,
                categories: ["6087d858-3d6d-46d3-b4fb-ab1c0e12b924"],
                status: 'draft',
                text: 'Test post created at: ' + Date.now(),
                media_url: process.env.HOLLY_TEST_MEDIA_URL
            }
        };

        appTester(App.creates.add_to_post_planner.operation.perform, bundle)
            .then((response) => {
                response.should.be.an.instanceOf(Object);
                done();
            })
            .catch(done);
    });
});