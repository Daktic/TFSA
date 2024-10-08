import "./common.css"

function ConfirmDeny(props) {

    return (
        <div className="button-box">
            <button className="confirm-deny-button" onClick={props.confirm}>Confirm</button>
            <button className="confirm-deny-button" onClick={props.deny}>Deny</button>
        </div>
    )
}

export {ConfirmDeny};