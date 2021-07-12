export function getCookie(key) {
   localStorage.getItem(key)
    return null;
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
    let cookie =localStorage.getItem(key)
    return cookie !== "";
}