export const validateForm = ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Введите вашу почту';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Некорректный адрес';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Введите ваш пароль';
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = 'Ваш пароль слишком легкий';
      }
    },
    username: (value) => {
      if (!value) {
        errors.username = 'Введите ваше имя';
      }
    },
    confirm_password: (value) => {
      if (!values.password || !values.confirm_password) {
        errors.confirm_password = 'Повторите пароль';
      } else if (values.password !== value) {
        errors.confirm_password = 'Пароли не совпадают';
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export const validateField = (key, touched, errors) => {
  if (touched[key]) {
    if (errors[key]) {
      return 'error';
    } else {
      return 'success';
    }
  } else {
    return '';
  }
};
