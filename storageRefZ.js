function getRefZ() {
    if ( localStorage.getItem('refZ') ) {
        return localStorage.getItem('refZ');
    }
    return 0;
}

let query = location.search.slice(1);
let parts = query.split('&');
let data = {};
parts.forEach(function (part) {
    var keyValue = part.split('=');
    var key = keyValue[0];
    var value = keyValue[1];
    data[key] = value;
});
if (data.refZ) {
    localStorage.setItem("refZ", data.refZ)
}

//console.log(getRefZ());