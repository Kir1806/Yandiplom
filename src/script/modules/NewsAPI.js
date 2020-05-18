import { NEWS_API_KEY, NEWS_API_URL, NEWS_API_PAGES, NEWS_API_COUNTRY } from '../constants/Constants';

export default class NewsAPI {
    /*constructor() {
    }*/
    sendRequestNews () {
        return fetch(`${NEWS_API_URL}q=bitcoin&laungage=${NEWS_API_COUNTRY}&apiKey=${NEWS_API_KEY}`)
        .then(result => {
            if(result.ok) {
                return result.json();
            }
        })
        .then(data => {
            return data;
        })       
    }
}