//Wed Mar 01 2023 00:03:55 GMT+0300 (East Africa Time)
//Including top file

/* Some elements to be put on top while sealing and compiling react components */
//console.log("Hello Reost!");
//Backend URL
var backendUrl = "http://54.250.12.240:8080/Reost_Inc_Backend-1.0.1/";

var showMobileMenu = () => {
  console.log('Showing Menu'); //jQuery(".main_menu").css("display","block");

  jQuery(".main_menu").fadeIn(1000);
};

function hideMobileMenu() {
  console.log('Hiding Menu'); //jQuery(".main_menu").css("display","none");

  jQuery(".main_menu").fadeOut(1000);
}
/*
Method for loading the home-index page
*/


var loadHome = () => {
  //Loading the custom components of the home-page
  console.log("Loading home!"); //navigation_content

  let nav_data = {
    head: "Welcome to Reost",
    slogun: "Access Of No Distance",
    content: "Build and manage systems effectively in a fully remote environment with us",
    link: "dashboard.html",
    link_text: "Get started"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Explore best engineering services"
  })); //Load home content

  let homecont = ReactDOM.createRoot(document.getElementById("content"));
  homecont.render( /*#__PURE__*/React.createElement(HomeContent, null));
};
/*
Method for loading about page
*/


var loadAbout = () => {
  let nav_data = {
    head: "About us",
    slogun: "This is who we are",
    content: "A remote based, modern technology, engineering company",
    link: "dashboard.html",
    link_text: "Dashboard"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Reost, Inc"
  })); //Load home content

  let homecont = ReactDOM.createRoot(document.getElementById("content"));
  homecont.render( /*#__PURE__*/React.createElement(AboutContent, null));
};
/*
Method for loading terms page
*/


var loadTerms = () => {
  let nav_data = {
    head: "Terms of service",
    slogun: "",
    content: "These are our considerations while delivering service",
    link: "dashboard.html",
    link_text: "Dashboard"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Review our terms of service"
  })); //Load home content

  let homecont = ReactDOM.createRoot(document.getElementById("content"));
  homecont.render( /*#__PURE__*/React.createElement(TermsContent, null));
};
/*
Method for loading terms page
*/


var loadServices = () => {
  let nav_data = {
    head: "Services",
    slogun: "Explore",
    content: "Find target oriented services, freely available",
    link: "dashboard.html",
    link_text: "Dashboard"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Explore Reost Web Services"
  })); //Load home content

  let homecont = ReactDOM.createRoot(document.getElementById("content"));
  homecont.render( /*#__PURE__*/React.createElement(ServicesContent, null));
};
/*
Method for loading contact page
*/


var loadContact = () => {
  let nav_data = {
    head: "Contact",
    slogun: "",
    content: "Reachout, Let us talk about it.",
    link: "dashboard.html",
    link_text: "Dashboard"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Connect with us"
  })); //Load home content

  let homecont = ReactDOM.createRoot(document.getElementById("content"));
  homecont.render( /*#__PURE__*/React.createElement(ContactContent, null));
};
/*
Method for loading Faq page
*/


var loadFaq = () => {
  let nav_data = {
    head: "FAQ",
    slogun: "",
    content: "Frequently Asked Questions",
    link: "dashboard.html",
    link_text: "Dashboard"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Find answers to your burning questions"
  })); //fetch faq from server

  fetch(backendUrl + "faq/", {
    method: "get"
  }).then(response => response.json()).then(response => {
    //Load faq content
    let homecont = ReactDOM.createRoot(document.getElementById("content"));
    homecont.render( /*#__PURE__*/React.createElement(FaqContent, {
      data: response
    }));
  }).catch(err => alert("Communication error! " + err));
};
/*
Method for loading Dashboard page
*/


var loadDashboard = () => {
  //Check for login
  if (!isLoggedin()) {
    document.location = "signin.html";
  }

  let nav_data = {
    head: "Hey ",
    slogun: "welcome",
    content: "This is where it all happens",
    link: "dashboard.html",
    link_text: "Account"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Dashboard_Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Your smart dashboard"
  })); //Load faq content

  let homecont = ReactDOM.createRoot(document.getElementById("content"));
  homecont.render( /*#__PURE__*/React.createElement(DashboardContent, null));
};
/*
Method for loading Signin page
*/


var loadSignin = () => {
  let nav_data = {
    head: "Signin",
    slogun: "",
    content: "Log into your dashboard",
    link: "dashboard.html",
    link_text: "Dashboard"
  }; //Load navigation content

  let nav_cont = ReactDOM.createRoot(document.getElementById("nav_content"));
  nav_cont.render( /*#__PURE__*/React.createElement(Navigation_Content, {
    data: nav_data
  })); //load overview text

  let overview = ReactDOM.createRoot(document.getElementById("overview"));
  overview.render( /*#__PURE__*/React.createElement(Overview, {
    text: "Signin now!"
  })); //Load faq content

  let homecont = ReactDOM.createRoot(document.getElementById("content"));
  homecont.render( /*#__PURE__*/React.createElement(SigninContent, null));
}; //Added top file
//Addingabout.jsx

/*
The about page component
*/


var AboutContent = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: "images/logo_bw_3d2.png",
    width: "250",
    height: "250",
    alt: "Logo"
  }), " ", /*#__PURE__*/React.createElement("p", null), "Reost is a fully remote-based software engineering company. Our team is distributed and works in a fully remote environment. ", /*#__PURE__*/React.createElement("br", null), "We attract individuals, teams and businesses which look to the future of the technology business. ", /*#__PURE__*/React.createElement("p", null), "We have a team of cross-functional engineers who are specialists in 21+ skills and techs, which makes us much more efficient in completing projects with perfection. ", /*#__PURE__*/React.createElement("p", null), "Some of the projects we work on include, web design ", "&", " development, mobile application, desktop software, and database development, and management. ", /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("big", null, "Our Core Values"), /*#__PURE__*/React.createElement("p", null), "We go by the ", /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("u", null, "' itecq '")), " core values :", /*#__PURE__*/React.createElement("ul", {
    typeof: "square"
  }, /*#__PURE__*/React.createElement("li", null, " I - Integrity"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("li", null, " T - Transparency"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("li", null, " E - Efficiency"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("li", null, " C - Collaboration"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("li", null, " Q - Quality"), " ", /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("big", null, "Free Services"), " ", /*#__PURE__*/React.createElement("p", null), "We have deployed free services that can be consumed by users of targetted businesses. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("a", {
    href: "services.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement("button", null, "Go to services")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, "Meet Muwanguzi Silas"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("img", {
    src: "images/silas.jpg",
    className: "profile",
    width: "230",
    height: "230",
    alt: "Silas"
  }), " ", /*#__PURE__*/React.createElement("p", null), "Senior Software Engineer ", "&", " Tech Lead"), /*#__PURE__*/React.createElement("p", null, "If you have further inquiries about us and our services, please reach out to us ", /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    target: "_self"
  }, "here"), "."));
}; //Reading and adding about.jsxhas suceeded
//Addingcontact.jsx

