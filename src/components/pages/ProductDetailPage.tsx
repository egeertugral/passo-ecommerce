import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import type {RootStackParamList} from '../../navigation/type';
import {RouteProp, useRoute} from '@react-navigation/native';
type ProductDetailRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetailPage'
>;

const ProductDetailPage = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const product = route.params.product;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: product.images[0]}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price} ₺</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProductDetailPage;
