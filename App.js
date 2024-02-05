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
} from "react-native";
import cartLogo from "./assets/cart.png";
import trashLogo from "./assets/bote-de-basura(1).png";
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

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

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
      <View style={styles.header}>
        <Text style={styles.header}>TASKS</Text>
        {/* <Image style={styles.image} source={cartLogo}></Image> */}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          onChangeText={handleInputChange}
          value={inputValue}
        ></TextInput>
        <Pressable onPress={addItem}>
          <Text style={styles.buttons}>+</Text>
        </Pressable>
      </View>

      <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{ width: 400, flexDirection: "row" }}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20, color: "red" }}>
                <Image source={trashLogo} style={styles.trashImage} alt="Delete Task"></Image>
                </Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d0fef5",
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    paddingVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#44344f'
  },
  image: {
    width: 50,
    height: 50,
  },
  trashImage: {
    width: 20,
    height: 20,
    color: 'red',
  },
  buttons: {
    color: '#44344f',
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 10,
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
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "90%",
  },
  inputContainer: {
    flexDirection: "row",
  },
});
