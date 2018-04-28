import React from 'react'
import { expect } from 'chai'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jsdom-global/register'

import Home from '../Home'

configure({ adapter: new Adapter() })


describe('Home', () => {
  describe('Video Button', () => {
    it('renders the home page with a video button', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find('.Video-button')).to.have.length(1)
    })
    it('renders the home page with a music button', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find('.Music-button')).to.have.length(1)
    })
    it('renders the home page with a learning button', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find('.Learning-button')).to.have.length(1)
    })
  })
})
