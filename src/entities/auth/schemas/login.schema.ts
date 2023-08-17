import * as yup from 'yup';

const loginSchema = yup.object().shape({
  userName: yup.string().required('common.schemas.required'),
  password: yup.string().required('common.schemas.required'),
});

export default loginSchema;
