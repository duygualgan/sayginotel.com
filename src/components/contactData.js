import "./contactStyle.css"


function contactData(props){
    return(
        <div className="t-card">
            <div className="t-icon">
                <i className={props.icon}></i>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <p>{props.text2}</p>
        </div>
    )
}
export default contactData;