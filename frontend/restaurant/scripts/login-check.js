async function login_check() {
    let result = await fetchJSON("http://localhost/food-ordering-system-backend/api/restaurants/login-check.php");
    console.log(result['state']);
    if (result['state'] == '1')
        return true;
    else
        return false;
}