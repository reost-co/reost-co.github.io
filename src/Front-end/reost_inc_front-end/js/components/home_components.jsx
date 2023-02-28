
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