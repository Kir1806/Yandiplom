import {QUERY_REG} from '../constants/Constants';
import {graphTextArray, graphInfoArray, graphLineArray, tableCaption} from '../components/DOMelements';

export default class Draw {
    constructor(date, dataStorage) {
        this.dataStorage = dataStorage;
        this.date = date;
        this.apiDate = this.date.getApiDate();
        this.daysObj = this.date.getDayweek();
    }

    drawTableGraph() {
        this._tableData();
        this._drawGraph();
    }

    _tableData() {
        const month = this.date.titleTableData(this.apiDate.dayNow);
        const otherMonth = this.date.titleTableData(this.apiDate.searchInterval);
        const reg = new RegExp(otherMonth, 'gi');
        const match = reg.test(month);
        if(match) {
            tableCaption.textContent = `Дата (${month})`;
        } else {
            tableCaption.textContent = `Дата (${otherMonth} - ${month})`;
        }
    }

    _drawGraph() {

        graphTextArray.forEach((element, index) => {
            element.textContent = this.daysObj[`day${index}`];
        });

        graphInfoArray.forEach((element, index) => {
            let count = this._queryCount()[`day${index}`];
            if(count === 0) {
                element.style.color = '#000';
                element.style.fontSize = '16px';
            }
            if(count > 0) graphLineArray[index].style.minWidth = `12px`;
            
            element.textContent = count;
            //console.log(count);
            graphLineArray[index].style.width = `${count}%`;
        });

    }
//
    _queryCount() {
        const week = 7;
        const res = {};
        let reg;
        let match, count;

        for(let i = 0; i < week; i++) {
            reg = new RegExp(this.daysObj[`day${i}`], 'gi');
            count = 0;
           

            this.dataStorage.forEach((element) => {
                //console.log(count + ' count');
                const dateTime = new Date(element.publishedAt);
                
                const utsDate = new Date(dateTime.getTime() + dateTime.getTimezoneOffset() * 60000);
                const day = this.date.convertDate(utsDate);
                

                match = reg.test(day);
                reg.lastIndex = 0;
                //console.log(match);

                if(match) {
                    let matchQuery = QUERY_REG.test(element.title);
                    QUERY_REG.lastIndex = 0;
                    let matchQueryDescription = QUERY_REG.test(element.description);
                    QUERY_REG.lastIndex = 0;
                    //console.log(matchQuery + ' 1');
                    //console.log(matchQueryDescription + ' 2');
                    //console.log(element.description + ' 3');

                    if(matchQuery) count++;
                    if(matchQueryDescription) count++;             

                }
                
            });
            res[`day${i}`] = count;
            
        }

        //console.log(res);
        //console.log(QUERY_REG);
        return res;
    }
}