import React from 'react'
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from '../Home'

chai.use(sinonChai)
configure({ adapter: new Adapter() })


describe('Home', () => {
  describe('Shows Button', () => {
    it('renders the home page with a video button', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find('.Shows-button')).to.have.length(1)
    })
  })
  describe('Music Button', () => {
    it('renders the home page with a music button', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find('.Music-button')).to.have.length(1)
    })
  })
  describe('Learning Button', () => {
    it('renders the home page with a learning button', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find('.Learning-button')).to.have.length(1)
    })
  })
})
