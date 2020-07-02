(function () {

    const request = new XMLHttpRequest();
    request.open('HEAD', window.location, true);

    request.onload = request.onerror = function () {
        const headers = request.getAllResponseHeaders();
        const tab = headers.split("\n").map(function (h) {
            return { "Key": h.split(": ")[0], "Value": h.split(": ")[1] }
        }).filter(function (h) { return h.Value !== undefined; });

        console.group("Request Headers");
        console.log(headers);
        console.table(tab);
        console.groupEnd("Request Headers");
    };

    request.send(null);

})();