/*
Contact page content
*/


var ContactContent = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "images/camping.svg",
    className: "logo",
    width: "250",
    height: "250",
    alt: "Connect"
  }), /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "4",
    cellSpacing: "4"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    valign: "center"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "4",
    cellSpacing: "4"
  }, /*#__PURE__*/React.createElement("td", {
    valign: "center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/businessman.svg",
    width: "51",
    height: "51",
    alt: "Phone"
  })), /*#__PURE__*/React.createElement("td", {
    valign: "center"
  }, "Muwanguzi Silas"))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "4",
    cellSpacing: "4"
  }, /*#__PURE__*/React.createElement("td", {
    valign: "center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/phone.svg",
    width: "51",
    height: "51",
    alt: "Phone"
  })), /*#__PURE__*/React.createElement("td", {
    valign: "center"
  }, "+256 759 730 932"))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "4",
    cellSpacing: "4"
  }, /*#__PURE__*/React.createElement("td", {
    valign: "center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/email.svg",
    width: "51",
    height: "51",
    alt: "Phone"
  })), /*#__PURE__*/React.createElement("td", {
    valign: "center"
  }, "reost.co@gmail.com")))))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("big", null, "Send us a direct message"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("form", {
    id: "contactform",
    name: "contact",
    method: "post",
    onSubmit: sendMessage
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Full names"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    name: "phone",
    placeholder: "Phone"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "subject",
    placeholder: "Subject"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("textarea", {
    rows: "7",
    cols: "12",
    name: "message",
    placeholder: "Message"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Send message")), /*#__PURE__*/React.createElement("p", null));
};

var sendMessage = e => {
  let bool = true; //validating first

  if (document.contact.name.value === "" && bool) {
    showAlert("Please provide your full names!");
    document.contact.name.focus();
    bool = false;
  }

  if (document.contact.phone.value === "" && bool) {
    showAlert("Please provide your phone number!");
    document.contact.phone.focus();
    bool = false;
  }

  if (document.contact.email.value === "" && bool) {
    showAlert("Please provide your email!");
    document.contact.email.focus();
    bool = false;
  }

  if (document.contact.subject.value === "" && bool) {
    showAlert("Please provide the subject!");
    document.contact.subject.focus();
    bool = false;
  }

  if (document.contact.message.value === "" && bool) {
    showAlert("Please compose your message!");
    document.contact.message.focus();
    bool = false;
  } //Execute send


  if (bool) {
    var contactForm = new FormData(document.getElementById("contactform"));
    fetch(backendUrl + "sendMessage", {
      method: "post",
      body: contactForm,
      mode: "cors"
    }).then(response => response.text()).then(response => {
      //console.log(response.text().toString());
      showAlert(response); //clear fields

      document.contact.name.value = "";
      document.contact.phone.value = "";
      document.contact.email.value = "";
      document.contact.subject.value = "";
      document.contact.message.value = "";
    }).catch(err => {
      showAlert("Communication error!" + err);
    }).finally(() => {
      console.log("Ajax exe!");
    });
  }

  e.preventDefault();
}; //Reading and adding contact.jsxhas suceeded
//Addingdashboard.jsx

/**
 * Dashboard component
 */


var fetch_user_data_nav = null;
var fetch_user_data_acc = null;
var fetch_projects = null;

function setUserData() {
  //get user data
  fetch(backendUrl + "getuserinfo?id=" + r_user, {
    method: "get"
  }).then(res => res.json()).then(res => {
    fetch_user_data_nav(res);
    fetch_user_data_acc(res);
  }).catch(err => showAlert(err));
}

function setProjects() {
  fetch(backendUrl + "getallprojectsbyowner/" + r_user, {
    method: "get"
  }).then(res => res.json()).then(res => {
    fetch_projects(res);
  }).catch(err => showAlert(err));
}

function setMilieStones(project, setfun) {
  fetch(backendUrl + "getmilestones/" + project, {
    method: "get"
  }).then(res => res.json()).then(res => {
    setfun(res);
  }).catch(err => showAlert(err));
}

var Dashboard_Navigation_Content = props => {
  const [user_data, setthisdata] = React.useState(null);
  fetch_user_data_nav = setthisdata;
  React.useEffect(() => {
    if (user_data == null) {
      setUserData();
    }
  });

  if (user_data != null) {
    return /*#__PURE__*/React.createElement("table", {
      border: "0",
      cellPadding: "8",
      cellSpacing: "8",
      width: "100%",
      className: "navigation_content2"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "head"
    }, props.data.head + user_data.fname)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "slogun"
    }, props.data.slogun)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.data.content)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: props.data.link,
      target: "_self",
      onClick: showAccountOptions
    }, props.data.link_text))));
  }

  return /*#__PURE__*/React.createElement("div", null);
};

var DashboardContent = () => {
  const [projects, setprojects] = React.useState(null);
  fetch_projects = setprojects;
  React.useEffect(() => {
    if (projects == null) {
      setProjects();
    }
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FPopup, {
    id: "account",
    item: AccountOpts,
    close: closeAccountOptions
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement(FPopup, {
    id: "pform",
    item: ProjectForm,
    close: closeProjectForm
  }), " ", /*#__PURE__*/React.createElement("p", null), "Projects ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
    onClick: showProjectForm
  }, "Create new project"), projects != null && /*#__PURE__*/React.createElement(ProjectList, {
    projects: projects
  }));
};

