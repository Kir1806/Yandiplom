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

    _titleWeek(){
        const titleArray = [];
        let arrMatch;
        let count = 0;
        this.dataStorage.forEach((element, index) => {
            if(element.title != null ) {
                titleArray[index] = element.title;                
            }            
        });
        //console.log(titleArray);
        titleArray.forEach(element => {
            arrMatch = element.match(QUERY_REG);
            //console.log(arrMatch);
            if(arrMatch != null) count = count + arrMatch.length;
        });

        newsTitleCount.textContent = count;
    }

    loadTitle(){
        this._titleRequest();
        this._titleWeek();
    }
    
}