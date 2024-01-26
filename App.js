import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import Usuario from "./src/components/Usuario";
import cartLogo from "./assets/cart.png";
import { TouchableOpacity } from "react-native-web";

export default function App() {
  /* useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente */
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
        ></TextInput>
        <TouchableOpacity>
          <Text style={{ fontSize: 40 }}>+</Text>
        </TouchableOpacity>

        <Pressable>
          <Text style={{ fontSize: 40 }}>+</Text>
        </Pressable>
      </View>

      <View style={styles.productList}>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
      </View>
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
