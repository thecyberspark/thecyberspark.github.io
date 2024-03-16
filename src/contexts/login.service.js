import store from 'store';

const loggedInKey = 'session-cookie-encrypted';

export class LoginService {
    constructor() {}

    isLoggedIn() {
        return store.get(loggedInKey);
    }

    setIsLoggedIn(val) {
        store.set(loggedInKey, val);
    }
}