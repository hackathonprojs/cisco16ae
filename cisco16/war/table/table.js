//    Demo json  loaded from dropbox 
//    Data = http://codepen.io/nakome/pen/DnEvr.js
//[   
//   {
//      "photo":"image url ",
//      "name":"Jhon",
//      "last":"Smith",
//      "email":"jhony@site.com",
//      "phone":"1-555-222-333",
//      "web":"http://jhonSmith.com"
//   },
//   { 
//      "photo":"image url",
//      "name":"Carla",
//      "last":"Doe",
//      "email":"carladoe@site.com",
//      "phone":"1-333-111-555",
//      "web":"http://carladoe.com"
//   }
// ]


(function(){
  
  
  // on ready render data
  $(document).ready(function() {
    //$.table_of_contacts.get.init();
    
	  
	$.getJSON("sampledata.jsp", function(data){
		var items = [];
		alert(data);
		  $.each( data, function( key, val ) {
		    items.push( "<li id='" + key + "'>" + val + "</li>" );
		  });
		alert(items.join(""));
	});  
    $("#main-table tr").click(function(){
		//$(this).addClass('selected').siblings().removeClass('selected');
		$(this).addClass('selected');
		var value=$(this).find('td:first').html();
		//alert(value);    
	});
  });
})();