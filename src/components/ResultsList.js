import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity onPress={() => navigation.navigate("ShowResult", {'id': item.id})}>
                <ResultsDetail results={item}/>
              </TouchableOpacity>
            )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  listview: {
      marginHorizontal: 4
  }
});

export default withNavigation(ResultsList);              
/* <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={ (item) => {
            return <Text>{item.name}</Text>
        }}
      /> */