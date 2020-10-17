// event listener for submit button
document.getElementById("submit-btn").addEventListener('click', function(){
    let url = document.getElementById("url-input").value;
    if (isUrlValid(url)){
        console.log("inside post");
        var req = new XMLHttpRequest();
        var reqUrl = "/create-url";
        req.open("POST", reqUrl, true);
        var date = new Date().toLocaleString();
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify({"url":url, "date": date}));
        req.onreadystatechange = function (){
            if (req.readyState == 4 && req.status == "200"){
                document.getElementById("url-input").value = "";
                document.getElementById("output-link").href = req.responseText;
                document.getElementById("output-link").innerHTML = req.responseText;
            }
        }
    }
});

// client-side check if url is valid
function isUrlValid(url){
    try {
        new URL(url);
    } catch (_) {
        console.log("URL is not valid!");
        return false;
    }
    return true;
}