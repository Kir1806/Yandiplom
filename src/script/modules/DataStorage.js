export default class DataStorage {
    saveInStorage(dataArray) {
        localStorage.setItem('news', JSON.stringify(dataArray));
    }

    loadFromStorage() {
        return JSON.parse(localStorage.getItem('news'));
    }
}