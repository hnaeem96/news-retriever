import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>
          404 <small>Page Not Found :(</small>
        </h1>
        <h3>Back to homepage</h3>
      </div>
    );
  }
}

export default NotFound;
