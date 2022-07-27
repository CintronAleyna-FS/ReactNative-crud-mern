import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, TouchableOpacity, Pressable} from 'react-native';

import ListContainer from './components/ListContainer';
// import Heading from './components/Heading'

import styles from './appStyles'


export default function Dashboard({navigation}) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getProducts();
    }

    return () => {
      ignore = true;
    }
  }, [])
  const getProducts = async () => {
    setLoading(true)
    try {
      await fetch(`https://productcrud-wdv463.herokuapp.com/api/v1/products`)
                .then(res => res.json())
                .then(data => {
                  setProducts(data)
                })
    } catch (error) {
      setError(error.message || "Unexpected Error")
    } finally {
      setLoading(false)
    }
  }
  // Create a new Product
  const createProduct = async (name, price, description) => {
    try {
      await fetch(`https://productcrud-wdv463.herokuapp.com/api/v1/products`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "name": name, 
          "price": price,
          "description": description
        })
      }).then(() => getProducts())
    } catch (error) {
      setError(error.message || "Unexpected Error")
    } finally {
      setLoading(false)
    }
  }

  const handleNameChanges = (text) => {
    setName(text)
  }
  const handlePriceChanges = (text) => {
    setPrice(text)
  }
  const handleDescriptionChanges = (text) => {
    setDescription(text)
  }
  return (
    <SafeAreaView style={styles.dashContainer}>
      <Text style={[styles.largeHeading, styles.golden, styles.padding]}>Tech Store Products</Text>
      <ListContainer data={products} ></ListContainer>
      <View style={styles.formContainer}>
        <TextInput 
         style={styles.inputField} 
          placeholder="Name"
          onChangeText={(text)=> handleNameChanges(text)}
         />
        <TextInput
          style={styles.inputField} 
          placeholder="Price"
          onChangeText={(text)=> handlePriceChanges(text)}
        />
        <TextInput
          style={styles.inputField} 
          placeholder="Description"
          onChangeText={(text)=> handleDescriptionChanges(text)}
        />
        <Pressable style={[styles.btn]} onPress={() => createProduct(name, price, description)}>
          <Text>Update</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}