$(document).ready(function(){
	$('#show-countries').click(function(e){
		$.ajax({
			url: "https://restcountries.eu/rest/v2/all",
			success: function(data, status){
				$('#title').text('Countries');
				$('.preview__wrap').empty(); 
				$.each(data, function(index, post){
					var card = '<article class="preview"><h3>'+post.name+'</h3><img class="img-responsive" src="'+post.flag+'"></article>';
					$('.preview__wrap').append(card);
				});
			}
		});
	});
	$('#show-capital-city').click(function(e){
		$.ajax({
			url: "https://restcountries.eu/rest/v2/all",
			success: function(data, status){
				$('#title').text('Capital city');
				$('.preview__wrap').empty(); 
				$.each(data, function(index, post){
					var card = '<article class="preview"><h3>'+post.capital+'</h3></article>';
					$('.preview__wrap').append(card);
				});
			}
		});
	});
});