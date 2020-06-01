import {NUMBER_CARDS} from '../constants/Constants'

import {bigBlueSearchButton, mainContentResult, mainContent,
   searchInput, preloaderLoad, preloaderEmpty, 
   requestError, linkToAnalytics, mainContentMore} from '../components/DOMelements'

export default class NewsCard {
    constructor() {
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
      this.showElement(mainContentMore, 'none');
      searchInput.setAttribute('disabled', true);
      bigBlueSearchButton.setAttribute('disabled', true);
      bigBlueSearchButton.setAttribute('style', 'background: #808080;');
    }

    outputError() {//+
      this.showElement(mainContent, 'block');
      this.showElement(preloaderLoad, 'none');//
      this.showElement(linkToAnalytics, 'none');//
      this.showElement(mainContentMore, 'none');//
      this.showElement(requestError, 'flex');//
      //this.showElement(preloaderEmpty, 'none');
      
      
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
      this.showElement(mainContentMore, 'none');//
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

    _checkImage(url) {
      const promise = new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.classList.add('main-content-card__img');
        img.setAttribute('alt', 'новость');
        img.setAttribute('src', url);
        img.onerror = reject;
        img.onload = function() {
          resolve(img);
        };
      });
      return promise;
    }

    _createMarkup() {
      this.cardLink = document.createElement('a');
      this.mainContentCard = document.createElement('div');
      this.mainContentCardText = document.createElement('div');
      this.cardWrapper = document.createElement('div');
      this.cardTextData = document.createElement('p');
      this.cardTextWrapper = document.createElement('div');
      this.cardTextWrapperTitle = document.createElement('h4');
      this.cardTextWrapperContent = document.createElement('p');
      this.cardTextPrint = document.createElement('p');

      this.cardLink.classList.add('card-link');
      this.mainContentCard.classList.add('main-content-card');
      this.mainContentCardText.classList.add('main-content-card__text');
      this.cardWrapper.classList.add('card-wrapper');
      this.cardTextData.classList.add('card-text-data');
      this.cardTextWrapper.classList.add('card-text-wrapper');
      this.cardTextWrapperTitle.classList.add('card-text-wrapper__title');
      this.cardTextWrapperContent.classList.add('card-text-wrapper__content');
      this.cardTextPrint.classList.add('card-text-print');//---

      this.cardLink.appendChild(this.mainContentCard);
      this.mainContentCard.appendChild(this.mainContentCardText);
      this.mainContentCardText.appendChild(this.cardWrapper);
      this.cardWrapper.appendChild(this.cardTextData);
      this.cardWrapper.appendChild(this.cardTextWrapper);
      this.mainContentCardText.appendChild(this.cardTextPrint);
      this.cardTextWrapper.appendChild(this.cardTextWrapperTitle);
      this.cardTextWrapper.appendChild(this.cardTextWrapperContent);
    }

    _createCardBlock(content, date) {
      this._createMarkup();
      this.cardLink.setAttribute('href', content.url);
      this.cardTextData.textContent = date.dateForCards(content.publishedAt);
      this.cardTextWrapperTitle.textContent = content.title;
      this.cardTextWrapperContent.textContent = content.description;
      this.cardTextPrint.textContent = content.source.name;
      mainContentResult.appendChild(this.cardLink);
    }



    _createCard(content, date){
      this._checkImage(content.urlToImage)
      .then((img) => {
        this._createCardBlock(content, date);
        this.mainContentCard.insertBefore(img, this.mainContentCard.firstChild);
      })
      .catch((error) => {
        this._createCardBlock(content, date);
        this.mainContentCard.insertBefore(this._noImage(), this.mainContentCard.firstChild);
      });

    }

    addCard(dataStorage, date) {
      this.posInStart = 0;
      const lastQuery = JSON.parse(localStorage.getItem('query'));
      if(lastQuery) {
        searchInput.value = lastQuery;
      }
      if(dataStorage.length > NUMBER_CARDS ) {
        for(let i =0; i < NUMBER_CARDS; i++) {
          this._createCard(dataStorage[i], date);
        }
      } else {
        dataStorage.forEach((element) => {
          this._createCard(element, date);
        });
      }
    }


    _hiddenMoreButton() {
      mainContentMore.style.display = 'none';
    }

    moreCards(dataStorage, date) {
      this.posInStart = this.posInStart + NUMBER_CARDS;
      for(let i = 0; i < NUMBER_CARDS; i++) {
        if(i + this.posInStart >= dataStorage.length) {
          this._hiddenMoreButton();
        } else {
          this._createCard(dataStorage[i + this.posInStart], date);
          if(i + 1 + this.posInStart >= dataStorage.length) {
            this._hiddenMoreButton();
          }
        }
      }
    }


}