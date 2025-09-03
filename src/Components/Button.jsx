import React from 'react'

function Button({
    children,
    onClick,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}>
            {children}
        </button>
    )
}

export default Button