var Projj = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "projectviewcomp"
  });
};

var ProjectList = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, /*#__PURE__*/React.createElement("hr", null), props.projects.map((value, index) => /*#__PURE__*/React.createElement(ProjectItem, {
    project: value,
    key: index
  })));
};

var ProjectItem = props => {
  let showThis = ev => {
    showById("pview" + props.project.id);
    ev.preventDefault();
  };

  let closeThis = ev => {
    closeById("pview" + props.project.id);
    ev.preventDefault();
  };

  ProjectView.defaultProps = {
    project: props.project
  };
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "",
    onClick: showThis,
    target: "_self"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "8",
    cellSpacing: "8",
    width: "100%",
    className: "item"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "center",
    colSpan: "2"
  }, props.project.title)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "center"
  }, props.project.progress, "%"), /*#__PURE__*/React.createElement("td", {
    align: "right",
    valign: "center"
  }, props.project.state)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    percent: props.project.progress
  }))))), /*#__PURE__*/React.createElement(FPopup, {
    id: "pview" + props.project.id,
    item: ProjectView,
    close: closeThis
  }));
};

var ProjectView = props => {
  const [milistones, setmilistones] = React.useState(null);
  React.useEffect(() => {
    if (milistones == null) {
      setMilieStones(props.project.id, setmilistones);
    }
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, props.project.title)), " ", /*#__PURE__*/React.createElement("p", null), "Posted on : ", props.project.post_date, " ", /*#__PURE__*/React.createElement("p", null), "Budget : ", props.project.budget, " ", /*#__PURE__*/React.createElement("p", null), "Duration : ", props.project.duration, " ", /*#__PURE__*/React.createElement("p", null), "State : ", props.project.state, " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement(ProgressBar, {
    percent: props.project.progress
  }), " ", /*#__PURE__*/React.createElement("p", null), "Started on : ", props.project.start, " ", /*#__PURE__*/React.createElement("p", null), "Finished on : ", props.project.end, " ", /*#__PURE__*/React.createElement("p", null), "Project Description ", /*#__PURE__*/React.createElement("hr", null), " ", props.project.description, " ", /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "Milestones")), milistones != null && milistones.map((value, ind) => /*#__PURE__*/React.createElement(ProjectMilestone, {
    data: value,
    key: ind
  })));
};

var ProjectMilestone = props => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "5",
    cellSpacing: "5",
    width: "100%",
    className: "milistone"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "left",
    valign: "center",
    colSpan: "2",
    className: "title"
  }, props.data.milistone)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "center"
  }, props.data.state), /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "right"
  }, props.data.complete_date)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    percent: props.data.progress
  })))));
};

var ProjectForm = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("big", null, "Create a new project"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("form", {
    id: "projectform",
    name: "newproject",
    method: "post",
    onSubmit: validateProjectForm
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "owner",
    value: "" + r_user + ""
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "title",
    placeholder: "Project headline e.g. Business Web app"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("textarea", {
    name: "description",
    placeholder: "Project description / requirements",
    rows: "7"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("select", {
    name: "currency"
  }, /*#__PURE__*/React.createElement("option", {
    selected: true,
    value: ""
  }, "Select currency"), /*#__PURE__*/React.createElement("option", {
    value: "UgShs"
  }, "Uganda Shillings"), /*#__PURE__*/React.createElement("option", {
    value: "$"
  }, "US Dollar"), /*#__PURE__*/React.createElement("option", {
    value: "Euro"
  }, "Euro"), /*#__PURE__*/React.createElement("option", {
    value: "Pound"
  }, "Pound")), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "amount",
    step: "0.01",
    placeholder: "Budget"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "budget",
    value: "1"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "duration",
    placeholder: "Duration e.g. 2 weeks"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

var showProjectForm = () => {
  showById("pform");
};

var closeProjectForm = () => {
  closeById("pform");
};

var validateProjectForm = ev => {
  let state = true;

  if (document.newproject.title.value == "" && state) {
    state = false;
    showAlert("Please provide project headline!");
    document.newproject.title.focus();
  }

  if (document.newproject.description.value == "" && state) {
    state = false;
    showAlert("Please provide project description!");
    document.newproject.description.focus();
  }

  if (document.newproject.currency.value == "" && state) {
    state = false;
    showAlert("Please provide select a currency!");
    document.newproject.currency.focus();
  }

  if (document.newproject.amount.value == "" && state) {
    state = false;
    showAlert("Please provide project budget!");
    document.newproject.amount.focus();
  }

  if (document.newproject.duration.value == "" && state) {
    state = false;
    showAlert("Please provide project duration!");
    document.newproject.duration.focus();
  }

  if (state) {
    document.newproject.budget.value = document.newproject.currency.value + " " + document.newproject.amount.value;
    fetch(backendUrl + "createproject", {
      method: "post",
      body: new FormData(document.querySelector("#projectform"))
    }).then(res => res.text()).then(res => {
      if (res == "Success!") {
        setTimeout(() => {
          closeProjectForm();
        }, 3000);
      }

      showAlert(res);
      setProjects();
    }).catch(err => showAlert(err));
  }

  ev.preventDefault();
};

var AccountOpts = () => {
  const [user_data, setuserData] = React.useState(null);
  fetch_user_data_acc = setuserData;
  React.useEffect(() => {
    if (user_data == null) {
      setUserData();
    }
  });

  if (user_data != null) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "My Account")), " ", /*#__PURE__*/React.createElement("p", null), user_data.fname + " " + user_data.lname, " ", /*#__PURE__*/React.createElement("p", null), user_data.email, " ", /*#__PURE__*/React.createElement("p", null), user_data.phone, " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("a", {
      onClick: showChangePassWord,
      href: "",
      target: "_self"
    }, "Change password"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement(FPopup, {
      id: "changepass",
      item: ChangePasswordContent,
      close: closeChangePassWord
    }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("a", {
      onClick: signOut,
      href: "",
      target: "_self"
    }, "Signout"));
  } else {
    return /*#__PURE__*/React.createElement("div", null);
  }
};

var ChangePasswordContent = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("big", null, "Change password"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("form", {
    id: "changepassform",
    name: "changepass",
    method: "post",
    onSubmit: validateChangePass
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "current",
    placeholder: "Current password"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "newpass",
    placeholder: "New password"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "connewpass",
    placeholder: "Confirm new password"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "reost_user",
    value: r_user
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

var validateChangePass = ev => {
  let state = true;

  if (document.changepass.current.value == "" && state) {
    state = false;
    showAlert("Please provide current password!");
    document.changepass.current.focus();
  }

  if (document.changepass.current.value.length < 7 && state) {
    state = false;
    showAlert("Password must be 7 characters or more!");
    document.changepass.current.focus();
  }

  if (document.changepass.newpass.value == "" && state) {
    state = false;
    showAlert("Please provide new password!");
    document.changepass.newpass.focus();
  }

  if (document.changepass.newpass.value.length < 7 && state) {
    state = false;
    showAlert("Password must be 7 characters or more!");
    document.changepass.newpass.focus();
  }

  if (document.changepass.connewpass.value == "" && state) {
    state = false;
    showAlert("Please confirm new password!");
    document.changepass.connewpass.focus();
  }

  if (document.changepass.newpass.value != document.changepass.connewpass.value && state) {
    state = false;
    showAlert("New password does not match!");
    document.changepass.connewpass.focus();
  }
  /*if(document.changepass.newpass.value != document.changepass.original.value && state) {
      state = false;
      showAlert("Invalid current password!");
      document.changepass.current.focus();
  }*/


  if (state) {
    fetch(backendUrl + "changepassword", {
      method: "post",
      body: new FormData(document.querySelector("#changepassform"))
    }).then(res => res.text()).then(res => {
      if (res == "Success!") {
        closeById("changepass");
        setTimeout(() => {
          signOut();
        }, 2000);
      }

      showAlert(res);
    }).catch(err => showAlert(err));
  }

  ev.preventDefault();
};
/**
 * Functions
 */


var showChangePassWord = ev => {
  showById("changepass");
  ev.preventDefault();
};

var closeChangePassWord = ev => {
  closeById("changepass");
  ev.preventDefault();
};

var showAccountOptions = ev => {
  showById("account");
  ev.preventDefault();
};

var closeAccountOptions = ev => {
  closeById("account");
  ev.preventDefault();
};

var signOut = ev => {
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
  document.cookie = "reost_user=" + r_user + ";expires=" + expiry;
  setTimeout(() => {
    document.location = "signin.html";
  }, 3000);
  showAlert("Success!");
  ev.preventDefault();
}; //Reading and adding dashboard.jsxhas suceeded
//Addingfaq.jsx

/**
 * Frequently Asked Questions component
 */


var Question = props => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    border: "1",
    cellPadding: "9",
    cellSpacing: "9",
    className: "question"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "qt"
  }, props.question.question)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "ans"
  }, props.question.answer))));
};

