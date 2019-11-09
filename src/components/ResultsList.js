import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail results={item}/>;
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

export default ResultsList;              
/* <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={ (item) => {
            return <Text>{item.name}</Text>
        }}
      /> */