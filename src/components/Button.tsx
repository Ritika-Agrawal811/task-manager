type ButtonProps = {
    children: React.ReactNode
    className?: string
    onClick?: (e: React.MouseEvent) => void
}

const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className ? className : ''} py-2.5 px-6 rounded-lg font-medium text-lg`}
        >
            {children}
        </button>
    )
}

export default Button
