const sample = require('../samples/sample-upload-media');
const request = require('request');
const FormData = require('form-data');
const hydrators = require('../hydrators');

const uploadMedia = (z, bundle) => {
    
    const formData = new FormData();
    
    formData.append('brand_id', request(bundle.inputData.team_id));
    
    // file will in fact be a url where the file data can be downloaded from
    // which we do via a stream created by NPM's request package
    // (form-data doesn't play nicely with z.request)
    formData.append('media', request(bundle.inputData.media));

    const responsePromise = z.request({
        method: 'POST',
        url: `${process.env.HOLLY_ENDPOINT}/media/upload/public`,
        body: formData
    })
    .then((response) => {
        const media = response.json;

        // Make it possible to use the actual uploaded (or online converted)
        // file in a subsequent action. No need to download it now, so again
        // dehydrating like in ../triggers/newFile.js
        media.file = z.dehydrate(hydrators.downloadFile, {
            media_url: media.url,
        });

        return media;
    });
};

module.exports = {
    key: 'media_upload',
    noun: 'Media',

    display: {
        label: 'Upload Media',
        description: 'Uploads media file to the root folder of your Media Library'
    },

    operation: {
        inputFields: [
            {key: 'team_id', label:'Team', required: true, dynamic: 'list_teams.id.name'},
            {key: 'media', label:'Media File', required: true, type: 'file'},
        ],
        perform: uploadMedia,
        sample: sample,
        outputFields: [
            {key: 'file', type: 'file', label: 'File'},
            {key: 'id', type: 'string', label: 'Media id'},
            {key: 'url', type: 'string', label: 'Uploaded media URL'},
        ],
    }
};
