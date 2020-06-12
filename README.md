# mymoney

mymoney - your personal finance dashboard

## Usage

1. `npm ci` : clean-install all required node modules
2. `npm run api` : start up the REST API services in the **src/api/** directory
3. `npm run build` : create a directory labeled **dist/** with the bundled output files
4. `npm run serve` : create a local server (http-server) serving the contents of the **dist/** directory; you can visit the local website at `localhost:8080`

## Contribution

1. `npm run ci` : clean-install all required node modules
2. `npm run api` : start up the REST API services
3. `npm run start` : open a hot-reload server located at `localhost:8080`
4. `npm run test` and `npm run lint` : run mocha unit tests and eslint codestyle linting respectively; both of these npm-scripts are pre-commit hooks that will need to pass in order to commit to the repository
5. `npm run storybook` : open a hot-reload server to view individual storybook stories (UI functional testing)

### Technology Stack

- npm: v6.14.5
- node: v12.16.1

# Thank you so much and please enjoy!

### TODO (for developers)

- Add storybooks for all components that don't have one.
- Add linting for valid JSDoc in source code
- Add building of valid JSDoc from source code into readable format `(markdown?)`
- Merge income and expense dialogs into one component
- Merge income and expense display cards into one component
- Redux store for global state management
- Remove 'timer'-based api calls, and put modular calls into a `requests.js` file, much like `constants.js`
- Implement [json schema validation](https://www.npmjs.com/package/ajv) for database inputs
- Split database income and expense into two separate routers/files
- Graph of income vs expenses over time
- Calendar view of income and expenses sorted via datetime
- Integrate CI/CD pipeline `(through GitHub?)`
- **Find more epics/stories to add, look for open source inspiration**
