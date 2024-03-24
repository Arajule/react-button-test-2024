import React from "react";

const CustomButton = ({ children, onClick, variant }) => {
  // Define styles based on the variant prop
  const styles = {
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor:
      variant === "primary"
        ? "#007bff"
        : variant === "secondary"
          ? "#6c757d"
          : variant === "success"
            ? "#28a745"
            : variant === "danger"
              ? "#dc3545"
              : "transparent",
    color:
      variant === "primary" ||
      variant === "secondary" ||
      variant === "success" ||
      variant === "danger"
        ? "white"
        : "black",
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
