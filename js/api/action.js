
console.log("Hello World!");

jQuery(document).ready(() => {
    console.log("ready");
    jQuery(".loader").fadeOut(1200);
});

var showAlert = (text) => {

    jQuery(".alert").text(text);

    jQuery(".alert").fadeIn("slow", () => {
        setTimeout(()=> {
            jQuery(".alert").fadeOut("slow", () => console.log("Alert completed!"));
        },7000);
    });

};

var r_user = null;

var  isLoggedin = () => {

    let st = false;

    let wrd = document.cookie.replace(" ", "");
    
    let li = wrd.split(";");

    li.map((value) => {
        if(value.split("=")[0] == "reost_user") {
            r_user = value.split("=")[1];
            st = true;
        }
    });

    return st;

};

let sttb = isLoggedin();
