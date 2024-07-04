const addMovieBtn = document.querySelector("#addMovieBtn");
const titleError = document.querySelector("#title__error");
const urlError = document.querySelector("#url__error");

const validateMovieTitle = (title) => {
	if (!title) {
		return "Movie title is required.";
	} else if (title.length <= 2) {
		return "Movie title is too short.";
	} else {
		return "";
	}
};

const validateMovieURL = (url) => {
	// url = url.trim;
	const isValidProtocol =
		url.startsWith("http://") || url.startsWith("https://");

	const isValidImageFormat =
		url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith("jpeg");

	if (!isValidProtocol) {
		return "URL must start with http:// or https://";
	} else if (!isValidImageFormat) {
		return "URL must end with .jpg or .png or jpeg";
	} else {
		return "";
	}
};

const handleMovieCard = function () {
	const movieTitle = document.getElementById("movieTitle").value.trim();
	// const movieURL = document.getElementById("movieURL").value.trim();
	const testMovieUrl =
		"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg";
	titleError.textContent = "";
	urlError.textContent = "";
	titleError.style.display = "none";
	urlError.style.display = "none";

	const titleValidationError = validateMovieTitle(movieTitle);
	// const urlValidationError = validateMovieURL(movieURL);
	const urlValidationError = validateMovieURL(testMovieUrl);

	if (titleValidationError) {
		titleError.style.display = "block";
		titleError.textContent = titleValidationError;
	} else if (urlValidationError) {
		urlError.style.display = "block";
		urlError.textContent = urlValidationError;
	} else {
		const movieCard = document.createElement("div");
		movieCard.className = "movie-card";

		movieCard.innerHTML = `
            <h2>${movieTitle}</h2>
            <img src="${testMovieUrl}" alt="${movieTitle}">
        `;
		const movieCardContainer = document.getElementById("movieCards");
		console.log(movieCardContainer.childElementCount);
		if (movieCardContainer.childElementCount === 3) {
			// movieCardContainer.classList.add('')
			console.log("yes");
		}
		movieCardContainer.appendChild(movieCard);

		document.getElementById("movieTitle").value = "";
		document.getElementById("movieURL").value = "";
	}
};

addMovieBtn.addEventListener("click", handleMovieCard);
