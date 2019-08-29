import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card/Card';

describe('Card', () => {

  it('should match the snapshot', () => {
    const mockThing = {id: 1, title: 'thing title', description: 'thing description'};
    const wrapper = shallow(<Card key={1} data={mockThing} removeThing={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke removeThing when the button is clicked', () => {
    const mockThing = { id: 1, title: 'thing title', description: 'thing description' };
    const removeThingMock = jest.fn();
    const wrapper = shallow(<Card key={1} data={mockThing} removeThing={removeThingMock} />);
    wrapper.find('button').simulate('click');
    expect(removeThingMock).toHaveBeenCalled();
    expect(removeThingMock).toHaveBeenCalledWith(1);
  })
});
