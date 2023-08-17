import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const useNavigate = () => useNavigation<StackNavigationProp<any>>();

export default useNavigate;
