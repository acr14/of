function changeLogo() {
  //var el = window.scrollY;
  //var el = document.;
  //console.log(window.scrollY);
  var y = window.scrollY;
  var width = window.screen.width;
  if(y>0 || width<768) {
  	document.getElementById('logo').src="./img/logo-green-100.png";
  } else {
  	document.getElementById('logo').src="./img/logo 100x25.png";
  };
}