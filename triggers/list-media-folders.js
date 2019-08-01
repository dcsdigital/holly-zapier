const sample = require('../samples/sample-list-media-folders');

const triggerListMediaFolders = (z, bundle) => {
    
    const responsePromise = z.request({
        method: 'GET',
        url: `${process.env.HOLLY_ENDPOINT}/folders?team_id=${bundle.inputData.team_id}`,
    });
    return responsePromise
        .then(response => JSON.parse(response.content))
        .then(data => {
            const folders = data.folders; // array of categories
            return folders.map(function(e){ // returns array from the categories object
                return e
            }) 
        });
};

module.exports = {
    key: 'list_media_folders',
    noun: 'Media Folder',

    display: {
        label: 'List Media Folders',
        hidden: true,
        description: 'List all the media library folders of a team'
    },

    operation: {
        perform: triggerListMediaFolders,
        sample: sample
    }
};
