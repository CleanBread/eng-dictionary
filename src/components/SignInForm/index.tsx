import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';
import { Link } from 'react-router-dom';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface SignInFormProps {
  email: string;
  password: string;
}

const SignInForm: React.FC<FormikProps<SignInFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <>
      <h1 className="sign-form__title">Вход</h1>
      <Form
        name="singUp"
        className="sign-form"
        initialValues={{ remember: true }}
        layout="vertical">
        <Form.Item
          name="email"
          className="sign-form__item"
          validateStatus={validateField('email', touched, errors)}
          help={!touched.email ? false : errors.email}>
          <Input
            id="email"
            className="sign-form__input"
            placeholder="Ваша почта"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="sign-form__item"
          validateStatus={validateField('password', touched, errors)}
          help={!touched.password ? false : errors.password}>
          <Input
            id="password"
            className="sign-form__input"
            placeholder="Ваша пароль"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Button size="lg" position="center" onClick={handleSubmit}>
          Войти
        </Button>
      </Form>
      <Link to="/" className="sign-form__link">
        Создать аккаунт
      </Link>
    </>
  );
};

export default SignInForm;
