
/**
 * Signin Component
 */

var verification_code = null;

var createform = null;

var SigninContent = () => {

    return (
        <div>
            <img src="images/logo_bw.png" width={"125"} height={"125"} alt="Logo" className="logo" /> <p/>
            <form id="signinform" name="signin" method="post" onSubmit={validateSigninForm} encType={"form-data"}>
                <input type={"email"} name="email" placeholder="Email" /> <p/>
                <input type={"password"} name="password" placeholder="Password" /> <p/>
                <a onClick={showForgotForm} href="" target={"_self"}>Forgot password</a> <p/>
                <button type="submit">Signin</button> <p/>
                <a onClick={showCreateForm} href="" target={"_self"}>Create account</a>
            </form><p/>
            <FPopup id="createa" item = {CreateForm} close = {closeCreateForm} /> <p/>
            <FPopup id="verifya" item = {VerifyForm} close = {closeVerifyForm} /> <p/>
            <FPopup id="forgota" item = {ForgotForm} close = {closeForgotForm} /> <p/>
        </div>
    );
};

var validateSigninForm = (ev) => {

    let state = true;

    if(document.signin.email.value == "" && state) {
        state = false;
        showAlert("Please provide your email!");
        document.signin.email.focus();
    }

    if(document.signin.password.value == "" && state) {
        state = false;
        showAlert("Please provide your password!");
        document.signin.password.focus();
    }

    if((document.signin.password.value.length < 7 ) && state) {
        state = false;
        showAlert("Password must be 7 or more characters!");
        document.signin.password.focus();
    }

    /**
     * Do the server login
     */

    if(state) {
        console.log(new FormData(document.getElementById("signinform")).get("email"));
        fetch(backendUrl+"signin", {
            method: "post",
            mode : "cors",
            body : new FormData(document.getElementById("signinform"))
        })
        .then((res) => res.text())
        .then((res) => {
            if(res.startsWith("Success!")) {
                showAlert(res.split("-")[0]);
                let expiry = new Date(Date.now() + (6000*60)*168).toUTCString();
                document.cookie = "reost_user="+res.split("-")[1]+";expires="+expiry;
                setTimeout(() => {
                    document.location = "dashboard.html";
                },3000);
            }

            else {
                showAlert(res);
            }
        })
        .catch((err) => {
            showAlert(err);
        })
        .finally(()=>{
            console.log("ajax")
        });

    }

    ev.preventDefault();
    

};

var showForgotForm = (ev) => {
    showById("forgota");
    ev.preventDefault();
}

var showCreateForm = (ev) => {
    showById("createa");
    ev.preventDefault();
}

var showVerifyForm = () => {
    showById("verifya");
}

var closeForgotForm = () => {
    closeById("forgota");
}

var closeVerifyForm = () => {
    closeById("verifya");
}

var closeCreateForm = () => {
    closeById("createa");
}

/**
 * Create form component
 */

