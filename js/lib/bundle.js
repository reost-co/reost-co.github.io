
//Fri Mar 03 2023 19:42:59 GMT+0300 (East Africa Time)


//Including top file


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
        link : "https://reost.herokuapp.com/dashboard.html",
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
        link : "https://reost.herokuapp.com/dashboard.html",
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
        link : "https://reost.herokuapp.com/dashboard.html",
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
        link : "https://reost.herokuapp.com/dashboard.html",
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
        link : "https://reost.herokuapp.com/dashboard.html",
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
        link : "https://reost.herokuapp.com/dashboard.html",
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
        link : "https://reost.herokuapp.com/dashboard.html",
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
        link : "https://reost.herokuapp.com/dashboard.html",
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

//Added top file



//Addingabout.jsx


/*
The about page component
*/

var AboutContent = () => {

    return (
        <div>
            <img className="logo" src="images/logo_bw_3d2.png" width={"250"} height={"250"} alt="Logo" /> <p/>

            Reost is a fully remote-based software engineering company. Our team is distributed and works 
            in a fully remote environment. <br/>
            We attract individuals, teams and businesses which look to the future of the technology 
            business. <p/>

            We have a team of cross-functional engineers who are specialists in 21+ skills and techs, which 
            makes us much more efficient in completing projects with perfection. <p/>

            Some of the projects we work on include, web design {"&"} development, mobile application, 
            desktop software, and database development, and management. <hr/>

            <big>Our Core Values</big><p/>
            We go by the <b><u>' itecq '</u></b> core values : 

            <ul typeof="square">
                <li> I - Integrity</li> <p/>
                <li> T - Transparency</li> <p/>
                <li> E - Efficiency</li> <p/>
                <li> C - Collaboration</li> <p/>
                <li> Q - Quality</li> <p/>
            </ul> 
            <p/>

            <big>Free Services</big> <p/>
            We have deployed free services that can be consumed by users of targetted businesses. <p/>

            <a href="services.html" target={"_self"}>
                <button>Go to services</button>
            </a>

            <p>
                <big>Meet Muwanguzi Silas</big> <p/>
                <img src="images/silas.jpg" className="profile" width={"230"} height={"230"} alt="Silas" /> <p/>
                Senior Software Engineer {"&"} Tech Lead
            </p>

            <p>
                If you have further inquiries about us and our services, please reach out 
                to us <a href="http://reost.herokuapp.com/contact.html" target={"_self"}>here</a>.
            </p>

        </div>
    );

}

//Reading and adding about.jsxhas suceeded

//Addingcontact.jsx


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

//Reading and adding contact.jsxhas suceeded

//Addingdashboard.jsx


/**
 * Dashboard component
 */

 var fetch_user_data_nav = null;
 var fetch_user_data_acc = null;

 var fetch_projects = null;

 function setUserData() {

    //get user data
     fetch(backendUrl+"getuserinfo?id="+r_user, {
         method : "get"
     })
     .then((res) => res.json())
     .then((res) => {
         fetch_user_data_nav(res);
         fetch_user_data_acc(res);
     })
     .catch((err) => showAlert(err));
 }

 function setProjects() {
    fetch(backendUrl+"getallprojectsbyowner/"+r_user, {
        method : "get"
    })
    .then((res) => res.json())
    .then((res) => {
        fetch_projects(res);
    })
    .catch((err) => showAlert(err));
 }

 function setMilieStones(project,setfun) {
    fetch(backendUrl+"getmilestones/"+project, {
        method : "get"
    })
    .then((res) => res.json())
    .then((res) => {
        setfun(res);
    })
    .catch((err) => showAlert(err));
 }


 var Dashboard_Navigation_Content = (props) => {

    const [user_data,setthisdata] = React.useState(null);

    fetch_user_data_nav = setthisdata;

    React.useEffect(() => {
        if(user_data == null) {
            setUserData();
        }
    });

    if(user_data != null) {
        return (
            <table border={"0"} cellPadding="8" cellSpacing={"8"} width="100%" className="navigation_content2">
                <tr><td className="head">{props.data.head + user_data.fname}</td></tr>
                <tr><td className="slogun">{props.data.slogun}</td></tr>
                <tr><td>{props.data.content}</td></tr>
                <tr><td>
                <a href={props.data.link} target="_self" onClick={showAccountOptions}>{props.data.link_text}</a>
                </td></tr>
            </table>
        );
    }

    return(<div></div>);
}

