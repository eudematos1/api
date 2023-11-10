const apiUrl="http://localhost:8081/persona";


interface persona{
    id:string,
    apellido:string,
    edad:number,
}
interface persona extends Array<persona>{}




async function fetchCharacters(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    displayCharacters(data as persona);
}

function displayCharacters (characters:persona){ 
    const container = document.getElementById('characters-container');
    if (container){
        characters.forEach(character =>{ 
            container.innerHTML += `
            <div class="character-card">
            <h2>id:${character.id}</h2>
            <h2>apellido:${character.apellido}</h2>
            <h2>edad:${character.edad}</h2>
            </div>
            ` ;
        });
    }
}

fetchCharacters();