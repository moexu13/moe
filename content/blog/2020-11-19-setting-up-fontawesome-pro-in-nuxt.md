---
title: Setting up FontAwesome Pro in Nuxt
date: 2020-11-19T20:45:56.398Z
description: Configuration of FontAwesome Pro in Nuxt
---
Deploying to Netlify

To deploy to Netlify from a cloud git provider you'll need to make some changes to your .npmrc file. First add an enviroment variable with the name NPM_TOKEN to your Netlify site and add your FontAwesome key as the value. Then instead of your actual key use the NPM_TOKEN in your .npmrc like so:

@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=${NPM_TOKEN}

Then remove .npmrc from your .gitignore file and commit the change. Netlify will be able to build your app using your private FontAwesome key.

Unfortunately, Nuxt won't run with the environment variable in the file, and I didn't want to risk accidentally committing my private key. The solution I came up with (which is somewhat clunky and I'm open to a better way) is to remove the .npmrc file from being tracked in git. First readd .npmrc to your .gitignore file. This by itself isn't enough because .gitignore doesn't apply to tracked files, which .npmrc becomes when you check it in. So to keep git from tracking the .npmrc file any further use this git command.

git update-index --skip-worktree .npmrc

Now if you run git status it should not include .npmrc.

This works because you only need the key when you install FontAwesome Pro. In your development environment you've already done this, but Netlify does a full rebuild from scratch every time you check in your project. You can now revert your .npmrc file to contain the key and it won't be checked into your cloud git repository.

In VS Code the .npmrc file doesn't revert to being grayed out but it is no longer being tracked.