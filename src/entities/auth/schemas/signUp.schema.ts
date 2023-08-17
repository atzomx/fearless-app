import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  name: yup.string().required('common.schemas.required'),
  email: yup.string().email().required('common.schemas.required'),
  password: yup.string().required('common.schemas.required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'common.schemas.password-match')
    .required('common.schemas.required'),
});

export default signUpSchema;

export type TFormSignUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
