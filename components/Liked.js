import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import SimpleModal from './SimpleModal';

const Liked = () => {
    const [isModalVisible, setisModalVisible] = useState(false);
    const [chooseData, setchooseData] = useState();

    const changeModalVisible = (bool) => {
        setisModalVisible(bool);
    }

    const setData = (data) => {
        setchooseData(data);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                {chooseData}
            </Text>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => changeModalVisible(true)}
            >
                <Text style={styles.text}>Open Modal</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={() => changeModalVisible(false)}
            >
                <SimpleModal 
                    changeModalVisible={changeModalVisible}
                    setData={setData}
                />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    touchableOpacity: {
        backgroundColor: 'orange',
        paddingHorizontal: 50,
        borderRadius: 5,
    },
    text: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Liked;