function getData() {
    fetch('./actors.json').then(response => {
        return response.json();
      }).then(data => {
        // console.log(data);
        data.forEach(showListElement)
    
      }).catch(err => {
        console.log("Error when fetching data")
      })
}


  function showListElement(element) {
    //   console.log(element.fullname)

    //grab clone change grab append
    const template = document.querySelector("template").content
    const copy = template.cloneNode(true)
    
    copy.querySelector(".movie").textContent = element.movie
    copy.querySelector(".name").textContent = element.fullname

    let movieContainer = copy.querySelector(".movie_container")
    
    copy.querySelector(".button1").addEventListener("click", displayMovie.bind(null,movieContainer))

    const topParent = document.querySelector("#actorsListSection")
    topParent.appendChild(copy)
  }

  function displayMovie(container) {
      container.classList.remove("hidden")
  }

  getData()