var DashboardContent = () => {

    const [projects,setprojects] = React.useState(null);

    fetch_projects = setprojects;

    React.useEffect(() => {
        if(projects == null) {
            setProjects();
        }
    });

    return (
        <div>

            <FPopup id="account" item={AccountOpts} close={closeAccountOptions} /> <p/>

            <FPopup id="pform" item={ProjectForm} close={closeProjectForm} /> <p/>

            Projects <p/>
            <button onClick={showProjectForm}>Create new project</button>

            {projects != null && <ProjectList projects={projects} />}

        </div>
    );
};

var Projj = () => {

    return (
        <div id="projectviewcomp"></div>
    );
};

var ProjectList = (props) => {

    return (
        <div className="project">
            <hr/>
            {props.projects.map((value,index) => <ProjectItem project={value} key={index} />)}
        </div>
    );
};

var ProjectItem = (props) => {

    let showThis = (ev) => {

        showById("pview"+props.project.id);
        
        ev.preventDefault();
    }

    let closeThis = (ev) => {

        closeById("pview"+props.project.id);

        ev.preventDefault();
    }
    
    ProjectView.defaultProps = {
        project : props.project
    };

    return (
        <p>
            <a href="" onClick={showThis} target="_self">
                <table border={"0"} cellPadding="8" cellSpacing={"8"} width="100%" className="item">
                    <tr>
                        <td align="center" valign="center" colSpan={"2"}>
                            {props.project.title}
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="center">
                            {props.project.progress}%
                        </td>
                        <td align="right" valign="center">
                            {props.project.state}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"2"}>
                            <ProgressBar percent={props.project.progress} />
                        </td>
                    </tr>
                </table>
            </a>
            <FPopup id={"pview"+props.project.id} item={ProjectView} close={closeThis} />
        </p>
    );
};

var ProjectView = (props) => {

    const [milistones,setmilistones] = React.useState(null);

    React.useEffect(() => {
        if(milistones == null) {
            setMilieStones(props.project.id, setmilistones);
        }
    });

    return (
        <div>
            <big><u>{props.project.title}</u></big> <p/>
            Posted on : {props.project.post_date} <p/>
            Budget : {props.project.budget} <p/>
            Duration : {props.project.duration} <p/>
            State : {props.project.state} <p/>
            <ProgressBar percent={props.project.progress} /> <p/>
            Started on : {props.project.start} <p/>
            Finished on : {props.project.end} <p/>
            Project Description <hr/> {props.project.description} <hr/>
            <big><u>Milestones</u></big>
            {milistones != null && milistones.map((value,ind) => <ProjectMilestone data={value} key={ind} />)}
        </div>
    );

};

var ProjectMilestone = (props) => {

    return (
        <p>
            <table border={"0"} cellPadding="5" cellSpacing={"5"} width="100%" className="milistone">
                <tr>
                    <td align="left" valign="center" colSpan={"2"} className="title">
                        {props.data.milistone}
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="center">
                        {props.data.state}
                    </td>
                    <td align="center" valign="right">
                        {props.data.complete_date}
                    </td>
                </tr>
                <tr>
                    <td colSpan={"2"}>
                        <ProgressBar percent={props.data.progress} />
                    </td>
                </tr>
            </table>
        </p>
    );
};


