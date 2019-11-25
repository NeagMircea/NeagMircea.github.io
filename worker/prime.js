var ruleaza = false;

onmessage = function(e)  //atribuire functie
{
	if (e.data=="start")
	{
		ruleaza=true;
	}
	
	else
		
		if(e.data=="stop")
		{
			ruleaza=false;
		}
};

function este_prim(n){
	for (var i = 2; i*i <= n; i++)
		if (n % i == 0)
			return false;
	return true;
}


function start(start_value)

{
	if (ruleaza==false);
		
	else
	{
		for (var i = start_value; i < 1E11+100; i++)
			
			if (este_prim(i))
				postMessage(i);
			
		start_value+=100;
	}
	
	
	if(start_value<1E11)
		setTimeout(start,0,start_value);//function,interval,param
	
	else
		postMessage("gata");
}

start(1E10);
