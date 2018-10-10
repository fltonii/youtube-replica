import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputchange(term) {
    this.setState({term}, () => this.props.onVideoSearch(this.state.term));
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputchange(event.target.value)}
          value={this.state.input}
        />
      </div>
    );
  }
}
