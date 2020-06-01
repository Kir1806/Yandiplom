import {GIT_API_URL} from '../constants/Constants';

export default class GithubAPI {
    getCommits() {
        return fetch(GIT_API_URL)
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