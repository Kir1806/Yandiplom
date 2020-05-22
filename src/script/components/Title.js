import {QUERY, QUERY_REG} from '../constants/Constants';
import { tableTitle, newsWeekCount, newsTitleCount } from './DOMelements';

export default class Title {
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }

    _titleRequest() {
        tableTitle.textContent = `Вы спросили: "${QUERY}"`;
        newsWeekCount.textContent = this.dataStorage.length;
    }
//titleWeekCount
    _titleWeek(){
        const titleArray = [];
        let arrMatch;
        let count = 0;
        this.dataStorage.forEach((element, index) => {
            if(element.title != null ) {
                titleArray[index] = element.title;
            }            
        });
        titleArray.forEach(element => {
            arrMatch = element.match(QUERY_REG);
            if(arrMatch != null) count = count + arrMatch.length;
        });

        newsTitleCount.textContent = count;
    }

    loadTitle(){
        this._titleRequest();
        this._titleWeek();
    }
    
}