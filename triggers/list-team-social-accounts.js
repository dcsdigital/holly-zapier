const sample = require('../samples/sample-list-social-accounts');

const triggerListSocialAccounts = (z, bundle) => {
    
    const responsePromise = z.request({
        method: 'GET',
        url: `${process.env.HOLLY_ENDPOINT}/accounts`,
        body: JSON.stringify({
            brand_id: bundle.inputData.team_id,
        })
    });
    return responsePromise
        .then(response => JSON.parse(response.content))
        .then(data => {
            const social_accounts = data.accounts; // array of categories
            return social_accounts.map(function(e){ // returns array from the categories object
                return e
            }) 
        });
};

module.exports = {
    key: 'list_team_social_accounts',
    noun: 'List Social Accounts',

    display: {
        label: 'List Social Accounts for a Team',
        hidden: true,
        description: 'Populates dynamic dropdowns with social accounts'
    },

    operation: {
        inputFields: [
            {key: 'team_id', label:'Team', required: true, dynamic: 'list_teams.id.name'},
        ],
        perform: triggerListSocialAccounts,
        sample: sample
    }
};
