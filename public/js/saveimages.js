$(document).ready(function () {
    $("#addphoto").on("click", function () {
        var files = document.getElementById('photoupload').files;
        let fullFileName = files[0].name
        let getFileExtension = fullFileName.split(".")
        let fileExtension = getFileExtension[1]
        let imageType;
        switch (fileExtension) {
            case "gif":
                imageType = "image/gif"
                break;
            case "jpeg":
                imageType = "image/jpeg"
                break;
            case "jpg":
                imageType = "image/jpg"
                break;
            case "png":
                imageType = "image/png"
                break;
            case "tiff":
                imageType = "image/tiff"
                break;
            default:
                alert("Choose an image file")
        }
        if (!files.length) {
            return alert('Please choose a file to upload first.');
        }
        var bucket = new AWS.S3({ params: { Bucket: 'whizimages', ContentType: imageType } });
        var file = files[0];
        var fileName = file.name;
        var photoKey = fileName;
        bucket.upload({
            Key: photoKey,
            Body: file,
            ACL: 'public-read'
        }, function (err, data) {
            if (err) {
                return alert('There was an error uploading your photo: ', err.message);
            }
            alert('Successfully uploaded photo.');
        });

        // add file path to DB
        let filePath = "https://s3.amazonaws.com/whizimages/" + fullFileName.replace(/\s/g,'+')
        
       

    })
})


