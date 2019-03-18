import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
  // constructor(props) {
    // Inherit React.Component's constructor. Need to do everytime we extend React.Component
    // super(props);
    
    // Init state. This is the only time we do direct assignmet to this.state;
    // this.state = { 
    //   lat: null,
    //   errorMessage: ''
    // };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // Browser geoloation api
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // Helper render method (not react default)
  renderContent() {
    // Error and no state: show error
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    // No error but has lat: show lat
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // No error and no lat: show loading
    return <LoadingSpinner message="Please accept location request..." />;
  }

  // React requirement to use render() in a class
  render() {
    return (
      <div className="common element">
        {this.renderContent()}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));