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
		
		// for each row. clone row template. modify data, attach to table, and show.
		var items = [];
		$.each( data, function( key, val ) {
			addRow(val);
		});
		
		
		$("#main-table tr").click(function(){
			//$(this).addClass('selected').siblings().removeClass('selected');
			$(this).addClass('selected');
			var value=$(this).find('td:first').html();
			//alert(value);    
		});
	});  
    
    
    /**
	 * create new row on detail table and attach it
	 */
	function addRow(item) {
		if (typeof item === "object") {
			// clone, then attach
			var row = $(".row-template").clone();
			row.removeClass("row-template");
			row.addClass("row");
			row.find(".user-tumb").attr("src", item.photo);
			row.find(".user-name").text(item.name);
			row.children(".user-email").text(item.email);
			row.children(".user-phone").text(item.phone);
			row.children(".user-distance").text(item.distance);
			row.children(".user-location").text(item.location);
			
			$("#main-table").children("tbody").append(row);
		}
		/*
		<td class="user-photo"><img class="user-tumb" src="https://raw.githubusercontent.com/hackathonprojs/cisco16/master/img/person/billgates.jpg"></td>
			<td class="user-name">Manolo Smith</td>
			<td class="user-email">jhony@site.com</td>
			<td class="user-phone">1-555-222-333</td>
			<td class="user-distance">1</td>
			<td class="user-location">Conf Room 1</td>
		*/
	}
    
  });
})();