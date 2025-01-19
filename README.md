# Feather Sports

Feather Sports is a web application that allows users to find and book sports facilities. The application is built using React and Vite, and it includes various components such as carousels, cards, and sections to display information about sports facilities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Components](#components)
- [Styles](#styles)
- [License](#license)

## Installation

To install the project dependencies, run the following command:

```sh
npm install
```

## Usage

To start the development server, run the following command:

```sh
npm run dev
```

To build the project for production, run the following command:

```sh
npm run build
```

To preview the production build, run the following command:

```sh
npm run preview
```

## Project Structure

```markdown
.gitignore
eslint.config.js
index.html
package.json
README.md
src/
  App.css
  App.jsx
  carausal.jsx
  carausalcard.jsx
  card.css
  Cards.jsx
  CardsRow.css
  CardsRow.jsx
  carousal.jsx
  carousalbtn.jsx
  embla.css
  Footer.css
  Footer.jsx
  images/
  main.jsx
  Section1.css
  Section1.jsx
  Section2.css
  Section2.jsx
  Section3.css
  Section3.jsx
vite.config.js
```

## Available Scripts

npm run dev: Starts the development server.
npm run build: Builds the project for production.
npm run lint: Runs ESLint to lint the code.
npm run preview: Previews the production build.

## Dependencies

embla-carousel: ^8.5.2
embla-carousel-autoplay: ^8.5.2
embla-carousel-react: ^8.5.2
react: ^18.3.1
react-dom: ^18.3.1

## DevDependencies

@eslint/js: ^9.17.0
@types/react: ^18.3.18
@types/react-dom: ^18.3.5
@vitejs/plugin-react: ^4.3.4
eslint: ^9.17.0
eslint-plugin-react: ^7.37.2
eslint-plugin-react-hooks: ^5.0.0
eslint-plugin-react-refresh: ^0.4.16
globals: ^15.14.0
vite: ^6.0.5

## Components

### `App.jsx`

The main application component that includes the themes and container with heading and description.

### `carausal.jsx`

A carousel component that displays a series of cards with images and descriptions.

### `carausalcard.jsx`

A card component used within the carousel to display individual cards.

### `Cards.jsx`

A component that displays a series of cards with images and descriptions.

### `CardsRow.jsx`

A component that displays a row of cards with images, titles, and descriptions.

### `Footer.jsx`

A footer component that includes quick links, sports facilities, community and events, and app store links.

### `Section1.jsx`

A section component that includes a navigation bar with logo, search, and available sports links.

### `Section2.jsx`

A section component that includes a series of boxes with headings and descriptions.

### `Section3.jsx`

An empty section component that can be used for additional content.

## Styles

The project includes various CSS files for styling the components:

- `App.css`
- `card.css`
- `CardsRow.css`
- `embla.css`
- `Footer.css`
- `Section1.css`
- `Section2.css`
- `Section3.css`

## License

This project is licensed under the MIT License.
