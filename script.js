function searchMovie() {
	const searchInput = document.getElementById("searchInput").value;
	const encodedTitle = encodeURIComponent(searchInput);
	const apiKey = "258a2345";
	const apiUrl = `https://www.omdbapi.com/?t=${encodedTitle}&apikey=${apiKey}`;

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			displayMovieDetails(data);
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function displayMovieDetails(movieData) {
	const movieDetails = document.getElementById("movieDetails");
	movieDetails.innerHTML = "";

	if (movieData.Response === "True") {
		const { Title, Year, Poster, Rated, Genre, Director, imdbRating } = movieData;

		const movieHTML = `
      <h2>${Title} (${Year})</h2>
      <img src="${Poster}" alt="Movie Poster" height=500>
      <p><strong>Rated:</strong> ${Rated}</p>
      <p><strong>Genre:</strong> ${Genre}</p>
      <p><strong>Director:</strong> ${Director}</p>
	  <p><strong>Rating:</strong> <span style="color: #1E90FF; font-weight: bold;">${imdbRating}/10</span> </p>
    `;

		movieDetails.innerHTML = movieHTML;
	}
	else {
		movieDetails.innerHTML = '<p style="color: red; font-weight: bold;">No Movie Found! Please try again.</p>';
	}
}