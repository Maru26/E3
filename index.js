class pizza 
{


    constructor(ID,nombre,precio,ingredientes = []) {

        this.ID = ID;
    
        this.nombre = nombre;
        
        this.precio = precio;
        
        this.ingredientes = ingredientes;


        
       
    }


    
    
}


   
    


const Peperoni = new pizza("1","Peperoni","600",['Peperoni','mozzarella','tomate','cebolla']);

const Muzzarella = new pizza("2","Muzarella","800",['Mozzarella','tomate','cebolla']);

const  Jamon = new pizza("3","Jamon","700",['Jamon','Mozzarella','tomate','Morrones']);

const Napolitana = new pizza("4","Napolitana","500",['Oregano','mozzarella','tomate','cebolla']);
123123
const Calabresa = new pizza("5","Calabreza","300",['Calabreza','mozzarella','tomate','ajo']);

const Roquefort = new pizza("6","Roquefort","1000",['Roquefort','mozzarella','ajo']);



const boton = document.getElementsByClassName('Enviar');
boton[0].addEventListener('click', tomarvalor)


const boton2 = document.getElementsByClassName('ingredientes');
boton2[0].addEventListener('click', tomaringredintes)



let inpre = document.getElementsByClassName("inputnumero");
    document.addEventListener("input", function () {
        document.getElementById("h2").innerHTML = "";
        document.getElementById("h4").innerHTML = "";
        document.getElementById("ingparrafo").innerHTML = "";
           
});

let inpre2 = document.getElementsByClassName("inputnumero");
    document.addEventListener("keydown", function (evento) {
        if (evento.key == "Enter") {
           tomarvalor();
        }
           
});





function tomarvalor() {

    
    

    inputValor = document.getElementsByClassName("inputnumero")[0].value;

    
    if (inputValor == Peperoni.ID){

        console.log(Peperoni.nombre)
        document.getElementById("h2").innerHTML = Peperoni.nombre;
        document.getElementById("h4").innerHTML = Peperoni.precio;
        
        
     
    }
    else if (inputValor == Muzzarella.ID) {

        document.getElementById("h2").innerHTML = Muzzarella.nombre;
        document.getElementById("h4").innerHTML = Muzzarella.precio;

        console.log(Muzzarella.nombre)
    }

    else if (inputValor == Jamon.ID) {

        document.getElementById("h2").innerHTML = Jamon.nombre;
        document.getElementById("h4").innerHTML = Jamon.precio;

        console.log(Jamon.nombre)
    }

    else if (inputValor == Napolitana.ID) {

        document.getElementById("h2").innerHTML = Napolitana.nombre;
        document.getElementById("h4").innerHTML = Napolitana.precio;

        console.log(Napolitana.nombre)
    }

    else if (inputValor == Calabresa.ID) {

        document.getElementById("h2").innerHTML = Calabresa.nombre;
        document.getElementById("h4").innerHTML = Calabresa.precio;

        console.log(Calabresa.nombre)
    }

    else if (inputValor == Roquefort.ID) {

        document.getElementById("h2").innerHTML = Roquefort.nombre;
        document.getElementById("h4").innerHTML = Roquefort.precio;

        console.log(Roquefort.nombre)
    }
    else {
        document.getElementById("h2").innerHTML = 'Id no en contrado';
        document.getElementById("h4").innerHTML = 'Id no en contrado';



    }

}


function tomaringredintes() {
   

    

    inputing = document.getElementsByClassName("inputnumero")[0].value;
   

    
    if (inputing == Peperoni.ID){

        console.log(Peperoni.nombre)
        document.getElementById("h2").innerHTML = Peperoni.nombre;
        document.getElementById("h4").innerHTML = Peperoni.precio;
        document.getElementById("ingparrafo").innerHTML = Peperoni.ingredientes;
        
        
       


    }
    else if (inputing == Muzzarella.ID) {

        document.getElementById("h2").innerHTML = Muzzarella.nombre;
        document.getElementById("h4").innerHTML = Muzzarella.precio;
        document.getElementById("ingparrafo").innerHTML = Muzzarella.ingredientes;
        console.log(Muzzarella.nombre)

        
    }

    else if (inputing == Jamon.ID) {

        document.getElementById("h2").innerHTML = Jamon.nombre;
        document.getElementById("h4").innerHTML = Jamon.precio;
        document.getElementById("ingparrafo").innerHTML = Jamon.ingredientes;
        console.log(Jamon.nombre)

        
    }

    else if (inputing == Napolitana.ID) {

        document.getElementById("h2").innerHTML = Napolitana.nombre;
        document.getElementById("h4").innerHTML = Napolitana.precio;
        document.getElementById("ingparrafo").innerHTML = Napolitana.ingredientes;
        console.log(Napolitana.nombre)

        
    }

    else if (inputing == Calabresa.ID) {

        document.getElementById("h2").innerHTML = Calabresa.nombre;
        document.getElementById("h4").innerHTML = Calabresa.precio;
        document.getElementById("ingparrafo").innerHTML = Calabresa.ingredientes;
        console.log(Calabresa.nombre)

        
    }

    else if (inputing == Roquefort.ID) {

        document.getElementById("h2").innerHTML = Roquefort.nombre;
        document.getElementById("h4").innerHTML = Roquefort.precio;
        document.getElementById("ingparrafo").innerHTML = Roquefort.ingredientes;
        console.log(Roquefort.nombre)

        
    }
    else {
        document.getElementById("h2").innerHTML = 'Id no en contrado';
        document.getElementById("h4").innerHTML = 'Id no en contrado';



    }
    
}






    
