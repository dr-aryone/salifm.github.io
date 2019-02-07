function genr(len) {
    var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var alen = arr.length;
    var pass = "";
    for(var i=0; i<len; i++) {
        pass += arr[Math.floor(Math.random()*alen)];
    }
    return pass;
}
window.onload = function() {
    var len = prompt("length:");
    len = parseInt(len);
    if(len > 7 && len < 33) {
        document.getElementById("password").textContent = genr(len);
    }
    else {
        document.getElementById("password").textContent = "The length must be between 8 and 32 !";
    }
}