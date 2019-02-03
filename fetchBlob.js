document.getElementById("file").addEventListener("change", function() {
  // console.log("this", this.files[0]);
  // const file = this.files[0];
  callXhr()
  // callFetch();
});

const callXhr = function() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('success', xhr)
        resolve(xhr.response)
      } else {
        console.log('fail', xhr)
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = function(e) {
      console.log('onerror', e)
      reject(new Error(xhr.statusText));
    };

    xhr.responseType = 'blob';
    xhr.open('GET', '/');
    xhr.send(null);

  }).then(value => {
    console.log('value', value)
  }).catch(e => {
    console.log('error', error)
  })
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
