import React from "react"
import PropTypes from "prop-types"

class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h2> { this.props.title } </h2>
          <p> { this.props.body } </p>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default Article