var ProjectForm = () => {

    return (
        <div>
            <big>Create a new project</big> <p/>
            <form id="projectform" name="newproject" method="post" onSubmit={validateProjectForm}>
                <input type={"hidden"} name="owner" value={""+r_user+""} />
                <input type={"text"} name="title" placeholder="Project headline e.g. Business Web app" /> <p/>
                <textarea name="description" placeholder="Project description / requirements" rows={"7"}></textarea> <p/>
                <select name="currency">
                    <option selected value={""}>Select currency</option>
                    <option value={"UgShs"}>Uganda Shillings</option>
                    <option value="$">US Dollar</option>
                    <option value={"Euro"}>Euro</option>
                    <option value={"Pound"}>Pound</option>
                </select> <p/>
                <input type={"number"} name="amount" step={"0.01"} placeholder="Budget" /> <p/>
                <input type={"hidden"} name="budget" value={"1"} />
                <input type={"text"} name="duration" placeholder="Duration e.g. 2 weeks" /> <p/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

var showProjectForm = () => {

    showById("pform");
} 
var closeProjectForm = () => {

    closeById("pform");
} 

var validateProjectForm = (ev) => {

    let state = true;

    if(document.newproject.title.value == "" && state) {
        state = false;
        showAlert("Please provide project headline!");
        document.newproject.title.focus();
    }

    if(document.newproject.description.value == "" && state) {
        state = false;
        showAlert("Please provide project description!");
        document.newproject.description.focus();
    }

    if(document.newproject.currency.value == "" && state) {
        state = false;
        showAlert("Please provide select a currency!");
        document.newproject.currency.focus();
    }

    if(document.newproject.amount.value == "" && state) {
        state = false;
        showAlert("Please provide project budget!");
        document.newproject.amount.focus();
    }

    if(document.newproject.duration.value == "" && state) {
        state = false;
        showAlert("Please provide project duration!");
        document.newproject.duration.focus();
    }

    if(state) {

        document.newproject.budget.value = document.newproject.currency.value + " " +
        document.newproject.amount.value; 

        fetch(backendUrl+"createproject", {
            method : "post",
            body : new FormData(document.querySelector("#projectform"))
        })
        .then((res) => res.text())
        .then((res) => {
            if(res == "Success!") {
                setTimeout(() => {
                    closeProjectForm();
                }, 3000);
            }
            showAlert(res);
            setProjects();
        })
        .catch((err) => showAlert(err));

    }

    ev.preventDefault();

}

var AccountOpts = () => {

    const [user_data,setuserData] = React.useState(null);

    fetch_user_data_acc = setuserData;

    React.useEffect(() => {
        if(user_data == null) {
            setUserData();
        }
    });

    if(user_data != null) {

        return (
            <div>
                <big><u>My Account</u></big> <p/>
                {user_data.fname + " " + user_data.lname} <p/>
                {user_data.email} <p/>
                {user_data.phone} <p/>
                <a onClick={showChangePassWord} href="" target={"_self"}>Change password</a> <p/>
                <FPopup id="changepass" item = {ChangePasswordContent} close={closeChangePassWord} /> <p/>
                <a onClick={signOut} href="" target={"_self"}>Signout</a>
            </div>
        );

    }

    else {

        return (<div></div>);
    }
};

var ChangePasswordContent = () => {

    return (
        <div>

            <big>Change password</big> <p/>

            <form id="changepassform" name="changepass" method="post" onSubmit={validateChangePass}>
                <input type={"password"} name="current" placeholder="Current password" /> <p/>
                <input type={"password"} name="newpass" placeholder="New password" /> <p/>
                <input type={"password"} name="connewpass" placeholder="Confirm new password" /> <p/>
                <input type={"hidden"} name="reost_user" value={r_user} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
};

var validateChangePass = (ev) => {

    let state = true;

    if(document.changepass.current.value == "" && state) {
        state = false;
        showAlert("Please provide current password!");
        document.changepass.current.focus();
    }

    if(document.changepass.current.value.length < 7 && state) {
        state = false;
        showAlert("Password must be 7 characters or more!");
        document.changepass.current.focus();
    }

    if(document.changepass.newpass.value == "" && state) {
        state = false;
        showAlert("Please provide new password!");
        document.changepass.newpass.focus();
    }

    if(document.changepass.newpass.value.length < 7 && state) {
        state = false;
        showAlert("Password must be 7 characters or more!");
        document.changepass.newpass.focus();
    }

    if(document.changepass.connewpass.value == "" && state) {
        state = false;
        showAlert("Please confirm new password!");
        document.changepass.connewpass.focus();
    }

    if(document.changepass.newpass.value != document.changepass.connewpass.value && state) {
        state = false;
        showAlert("New password does not match!");
        document.changepass.connewpass.focus();
    }

    /*if(document.changepass.newpass.value != document.changepass.original.value && state) {
        state = false;
        showAlert("Invalid current password!");
        document.changepass.current.focus();
    }*/

    if(state) {

        fetch(backendUrl+"changepassword", {
            method : "post",
            body : new FormData(document.querySelector("#changepassform"))
        })
        .then((res) => res.text())
        .then((res) => {
            if(res == "Success!") {
                closeById("changepass");
                setTimeout(() => {
                    signOut();
                },2000);
            }
            showAlert(res);
        })
        .catch((err) => showAlert(err));

    }

    ev.preventDefault();

};

/**
 * Functions
 */
var showChangePassWord = (ev) => {

    showById("changepass");

    ev.preventDefault();

};
var closeChangePassWord = (ev) => {

    closeById("changepass");

    ev.preventDefault();

};

var showAccountOptions = (ev) => {

    showById("account");

    ev.preventDefault();
};
var closeAccountOptions = (ev) => {

    closeById("account");

    ev.preventDefault();
};

var signOut = (ev) => {

    /*fetch(backendUrl+"signout", {
        method : "post"
    })
    .then((res) => res.text())
    .then((res) => {
        if(res == "Success!") {
            setTimeout(() => {
                document.location = "signin.html";
            },3000);
        }
        showAlert(res);
    })
    .catch((err) => showAlert(err));*/

    let expiry = new Date(Date.now() - 3600).toUTCString();

    document.cookie = "reost_user="+r_user+";expires="+expiry;

    setTimeout(() => {
        document.location = "signin.html";
    },3000);

    showAlert("Success!");

    ev.preventDefault();
}

//Reading and adding dashboard.jsxhas suceeded

//Addingfaq.jsx


/**
 * Frequently Asked Questions component
 */

var Question = (props) => {

    return (
        <p>
        <table border={"1"} cellPadding={"9"} cellSpacing={"9"} className="question">
            <tr>
                <td className="qt">{props.question.question}</td>
            </tr>
            <tr>
                <td className="ans">{props.question.answer}</td>
            </tr>
        </table>
        </p>
    );
}

var FaqContent = (props) => {

    return (
        <div>
            {props.data.map((item,index) => <Question question={item} key={index} />)}

            <p>If you have any other inquiries, please contact 
                us <a href="http://reost.herokuapp.com/contact.html" target={"_self"}>here</a>
            </p>
        </div>
    );
}

//Reading and adding faq.jsxhas suceeded

//Addinghome_components.jsx


/* Contents on the Home page */

var HomeContent = () => {

    let data = {
        one : {
            title : "Web",
            image : "images/webapp.svg",
            description : "A professional web application that super suits your business requirements. "+
            "We design,  develop, test and deliver"+ 
            " your application using current-cutting-edge technologies, methods, and"+
            " best practices."
        },
        two : {
            title : "Mobile",
            image : "images/mobileapp.svg",
            description : "Build and run cross platform. Stable, and great "+
            "looking client mobile applications that run on android and mac. Our team accelerates "+
            "the development process and delivers high quality apps, on Google Play Store and App Store."
        },
        three : {
            title : "Desktop",
            image : "images/desktopapp.svg",
            description : "Develop stable, efficient, user-friendly,  well tested and documented  "+
            " desktop applications. We design the system, and use best technologies + procedures"+
            " to build and implement your software on Windows, Linux or Mac OS."
        },
        four : {
            title : "Data",
            image : "images/databaseapp.svg",
            description : "Create and manage your business database with our team of data scientists "+
            "and engineers."+
            "We help you structure, develop, host, and administer your database, with a great sense "+
            "of data privacy and security."
        },
        five : {
            title : "Maintenance",
            image : "images/maintenance.svg",
            description : "Re-engineer or maintain your system for optimized performance, adaptivity, "+
            "security, modularity, and added features. Our team of engineers will critically analyze "+
            "your system and help you maintain it, to get the best for modern market needs."
        }
    }

    var values = {
        one : {
            letter : "i",
            word : "Integrity",
            description : "The trust between team members and the client brings a seemless experience "+
            "in completing projects with ease."
        },
        two : {
            letter : "t",
            word : "Transparency",
            description : "A regular transparent communication among the team and the client makes "+
            "it quick to track the project, giving accuracy of numbers and fast issue resolving."
        },
        three : {
            letter : "e",
            word : "Efficiency",
            description : "Our team is composed of experts who are specialists in their respective "+
            "roles and skills, making us an efficient team in hitting targets with perfection."
        },
        four : {
            letter : "c",
            word : "Collaboration",
            description : "There is an ultimate collaboration between the team and the client "+
            "throughout the entire product development cycle. Yielding amazing angagement and sharing "+
            "of ideas."

        },
        five : {
            letter : "q",
            word : "Quality",
            description : "We are a team a of specialists who work together to deliver products "+
            "which are production quality and ready. Client satisfaction is our major priority, "+
            "we only deploy high quality products in accordance to  customer preferences."
        }
    }

    return (
        <div className="margin">
            <PosterLR data={data.one} />
            <PosterRL data={data.two} />
            <PosterLR data={data.three} />
            <PosterRL data={data.four} />
            <PosterLR data={data.five} />

            {/* Core Values */}
            <p><big>Our Core Values</big></p>
            <p>
                We stand by the <u>Agile</u> ' <b><i>itecq</i></b> ' values while working on projects 
                with our global clients - remotely.
            </p>

            <ValueLR data = {values.one} />
            <ValueRL data = {values.two} />
            <ValueLR data = {values.three} />
            <ValueRL data = {values.four} />
            <ValueLR data = {values.five} />

            <p>
                <big>Our free Services</big>
            </p>
            <p>
                We have developed and availed free services that help businesses grow in productivity 
                and do more!
            </p>
            <p>
                <a href="services.html" target={"_self"}>
                    <button>Go to services</button>
                </a>
            </p>

        </div>
    );

}

//Reading and adding home_components.jsxhas suceeded

//Addingnavigation.jsx


/* Responsive Navigation component */

var Topblack = () => {

    return(
        <table width={"100%"} className={"topblack"}>
            <tr>
                <td height={"18"}></td>
            </tr>
        </table>
    );

}

class Navigation_Default extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <table className="navigation" width={"100%"}>
                <tr>
                    <td><img src="images/logo.png" width="71" height="71"alt="Logo" /></td>
                    <td className="reof">Reost</td>
                    <td><InnerNav /></td>
                </tr>
            </table>
        );
    }

}

