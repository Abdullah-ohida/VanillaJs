function calculateAreaOfScaleneTriangle(a,b,c){
    // Semi-perimeter = s;
    // Area is round up to 3 (d.p)
    s = (a + b + c)/ 2;
    let area = Math.sqrt(s * (s -a) * (s - b) * (s - c));
    return area.toFixed(3);
}

console.log(calculateAreaOfScaleneTriangle(4, 5, 6))