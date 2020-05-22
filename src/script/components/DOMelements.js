// buttons
export const bigBlueSearchButton = document.querySelector('.button-search'); //синяя кнопка поиска
export const moreCardsButton = document.querySelector('.button-more-cards'); //больше карточек поиска

// inputs
export const searchInput = document.querySelector('.search-wrapper__input'); //поле ввода запроса

//errors
export const requestError = document.querySelector('.request-error');

//preloader
export const preloaderLoad = document.querySelector('.preloader-load');
export const preloaderEmpty = document.querySelector('.preloader-empty');

//  block result
export const mainContent = document.querySelector('.main-content'); //общий блок карточек
export const mainContentResult = document.querySelector('.main-content__result'); // контейнер с результатами поиска
export const linkToAnalytics = document.querySelector('.main-header-wrapper'); //ссылка на аналитику
export const mainContentMore = document.querySelector('.main-content__more'); //контейнер с кнопкой больше карточек

//Table
export const tableTitle = document.querySelector('.paper-info__title'); //
export const newsWeekCount = document.querySelector('.news-week-count') //
export const newsTitleCount = document.querySelector('.title-week-count') // запросов всего
export const tableCaption = document.querySelector('.table-caption') //заголовок таблицы
const graphText = document.querySelector('.table-graph__text') //недели
const graphInfo = document.querySelector('.text-line-wrapper__line-info-text') //дни
const graphLine = document.querySelector('.text-line-wrapper') // линии

export const graphTextArray = Array.from(graphText);// null
export const graphInfoArray = Array.from(graphInfo);
export const graphLineArray = Array.from(graphLine);



