import { useRef, useState } from "react";
import PageLayout from "../../components/layout/PageLayout"
import equitation from '../../images/interest/equitation.png';
import equitation1 from '../../images/interest/equitation1.png';
import equitation2 from '../../images/interest/equitation2.png';
import equitation3 from '../../images/interest/equitation3.mp4';
import equitation4 from '../../images/interest/equitation4.png';
import musculation from '../../images/interest/musculation.png';
import musculation1 from '../../images/interest/musculation1.png';
import musculation2 from '../../images/interest/musculation2.png';
import ski from '../../images/interest/ski.mp4';
import ski1 from '../../images/interest/ski1.png';
import ski2 from '../../images/interest/ski2.png';

const Interest = () => {
    const [open, setOpen] = useState(false);
    const [source, setSource] = useState(equitation);
    const [type, setType] = useState('image');
    const popup = useRef(null);

    //useOnClickOutside(open, popup, () => setOpen(false));

    function openMedia(event, source, type) {
        event.preventDefault();
        event.stopPropagation();
        console.log('rr');
        if(!open) {
            console.log('dd');
            setSource(source);
            setType(type);
            setOpen(true);
        }
        
        console.log(' ');
    };

    function needClose(evt) {
        if(evt.target !== popup.current) {
            setOpen(false);
        };
    }

    return (<PageLayout className='Interest'>
        <div className="Interest__equitation">
            <div className="Interest__equitation--containMedia">
                <p className="title">équitation</p>
                <div className="leftPart">
                    <div className="top">
                        <div className="equitation1">
                            <div className="play" onClick={(event)=> openMedia(event, equitation3, "video")}>
                                <i className="fps fp-play-rounded"></i>
                            </div>
                            <video alt="Equitation1" onClick={(event)=> openMedia(event, equitation3, "video")}>
                                <source src={equitation3 + "#t=0.1"} type="video/mp4" />
                            </video>
                        </div>
                        <div className="equitation2">
                            <img alt="Equitation2" src={equitation2} onClick={(event)=> openMedia(event, equitation2, "image")} />
                        </div>
                    </div>
                    <div className="bottom">
                        <img className="equitation3" alt="Equitation3" src={equitation4} onClick={(event)=> openMedia(event,equitation4, "image")} />
                        <img className="equitation4" alt="Equitation4" src={equitation1} onClick={(event)=> openMedia(event,equitation1, "image")} />
                    </div>
                </div>
                <div className="rightPart">
                    <img className="equitation5" alt="Equitation5" src={equitation} onClick={(event)=> openMedia(event,equitation, "image")} />
                </div>
            </div>
        </div>
        <div className="Interest__ski">
            <p className="title">ski</p>
            <div className="Interest__ski--containMedia">
                <div className="ski1">
                    <div className="play" onClick={(event)=> openMedia(event,ski, "video")}>
                        <i className="fps fp-play-rounded"></i>
                    </div>
                    <video alt="Ski1" onClick={(event)=> openMedia(event,ski, "video")}>
                        <source src={ski + "#t=0.1"} type="video/mp4" />
                    </video>
                </div>
                <img alt="Ski2" className="ski2" src={ski2} onClick={(event)=> openMedia(event,ski2, "image")} />
                <img alt="Ski3" className="ski3" src={ski1} onClick={(event)=> openMedia(event,ski1, "image")} />
            </div>
        </div>
        <div className="Interest__musculation">
            <p className="title">musculation</p>
            <div className="Interest__musculation--containMedia">
                <img alt="Musculation1" className="musculation1" src={musculation2} onClick={(event)=> openMedia(event,musculation2, "image")} />
                <img alt="Musculation2" className="musculation2" src={musculation} onClick={(event)=> openMedia(event,musculation, "image")} />
                <img alt="Musculation3" className="musculation3" src={musculation1} onClick={(event)=> openMedia(event,musculation1, "image")} />
            </div>
        </div>
        {open && <div className="popup" onClick={(evt) => needClose(evt)}>
            {type === "image"
                ? <img ref={popup} alt="ImageOuverte" src={source}/>
                : <video ref={popup} controls>
                    <source src={source + "#t=0.1"} type="video/mp4" />
                </video>
            }
        </div>}
    </PageLayout>)
}

export default Interest;