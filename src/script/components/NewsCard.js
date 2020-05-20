import {bigBlueSearchButton, mainContentResult, mainContent,
   searchInput, preloaderLoad, preloaderEmpty, 
   requestError, linkToAnalytics, moreCardsButton} from '../components/DOMelements'

export default class NewsCard {
    constructor() {
    }

    createCard(element){
        //const container = document.querySelector('.main-content__result');        
        const contentCard = document.createElement("div");
        contentCard.classList.add('main-content-card');
        contentCard.insertAdjacentHTML('beforeend',`
        <a class="card-link" href="">
        <img class="main-content-card__img" src='./images/not-found_v1.png' alt="цветы">
          <div class="main-content-card__text">
            <p class="card-text-data">8 мая,2020</p>
            <div class="card-text-wrapper">
              <h4 class="card-text-wrapper__title">Национальное достояние – парки</h4>
              <p class="card-text-wrapper__content">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала 
              складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к 
              природе.</p>
            </div>
            <p class="card-text-print">Лента.ру</p>
          </div>
          </a>`);
          return contentCard;          
    }

    showElement(elem, style) {
      elem.style.display = style;
    }

    outputInitial() {
      this.showElement(mainContent, 'block');
      this.showElement(linkToAnalytics, 'none');
      this.showElement(requestError, 'none');
      this.showElement(preloaderEmpty, 'none');
      this.showElement(preloaderLoad, 'flex');
      this.showElement(moreCardsButton, 'none');
      searchInput.setAttribute('disabled', true);
      bigBlueSearchButton.setAttribute('style', 'background: #808080;');
    }

    outputError() {
      //this.showElement(mainContent, 'block');
      this.showElement(linkToAnalytics, 'none');//
      this.showElement(requestError, 'flex');//
      this.showElement(preloaderEmpty, 'none');
      this.showElement(preloaderLoad, 'none');//
      this.showElement(moreCardsButton, 'none');//
      searchInput.removeAttribute('disabled');
      bigBlueSearchButton.removeAttribute('style');
      bigBlueSearchButton.removeAttribute('disabled');
    }

    outputEmpty() {
      //this.showElement(mainContent, 'block');
      this.showElement(linkToAnalytics, 'none');//
      this.showElement(requestError, 'none');//
      this.showElement(preloaderEmpty, 'flex');//
      this.showElement(preloaderLoad, 'none');//
      this.showElement(moreCardsButton, 'none');//
      searchInput.removeAttribute('disabled');
      bigBlueSearchButton.removeAttribute('style');
      bigBlueSearchButton.removeAttribute('disabled');
    }

    outputVisible() {
      //this.showElement(mainContent, 'block');
      this.showElement(linkToAnalytics, 'flex');//
      this.showElement(requestError, 'none');//
      this.showElement(preloaderEmpty, 'none');
      this.showElement(preloaderLoad, 'none');//
      //this.showElement(moreCardsButton, 'none');//
      searchInput.removeAttribute('disabled');
      bigBlueSearchButton.removeAttribute('style');
      bigBlueSearchButton.removeAttribute('disabled');
    }

    _noImage() {
      this.noImage = document.createElement('div');
      this.noImage.classList.add('no-image');
      this.message = document.createElement('p');
      this.message.classList.add('no-image__message');
      this.message.textContent = 'Изображения не найдено';
      this.noImage.appendChild(this.message);
      return this.noImage;
    }

    //addCard()


}