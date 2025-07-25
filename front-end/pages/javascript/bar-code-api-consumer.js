let url = 'https://barcodeapi.org/api/qrcode/olá,mundo!'

fetch(url, { cache: "no-store" })
  .then(response => {

    var tokens = response.headers.get('X-RateLimit-Tokens');
    console.log("Tokens remaining: " + tokens);

    response.blob().then(blob => {
      var img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      document.body.appendChild(img);
    });
});                                                           