import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput
                autoCapitalize={'none'}
                autoCorrect={false} 
                style={styles.inputStyle} 
                placeholder={'Search'}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e8e8e8',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
        padding: 5
    },
    inputStyle : {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 10
    }
});
export default SearchBar;