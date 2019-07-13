import { get } from "http";

    class Countries{
        async get_countries () 
          {
            let response = await fetch('https://restcountries.eu/rest/v2/all');
            let data = await response.json()
            return data;
          }
        erkrner=get_countries()
        for_dropdown(){
          let html ='<select onchange="location = this.options[this.selectedIndex].value;"><option>Please select country</option>'    
          erkrner.forEach(country => {
           html  = html+'<option value="/'+this.erkrner.alpha3Code+'">'+this.erkrner.name+'</option>'
          });
          html= html+'</select>'
        }
        countries(){
            this.html='';
            this.body = document.getElementById("body");
            this.erkrner.forEach(country => {
                this.html=this.html+'<img href ='+country.flag+'/>'+'<li>'+country.name+'</li>'+'<li>'+country.capital+'</li>'+'<li>'+country.population+'</ul>';
            });
            this.body.innerHTML=this.html;
        }
        routechanger (){
          return this.erkrner.alpha3Code
        }
    }
    export default Countries;