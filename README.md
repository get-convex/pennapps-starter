# Convex PennApps starter project

This is a starter web application that uses Convex to store persistent data.

Convex is a combined database and backend that provides live updates so your website doesn’t have to poll API endpoints and your users don’t have to refresh the page. Convex requires writing short query and mutation functions in JavaScript or TypeScript (analogous to SQL queries) then pushing these to the Convex server. These functions can then be invoked by a web application.

## How to use

First fork this example on GitHub and clone it locally with [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). If using git isn't your speed, download the zip file provided by GitHub; although it will be easiest to deploy your app later if you have a GitHub repository for it.

Once you have this code locally, make sure [node](https://nodejs.org/en/download/) is installed and install the dependencies of this project in a terminal from the root directory of this repo.

```bash
npm install
```

After you create a Convex account at https://dashboard.convex.dev, run the following command in a terminal in the root directory of this repository.


Log in to Convex,

```bash
npx convex login
```

initialize a new Convex project,

```bash
npx convex init
```

and then run the following two commands in two different terminals:

```bash
npx convex dev
```

```bash
npm run dev
```

Once everything is working, commit your code and deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

Use `npx convex deploy && npm run build` as the build command and set the `CONVEX_DEPLOY_KEY` environmental variable in Vercel ([Documentation](https://docs.convex.dev/getting-started/deployment/hosting/vercel)).
