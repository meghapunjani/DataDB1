$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json",
  data: {},
  success: function(data) {
    var content = "<table>"
    for(i=0; i<3; i++){
      content += '<tr><td>' + text(JSON.stringify(data, null, "\t") + '</td></tr>';
    }
    content += "</table>"
    $('#data_table').append(content);


    //$("pre").text(JSON.stringify(data, null, "\t"));
  },
  error: function(msg) {
    //todo: handle error gracefully
  }
});
