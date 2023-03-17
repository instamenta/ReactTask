const enzyme = require('enzyme');
// const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const { configure } = require('enzyme-to-json');

configure({ adapter: new Adapter() });

const toJson = require('enzyme-to-json').default;

require('@testing-library/jest-dom/extend-expect');