import React from "react"
import PropTypes from "prop-types"

class Landing extends React.Component {
  render () {
    return (
      <React.Fragment>
        Blurb: {this.props.blurb}
      </React.Fragment>
    );
  }
}

Landing.propTypes = {
  blurb: PropTypes.string
};
export default Landing
