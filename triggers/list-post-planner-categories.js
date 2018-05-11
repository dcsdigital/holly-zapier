const sample = require('../samples/sample-list-teams');
const zapier = require('zapier-platform-core');

const triggerListPostPlannerCategories = (z, bundle) => {
    
    // Load the .env variables
    zapier.tools.env.inject();

    const responsePromise = z.request({
        method: 'GET',
        url: `${process.env.HOLLY_ENDPOINT}/${bundle.inputData.team_id}/categories`,
    });
    
    return responsePromise
        .then(response => JSON.parse(response.content))
        .then(data => {
            const categories = data.categories; // array of categories
            return categories.map(function(e){ // returns array from the categories object
                return e
            }) 
        });
};

module.exports = {
    key: 'list_post_planner_categories',
    noun: 'List Post Planner Categories',

    display: {
        label: 'List Post Planner Categories',
        hidden: true,
        description: 'Dynamic dropdown of Post Library Categories.'
    },

    operation: {
        perform: triggerListPostPlannerCategories,
        sample: sample
    }
};
