const PageLayout = (data) => {
    const {
        className = '',
        children
    } = data;

    return (<div className={`PageLayout ${className}`}>
        {children}
    </div>);
}

export default PageLayout;