var FaqContent = props => {
  return /*#__PURE__*/React.createElement("div", null, props.data.map((item, index) => /*#__PURE__*/React.createElement(Question, {
    question: item,
    key: index
  })), /*#__PURE__*/React.createElement("p", null, "If you have any other inquiries, please contact us ", /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    target: "_self"
  }, "here")));
}; //Reading and adding faq.jsxhas suceeded
//Addinghome_components.jsx

/* Contents on the Home page */


var HomeContent = () => {
  let data = {
    one: {
      title: "Web",
      image: "images/webapp.svg",
      description: "A professional web application that super suits your business requirements. " + "We design,  develop, test and deliver" + " your application using current-cutting-edge technologies, methods, and" + " best practices."
    },
    two: {
      title: "Mobile",
      image: "images/mobileapp.svg",
      description: "Build and run cross platform. Stable, and great " + "looking client mobile applications that run on android and mac. Our team accelerates " + "the development process and delivers high quality apps, on Google Play Store and App Store."
    },
    three: {
      title: "Desktop",
      image: "images/desktopapp.svg",
      description: "Develop stable, efficient, user-friendly,  well tested and documented  " + " desktop applications. We design the system, and use best technologies + procedures" + " to build and implement your software on Windows, Linux or Mac OS."
    },
    four: {
      title: "Data",
      image: "images/databaseapp.svg",
      description: "Create and manage your business database with our team of data scientists " + "and engineers." + "We help you structure, develop, host, and administer your database, with a great sense " + "of data privacy and security."
    },
    five: {
      title: "Maintenance",
      image: "images/maintenance.svg",
      description: "Re-engineer or maintain your system for optimized performance, adaptivity, " + "security, modularity, and added features. Our team of engineers will critically analyze " + "your system and help you maintain it, to get the best for modern market needs."
    }
  };
  var values = {
    one: {
      letter: "i",
      word: "Integrity",
      description: "The trust between team members and the client brings a seemless experience " + "in completing projects with ease."
    },
    two: {
      letter: "t",
      word: "Transparency",
      description: "A regular transparent communication among the team and the client makes " + "it quick to track the project, giving accuracy of numbers and fast issue resolving."
    },
    three: {
      letter: "e",
      word: "Efficiency",
      description: "Our team is composed of experts who are specialists in their respective " + "roles and skills, making us an efficient team in hitting targets with perfection."
    },
    four: {
      letter: "c",
      word: "Collaboration",
      description: "There is an ultimate collaboration between the team and the client " + "throughout the entire product development cycle. Yielding amazing angagement and sharing " + "of ideas."
    },
    five: {
      letter: "q",
      word: "Quality",
      description: "We are a team a of specialists who work together to deliver products " + "which are production quality and ready. Client satisfaction is our major priority, " + "we only deploy high quality products in accordance to  customer preferences."
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "margin"
  }, /*#__PURE__*/React.createElement(PosterLR, {
    data: data.one
  }), /*#__PURE__*/React.createElement(PosterRL, {
    data: data.two
  }), /*#__PURE__*/React.createElement(PosterLR, {
    data: data.three
  }), /*#__PURE__*/React.createElement(PosterRL, {
    data: data.four
  }), /*#__PURE__*/React.createElement(PosterLR, {
    data: data.five
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, "Our Core Values")), /*#__PURE__*/React.createElement("p", null, "We stand by the ", /*#__PURE__*/React.createElement("u", null, "Agile"), " ' ", /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("i", null, "itecq")), " ' values while working on projects with our global clients - remotely."), /*#__PURE__*/React.createElement(ValueLR, {
    data: values.one
  }), /*#__PURE__*/React.createElement(ValueRL, {
    data: values.two
  }), /*#__PURE__*/React.createElement(ValueLR, {
    data: values.three
  }), /*#__PURE__*/React.createElement(ValueRL, {
    data: values.four
  }), /*#__PURE__*/React.createElement(ValueLR, {
    data: values.five
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, "Our free Services")), /*#__PURE__*/React.createElement("p", null, "We have developed and availed free services that help businesses grow in productivity and do more!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "services.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement("button", null, "Go to services"))));
}; //Reading and adding home_components.jsxhas suceeded
//Addingnavigation.jsx

