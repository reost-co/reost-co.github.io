
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
                    <a href="dashboard.html" target={"_self"}>
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
                    <a href="faq.html" target={"_self"}>
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
                                    <a href="dashboard.html" target={"_self"}>
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
                                    <a href="faq.html" target={"_self"}>
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