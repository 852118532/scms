//查询社团活动
function searchActive(pageIndex) {
    if (!pageIndex) {
        pageIndex = 1;
    }
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        "url": COMMONPATH + "myCommunity/activities?action=QueryActivity&status=2&pageSize=5&pageIndex=" + pageIndex,
        "method": "GET"
    }).then(
        function (data) {
            if (data.status === "0") {
                var $table = $("#hd");
                $("#hd tr").remove();
                var myData = data.data.list;
                var trs = "";
                var status = "0";
                for (var i = 0; i < myData.length; i++) {
                    singleData = myData[i];
                    status = parseInt(singleData.status);
                    trs += "<tr>"
                        + "<td><a href=\"ComActives.html?ActiveId="+ singleData.id +"\" target=\"_blank\">"+ singleData.theme +"/" + singleData.location + "</a></td>"
                        + "<td align=\"right\">" + singleData.createTime + "</td>"
                        + "</tr>";
                    $table.append(trs);
                    trs = "";
                }
            } else {
                alert(singleData.message);
            }
        },
        function (error) {
            console.log(error);
        }
    );
};

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
            searchActive(pageIndex);
        }
    });
}

//集成分页的查询
function showActiveWithPages() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        xhrFields: {
            withCredentials: true
        },
        "url": COMMONPATH + "myCommunity/activities?action=QueryActivity&status=2&pageSize=5&pageIndex=1",
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