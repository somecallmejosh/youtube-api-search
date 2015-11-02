function getRequest() {
  var params = {
    part: "snippet",
    key: 'AIzaSyCsJxPieXjWm2p5Ba8M187SjbGfq47OCTw',
    q: 'Drum Stick Twirling'
  };
  endPoint = 'https://www.googleapis.com/youtube/v3/search/';
  $.getJSON(endPoint, params, function(data){
    console.log(data);
  });
}

getRequest();



