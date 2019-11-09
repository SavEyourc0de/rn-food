import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const constantLocation = 'Dumaguete City';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    const termHandler = (term) => {
        return setTerm(term);
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={termHandler}
                onSubmit={() => searchApi(term)}
            />
        
        <Text>We have found {results.length} results</Text>
        {errMessage ? <Text>{errMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({});
export default SearchScreen;