//-------------------------------------------------------------
export const GIT_API_URL = 'https://api.github.com/repos/Kir1806/Yandiplom/commits';
export const ERROR = 0;
//-------------------------------------------------------------
export const NEWS_API_KEY = '5c59dbd9bd45417fa07b855d78659c53';
export const NEWS_API_URL = 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?';//https://cors-anywhere.herokuapp.com/
export const NEWS_API_PAGES = 100;
export const NEWS_API_COUNTRY = 'ru';

export const NUMBER_CARDS = 3;
//--------------------------------------------------------------
const NOW = new Date();
export const DAY_NOW = new Date(NOW.getTime() + NOW.getTimezoneOffset() * 60000);
export const SEARCH_INTERVAL = new Date(DAY_NOW.getFullYear(), DAY_NOW.getMonth(), DAY_NOW.getDate());
SEARCH_INTERVAL.setDate(SEARCH_INTERVAL.getDate() - 6);

export const MONTHS_FOR_CARD = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
export const WEEK = 7;
//--------------------------------------------------------------
export const CHECK_XSS = ['<', '>', '(', ')', ';', '=', '/', '.'];
export const KILL_SPACE = /\s+/g;
export const PLACEHOLDER_MESSAGE = 'Недопустимые символы';
//--------------------------------------------------------------
//localStorage.clear();
//console.log(localStorage);
export const QUERY = JSON.parse(localStorage.getItem('query'));
export const QUERY_REG = new RegExp(QUERY, 'gi');

export const MONTHS_TITLE = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
export const DAYS_TITLE = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];