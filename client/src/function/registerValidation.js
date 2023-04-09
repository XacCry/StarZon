function registerValidation(values) {

    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if (values.email === "") {
        error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }


    if (values.cfPassword === "") {
        error.cfPassword = "Confirm Password should not be empty"
    } else if (values.cfPassword !== values.password) {
        error.cfPassword = "Confirm Password does not match"
    } else {
        error.cfPassword = ""
    }

    return error;
}

export default registerValidation;