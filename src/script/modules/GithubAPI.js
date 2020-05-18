import {GIT_URL} from '../constants/Constants';

export default class GithubAPI {
    getCommits() {
        return fetch(GIT_URL)
        .then(result => {
            if (result.ok) {
                return result.json();
            }
        })
        .then(data => {
            return data;
        })
    }
}