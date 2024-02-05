import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
  // TouchableOpacity,
  // Modal,
} from "react-native";
// import Usuario from "./src/components/Usuario";
import cartLogo from "./assets/cart.png";
import { useState } from "react";
import RemoveModal from "./src/components/RemoveModal";

const DATA = [
  {
    name: "Remera",
    id: 1,
  },
  {
    name: "Pantalón",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
];

export default function App() {
  /* useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente */

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleAddCounter = () => setCounter(counter + 1);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };

  // console.log({counter});
  /* console.warn('This is a warning');
  console.error('This component is deprecated');
   */
  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    //
    setCartItems([...cartItems, newItem]);
  };

  /* const removeItem = () => {
    const filteredArray = cartItems.filter((item)=> item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false)
  }
 */
  /*   const RemoveModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose
      >
        <View style={styles.modalContainer}>
          <Text>Do you want to delete this product?</Text>
          <Pressable onPress={removeItem}>
            <Text>OK</Text>
          </Pressable>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Cancel</Text>
          </Pressable>
        </View>
      </Modal>
    );
  }; */

  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <RemoveModal
      modalVisible={modalVisible}
      cartItems={cartItems}
      setCartItems={setCartItems}
      setModalVisible={setModalVisible}
      itemSelected={itemSelected}
      ></RemoveModal>
      <View
        style={styles.header}>
        <Text>MI CARRITO</Text>
        {/* <Image style={{width: 50, height: 50}} source={{uri: "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png"}}></Image> */}
        <Image style={styles.image} source={cartLogo}></Image>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese un producto"
          onChangeText={handleInputChange}
          value={inputValue}
        ></TextInput>
        {/* <TouchableOpacity>
          <Text style={{ fontSize: 40 }}>+</Text>
        </TouchableOpacity> */}

        <Pressable onPress={addItem}>
          <Text style={{ fontSize: 40 }}>+</Text>
        </Pressable>
      </View>

      <View style={styles.productList}>
        {/* {DATA.map((item)=> (
          <View key={item.id}>
            <Text style={styles.product}>{item.name}</Text>
          </View>
        ))} */}
        {/* <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={{ width: 400 }}>
              <Text style={styles.product}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList> */}

        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{ width: 400, flexDirection: "row" }}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20, color: "red" }}>Delete❌</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>

      {/* <Pressable onPress={()=> setCounter(counter + 1)}> */}

      {/* <Pressable onPress={handleAddCounter}>
        <Text style={{ fontSize: 20 }}>{counter}</Text>
      </Pressable>
      <Text>Valor del input: 56:54 {inputValue}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#feaafe",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
  },
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row'
  }
});
