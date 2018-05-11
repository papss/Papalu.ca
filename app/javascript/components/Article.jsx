import React from "react"
import PropTypes from "prop-types"

class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article">
          <h2 className="article-header"> { this.props.title } </h2>
          <p className="article-body"> { this.props.body } </p>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  id: PropTypes.integer,
  title: PropTypes.string,
  body: PropTypes.string
};

export default Article

// <%= link_to 'Edit', edit_article_path({this.props.id}) %>
