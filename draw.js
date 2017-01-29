var canvas = document.getElementById('myDrawing');
var t = new Turtle(canvas);

var phi = (Math.sqrt(5) + 1)/2;
t.reset().color('rgba(255,255,255,0.2)')
.repeat(987, function(){
  t.fd(2000).pu().bk(2000).pd().rt(360*phi);
});
	