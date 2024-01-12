import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  name: yup.string().required('common.schemas.required'),
  email: yup
    .string()
    .email('common.schemas.email')
    .required('common.schemas.required'),
  password: yup.string().required('common.schemas.required'),
  passwordConfirmation: yup
    .string()
    .required('common.schemas.required')
    .oneOf([yup.ref('password')], 'common.schemas.password-match'),
});

export default signUpSchema;

export type TFormSignUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
