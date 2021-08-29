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
    //grab clone change grab append
    const template = document.querySelector("template").content
    const copy = template.cloneNode(true)
    
    copy.querySelector(".name").textContent = element.fullname
    copy.querySelector(".button1").addEventListener("click", displayMovie)
    
    const topParent = document.querySelector("#actorsListSection")
    topParent.appendChild(copy)

    // difference- function inside the funcion
    function displayMovie() {
      document.querySelector(".movie").textContent = element.movie
      document.querySelector(".movie_container").classList.remove("hidden")
    }
  }


  getData()