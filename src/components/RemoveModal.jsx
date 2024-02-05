import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const RemoveModal = ({
    modalVisible,
    cartItems,
    setCartItems,
    setModalVisible,
    itemSelected,
}) => {
    const removeItem = () => {
        const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
        setCartItems(filteredArray);
        setModalVisible(false)
    };

    return (
        <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
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
};

export default RemoveModal;

const styles = StyleSheet.create({
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
});
