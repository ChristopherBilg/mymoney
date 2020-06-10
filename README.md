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
3. `npm start` : open a hot-reload server located at `localhost:8080`
4. `npm run test` and `npm run lint` : run mocha unit tests and eslint codestyle linting respectively; both of these npm-scripts are pre-commit hooks that will need to pass in order to commit to the repository
5. `npm run storybook` : open a hot-reload server to view individual storybook stories (UI functional testing)

### Technology Stack

- npm: v6.14.5
- node: v12.16.1

- Architecture (~~M~~ERN)
  - ~~MongoDB~~
  - Express
  - React
  - Node

# Thank you so much and please enjoy!

### TODO (for developers)

- Work on backend api / database. (`node-persist`)
- [draw.io](https://www.draw.io): template out a UI for _incredibly basic_ budgeting.
  - An input form with type of transaction (expense, investment, paycheck, etc.), an amount input, a 'comments' input, and a submit button.
  - A section that will list all previous transactions.
  - A section that will calculate some statistics.
