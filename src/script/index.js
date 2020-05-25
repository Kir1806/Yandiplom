import '../pages/index.css';
import {NUMBER_CARDS} from './constants/Constants';
import {bigBlueSearchButton, moreCardsButton, mainContentMore, searchInput} from './components/DOMelements';

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

let request;
//console.log(request);


//utils.removal();

// чтение результатов запроса
const readNews = () => {
    if(dataStorage.checkLocalStorage()) {
        newsCard.outputVisible();
        if(dataStorage.loadFromStorage().length > NUMBER_CARDS) {
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
// обработка кнопки "Искать"
bigBlueSearchButton.addEventListener('click', () => {
    //let request = searchInput.value;
    
    request = checkRequest.validate();
    //console.log('button zhmyak ' + request);
    if(request !=0) {
        //console.log('button zhmyak ' + request);
        utils.removal();
        newsCard.outputInitial();
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
    newsCard.outputError();//+
    console.log(`Ошибка ввода данных - ${error}`);
})
    }
});
// обработка кнопки "Показать ещё"
moreCardsButton.addEventListener('click', () => {
    newsCard.moreCards(dataStorage.loadFromStorage(), dates());
    //console.log('button zhmyak');//+
});
