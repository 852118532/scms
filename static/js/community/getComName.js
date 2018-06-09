function getComName() {
    $.ajax({
        "async": true,
            "crossDomain": true,
            xhrFields: {
                withCredentials: true
        },

        "url": COMMONPATH + "myCommunity/communitys?action=QueryAuditCommunity&type=&college=&status=4&name=&pageSize=1000",
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                var myData = data.data.list;
                var trs1 = "";
                var trs2 = "";
                var trs3 = "";
                var trs4 = "";
                var trs5 = "";
                for (var i = 0; i < myData.length; i++) {
                    singleData = myData[i];
                    if (singleData.typeName == "学术型"){
                        trs1 += " ";
                        trs1 += singleData.name;
                    }else if(singleData.typeName == "社会公益型"){
                        trs2 += " ";
                        trs2 += singleData.name;
                    }else if(singleData.typeName == "文体娱乐型"){
                        trs3 += " ";
                        trs3 += singleData.name;
                    }else if(singleData.typeName == "文体艺术型"){
                        trs4 += " ";
                        trs4 += singleData.name;
                    }else{
                        trs5 += " ";
                        trs5 += singleData.name;
                    }
                    $('#st1').text(trs1);
                    $('#st2').text(trs2);
                    $('#st3').text(trs3);
                    $('#st4').text(trs4);
                    $('#st5').text(trs5);
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
};