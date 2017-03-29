function writeCookie(name, value, days) {
    var expires = "";
    if(days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 *60 *1000));
        expires = ";expires=" + date.toGMTString(); //toGMTString();
    }

    document.cookie = name + "=" + value + expires + ";path=/";
}

function readCookie(name) {
    //Find the specified cookie and return its value
    var searchName = name + "=";
    var cookies = document.cookie.split(';'); //cookie 清單使用分號區隔各cookie
    for(var i=0 ; i<cookies.length ; i++) {
        var c = cookies[i];

        while (c.charAt(0) == '\00')  //因為是要找空白字元 不是'null' 
            c = c.substring(1, c.length);
        
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    /**
     * 
     * var d = new Date();
    d.setTime(d.getTime() + (60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "variable" + "=" + 878787 + ";" + expires + ";path=/";

     */

    return null;
}

function eraseCookie (name) {
    writeCookie(name, "", -1);
}

/**
 *  <!DOCTYPE html>會讓body形成一個最小的大小
 * 簡單來說就是會影響body的形狀、型態，在宣告為html文件後
 * document.body.clientHeith 會有直接的不同。
 * 
 **/