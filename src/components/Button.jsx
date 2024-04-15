const Button = (data) => {

    const {
        className,
        value,
        onClick
    } = data;

    return (<div className={`Button ${className}`} onClick={onClick}>
        <p>{value}</p>
    </div>)
}

export default Button;