var CreateForm = () => {

    return (
        <div>
            <big>Create a reost account</big> <p/>
            <form id="createform" name="create" method="post" onSubmit={validateCreateForm}>
                <input type={"text"} name="fname" placeholder="First name" /> <p/>
                <input type={"text"} name="lname" placeholder="Last name" /> <p/>
                <input type={"email"} name="email" placeholder="Email" /> <p/>
                <input type={"tel"} name="phone" placeholder="Phone" /> <p/>
                <select name="gender">
                    <option value={""} selected>Select gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                </select> <p/>
                <input type={"text"} name="address" placeholder="Address (Country - City)" /> <p/>
                <input type={"password"} name="password" placeholder="Password" /> <p/>
                <input type={"password"} name="conpassword" placeholder="Confirm password" /> <p/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

var validateCreateForm = (ev) => {

    let state = true;

    if(document.create.fname.value == "" && state) {
        state = false;
        showAlert("Please provide first name!");
        document.create.fname.focus();
    }

    if(document.create.lname.value == "" && state) {
        state = false;
        showAlert("Please provide last name!");
        document.create.lname.focus();
    }

    if(document.create.email.value == "" && state) {
        state = false;
        showAlert("Please provide email!");
        document.create.email.focus();
    }

    if(document.create.phone.value == "" && state) {
        state = false;
        showAlert("Please provide phone!");
        document.create.phone.focus();
    }

    if(document.create.gender.value == "" && state) {
        state = false;
        showAlert("Please select gender!");
        document.create.gender.focus();
    }

    if(document.create.address.value == "" && state) {
        state = false;
        showAlert("Please provide address!");
        document.create.address.focus();
    }

    if(document.create.password.value == "" && state) {
        state = false;
        showAlert("Please provide password!");
        document.create.password.focus();
    }

    if((document.create.password.value.length < 7 ) && state) {
        state = false;
        showAlert("Password must be 7 or more characters!");
        document.create.password.focus();
    }

    if(document.create.conpassword.value == "" && state) {
        state = false;
        showAlert("Please confirm your password!");
        document.create.conpassword.focus();
    }

    if(document.create.password.value != document.create.conpassword.value && state) {
        state = false;
        showAlert("Password does not match!");
        document.create.conpassword.focus();
    }

    /**
     * Really go to the verification state!
     */

    if(state) {

        createform = new FormData(document.getElementById("createform"));

        fetch(backendUrl+"verifyemail/"+document.create.email.value, {
            method : "post"
        })
        .then((res) => res.text())
        .then((res) => {
            verification_code = res;
        })
        .catch((err) => showAlert(err))
        .finally(()=> console.log("ajax"));

        //verify
        closeCreateForm();

        showVerifyForm();

    }

    ev.preventDefault();

}

var VerifyForm = () => {

    return (
        <div>
            <big>Verify your email</big> <p/>
            Enter the verification code sent to your email in the feild below. <p/>
            <form id="verifyform" name="verify" method="post" onSubmit={verifyEmail}>
                <input type={"number"} name="code" placeholder="Code" minLength={"7"} maxLength={"7"} /> <p/>
                <button type="submit">Verify</button>
            </form>
        </div>
    );
};

var verifyEmail = (ev) => {

    let state = true;

    if(document.verify.code.value == "" && state) {
        state = false;
        showAlert("Please enter the code!");
        document.verify.code.focus();
    }

    if((document.verify.code.value.length < 7 || document.verify.code.value.length > 7) && state) {
        state = false;
        showAlert("Code must be exactly 7 digits!");
        document.verify.code.focus();
    }

    if(state) {

        //verify

        if(document.verify.code.value == verification_code) {

            fetch(backendUrl+"createaccount", {
                method : "post",
                body : createform
            })
            .then((res) => res.text())
            .then((res) => {
                showAlert(res);
                setTimeout(()=> {
                    document.location = "dashboard.html";
                },5000);
            })
            .catch((err)=> showAlert(err))
            .finally(() => console.log("ajax"));
            

        }

        else {
            showAlert("Invalid verification code!");
        }

    }

    ev.preventDefault();

}

var ForgotForm = () => {

    return (
        <div>
            <big>Account recovery</big> <p/>
            Submit registered email to recover your account. <p/>
            <form id="forgotform" name="forgot" method="post" onSubmit={validateForgot}>
                <input type={"email"} name="email" placeholder="Email" /> <p/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

var validateForgot = (ev) => {

    let state = true;

    if(document.forgot.email.value == "" && state) {
        state = false;
        showAlert("Please provide email!");
        document.forgot.email.focus();
    }

    if(state) {

        //Do recover

        fetch(backendUrl+"recoveraccount", {
            method : "post",
            body : new FormData(document.getElementById("forgotform"))
        })
        .then((res) => res.text())
        .then((res) => {
            if(res.startsWith("Success!")) {
                showAlert(res);
                setTimeout(() => {
                    closeForgotForm();
                },5000);
            }

            else {
                showAlert(res);
            }
        })
        .catch((err) => showAlert(err))
        .finally(() => console.log("ajax"));

    }

    ev.preventDefault();

};