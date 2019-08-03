import React from 'react';
import renderer from 'react-test-renderer';

import Content from '../Content';

it('should render content without error', () => {
  const component = renderer.create(
    <Content>
      <p>Testing Content component</p>
    </Content>,
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