var NavItem = (props) => {

    return (
        <table border={"0"} cellSpacing="3" cellPadding="7" className="navitem" width={"100%"}>
            <tr>
                <td width={"25%"} valign="center"><img src={props.img_src} width="35" height="35" alt="item" /></td>
                <td width={"75%"} valign="center" align="left">{props.title}</td>
            </tr>
        </table>
    );
}

var InnerNav = () => {

    return(
        <table border={"0"} cellPadding="5" cellSpacing={"5"} className="innernavigation">
            <tr>
                <td>
                    <a href="index.html" target={"_self"}>
                        <NavItem img_src="images/home.svg" title="Home" />
                    </a>
                </td>
                <td>
                    <a href="https://reost.herokuapp.com/dashboard.html" target={"_self"}>
                        <NavItem img_src="images/dashboard.svg" title="Dashboard" />
                    </a>
                </td>
                <td>
                    <a href="services.html" target={"_self"}>
                        <NavItem img_src="images/services.svg" title="Services" />
                    </a>
                </td>
                <td>
                    <a href="about.html" target={"_self"}>
                        <NavItem img_src="images/about.svg" title="About" />
                    </a>
                </td>
                <td>
                    <a href="https://reost.herokuapp.com/faq.html" target={"_self"}>
                        <NavItem img_src="images/faq.svg" title="Faq" />
                    </a>
                </td>
            </tr>
        </table>
    );
}

