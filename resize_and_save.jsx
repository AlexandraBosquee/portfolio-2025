var inputFolder = new Folder("D:/Portfolio-2024/traitement_img/img-resize"); 
var outputFolder = new Folder("D:/Portfolio-2024/traitement_img/img-resize/resized");

if (inputFolder.exists && outputFolder.exists) {
    var sizes = [900, 700, 500, 300];

    var files = inputFolder.getFiles(/\.(jpg|jpeg|png)$/i);

    for (var i = 0; i < files.length; i++) {
        var doc = open(files[i]);

        var originalName = files[i].name.replace(/\.[^\.]+$/, '');

        for (var j = 0; j < sizes.length; j++) {
            var newSize = sizes[j];

            doc.resizeImage(UnitValue(newSize, "px"), undefined, 72, ResampleMethod.BICUBIC);

            var saveFile = new File(outputFolder + "/" + originalName + "-" + newSize + ".jpg");

            var jpegOptions = new JPEGSaveOptions();
            jpegOptions.quality = 10; 

            doc.saveAs(saveFile, jpegOptions, true, Extension.LOWERCASE);
        }

        doc.close(SaveOptions.DONOTSAVECHANGES);
    }
} else {
    alert("Les dossiers spécifiés n'existent pas !");
}

