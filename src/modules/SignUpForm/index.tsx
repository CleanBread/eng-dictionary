import { withFormik } from 'formik';
import React from 'react';

import { SignUpForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface SignUpFormProps {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default () => {
  const FormWithFormik = withFormik<{}, SignUpFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'SignUpForm',
  })(SignUpForm);
  return <FormWithFormik />;
};
