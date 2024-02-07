import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, View, Text } from "react-native";
import styles from "./styles/IngresosStyle";
import React, { useState, useEffect } from "react";
import { deleteUser } from "../apiService";


const EliminarScreen = ({ route, navigation }) => {
    const { id } = route.params || { id: "" };
    const handleDelete = async () => {
        try {
            await AsyncStorage.removeItem("username");
            await AsyncStorage.removeItem("password");
            await AsyncStorage.removeItem("email");

            await deleteUser(id);

            console.log("User deleted successfully");

            navigation.navigate('MostrarScreen', { actionSuccess: true });
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Eliminar Usuario" onPress={handleDelete} />
        
        </View>
    );
}
export default EliminarScreen;