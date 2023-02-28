
/* Some elements to be put on bottom while sealing and compiling react components */

//console.log("Hello Reost!");

//Render topblack
var root = ReactDOM.createRoot(document.getElementById("topblack"));
root.render(<Topblack />);

//Render navigation
var root = ReactDOM.createRoot(document.getElementById("nav"));
root.render(<Navigation />);

//Render nav content
var root = ReactDOM.createRoot(document.getElementById("main_menu"));
root.render(<MobileMainMenu />);

//Load before footer
var bfoot = ReactDOM.createRoot(document.getElementById("before_footer"));
bfoot.render(<Beforefooter />);

//Load footer
var foot = ReactDOM.createRoot(document.getElementById("footer"));
foot.render(<Footer />);

/* Page routing */

switch(document.location.pathname) {
    case '/' : loadHome();
    break;
    case '/index.html' : loadHome();
    break;
    case '/about.html' : loadAbout();
    break;
    case '/terms.html' : loadTerms();
    break;
    case '/services.html' : loadServices();
    break;
    case '/contact.html' : loadContact();
    break;
    case '/faq.html' : loadFaq();
    break;
    case '/dashboard.html' : loadDashboard();
    break;
    case '/signin.html' : loadSignin();
    break;

    default : () => {console.log("We are here!")};
}