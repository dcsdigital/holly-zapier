// Load Hydrators
const hydrators = require('./hydrators');

// Load Creates
const createEvergreenPost = require('./creates/add-to-post-planner');
const uploadMedia = require('./creates/upload-media');

// Load Triggers
const listPostPlannerCategories = require('./triggers/list-post-planner-categories');
const listTeamSocialAccounts = require('./triggers/list-team-social-accounts');
const listTeams = require('./triggers/list-teams');
const listMediaFolders = require('./triggers/list-media-folders');

// Load Authentication
const authentication = require('./authentication');

// Add the API key to all requests
const includeApiKey = (request, z, bundle) => {
    if (bundle.authData.api_token) {
        request.params = request.params || {};
        request.params.api_token = bundle.authData.api_token;
    }
    return request;
};

const handleHTTPError = (response, z) => {
  if (response.status >= 400) {
    throw new Error(`Unexpected status code ${response.status}`);
  }
  return response;
};

const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [
      includeApiKey
  ],

  afterResponse: [
    handleHTTPError
  ],

  hydrators: hydrators,
  
  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
   [listPostPlannerCategories.key]: listPostPlannerCategories,
   [listTeamSocialAccounts.key]: listTeamSocialAccounts,
   [listTeams.key]: listTeams,
   [listMediaFolders.key]: listMediaFolders,
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [createEvergreenPost.key]: createEvergreenPost,
    [uploadMedia.key]: uploadMedia,
  }
};

// Finally, export the app.
module.exports = App;
