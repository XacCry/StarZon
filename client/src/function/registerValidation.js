import check from "lodash";

function registerValidation(values) {

    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if (values.email === "") {
        error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    } else {
        error.email = ""
    }

    if (values.mobileNumber === "") {
        error.mobileNumber = "Mobile Number should not be empty"
    } else {
        error.mobileNumber = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    } else {
        error.password = ""
    }


    if (values.cfPassword === "") {
        error.cfPassword = "Confirm Password should not be empty"
    } else if (check.isEqual(values.cfPassword, values.password)) {
        error.cfPassword = ""
    } else {
        error.cfPassword = "Confirm Password does not match"
    }

    return error;
}

export default registerValidation;