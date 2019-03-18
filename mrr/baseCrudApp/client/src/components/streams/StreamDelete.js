import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
  
  componentDidMount() {
    // console.log(this.props);
    
    this.props.fetchStream(this.props.match.params.id);
  }

  dismissBehaviour = () => history.push('/');

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <div onClick={() => this.props.deleteStream(id)} className="ui approve negative button">Delete</div>
        <div onClick={this.dismissBehaviour} className="ui cancel button">Cancel</div>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream: '${this.props.stream.title}'?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        description={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.dismissBehaviour}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] } 
}

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete);