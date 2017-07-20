// Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)
//
// Detect the image files based on the end of the filename which is their format (extension).
// Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.
//
// For example:
// Input: ["imgName.extension", "notAnImg"]
// Output: [["imgName.extension", "imgName", "extension"], null]
//
// So:
// imageFilter(["index.html", "favicon.gif"])
// return [null, ["favicon.gif", "favicon", "gif"]]
//
// !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.

function imageFilter(arr) {
 var answer =[];
 for (var x in arr) {
  var imageArr = arr[x].split('.');
  var image =imageArr[imageArr.length-1].toLowerCase();
    if(image === 'jpg' || image === 'gif' || image === 'png' || image === 'tiff' && imageArr[0] !=='' || image === 'svg' || image === 'bmp'){
      var array = new Array(arr[x], imageArr[0], imageArr[1]);
      answer.push(array);
    }else{
    answer.push(null);
  }
}
 return answer;
}

// best answer
function imageFilter(arr) {
  return arr.map(file => file.match(/^(.+)\.(bmp|gif|jpg|png|tiff)$/i));
}
