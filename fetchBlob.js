document.getElementById("file").addEventListener("change", function() {
  // console.log("this", this.files[0]);
  // const file = this.files[0];
  // callXhr()
  callFetch();
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

const callFetch = function() {
  fetch("/", {
    method: "GET",
  }).then(response => {
    console.log('response1', response);
    const blob = response.blob();
    console.log(response.status); // status
    console.log('blob', blob)
    return blob;
  })
  .then(blob => {
    console.log('blob', blob);
  });
}
