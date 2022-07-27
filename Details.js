import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View, Button, Pressable, TextInput} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

import Heading from './components/Heading'

import styles from './appStyles'

  
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export default function Details({route}) {
  const { productId } = route.params;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: ''
  })
  

  const navigations = useNavigation();

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getProducts();
    }

    return () => {
      ignore = true;
    }
  }, [])

// GET product by ID
  const getProducts = async () => {
    setLoading(true)
    try {
      await fetch(`https://productcrud-wdv463.herokuapp.com/api/v1/products/${productId}`)
                .then(res => res.json())
                .then(data => {
                  console.log({data})
                  const { name , description, price } = data
                  setValues({name, description, price})
                })
    } catch (error) {
      setError(error.message || "Unexpected Error")
    } finally {
      setLoading(false)
    }
  }

  // Delete product by ID
  const deleteProduct = async () => {
    try {
      await fetch(`https://productcrud-wdv463.herokuapp.com/api/v1/products/${productId}`,{
        method: 'DELETE'
      })
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
      <Text style={[styles.largeHeading, styles.golden, styles.padding]}>{values.name}</Text>
      <Text style={[styles.lightGolden, styles.padding]}>Price: ${values.price}</Text>
      <Text style={[styles.lightGolden, styles.padding]}>Description: {values.description}</Text>
      <Pressable style={[styles.btn, styles.margin]} onPress={() => {deleteProduct(), navigations.dispatch(StackActions.replace('Dashboard'))}}>
        <Text>Delete</Text>
      </Pressable>
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
        <Pressable style={[styles.btn]} onPress={() => updateProduct(name, price, description)}>
          <Text>Update</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}