var MobileMainMenu = () => {

    return (
        <div className="main_menu">
            <table border={"0"} className="main_menu_table" width={"100%"} height="100%">
                <tr>
                    <td className="maintd" align="center" valign="top">
                        <table border={"0"} width="100%" cellPadding={"7"} cellSpacing="7">
                            <tr>
                                <td width={"8%"}>
                                    {/*<img src="images/menu.svg" width={"50"} height="50" alt="Menu" />*/}
                                </td>
                                <td align="center" width={"80%"}>
                                    Menu
                                </td>
                                <td onClick={hideMobileMenu} width={"12%"}>
                                    <img src="images/closemenu.svg" width={"50"} height="50" alt="Close" />
                                </td>
                            </tr>
                            <tr>
                                <td><hr/></td>
                                <td><hr/></td>
                                <td><hr/></td>
                            </tr>
                            <tr>
                                <td width={"8%"}></td>
                                <td className="navitem" width={"80%"}>
                                    <a href="index.html" target={"_self"}>
                                        <NavItem img_src="images/home.svg" title="Home" />
                                    </a>
                                </td>
                                <td width={"12%"}></td>
                            </tr>
                            <tr>
                                <td width={"8%"}></td>
                                <td className="navitem" width={"80%"}>
                                    <a href="https://reost.herokuapp.com/dashboard.html" target={"_self"}>
                                        <NavItem img_src="images/dashboard.svg" title="Dashboard" />
                                    </a>
                                </td>
                                <td width={"12%"}></td>
                            </tr>
                            <tr>
                                <td width={"8%"}></td>
                                <td className="navitem" width={"80%"}>
                                    <a href="services.html" target={"_self"}>
                                        <NavItem img_src="images/services.svg" title="Services" />
                                    </a>
                                </td>
                                <td width={"12%"}></td>
                            </tr>
                            <tr>
                                <td width={"8%"}></td>
                                <td className="navitem" width={"80%"}>
                                    <a href="about.html" target={"_self"}>
                                        <NavItem img_src="images/about.svg" title="About" />
                                    </a>
                                </td>
                                <td width={"12%"}></td>
                            </tr>
                            <tr>
                                <td width={"8%"}></td>
                                <td className="navitem" width={"80%"}>
                                    <a href="https://reost.herokuapp.com/faq.html" target={"_self"}>
                                        <NavItem img_src="images/faq.svg" title="Faq" />
                                    </a>
                                </td>
                                <td width={"12%"}></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    );
}

