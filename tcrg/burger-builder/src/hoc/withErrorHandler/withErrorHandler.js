import React, { Component } from 'react';
import Model from '../../components/UI/Model/Model'


const withErrorHandler = ( WrappedComponent, axios ) => {
  return class extends Component {
    state = {
      error: null
    }

    constructor (props) {
      super(props);
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render () {
      return (
        <React.Fragment>
          <Model 
            show={this.state.error}
            hide={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Model>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }
}


export default withErrorHandler;