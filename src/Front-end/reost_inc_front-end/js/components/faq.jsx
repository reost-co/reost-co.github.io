
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
                us <a href="contact.html" target={"_self"}>here</a>
            </p>
        </div>
    );
}