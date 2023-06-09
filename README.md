# ReactTask
## Please view at 50% zoom 
This is a simple support desk app built using React and Vite. The app allows users to search for support staff and view their availability status.
## ASCII art representation of the architecture of the React app
```
     ┌─────────┐        ┌─────────┐
     │  index  │        │   App   │
     │  .html  ├──┐  ┌─►├─────────┤
     └─────────┘  │  │  │Catalog  │
                  │  │  ├─────────┤
                  │  │  │  APIs   │
                  │  │  └─────────┘
                  │  │
                  │  │  ┌─────────┐
                  ├──┼─►│  CSS    │
                  │  │  └─────────┘
                  │  │
                  │  │  ┌─────────┐
                  └──┴─►│  JSON   │
                     │  └─────────┘
                     │
                     │   ┌─────────┐
                     └──►│  SVGs   │
                         └─────────┘
```
## App Architecture
```
ReactTask/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── icon-available.svg
│   ├── icon-busy.svg
│   └── icon-search.svg
├── src/
│   ├── api.json
│   ├── __mocks__/
│   │   ├── fileMock.js
│   │   └── styleMock.js
│   ├── __tests__/
│   │   └── App.test.jsx
│   ├── components/
│   │   └── Catalog/
│   │       ├── Catalog.css
│   │       ├── Catalog.jsx
│   │       └── Catalog.test.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── setupTests.js
│   └── index.css
├── babel.config.js
├── index.html
├── jest.config.cjs
├── jest.setup.js
├── vite.config.js
├── .gitignore
├── package-lock.json
└── package.json
```
## App Preview: 
![Capture](https://user-images.githubusercontent.com/98179343/225954614-25efa9b2-58cd-4b47-921e-d75e5f4cc5f9.PNG)

## Usage
To use the app, you need to have Node.js and npm installed on your system. Once you have those installed, follow the steps below:

Clone the repository

```
git clone https://github.com/instamenta/ReactTask.git
```
Install the dependencies

```
cd react-app
```
```
npm install
```
Start the development server
```
npm run dev
```
Run tests
```
npm run test
```

### Basic Explanation
* (read the comments to clarify)
#### App
The App component is responsible for rendering the main layout of the app.
It consists of a navigation bar and a Catalog component that displays the support staff list.

#### Catalog
The Catalog component is responsible for displaying the support staff list.
It receives a props object that contains the search string entered by the user.
It then filters the userDataArray based on the search string and displays the filtered results.

## Technologies Used
The app was built using the following technologies:

* React - A JavaScript library for building user interfaces
* Vite - A build tool that provides fast development server and optimized build
* CSS - A style sheet language used for describing the presentation of a document
### Acknowledgements
This app was built as part of a technical task for Instamenta.

