$(document).ready(function () {
	$("#searchHome").keyup(function() {
		var searchVal = $("#searchHome").val();
		$.post("?page=search&action=search",
			{search: searchVal})
		.done((data) => {
			$("#searchComp").html("");
			$("#searchComp").fadeIn();
			$("#searchComp").append("<div id='drpdwnSrh' class='dropdown-menu show'></div>");
			var obj = JSON.parse(data);
			$.each(obj[0], function(k, v) {
				$("#drpdwnSrh").append("<a href='/Projet_Web_tweet_academie/profile/"+v.username+"'"
					+ " class='dropdown-item'>"
					+ "<img class='icon-tweet' src='"
					+v.avatar+"'>"
					+"@" + v.username + "</a>");
			});
			$.each(obj[1], function(k, v) {
				// <a href='#' class='dropdown-item'>
				$("#drpdwnSrh").append("<a href='/Projet_Web_tweet_academie/tags/"+v.name_hashtag+"'"
					+" class='dropdown-item'>"
					+ "#" + v.name_hashtag + "</a>");
			});
			if (searchVal == "") {
				$("#drpdwnSrh").removeClass("show");
			}
			// $("#searchComp").append("</ul>");
		});
	});

	$("#formSearch").submit(function(e) {
		e.preventDefault();
		var search = $("#searchComp a")[0].textContent;
		if (search.slice(0,1) == "@") {
			location.href = "/Projet_Web_tweet_academie/profile/" + search.substring(1, search.length);
		} else if (search.slice(0,1) == "#") {
			location.href = "/Projet_Web_tweet_academie/tags/" + search.substring(1, search.length);
		}
	});
});