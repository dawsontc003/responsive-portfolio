// HTML target id for park rangers name
const projName1 = document.querySelector("#project1");
// HTML target id for park rangers repo URL
const projRepo1 = document.querySelector("#project1repo");
// HTML target id for daily scheduler name
const projName2 = document.querySelector("#project2");
// HTML target id for daily scheduler repo URL
const projRepo2 = document.querySelector("#project2repo");
// HTML target id for weather dashboard name
const projName3 = document.querySelector("#project3");
// HTML target id for weather dashboard repo URL
const projRepo3 = document.querySelector("#project3repo");

// function call
gitHubRepo();
// Fetch call for github repo information
function gitHubRepo() {
  fetch("https://api.github.com/users/dawsontc003/repos")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // appending project name for CO park rangers details
      projName1.textContent = data[0].name;
      projName1.append();
      // appending CO park rangers repo url details
      projRepo1.textContent = data[0].html_url;
      projRepo1.append();
      // appending project name for daily scheduler details
      projName2.textContent = data[7].name;
      projName2.append();
      // appending daily scheduler repo url details
      projRepo2.textContent = data[7].html_url;
      projRepo2.append();
      // appending project name for weather dashboard details
      projName3.textContent = data[3].name;
      projName3.append();
      // appending weather dashboard repo url details
      projRepo3.textContent = data[3].html_url;
      projRepo3.append();
    });
}
