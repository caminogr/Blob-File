document.getElementById("file").addEventListener("change", function() {
  // We can see local file as File
  console.log("this", this.files[0]);
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    console.log(reader.result);
  };
  //   const text = reader.readAsText(file); // 
  //   console.log("text", text);

  //   const arrayBuffer = reader.readAsArrayBuffer(file); // ArrayBuffer(14) {}
  //   console.log(arrayBuffer);

  //   const dataUrl = reader.readAsDataURL(file); // data:text/xml;base64,PHhtbD5mb288L3htbD4=
  //   console.log("dataUrl", dataUrl);

  const binaryString = reader.readAsBinaryString(file); // <xml>foo</xml>
  console.log("binaryString", binaryString);
});
