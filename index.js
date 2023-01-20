
   

 


window.addEventListener('DOMContentLoaded',()=>{

        
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=single')
        .then(res=>res.json())
        .then(data=>{
            console.log(data.joke)
            document.querySelector('#joke').innerHTML=data.joke;
        }).catch(error=>{
            console.log(`${error}`)
        });




})