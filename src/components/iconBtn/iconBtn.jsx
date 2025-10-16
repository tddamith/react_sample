import "./styles.scss";

const IconButton = ({ size = "md", iconColor = "default", icon }) => {
  return (
    <button className={`iconBtn iconBtn--${size} iconBtn--${iconColor}`}>
      <span className="iconBtn_span">{icon}</span>
    </button>
  );
};

export default IconButton;