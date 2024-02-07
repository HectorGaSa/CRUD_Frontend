import { Button, View, Text, Image, SafeAreaView } from "react-native";
import styles from "./styles/HomeStyle";
import portada from '../images/home.png'

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={portada} style={styles.portada} />

                <Text style={styles.title}> Aplicacion para alta usuarios</Text>

                <Text style={styles.title}>Home Screen</Text>
                <Button
                    title="Mostrar Usuarios"
                    onPress={() => navigation.navigate('MostrarScreen')}
                />

            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;