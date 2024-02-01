let url = "https://pokeapi.co/api/v2/pokemon/";

function mostrarShiny(){

    // Obtenemos el contenido del label
    var labelText = document.getElementById("NOMBRE").textContent;
    // Buscamos la posición del ":" en el texto
    var position = labelText.indexOf(":");
    // Extraemos la parte del texto después del ":" (añadiendo 2 para omitir el ": " en la subcadena)
    var subtexto = labelText.substring(position + 2).toLowerCase(); 


    fetch(url+subtexto)
    .then(response => {

        return response.json();
    })
    .then(data => {

        let imagen = document.getElementById("imagenPokemon");
        let imagenShiny = data.sprites.front_shiny;
        imagen.src = imagenShiny;

    })
    .catch(error => {
        // Manejar errores de la petición
        console.error("Error en la petición:", error);
    });


};

function mostrarDefault(){

     // Obtenemos el contenido del label
     var labelText = document.getElementById("NOMBRE").textContent;
     // Buscamos la posición del ":" en el texto
     var position = labelText.indexOf(":");
     // Extraemos la parte del texto después del ":" (añadiendo 2 para omitir el ": " en la subcadena)
     var subtexto = labelText.substring(position + 2).toLowerCase(); 
 
 
     fetch(url+subtexto)
    .then(response => {

        return response.json();
    })
    .then(data => {

        let imagen = document.getElementById("imagenPokemon");
        let imagenDefault = data.sprites.front_default;
        imagen.src = imagenDefault;

    })
    .catch(error => {
        // Manejar errores de la petición
        console.error("Error en la petición:", error);
    });


};

function cargarImagenes(id1,id2){
    
let imagenArriba = document.getElementById("imagenPokemonArriba");
let imagenAbajo = document.getElementById("imagenPokemonAbajo");


    fetch(`https://pokeapi.co/api/v2/pokemon/${id1}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Aquí puedes trabajar con los datos del Pokémon
        console.log('Datos del Pokémon:', data);
        pokemonUrl = data.sprites.front_default;
        imagenArriba.src = pokemonUrl
        let nombreArriba = document.getElementById("tagArriba");
        nombreArriba.textContent = data.name.toUpperCase();

      })
      .catch(error => {
        console.error('Error al obtener datos del Pokémon:', error);
      });
    

      fetch(`https://pokeapi.co/api/v2/pokemon/${id2}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Aquí puedes trabajar con los datos del Pokémon
        console.log('Datos del Pokémon:', data);
        pokemonUrl = data.sprites.front_default;
        imagenAbajo.src = pokemonUrl
        let nombreAbajo = document.getElementById("tagAbajo");
        nombreAbajo.textContent = data.name.toUpperCase();
      })
      .catch(error => {
        console.error('Error al obtener datos del Pokémon:', error);
      });

};


function buscarPkmn (){

    console.log("Estoy en el metodo")

    let nombrePkmn = document.getElementById("input_Nombre").value.toLowerCase();
    fetch(url+nombrePkmn)
    .then(response => {
    
        

        return response.json();
    })
    .then(data => {



        for (let i = 0; i < 6; i++) {
            let stat;
            stat = data.stats[i].base_stat;
            console.log("STAT "+i+": "+data.stats[i].base_stat);
            let progressBar = document.getElementById("progress"+i);
            progressBar.value = stat;

        }



        let mov;
        

        for (let i = 0; i < 14; i++) {
            try{
                mov = data.moves[i].move.name;

            }catch(error){

                for (let j = i; j < 14; j++) {
                    let movLabel = document.getElementById("mov"+j);
                    movLabel.textContent = "-";
                }


                break;
            }

            let label = document.getElementById("mov"+i);
            label.textContent = mov;
            console.log(mov);
        }



        let label_Nombre = document.getElementById("NOMBRE");
        label_Nombre.textContent = "Nombre: " + data.name.toUpperCase();

        let label_Habilidad = document.getElementById("HABILIDAD");
        label_Habilidad.textContent = "Habilidad: " + data.abilities[0].ability["name"];

        let label_Id = document.getElementById("ID");
        label_Id.textContent = "Id: " + data.id;

        cargarImagenes((data.id-1),(data.id+1));

        let label_XpBase = document.getElementById("XP_BASE");
        label_XpBase.textContent = "XP Base: " + data.base_experience;

        let label_Altura = document.getElementById("ALTURA");
        label_Altura.textContent = "Altura: " + data.height;

        let imagenUrl = data.sprites.front_default;

        let imagen = document.getElementById("imagenPokemon");
        imagen.src = imagenUrl;

      

        let tipo1 = data.types[0].type["name"];

        let imagenTipo1 = document.getElementById("imgTipo1");
        let imagenTipo2 = document.getElementById("imgTipo2");

        switch (tipo1){

            case "bug":
              
                imagenTipo1.src = "images/"+tipo1+".svg";
            break;

            case "dark":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "dragon":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "electric":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "fairy":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "fighting":
             
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "fire":
               
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "flying":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "ghost":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "grass":
              
                imagenTipo1.src = "images/"+tipo1+".svg";
            break;

            case "ground":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "ice":
          
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "normal":
               
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "poison":
               
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "psychic":
              
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "rock":
               
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "steel":
               
                imagenTipo1.src = "images/"+tipo1+".png";
            break;

            case "water":
                
                imagenTipo1.src = "images/"+tipo1+".svg";
            break;

        }

        let tipo2;
        

        try{
            
            if(data.types[1].type["name"] !== "undefined"){
            tipo2 = data.types[1].type["name"];

                  switch (tipo2){

                case "bug":
                  
                    imagenTipo2.src = "images/"+tipo2+".svg";
                break;
    
                case "dark":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "dragon":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "electric":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "fairy":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "fighting":
                 
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "fire":
                   
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "flying":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "ghost":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "grass":
                  
                    imagenTipo2.src = "images/"+tipo2+".svg";
                break;
    
                case "ground":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "ice":
              
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "normal":
                   
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "poison":
                   
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "psychic":
                  
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "rock":
                   
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "steel":
                   
                    imagenTipo2.src = "images/"+tipo2+".png";
                break;
    
                case "water":
                    
                    imagenTipo2.src = "images/"+tipo2+".svg";
                break;
    
                 }

            }
        }catch(error){
            imagenTipo2.src = "images/nonexistent.png"
        }


    })
    .catch(error => {
        // Manejar errores de la petición
        console.error("Error en la petición:", error);
    });


};

