function getActives1(){
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },

        "url": COMMONPATH + "myCommunity/activities?action=QueryActivity&status=2&pageSize=4&pageIndex=1",
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                var myData = data.data.list;
                var trs1 = "";
                var trs2 = "";
                var trs3 = "";
                for (var i = 0; i < myData.length; i++) {
                    singleData = myData[i];
                    trs1 = singleData.theme;
                    trs2 = singleData.location;
                    trs3 = singleData.startTime;
                    if (i == 0){
                        $("#bt1").text(trs1);
                        $("#dd1").text(trs2);
                        $("#sj1").text(trs3);
                    }else if (i == 1){
                        $("#bt2").text(trs1);
                        $("#dd2").text(trs2);
                        $("#sj2").text(trs3);
                    }else if (i == 2){
                        $("#bt3").text(trs1);
                        $("#dd3").text(trs2);
                        $("#sj3").text(trs3);
                    } else {
                        $("#bt4").text(trs1);
                        $("#dd4").text(trs2);
                        $("#sj4").text(trs3);
                    };
                }
                //控制左边的高度
                var height = $(".apply-community-right").outerHeight() + "px";
                $(".apply-community-left").outerHeight(height);
            } else {
                alert(data.message);
            }
        },
        function (error) {
            console.log(error);
        }
    );
}
function getActives2(){
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },

        "url": COMMONPATH + "myCommunity/activities?action=QueryActivity&status=2&pageSize=4&pageIndex=2",
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                var myData = data.data.list;
                var trs1 = "";
                var trs2 = "";
                var trs3 = "";
                for (var i = 0; i < myData.length; i++) {
                    singleData = myData[i];
                    trs1 = singleData.theme;
                    trs2 = singleData.location;
                    trs3 = singleData.startTime;
                    if (i == 0){
                        $("#bt5").text(trs1);
                        $("#dd5").text(trs2);
                        $("#sj5").text(trs3);
                    }else if (i == 1){
                        $("#bt6").text(trs1);
                        $("#dd6").text(trs2);
                        $("#sj6").text(trs3);
                    }else if (i == 2){
                        $("#bt7").text(trs1);
                        $("#dd7").text(trs2);
                        $("#sj7").text(trs3);
                    } else {
                        $("#bt8").text(trs1);
                        $("#dd8").text(trs2);
                        $("#sj8").text(trs3);
                    };
                }
                //控制左边的高度
                var height = $(".apply-community-right").outerHeight() + "px";
                $(".apply-community-left").outerHeight(height);
            } else {
                alert(data.message);
            }
        },
        function (error) {
            console.log(error);
        }
    );
}
function getActives3(){
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },

        "url": COMMONPATH + "myCommunity/activities?action=QueryActivity&status=2&pageSize=4&pageIndex=3",
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                var myData = data.data.list;
                var trs1 = "";
                var trs2 = "";
                var trs3 = "";
                for (var i = 0; i < myData.length; i++) {
                    singleData = myData[i];
                    trs1 = singleData.theme;
                    trs2 = singleData.location;
                    trs3 = singleData.startTime;
                    if (i == 0){
                        $("#bt9").text(trs1);
                        $("#dd9").text(trs2);
                        $("#sj9").text(trs3);
                    }else if (i == 1){
                        $("#bt10").text(trs1);
                        $("#dd10").text(trs2);
                        $("#sj10").text(trs3);
                    }else if (i == 2){
                        $("#bt11").text(trs1);
                        $("#dd11").text(trs2);
                        $("#sj11").text(trs3);
                    } else {
                        $("#bt12").text(trs1);
                        $("#dd12").text(trs2);
                        $("#sj12").text(trs3);
                    };
                }
                //控制左边的高度
                var height = $(".apply-community-right").outerHeight() + "px";
                $(".apply-community-left").outerHeight(height);
            } else {
                alert(data.message);
            }
        },
        function (error) {
            console.log(error);
        }
    );
}