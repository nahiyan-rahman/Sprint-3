async function customer_login_check() {
    let result = await fetchJSON("../../api/customer/login-check.php");
    // console.log(result['state']);
    if (result['state'] == '1')
        return true;
    else
        return false;
}