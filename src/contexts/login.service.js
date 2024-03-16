import store from 'store';

const loggedInKey = 'isLoggedIn';

export class LoginService {
    constructor() {}

    isLoggedIn() {
        return store.get(loggedInKey);
    }

    setIsLoggedIn(val) {
        store.set(loggedInKey, val);
    }
}