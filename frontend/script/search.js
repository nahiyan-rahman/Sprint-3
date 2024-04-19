async function showRestaurants(output_container, link) {
    let restaurants = await fetchJSON(link);
    let output = "";

    restaurants.forEach(restaurant => {
        output += `
        <div inline-block flex>
        <a href="restaurant.html?id=${restaurant['id']}">
            <h4> ${restaurant['name']} </h4>
        </a>
        ${restaurant['address']} - <i>${restaurant['email']}</i>
        </div>
        `;
    });

    $(output_container).innerHTML = output;
}

function search() {
    let parameter = GET();
    if (parameter['q'] && parameter['restaurant'] !== undefined) {
        $('#title').innerHTML = `<h3 no-margin>Restaurants like ${parameter['q'].replace(/\+/g, ' ')} </h3>`;
        showRestaurants("#results", "http://localhost/food-ordering-system-backend/api/common/restaurant-search.php?restaurant_name=" + parameter['q']);
    }
    else if (parameter['q'] && parameter['food'] !== undefined) {
        $('#title').innerHTML = `<h3 no-margin>Foods like ${parameter['q'].replace(/\+/g, ' ')} </h3>`;
        showFoods("#results", "http://localhost/food-ordering-system-backend/api/common/food-search.php?query=" + parameter['q']);
    }
}

search();