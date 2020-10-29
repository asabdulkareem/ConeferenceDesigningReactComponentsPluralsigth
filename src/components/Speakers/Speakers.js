import React, {useContext} from 'react';
// import withData from './withData';
// import SpeakersRenderProps from './SpeakersRenderProps';
import SpeakerContext from './SpeakerContext';


const Speakers = () => {
    const speakers = useContext(SpeakerContext);
    return (
            <div>
                {speakers.map(({imageSrc, name}) => {
                    return <img src={`/images/${imageSrc}.png`}
                    alt={name} key={imageSrc}></img>
                })}
            </div>
    )
};

// const maxSpeakersToShow = 3;
export default Speakers;