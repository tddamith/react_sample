// import React from "react";
// import "./index.scss";

// const SignInForm = ({
//   title = "Welcome back",
//   subtitle = "sub title goes here",
  
// }) => {
//   return (
//     // Outer container uses flex to center the form wrapper on the screen
//     <div className="sign-in-form-container">
//       {/* Form Card (uses flex-direction: column for vertical stacking) */}
//       <form className="sign-in-card" >
//         <div className="text-content">
//           <h1 className="title">{title}</h1>
//           <p className="subtitle">{subtitle}</p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignInForm;


import React from "react";
import "./index.scss";

const SignInForm = ({
  title = "Welcome back",
  subtitle = "Sub title goes here",
  textAlign = "center", // dynamic: 'left', 'center', or 'right'
  direction = "column", // dynamic: 'row' or 'column'
  gap = "8px", // dynamic: spacing between title and subtitle
}) => {
  return (
    <div className="sign-in-form-container">
      <form className="sign-in-card">
        {/* Dynamic Flex Container for title + subtitle */}
        <div
          className="text-content"
          style={{
            display: "flex",
            flexDirection: direction,
            alignItems:
              textAlign === "center"
                ? "center"
                : textAlign === "right"
                ? "flex-end"
                : "flex-start",
            textAlign,
            gap,
          }}
        >
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
