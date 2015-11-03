function showResults(results) {
  $.each(results, function(index, value){
    var vidTitle = value.snippet.title,
        vidId = value.id.videoId,
        vidDescription = value.snippet.description,
        vidImage = value.snippet.thumbnails.medium.url;
    appendResults(vidTitle, vidId, vidDescription, vidImage ); 
  })
};

function appendResults(title, ID, description, image) {
  $('<div class="media"><div class="media-left"><a href="https://www.youtube.com/watch?v=' + ID + '" target="_blank"><img class="media-object" src="' + image + '" alt=""></a></div><div class="media-body"><h4 class="media-heading"> ' + title + '</h4><p>' + description + '</p><a href="https://www.youtube.com/watch?v=' + ID + '" class="btn btn-default" target="_blank">Watch Video</a></div></div>').appendTo(".well");
};


function getRequest(searchTerm) {
  var params = {
    part: "snippet",
    key: 'AIzaSyCsJxPieXjWm2p5Ba8M187SjbGfq47OCTw',
    q: searchTerm
  };
  endPoint = 'https://www.googleapis.com/youtube/v3/search/';
  $.getJSON(endPoint, params, function(data){
    showResults(data.items);
    console.log(data.items);
  });
};

$(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var getUserInput = $('.video-search').val();
    getRequest(getUserInput);
  })
});

function clearResults() {
  $(".well .media").fadeOut();
  $('.video-search').val("").focus();
};

$('.search-clear').on("click", clearResults);