var InnerNavMobile = () => {

    return (
        <div className="innernavigation">
            <div onClick={showMobileMenu}>
                <img src="images/menu.svg" width={"50"} height="50" alt="Menu" />
            </div>
        </div>
    );
}

var Navigation_Mobile = () => {

    return (
        <table className="navigation" width={"100%"}>
            <tr>
                <td><img src="images/logo.png" width="71" height="71"alt="Logo" /></td>
                <td className="reof" align="left">Reost</td>
                <td><InnerNavMobile /></td>
            </tr>
        </table>
    );
}

var Navigation_Content = (props) => {

    return (
        <table border={"0"} cellPadding="8" cellSpacing={"8"} width="100%" className="navigation_content">
            <tr><td className="head">{props.data.head}</td></tr>
            <tr><td className="slogun">{props.data.slogun}</td></tr>
            <tr><td>{props.data.content}</td></tr>
            <tr><td><a href={props.data.link} target="_self">{props.data.link_text}</a></td></tr>
        </table>
    );
}

var Overview = (props) => {

    return (
        <p>
            <big>{props.text}</big>
        </p>
    );
}

var Navigation = () => {

    //auto detect change of resolution
    let w = window.innerWidth;
    let [width,setWidth] = React.useState(w);

    window.addEventListener('resize', function() {
        console.log('changing view!');
        setWidth(window.innerWidth);
        hideMobileMenu();

        //removing
        this.window.removeEventListener("resize", ()=>{});
    });

    if(window.innerWidth >= 1000) {
        return(
            <Navigation_Default />
        );
    }

    else {

        return(
            <Navigation_Mobile />
        );
    }

}

//Reading and adding navigation.jsxhas suceeded

//Addingservices.jsx


/*
Services Component
*/

var ServicesContent = () => {

    return (
        <div>
            <img src="images/services2.svg" className="logo" width={"250"} height={"250"} alt="Services" />
            <p/>
            We created services that help individuals and businesses to do more, and grow in 
            quality of production. <p/>
            Check out these amazing free services below<p/>

            <big><u>Scoasoft</u></big> <p/>
            <img src="images/scoasoft.svg" className="logo" width={"250"} height={"250"} alt="Scoasoft" />
            <p/>
            This services has been developed to help primary schools and stationeries, in storing, 
            processing, and presenting school performance data. Easily generate professional
            report cards, marklists, statistics, and more in one place, on PC or Mobile. <p/>
            <a href="scoasoft.html" target={"_blank"}>
                <button>
                    Go to Scoasoft service
                </button>
            </a><p/>

            <big><u>Salesoft</u></big> <p/>
            <img src="images/sales.svg" className="logo" width={"250"} height={"250"} alt="Scoasoft" />
            <p/>
            Manage your business sales with ease. This data services stores, calculates, and generates 
            business reports effectively. Your sales book, calculator, manager, and much more 
            at the confort of your PC or Mobile. <p/>
            <a href="salesoft.html" target={"_blank"}>
                <button>
                    Go to Salesoft service
                </button>
            </a><p/>

            <hr/>
            We are developing and adding more services on our platform, keep checking this page for 
            latest updates. <p/>
            You can also request a service by writing to us at : reost.co@gmail.com. <p/>
        </div>
    );
}

//Reading and adding services.jsxhas suceeded

//Addingsignin.jsx


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

//Reading and adding signin.jsxhas suceeded

//Addingterms.jsx


/*
Terms of service component
*/

