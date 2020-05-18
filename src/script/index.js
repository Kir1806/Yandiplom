import '../pages/index.css';

import NewsAPI from './modules/NewsAPI';
import NewsCard from './components/NewsCard';

const newsApi = new NewsAPI;
const newsCard = new NewsCard;

newsCard.createCard();
newsCard.createCard();
//console.log(newsCard.createCard());

newsApi.getNews()
.then (data => {
    console.log(data);
})
.catch(error => {
    console.log(`Ошибка ввода данных - ${error}`);
});

