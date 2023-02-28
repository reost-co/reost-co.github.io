
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