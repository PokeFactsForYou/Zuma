import React from 'react'
import { expect } from 'chai'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jsdom-global/register'

import Home from '../Home'


configure({ adapter: new Adapter() })


describe('Home', () => {
  describe('Video Button', () => {
    it('renders the home page with a video button', () => {
      const wrapper = shallow(<Home />)
      expect(wrapper.find('.video-button')).to.have.length(1)
    })
    it('renders the home page with a music button', () => {
      const wrapper = shallow(<Home />)
      expect(wrapper.find('.music-button')).to.have.length(1)
    })
    it('renders the home page with a learning button', () => {
      const wrapper = shallow(<Home />)
      expect(wrapper.find('.learning-button')).to.have.length(1)
    })
  })
})
