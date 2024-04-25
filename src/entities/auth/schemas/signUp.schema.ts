import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  name: yup.string().required('common.schemas.required'),
  email: yup
    .string()
    .email('common.schemas.email')
    .required('common.schemas.required'),
  password: yup.string().required('common.schemas.required'),
  confirmation: yup
    .string()
    .required('common.schemas.required')
    .oneOf([yup.ref('password')], 'common.schemas.password-match'),
});

export default signUpSchema;
