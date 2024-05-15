import * as yup from 'yup';

export const newDealStepOne = yup.object().shape({
  name: yup.string().required('common.schemas.required'),
  description: yup.string().required('common.schemas.required'),
  brand: yup.string().required('common.schemas.required'),
});
