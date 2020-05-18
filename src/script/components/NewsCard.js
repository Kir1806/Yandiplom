import {mainContentResult} from '../components/DOMelements'

export default class NewsCard {
    constructor() {
    }
    createCard(){
        //const container = document.querySelector('.main-content__result');        
        const contentCard = document.createElement("div");
        contentCard.classList.add('main-content-card');
        contentCard.insertAdjacentHTML('beforeend',`
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
          </div>`);
          return mainContentResult.appendChild(contentCard);          
    }
}