import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  renderInput = ({ input, label, id, meta }) => {
    // console.log(meta);
    const errorClassName = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={errorClassName}>
        <label htmlFor={id}>{label}</label>
        <input {...input} id={id} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field 
          id="title" 
          name="title" 
          label="Title" 
          component={this.renderInput} 
        />
        <Field 
          id="description" 
          name="description" 
          label="Description" 
          component={this.renderInput} 
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must define a title'
  }

  if (!formValues.description) {
    errors.description = 'You must define a description'
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);