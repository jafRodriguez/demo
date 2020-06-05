var mongoose = require('mongoose'),
	Campground = require('./models/campground'),
	Comment = require('./models/comment');
var data = [
	{
		name        : "Cloud's Rest",
		image       : 'https://pixabay.com/get/52e3d3404a55af14f1dc84609620367d1c3ed9e04e507440742f7fdd934acc_340.png',
		description :
			'Bacon ipsum dolor amet kielbasa drumstick porchetta brisket pig ham pastrami jowl sausage chicken bacon tri-tip. Chuck pancetta fatback chicken cupim leberkas. Fatback rump capicola chicken shankle venison. Short loin porchetta venison sausage chuck. Andouille spare ribs meatloaf pig venison sausage t-bone kielbasa short ribs jowl strip steak burgdoggen beef ribs. Spare ribs doner bacon filet mignon cow jerky. Leberkas frankfurter shoulder, hamburger burgdoggen alcatra short loin jowl pork loin filet mignon.'
	},
	{
		name        : 'Desert Mesa',
		image       : 'https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507440742f7fdd934acc_340.jpg',
		description :
			'Bacon ipsum dolor amet kielbasa drumstick porchetta brisket pig ham pastrami jowl sausage chicken bacon tri-tip. Chuck pancetta fatback chicken cupim leberkas. Fatback rump capicola chicken shankle venison. Short loin porchetta venison sausage chuck. Andouille spare ribs meatloaf pig venison sausage t-bone kielbasa short ribs jowl strip steak burgdoggen beef ribs. Spare ribs doner bacon filet mignon cow jerky. Leberkas frankfurter shoulder, hamburger burgdoggen alcatra short loin jowl pork loin filet mignon.'
	},
	{
		name        : 'Canyon FLoor',
		image       : 'https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507440742f7fdd934acc_340.jpg',
		description :
			'Bacon ipsum dolor amet kielbasa drumstick porchetta brisket pig ham pastrami jowl sausage chicken bacon tri-tip. Chuck pancetta fatback chicken cupim leberkas. Fatback rump capicola chicken shankle venison. Short loin porchetta venison sausage chuck. Andouille spare ribs meatloaf pig venison sausage t-bone kielbasa short ribs jowl strip steak burgdoggen beef ribs. Spare ribs doner bacon filet mignon cow jerky. Leberkas frankfurter shoulder, hamburger burgdoggen alcatra short loin jowl pork loin filet mignon.'
	}
];

function seedDB() {
	Campground.remove({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed campgrounds!');
		Comment.remove({}, function(err) {
			if (err) {
				console.log(err);
			}
			console.log('removed comments!');
			data.forEach(function(seed) {
				Campground.create(seed, function(err, campground) {
					if (err) {
						console.log(err);
					} else {
						console.log('added a campground');
						Comment.create(
							{
								text   : 'This place is great, but I wish there was internet',
								author : 'Homer'
							},
							function(err, comment) {
								if (err) {
									console.log(err);
								} else {
									campground.comments.push(comment);
									campground.save();
									console.log('Created new comment');
								}
							}
						);
					}
				});
			});
		});
	});
}

module.exports = seedDB;
