import { Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../appStyles'

export default function ListItem({children}) {
  const navigations = useNavigation();
  return (
    <View>
       <TouchableOpacity  onPress={() => {navigations.navigate('Details')}}> 
          <Text style={styles.lightGolden}>{children}</Text>
       </TouchableOpacity>            
    </View>
  );
}


