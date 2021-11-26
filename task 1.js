function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}

var p1 = new person("PRMOD","RAHUL","Ameerpet , JAMMU");
var p2 = new person("Pavan","Kalyan","Kukatpally , Hyderabad");
var p3 = new person("RAVI"," RANJAN","Gachibowli, DELHI");

console.log(p1);
console.log(p2);
console.log(p3)