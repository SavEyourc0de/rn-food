import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

const ShowImage =({navigation}) => {
    const url = navigation.getParam('url')
    return (
        <View>
            <ScrollView horizontal={true} directionalLockEnabled={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} maximumZoomScale={5}>
                <Image style={styles.image} source={{url}}/>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    image: {
        height: 450,
        width: 650,
        borderRadius: 4,
        flex: 1
    },
    scrollImage: {
    }
});
export default ShowImage;