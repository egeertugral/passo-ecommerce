
import { Pressable, View,Text, Modal, TextInput } from "react-native";
import { BottomSheetType } from "./type";
import { BottomSheetStyle } from "./style";
import { Button } from "../../atoms/button/button";
import { useState } from "react";


export const BottomSheet: React.FC<BottomSheetType>=(props) =>{

      const [minPrice, setMinPrice] = useState('');
      const [maxPrice, setMaxPrice] = useState('');
      const [isFilterActive, setIsFilterActive] = useState(false);
      const [showError, setShowError] = useState(false);
    
      const handleFilter = () => {
        if (!minPrice && !maxPrice) {
          setShowError(true);
          return;
        }
    
    
        setIsFilterActive(true);
        setShowError(false);
        props.onClose();

      };
        console.log(props.visibility)

      const handleClearFilter = () => {
        setMinPrice('');
        setMaxPrice('');
        setIsFilterActive(false);
        setShowError(false);
      };
    return (
        <Modal
                visible={props.visibility}
                animationType="slide"
                transparent
                onRequestClose={props.onClose}
              >
                <View style={BottomSheetStyle.modalOverlay}>
                  <View style={BottomSheetStyle.modalContent}>
                    <Text style={BottomSheetStyle.modalTitle}>Filtrele</Text>
        
                    <TextInput
                      style={BottomSheetStyle.modalInput}
                      placeholder="En Düşük Fiyat"
                      keyboardType="numeric"
                      value={minPrice}
                      onChangeText={setMinPrice}
                    />
                    <TextInput
                      style={BottomSheetStyle.modalInput}
                      placeholder="En Yüksek Fiyat"
                      keyboardType="numeric"
                      value={maxPrice}
                      onChangeText={setMaxPrice}
                    />
        
                    {showError && (
                      <Text style={BottomSheetStyle.errorText}>❗ En Az Bir Filtreleme Yapmalısınız</Text>
                    )}
        
                    
                    <View style={BottomSheetStyle.modalButtons}>
                      {isFilterActive ? (
                        <Pressable style={BottomSheetStyle.cancelButton} onPress={handleClearFilter}>
                          <Text style={BottomSheetStyle.cancelButtonText}>Temizle</Text>
                        </Pressable>
                      ) : (
        
        
                        <Button
                          style={BottomSheetStyle.cancelButton}
                          onPress={() => {
                            setShowError(false);
                            props.onClose();
                          }}
                          title='Vazgeç'
                          titleStyle={BottomSheetStyle.cancelButtonText}
                        >
                         
                        </Button>
                      )}
        
               <Button
                          style={BottomSheetStyle.filterButton}
                          title="Filtrele"
                          titleStyle={BottomSheetStyle.filterButtonText}
                          onPress={handleFilter}
                        />
                    </View>
                  </View>
                </View>
              </Modal>
    )
}