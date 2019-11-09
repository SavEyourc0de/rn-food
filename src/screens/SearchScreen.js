import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    const termHandler = (term) => {
        return setTerm(term);
    };

    const filterByPrice = (price) => {
        return results.filter(results => {
            results.price === price ;
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={termHandler}
                onSubmit={() => searchApi(term)}
            />
        
        <Text>We have found {results.length} results</Text>
        {errMessage ? <Text>{errMessage}</Text> : null}

        <ResultsList results={filterByPrice('₱')} title = "Cost Effective"/>
        <ResultsList results={filterByPrice('₱₱')} title = "Bit Pricer"/>
        <ResultsList results={filterByPrice('₱₱₱')} title = "Big Spender!"/>

        </View>
    );
}

const styles = StyleSheet.create({});
export default SearchScreen;