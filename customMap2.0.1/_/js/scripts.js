$(document).ready(function(){function a(){var a={center:{lat:45.523375,lng:-122.676201},zoom:8},b=new google.maps.Map(document.getElementById("map-canvas"),a),c=new google.maps.LatLng(45.554258,-122.622123),d='<h2>United Nations Association Portland Chapter</h2><div class="floatLeft"><p>We are a nonprofit, nonpartisan organization that supports the work of the<br>United Nations in the Oregon area and we encourage active civic participation<br> in the most important social and economic issues facing the world today.</p></div>',e=new google.maps.InfoWindow({content:d}),f=new google.maps.Marker({position:c,map:b,title:"UNNPortlandChapterMarker",id:"UNNPortlandChapterMarker"});google.maps.event.addListener(f,"click",function(){null==e.open()?e.open(b,f):1==e.open()&&(e.close(b,f),console.log("This"))}),google.maps.event.addDomListener(document.getElementById("UNNPortlandChapterButton"),"click",function(){b.setCenter(f.getPosition()),e.open(b,f)})}$.get("_/php/AJAXJSON.php",function(a){var b=jQuery.parseJSON(a);console.log(b);var c=[];for(var d in b)b.hasOwnProperty(d)&&console.log(a[d]);console.log(c)}),google.maps.event.addDomListener(window,"load",a)});