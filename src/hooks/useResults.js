import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

const constantLocation = 'Dumaguete City';

export default () => {
    const [results, setResults]= useState([]);
    const [errMessage, setErrMessage] = useState('');

    const searchApi = async searchTerm => {
        try{
            const response = await yelp.get('/search', {
                params: {
                limit: 50,
                term: searchTerm, // term: term,
                location: constantLocation
                }
            });
            setResults(response.data.businesses);
        }catch (err){
            console.log(err);
            setErrMessage('something went wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errMessage];
};