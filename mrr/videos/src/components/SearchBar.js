import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
    
    // TODO: Make sure we make callback from parent component
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input 
              type="text" 
              name="search" 
              id="search" 
              onChange={this.onInputChange}
              value={this.state.term} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;