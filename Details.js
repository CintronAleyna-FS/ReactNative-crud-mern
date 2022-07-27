import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View } from 'react-native';

import Heading from './components/Heading'

import styles from './appStyles'

export default function Details({route}) {
  const { productId } = route.params;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>Details page</Text>
      <Heading level="3">{values.name}</Heading>
    </SafeAreaView>
  );
}