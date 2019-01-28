This is directory to understand Blob and File Object

## references
https://hakuhin.jp/js/file.html
http://var.blog.jp/archives/62330155.html

## Blob
> A Blob object represents a file-like object of immutable, raw data.

**property**
- Blob.size
- Blob.type (MIME type)


## File
extends Blob

**property**
extended property
- File.size
- File.type  

File orginal
- File.lastModified 
- File.lastModifiedDate
- File.name 
- File.webkitRelativePath 

## FileReader
read Blob or File

**method**
- readAsArrayBuffer
- readAsBinaryString
- readAsDataURL
- readAsText

- [DataURL](https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
- [BinaryString]()
- [ArrayBuffer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
