import React from 'react';
import CommentBox from 'components/comment-box';
import { mount } from 'enzyme';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('text area is cleared on submit', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'look at me'}
  });
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('look at me');
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
