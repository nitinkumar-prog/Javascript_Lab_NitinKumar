var n = 5;   
var i, j;

for (i = 1; i <= n; i++) {
    var star = "";
    
    for (j = 1; j <= i; j++) {
        star = star + "*";
    }
    
    console.log(star);
}