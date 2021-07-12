export function getCookie(key) {
   localStorage.getItem(key)
}

export function setCookie(key, value) {
    localStorage.setItem(key, value)
}

export function deleteCookie(key) {
    localStorage.removeItem(key)
}

export function checkCookie(key) {
    let cookie =localStorage.getItem(key)
    return cookie !== "";
}