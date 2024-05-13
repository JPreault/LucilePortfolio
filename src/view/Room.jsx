import { useEffect, useRef, useState } from 'react';
import Plan from '../images/spa/Plan.png';
import Room1 from '../images/spa/AccueilImage.png';
import Room2 from '../images/spa/CabineDuoImage.png';
import Room3 from '../images/spa/CabineSimple.png';
import Room4 from '../images/spa/Exterieur.png';
import ContainLogo from '../components/ContainLogo';
import { ReactComponent as Exclamation } from '../images/icones/eyes.svg';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const Room = () => {
    const { pathname } = useLocation();
    const [room, setRoom] = useState("room1");
    const [openPortfolio, setOpenPortfolio] = useState(false);
    const [loading, setLoading] = useState(true);
    const roomRef = useRef(null);
    const containRoomRef = useRef(null);

    useEffect(() => {
        if (roomRef.current !== null && containRoomRef.current !== null) {
            roomRef.current.scrollLeft = roomRef.current.scrollLeftMax / 2;
        }

        setOpenPortfolio(false);
    }, [])

    useEffect(() => {
        setOpenPortfolio(false);
    }, [pathname])

    function renderRoom() {
        switch (room) {
            case "room2":
                return <img onLoad={() => setLoading(false)} on className='roomImage' alt={room} src={Room2} />
            case "room3":
                return <img onLoad={() => setLoading(false)} className='roomImage' alt={room} src={Room3} />
            case "room4":
                return <img onLoad={() => setLoading(false)} className='roomImage' alt={room} src={Room4} />
            default:
                return <img onLoad={() => setLoading(false)} className='roomImage' alt={room} src={Room1} />
        }
    }

    function renderPortfolio() {
        switch (room) {
            case "room2":
                return <iframe title='skills' src='./portfolio/skills?page=clean' />
            case "room3":
                return <iframe title='professionalActions' src='./portfolio/professionalActions?page=clean' />
            case "room4":
                return <iframe title='interests' src='./portfolio/interests?page=clean' />
            default:
                return <iframe title='about' src='./portfolio/about?page=clean' />
        }
    }

    function openRoom(newRoom) {
        if(newRoom !== room) {
            setRoom(newRoom);
            setLoading(true);
        }
    }

    return (<div ref={roomRef} className={'Room' + (openPortfolio ? " open" : "")}>
        {loading && <div className='loader'>
            <Loader/>
        </div>}
        <div ref={containRoomRef} className='containRoom' >
            <ContainLogo className={room} onClick={() => setOpenPortfolio(true)}>
                <Exclamation />
            </ContainLogo>
            {renderRoom()}
        </div>
        <div className='menu'>
            <div className='containMenu'>
                <svg width="1744" height="1739" viewBox="0 0 1744 1739" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1744" height="1739" />
                    <path onClick={() => openRoom("room3")} className='room' fill-rule="evenodd" clip-rule="evenodd" d="M423 1040L616.349 774.5L668.5 702.889L355.5 576.193L86.5 890L130.5 988L444 1137L423 1040Z" fill="#D21F1F" fill-opacity="0.4" />
                    <path onClick={() => openRoom("room1")} className='room' d="M423 1040L444 1137L1356 1566.5L1538 1130L976.5 898.5L963.5 924.5L616.349 774.5L423 1040Z" fill="#1974DF" fill-opacity="0.4" />
                    <path onClick={() => openRoom("room4")} className='room' d="M922 805.5L1048.5 602.5L1083.5 614L1164 492.5L503 259L375.5 410L305 381.5L189.5 509L355.5 576.193L668.5 702.889L922 805.5Z" fill="#4DD21F" fill-opacity="0.4" />
                    <path onClick={() => openRoom("room2")} className='room' d="M976.5 898.5L1538 1130L1656 832.5L1133 635.5L976.5 898.5Z" fill="#AE1FD2" fill-opacity="0.4" />
                    <path d="M1048.5 602.5L922 805.5L668.5 702.889L616.349 774.5L963.5 924.5L976.5 898.5L1133 635.5L1083.5 614L1048.5 602.5Z" fill="#020202" fill-opacity="0.6" />
                </svg>
                <img alt='plan' src={Plan} />
            </div>
        </div>
        {openPortfolio && <div className='popup'>
            <i className='close fps fp-plus-circle' onClick={() => setOpenPortfolio(false)} />
            {renderPortfolio()}
        </div>}
    </div >);
}

export default Room;