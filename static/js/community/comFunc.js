function getgonggao() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        "url":COMMONPATH+"myCommunity/notices?action=QueryAllNotice&title=&author=&time=&type=1&pageIndex=1&pageSize=4",
        "method": "GET"
    }).then(
        function (data) {
            if (data.status == "0") {
                var myData = data.data.list;
                var trs = "";
                var data;
                $("#gg tr").remove();
                for (var i = 0; i < myData.length; i++) {
                    data = myData[i];
                    trs += "<tr>"
                        + "<td><a href=\"ComNotice.html?noticeId="+ data.id +"\" target=\"_blank\">"+ data.title +"</a></td>"
                        + "<td class='pull-right'>" + data.createTime + "</td>"
                        + "</tr>";
                }
                $("#gg").append(trs);
            } else {
                console.log(data.message);
                layer.msg("不好了，好像出错了呢");
            }
        },
        function (error) {
            console.log(data.error);
            layer.msg("不好了，好像出错了呢");
        }
    );
}

function getxinwen() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        "url":COMMONPATH+"myCommunity/notices?action=QueryAllNotice&title=&author=&time=&type=2&pageIndex=1&pageSize=4",
        "method": "GET"
    }).then(
        function (data) {
            if (data.status == "0") {
                var myData = data.data.list;
                var trs = "";
                var data;
                $("#xw tr").remove();
                for (var i = 0; i < myData.length; i++) {
                    data = myData[i];
                    trs += "<tr>"
                        + "<td><a href=\"ComNotice.html?noticeId="+ data.id +"\" target=\"_blank\">"+ data.title +"</a></td>"
                        //+ "<td><a href=\"./ComNotice.html?noticeId=" + data.id + "' target="_blank">" + data.title + "</a></td>"
                        + "<td class='pull-right'>" + data.createTime + "</td>"
                        + "</tr>";
                }
                $("#xw").append(trs);
            } else {
                console.log(data.message);
                layer.msg("不好了，好像出错了呢");
            }
        },
        function (error) {
            console.log(data.error);
            layer.msg("不好了，好像出错了呢");
        }
    );
}