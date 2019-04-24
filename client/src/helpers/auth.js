import jwtDecode from 'jwt-decode';

export const ACCESS_TOKEN_KEY = 'rand32ar5fd4f4hlk4sdf8hg63jc5ghj64k6ghk6t';


export const isAuthenticated = () => {
    const { accessToken } = getTokens();

    try {
        jwtDecode(accessToken);
        return true;
    } catch (e) {
        removeTokens();
        return false;
    }
};

export const getTokens = () => ({
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY)
});

export const setToken = token => {
    const { accessToken } = token;
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

export const removeTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};
