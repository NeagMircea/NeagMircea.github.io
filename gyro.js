document.getElementById("id_logic").innerHTML="logic= 11.04.2019.4";

window.addEventListener("deviceorientation",on_gyro_data_uab);
window.addEventListener("devicemotion", on_acc_data_uab);



function on_gyro_data_uab(e)
{
	
	document.getElementById("id_alpha").innerHTML=Math.round(e.alpha*100)/100;
	document.getElementById("id_beta").innerHTML=Math.round(e.beta*100)/100;
	document.getElementById("id_gamma").innerHTML=Math.round(e.gamma*100)/100;
	
}

function on_acc_data_uab(e)
{
	var acc=e.accelerationIncludingGravity;
	
	document.getElementById("id_acc_x").innerHTML=Math.round(acc.x*100)/100;
	document.getElementById("id_acc_y").innerHTML=Math.round(acc.y*100)/100;
	document.getElementById("id_acc_z").innerHTML=Math.round(acc.z*100)/100;
	
	var rot_x=Math.atan(acc.x/acc.z)*180/Math.PI;
	var rot_y=Math.atan(acc.y/acc.z)*180/Math.PI;
	
	document.getElementById("id_rot_x").innerHTML=Math.round(rot_x*100)/100;
	document.getElementById("id_rot_y").innerHTML=Math.round(rot_y*100)/100;
}




