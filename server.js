// import modules
const express = require('express');
const path = require('path');

// the express server setup
const app = express();
const PORT = 3000;

// the routes
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// redirect routes
app.get('/author', (req, res) => {
  res.redirect('https://replit.com/@grandswager');
});

// the error messages
app.use((req, res, next) => {
  res.status(404).send(`
  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>grandswager Website</title>
  <link href="/css/index.css" rel="stylesheet" type="text/css" />
  <link href="/css/all.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7QX5WLBRS1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7QX5WLBRS1');
</script>
<body>
  <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img src="https://lh3.googleusercontent.com/-XfaHWCOyCQg/AAAAAAAAAAI/AAAAAAAAAAA/ADleYaUwZfqR0E2Fy4Djvs_UCbEViBNowQ/photo.jpg?sz=1000" height="24"> grandswager
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://weather.grandswager.repl.co/">Weather</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://sociablefrigidphysics.grandswager.repl.co/">Search Engine</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://converters.grandswager.repl.co/">Converters</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://cdn-2.grandswager.repl.co/">CDN-2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://hecker-softwear.grandswager.repl.co/">Hecker Software</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header class="masthead bg-primary">
    <div class="overlay"></div>
      <div class="container">
          <div class="row">
              <div class=" col-md-8 col-md-10 mx-auto">
                  <div class="site-heading">
                      <h3 class=" site-heading my-4 mt-3 text-white"> Error 404...</h3>
                      <p class="text-light">Theres a error 404!1!!11! (error 404 not found) &nbsp;
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <br>
  <center><span style="color:blue;cursor:pointer;" onclick="window.history.back()">Return to previous page</span></center>
  <script src="/js/index.js"></script>
</body>

</html>
  `);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(`
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>grandswager Website</title>
  <link href="/css/index.css" rel="stylesheet" type="text/css" />
  <link href="/css/all.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7QX5WLBRS1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7QX5WLBRS1');
</script>
<body>
  <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img src="https://lh3.googleusercontent.com/-XfaHWCOyCQg/AAAAAAAAAAI/AAAAAAAAAAA/ADleYaUwZfqR0E2Fy4Djvs_UCbEViBNowQ/photo.jpg?sz=1000" height="24"> grandswager
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://weather.grandswager.repl.co/">Weather</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://sociablefrigidphysics.grandswager.repl.co/">Search Engine</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://converters.grandswager.repl.co/">Converters</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://cdn-2.grandswager.repl.co/">CDN-2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://hecker-softwear.grandswager.repl.co/">Hecker Software</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header class="masthead bg-primary">
    <div class="overlay"></div>
      <div class="container">
          <div class="row">
              <div class=" col-md-8 col-md-10 mx-auto">
                  <div class="site-heading">
                      <h3 class=" site-heading my-4 mt-3 text-white"> Error 500...</h3>
                      <p class="text-light">Theres a error 500 which means it has a technical issue i think!1!!11! &nbsp;
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <br>
  <center><span style="color:blue;cursor:pointer;" onclick="window.history.back()">Return to previous page</span></center>
  
  <script src="/js/index.js"></script>
</body>

</html>
  `);
});

app.get('/game/:gameid', (req, res) => {
  res.redirect(`https://web.roblox.com/games/${req.params.gameid}/`);
})

// start the server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));