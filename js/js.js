$(document).ready(function ($) {
	
	// document.addEventListener("DOMContentLoaded", function() {
	//   var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	//   if ("IntersectionObserver" in window) {
	//     let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
	//       entries.forEach(function(entry) {
	//         if (entry.isIntersecting) {
	//           let lazyImage = entry.target;
	//           lazyImage.src = lazyImage.dataset.src;
	//           lazyImage.srcset = lazyImage.dataset.srcset;
	//           lazyImage.classList.remove("lazy");
	//           lazyImageObserver.unobserve(lazyImage);
	//         }
	//       });
	//       console.log('lazy 1')
	//     });

	//     lazyImages.forEach(function(lazyImage) {
	//       lazyImageObserver.observe(lazyImage);
	//       console.log('lazy 2')
	//     });
	//   } else {
	//     console.log('fail')
	//   }
	// });
	// console.log('hi')

	// document.addEventListener("DOMContentLoaded", function() {
	//   let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	//   let active = false;

	//   const lazyLoad = function() {
	//     if (active === false) {
	//       active = true;

	//       setTimeout(function() {
	//         lazyImages.forEach(function(lazyImage) {
	//           if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
	//             lazyImage.src = lazyImage.dataset.src;
	//             lazyImage.srcset = lazyImage.dataset.srcset;
	//             lazyImage.classList.remove("lazy");

	//             lazyImages = lazyImages.filter(function(image) {
	//               return image !== lazyImage;
	//             });

	//             if (lazyImages.length === 0) {
	//               document.removeEventListener("scroll", lazyLoad);
	//               window.removeEventListener("resize", lazyLoad);
	//               window.removeEventListener("orientationchange", lazyLoad);
	//             }
	//           }
	//         });

	//         console.log('yaya');

	//         active = false;
	//       }, 200);
	//     }
	//   };
	//   console.log('hello');
	// });
	// 	  console.log('hello2');
});
