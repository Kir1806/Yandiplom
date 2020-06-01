import {KILL_SPACE, CHECK_XSS, PLACEHOLDER_MESSAGE} from '../constants/Constants';
import {searchInput} from '../components/DOMelements';

export default class CheckRequest {

        // защита от XSS и удаление пробелов
    _protectionXss(){
        const test = searchInput.value.trim().split('');
        test.forEach((element, index) => {
            if(CHECK_XSS.includes(element)) test[index] = ' ';
        });
        return test.join('').replace(KILL_SPACE, ' ').trim();
    }
    
    _updatePlaceholder(message) {
        searchInput.value = '';
        searchInput.setAttribute('placeholder', message);
        searchInput.classList.add('placeholder-style');
    }

    validate() {
        if((searchInput.checkValidity()) && (searchInput.value.trim() !== '')) {
            if(this._protectionXss() !== '') {
                return this._protectionXss();
            } else this._updatePlaceholder(PLACEHOLDER_MESSAGE);
        } else this._updatePlaceholder(PLACEHOLDER_MESSAGE);
    }
}