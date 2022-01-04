import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const SimpleModal = (props) => {

    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        Sample modal Header
                    </Text>
                    <Text style={styles.text}>
                        Sample modal description
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => closeModal(false, 'Cancel')}
                        style={styles.touchableOpacity}
                    >
                        <Text style={[styles.text, {color: 'blue'}]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => closeModal(false, 'OK')}
                        style={styles.touchableOpacity}
                    >
                        <Text style={[styles.text, {color: 'blue'}]}>OK</Text>
                    </TouchableOpacity>
            </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        height: 150,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    touchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row',
    }
});

export default SimpleModal;