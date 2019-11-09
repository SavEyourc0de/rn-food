import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({ results }) => {
    return (
        <View style={styles.viewDetail}>
            <Image style={styles.image} source={{uri: results.image_url}}/>
            <Text style={styles.title}>{results.name}</Text>
            <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
            <Text>{results.location.address1}, {results.location.city}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 3,
        margin: 3
    },
    title: {
        fontWeight: 'bold',
    },
    viewDetail : {
        marginHorizontal: 6
    }
});
export default ResultsDetail;