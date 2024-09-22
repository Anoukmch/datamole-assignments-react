import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
	type?: "button" | "submit" | "reset";
};

export const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};