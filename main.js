// 글쓰기
function addSummernote(selector) {
    localStorage.setItem("summernoteSelector", selector);
    $(selector).summernote({
        toolbar: [
            // [groupName, [list of button]]
            ['Insert', ['picture', 'link', 'video', 'table', 'hr']],
            ['Font', ['fontname', 'fontsize', 'color', 'forecolor', 'backcolor', 'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear',]],
            ['Paragraph', ['style', 'ol', 'ul', 'paragraph', 'height']],
            ['Misc', ['codeview', 'undo', 'redo', 'help']]
        ],
        callbacks: {
            onImageUpload: function (image) {
                uploadSummerImage(image[0]);
            },
            onFocus: function () {
                localStorage.setItem("summernoteSelector", selector);
            }
        }
    });
}

/**
 * 이미지 업로드
 */
function uploadSummerImage(image) {
    // console.log("---- uploadSummerImage");
    var selector = localStorage.getItem("summernoteSelector");
    // console.log(selector);

    var data = new FormData();
    data.append("file", image);

    $.ajax({
        url: "/admin/board/addpostimage",
        cache: false,
        contentType: false,
        processData: false,
        data: data,
        type: "post",
        success: function (url) {
            // console.log("---- function 1");
            result = JSON.parse(url);
            // console.log(result.result);
            if (result.result == "OK") {
                // console.log("---- function 2");
                var image = $('<img>').attr('src', result.ref_path);
                $(selector).summernote("insertNode", image[0]);
            }
            // console.log("---- function 3");
        },
        error: function (data) {
            console.log(data);
        }
    });
}