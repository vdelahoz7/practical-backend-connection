[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Deorg

Deorg 

We are using [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/) as a reference for our code style.

## Project scaffolding
    
```
├── README.md
├── package.json
├── ...(other config files)
├── cypress
├── .storybook
├── .husky
├── public
│   ├── logo.svg
│   ├── ...Other public files
├── src
│   ├── pages
│   │   ├── ...page components folders
│   │   ├── index.ts
│   ├── components
│   │   ├── ...components folders
│   │   ├── index.ts
│   ├── assets
│   │   ├── ...assets folders
│   │   ├── index.ts
│   ├── utils
│   │   ├── ...utils folders
│   │   ├── index.ts
│   ├── router
│   │   ├── ...router folders
│   │   ├── index.ts
│   ├── context
│   │   ├── ...context folders for global state management
│   │   ├── index.ts
│   ├── theme
│   │   ├── ...theme folders
│   │   ├── index.ts
│   ├── stories
│   │   ├── ...stories folders
│   │   ├── index.ts
│   ├── types
│   │   ├── ...types folders
│   ├── App.tsx
```

## How to develop

1. Create your feature branch, following the [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) pattern.
   The name of the branch should be `[type]/<your-[type]-name>`, where type could be `feature`, `bugfix`, `hotfix`, `documentation` or `release`.
2. Write your code, build your components and test your features, using storybook, jest and cypress. (See the section how to test, below)
3. Commit your changes, following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pattern. (See the section how to commit, below)

### How to write styles

We use [styled-components](https://styled-components.com/) to write styles. Used by the most popular companies in the world, it is a great tool to write styles in a component-based way.
We use [styled-system](https://styled-system.com/) to write styles. Used by [Cloudflare](https://www.cloudflare.com/), [Stripe](https://stripe.com/) and several other companies.
We use [styled-normalize](https://github.com/sergeysova/styled-normalize), to normalize the styles across browsers, because is lightweight and easy to use.

Note: any component that is not a styled-component should be written in the `components` folder and will be subject to the same rules as the styled-components.

Before writing any style, you should check if there is a theme variable that can be used. If not, you should create a new one in the `theme` folder. Before writing any new component, you should check if there is a similar one that can be used in storybook. If not, you should create a new one in the `components` folder.

1. Create a new component in the `components` folder, following the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) pattern.
2. Create a new story for your component in the `stories` folder.
3. Write your styles in the `theme` folder, following the [styled-system](https://styled-system.com/) pattern.
4. Use your component in your page.
5. Write your tests in the `tests` folder, following the [Jest](https://jestjs.io/) pattern.
6. Write your e2e tests in the `cypress` folder, following the [Cypress](https://www.cypress.io/) pattern. Or ask the QA team to write them for you.
7. Write your documentation following the [Storybook Docs](https://storybook.js.org/docs/react/writing-docs/introduction) pattern.

styled-system Example:

```tsx
const Box = styled.div`
    ${space}
    ${layout}
  ${color}
  ${flexbox}
  ${border}
  ${position}
  ${background}
  ${shadow}
  ${typography}
  ${grid}
  ${transform}
  ${transition}
  ${animation}
  ${custom}
`
```

Note: As we are using styled-system with typescript you need to make sure to add the right types to the styled components like in the following guide:  
[Styled System with Typescript](https://styled-system.com/guides/typescript) or [How to use styled system with typescript](https://dev.to/timrichter/how-to-use-styled-system-with-typescript-2fjo)

### Animate your components

We love the animations, and we use [framer-motion](https://www.framer.com/motion/) to animate our components. It is a great tool to animate your components in a declarative way.
[framer-motion](https://www.framer.com/motion/) is used by [Netflix](https://www.netflix.com/), [Uber](https://www.uber.com/), [Airbnb](https://www.airbnb.com/) and several other companies,  
and we love it, please don't do it in a different way. At least, not if you don't want to have a hard time explaining why you did it.

### How to write tests

We use [Jest](https://jestjs.io/) to write unit tests and [Cypress](https://www.cypress.io/) to write e2e tests.
We use [Storybook](https://storybook.js.org/) to write stories and [Storybook Docs](https://storybook.js.org/docs/react/writing-docs/introduction) to write documentation.
We also use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to write tests.

1. Create a new story for your component in the `stories` folder.
2. Write your tests in the `tests` folder, following the [Jest](https://jestjs.io/) pattern.
3. Write your e2e tests in the `cypress` folder, following the [Cypress](https://www.cypress.io/) pattern. Or ask the QA team to write them for you.
4. Write your documentation following the [Storybook Docs](https://storybook.js.org/docs/react/writing-docs/introduction) pattern.
5. Run your tests and check if they are passing.
6. Run your e2e tests and check if they are passing.
7. Run your storybook and check if your component is working as expected.
8. Run your storybook docs and check if your documentation is working as expected.

### Mobile first and responsive design

Create your components using the mobile first approach. This means that you should create your components using the mobile design and then add the styles for the desktop version. This will make your components more flexible and easier to maintain.

We built system to make mobile first styles:

### React patterns

-   We are using the [context module functions pattern](https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/01.md) to share data between components.
-   We are using the [compound components pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks) to build reusable components. We love to use React context to implement this pattern.
-   We are using the [render props pattern](https://kentcdodds.com/blog/prop-drilling) to share data between components. We love to use React context to implement this pattern.
-   We are using the [prop getters pattern](https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters) to give rendering control to users.

## How to run

1. Clone the repository
2. Run `yarn install` to install all the dependencies
3. Run `yarn dev` to start the development server

## How to build

1. Run `yarn build` to build the project
2. Run `yarn start` to start the production server

## How to test

**Note:** all those test will run as commit validation, so you don't need to run them manually, but if you want to, you can.

-   Run `yarn test` to run all the tests
-   Run `yarn test:watch` to run all the tests in watch mode
-   Run `yarn test:coverage` to run all the tests and generate the coverage report
-   Run `yarn test:lint` to run all the tests and generate the lint report
-   Run `yarn test:storybook` to run all the storybook stories
-   Run `yarn test:e2e` to run all the cypress e2e tests
-   Run `yarn test:e2e:open` to run all the cypress e2e tests in the cypress dashboard

We are writing our components using the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) pattern.
And also following [testeable components](https://kentcdodds.com/blog/testable-components-with-react) pattern.

## How to commit

**Note:** for now this project is commitizen friendly, but if something goes wrong, you can always follow this steps.

1. Install the commitizen cli globally: `npm install -g commitizen`
2. Run `git add .` to add your changes to the staging area.
3. Run `git cz` to commit your changes. This will open a wizard to help you write your commit message.

## Libraries and tools

-   We are using [React Hooks](https://reactjs.org/docs/hooks-intro.html) to build our components.
-   We are using [React Context](https://reactjs.org/docs/context.html) to share data between components.
-   We are using [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start) to handle the routes.
-   We are using [React Intl](https://formatjs.io/docs/react-intl/) to handle the internationalization.
-   We are using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to test our components.
-   We are using [React Storybook](https://storybook.js.org/docs/react/get-started/introduction) to build our components.
-   We are using [React Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) to test our components.
-   We are using [React Material UI](https://material-ui.com/) to build our components.
-   For some complex use cases, we are using [React Redux](https://react-redux.js.org/) and [Redux-thunk](https://github.com/reduxjs/redux-thunk) to handle the state. (No commonly used, avoid it if possible)

[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
