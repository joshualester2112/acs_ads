(function(){
	var acsBackground = document.getElementById('acs-ad-background'),
		txt1 = document.getElementById('acs-ad-txt1'),
		txt2 = document.getElementById('acs-ad-txt2'),
		txt3 = document.getElementById('acs-ad-txt3'),
		logo = document.getElementById('acs-ad-logo'),
		txt4 = document.getElementById('acs-ad-txt4'),
		txt5 = document.getElementById('acs-ad-txt5'),
		txt6 = document.getElementById('acs-ad-txt6'),
		donate = document.getElementById('acs-donate')
	;

	var tl1 = new TimelineMax();


	tl1.to(acsBackground, 7, { scale: 1.6, ease: Power1.easeInOut }, '4');

	var tl2 = new TimelineMax();

	tl2.from(txt1, 0.75, { top: 129, opacity: 0, ease: Power1.easeIn }, '1.5')
		.from(txt2, 0.75, { opacity: 0, ease: Power1.easeOut }, '+=1')
		.to(txt1, 0.6, { opacity: 0, ease: Power1.easeIn }, '+=2')
		.to(txt2, 0.6, { opacity: 0, ease: Power1.easeIn }, '-=.6')
		.from(logo, 0.75, { top: 8, opacity: 0, ease: Power1.easeIn}, '+=2')
		.from(txt3, 0.75, { top: 91, opacity: 0, ease: Power1.easeIn}, '+=1')
		.to(txt3, 0.6, { opacity: 0, ease: Power1.easeIn}, '+=2')
		.to(acsBackground, 7, { scale: 1, ease: Power1.easeInOut }, '13')
		.from(txt4, 0.75, { top: 167, opacity: 0, ease: Power1.easeInOut }, 'lives')
		.from(txt5, 0.75, { top: 183, opacity: 0, ease: Power1.easeInOut })
		.to(txt4, 0.6, { opacity: 0, ease: Power1.easeInOut }, '+=2')
		.to(txt5, 0.6, { opacity: 0, ease: Power1.easeInOut }, '-=0.75')
		.from(txt6, 0.75, { top: 138, opacity: 0, ease: Power1.easeInOut }, '+=1')
		.from(donate, 0.75, { top: 162, opacity: 0, ease: Power1.easeInOut }, '+=1')
	;

}());