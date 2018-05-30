
# Holly Social - Zapier App Template
A base project to create a Zapier app for your [Holly Social](https://www.chooseholly.com) Whitelabel System. Need help? Email us: support@chooseholly.com


## Getting started

Step 1.

 - Sign up as a Zapier Developer: https://zapier.com/developer
 - Keep the reference nearby if you're going to develop further: https://zapier.github.io/zapier-platform-cli/cli.html#zapier-cli-reference


Step 2. 

 - Clone this repository `git clone https://github.com/scottybo/holly-zapier`
 - Run `npm install` in the project folder


Step 3.

 - Install the Zapier CLI: see https://zapier.com/developer/start/introduction
 - Setup your LOCAL environment by following the instructions below (Setting up your environment)
 - Test your app: `zapier test` - learn more [here](https://zapier.com/developer/start/testing-your-app)
 - Deploy your app `zapier push` - learn more [here](https://zapier.com/developer/start/deploying-your-app)
 - Setup your REMOTE environment by following the instructions below (Setting up your environment on Zapier)
 - Head over to https://zapier.com/developer/ and add your logo, app title etc
 - You can start using the App! Head over to: https://zapier.com/app/editor

## Setting up your environment

We have included a file name `.env.example.` - copy the contents of this file and place it in a new file called `.env` (alternatively, you can simply rename the example file).

This Envrionment file contains the variables that are used throughout the codebase. Make sure each variable has a value otherwise tests and deployment will fail.

 - **HOLLY_ENDPOINT** - Should be the absolute URL to your api endpoint your white label (don't add a trailing slash)
 - **HOLLY_TEST_API_KEY** - The API key you have generated from a user account on your system.
 - **HOLLY_TEST_TEAM_ID** - The ID of a team you are a member of (for the above user).
 - **HOLLY_TEST_CATEGORY_ID** - The ID of the Post Planner category you want to add any test posts to.
 - **HOLLY_TEST_MEDIA_URL** - This is the media file that will be used for a variety of tests in the system. You can keep it as it is (the Holly Social logo) or change it to any absolute URL. 

Example `.env` file
```
HOLLY_ENDPOINT=https://www.yourdomain.com/api
HOLLY_TEST_API_KEY=QXpofdZuEgPmcNe4S82hLbt7zFUyhv7dto0DzdfoLqgvy95b5ZsufBaiXEhEYh
HOLLY_TEST_TEAM_ID=15
HOLLY_TEST_CATEGORY_ID=6087e999-3d6d-46d3-b4fb-ab1c0e12b924
HOLLY_TEST_MEDIA_URL=https://holly.nyc3.digitaloceanspaces.com/_test-files/logo-square-1024.png
```

## Setting up your environment on Zapier

The .env file is for running the app locally - you must also define the ENV variables on the Zapier servers.

Simply run (replacing the URL with your endpoint)

`zapier env 1.0.0 HOLLY_ENDPOINT "https://app.chooseholly.com/api"`

Stuck? Run `zapier help env`