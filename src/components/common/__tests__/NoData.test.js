import React from 'react';
import renderer from 'react-test-renderer';

import NoData from '../NoData';

it('should render NoData without error', () => {
  const component = renderer.create(<NoData />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
