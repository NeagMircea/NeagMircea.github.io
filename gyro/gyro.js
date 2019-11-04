document.getElementById("id_logic").innerHTML="logic= 11.04.2019.0";
window.addEventListener("deviceorientation",on_gyro_data_uab);

function on_gyro_data_uab(e)
{
	document.getElementById("id_alpha").innerHTML=e.alpha;
	document.getElementById("id_beta").innerHTML=e.beta;
	document.getElementById("id_gamma").innerHTML=e.gamma;
	
}







