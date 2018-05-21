//查询社团申请信息
function searchCommunity(pageIndex) {
    if (!pageIndex) {
        pageIndex = 1;
    }
    var criteria = $("#apply-community-search-criteria").val();
    var success = "通过";
    var uncheck = "未审核";
    var unsuccess = "驳回";
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        "url": COMMONPATH + "myCommunity/communitys?action=QueryApplyCommunity&name=" + criteria + "&pageSize=10&pageIndex=" + pageIndex,
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                var $table = $("#apply-community-status-table");
                var $removeTrs = $("#apply-community-status-table-head ~ tr");
                $removeTrs.remove();
                console.log();
                var myData = data.data.list;
                var trs = "";
                var singleData;
                var tutorCheck = uncheck;
                var collegeCheck = uncheck;
                var communityCheck = uncheck;
                var universityCheck = uncheck;
                var tutorColor = "";
                var collegeColor = "";
                var communityColor = "";
                var universityColor = "";
                var status = "0";
                for (var i = 0; i < myData.length; i++) {
                    singleData = myData[i];
                    status = parseInt(singleData.status);
                    tutorCheck = (Math.abs(status) == 0 ? uncheck : status == -1 ? unsuccess : success);
                    collegeCheck = (Math.abs(status) < 1 ? uncheck : Math.abs(status) == 1 ? uncheck : status == -2 ? unsuccess : success);
                    communityCheck = (Math.abs(status) < 2 ? uncheck : Math.abs(status) == 2 ? uncheck : status == -3 ? unsuccess : success);
                    universityCheck = (Math.abs(status) < 3 ? uncheck : Math.abs(status) == 3 ? uncheck : status == -4 ? unsuccess : success);
                    tutorColor = (tutorCheck == unsuccess ? "red" : tutorCheck == success ? "green" : "");
                    collegeColor = (collegeCheck == unsuccess ? "red" : collegeCheck == success ? "green" : "");
                    communityColor = (communityCheck == unsuccess ? "red" : communityCheck == success ? "green" : "");
                    universityColor = (universityCheck == unsuccess ? "red" : universityCheck == success ? "green" : "");
                    trs += "<tr>"
                        + "<td class='msg'><a href=\"ComApply_StateDetails.html?comId=" + singleData.id + "\" target=\"_blank\">" + singleData.name + "</a></td>"
                        + "<td class='msg'>" + singleData.promoterName + "</td>"
                        + "<td class='msg'>" + singleData.createTime + "</td>"
                        + "<td class='msg' style='color:" + tutorColor + "'>" + tutorCheck + "</td>"
                        + "<td class='msg' style='color:" + collegeColor + "'>" + collegeCheck + "</td>"
                        + "<td class='msg' style='color:" + communityColor + "'>" + communityCheck + "</td>"
                        + "<td class='msg' style='color:" + universityColor + "'>" + universityCheck + "</td>"
                        + "</tr>";
                    $table.append(trs);
                    trs = "";
                }
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
    var criteria = $("#apply-community-search-criteria").val();
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        "url": COMMONPATH + "myCommunity/communitys?action=QueryApplyCommunity&name=" + criteria + "&pageSize=10&pageIndex=1",
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
$(document).on("click", "#search-apply-status", function () {
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
