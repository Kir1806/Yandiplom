import '../pages/index.css';
import {bigBlueSearchButton, moreCardsButton, mainContentMore, searchInput} from './components/DOMelements'

import NewsAPI from './modules/NewsAPI';
import NewsCard from './components/NewsCard';
import Dates from './components/Dates';
import DataStorage from './modules/DataStorage';
import Utils from './utils/Utils';
import CheckRequest from './utils/CheckRequest';


const newsCard = new NewsCard;

const dates = () => new Dates;
const apiDate = dates().getApiDate();
const newsApi = new NewsAPI(apiDate);

const dataStorage = new DataStorage;
const utils = new Utils;
const checkRequest = new CheckRequest;

//newsCard.outputError();
//utils.removal();

const readNews = () => {
    if(dataStorage.checkLocalStorage()) {
        newsCard.outputInitial();
        if(dataStorage.loadFromStorage().length > 3) {
            newsCard.showElement(mainContentMore, 'flex');
        } else {
            newsCard.showElement(mainContentMore, 'none');
        }
    newsCard.addCard(dataStorage.loadFromStorage(), dates());
    }
}

if(dataStorage.checkLocalStorage()) {
    newsCard.outputInitial();
    readNews();
}

bigBlueSearchButton.addEventListener('click', () => {
    //let request = searchInput.value;
    let request = checkRequest.validate();
    if(request !=0) {
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
})
.catch(error => {
    newsCard.outputError();
    console.log(`Ошибка ввода данных - ${error}`);
})
    }
});

moreCardsButton.addEventListener('click', () => {
    newsCard.moreCards(dataStorage.loadFromStorage(), dates());
    console.log('button');
});
