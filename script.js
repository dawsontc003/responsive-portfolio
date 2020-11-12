// Fetch call for github repo information
fetch("https://api.github.com/users/dawsontc003/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
