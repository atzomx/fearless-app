import type { InputTextBase } from '../types';

const InputText: InputTextBase = {
  container: {
    minHeight: 64,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#DFDFDF',
  },
  label: {
    padding: '0px 20px',
    marginTop: 5,
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    position: 'absolute',
    zIndex: 10,
  },
  adorment: {
    width: 6,
  },
  input: {
    marginTop: 8,
    padding: '0px 20px',
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Inter-Regular',
  },
  helper: {
    paddingLeft: '20px',
    fontSize: 10,
    fontWeight: 400,
    fontFamily: 'Inter-Regular',
  },
};

export default InputText;
