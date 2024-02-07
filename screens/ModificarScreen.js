import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, View, Text, TextInput } from "react-native";
import styles from "./styles/AddStyle";
import { useEffect, useState } from "react";
import { updateUser, getUserByUsername } from "../apiService";


const ModificarScreen = ({ route, navigation }) => {
    const { id, Username } = route.params || { id: "", username: "" };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        cargarDatosUsuario();
    }, []);

    const cargarDatosUsuario = async () => {
        try {
            const storedUsername = await AsyncStorage.getItem("username");
            const storedPassword = await AsyncStorage.getItem("password");
            const storedEmail = await AsyncStorage.getItem("email");

            setUsername(storedUsername || "");
            setPassword(storedPassword || "");
            setEmail(storedEmail || "");
        } catch (error) {
            console.error("Error al cargar datos del usuario:", error);
        }
    };

    const handleUpdate = async () => {
        try {
            await AsyncStorage.setItem("username", username);
            await AsyncStorage.setItem("password", password);
            await AsyncStorage.setItem("email", email);

            const userData = await getUserByUsername(username);

            console.log("Username anterior:", userData.username);
            console.log("Password anterior:", userData.password);
            console.log("Email anterior:", userData.email);

            console.log("Username:", username);
            console.log("Password:", password);
            console.log("Email:", email);

            const userDataModified = { username, password, email };

            await updateUser(id, userDataModified);
            console.log('Actualización exitosa');

            navigation.navigate('MostrarScreen', { actionSuccess: true });
        } catch (error) {
            console.error("Error al actualizar datos:", error);
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Modificar usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nuevo nombre de usuario"
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Nueva contraseña"
                placeholderTextColor="#888"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Nuevo correo electrónico"
                keyboardType="email-address"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Guardar cambios" onPress={handleUpdate} />

        </View>
    );
}
export default ModificarScreen;