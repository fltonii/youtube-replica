import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: ''};
  }

  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ input: event.target.value })}
          value={this.state.input}
        />
      </div>
    );
  }
}
