import React from 'react'
import Button from './components/Button'


const divStyle = {
  fontSize: '35px',
  textAlign: 'center',
}

const Home = () => (
  <div style={divStyle}>
    <Button value="Video" />
    <Button value="Music" />
    <Button value="Learning" />
  </div>
)

export default Home
