export function getCookie(key) {
    return localStorage.getItem(key);
}

export function setCookie(key, value) {
    localStorage.setItem(key, value)
    return null;
}

export function deleteCookie(key) {
    localStorage.removeItem(key)
    return null;
}

export function checkCookie(key) {
    let cookie = localStorage.getItem(key)
    return cookie !== null;
}