document.getElementById("file").addEventListener("change", function() {
  // console.log("this", this.files[0]);
  // const file = this.files[0];
  callXhr()
});

const callXhr = function() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    console.log('onload !!!!!!', xhr)
  };
  xhr.onerror = function(e) {
    console.log('onerror')
    console.log(e);
  };

  xhr.responseType = 'blob';
  xhr.open('GET', '/');
  xhr.send(null);
  console.log('finish!!!')
}
