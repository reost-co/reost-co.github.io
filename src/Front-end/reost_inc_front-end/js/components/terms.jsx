
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