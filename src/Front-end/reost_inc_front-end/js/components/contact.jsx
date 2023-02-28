
/*
Contact page content
*/

var ContactContent = () => {

    return (
        <div>
            <img src="images/camping.svg" className="logo" width={"250"} height={"250"} alt="Connect" />
            <table border={"0"} cellPadding={"4"} cellSpacing={"4"}><tr><td valign="center">
            <p>
                <table border={"0"} cellPadding={"4"} cellSpacing={"4"}>
                    <td valign="center">
                        <img src="images/businessman.svg" width="51" height={"51"} alt="Phone" />
                    </td>
                    <td valign="center">
                        Muwanguzi Silas
                    </td>
                </table>
            </p>
            <p>
                <table border={"0"} cellPadding={"4"} cellSpacing={"4"}>
                    <td valign="center">
                        <img src="images/phone.svg" width="51" height={"51"} alt="Phone" />
                    </td>
                    <td valign="center">
                        +256 759 730 932
                    </td>
                </table>
            </p>
            <p>
                <table border={"0"} cellPadding={"4"} cellSpacing={"4"}>
                    <td valign="center">
                        <img src="images/email.svg" width="51" height={"51"} alt="Phone" />
                    </td>
                    <td valign="center">
                        reost.co@gmail.com
                    </td>
                </table>
            </p>
            </td></tr></table>
            <hr/>
            <big>Send us a direct message</big> <p/>

            <form id="contactform" name="contact" method="post" onSubmit={sendMessage}>
                <input type={"text"} name="name" placeholder="Full names" /> <p/>
                <input type={"tel"} name="phone" placeholder="Phone" /> <p/>
                <input type={"email"} name="email" placeholder="Email" /> <p/>
                <input type={"text"} name="subject" placeholder="Subject" /> <p/>
                <textarea rows={"7"} cols="12" name="message" placeholder="Message"></textarea> <p/>
                <button type="submit">Send message</button>
            </form>

            <p/>
        </div>
    );
}

var sendMessage = (e) => {

    let bool = true;

    //validating first
    if(document.contact.name.value === "" && bool) {
        showAlert("Please provide your full names!");
        document.contact.name.focus();
        bool = false;
    }
    if(document.contact.phone.value === "" && bool) {
        showAlert("Please provide your phone number!");
        document.contact.phone.focus();
        bool = false;
    }
    if(document.contact.email.value === "" && bool) {
        showAlert("Please provide your email!");
        document.contact.email.focus();
        bool = false;
    }
    if(document.contact.subject.value === "" && bool) {
        showAlert("Please provide the subject!");
        document.contact.subject.focus();
        bool = false;
    }
    if(document.contact.message.value === "" && bool) {
        showAlert("Please compose your message!");
        document.contact.message.focus();
        bool = false;
    }

    //Execute send

    if(bool) {

    var contactForm = new FormData(document.getElementById("contactform"));
    
    fetch(backendUrl+"sendMessage", {
        method : "post",
        body : contactForm,
        mode : "cors"
    })
    .then((response) => response.text())
    .then((response) => {

        //console.log(response.text().toString());

        showAlert(response);

        //clear fields
        document.contact.name.value = "";
        document.contact.phone.value = "";
        document.contact.email.value = "";
        document.contact.subject.value = "";
        document.contact.message.value = "";

    })
    .catch((err) => {
        showAlert("Communication error!"+err);
    })
    .finally(()=> {
        console.log("Ajax exe!");
    });

    }

    e.preventDefault();
}