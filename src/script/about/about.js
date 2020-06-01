
import '../../pages/about.css';
import {ERROR} from '../constants/Constants';

import {swiperWrapper} from '../components/DOMelements';

import Slider from '../components/Swiper/swiper';

import GithubAPI from '../modules/GithubAPI'
import Dates from '../components/Dates';
import CommitCards from '../components/CommitCards';

const gitHubApi = new GithubAPI;
const dates = () => new Dates;
const commitCards = new CommitCards(dates());
const slider = new Slider;
const maxCount = 20;

gitHubApi.getCommits()
.then(data => {
    
    let countCards = data.length;
    if(countCards === 0) {
        swiperWrapper.appendChild(commitCards.commitCardError('Коммиты не найдены'));
        slider.activate(countCards);
    } else {
        if (countCards > maxCount) countCards = maxCount;
        for (let i = 0; i != countCards; i++) {
            swiperWrapper.appendChild(commitCards.createCommitCard(data[i]));
        }
        slider.activate(countCards);
    }    
})
.catch(error => {
    swiperWrapper.appendChild(commitCards.commitCardError('Ошибка получения данных, обновите страницу'));
    slider.activate(ERROR);
    console.log(`Ошибка ввода данных - ${error}`);
});
