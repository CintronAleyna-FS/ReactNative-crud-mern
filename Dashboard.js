import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput} from 'react-native';

import ListContainer from './components/ListContainer';
// import Heading from './components/Heading'

import styles from './appStyles'


// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

export default function Dashboard() {
  const [products, setProducts] = useState(null);

  // https://productcrud-wdv463.herokuapp.com/api/v1/products
  fetch(`https://productcrud-wdv463.herokuapp.com/api/v1/products`)
  .then(res => res.json())
  .then ( data => { setProducts(data)} )
  // .then (data => console.log({data}))

  
  // const renderItem = ({ item }) => (
  //   <Item title={item.title} />
  // );
  return (
    <SafeAreaView style={styles.dashContainer}>
      <Text style={[styles.largeHeading, styles.golden]}>Tech Store Products</Text>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
      <ListContainer data={products}></ListContainer>
      <View>
        <TextInput placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      
    </SafeAreaView>
  );
}