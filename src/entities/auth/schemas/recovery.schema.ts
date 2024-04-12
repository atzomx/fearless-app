import * as yup from 'yup';

const recoverySchema = yup.object().shape({
  password: yup.string().required('common.schemas.required'),
  confirmation: yup
    .string()
    .required('common.schemas.required')
    .oneOf([yup.ref('password')], 'common.schemas.password-match'),
});

export default recoverySchema;
