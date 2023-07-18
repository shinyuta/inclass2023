fetch(
  // Explain each parameter in comments below
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

  // per_page = the number of results per page = 10 max
  // state = current state of the issue
  // sort = isssues by date they were last created
  // direction = sorts results in descending order.