import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik comp Tutorial</h1>

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
            <label htmlFor="firstName">Primer nombre</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component={'span'} />

            <label htmlFor="lastName">Segundo nombre</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component={'span'} />

            <label htmlFor="email">Correo</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={'span'} />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Escoge una opción</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="IT-Sr">IT Sr</option>
              <option value="IT-Jr">IT Jr</option>
            </Field>
            <ErrorMessage name="jobType" component={'span'} />

            <label>
              <Field name="terms" type="checkbox" />
              Términos y condiciones
            </label>
            <ErrorMessage name="terms" component={'span'} />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
