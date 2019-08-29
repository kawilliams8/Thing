import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form/Form';

describe('Form', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form addThing={jest.fn()}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when you type', () => {
    const mockEvent = {target: {name: 'title', value: 'thing input'}};
    const expected = "thing input";
    wrapper.instance().handleTyping(mockEvent);
    expect(wrapper.state('title')).toEqual(expected);
  });

  it('should call addThing when you click', () => {
    wrapper.instance().addThing = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('button').simulate('click', mockEvent);
    expect(wrapper.instance().addThing).toHaveBeenCalled();
  });
});
