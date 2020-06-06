# mymoney

mymoney - your personal finance dashboard

## Usage

1. `npm ci` : clean-install all required node modules

2. `npm run build` : create a directory labeled 'dist/' with the bundled output files

3. `npm run serve` : create a local server (http-server) serving the contents of the 'dist/' directory; you can visit the local website at `localhost:8080`

*NOTE: MOST PEOPLE WILL HAVE NO USE FOR THIS, BUT IT IS THERE TO LOOK AT IF YOU'D LIKE*

4. `npm run build-storybook` : create a directory labeled 'storybook-static/' with the bundled storybook stories (UI components)

5. `npm run view-storybook` : create a local server (http-server) serving the contents of the 'storybook-static/' directory; you can visit the local website at `localhost:6006`

## Contribution

1. `npm run ci` : clean-install all required node modules

2. `npm start` : open a hot-reload server located at `localhost:8080`

3. `npm run test` and `npm run lint` : run mocha unit tests and eslint codestyle linting respectively; both of these npm-scripts are pre-commit hooks that will need to pass in order to commit to the repository

4. `npm run storybook` : open a hot-reload server to view individual storybook stories (UI functional testing)

# Thank you so much and please enjoy!
