var mark = {
    fullName : "Mark Manson",
    height : 1.7,
    weight : 50,
    calculateBMI : function() {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI; 
    }
}

var john = {
    fullName : "John Doe",
    height : 1.9,
    weight : 80,
    calculateBMI : function() {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI; 
    }
}

if (mark.calculateBMI() > john.calculateBMI()) {
    console.log("Mark has a high body mass index.");
} else if(mark.calculateBMI() < john.calculateBMI()){
    console.log("John has a high body mass index");
} else{
    console.log("John and Mark has the same BMI");
}
