import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';
import { Link } from 'react-router-dom';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface SignUpFormProps {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

const SignUpForm: React.FC<FormikProps<SignUpFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <>
      <h1 className="sign-form__title">Регистрация</h1>
      <h3 className="sign-form__subtitle">
        Для начала давайте зарегистрироруемся!
      </h3>
      <Form
        name="singUp"
        className="sign-form"
        initialValues={{ remember: true }}
        layout="vertical">
        <Form.Item
          name="username"
          className="sign-form__item"
          validateStatus={validateField('username', touched, errors)}
          help={!touched.username ? false : errors.username}>
          <Input
            id="username"
            className="sign-form__input"
            placeholder="Ваше имя"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
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
        <Form.Item
          name="confirm_password"
          className="sign-form__item"
          validateStatus={validateField('confirm_password', touched, errors)}
          help={!touched.confirm_password ? false : errors.confirm_password}>
          <Input
            id="confirm_password"
            className="sign-form__input"
            placeholder="Повторите пароль"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Button size="lg" position="center" onClick={handleSubmit}>
          Зарегистрироваться
        </Button>
      </Form>
      <Link to="/in" className="sign-form__link">
        У меня уже есть аккаунт
      </Link>
    </>
  );
};

export default SignUpForm;
