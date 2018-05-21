//设置社团申请，提交按钮事件
$(document).on("click", ".apply-community-submit", function () {
    var $communityName = $("#apply-community-name");
    var $communityType = $("#apply-community-type");
    var $communityCollege = $("#apply-community-college");
    var $promoterName = $("#apply-community-promoter-name");
    var $promoterTel = $("#apply-community-promoter-tel");
    var $promoterEmail = $("#apply-community-promoter-email");
    var $tutorName = $("#apply-community-tutor-name");
    var $tutorTel = $("#apply-community-tutor-tel");
    var $communityPurpose = $("#apply-community-purpose");
    var $communityDetail = $("#apply-community-detail");
    var $promoterDetail = $("#apply-community-promoter-detail");
    var $tutorDetail = $("#apply-community-tutor-detail");
    var $communityRegulation = $("#apply-community-regulation");
    var submitFlag = 1;
    //非空验证
    var $values=$("#apply-community-right input[type!=file]");
    var $selects=$("#apply-community-right select");
    for(var i=0;i<$selects.length;i++){
        $values.push($($selects.get(i)));
    }
    for(var i=0;i<$values.length;i++){
        var $value=$($values.get(i));
        if(!$value.val()){
            $value.next().text("*不能为空").addClass("emptyWarn");
            submitFlag=0;
        }else{
            $value.next().text("").removeClass("emptyWarn");
        }
    }
    //手机号非法验证
    var regTel=/^(1\d{10})$/;
    if(!regTel.test($promoterTel.val())){
        $promoterTel.next().text("*格式不正确").addClass("emptyWarn");
        submitFlag=0;
    }
    if(!regTel.test($tutorTel.val())){
        $tutorTel.next().text("*格式不正确").addClass("emptyWarn");
        submitFlag=0;
    }
    //邮箱非法性验证
    var regEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regEmail.test($promoterEmail.val())){
        $promoterEmail.next().text("*格式不正确").addClass("emptyWarn");
    }
    if(!submitFlag) {
        return;
    }
    //进行提交操作
    var params = new FormData();
    params.append("name", $communityName.val());
    params.append("type", $communityType.val());
    params.append("collegeId", $communityCollege.val());
    params.append("purpose", $communityPurpose.val());
    params.append("promoterName", $promoterName.val());
    params.append("promoterTel", $promoterTel.val());
    params.append("promoterEmail", $promoterEmail.val());
    params.append("tutorName", $tutorName.val());
    params.append("tutorTel", $tutorTel.val());
    params.append("communityDetail", $communityDetail.get(0).files[0]);
    params.append("promoterDetail", $promoterDetail.get(0).files[0]);
    params.append("tutorDetail", $tutorDetail.get(0).files[0]);
    params.append("regulation", $communityRegulation.get(0).files[0]);
    $.ajax({
        "async":true,
        "crossDomain":true,
        xhrFields:{
            withCredentials:true
        },
        "url":COMMONPATH+"myCommunity/community",
        "method":"POST",
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": params,
        "dataType":"json"
    }).then(
        function(data){
            console.log("返回状态："+data.status);
            alert("提交成功");
        },
        function(error){
            console.log(error);
        }
    );
});
