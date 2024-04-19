async function login() {

    let data = getInputs("login-form");

    let result = await post(
        "http://localhost/food-ordering-system-backend/api/customer/customer-login.php",
        data);

    if (result['state'] === '1') {
        output('message', '<h3>Login successful</h3>');
        await goTo('./');
    }
    else if (result['state'] === '0')
        output('message', '<h3>Incorrect ID/pass</h3>');
    else
        output('message', '<h3>Something went wrong :(</h3>');
}
async function register() {

    let data = getInputs("registration-form");

    let result = await post(
        "http://localhost/food-ordering-system-backend/api/customer/customer-register.php",
        data);

    console.log(result);

    if (typeof(result)!="object")
        result = JSON.parse(result);

    if (result['state'] == '1') {
        output('message', '<h3>Registration successful. You may log in now</h3>');
    }
    else if (result['state'] == '2')
        output('message', '<h3>Email already registered</h3>');
    else if (result['state'] == '3')
        output('message', '<h3>Fill up all the fields</h3>');
    else
        output('message', '<h3>Something went wrong :(</h3>');
}

async function loginCheck() {
    let login_state = await customer_login_check();
    if (login_state === true)
        goTo('./index.html');
}

loginCheck();