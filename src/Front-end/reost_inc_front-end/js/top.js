
/* Some elements to be put on top while sealing and compiling react components */

//console.log("Hello Reost!");

//Backend URL
var backendUrl = "http://127.0.0.1:8080/Reost_Inc_Backend-1.0.1/";

var showMobileMenu = () => {
    console.log('Showing Menu');
    //jQuery(".main_menu").css("display","block");
    jQuery(".main_menu").fadeIn(1000);
}

function hideMobileMenu() {
    console.log('Hiding Menu');
    //jQuery(".main_menu").css("display","none");
    jQuery(".main_menu").fadeOut(1000);
}

/*
Method for loading the home-index page
*/
var loadHome = () => {

    //Loading the custom components of the home-page
    console.log("Loading home!");

    //navigation_content

    let nav_data = {
        head : "Welcome to Reost",
        slogun : "Access Of No Distance",
        content : "Build and manage systems effectively in a fully remote environment with us",
        link : "dashboard.html",
        link_text : "Get started"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Explore best engineering services" />);

    //Load home content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render(<HomeContent />);
    
}

/*
Method for loading about page
*/
var loadAbout = () => {

    let nav_data = {
        head : "About us",
        slogun : "This is who we are",
        content : "A remote based, modern technology, engineering company",
        link : "dashboard.html",
        link_text : "Dashboard"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Reost, Inc" />);

    //Load home content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render(<AboutContent />);

}

/*
Method for loading terms page
*/

var loadTerms = () => {

    let nav_data = {
        head : "Terms of service",
        slogun : "",
        content : "These are our considerations while delivering service",
        link : "dashboard.html",
        link_text : "Dashboard"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Review our terms of service" />);

    //Load home content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render(<TermsContent />);

}

/*
Method for loading terms page
*/

var loadServices = () => {

    let nav_data = {
        head : "Services",
        slogun : "Explore",
        content : "Find target oriented services, freely available",
        link : "dashboard.html",
        link_text : "Dashboard"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Explore Reost Web Services" />);

    //Load home content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render(<ServicesContent />);

}

/*
Method for loading contact page
*/

var loadContact = () => {

    let nav_data = {
        head : "Contact",
        slogun : "",
        content : "Reachout, Let us talk about it.",
        link : "dashboard.html",
        link_text : "Dashboard"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Connect with us" />);

    //Load home content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render(<ContactContent />);

}

/*
Method for loading Faq page
*/
var loadFaq = () => {

    let nav_data = {
        head : "FAQ",
        slogun : "",
        content : "Frequently Asked Questions",
        link : "dashboard.html",
        link_text : "Dashboard"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Find answers to your burning questions" />);

    //fetch faq from server
    
    fetch(backendUrl+"faq", {
        method : "get"
    })
    .then((response) => response.json())
    .then((response) => {
        //Load faq content
        let homecont = ReactDOM.createRoot(document.getElementById("content"));
        homecont.render(<FaqContent data = {response} />);
    })
    .catch((err) => alert("Communication error! "+err));

}

/*
Method for loading Dashboard page
*/
var loadDashboard = () => {

    //Check for login
    if(!isLoggedin()) {
        document.location = "signin.html";
    }

    let nav_data = {
        head : "Hey ",
        slogun : "welcome",
        content : "This is where it all happens",
        link : "dashboard.html",
        link_text : "Account"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Dashboard_Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Your smart dashboard" />);

    //Load faq content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render(<DashboardContent />);
    
}

/*
Method for loading Signin page
*/
var loadSignin = () => {

    let nav_data = {
        head : "Signin",
        slogun : "",
        content : "Log into your dashboard",
        link : "dashboard.html",
        link_text : "Dashboard"
    }

    //Load navigation content
    let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
    nav_cont.render(<Navigation_Content data={nav_data} />);

    //load overview text
    let overview = ReactDOM.createRoot(document.getElementById("overview"));
    overview.render(<Overview text="Signin now!" />);

    //Load faq content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render(<SigninContent />);

}