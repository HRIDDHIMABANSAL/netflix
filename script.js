let movies=[
    {
        name:"Padmavati",
        poster:"https://upload.wikimedia.org/wikipedia/en/7/73/Padmaavat_poster.jpg",
        rating:7.1
    },
    {
        name:"RRR",
        poster:"https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
        rating:7.8
    },
    {
        name:"3 Idiots",
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/d/df/3_idiots_poster.jpg/220px-3_idiots_poster.jpg",
        rating:8.4
    },
    {
        name:"Bhool Bhulaiyaa",
        poster:"https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg",
        rating:7.4
    },
    {
        name:"Kal Ho Naa Ho",
        poster:"https://upload.wikimedia.org/wikipedia/en/4/45/Kal_Ho_Naa_Ho.jpg",
        rating:7.9
    },
    {
        name:"Ra.one",
        poster:"https://upload.wikimedia.org/wikipedia/en/5/58/Ra.Oneposter.jpg",
        rating:4.8
    },
    {
        name:"Bodyguard",
        poster:"https://upload.wikimedia.org/wikipedia/en/a/af/Bodyguard_poster.jpg",
        rating:4.7
    },
    {
        name:"Titanic",
        poster:"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        rating:7.9
    },
    {
        name:"Dil Chahta Hai",
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Dil_Chahta_Hai.jpg/220px-Dil_Chahta_Hai.jpg",
        rating:8.1
    },
    
    
]   

function searchMovie(){
    let movieName = document.getElementById('search').value;
    if(movieName!==""){
        let result =movies.filter(function(movie)
            {
                return movie.name.toUpperCase().includes(movieName.toUpperCase())
            })
        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }
}

function displayMovies(data){
   document.getElementById('movies').innerHTML=""; 
   let htmlString=``;


   for(let i=0;i<data.length;i++){
    htmlString=htmlString+`
       <div class="movie">
            <div class="overlay">
                <div class="video"></div>
                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h2>IMDB: ${data[i].rating}</h2>
                </div>
            </div>
            <img class="poster" src="${data[i].poster}" alt="">
        </div>  
           
    `

   }

    
   document.getElementById("movies").innerHTML=htmlString;

}
displayMovies(movies)

// let movieDIV=document.createElement("div");
// movieDIV.classList.add("movie");
// let overlayDIV=document.createElement("div");
// overlayDIV.classList.add("overlay");
// movieDIV.appendChild(overlayDIV);