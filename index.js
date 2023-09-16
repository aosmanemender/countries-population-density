const fetchCountriesData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      addDataPostFetching(data);
    })
    .catch((error) => console.log(`Error akhe: ${error}`));
};
fetchCountriesData();

const addDataPostFetching = (data) => {
  let content = `
    <div class="card mb-3 text-success border-success" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img id="flag-img" src="IMG_SRC" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
              <h5 class="card-title text-ellipsis">CARD_TITLE</h5>

              <p class="card-text text-ellipsis"><small class="text-body-secondary">population: POPULATION</small></p>
          </div>
        </div>
    </div>
    </div>
    `;

  data.map((element) => {
    let tempoBox = content.replace("IMG_SRC", element.flags.png);
    tempoBox = tempoBox.replace("CARD_TITLE", element.name.common);
    tempoBox = tempoBox.replace("POPULATION", element.population);

    let country = document.createElement("div");
    country.innerHTML = tempoBox;
    document.getElementById("data").appendChild(country);
  });
};

const toggleTheme = () => {
  document
    .getElementById("switch-theme")
    .addEventListener("click", function () {
      document.body.dataset.bsTheme =
        document.body.dataset.bsTheme == "light" ? "dark" : "light";
    });
};
toggleTheme();
