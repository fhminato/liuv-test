import React from 'react';
import WaveHeader from '../src/components/WaveHeader';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<WaveHeader title={'Repositorios'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('test text', () => {
  const tree = renderer.create(<WaveHeader title={'Repositorios'} />);

  const title = tree.root.props['title'];
  expect(title).toBe('Repositorios');
});
