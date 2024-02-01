import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Usuario from "./src/components/Usuario";
import cartLogo from "./assets/cart.png";
import { useState } from "react";

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
  /* {
    name: "Camisa",
    id: 4,
  },
  {
    name: "Sudadera",
    id: 5,
  },
  {
    name: "Gorra",
    id: 6,
  },
  {
    name: "Camisa",
    id: 7,
  },
  {
    name: "Sudadera",
    id: 8,
  },
  {
    name: "Gorra",
    id: 9,
  },
  {
    name: "Camisa",
    id: 10,
  },
  {
    name: "Sudadera",
    id: 11,
  },
  {
    name: "Camisa",
    id: 12,
  },
  {
    name: "Sudadera",
    id: 13,
  },
  {
    name: "Gorra",
    id: 14,
  },
  {
    name: "Camisa",
    id: 15,
  },
  {
    name: "Sudadera",
    id: 16,
  },
  {
    name: "Camisa",
    id: 17,
  },
  {
    name: "Sudadera",
    id: 18,
  },
  {
    name: "Gorra",
    id: 19,
  },
  {
    name: "Camisa",
    id: 20,
  },
  {
    name: "Sudadera",
    id: 21,
  },
  {
    name: "Camisa",
    id: 22,
  },
  {
    name: "Sudadera",
    id: 23,
  },
  {
    name: "Gorra",
    id: 24,
  },
  {
    name: "Camisa",
    id: 25,
  },
  {
    name: "Sudadera",
    id: 26,
  },
  {
    name: "Camisa",
    id: 27,
  },
  {
    name: "Sudadera",
    id: 28,
  },
  {
    name: "Gorra",
    id: 29,
  },
  {
    name: "Camisa",
    id: 30,
  },
  {
    name: "Sudadera",
    id: 31,
  }, */
];

export default function App() {
  /* useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente */

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddCounter = () => setCounter(counter + 1);

  const handleInputChange = (value) => setInputValue(value);

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    //
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Text>MI CARRITO</Text>
        {/* <Image style={{width: 50, height: 50}} source={{uri: "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png"}}></Image> */}
        <Image style={{ width: 50, height: 50 }} source={cartLogo}></Image>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            width: "90%",
          }}
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
            <View style={{ width: 400 }}>
              <Text style={styles.product}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>

      {/* <Pressable onPress={()=> setCounter(counter + 1)}> */}

      <Pressable onPress={handleAddCounter}>
        <Text style={{ fontSize: 20 }}>{counter}</Text>
      </Pressable>
      <Text>Valor del input: 1:28: {inputValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",
    flex: 1,
    paddingHorizontal: 14,
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
});
