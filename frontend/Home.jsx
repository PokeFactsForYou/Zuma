import React from 'react'
import PropTypes from 'prop-types'
import Button from './components/Button'

const divStyle = {
  fontSize: '35px',
  textAlign: 'center',
}

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.redirect = this.redirect.bind(this)
  }

  redirect(url) {
    this.props.history.push(`/${url}`)
  }

  render() {
    return (
      <div style={divStyle}>
        <h1> HOME MENU </h1>
        <Button
          url="shows"
          value="Shows"
          redirect={this.redirect}
        />
        <Button
          url="music"
          value="Music"
          redirect={this.redirect}
        />
        <Button
          url="learning"
          value="Learning"
          redirect={this.redirect}
        />
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

Home.defaultProps = {
  history: {
    push: () => {},
  },
}

export default Home
