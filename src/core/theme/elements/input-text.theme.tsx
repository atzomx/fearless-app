import type { InputTextBase } from '../types';

const InputText: InputTextBase = {
  container: {
    minHeight: '56px',
    borderRadius: '12px',
    backgroundColor: 'rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  label: {
    padding: '0px 10px',
    marginTop: 5,
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },
  adorment: {
    width: '6px',
  },
  input: {
    padding: '0px 10px',
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
  },
  helper: {
    paddingLeft: '16px',
    fontSize: 10,
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
  },
};

export default InputText;
