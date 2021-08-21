export function getCookie(key) {
    let cookie = localStorage.getItem(key);
    cookie.split(":")
    return cookie.split(":")[0];
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

export function getRole(key) {
    let cookie = localStorage.getItem(key)
    let arr = cookie.split(":");
    arr = arr.reverse();
    return arr[0]
}