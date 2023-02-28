
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
                                <a href="dashboard.html" target={"_self"}>Start now!</a>
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
                                <a href="dashboard.html" target={"_self"}>Start now!</a>
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
                            <a href="dashboard.html" target={"_self"}>Dashboard</a>
                        </p>
                        <p>
                            <a href="about.html" target={"_self"}>About Us</a>
                        </p>
                        <p>
                            <a href="contact.html" target={"_self"}>Contact Us</a>
                        </p><p/>
                        <p>
                            <a href="terms.html" target={"_self"}>Terms of service</a>
                        </p>
                        <p>
                            <a href="faq.html" target={"_self"}>Faq</a>
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