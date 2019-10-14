document.getElementById('id_logic_version').innerHTML="logic v. 10.14.19.3";
document.getElementById('id_button').addEventListener('click',solve_ec2);

function t_eq2()
{
 this.read_coefficients = function()
 {
   this.a = document.getElementById('id_a').value;
   this.b = document.getElementById('id_b').value;
   this.c = document.getElementById('id_c').value;
 }

   this.compute_solutions = function()
  {
   var delta = this.b*this.b-4*this.a*this.c;
   if (delta>=0)
   {
     this.x1_re=(this.b-Math.sqrt(delta))/2*this.a;
     this.x2_re=(-this.b+Math.sqrt(delta))/2*this.a;
     this.x1_im=0;
     this.x2_im=0;
   }
   else
   {
     this.x1_re=-this.b/2*this.a;
     this.x2_re=-this.b/2*this.a;
     this.x1_im=-Math.sqrt(-delta)/2*this.a;
     this.x2_im=+Math.sqrt(-delta)/2*this.a;
   }
 }

  this.print_solutions = function()
 {
   document.getElementById('id_x1').innerHTML= "X1 = " + this.x1_re +" + "+this.x1_im+" i";
   document.getElementById('id_x2').innerHTML= "X2 = " + this.x2_re +" + "+this.x2_im+" i";
 }
}

function solve_ec2()
{
 var ec2 = new t_eq2();
 ec2.read_coefficients();
 ec2.compute_solutions();
 ec2.print_solutions();
}
