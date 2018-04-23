import React from 'react'
import { expect } from 'chai'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from '../Home'


configure({ adapter: new Adapter() })


describe('Home', () => {
  it('renders the home page', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).to.exist
  })
})
