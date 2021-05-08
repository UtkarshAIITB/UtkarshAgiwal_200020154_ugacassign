<!DOCTYPE html>
<html>
<head>
	<title>Sign Up</title>
	<link rel="stylesheet" href="signin.css">
	<meta name="viewport" content="width=device-width, initial scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
</head>

<body background="bckgrnd.jpg">

	<header>
	<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  		<a class="navbar-brand" href="#"><b> Problem 1 </b></a>
  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    	<span class="navbar-toggler-icon"></span>
  		</button>
  	<div class="collapse navbar-collapse" id="collapsibleNavbar">
    	<ul class="navbar-nav">
      		<li class="nav-item">
        	<a class="nav-link" href="#">Blog</a>
      		</li>
      		<li class="nav-item">
        	<a class="nav-link" href="login.htm">Login</a>
      		</li>
      		<li class="nav-item">
        	<a class="nav-link" href="homepage.htm">Sign Up</a>
      		</li>    
    	</ul>
 	</div>  
	</nav> <br>
</header>

<div id="success">

<?php

	$name = $email = $passwor = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
	$name = $_POST["name"];
	$email = $_POST["email"];
	$passwor = $_POST["password"];
}

$servername = "localhost";
$username = "root";
$password = "chess@2002";
$dbname = "problem1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, email, password)
VALUES ('$name', '$email', '$passwor')";

if ($conn->query($sql) === TRUE) {
    echo "<br><font color = #fff><center> <h3> <u> New account created successfully! </u> </h3></center></font>";
    echo "<img src='user.png' id='used' width='120' height='120'> ";
    echo "<br>";
    echo "<center> Name: " . $name . "</center>";
    echo "<center> E-mail: " .$email . "</center><br>";
}
else {
    echo " <h1> Error:  </h1>" . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
<center><a href="homepage.htm" class="btn btn-success btn-sm" id="submit">Log Out</a>




</div>

</body>
</html>