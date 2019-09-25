new Vue ({
	el: '#app',
	data: { 
		beers: getBeers()
	}
})
	
function getBeers() {
	
	beers = [];
	
	$.ajax({
	    url: 'https://api.punkapi.com/v2/beers',
        success: function(data){
            
			data.forEach(function(beer) {
			  console.log(beer.name);
				beers.push(beer.name);
			});
			
        }
	})

	
	return beers;
}
