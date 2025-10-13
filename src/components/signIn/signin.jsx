import "./styles.scss";

const SignIn = (props) => {

    return (
        <div className="sign-in_container">
            <h2 className="title">Create an account</h2>
            {props.isSubTitle && <p className="subtitle">sub title goes here</p>}
        </div>
    );
};


export default SignIn;
