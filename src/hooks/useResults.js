import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async (searchTerm) => {
        console.log('Hi There');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');


        }
        catch (error) {
            setErrorMessage('Something went wrong');
        }
    };

    //call search api when componet is first rendered
    // BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');
    }, []);
return [searchApi, results, errorMessage];
};