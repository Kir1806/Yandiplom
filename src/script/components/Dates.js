import {DAY_NOW, SEARCH_INTERVAL, MONTHS_FOR_CARD, MONTHS_TITLE, DAYS_TITLE} from '../constants/Constants';

export default class Dates {

    getApiDate() {
        return {
            dayNow: `${DAY_NOW.getFullYear()}-${DAY_NOW.getMonth() + 1}-${DAY_NOW.getDate()}`,
            searchInterval: `${SEARCH_INTERVAL.getFullYear}-${SEARCH_INTERVAL.getMonth() + 1}-${SEARCH_INTERVAL.getDate()}`
        }
    }

    dateForCards(date) {
        //console.log(date);
        const newDate = new Date(date);
        //console.log(newDate);
        const interminDate = new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000);
        const cardDate = interminDate.getDate() + ' ' + MONTHS_FOR_CARD[interminDate.getMonth()] + ', ' + interminDate.getFullYear();
        return cardDate;
    }

    titleTableData(date) {
        const newDate = new Date(date);
        const interminDate = new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000); 
        const titleMonth = MONTHS_TITLE[interminDate.getMonth()];
        return titleMonth;
    }

    convertDate(date) {
        return date.getDate() + ', ' + DAYS_TITLE[date.getDay()];
    }

    getDayweek() {
        const search = SEARCH_INTERVAL;
        const res = {};
        
        for( let i = 0; i < 7; i++) {
            search.setDate(search.getDate() + i);
            let day = this.convertDate(search);
            search.setDate(search.getDate() - i);
            res[`day${i}`] = day;
        } 
        //console.log(res);//правильно
        return res;
    }
}