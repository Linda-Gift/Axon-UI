import PropTypes from 'prop-types';
import { classNames } from './classNames';
import React from "react";

// export const Button = ({ children, className, rounded, variant, ...props }) => {
// <button className ={classNames("px-4 py-2 cursor-pointer select-none [outline:none]", 
// rounded ? 'rounded' : "",
// variant === "primary" ? "" : "",
// variant === "secondary" ? "" : "",
// variant === "outline" ? "" : "",
// variant === "primary-default" ? "color: {'gray': #3F3F42} text-{'gray': #FFFFFF}" : "",
// variant === "primary-hover" ? "color: {'gray': #2D2D2F} text-{'gray': #FFFFFF}" : "",
// variant === "primary-pressed" ? "color: {'gray': #1A1A1C} text-{'gray': #FFFFFF}" : "",
// variant === "secondary-default" ? "color: {'gray': #ECECEC} text-{'gray': #9F9FA0}" : "",
// variant === "secondary-hover" ? "color: {'gray': #CBCED2} text-{'gray': #9F9FA0}" : "",
// variant === "secondary-pressed" ? "color: {'gray': #3F3F42} text-{'gray': #9F9FA0}" : "",
// variant === "outline-default" ? "color: {'gray': #FFFFFF} text-{'gray': #7E7E80}" : "outline outline-1",
// variant === "outline-hover" ? "color: {'gray': #ECECEC} text-{'gray': #7E7E80}" : "outline outline-1", "",
// variant === "outline-pressed" ? "color: {'gray': #7E7E80} text-{'gray': #7E7E80}" : "outline outline-1", "",

// className)} {...props}>{children} </button>}

// const buttonVariants = (
//     {
//     variants: {
//         variant: {

//     primary: 'bg-primary-default text-white',
//     secondary: 'bg-secondary-default text-secondary-text',
//     outline: 'border border-primary-default text-primary-default',
//     'primary-default': 'bg-primary-default text-primary-text',
//     'primary-hover': 'bg-primary-hover text-primary-text',
//     'primary-pressed': 'bg-primary-pressed text-primary-text',
//     'secondary-default': 'bg-secondary-default text-secondary-text',
//     'secondary-hover': 'bg-secondary-hover text-secondary-text',
//     'secondary-pressed': 'bg-secondary-pressed text-secondary-text',
//     'outline-default': 'border border-primary-default text-primary-default',
//     'outline-hover': 'border border-primary-hover text-primary-hover',
//     'outline-pressed': 'border border-primary-pressed text-primary-pressed',
// },
//         size: {
//             sm: 'h-9 px-2 py-1',
//             md: 'h-10 px-4 py-2',
//             lg: 'h-11 px-6 py-3',
//         },

//         }
//     });


const Button = ({ variant = "primary", size = "medium", children, ...props }) => {
  const baseClass = "font-bold rounded px-4 py-2";
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    outline: "border border-blue-500 text-blue-500 bg-transparent",
  };
  const sizes = {
    small: "text-sm py-1 px-2",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  return (
    <button className={`${baseClass} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;


Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    rounded: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf([
        'primary',
        'secondary', 
        'outline',
        'primary-default',
        'primary-hover',
        'primary-pressed',
        'secondary-default',
        'secondary-hover',
        'secondary-pressed',
        'outline-default',
        'outline-hover',
        'outline-pressed',])}

