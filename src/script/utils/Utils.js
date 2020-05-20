import {mainContentResult} from '../components/DOMelements';

export default class Utils {
    removal() {
        localStorage.clear();
        while(mainContentResult.firstChild) {
            mainContentResult.firstChild.remove();
        }
    }
}