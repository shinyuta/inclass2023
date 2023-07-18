var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  console.log(document.location)
  // If that status equals the conditional, then redirect to the 404 page.
  if (response.status = '404')
    document.location.replace(redirectUrl);
  // } else {
  //   return response.json();
  // }
});

fetch(badRequestUrl);