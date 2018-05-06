import React from 'react'
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { MemoryRouter } from 'react-router-dom'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App'
import Home from '../Home'

chai.use(sinonChai)
configure({ adapter: new Adapter() })

describe('App', () => {
  it('invalid path should redirect to 404', () => {
    const component = mount(
      <MemoryRouter
      initialEntries={['/randooommmm']}
      initialIndex={0}
      >
          <App />
        </MemoryRouter>)
    expect(component.find(Home)).to.have.length(0)
    expect(component.text()).to.equal('Not Found!')
  })

  it('should redirect to home', () => {
    const component = mount(
      <MemoryRouter
        initialEntries={['/']}
        initialIndex={0}
      >
          <Home />
        </MemoryRouter>)
    expect(component.find(Home)).to.have.length(1)
  })
})
