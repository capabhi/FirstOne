function students(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greetings = function(){
        return "hello"+" my name is "+first+" and I'm "+age+"years old";
    }
}

var student=[];

student.push(new students("ali", "babe",23));
student.push(new students("ami", "babe",23));
student.push(new students("shi", "babe",23));


for (var x=0; x<student.length; x++){
    for (var key in student[x]){
        console.log(student[x][key]);
    }
    
}