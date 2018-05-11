import React from "react"
import PropTypes from "prop-types"
class AdminControl extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article-admin-cntrl">
          <block>
            <a href={this.props.id + "/edit"}> test </a>
          </block>
        </div>
      </React.Fragment>
    );
  }
}

AdminControl.propTypes = {
  articleId: PropTypes.integer
};
export default AdminControl
