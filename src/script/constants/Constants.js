
export const GIT_API_URL = 'https://api.github.com/repos/Kir1806/Yandiplom/commits';

export const NEWS_API_KEY = '5c59dbd9bd45417fa07b855d78659c53';
export const NEWS_API_URL = 'http://newsapi.org/v2/everything?';
export const NEWS_API_PAGES = 100;
export const NEWS_API_COUNTRY = 'ru';

const NOW = new Date();
export const DAY_NOW = new Date(NOW.getTime() + NOW.getTimezoneOffset() * 60000);
export const SEARCH_INTERVAL = new Date(DAY_NOW.getFullYear(), DAY_NOW.getMonth(), DAY_NOW.getDate());
SEARCH_INTERVAL.setDate(SEARCH_INTERVAL.getDate() - 6);

export const MONTHS_FOR_CARD = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
