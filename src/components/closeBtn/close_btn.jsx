import "./styles.scss";

const CloseBtn = (props) => {
    return (
        <div className="closeBtn">
            <span className="close_span">{props.icon}</span>
        </div>
    );
};

export default CloseBtn;
