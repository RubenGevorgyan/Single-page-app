    class Countries{
        erkrner =  fetch('https://restcountries.eu/rest/v2/all')
        .then(response => {
          return response.json()
        })
        .then(data => {
          // Work with JSON data here
          return (data)
        })
        .catch(err => {
          // Do something for an error here
        })
        
        constructor(){
            this.html='';
            this.body = document.getElementById("body");
            this.countries- this.erkrner()
            this.countries.forEach(country => {
                this.html=this.html+'<li>'+country.name+'</li>'+'<li>'+country.capital+'</li>'+'<li>'+country.population+'</ul>';
            });
            this.body.innerHTML=this.html;
        }
    }
    export default Countries;