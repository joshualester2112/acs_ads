(function(){
	var ACSHOPE = ACSHOPE || {};

	ACSHOPE.event = {};

	ACSHOPE.init = {
		animateAd: function () {
			var veil 			= document.getElementById('veil'),
				acsBG 			= document.getElementById('acs-ad-background'),
				txt1 			= document.getElementById('acs-ad-txt1'),
				txt2 			= document.getElementById('acs-ad-txt2'),
				txt3 			= document.getElementById('acs-ad-txt3'),
				logo 			= document.getElementById('acs-ad-logo'),
				txt4 			= document.getElementById('acs-ad-txt4'),
				txt5 			= document.getElementById('acs-ad-txt5'),
				txt6 			= document.getElementById('acs-ad-txt6'),
				txt7 			= document.getElementById('acs-ad-txt7'),
				donate 			= document.getElementById('acs-donate')
			;

			var tl1 = new TimelineMax();
			var tl2 = new TimelineMax();

			tl1.to(veil, 0.6, {opacity: 0, ease: Power0.noEase})
				.to(acsBG, 6, { scale: 1.6, y: -25, ease: Power1.easeInOut}, 'hold-=0.3')
				.to(acsBG, 6, { scale: 1, y: 0, ease: Power1.easeInOut}, '-=0')
			;

			tl2.from(txt1, 0.5, { top: 129, opacity: 0, ease: Power1.easeIn }, '+=0.3')
				.from(txt2, 0.5, { opacity: 0, ease: Power1.easeOut }, '+=0.5')
				.to(txt1, 0.5, { opacity: 0, ease: Power1.easeIn }, 'hope+=2.2')
				.to(txt2, 0.5, { opacity: 0, ease: Power1.easeIn }, '-=0.5')
				.from(txt3, 0.5, { top: 91, opacity: 0, ease: Power1.easeIn}, '+=0.5')
				.to(txt3, 0.3, { opacity: 0, ease: Power1.easeIn}, '+=1.2')
				.from(logo, 0.5, { top: 8, opacity: 0, ease: Power1.easeIn}, '+=1.3')
				.from(txt4, 0.5, { top: 167, opacity: 0, ease: Power1.easeInOut }, 'lives+=1.2')
				.from(txt5, 0.5, { top: 183, opacity: 0, ease: Power1.easeInOut },'-=0.2')
				.to(txt4, 0.3, { opacity: 0, ease: Power1.easeInOut }, '+=2.2')
				.to(txt5, 0.3, { opacity: 0, ease: Power1.easeInOut }, '-=0.3')
				.from(txt6, 0.5, { top: 215, opacity: 0, ease: Power1.easeInOut }, '+=0')
				.from(txt7, 0.5, { top: 138, opacity: 0, ease: Power1.easeInOut }, '+=0.3')
				.from(donate, 0.5, { top: 162, opacity: 0, ease: Power1.easeInOut }, 'donate')
			;
		}
	}
	ACSHOPE.init.animateAd();
}());