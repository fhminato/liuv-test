import React from 'react';
import GitRepo from '../src/components/GitRepo';

import renderer from 'react-test-renderer';

const item = {
  name: 'Liuv',
  language: 'React Native',
};

test('renders correctly', () => {
  const tree = renderer
    .create(<GitRepo item={item} onClick={() => console.log()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
