# Convex PennApps starter project

This is a starter web application that uses Convex to store persistent data.

Convex is a combined database and backend that provides live updates so your website doesn’t have to poll API endpoints and your users don’t have to refresh the page. Convex requires writing short query and mutation functions in JavaScript or TypeScript (analogous to SQL queries) then pushing these to the Convex server. These functions can then be invoked by a web application.

## How to use

First fork this example on GitHub and clone it locally with [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). If using git isn't your speed, download the zip file provided by GitHub --- although it will be easiest to deploy your app later if you have a GitHub repository for it.

Once you have this code locally, make sure [node](https://nodejs.org/en/download/) is installed and install the dependencies of this project in a terminal from the root directory of this repo.

```bash
npx convex login
```

After you create a Convex account at https://dashboard.convex.dev, run the following command in a terminal in the root directory of this repository.

```bash
npx convex login
```

Now you can initialize a new Convex project,

```bash
npx convex init
```

and push the Convex functions for this project.

```bash
npx convex push
```

All that's left to do is to run your code locally with a Convex backend with

```bash
npm run dev
```

## Deploy this app

You can deploy this app lots of places, but a great place to run it is on [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=convex-penn-apps).

Push your app to GitHub, create an account with Vercel, and connect this app in GitHub.
