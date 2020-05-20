import { NEWS_API_KEY, NEWS_API_URL, NEWS_API_PAGES, NEWS_API_COUNTRY } from '../constants/Constants';

export default class NewsAPI {
    constructor(apiDate) {
        this.apiDate = apiDate;
        this.dayNow = this.apiDate.dayNow;
        this.searchInterval = this.apiDate.searchInterval;
    }
    getNews (request) {
        return fetch(`${NEWS_API_URL}q=${request}&laungage=${NEWS_API_COUNTRY}&from=${this.searchInterval}&to=${this.dayNow}&pageSize=${NEWS_API_PAGES}&apiKey=${NEWS_API_KEY}`)
        .then(result => {
            if(result.ok) {
                return result.json();
            }
        })
        .then(data => {
            return data.articles;
        })       
    }
}