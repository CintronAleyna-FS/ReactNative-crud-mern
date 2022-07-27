import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListItem from './ListItem'
import style from '../appStyles'

export default function ListContainer({data}) {
  const navigations = useNavigation();
  const renderItem = ({ item }) => ( 
    <TouchableOpacity  onPress={() => {navigations.navigate('Details', {
        productId: item._id
      })
    }}> 
        <ListItem>{item.name}</ListItem>
    </TouchableOpacity>

  );

  return (
    <FlatList 
        styles={style.padding}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
  );
}
