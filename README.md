# Trix-Flix
A simple web applicaiton where a user can view a movie's details and is able to mark it as `Favorites` and the user can also view movies related to the current movie being viewed. This web application is build using the following technologies.

- Nextjs
- Reactjs
- styled-components
- Bootstrap 4

## Setting up
1. Go to [themoviedb.org](https://www.themoviedb.org/) and register if you havent done so.
2. Go to your [account](https://www.themoviedb.org/settings/api) page to get the api key
3. Create a `.env` file at the root of the director if you haven't yet.
4. add the api key to the `.env` file as `TMDB_API_KEY`

## Running the App
1. Clone the [repo]()
2. run `yarn install` or `npm install` inside the root folder to install all the dependencies
3. run `yarn dev` or `npm run dev` to start the server
4. open your browser to [http://localhost:3000](http://localhost:3000)

## Deployment
This project is deployed using [vercel](https://vercel.com) which is connected to this repository. For more info on how to setup vercel go [here](https://nextjs.org/docs/deployment)