/* Responsive Navigation component */


var Topblack = () => {
  return /*#__PURE__*/React.createElement("table", {
    width: "100%",
    className: "topblack"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    height: "18"
  })));
};

class Navigation_Default extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("table", {
      className: "navigation",
      width: "100%"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
      src: "images/logo.png",
      width: "71",
      height: "71",
      alt: "Logo"
    })), /*#__PURE__*/React.createElement("td", {
      className: "reof"
    }, "Reost"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(InnerNav, null))));
  }

}

var NavItem = props => {
  return /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellSpacing: "3",
    cellPadding: "7",
    className: "navitem",
    width: "100%"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "25%",
    valign: "center"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.img_src,
    width: "35",
    height: "35",
    alt: "item"
  })), /*#__PURE__*/React.createElement("td", {
    width: "75%",
    valign: "center",
    align: "left"
  }, props.title)));
};

var InnerNav = () => {
  return /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "5",
    cellSpacing: "5",
    className: "innernavigation"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/home.svg",
    title: "Home"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "dashboard.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/dashboard.svg",
    title: "Dashboard"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "services.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/services.svg",
    title: "Services"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "about.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/about.svg",
    title: "About"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "faq.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/faq.svg",
    title: "Faq"
  })))));
};

var MobileMainMenu = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "main_menu"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    className: "main_menu_table",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "maintd",
    align: "center",
    valign: "top"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    width: "100%",
    cellPadding: "7",
    cellSpacing: "7"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "8%"
  }), /*#__PURE__*/React.createElement("td", {
    align: "center",
    width: "80%"
  }, "Menu"), /*#__PURE__*/React.createElement("td", {
    onClick: hideMobileMenu,
    width: "12%"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/closemenu.svg",
    width: "50",
    height: "50",
    alt: "Close"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("hr", null))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "8%"
  }), /*#__PURE__*/React.createElement("td", {
    className: "navitem",
    width: "80%"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/home.svg",
    title: "Home"
  }))), /*#__PURE__*/React.createElement("td", {
    width: "12%"
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "8%"
  }), /*#__PURE__*/React.createElement("td", {
    className: "navitem",
    width: "80%"
  }, /*#__PURE__*/React.createElement("a", {
    href: "dashboard.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/dashboard.svg",
    title: "Dashboard"
  }))), /*#__PURE__*/React.createElement("td", {
    width: "12%"
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "8%"
  }), /*#__PURE__*/React.createElement("td", {
    className: "navitem",
    width: "80%"
  }, /*#__PURE__*/React.createElement("a", {
    href: "services.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/services.svg",
    title: "Services"
  }))), /*#__PURE__*/React.createElement("td", {
    width: "12%"
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "8%"
  }), /*#__PURE__*/React.createElement("td", {
    className: "navitem",
    width: "80%"
  }, /*#__PURE__*/React.createElement("a", {
    href: "about.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/about.svg",
    title: "About"
  }))), /*#__PURE__*/React.createElement("td", {
    width: "12%"
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "8%"
  }), /*#__PURE__*/React.createElement("td", {
    className: "navitem",
    width: "80%"
  }, /*#__PURE__*/React.createElement("a", {
    href: "faq.html",
    target: "_self"
  }, /*#__PURE__*/React.createElement(NavItem, {
    img_src: "images/faq.svg",
    title: "Faq"
  }))), /*#__PURE__*/React.createElement("td", {
    width: "12%"
  })))))));
};

var InnerNavMobile = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "innernavigation"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: showMobileMenu
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/menu.svg",
    width: "50",
    height: "50",
    alt: "Menu"
  })));
};

var Navigation_Mobile = () => {
  return /*#__PURE__*/React.createElement("table", {
    className: "navigation",
    width: "100%"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
    src: "images/logo.png",
    width: "71",
    height: "71",
    alt: "Logo"
  })), /*#__PURE__*/React.createElement("td", {
    className: "reof",
    align: "left"
  }, "Reost"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(InnerNavMobile, null))));
};

var Navigation_Content = props => {
  return /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "8",
    cellSpacing: "8",
    width: "100%",
    className: "navigation_content"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "head"
  }, props.data.head)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "slogun"
  }, props.data.slogun)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.data.content)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: props.data.link,
    target: "_self"
  }, props.data.link_text))));
};

var Overview = props => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, props.text));
};

var Navigation = () => {
  //auto detect change of resolution
  let w = window.innerWidth;
  let [width, setWidth] = React.useState(w);
  window.addEventListener('resize', function () {
    console.log('changing view!');
    setWidth(window.innerWidth);
    hideMobileMenu(); //removing

    this.window.removeEventListener("resize", () => {});
  });

  if (window.innerWidth >= 1000) {
    return /*#__PURE__*/React.createElement(Navigation_Default, null);
  } else {
    return /*#__PURE__*/React.createElement(Navigation_Mobile, null);
  }
}; //Reading and adding navigation.jsxhas suceeded
//Addingservices.jsx

/*
Services Component
*/


