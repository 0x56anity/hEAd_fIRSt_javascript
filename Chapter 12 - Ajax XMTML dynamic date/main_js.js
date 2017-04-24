function Blog(body, date, image) {
    this.body = body;
    this.date = date;
    this.image = image;
}

Date.prototype.shortFormat = function() {
    return this.getFullYear() + "/" + (this.getMonth()+1) + "/" + this.getDate();
}

function initForm() {
    document.getElementById("date").value = (new Date()).shortFormat();

}
function addBlogEntry_POST_to() {
    document.getElementById("add").disabled = true;
    document.getElementById("status").innerHTML = "Adding...";

    ajaxReq_Pt.send("POST", "addblogentry.php", handleRequest, "application/x-www-form-urlencoded; charset=UTF-8",
          "date=" + document.getElementById("date").value, + "&body=" + document.getElementById("body").value + 
          "&image=" + document.getElementById("image").value);
}

function addBlogEntry_GET_form() {
    document.getElementById("add").disabled = true;
    document.getElementById("status").innerHTML = "Adding...";

    ajaxReq_Gf.send("GET", )

}

function AjaxRequest() {
    var request = null;
    if(window.XMLHttpRequest) {
        try {
            request = new XMLHttpRequest();
        }
        catch(e) {
            request = null;
        }
    }
    else if(window.ActiveXObject) {
        try {
            request = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch(e) {
            request = new Error('出錯了!~~\nXMLHttpRequest not supported'+e);
        }
    }

}
var ajaxReq_Pt = new AjaxRequest();
var ajaxReq_Gf = new AjaxRequest();

/**
 * TEST
 */

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
};