var TermsContent = () => {

    return (
        <div>
            <img src="images/terms.svg" class="logo" width={"250"} height={"250"} alt="Terms" /> <p/>
            <ul typeof="disc">
                <li>
                    <p>
                        <big><u>User data</u></big> <p/>
                        All user data requested to create a reost account is intended for identification 
                        purpose. Therefore, it is a mandatory to provide correct data in respective 
                        fields to avoid incoviniences in service consumption. <br/>
                        This info include: an email, phone, fullname, and your preferred password. Once 
                        these are submited correctly, you are verified and your account created.
                    </p>
                </li>
                <li>
                    <p>
                        <big><u>Projects</u></big> <p/>
                        <b>Data</b><p/>
                        All data provided by the client while starting a project or during the project 
                        is classified confidential, non-disclosure information. It is only available 
                        to the client and our respective team of engineers handling this project. <p/>
                        <b>Discussion</b> <p/>
                        After starting a new project at our platform, a member of our team will reachout 
                        by phone or email, and there will be a chat to discuss the project 
                        requirements, duration (period), and the budget. Where after agreement,
                        the project is started as scheduled in discussion. <p/>
                        <b>Duration (Deadlines)</b> <p/>
                        Our team is obligated to deliver the project before the agreed deadline. 
                        There can only be a varrying in delivery time if the client has changing 
                        requirements and is OK with changing deadlines.<p/>
                        <b>Payments</b> <p/>
                        A client is subject to making payments on time as agreed upon in the 
                        discussed project budget. This helps to have a flowless progression of the 
                        project and a seemless experience during project execution. <p/>
                        <b>Delivery</b> <p/>
                        Our team will deliver the project deliverables as preferred by the client.<p/>
                        <b>Completion</b> <p/>
                        A project is considered complete if all client requirements are fully met, and 
                        when the client is satisfied with the deliverables. This is so to keep the 
                        quality of production {"&"} service. Customer satisfaction is our priority.
                    </p>
                </li>
                <li>
                    <p>
                        <big><u>Services</u></big> <p/>
                        Our deployed services are freely available to all registered users. Explore 
                        the <a href="services.html" target={"_self"}>services</a> page and find what suits
                         you.
                    </p>
                </li>
                <li>
                    <p>
                        <big><u>Security</u></big> <p/>
                        Your account is secured by your password, meaning you can access your account 
                        and all account data by loging in with your email and password. PLEASE DO 
                        NOT SHARE YOUR CREDENTIALS. If you feel insecure for any cause, it is highly 
                        advizable to change you password immediately.
                    </p>
                </li>

            </ul> <hr/>

            Thank you for taking time to read our terms of service, you'll be notified by email 
            if there is an update in these terms. <p/>Thank you!
        </div>
    );
}

//Reading and adding terms.jsxhas suceeded

//Addingutils.jsx


/* Util components */

/**Poster */
var PosterLR = (props) => {

    return (
        <p>
            <table border={"1"} cellPadding="7" cellSpacing={"7"} width="100%" className="poster">
                <tr>
                    <td valign="center" align="center">
                    <table border={"0"} cellPadding="7" cellSpacing={"7"} className="left">
                        <tr>
                            <td width={"100%"}>
                                <img src={props.data.image} width="320" height="320" alt="Image" />
                            </td>
                        </tr>
                    </table>
                    <table border={"0"} cellPadding="14" cellSpacing={"14"} className="right">
                        <tr>
                            <th width={"100%"}>
                                {props.data.title}
                            </th>
                        </tr>
                        <tr>
                            <td width={"100%"}>
                                {props.data.description}
                            </td>
                        </tr>
                        <tr>
                            <td width={"100%"}>
                                <a href="https://reost.herokuapp.com/dashboard.html" target={"_self"}>Start now!</a>
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </p>
    );
}

var PosterRL = (props) => {

    return (
        <p align="center">
            <table border={"1"} cellPadding="7" cellSpacing={"7"} width="100%" className="poster2">
                <tr>
                    <td valign="center" align="center">
                    <table border={"0"} cellPadding="14" cellSpacing={"14"} className="right">
                        <tr>
                            <th width={"100%"}>
                                {props.data.title}
                            </th>
                        </tr>
                        <tr>
                            <td width={"100%"}>
                                {props.data.description}
                            </td>
                        </tr>
                        <tr>
                            <td width={"100%"}>
                                <a href="https://reost.herokuapp.com/dashboard.html" target={"_self"}>Start now!</a>
                            </td>
                        </tr>
                    </table>
                    <table border={"0"} cellPadding="7" cellSpacing={"7"} className="left">
                        <tr>
                            <td width={"100%"}>
                                <img src={props.data.image} width="320" height="320" alt="Image" />
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </p>
    );
}

