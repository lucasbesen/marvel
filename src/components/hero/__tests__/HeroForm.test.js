import React from 'react';
import renderer from 'react-test-renderer';

import { heroMock } from '../../../mocks/heroes';
import HeroForm from '../HeroForm';

it('should render HeroForm without error', () => {
  const component = renderer.create(<HeroForm hero={heroMock} history={jest.fn()} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
