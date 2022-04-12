var a,b,y,x,w;
a= parseFloat(prompt("Enter a ",""));
b= parseFloat(prompt("Enter b ",""));
x= parseFloat(prompt("Enter x ",""));
y=Math.pow(x,2)*Math.pow(Math.tan(Math.pow(x+b,2)),2)+a/Math.sqrt(x+b);
w=(b*Math.pow(x,2)-a*y)/(Math.pow(e,a*x)-1);

alert("y="+y);
alert("w="+w);