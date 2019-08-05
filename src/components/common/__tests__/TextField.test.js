import React from 'react';
import renderer from 'react-test-renderer';

import TextField from '../TextField';

it('should render TextField without error', () => {
  const component = renderer.create(
    <TextField input={{ onBlur: jest.fn(), onChange: jest.fn() }} meta={{}} label="This is a text input" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render TextField with helper texts', () => {
  const component = renderer.create(
    <TextField
      input={{ onBlur: jest.fn(), onChange: jest.fn() }}
      meta={{ touched: true, error: 'Error testing' }}
      label="This is a text input"
    />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
