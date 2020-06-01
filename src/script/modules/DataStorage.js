export default class DataStorage {
    
    saveInStorage(dataArray) {
        localStorage.setItem('news', JSON.stringify(dataArray));
    }

    loadFromStorage() {
        return JSON.parse(localStorage.getItem('news'));
    }

    saveQuery(textQuery) {
        localStorage.setItem('query', JSON.stringify(textQuery));
    }

    checkLocalStorage() {
        for (let key in localStorage) {
            if(key.includes('news')) return true;
        }
    }
}