var ServicesContent = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "images/services2.svg",
    className: "logo",
    width: "250",
    height: "250",
    alt: "Services"
  }), /*#__PURE__*/React.createElement("p", null), "We created services that help individuals and businesses to do more, and grow in quality of production. ", /*#__PURE__*/React.createElement("p", null), "Check out these amazing free services below", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "Scoasoft")), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("img", {
    src: "images/scoasoft.svg",
    className: "logo",
    width: "250",
    height: "250",
    alt: "Scoasoft"
  }), /*#__PURE__*/React.createElement("p", null), "This services has been developed to help primary schools and stationeries, in storing, processing, and presenting school performance data. Easily generate professional report cards, marklists, statistics, and more in one place, on PC or Mobile. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("a", {
    href: "Scoasoft",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("button", null, "Go to Scoasoft service")), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "Salesoft")), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("img", {
    src: "images/sales.svg",
    className: "logo",
    width: "250",
    height: "250",
    alt: "Scoasoft"
  }), /*#__PURE__*/React.createElement("p", null), "Manage your business sales with ease. This data services stores, calculates, and generates business reports effectively. Your sales book, calculator, manager, and much more at the confort of your PC or Mobile. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("a", {
    href: "Salesoft",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("button", null, "Go to Salesoft service")), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("hr", null), "We are developing and adding more services on our platform, keep checking this page for latest updates. ", /*#__PURE__*/React.createElement("p", null), "You can also request a service by writing to us at : reost.co@gmail.com. ", /*#__PURE__*/React.createElement("p", null));
}; //Reading and adding services.jsxhas suceeded
//Addingsignin.jsx

/**
 * Signin Component
 */


var verification_code = null;
var createform = null;

