import React from 'react';
import renderer from 'react-test-renderer';
import { GridItem } from './GridItem';

describe('GridItem', () => {
  test('snapshot renders', () => {
    const props = {
      classes: {},
      itemArray: [],
      setVal: () => {}
    };

    const component = renderer.create(<GridItem props={props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
