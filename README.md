# POKEMON UI
This application is a simple web application that uses the Pokemon API to list Pokemon and display their details on a separate detail page. 

## Features

- Retrieves and displays the list of Pokemon from the API.
- Provides a separate detail page for each Pokemon.
- Displays the Pokemon's image, name, type, and details on the detail page.

## Notes
- In order to retrieve query parameters, the application utilizes core JavaScript with the pathname property since Next.js version 13 no longer supports the dynamic router feature. [More Information about Dynamic href is not supported in the /app directory](https://nextjs.org/docs/messages/app-dir-dynamic-href)

## Technologies

This application utilizes the following technologies:

- React: For creating and managing the core components of the application.
- Next.js: For server-side rendering and routing.
- Redux: For managing the application state and enabling centralized data management.
- Axios: For making HTTP requests to the API.
- TypeScript: For adding static typing to JavaScript and enhancing developer productivity.
- Material-UI: For building responsive and visually appealing user interfaces.
- Chart.js: For creating interactive charts and visualizations.
## Installation

Clone this project or download it as a ZIP file.
```bash
git clone https://github.com/ozturk-murat/pokemonui.git
```
Navigate to the project directory.
```bash
cd pokemonui
```

Install the dependencies by running the following command.
```bash
npm install
```
Install the dependencies by running the following command.
```bash
npm run dev
```
```bash
Open http://localhost:3000 in your browser to view the Pokemon application.
```
