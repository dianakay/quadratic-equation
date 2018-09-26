module.exports = function solveEquation(equation) {
  var indexA=equation.indexOf("*");
  var indexB=equation.indexOf("*", indexA+1);
  var a=equation.slice(0, indexA-1);
  var bSign=equation.slice(indexA+6, indexA+7);
  var numberB=equation.slice(indexA+8, indexB-1);
  var cSign=equation.slice(indexB+4, indexB+5);
  var numberC=equation.slice(indexB+6, equation.length);
  
  var b=Number(bSign+numberB);
  var c=Number(cSign+numberC);
  
  /// Solution
  var D1=b*b-4*a*c;
  var x1 = Math.round((-b+Math.sqrt(D1))/(2*a));
  var x2 = Math.round((-b-Math.sqrt(D1))/(2*a));
  var solution=[];
  if (x1<x2) {
	  solution.push(x1);
	  solution.push(x2);
  } else {
	  solution.push(x2);
	  solution.push(x1);}
  return solution;
}

