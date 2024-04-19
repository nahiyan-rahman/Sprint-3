async function addFood() {

    let data = getInputs("food-input");

    console.log(data);

    let result = await post(
        "http://localhost/food-ordering-system-backend/api/restaurants/add-food.php",
        data);

    console.log(result);

    if (result['state'] == '1') {
        output('message', '<h3>Food item added</h3>');
    }
    else if (result['state'] == '3')
        output('message', '<h3>Make sure to fill up all the fields:(</h3>');
    else
        output('message', '<h3>Something went wrong</h3>');

}

async function loginCheck() {
    let login_state = await login_check();
    if (login_state == false)
        goTo('./login.html');
}

loginCheck();