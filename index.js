const fadeInList = () => {
	const delay = 4;
	const faqItems = document.querySelectorAll('.faq-list .faq-item');
	faqItems.forEach((item, i) => {
		item.style.animation = `fadein 1s linear ${delay + i}s forwards`;
	});
	const faqCardButton = document.querySelector('.faq-card button');
	faqCardButton.style.animation = `fadein 1s linear ${
		delay + faqItems.length
	}s forwards`;
};

fadeInList();
