
// my code
fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {


            json.forEach(element => {
                  var _current_Card = `<div class="card" style="width: 24rem ;">
                           
                            
                              <div>
	                       <div class="box2">
	                       <div class="imgBx"> 
                             <img src="${element.flags.png}" >
		                </div>
		                <div class="content2">
		                <h2> 
                            <h5 class="card-title">${element.name.common}</h5></br>
                            </h2>
                             
                             
			           </div>
			            
			 
			         </div></div>
                            <div class="card-body">
                            <p class="card-text">
                             capital:${element.capital}</br>
                  continent:${element.continents}</br>
                  area:${element.area}</br>                
                  </p>
                       
                            <a target="_blank" href="${element.maps.googleMaps}" class="btn btn-primary">open on maps</a>
                            </div>
                        </div>`
                  var div = document.createElement('span')
                  div.innerHTML = _current_Card;
                  document.getElementById('allCountries').appendChild(div);
            });

      })
// end


