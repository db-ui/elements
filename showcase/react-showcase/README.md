# DB-UI React Showcase

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

This project is for reference how to use DB UI Elements with vanilla React. We're also [hosting the build on GitHub pages](https://db-ui.github.io/elements/react-showcase/index.html).

## Installation

Because of the monorepo architecture of DB UI Elements the installation of the showcase is a little bit finicky.
No `node_modules` folders should be present in all of the repository when you install the dependencies of the React showcase in the `showcase/react-showcase` folder:

    cd showcase/react-showcase
    npm i

Only afterwards you should install the dependencies of DB UI Elements in the root folder of the repository:

    cd ../../
    npm i

Then start the automatic compilation of the DB UI Elements web components and create-react-app in the React showcase:

    npm run start:showcase
    cd showcase/react-showcase
    npm start

Changes in the DB UI Elements web components should now be instantly reflected in the React showcase as well.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ui/elements/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](https://github.com/db-ui/elements/blob/main/CODE-OF-CONDUCT.md).

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product.

Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

## License

This project is licensed under [Apache-2.0](LICENSE).
