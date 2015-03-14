// Kristin Skelton 3/13/15 Final Project
// General js for Tracksuit Wedding website

$(document).ready(function(){
	//Ajax to get the IP address of the user
	$.ajax({
		url: 'http://httpbin.org/get',
		type: 'GET',
		dataType: 'json',
	}).done(function(data){
		//Add the IP address to the footer of each page
		$('.footer').append('<br/><div>IP Address: ' + data.origin + '</div>');
		$('.footer-images').append('<br/><div>IP Address: ' + data.origin + '</div>');
		$('.last-contact').append('<br/><br/><div>IP Address: ' + data.origin + '</div>');
	});
	

	//When the author button is pressed on the home page it will display the author and class from localStorage
	$('button').click(function(){
		localStorage.setItem('first-name', 'Kristin');
		localStorage.setItem('last-name', 'Skelton');
		localStorage.setItem('course-title', 'Advanced Web Design');

		var fname = localStorage.getItem('first-name');
		var lname = localStorage.getItem('last-name');
		var course = localStorage.getItem('course-title');

		$('#author-message').append('<div>The author of this page is ' + fname + ' ' + lname + '. This was a project for ' + course + '.');
	});



});



