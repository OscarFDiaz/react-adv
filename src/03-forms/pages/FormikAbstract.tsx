import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string().email('Formato de correo incorrecto').required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['IT-Jr'], 'Opción no permitida')
            .required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label={'Primer nombre'} name={'firstName'} placeholder="Oscar" />
            <MyTextInput
              label={'Segundo nombre'}
              name={'lastName'}
              placeholder="Francisco"
            />
            <MyTextInput
              label={'Correo'}
              name={'email'}
              placeholder="correo@corre.com"
              type="email"
            />

            <MySelect name="jobType" label={'Job Type'}>
              <option value="">Escoge una opción</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="IT-Sr">IT Sr</option>
              <option value="IT-Jr">IT Jr</option>
            </MySelect>

            <MyCheckbox label={'Términos y condiciones'} name={'terms'} />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
