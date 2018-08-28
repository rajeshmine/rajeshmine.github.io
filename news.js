

$(document).ready(function(){
  newsapi('the-hindu');
});



function newsapi(newspaper){
$( this ).addClass( "active" );

  $.ajax({
    type:'get',
    url:"https://newsapi.org/v2/top-headlines?sources="+newspaper+"&apiKey=4f864d4692ad489abfdac152ac17c1e0",

  }).done(function(data){
    console.log(data);
	var articles=data.articles;
	if(data.status=="ok"){
		$('.breadcrumb').remove();
		$('.newscontainer').append(" <ol class='breadcrumb'><li><a>TOP NEWS HINT</a></li><li><a class='breadcrumpnewsname'>"+newspaper+"</a></li></ol>");
		$('.newsrow').remove();
		for(var i=0;i<articles.length;i++){
			$('.newscontainer').append("<div class='row newsrow'>				<div class='col-sm-3 imgcolumn'>					<div class='urlToImage'>						<img class='img-responsive' src="+articles[i].urlToImage+">			</div>				</div>				<div class='col-sm-7'>					<p class='title'>	"+articles[i].title+"		</p>					<p class='description'> "+articles[i].description+"</p>	<a href="+articles[i].url+" target='_blank'>"+articles[i].url+"</a>		</div><div class='col-sm-2'><p>DATE : "+articles[i].publishedAt.split('T')[0]+"</p><p>TIME : "+articles[i].publishedAt.split('T')[1].substr(0,8)+"</p> </div>		</div>");
		}
		
	}
	
	
  });
}