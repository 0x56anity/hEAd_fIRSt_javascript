// console.log("%cajax is available", "color: red;");
function AjaxRequest() {
    this.request = null;
    if(window.XMLHttpRequest) {
        try {
            this.request = new XMLHttpRequest();
        }
        catch(e) {
            this.request = null;
        }
    }
    // Now try the ActiveX (IE) version
    else if (window.ActiveXObject) {
        try {
            this.request = new ActiveXObject("Msxml2.XMLHTTP");
            // Try the older ActiveX object for older version of IE
        }
        catch(e) {
            try {
                this.request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e) {
                this.request = null;
            }
        }
    }
}
AjaxRequest.prototype.send = function(type, url, handler, postDataType, postDate) {
    if(this.request != null) {
        // Kill the previous request
        this.request.abort();

        // Tack on a dummy parameter to overridee browser caching
        url += "?dummy=" + new Date().getTime();

        try {
            this.request.onreadystatechange = handler;
            this.request.open(type, url, true); // always asynchronous (true)

            if (type.toLowerCase() == "get") {
                // Send a GET request; no data involved
                this.request.send(null);
            }
            else {
                // Send a POST request; the last argument is data

                this.request.setRequestHeader("Coontent-type", url, postDataType)
                this.request.send(postDate);
            }
        }
        catch(e) {
            alert("Ajax errer communicating with server.\n" + "Details: " + e);
        }
    }
}

// var ajaxReq = new AjaxRequest();






// XMLHttpRequest.prototype.abort = function() {}
// XMLHttpRequest.prototype.open = function() {}
// XMLHttpRequest.prototype.send = function() {}
AjaxRequest.prototype.getReadyState = function() {
  return this.request.readyState;
}

AjaxRequest.prototype.getStatus = function() {
  return this.request.status;
}

AjaxRequest.prototype.getResponseText = function() {
  return this.request.responseText;
}

AjaxRequest.prototype.getResponseXML = function() {
  return this.request.responseXML;
}
