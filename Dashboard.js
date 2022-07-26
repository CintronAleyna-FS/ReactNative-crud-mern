import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

import ListContainer from './components/ListContainer';
// import Heading from './components/Heading'

import styles from './appStyles'


export default function Dashboard({navigation}) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  
  
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: ''
  })
  
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
  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  }

  const handleInputChanges = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <SafeAreaView style={styles.dashContainer}>
      <Text style={[styles.largeHeading, styles.golden]}>Tech Store Products</Text>
      <ListContainer data={products} ></ListContainer>
      <View style={styles.formContainer}>
        <TextInput 
         style={styles.inputField} 
          placeholder="Name"
         />
        <TextInput
          style={styles.inputField} 
          secureTextEntry={true}
          placeholder="Price"
        />
        <TextInput
          style={styles.inputField} 
          secureTextEntry={true}
          placeholder="Description"
        />
        <Button title="create" onPress={() => createProduct("aley", "2", "aleylaeyey")}></Button>
      </View>
    </SafeAreaView>
  );
}