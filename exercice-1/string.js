var mot = "";
var chaine = "";
var i = 0;

function ucfirst(mot)
{
	return mot.substr(0,1).toUpperCase()+mot.substr(1,mot.length).toLowerCase();
}

function capitalize(str1){

    if(str1.length > 0) {

        str1 = str1.split(" ");

        for (var i = 0, x = str1.length; i < x; i++){

            str1[i] = str1[i][0].toUpperCase() + str1[i].substring(1);

        }
        
        var res = str1.join(" ");
        return res;
    }
}
function camelCase(str1){

    if(str1.length > 0) {

        str1 = str1.split(" ");

        for (var i = 0, x = str1.length; i < x; i++){

            str1[i] = str1[i][0].toUpperCase() + str1[i].substring(1);
           
        }
        
        var res = str1.join(" ");
        var fin = res.split(" ").join("");
        return fin;
    }
}


function snake_case(chaine)
{
	chaine = chaine.split(" ");
	chaine = chaine.join("_")
	return chaine.substr(0,chaine.length).toLowerCase();
}


function leet(chaine)
{
	for ( i = 0, x = chaine.length; i < x; i++){

           chaine = chaine.replace('a' , '4');
           chaine = chaine.replace('e' , '3');
           chaine = chaine.replace('i' , '1');
           chaine = chaine.replace('o' , '0');
           chaine = chaine.replace('u' , '_');
           chaine = chaine.replace('y' , '7');
          

        }
        return chaine ;

}



