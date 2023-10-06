import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <h1>RegisterFormikPage</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, '3 caracteres o más')
            .max(15, 'Debe ser menor de 15 caracteres')
            .required('Requerido'),
          email: Yup.string().email('Revise el formato del correo').required('Requerido'),
          password1: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Contraseñas no coinciden')
            .required('Requerido'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label={'Nombre'} name={'name'} placeholder="Oscar" />
            <MyTextInput
              label={'Email'}
              name={'email'}
              type="email"
              placeholder="correo@coreo"
            />
            <MyTextInput
              label={'Password'}
              name={'password1'}
              type="password"
              placeholder="*******"
            />
            <MyTextInput
              label={'Repetir password'}
              name={'password2'}
              type="password"
              placeholder="*******"
            />
            <button type="submit">Create</button>
            <button type="submit" onClick={handleReset}>
              Resetear datos
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
