var mot = "";
var chaine = "";
var i = 0;

function ucFirst(mot)
{
	return mot.substr(0,1).toUpperCase()+mot.substr(1,mot.length).toLowerCase();
}

function capitalize(chaine)
{
	
 
    while (chaine[i] != '\0')
    {
        
        if (chaine[i]  >= 97 &&  chaine[i] <= 122)
        {
            chaine[i] = chaine[i] - 32;
        }
    	i++;
    }
    
	
}

function camelCase(chaine)
{
	
 
    while (chaine[i] != '\0')
    {
        
        if (chaine[i]  >= 97 &&  chaine[i] <= 122)
        {
            chaine[i] = chaine[i] - 32;
        }
        

        else if(chaine[i] = ' ')
        {
        	chaine[i].replace(/ /g,"");
        }
    	i++;
    }
    
	
}


function snake_case(chaine)
{
	for(i==0 ; i<=chaine.length ; i++)
	{
		chaine[i].replace(/ /g,"_");
		chaine = chaine + chaine[i];
	}
	return chaine;
}



