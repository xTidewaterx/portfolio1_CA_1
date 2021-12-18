const resultsContainer = document.querySelector(".blogPosts");
const resultsContainer2 = document.querySelector(".loading");


const url = "https://cryptocurrency.sciencemuseum.one/wp-json/wp/v2/posts?_embed";


const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

resultsContainer2.innerHTML ="<p class=loading> Loading...</p>";


async function fetchGames() {

    try {
        const response = await fetch(corsFix);
        const json = await response.json();

        console.log(json);

        resultsContainer2.innerHTML = "";

  

        
json.forEach(function(post) {



    var n;
     for (var n = 0; n <1; n++) 
 
     resultsContainer.innerHTML += ` <a href = "blogPostSpecific.html?id=${post.id}"  class="blogPosts"> 
                                     <div class="cardColour">
                                     <h4>${post.id}</h4>
                                     <img src ="${post._embedded['wp:featuredmedia'][0].source_url}" />
                                    
                                     <h5>${post.title.rendered}</h5>
                                     <div class="text">
  
 
    
     
 
 
     </a>`
 
     console.log(post.id)
    console.log( post.content.rendered)
   
 //removed this from the resultsContainer.innerHTML::   <p>${post.content.rendered}</p>
 
   
 });
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchGames();


