# My Movies and Series App
This web app displays a selection of popular movies and series, with the possibility to search by query.
The results (default or by query) are presented in a paginated results list.
Clicking on a list item gives access to the entry details.
# Setup and Start
The app requires to have node.js installed.
After having cloned the repository (or after downloading and unzipping the sources), place yourself in the project directory and run the following command :
> npm install

Then to launch the application :
> npm start

# Technical Notes

## Tech stack

This app is developed in **Typescript** with the **React** library, with function components and hooks.
It uses the **AntDesign** React UI framework.

## Real time URL update
When the users types a new query, paginates or changes the content type, the URL is dynamically updated.
This feature is based on **react-router-dom** and its **useSearchParams** hook

## Unit tests

Unit tests are developed with the **React Testing Library**
Api calls are mocked with **msw** (in the server.ts file)

Thanks to this, tests are simple and reliable, focused on testing the real DOM nodes rather than implementation details.

In order to run the tests, run the following command :
> npm test

## Custom hooks
Some parts of logic like data fetching or interacting with the url parameters are delegated to custom hooks, in order to separate concerns and make the components lighter.