// hero slider
$(document).ready(function () {
	var owl = $(".hero-slider");
	owl.owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		items: 1,
	});

	// Custom Button
	$(".customNextBtn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".customPreviousBtn").click(function () {
		owl.trigger("prev.owl.carousel");
	});
});

// toggle modal
$(".video-btn").click(function () {
	$("#modal").css("display", "flex");
});

$(".close-btn").click(function () {
	$("#modal").css("display", "none");
});

// posts slider
$(document).ready(function () {
	var owl = $(".posts-slider");
	owl.owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		nav: false,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},

			992: {
				items: 3,
			},
		},
	});

	// Custom Button
	$(".posts-btns__next").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".posts-btns__prev").click(function () {
		owl.trigger("prev.owl.carousel");
	});
});

// counter up
class CountUp {
	constructor(triggerEl, counterEl) {
		const counter = document.querySelector(counterEl);
		const trigger = document.querySelector(triggerEl);
		let num = 0;

		const countUp = () => {
			if (num <= counter.dataset.stop) ++num;
			counter.textContent = num;
		};

		const observer = new IntersectionObserver(
			(el) => {
				if (el[0].isIntersecting) {
					const interval = setInterval(() => {
						num < counter.dataset.stop ? countUp() : clearInterval(interval);
					}, counter.dataset.speed);
				}
			},
			{ threshold: [0] }
		);

		observer.observe(trigger);
	}
}

// Initialize counters:
new CountUp("#counters", "#counter1");
new CountUp("#counters", "#counter2");
new CountUp("#counters", "#counter3");
new CountUp("#counters", "#counter4");
new CountUp("#counters", "#counter5");

var triggerTabList = [].slice.call(document.querySelectorAll("#myTab button"));
triggerTabList.forEach(function (triggerEl) {
	var tabTrigger = new bootstrap.Tab(triggerEl);

	triggerEl.addEventListener("click", function (event) {
		event.preventDefault();
		tabTrigger.show();
	});
});
