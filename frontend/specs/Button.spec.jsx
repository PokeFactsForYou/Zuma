import React from 'react'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from '../components/Button'

chai.use(sinonChai)
configure({ adapter: new Adapter() })

describe('Button', () => {
  let wrapper
  const redirectSpy = sinon.spy(url => url)

  const props = {
    url: 'shows',
    value: 'Shows',
    redirect: redirectSpy,
  }

  it('pushes a url when clicked', () => {
    wrapper = mount(<Button {...props} />)

    wrapper.find('button').simulate('click')
    expect(props.redirect).to.have.been.called
  })
})
