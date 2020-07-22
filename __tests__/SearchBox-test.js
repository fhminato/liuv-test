import React from 'react';
import SearchBox from '../src/components/SearchBox';

import renderer from 'react-test-renderer';
import {Text} from 'react-native';

test('renders correctly', () => {
  const tree = renderer
    .create(<SearchBox onClick={() => console.log()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
