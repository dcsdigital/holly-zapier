'use strict';
const should = require('should');
const zapier = require('zapier-platform-core');
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('List Post Planner Categories', () => {

  // The inject method will load .env variables and make them available to use in your tests
  zapier.tools.env.inject();

  it('should return categories', (done) => {
    const bundle = {
        authData: {
            api_token: process.env.HOLLY_TEST_API_KEY
        },
        inputData: {
            team_id: process.env.HOLLY_TEST_TEAM_ID,
        }
    };

    appTester(App.triggers.list_post_planner_categories.operation.perform, bundle)
        .then((response) => {
           response.should.be.an.instanceOf(Array);
            done();
        })
    .catch(done);
  });

});