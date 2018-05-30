const sample = require('../samples/sample-add-to-post-planner');
const request = require('request');

const createEvergreenPost = (z, bundle) => {
    
    const responsePromise = z.request({
        method: 'POST',
        url: `${process.env.HOLLY_ENDPOINT}/evergreen-post`,
        body: {
            categories: bundle.inputData.categories,
            brand_id: bundle.inputData.team_id,
            status: bundle.inputData.status,
            text: bundle.inputData.text,
            media_url: bundle.inputData.media_url,
            max_count: 1,
        }
    });
            
  return responsePromise
    .then((response) => {
        let post = JSON.parse(response.content);
        return post.evergreen_posts[0];
    });

};

module.exports = {
    key: 'add_to_post_planner',
    noun: 'Add Post to Planner',

    display: {
        label: 'Add Post to Planner',
        description: 'Adds a new post to a category in your Post Planner'
    },

    operation: {
        inputFields: [
              {key: 'team_id', label:'Team', required: true, dynamic: 'list_teams.id.name'},
              {key: 'categories', label:'Planner Categories', required: true, dynamic: 'list_post_planner_categories.id.name'},
              {key: 'status', label:'Status', required: true, choices: ["draft", "approved"]},
              {key: 'text', label:'Text', required: true},
              {key: 'media_url', label:'Post Image URL', required: false}
        ],
        perform: createEvergreenPost,
        sample: sample
    }
};