/**Value */
var ValueLR = (props) => {

    return (
        <p>
            <table border={"1"} cellPadding="7" cellSpacing={"7"} width="100%" className="value">
                <tr>
                    <td valign="center" align="center">
                    <table border={"0"} cellPadding="7" cellSpacing={"7"} className="left">
                        <tr>
                            <td width={"100%"} valign="center">
                                <span className="megavalue">{props.data.letter}</span>
                            </td>
                        </tr>
                    </table>
                    <table border={"0"} cellPadding="14" cellSpacing={"14"} className="right">
                        <tr>
                            <th width={"100%"}>
                                {props.data.word}
                            </th>
                        </tr>
                        <tr>
                            <td width={"100%"}>
                                {props.data.description}
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </p>
    );
}

var ValueRL = (props) => {

    return (
        <p align="center">
            <table border={"1"} cellPadding="7" cellSpacing={"7"} width="100%" className="value2">
                <tr>
                    <td valign="center" align="center">
                    <table border={"0"} cellPadding="14" cellSpacing={"14"} className="right">
                        <tr>
                            <th width={"100%"}>
                                {props.data.word}
                            </th>
                        </tr>
                        <tr>
                            <td width={"100%"}>
                                {props.data.description}
                            </td>
                        </tr>
                    </table>
                    <table border={"0"} cellPadding="7" cellSpacing={"7"} className="left">
                        <tr>
                            <td width={"100%"} valign="center">
                                <span className="megavalue">{props.data.letter}</span>
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </p>
    );
}

var Beforefooter = () => {

    return (
        <p>
        <table className="bfooter">
            <tr>
                <td align="center">
                    Go beyond the limitations of Distance!
                </td>
            </tr>
        </table>
        </p>
    );
}

var Footer = () => {

    return (
        <div>
        <table border={"0"} className="footer" cellPadding={"5"} cellSpacing="5">
            <table border={"0"} cellPadding="5" cellSpacing={"5"}>
                <tr>
                    <td align="center" valign="top">
                        <img src="images/logo_3d.png" width={"218"} height="218" alt="Logo" />
                    </td>
                </tr>
            </table>
            <table border={"0"} cellPadding="5" cellSpacing={"5"}>
                <tr>
                    <td align="center" valign="top">
                        Reost, Inc <p/>
                        A remote-based engineering team<p/>
                        Access Of No Distance <hr/>
                        <i><u>Contact person</u></i> <p/>
                        Muwanguzi Silas <p/>
                        reost.co@gmail.com <p/>
                        +256 759 730 932
                    </td>
                </tr>
            </table>
            <table border={"0"} cellPadding="5" cellSpacing={"5"}>
                <tr>
                    <td align="center" valign="top">
                        <u><big>Quick Links</big></u>
                        <p>
                            <a href="index.html" target={"_self"}>Home</a>
                        </p>
                        <p>
                            <a href="services.html" target={"_self"}>Services</a>
                        </p>
                        <p>
                            <a href="https://reost.herokuapp.com/dashboard.html" target={"_self"}>Dashboard</a>
                        </p>
                        <p>
                            <a href="about.html" target={"_self"}>About Us</a>
                        </p>
                        <p>
                            <a href="http://reost.herokuapp.com/contact.html" target={"_self"}>Contact Us</a>
                        </p><p/>
                        <p>
                            <a href="terms.html" target={"_self"}>Terms of service</a>
                        </p>
                        <p>
                            <a href="https://reost.herokuapp.com/faq.html" target={"_self"}>Faq</a>
                        </p>
                    </td>
                </tr>
            </table>
        </table>
        © Reost, Inc {new Date().getFullYear()}. All rights reserved.<p/>-
        </div>
    );
}

var FPopup = (props) => {

    return (
        <div id={props.id} className="popup">

            <table border={"0"} cellPadding={"9"} cellSpacing={"9"} className="container">
                <tr>
                    <td align="right" valign="top">
                        <img src="images/closemenu.svg" width={"45"} height={"45"} 
                        onClick={props.close} />
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="center">
                        <props.item />
                    </td>
                </tr>
            </table>

        </div>
    );
};

var closeById = (id) => {

    jQuery("#"+id).fadeOut("slow");

};

var showById = (id) => {

    jQuery("#"+id).fadeIn("slow");

};

var ProgressBar = (props) => {

    let perc = props.percent;
    let lef = 100-perc;

    return (
        <div>
            <table border={"0"} cellPadding="3" cellSpacing={"3"} width="100%" className="progbar">
                <tr>
                    <td width={perc+"%"} className="itemio" align="center" valign="center">{perc+"%"}</td>
                    {perc < 100 && <td width={lef+"%"}></td>}
                </tr>
            </table>
        </div>
    );
};

//Reading and adding utils.jsxhas suceeded

//Including bottom file


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

//Added bottom file

