import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer UEL5ib8R5DwTrI1sl2ZjMA9Sw0myabNR-Dq3d9qOxaRA71tc2hqu245-GyhEtshc8MPpaa34JgqgJpVedEzrOvdzLpKgnHlNMxRvxU1goMHeZxr4R-tmNGozTazCXXYx'
    }
});