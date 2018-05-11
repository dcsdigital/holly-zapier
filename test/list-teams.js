'use strict';
const should = require('should');
const zapier = require('zapier-platform-core');
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('List User Teams', () => {

  // The inject method will load .env variables and make them available to use in your tests
  zapier.tools.env.inject();

  it('should return list of teams', (done) => {
    const bundle = {
        authData: {
            api_token: process.env.HOLLY_TEST_API_KEY
        }
    };

    appTester(App.triggers.list_teams.operation.perform, bundle)
        .then((response) => {
            response.should.be.an.instanceOf(Array);
            done();
        })
    .catch(done);
  });

});