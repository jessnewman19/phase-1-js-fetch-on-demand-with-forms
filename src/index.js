const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) => { 
    e.preventDefault() //Prevent page from automatically refreshing

    //1. find the target
    console.log(e) //Console's the event. Target = "searchByID"

    //2. create variable with the input value
    const input = e.target.children[1].value
    console.log(input) //returns "hello"

    fetch(`http://localhost:3000/movies/${input}`)
    .then(response => response.json())
    .then(data => { 
      const title = document.querySelector('#movieDetails h4')
      const summary = document.querySelector('#movieDetails p')

      title.innerText = data.title
      summary.innerText = data.summary
    })

    inputForm.reset()
  })
}

document.addEventListener('DOMContentLoaded', init);