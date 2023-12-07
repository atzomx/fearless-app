import { useLayoutEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = () => {
  const [visible, setVisible] = useState(Keyboard.isVisible());

  useLayoutEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      setVisible(false);
    });

    Keyboard.addListener('keyboardDidShow', () => {
      setVisible(true);
    });
    return () => {
      Keyboard.removeAllListeners('keyboardWillHide');
      Keyboard.removeAllListeners('keyboardWillShow');
    };
  }, []);
  return visible;
};

export default useKeyboard;
