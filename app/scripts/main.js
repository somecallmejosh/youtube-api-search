function getRequest() {
  var params = {
    part: "Drum stick twirling",
    key: 'AIzaSyCsJxPieXjWm2p5Ba8M187SjbGfq47OCTw',
  };
  endPoint = 'https://www.googleapis.com/youtube/v3/search/';
  $.getJSON(endPoint, params, function(data){
    //showResults();
    console.log(data);
  })
}

getRequest();



