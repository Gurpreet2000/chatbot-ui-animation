const startAnimation = (elements, reset = false) => {
	const setAnimation = (element, delay, iterationCount = 1) => {
		element.style.animation = reset
			? 'none'
			: `fadein 1s linear ${delay}s ${iterationCount} forwards`;
	};

	let delay = 0;

	for (const key in elements) {
		const element = elements[key];
		if (element.node.length) {
			element.node.forEach((item, i) => {
				item.style.opacity = 0;
				setAnimation(item, delay++);
			});
		} else {
			const count = element.count ? element.count : 1;
			setAnimation(element.node, delay++, count);
			element.node.style.opacity = 0;
		}
	}
	// if (reset) startAnimation(elements);
};

const init = () => {
	const elements = {
		header: { node: document.querySelector('.chat-bot header') },
		headerItems: { node: document.querySelector('.chat-bot header div') },
		botLogo: { node: document.querySelector('.chat-bot .bot-logo'), count: 2 },
		faqCard: { node: document.querySelector('.chat-bot .faq-card') },
		faqItems: {
			node: document.querySelectorAll('.chat-bot .faq-list .faq-item'),
		},
		faqCardButton: {
			node: document.querySelector('.chat-bot .faq-card button'),
		},
	};
	startAnimation(elements);
	document.querySelector('.reset').addEventListener('click', () => {
		startAnimation(elements, true);
		setTimeout(() => startAnimation(elements), 500);
	});
};

init();
