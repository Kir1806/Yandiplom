import {QUERY_REG, WEEK} from '../constants/Constants';
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
    // отображение заголовка шкалы
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
    // отрисовка гистограммы
    _drawGraph() {

        graphTextArray.forEach((element, index) => {
            element.textContent = this.daysObj[`day${index}`];
            if(element.textContent.includes('Вс')) element.style.color = 'red';
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
    // подсчет количества запросов
    _queryCount() {
        
        const res = {};
        let reg;
        let match, count;
        
        for(let i = 0; i < WEEK; i++) {
            reg = new RegExp(this.daysObj[`day${i}`], 'gi');
            count = 0;
            
            //console.log(this.dataStorage);
           

            this.dataStorage.forEach((element) => {
                //console.log(dataStorage);
                const dateTime = new Date(element.publishedAt);
                
                const utsDate = new Date(dateTime.getTime() + dateTime.getTimezoneOffset() * 60000);
                //console.log(utsDate);
                const day = this.date.convertDate(utsDate);
                

                match = reg.test(day);
                reg.lastIndex = 0;
                //console.log(match);

                if(match) {
                    
                    let matchQuery = QUERY_REG.test(element.title);
                    QUERY_REG.lastIndex = 0;
                    let matchQueryDescription = QUERY_REG.test(element.description);
                    QUERY_REG.lastIndex = 0;
                    //console.log(QUERY_REG);
                    //console.log(matchQueryDescription + ' 2');
                    //console.log(element.description + ' 3');

                    if(matchQuery) count++;
                    if(matchQueryDescription) count++;
                    

                }
                
            });
            res[`day${i}`] = count;
            
        }

        return res;
    }
}