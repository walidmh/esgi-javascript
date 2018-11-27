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
	return chaine;
}
console.log(snake_case("Hello World sal"));



