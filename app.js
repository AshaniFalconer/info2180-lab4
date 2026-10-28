window.onload = function() {

   const button = document.getElementById("search-btn");

   button.addEventListener("click", function() {

       const query = document.getElementById("search-field").value;

       fetch("superheroes.php?query=" + encodeURIComponent(query))
           .then(response => response.text())
           .then(data => {
               document.getElementById("result").innerHTML = data;
           })
           .catch(error => {
               console.log(error);
           });

   });

};
