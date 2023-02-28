
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
                to us <a href="contact.html" target={"_self"}>here</a>.
            </p>

        </div>
    );

}