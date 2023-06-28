window.addEventListener("load", function () {
  const url =
    "https://mtagisdev.lirr.org/dosportaldev/sharing/rest/generateToken?ip=&client=referer&referer=https://dsportal1hsfhqd.lirrad.lirr.org:6443/arcgis/admin&expiration=40000&f=json";

  const credentials = {
    username: "subwaysgisadmin",
    password: "9Uvn7WQ_Portal",
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      token = data.token;
      console.log(token);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
