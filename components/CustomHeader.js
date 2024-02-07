import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/CustomHeaderStyle';

const CustomHeader = ({ locationHome, navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {!locationHome && (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Icon name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                )}
                <View style={styles.iconButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('ConfiguracionScreen')} style={styles.notificationsButton}>
                        <Icon name="settings" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('MostrarScreen')} style={styles.notificationsButton}>
                        <Icon name="person-circle-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddScreen')} style={styles.notificationsButton}>
                        <Icon name="add-circle-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CustomHeader;
