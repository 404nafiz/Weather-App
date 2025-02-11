const Search = document.getElementById("Search");
const button = document.getElementById("button");
const temp=document.getElementById("temp")
const city=document.getElementById("city")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const imgofcloud=document.getElementById("imgofcloud")
const box2=document.getElementById("box2")
const box1=document.getElementById("box1")
const newsearch=document.getElementById("newsearch")

button.addEventListener("click", function (e) {
    e.preventDefault();
    
    const cityname = Search.value.trim().toLowerCase(); 
    if (!cityname) {
        alert("Please Enter a City name");
        return;
    }

    fetchdata(cityname);
});

const apikey = "59977fa79c4e474b4516bc245c2f48c3";

async function fetchdata(cityname) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(apiurl); 
        if (!response.ok) {
            throw new Error("City not found");
        }
        box1.classList.remove("hidden");
        box1.classList.add("flex");
            box2.classList.remove("hidden");
            newsearch.classList.remove("hidden");
             box2.classList.add("flex");

        const data = await response.json();
        console.log(data);
        city.innerHTML=data.name
        temp.innerHTML = Math.round(data.main.temp) + "°C";

        humidity.innerHTML=data.main.humidity+"%"
        wind.innerHTML=data.wind.speed+"km/h"
        

 if(data.weather[0].main=="Clouds"){

 imgofcloud.innerHTML=`<img src="images/clouds.png" alt="">`


 }
 else if(data.weather[0].main=="Clear"){

    imgofcloud.innerHTML=`<img src="images/clear.png" alt="">`
   
   
    }
    else if(data.weather[0].main=="Rain"){

        imgofcloud.innerHTML=`<img src="images/rain.png" alt="">`
       
       
        }
        else if(data.weather[0].main=="Drizzle"){

            imgofcloud.innerHTML=`<img src="images/drizzle.png" alt="">`
           
           
            }
            else if(data.weather[0].main=="Mist"){

                imgofcloud.innerHTML=`<img src="images/mist.png" alt="">`
               
               
                }
            
        
                newsearch.addEventListener("click",function(e){
                    Search.value=" ";
                    box1.classList.add("hidden");
                    box2.classList.add("hidden");
                    newsearch.classList.add("hidden")
                })
    



    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }

  

   
 
}
