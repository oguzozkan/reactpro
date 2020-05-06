

function setWeatherData(params) {

	if (params && Object.keys(params).length) {

		var video = document.getElementById('vid');
		var source = document.createElement('source');
		source.setAttribute('type', "video/mp4");

		var currentTemperature = document.getElementById('currentTemperature');
		currentTemperature.innerHTML = params.current.temperature + '°';

		var weatherState = params.current.iconPhrase;

		if (weatherState.includes("Showers") || weatherState.includes("Rain") || weatherState.includes("T-Storms") || weatherState.includes("Sleet")) {
			// RAIN & SOUP
			source.setAttribute('src', "videos/soup.mp4");
		}
		else if (weatherState.includes("Flurries") || weatherState.includes("Snow")) {
			// SNOW & RAMEN
			source.setAttribute('src', "videos/ramen.mp4");
		}
		else if (params.current.temperature > 31) {
			// NOT COLD & PIZZA
			source.setAttribute('src', "videos/pizza.mp4");
		}
		else {
			// COLD & PASTA
			source.setAttribute('src', "videos/pasta.mp4");

		}

		video.appendChild(source);
		var firstLoad = true;
		video.addEventListener("play", function () {
			if (firstLoad) {
				firstLoad = false;

				video.currentTime = 0.01;
				video.pause();
			}
		});

	}
}
