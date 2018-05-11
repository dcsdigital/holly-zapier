const hydrators = {
    downloadFile: (z, bundle) => {
        
        // use standard auth to request the file
        const filePromise = z.request({
            url: bundle.inputData.media_url,
            raw: true
        });

        // and swap it for a stashed URL
        return z.stashFile(filePromise)
            .then((url) => {
                z.console.log(`Stashed URL = ${url}`);
                return url;
            });
    },
};

module.exports = hydrators;