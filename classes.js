// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says 
// "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Extend Person class and create one class for each member 
// of your family.

// class Person {
//    constructor (attributes) {
//     this.name = attributes.name;
//     this.age = attributes.age;
//     this.hobby = attributes.hobby;
//    }  
   
//    speek(){
//      return `Hello, My name is ${this.name} and I'm  ${this.age} years  old. I love  ${this.hobby}`               
//    }
// }

// let qof = new Person({
//     name: 'cali',
//     age: 23,
//     hobby: 'quraan'             
// })

// console.log(qof.speeck());


class Hooyo {
  constructor (attributes){
     this.work = attributes.work;
     this.likes = attributes.likes; 
     this.name = attributes.name             
  }     
  
  spee(){
      return `Hello my name is ${this.name} and i work ${this.work} Sometimes I listen to ${this.likes}`              
  }
  
}

let faduma = new Hooyo({
    work: 'techer',
    likes: 'gabayada', 
    name: 'faduma',           
})

console.log(faduma.spee());

class Child extends Hooyo{
   constructor (attributes){
     super(attributes)
     this.favSub = attributes.favSub;               
   }
  
   study(){
     return `Hello my name is ${this.name} and i work ${this.work} my favSub is ${this.favSub}`               
   }
   
}

let childs = new Child({
      name: 'abdiasiis',
      work:  'student',
      favSub: 'maths'          
})


console.log(childs.study());
