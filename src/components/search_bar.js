import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}>
            </TextInput>
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#cccccc',
        height: 50,
        // opacity: 0.2,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 18,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});
export default SearchBar;