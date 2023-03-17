const assert = require('chai').assert;
const App = require('../src/App');

describe('App', function() {
  describe('Initial state', function() {
    it('should have an empty string as searchValue', function() {
      const wrapper = shallow(<App />);
      assert.equal(wrapper.state().searchValue, '');
    });
  });
});
