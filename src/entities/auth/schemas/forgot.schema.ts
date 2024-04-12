import * as yup from 'yup';

const forgotSchema = yup.object().shape({
  userName: yup.string().required('common.schemas.required'),
});

export default forgotSchema;
