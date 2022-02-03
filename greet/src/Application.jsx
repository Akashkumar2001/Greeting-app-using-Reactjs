let hour=new Date();
hour=hour.getHours();

let greet="";
const cssStyle={}; //creating object to assign different color to greet

function greeting(){
if(hour<=18 && hour>=12){
  greet="Good Afternoon";
  cssStyle.color="purple";
}
else if(hour<12 && hour>0){
   greet="Good Morning";
   cssStyle.color="pink";
 }
 else if(hour>18 && hour<=24){
   greet="Good Night";
   cssStyle.color="orange";
 }
}
greeting();
export { greet,cssStyle};