function askQuestions () {


	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is named ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'Assembly') {
		console.log('Hi');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour)
	}

}

//  when the page has loaded
$(function () {

	//hide the content 
	$('h3').next().hide();

	//when user clicks image, aks questions
	$('img').on('click', askQuestions);

	//when the user clicks an h3
	$('h3').on('click', function () {

		// toggle the next element
		$(this).next().slideToggle();

	});

});