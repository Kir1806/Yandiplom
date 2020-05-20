import '../pages/index.css';
import {bigBlueSearchButton, moreCardsButton, mainContentMore, searchInput} from './components/DOMelements'

import NewsAPI from './modules/NewsAPI';
import NewsCard from './components/NewsCard';
import Date from './components/Date';
import DataStorage from './modules/DataStorage';


const newsCard = new NewsCard;

const date = () => new Date;
const apiDate = date().getApiDate();
const newsApi = new NewsAPI(apiDate);

const dataStorage = new DataStorage;

newsCard.createCard();
//newsCard.createCard();
//console.log(newsCard.createCard());
/*
newsApi.getNews()
.then (data => {
    console.log(data);
})
.catch(error => {
    console.log(`Ошибка ввода данных - ${error}`);
});
*/

bigBlueSearchButton.addEventListener('click', () => {    
    
newsApi.getNews(searchInput.value)
.then (data => {
    console.log(data)
   data.forEach(element => {
       console.log(element.url);
       newsCard.createCard(element);
   });
})
.catch(error => {
    console.log(`Ошибка ввода данных - ${error}`);
})
});

moreCardsButton.addEventListener('click', () => console.log(11));
