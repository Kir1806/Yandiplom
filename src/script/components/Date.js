import {DAY_NOW, SEARCH_INTERVAL} from '../constants/Constants';

export default class Date {

    getApiDate() {
        return {
            dayNow: `${DAY_NOW.getFullYear()}-${DAY_NOW.getMonth() + 1}-${DAY_NOW.getDate()}`,
            searchInterval: `${SEARCH_INTERVAL.getFullYear}-${SEARCH_INTERVAL.getMonth() + 1}-${SEARCH_INTERVAL.getDate()}`
        }
    }

    dateForCards() {

    }

}