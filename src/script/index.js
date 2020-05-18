import '../pages/index.css';

import NewsAPI from './modules/NewsAPI';

const newsApi = new NewsAPI;

newsApi.sendRequestNews()
.then (data => {
    console.log(data);
})
.catch(error => {
    console.log(`Ошибка ввода данных - ${error}`);
});