var SigninContent = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "images/logo_bw.png",
    width: "125",
    height: "125",
    alt: "Logo",
    className: "logo"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("form", {
    id: "signinform",
    name: "signin",
    method: "post",
    onSubmit: validateSigninForm,
    encType: "form-data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("a", {
    onClick: showForgotForm,
    href: "",
    target: "_self"
  }, "Forgot password"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Signin"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("a", {
    onClick: showCreateForm,
    href: "",
    target: "_self"
  }, "Create account")), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement(FPopup, {
    id: "createa",
    item: CreateForm,
    close: closeCreateForm
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement(FPopup, {
    id: "verifya",
    item: VerifyForm,
    close: closeVerifyForm
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement(FPopup, {
    id: "forgota",
    item: ForgotForm,
    close: closeForgotForm
  }), " ", /*#__PURE__*/React.createElement("p", null));
};

var validateSigninForm = ev => {
  let state = true;

  if (document.signin.email.value == "" && state) {
    state = false;
    showAlert("Please provide your email!");
    document.signin.email.focus();
  }

  if (document.signin.password.value == "" && state) {
    state = false;
    showAlert("Please provide your password!");
    document.signin.password.focus();
  }

  if (document.signin.password.value.length < 7 && state) {
    state = false;
    showAlert("Password must be 7 or more characters!");
    document.signin.password.focus();
  }
  /**
   * Do the server login
   */


  if (state) {
    console.log(new FormData(document.getElementById("signinform")).get("email"));
    fetch(backendUrl + "signin", {
      method: "post",
      mode: "cors",
      body: new FormData(document.getElementById("signinform"))
    }).then(res => res.text()).then(res => {
      if (res.startsWith("Success!")) {
        showAlert(res.split("-")[0]);
        let expiry = new Date(Date.now() + 6000 * 60 * 168).toUTCString();
        document.cookie = "reost_user=" + res.split("-")[1] + ";expires=" + expiry;
        setTimeout(() => {
          document.location = "dashboard.html";
        }, 3000);
      } else {
        showAlert(res);
      }
    }).catch(err => {
      showAlert(err);
    }).finally(() => {
      console.log("ajax");
    });
  }

  ev.preventDefault();
};

var showForgotForm = ev => {
  showById("forgota");
  ev.preventDefault();
};

var showCreateForm = ev => {
  showById("createa");
  ev.preventDefault();
};

var showVerifyForm = () => {
  showById("verifya");
};

var closeForgotForm = () => {
  closeById("forgota");
};

var closeVerifyForm = () => {
  closeById("verifya");
};

var closeCreateForm = () => {
  closeById("createa");
};
/**
 * Create form component
 */


var CreateForm = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("big", null, "Create a reost account"), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("form", {
    id: "createform",
    name: "create",
    method: "post",
    onSubmit: validateCreateForm
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fname",
    placeholder: "First name"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "lname",
    placeholder: "Last name"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    name: "phone",
    placeholder: "Phone"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("select", {
    name: "gender"
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    selected: true
  }, "Select gender"), /*#__PURE__*/React.createElement("option", {
    value: "male"
  }, "Male"), /*#__PURE__*/React.createElement("option", {
    value: "female"
  }, "Female")), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "address",
    placeholder: "Address (Country - City)"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "conpassword",
    placeholder: "Confirm password"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

var validateCreateForm = ev => {
  let state = true;

  if (document.create.fname.value == "" && state) {
    state = false;
    showAlert("Please provide first name!");
    document.create.fname.focus();
  }

  if (document.create.lname.value == "" && state) {
    state = false;
    showAlert("Please provide last name!");
    document.create.lname.focus();
  }

  if (document.create.email.value == "" && state) {
    state = false;
    showAlert("Please provide email!");
    document.create.email.focus();
  }

  if (document.create.phone.value == "" && state) {
    state = false;
    showAlert("Please provide phone!");
    document.create.phone.focus();
  }

  if (document.create.gender.value == "" && state) {
    state = false;
    showAlert("Please select gender!");
    document.create.gender.focus();
  }

  if (document.create.address.value == "" && state) {
    state = false;
    showAlert("Please provide address!");
    document.create.address.focus();
  }

  if (document.create.password.value == "" && state) {
    state = false;
    showAlert("Please provide password!");
    document.create.password.focus();
  }

  if (document.create.password.value.length < 7 && state) {
    state = false;
    showAlert("Password must be 7 or more characters!");
    document.create.password.focus();
  }

  if (document.create.conpassword.value == "" && state) {
    state = false;
    showAlert("Please confirm your password!");
    document.create.conpassword.focus();
  }

  if (document.create.password.value != document.create.conpassword.value && state) {
    state = false;
    showAlert("Password does not match!");
    document.create.conpassword.focus();
  }
  /**
   * Really go to the verification state!
   */


  if (state) {
    createform = new FormData(document.getElementById("createform"));
    fetch(backendUrl + "verifyemail/" + document.create.email.value, {
      method: "post"
    }).then(res => res.text()).then(res => {
      verification_code = res;
    }).catch(err => showAlert(err)).finally(() => console.log("ajax")); //verify

    closeCreateForm();
    showVerifyForm();
  }

  ev.preventDefault();
};

var VerifyForm = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("big", null, "Verify your email"), " ", /*#__PURE__*/React.createElement("p", null), "Enter the verification code sent to your email in the feild below. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("form", {
    id: "verifyform",
    name: "verify",
    method: "post",
    onSubmit: verifyEmail
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "code",
    placeholder: "Code",
    minLength: "7",
    maxLength: "7"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Verify")));
};

var verifyEmail = ev => {
  let state = true;

  if (document.verify.code.value == "" && state) {
    state = false;
    showAlert("Please enter the code!");
    document.verify.code.focus();
  }

  if ((document.verify.code.value.length < 7 || document.verify.code.value.length > 7) && state) {
    state = false;
    showAlert("Code must be exactly 7 digits!");
    document.verify.code.focus();
  }

  if (state) {
    //verify
    if (document.verify.code.value == verification_code) {
      fetch(backendUrl + "createaccount", {
        method: "post",
        body: createform
      }).then(res => res.text()).then(res => {
        showAlert(res);
        setTimeout(() => {
          document.location = "dashboard.html";
        }, 5000);
      }).catch(err => showAlert(err)).finally(() => console.log("ajax"));
    } else {
      showAlert("Invalid verification code!");
    }
  }

  ev.preventDefault();
};

var ForgotForm = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("big", null, "Account recovery"), " ", /*#__PURE__*/React.createElement("p", null), "Submit registered email to recover your account. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("form", {
    id: "forgotform",
    name: "forgot",
    method: "post",
    onSubmit: validateForgot
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

var validateForgot = ev => {
  let state = true;

  if (document.forgot.email.value == "" && state) {
    state = false;
    showAlert("Please provide email!");
    document.forgot.email.focus();
  }

  if (state) {
    //Do recover
    fetch(backendUrl + "recoveraccount", {
      method: "post",
      body: new FormData(document.getElementById("forgotform"))
    }).then(res => res.text()).then(res => {
      if (res.startsWith("Success!")) {
        showAlert(res);
        setTimeout(() => {
          closeForgotForm();
        }, 5000);
      } else {
        showAlert(res);
      }
    }).catch(err => showAlert(err)).finally(() => console.log("ajax"));
  }

  ev.preventDefault();
}; //Reading and adding signin.jsxhas suceeded
//Addingterms.jsx

/*
Terms of service component
*/


var TermsContent = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "images/terms.svg",
    class: "logo",
    width: "250",
    height: "250",
    alt: "Terms"
  }), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("ul", {
    typeof: "disc"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "User data")), " ", /*#__PURE__*/React.createElement("p", null), "All user data requested to create a reost account is intended for identification purpose. Therefore, it is a mandatory to provide correct data in respective fields to avoid incoviniences in service consumption. ", /*#__PURE__*/React.createElement("br", null), "This info include: an email, phone, fullname, and your preferred password. Once these are submited correctly, you are verified and your account created.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "Projects")), " ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("b", null, "Data"), /*#__PURE__*/React.createElement("p", null), "All data provided by the client while starting a project or during the project is classified confidential, non-disclosure information. It is only available to the client and our respective team of engineers handling this project. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("b", null, "Discussion"), " ", /*#__PURE__*/React.createElement("p", null), "After starting a new project at our platform, a member of our team will reachout by phone or email, and there will be a chat to discuss the project requirements, duration (period), and the budget. Where after agreement, the project is started as scheduled in discussion. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("b", null, "Duration (Deadlines)"), " ", /*#__PURE__*/React.createElement("p", null), "Our team is obligated to deliver the project before the agreed deadline. There can only be a varrying in delivery time if the client has changing requirements and is OK with changing deadlines.", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("b", null, "Payments"), " ", /*#__PURE__*/React.createElement("p", null), "A client is subject to making payments on time as agreed upon in the discussed project budget. This helps to have a flowless progression of the project and a seemless experience during project execution. ", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("b", null, "Delivery"), " ", /*#__PURE__*/React.createElement("p", null), "Our team will deliver the project deliverables as preferred by the client.", /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("b", null, "Completion"), " ", /*#__PURE__*/React.createElement("p", null), "A project is considered complete if all client requirements are fully met, and when the client is satisfied with the deliverables. This is so to keep the quality of production ", "&", " service. Customer satisfaction is our priority.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "Services")), " ", /*#__PURE__*/React.createElement("p", null), "Our deployed services are freely available to all registered users. Explore the ", /*#__PURE__*/React.createElement("a", {
    href: "services.html",
    target: "_self"
  }, "services"), " page and find what suits you.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("big", null, /*#__PURE__*/React.createElement("u", null, "Security")), " ", /*#__PURE__*/React.createElement("p", null), "Your account is secured by your password, meaning you can access your account and all account data by loging in with your email and password. PLEASE DO NOT SHARE YOUR CREDENTIALS. If you feel insecure for any cause, it is highly advizable to change you password immediately."))), " ", /*#__PURE__*/React.createElement("hr", null), "Thank you for taking time to read our terms of service, you'll be notified by email if there is an update in these terms. ", /*#__PURE__*/React.createElement("p", null), "Thank you!");
}; //Reading and adding terms.jsxhas suceeded
//Addingutils.jsx

/* Util components */

/**Poster */


var PosterLR = props => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    border: "1",
    cellPadding: "7",
    cellSpacing: "7",
    width: "100%",
    className: "poster"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    valign: "center",
    align: "center"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "7",
    cellSpacing: "7",
    className: "left"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.data.image,
    width: "320",
    height: "320",
    alt: "Image"
  })))), /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "14",
    cellSpacing: "14",
    className: "right"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    width: "100%"
  }, props.data.title)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, props.data.description)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, /*#__PURE__*/React.createElement("a", {
    href: "dashboard.html",
    target: "_self"
  }, "Start now!"))))))));
};

