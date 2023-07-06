async function getInfo(req, res) {
  const response = await fetch("https://www.linkedin.com/in/ihor-lihus/", {
    headers: {
      "accept-encoding": "gzip, deflate, sdch, br",
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    },
  });
  console.log("LOG RESPONSE", response);
  const data = await response.json();
  console.log("LOG DATA", data);
  res.json({
    status: 200,
    data,
  });
}

module.exports = getInfo;
