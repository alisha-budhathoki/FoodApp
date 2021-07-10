import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PlmGgS1HwPw7si3HNHEh5shnGTem5dkChhGrrNmQGtuBAkZpwO3fymUsb8UgMwS5eRfVzQE_ATOEwOlr4KIwMDkJTsZVzrLx91oNoll4mOuoBGlv8euAjc29GarjYHYx'
    }
});
// yelp.get('/search')