import { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import styles from "./styles/AddStyle";
import { registerUser } from "../apiService";

const AddScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [usersList, setUsersList] = useState([]);

    const handleRegister = async () => {
        // Handle registration logic here
        try {
            const newUser = { username, password, email };
            const response = await registerUser(newUser);
            console.log('Usuario registrado con éxito:', response);
            setUsersList([...usersList, newUser]);

            setUsername("");
            setPassword("");
            setEmail("");
            navigation.navigate('MostrarScreen', { actionSuccess: true });
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
        }};

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Crear Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888"

                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
}
export default AddScreen;