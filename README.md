# Movie Seeds
by Meghdad Hadidi

## Demo
A live version is available here on Netlify if you'd like to have a look and play around


## Technology
I am using a **React**+**TypeScript** setup created using `cra` tool. I use React context API to manage global state and for added security of keeping the state immutable I brought **immer** into the game.

I use **react-router** to manage client-side routing and **axios** as http client, which is wrapped withing a React custom hook called `useAxios`. 

An npm package called **react-intersection-observer** is used in another custom hook to keep track of images that are in viewport to avoid requesting for image sources that are not yet in the view. 

Npm package **colors.js** helps us to get average color of a movie poster and use it in the background gradient when going in movie detail page.

Using **msw** package to create an API mock server for testing purposes


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
