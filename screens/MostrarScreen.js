import { View, Text, Button, ScrollView } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import styles from "./styles/MostrarStyle";
import React, { useState, useEffect } from "react";
import { getUsers } from "../apiService";

const MostrarScreen = ({ route, navigation }) => {
    const [actionSuccess, setActionSuccess] = useState(false);
    const [usersList, setUsersList] = useState([]);
    const [refreshId, setRefreshId] = useState(0); // Nuevo estado para la actualización

    console.log("Users List in MostrarScreen:", usersList); // Verifica aquí

    const cargarListaUsuarios = async () => {
        try {
            const response = await getUsers();
            setUsersList([...response]);
        } catch (error) {
            console.error("Error al obtener la lista de usuarios:", error);
        }
    };

    useEffect(() => {
        // Cargar la lista de usuarios cuando la pantalla se monta
        cargarListaUsuarios();
    }, [refreshId]); // Agrega refreshId como dependencia

    useEffect(() => {
        // Cargar la lista de usuarios nuevamente si hay una acción exitosa
        if (route.params?.actionSuccess) {
            cargarListaUsuarios();
            setActionSuccess(false); // Restablecer el indicador
            setRefreshId((prevId) => prevId + 1); // Incrementa el identificador de actualización

        }
    }, [actionSuccess, route.params?.actionSuccess]);

    const goEliminarScreen = async (id) => {
        navigation.navigate('EliminarScreen', { id: id });
    }
    const goModificarScreen = async (id, username) => {
        navigation.navigate('ModificarScreen', { id: id, username: username });
    }

    const tableHead = ['Username', 'Email', 'Acciones'];
    const tableData = usersList.map((user, index) => [
        user.username,
        user.email,
        (
            <View style={{ flexDirection: 'column' }}>
                <Button title="Modificar" onPress={() => goModificarScreen(user.id, user.username)} />
                <Button title="Eliminar" onPress={() => goEliminarScreen(user.id)} />
            </View>
        ),
    ]);


    if (!usersList || usersList.length === 0) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>Lista de Usuarios</Text>
                <Text style={styles.productName}>No hay usuarios para mostrar</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Lista de Usuarios</Text>
            <ScrollView style={{ flex: 1, width: '90%' }}>
                <Table style={{ flex: 1 }} borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows
                        data={tableData}
                        style={styles.head}
                        textStyle={styles.text}
                        renderRow={(rowData, index) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                <Text style={styles.text}>{rowData[0]}</Text>
                                <Text style={styles.text}>{rowData[1]}</Text>
                                <View style={{ flexDirection: 'column' }}>
                                    {rowData[2]} {/* Botones */}
                                </View>
                            </View>
                        )}
                    />
                </Table>
            </ScrollView>
        </View>
    );
};
export default MostrarScreen;