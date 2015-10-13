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

	tl1.to(acsBackground, 12, { scale: 0.5, y: 0, ease: SlowMo.ease.config(0.1, 0.1, false)}, '+=1')

	;

	var tl2 = new TimelineMax();

	tl2.from(txt1, 0.5, { top: 129, opacity: 0, ease: Power1.easeIn }, '+=1.25')
		.from(txt2, 0.5, { opacity: 0, ease: Power1.easeOut }, '+=0.5')
		.to(txt1, 0.5, { opacity: 0, ease: Power1.easeIn }, '+=2')
		.to(txt2, 0.75, { opacity: 0, ease: Power1.easeIn }, '+=0.5')
		.from(logo, 0.5, { top: 8, opacity: 0, ease: Power1.easeIn}, '+=0.75')
		.from(txt3, 0.5, { top: 91, opacity: 0, ease: Power1.easeIn}, '+=0.3')
		.to(txt3, 0.3, { opacity: 0, ease: Power1.easeIn}, '+=1.25')
		.from(txt4, 0.5, { top: 167, opacity: 0, ease: Power1.easeInOut }, 'lives+=0.75')
		.from(txt5, 0.5, { top: 183, opacity: 0, ease: Power1.easeInOut },'-=0.2')
		.to(txt4, 0.3, { opacity: 0, ease: Power1.easeInOut }, '+=1.25')
		.to(txt5, 0.3, { opacity: 0, ease: Power1.easeInOut }, '-=0.3')
		.from(txt6, 0.5, { top: 138, opacity: 0, ease: Power1.easeInOut }, '+=0.25')
		.from(donate, 0.5, { top: 162, opacity: 0, ease: Power1.easeInOut })
	;
	// tl2.seek('lives');
}());