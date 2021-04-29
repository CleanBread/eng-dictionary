import React from 'react';
import { withFormik } from 'formik';

import SignInForm from '../component';
import { validateForm } from '../../../utils/validate';

interface SignInFormProps {
  email: string;
  password: string;
}

export default () => {
  const FormWithFormik = withFormik<{}, SignInFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      email: '',
      password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'SignInForm',
  })(SignInForm);
  return <FormWithFormik />;
};
