/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding             
* 2. Emplicit Binding
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
 //console.log(this);
// will not work 'strict mode'
  //var somalia = mogadisho
 // var somalia = hargeisa
  //  console.log(somalia);

// Principle 2
// code example for Implicit Binding
//  let student = {
//      name: 'cali',
//      work: 'student',
//      age : '20'  ,
//      massage: function (){
//       console.log(`hello iam ${this.name} and my work is ${this.work}`);              
//      }
//  }

//  student.massage()



// Principle 3
// code example for New Binding
 function xoolo(adhi, geel) {
      this.adhi = adhi;
      this.geel = geel;
 }

let xayn = new xoolo('sabeen', 'owr');

console.log(xayn.geel);


// Principle 4
// code example for Explicit Binding

function student() {
     console.log(this.name);               
   console.log(this.location);  

}

let mame = {
  name: 'maame',
  location: 'nairobi',
  work: 'student'                
}

student.call(mame)










