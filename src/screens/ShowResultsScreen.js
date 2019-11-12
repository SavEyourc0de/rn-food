import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import yelp from '../api/yelp';

const ShowResultsScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async(id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    };

    useEffect(()=> {
        getResult(id);
    }, []);
    
    if (!result) {
        return null;
    }

    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowImage', {'url': item})}>
                            <Image style={styles.image} source={{uri: item}} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 3,
        margin: 3
    }
});
export default ShowResultsScreen;