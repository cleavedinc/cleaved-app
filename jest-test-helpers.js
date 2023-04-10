/* eslint-disable */
const Adapter = require("enzyme-adapter-react-16");

require("enzyme").configure({ adapter: new Adapter() });

/* polyfills */
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      addListener: function() {},
      matches: false,
      removeListener: function() {},
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0);
  };
