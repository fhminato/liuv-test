import React from 'react';
import RepoList from '../src/components/RepoList';

import renderer from 'react-test-renderer';

const repos = [
  {
    name: 'Test',
    language: 'React Native',
  },
];

test('renders correctly', () => {
  const tree = renderer
    .create(<RepoList data={repos} onClick={(item) => console.log(item)} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
