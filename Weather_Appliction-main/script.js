var temp,maxtemp,mintemp,desc,wind,hum,main,day,night;
var d1,d2,d3,d4,d5,d6,d7;
function weather(input)
{
  var city = input;
  localStorage.setItem("cit",input);
    var myurl="https://api.openweathermap.org/data/2.5/forecast?q=";
    var key="4601988c7a8b42bafdde82109548eeb3";
    var url=myurl+city+"&appid="+key;
  
fetch(url)
.then(data => {
    return data.json();
  }).then(displayResults);
}
window.onload = () =>{
  document.getElementById("place").value =localStorage.getItem("cit");
  setTimeout(
    ()=>{
      document.getElementById("search_btn").click();
    }
  ,200)
}
function displayResults (data) {
  var k=parseInt("273.15");
          console.log(data);
          if(data.cod=="404")
          {
            alert("Enter a valid City Name");
            document.getElementById("place").value = "";
            location.reload();
          }
            document.getElementById("icon").src="animated/"+data.list[0].weather[0].description+".svg";
            var a=data.list[0].weather[0].description;
            document.getElementById("icon1").src="animated/"+a+".svg";
            var b=data.list[9].weather[0].description;
            document.getElementById("icon2").src="animated/"+b+".svg";
            var c=data.list[18].weather[0].description;
            document.getElementById("icon3").src="animated/"+c+".svg";
            var d=data.list[25].weather[0].description;
            document.getElementById("icon4").src="animated/"+d+".svg";
            var e=data.list[33].weather[0].description;
            document.getElementById("icon5").src="animated/"+e+".svg";
            var f=data.list[33].weather[0].description;
            document.getElementById("icon6").src="animated/"+f+".svg";
            var g=data.list[33].weather[0].description;
            document.getElementById("icon7").src="animated/"+g+".svg";
          console.log(data.city.name);
          document.getElementById("de").innerHTML=Math.round(data.list[0].main.temp-k)+"°C";
          document.getElementById("description").innerHTML=data.list[0].weather[0].description;
          document.getElementById("humidity").innerHTML="Hum:"+data.list[0].main.humidity+"%";
          document.getElementById("wind").innerHTML="WS:"+Math.round(data.list[0].wind.speed)+"mph";
          document.getElementById("min").innerHTML="Min:"+Math.round(data.list[0].main.temp_min-k)+"°c";
          document.getElementById("max").innerHTML="Max:"+Math.round(data.list[0].main.temp_max-k)+"°c";
          document.getElementById("d1").innerHTML=Math.round(data.list[0].main.temp-k)+"°C";
          document.getElementById("d2").innerHTML=Math.round(data.list[9].main.temp-k)+"°C";
          document.getElementById("d3").innerHTML=Math.round(data.list[18].main.temp-k)+"°C";
          document.getElementById("d4").innerHTML=Math.round(data.list[25].main.temp-k)+"°C";
          document.getElementById("d5").innerHTML=Math.round(data.list[33].main.temp-k)+"°C";
          document.getElementById("d6").innerHTML=Math.round((data.list[33].main.temp-k)+1)+"°C";
          document.getElementById("d7").innerHTML=Math.round(data.list[25].main.temp-k)+"°C";
          document.getElementById("cn").innerHTML=data.city.name+" Weather";
          document.getElementById("d1r").innerHTML=data.list[0].weather[0].description;
          document.getElementById("d2r").innerHTML=data.list[9].weather[0].description;
          document.getElementById("d3r").innerHTML=data.list[18].weather[0].description;
          document.getElementById("d4r").innerHTML=data.list[25].weather[0].description;
          document.getElementById("d5r").innerHTML=data.list[33].weather[0].description;
          document.getElementById("d6r").innerHTML=data.list[33].weather[0].description;
          document.getElementById("d7r").innerHTML=data.list[25].weather[0].description;
        d1=Math.round(data.list[0].main.temp-k);
        d2=Math.round(data.list[9].main.temp-k);
        d3=Math.round(data.list[18].main.temp-k);
        d4=Math.round(data.list[25].main.temp-k);
        d5=Math.round(data.list[33].main.temp-k);
        d6=Math.round((data.list[33].main.temp-k)+1);
        d7=Math.round(data.list[25].main.temp-k);
        graph();
    }
     const graph = ()=> {
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light",
        backgroundColor: "",                              
        title:{
          text: "Temperature Graph"
        },
        data: [{        
          type: "line",
              indexLabelFontSize: 16,
          dataPoints: [
            {label: "Current Day", y: d1},
            { label: "Day2",y: d2},
            {label: "Day3", y: d3},
            {label: "Day4", y: d4 },
            {label: "Day5", y: d5 },
            {label: "Day6", y: d6 },
            {label: "Day7", y: d7 },
          ]
        }]
      });
      console.log(parseInt(d1))
      chart.render();

      }