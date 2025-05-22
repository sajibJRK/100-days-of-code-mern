let score = 100;

if(score> 100 || score < 0){
    console.log("Please enter correct score")
}
else if(score >=90 && score<=100){
    console.log("grade A");
}
else if(score>=80){
    console.log("grade B")
}
else if(score >= 70){
    console.log("grade C")
}
else if(score>=60){
    console.log("grade D")
}
else{
    console.log("grade F")
}
