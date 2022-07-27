import { Text, View, TouchableOpacity} from 'react-native';

import styles from '../appStyles'

export default function ListItem({children}) {
  return (
    <View>
        <Text style={styles.lightGolden}>{children}</Text>
    </View>
  );
}


