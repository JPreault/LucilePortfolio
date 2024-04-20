const ContainLogo = (data) => {

    const {
        className ='',
        onClick,
        children
    } = data;
    
    return (<div className={`ContainLogo ${className}`} onClick={onClick}>
        {children}
    </div>);
}

export default ContainLogo;