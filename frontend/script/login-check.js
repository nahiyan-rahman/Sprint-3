async function customer_login_check() {
    let result = await fetchJSON("http://localhost/food-ordering-system-backend/api/customer/login-check.php");
    // console.log(result['state']);
    if (result['state'] == '1')
        return true;
    else
        return false;
}