var PosterRL = props => {
  return /*#__PURE__*/React.createElement("p", {
    align: "center"
  }, /*#__PURE__*/React.createElement("table", {
    border: "1",
    cellPadding: "7",
    cellSpacing: "7",
    width: "100%",
    className: "poster2"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    valign: "center",
    align: "center"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "14",
    cellSpacing: "14",
    className: "right"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    width: "100%"
  }, props.data.title)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, props.data.description)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, /*#__PURE__*/React.createElement("a", {
    href: "dashboard.html",
    target: "_self"
  }, "Start now!")))), /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "7",
    cellSpacing: "7",
    className: "left"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.data.image,
    width: "320",
    height: "320",
    alt: "Image"
  }))))))));
};
/**Value */


var ValueLR = props => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    border: "1",
    cellPadding: "7",
    cellSpacing: "7",
    width: "100%",
    className: "value"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    valign: "center",
    align: "center"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "7",
    cellSpacing: "7",
    className: "left"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%",
    valign: "center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "megavalue"
  }, props.data.letter)))), /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "14",
    cellSpacing: "14",
    className: "right"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    width: "100%"
  }, props.data.word)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, props.data.description)))))));
};

var ValueRL = props => {
  return /*#__PURE__*/React.createElement("p", {
    align: "center"
  }, /*#__PURE__*/React.createElement("table", {
    border: "1",
    cellPadding: "7",
    cellSpacing: "7",
    width: "100%",
    className: "value2"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    valign: "center",
    align: "center"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "14",
    cellSpacing: "14",
    className: "right"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    width: "100%"
  }, props.data.word)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, props.data.description))), /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "7",
    cellSpacing: "7",
    className: "left"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%",
    valign: "center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "megavalue"
  }, props.data.letter))))))));
};

var Beforefooter = () => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("table", {
    className: "bfooter"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center"
  }, "Go beyond the limitations of Distance!"))));
};

var Footer = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    border: "0",
    className: "footer",
    cellPadding: "5",
    cellSpacing: "5"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "5",
    cellSpacing: "5"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/logo_3d.png",
    width: "218",
    height: "218",
    alt: "Logo"
  })))), /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "5",
    cellSpacing: "5"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "top"
  }, "Reost, Inc ", /*#__PURE__*/React.createElement("p", null), "A remote-based engineering team", /*#__PURE__*/React.createElement("p", null), "Access Of No Distance ", /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("u", null, "Contact person")), " ", /*#__PURE__*/React.createElement("p", null), "Muwanguzi Silas ", /*#__PURE__*/React.createElement("p", null), "reost.co@gmail.com ", /*#__PURE__*/React.createElement("p", null), "+256 759 730 932"))), /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "5",
    cellSpacing: "5"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "top"
  }, /*#__PURE__*/React.createElement("u", null, /*#__PURE__*/React.createElement("big", null, "Quick Links")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    target: "_self"
  }, "Home")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "services.html",
    target: "_self"
  }, "Services")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "dashboard.html",
    target: "_self"
  }, "Dashboard")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "about.html",
    target: "_self"
  }, "About Us")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    target: "_self"
  }, "Contact Us")), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "terms.html",
    target: "_self"
  }, "Terms of service")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "faq.html",
    target: "_self"
  }, "Faq")))))), "\xA9 Reost, Inc ", new Date().getFullYear(), ". All rights reserved.", /*#__PURE__*/React.createElement("p", null), "-");
};

var FPopup = props => {
  return /*#__PURE__*/React.createElement("div", {
    id: props.id,
    className: "popup"
  }, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "9",
    cellSpacing: "9",
    className: "container"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "right",
    valign: "top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/closemenu.svg",
    width: "45",
    height: "45",
    onClick: props.close
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "center"
  }, /*#__PURE__*/React.createElement(props.item, null)))));
};

var closeById = id => {
  jQuery("#" + id).fadeOut("slow");
};

var showById = id => {
  jQuery("#" + id).fadeIn("slow");
};

var ProgressBar = props => {
  let perc = props.percent;
  let lef = 100 - perc;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    border: "0",
    cellPadding: "3",
    cellSpacing: "3",
    width: "100%",
    className: "progbar"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: perc + "%",
    className: "itemio",
    align: "center",
    valign: "center"
  }, perc + "%"), perc < 100 && /*#__PURE__*/React.createElement("td", {
    width: lef + "%"
  }))));
}; //Reading and adding utils.jsxhas suceeded
//Including bottom file

/* Some elements to be put on bottom while sealing and compiling react components */
//console.log("Hello Reost!");
//Render topblack


var root = ReactDOM.createRoot(document.getElementById("topblack"));
root.render( /*#__PURE__*/React.createElement(Topblack, null)); //Render navigation

var root = ReactDOM.createRoot(document.getElementById("nav"));
root.render( /*#__PURE__*/React.createElement(Navigation, null)); //Render nav content

var root = ReactDOM.createRoot(document.getElementById("main_menu"));
root.render( /*#__PURE__*/React.createElement(MobileMainMenu, null)); //Load before footer

var bfoot = ReactDOM.createRoot(document.getElementById("before_footer"));
bfoot.render( /*#__PURE__*/React.createElement(Beforefooter, null)); //Load footer

var foot = ReactDOM.createRoot(document.getElementById("footer"));
foot.render( /*#__PURE__*/React.createElement(Footer, null));
/* Page routing */

switch (document.location.pathname) {
  case '/':
    loadHome();
    break;

  case '/index.html':
    loadHome();
    break;

  case '/about.html':
    loadAbout();
    break;

  case '/terms.html':
    loadTerms();
    break;

  case '/services.html':
    loadServices();
    break;

  case '/contact.html':
    loadContact();
    break;

  case '/faq.html':
    loadFaq();
    break;

  case '/dashboard.html':
    loadDashboard();
    break;

  case '/signin.html':
    loadSignin();
    break;

  default:
    () => {
      console.log("We are here!");
    };

} //Added bottom file
