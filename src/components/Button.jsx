const Button = (data) => {

    const {
        className = '',
        value = null,
        onClick,
        children
    } = data;

    return (<div className={`Button ${className}`} onClick={onClick}>
        {value === null
            ? children
            : <p>{value}</p>
        }
    </div>)
}

export default Button;