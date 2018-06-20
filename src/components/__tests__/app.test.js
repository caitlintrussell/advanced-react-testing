import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

it('shows a comment box', () => {
  const div = document.createElement('div');
  /* With this, we're not actually making a div inside the browser, and not actually accessing the browser. JSDOM, pre loaded with jest/react, mimics the browser so we can run tests. just creates a node in memory!
   */
  ReactDOM.render( <App />, div);

  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div); // similar to an after each

  /* this is not a good example of a test for react, because we're not testing for the actual component <App />, we're testing data inside of it's children. This is not a good practice because if data changes in the children, we'll break the tests in this file, which will send us on a wild goose chase to find the culprit that's failing. Enter....ENZYME!
  */
});
