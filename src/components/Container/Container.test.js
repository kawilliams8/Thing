import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container/Container';

describe('Container', () => {

  it('should match the snapshot', () => {
    const mockThings = [{id: 1, title: "thing title", description: "thing description"}]
    const wrapper = shallow(<Container data={mockThings} removeThing={jest.fn()}/>)
    expect(wrapper).toMatchSnapshot();
  });

});
