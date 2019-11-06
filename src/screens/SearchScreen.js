import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    const termHandler = (term) => {
        return setTerm(term);
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={ termHandler }
                onSubmit={() => console.log('submitted')}
            />
        
        <Text>{term}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
export default SearchScreen;