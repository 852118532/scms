function searchCommunity(pageIndex,comtype,collegeId,comName) {
    if (!pageIndex) {
        pageIndex = 1;
    }
    var comtype=$('input:radio:checked').val();
    var collegeId = $('#organization').val();
    var comName = $('#comname').val();
    console.log($('input:radio:checked').val());
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        //"url": COMMONPATH + "myCommunity/communitys?action=QueryApplyCommunity&name=" + criteria + "&pageSize=10&pageIndex=" + pageIndex,
        "url": COMMONPATH + "myCommunity/communitys?action=QueryAuditCommunity&type=" + comtype + "&college=" + collegeId + "&status=4&name=" + comName + "&pageSize=10&pageIndex="+pageIndex,
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                $(".bb").remove();
                var myData = data.data.list;
                var trs = "";
                for (var i = 0; i < myData.length; i++) {
                    singleData = myData[i];
                    trs += "<tr class = \"bb\">"
                        + "<td>" + singleData.name + "</td>"
                        + "<td>" + singleData.typeName + "</td>"
                        + "<td>" + singleData.collegeName+ "</td>"
                        + "<td>" + singleData.createTime+ "</td>";
                    if(myData.communityDetail!=="" && myData.communityDetail!==null){
                        trs += "<td><a style='color:blue' href="+COMMONPATH+"myCommunity/downloadCommuntiyDetail/"+singleData.id+">下载</a></td>>";
                    }else{
                        trs += "<td>无</td>";
                    }
                    trs += "<td><a class=\"globalLoginBtn\">申请</a></td>";
                    trs += "</tr>";
                    $('#stxx').append(trs);
                    trs = "";
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

//集成分页的查询
function showCoumunityWithPages() {
    var comtype=$('input:radio:checked').val();
    var collegeId = $('#organization').val();
    var comName = $('#comname').val();
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        //"url": COMMONPATH + "myCommunity/communitys?action=QueryApplyCommunity&name=" + criteria + "&pageSize=10&pageIndex=1",
        "url": COMMONPATH + "myCommunity/communitys?action=QueryAuditCommunity&type=" + comtype + "&college=" + collegeId + "&status=4&name=" + comName + "&pageSize=10&pageIndex=1",
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                createPage(data.data.pageCount);
            } else {
                alert(data.message);
            }
        },
        function (error) {
            console.log(error);
        }
    );
}

//社团申请状态，查询按钮点击事件
$(document).on("click", "#aa", function () {
    showCoumunityWithPages();
});

//分页插件的使用
function createPage(pageCount) {
    $.jqPaginator('#pagination1', {
        totalPages: pageCount,
        visiblePages: 5,
        currentPage: 1,
        first: '<li class="prev" style=\"display:inline-block;width=10px;\"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev" style=\"display:inline-block\"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next" style=\"display:inline-block\"><a href="javascript:;">下一页</a></li>',
        last: '<li class="prev" style=\"display:inline-block\"><a href="javascript:;">末页</a></li>',
        page: '<li class="page" style=\"display:inline-block\"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (pageIndex, type) {
            $("#pageIndex").text("当前第【" + pageIndex + "】页");
            searchCommunity(pageIndex);
        }
    });
}
