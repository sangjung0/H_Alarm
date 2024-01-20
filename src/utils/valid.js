export const isEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email) && email.length <= 254;
}

export const isPhoneNumber = phoneNumber => {
    const re = /^\d{3}-\d{3,4}-\d{4}$/;
    return re.test(phoneNumber);
}

export const isPassword = password => {
    return true;
    // const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/;
    // return re.test(password) && password.length >= 8 && password.length <= 30;
}