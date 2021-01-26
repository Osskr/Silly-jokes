const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')



const generateJoke = async()=>{
    const res = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    })

    const data = await res.json()
    jokeElement.innerHTML= data.joke
}

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

 