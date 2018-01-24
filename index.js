function Multiplier(){
	this.currentValue = 1;
    this.multiply = function(number){
	this.currentValue = number * this.currentValue;
		console.log(this.currentValue);
	}
	 this.getCurrentValue = function(){
		return  this.currentValue;
		
	}
}
var m = new Multiplier()




function Album(photo){
	this.photo = photo
	this.array = [];
	this.array.push(this.photo)

}

var what = new Album('my vacatoion on the beach.jpg')
var me = new Album('me and your mom')










function Techer(degree,sex,experience){
	this.degree = degree,
	this.sex = sex,
	this.experience = experience,


function Student(name,year,grade){
	Teacher.apply(this, arguments)
	this.name = name,
	this.year = year,
	this.grade = grade,

}
var student1 = new Student(jeff,1999,'A',bachlors','male,)