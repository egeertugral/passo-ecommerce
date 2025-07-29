import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface ProductCardProps {
  title: string;
  price: string;
  image: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.heartIcon} onPress={toggleFavorite}>
          <Text style={{ fontSize: 18 }}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>

        <View style={styles.priceTag}>
          <Text style={styles.price}>{price} ₺</Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>A description, description, description.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>İncele</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 6, // daha keskin köşe
    padding: 12,
    elevation: 3,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: -5,
  },
  image: {
    width: 150,
    height: 190, // daha büyük resim
    borderRadius: 6, // daha keskin köşe
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
    
  },
  priceTag: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20, // sağ sol boşluk
    paddingVertical: 6,
    borderRadius: 10, // daha keskin (önceki 20+ idi)
    elevation: 4,
    zIndex: 3,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  title: {
    marginTop: 32, // fiyat etiketi çarpışmasın
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  description: {
    color: '#000',
    fontSize: 12,
    marginTop: 4,
   
  },
  button: {
    marginTop: 10,
    backgroundColor: '#e53935',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
