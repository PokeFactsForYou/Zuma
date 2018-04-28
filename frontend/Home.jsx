import React from 'react'


const divStyle = {
  fontSize: '35px',
  textAlign: 'center',
}

const Home = () => (
  <div style={divStyle}>
    <button className="video-button">Video</button>
    <button className="music-button">Music</button>
    <button className="learning-button">Learning</button>
  </div>
)

export default Home
