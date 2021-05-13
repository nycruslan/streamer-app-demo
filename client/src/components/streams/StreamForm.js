import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, TextField } from '@material-ui/core';

class StreamForm extends React.Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <TextField
                    required
                    error={meta.touched && input.value.length === 0}
                    style={{ marginBottom: '1rem' }}
                    fullWidth
                    variant='outlined'
                    {...input}
                    label={label}
                />
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label='Enter Title' />
                    <Field
                        name='description'
                        component={this.renderInput}
                        label='Enter Description'
                    />
                    <Button type='submit' variant='contained' color='primary'>
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'streamForm',
})(StreamForm);
