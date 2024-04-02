import * as yup from 'yup';

export const editProfile = yup.object().shape({
  name: yup.string().required('common.schemas.required'),
  gender: yup.string().required('common.schemas.required'),
  birthday: yup.string().required('common.schemas.required'),
  phone: yup.string().required('common.schemas.required'),
  email: yup
    .string()
    .email('common.schemas.email')
    .required('common.schemas.required'),
});
