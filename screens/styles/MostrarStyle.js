import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        margin: 10,
        borderWidth: 1, // Agrega un borde al contenedor si lo deseas
        borderColor: '#c8e1ff',
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        color: 'black',
        backgroundColor: "white"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        color: 'black',
        textAlign: 'center',
    },
    head: { backgroundColor: 'white', color: 'black' },
    body: { backgroundColor: 'white', color: 'black'},
    text: { margin: 6, backgroundColor: 'white', color: 'black' },

});
export default styles;