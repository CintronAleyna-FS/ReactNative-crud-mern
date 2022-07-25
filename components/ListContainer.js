import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from './ListItem'

export default function ListContainer({data}) {
  const renderItem = ({ item }) => (
    <ListItem>{item.name}</ListItem>
  );

  return (
    <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
  );
}
