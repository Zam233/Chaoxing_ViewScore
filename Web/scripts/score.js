function score() {
    var origin = document.getElementById("text").value;
    var place = origin.indexOf("?");
    var arrge = origin.slice(place + 1);
    arrge = arrge.split("&");
    var classid = arrge[1]
    classid = classid.split("=");
    var courseid = arrge[0]
    var cpi = arrge[3]
    var enc = arrge[4]
    enc = enc.split("=")
    var post_data = "classId=" + classid[1] + "&" + courseid + "&ut=t" + "&pageSize=50&sw=&pageNum=1&fid=0&sortType=1&order=score&test=0&isSimple=0&openc=" + enc[1];
    console.log(post_data)
    $.ajax({
        url: "http://127.0.0.1:19730",
        type: 'POST',
        data: post_data,
        success: function(data) {
            console.log = "data";
            var re = new RegExp("{ ", "g");
            var result = data.replace(re, "");
            document.getElementById("result").innerHTML = result;
        }
    });
};