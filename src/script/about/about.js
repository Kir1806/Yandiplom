
import '../../pages/about.css';

import {Slider} from '../components/Swiper/swiper';
import GithubAPI from '../modules/GithubAPI'

const gitHubApi = new GithubAPI;

gitHubApi.getCommits()
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(`Ошибка ввода данных - ${error}`);

});
