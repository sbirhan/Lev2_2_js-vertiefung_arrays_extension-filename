function work(){
    var str = TextInputBox.value;
    var fileName = "";
    var extension = "";
    var splitStr1 = [];
    var fileArray = [];
    var extensionArray = [];

    if (str.search(",") == -1) {
        fileName = str.slice(0, str.search(/\./g));
        extension = str.slice(str.search(/\./g) + 1,);
        document.getElementById("firstPart").innerHTML = "First Part : " + fileName;
        document.getElementById("secondPart").innerHTML = "Second Part : " + extension;
    }
    else {
        splitStr1 = str.split(",");
        for (let i=0; i < splitStr1.length; i++){
            fileName = splitStr1[i].slice(0, splitStr1[i].search(/\./g));
            extension = splitStr1[i].slice(splitStr1[i].search(/\./g) + 1,);
            fileArray.push(fileName);
            extensionArray.push(extension);
        }
        document.getElementById("firstPart").innerHTML = "First Part : " + fileArray;
        document.getElementById("secondPart").innerHTML = "Second Part : " + extensionArray;
    }
}