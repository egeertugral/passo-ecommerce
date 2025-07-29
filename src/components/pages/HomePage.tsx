import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import ProductCard from '../../components/molecules/ProductCard';
import BedRoomImage from '../../assets/odagorsel.jpg';

const products = [
  { id: '1', title: 'Bed Room', price: '19.00', image: BedRoomImage },
  { id: '2', title: 'Child Room', price: '29.00', image: BedRoomImage },
  { id: '3', title: 'Play Room', price: '39.00', image: BedRoomImage },
  { id: '4', title: 'Music Room', price: '49.00', image: BedRoomImage },
];

const cartItemCount = 2;

const HomePage = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showError, setShowError] = useState(false);

  const handleFilter = () => {
    if (!minPrice && !maxPrice) {
      setShowError(true);
      return;
    }

    const filtered = products.filter((product) => {
      const price = parseFloat(product.price);
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      return price >= min && price <= max;
    });

    setFilteredProducts(filtered);
    setIsFilterActive(true);
    setShowError(false);
    setFilterModalVisible(false);
  };

  const handleClearFilter = () => {
    setMinPrice('');
    setMaxPrice('');
    setFilteredProducts(products);
    setIsFilterActive(false);
    setShowError(false);
    setFilterModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider} />

      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.icon}>❤️</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Passo E-Commerce</Text>

        {cartItemCount > 0 ? (
          <TouchableOpacity>
            <View style={styles.cartWrapper}>
              <Text style={styles.icon}>🛒</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItemCount}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} />
        )}
      </View>

      <View style={styles.divider} />

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Ara..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          onPress={() => setFilterModalVisible(true)}
          style={styles.filterIconWrapper}
        >
          <Text style={styles.filterIcon}>⚙️</Text>
          {isFilterActive && (
            <View style={styles.filterBadge}>
              <Text style={styles.filterBadgeText}>•</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
  data={filteredProducts}
  renderItem={({ item }) => (
    <View style={styles.cardWrapper}>
      <ProductCard
        title={item.title}
        price={item.price}
        image={item.image}
      />
    </View>
  )}
  keyExtractor={(item) => item.id}
  numColumns={2}
  contentContainerStyle={{ paddingTop: 8, paddingBottom: 16 }}
  columnWrapperStyle={
    filteredProducts.length === 1
      ? { justifyContent: 'center' }
      : { justifyContent: 'space-between' }
  }
  showsVerticalScrollIndicator={false}
/>

      <Modal
        visible={filterModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filtrele</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="En Düşük Fiyat"
              keyboardType="numeric"
              value={minPrice}
              onChangeText={setMinPrice}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="En Yüksek Fiyat"
              keyboardType="numeric"
              value={maxPrice}
              onChangeText={setMaxPrice}
            />

            {showError && (
              <Text style={styles.errorText}>❗ En Az Bir Filtreleme Yapmalısınız</Text>
            )}

            <View style={styles.modalButtons}>
              {isFilterActive ? (
                <Pressable style={styles.cancelButton} onPress={handleClearFilter}>
                  <Text style={styles.cancelButtonText}>Temizle</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.cancelButton}
                  onPress={() => {
                    setFilterModalVisible(false);
                    setShowError(false);
                  }}
                >
                  <Text style={styles.cancelButtonText}>Vazgeç</Text>
                </Pressable>
              )}

              <Pressable style={styles.filterButton} onPress={handleFilter}>
                <Text style={styles.filterButtonText}>Filtrele</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0eb',
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
    color: 'red',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    flex: 1,
  },
  cartWrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
  },
  searchWrapper: {
    position: 'relative',
    marginTop: 16,
  },
  searchInput: {
    padding: 10,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  filterIconWrapper: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  filterIcon: {
    fontSize: 18,
    color: '#444',
  },
  filterBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterBadgeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 6,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 12,
  },
  cancelButton: {
    paddingVertical: 12,
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 25,
    flex: 1,
  },
  cancelButtonText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filterButton: {
    paddingVertical: 12,
    backgroundColor: 'red',
    borderRadius: 25,
    flex: 1,
  },
  filterButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardWrapper: {
  width: '48%', 
  marginBottom: 12,
},
});

export default HomePage;
