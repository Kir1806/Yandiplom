import '../pages/index.css';
import {bigBlueSearchButton, moreCardsButton, mainContentMore, searchInput} from './components/DOMelements'

import NewsAPI from './modules/NewsAPI';
import NewsCard from './components/NewsCard';
import Dates from './components/Dates';
import DataStorage from './modules/DataStorage';
import Utils from './utils/Utils';


const newsCard = new NewsCard;

const dates = () => new Dates;
const apiDate = dates().getApiDate();
const newsApi = new NewsAPI(apiDate);

const dataStorage = new DataStorage;
const utils = new Utils;

const readNews = () => {
    if(dataStorage.checkLocalStorage()) {
        newsCard.outputVisible();
        if(dataStorage.loadFromStorage().length > 3) {
            newsCard.outputVisible(mainContentMore, 'flex');
        } else {
            newsCard.outputVisible(mainContentMore, 'none');
        }
    newsCard.addCard(dataStorage.loadFromStorage(), dates());
    }
}

if(dataStorage.checkLocalStorage()) {
    newsCard.outputInitial();
    readNews();
}

//newsCard.createCard();
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
    let request = searchInput.value;
    if(!!request) {
        utils.removal();
        newsCard.outputInitial;
        newsApi.getNews(request)
            .then (data => {
                if(data.length === 0) {
                    newsCard.outputEmpty();
                } else {
                    dataStorage.saveQuery(request);// записываем запрос в локальный диск
                    dataStorage.saveInStorage(data);// записываем ответ в локальный диск
                    readNews();
                }
    //console.log(data)  
})
.catch(error => {
    console.log(`Ошибка ввода данных - ${error}`);
})
    }


});

moreCardsButton.addEventListener('click', () => console.log(11));
