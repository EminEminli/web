function fun() {
    var a,b,x,y,w;
    a=Number(document.forma.a.value);
    b=Number(document.forma.b.value);
    x=Number(document.forma.x.value);
   y=Math.sqrt(x+1)*(x+6)/b-Math.pow(Math.sin(x+a),2);
w=Math.sqrt((x*b)/a)+Math.pow(y,2)*Math.pow(Math.cos(Math.pow(x+b),2),2);

    document.forma.y.value=y;
    document.forma.w.value=w;
}
