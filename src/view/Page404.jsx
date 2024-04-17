import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Page404 = () => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate('portfolio');
        }
    })

    return (<></>);
}

export default Page404;