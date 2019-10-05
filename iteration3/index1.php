<?php include("auth.php"); ?> 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <!-- Boostrap4 -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    <link
      href="https://fonts.googleapis.com/css?family=Dosis"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/main.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/sweetalert2/sweetalert2.min.css"
    />
    <title>Fun For Future</title>
  </head>
  <body>
    <!-- Header -->
    <header id="header-home">
      <div class="container" position:Relative>
        <nav id="main-nav">
          <img src="img/Teamlogo4.png" alt="My Portfolio" id="logo" />

          <ul>
            <li><a href="index.html" class="current">Home</a></li>
            <li><a href="about.html">Statistics</a></li>
            <li><a href="work.html">Games</a></li>
			<li>
			<?php 
    if($_SESSION['logged']==true){ 
      echo '<a href="logout.php"><span>' + $_SESSION['username'] + ' (Logout)</span></a>';
     
	}
    else($_SESSION['logged']==false) 
      echo '<a href="signin.html">Signin</a>';
  ?>
			</li>
            <!-- <li><a  class="" href="contact.html">Contact</a></li> -->
          </ul>
        </nav>
        <div class="header-content">
          <h1>
            Welcome to
            <span
              class="txt-type"
              data-wait="2000"
              data-words='["Fun For Future"]'
            ></span>
          </h1>
          <p class="lead">
            Games For Children To Learn Waste Management!
          </p>
          <a href="work.html" class="btn-light">View My Games</a>

          <a href="#popup1" class="button factlogo" onclick="myFunction()"
            ><img
              class="img-fluid"
              src="icons/icons8-light-on-64.png"
              alt=""
            />Fact of the day

            <script>
              function myFunction() {
                Swal.fire({
                  title: 'DO U KNOW?',
                  text:
                    'Glass recycling is often separated into colors because glass keeps its color after recycling.',
                  footer: 'From Science Kids Website',
                  type: 'success',
                  animation: false,
                  customClass: {
                    popup: 'animated tada'
                  }
                });
              }
            </script>
            <script>
              function loadDoc() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    document.getElementById(
                      'demo'
                    ).innerHTML = this.responseText;
                  }
                };
                xhttp.open('GET', 'databasefact.php', true);
                xhttp.send();
              }
            </script>
          </a>
          <p id="foot">
            Copyright &copy; 2019. All Rights Reserved
            <strong>Guardians</strong>
          </p>
        </div>
      </div>
    </header>

    <!-- Footer -->
    <!-- <footer id="main-footer">
      <div class="footer-content container">
        <p>Copyright &copy; 2019. All Rights Reserved</p>
        <div class="social">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
    </footer> -->

    <!-- Type Effect Tutorial: https://www.youtube.com/watch?v=POX3dT-pB4E -->
    <script src="js/typewriter.js"></script>
    <!-- sweetalert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <script src="/iteration3/node_modules/sweetalert2/sweetalert2.all.min.js"></script>
    <!-- Optional: include a polyfill for ES6 Promises for IE11 and Android browser -->
    <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
  </body>
</html>
