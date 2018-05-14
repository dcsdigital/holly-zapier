const sample = require('../samples/sample-list-teams');

const triggerListTeams = (z, bundle) => {
    
    const responsePromise = z.request({
        method: 'GET',
        url: `${process.env.HOLLY_ENDPOINT}/brands`,
    });
    return responsePromise
        .then(response => JSON.parse(response.content));
};

module.exports = {
    key: 'list_teams',
    noun: 'Team',

    display: {
        label: 'List Teams',
        hidden: true,
        description: 'List all the teams of a user'
    },

    operation: {
        perform: triggerListTeams,
        sample: sample
    }
};
