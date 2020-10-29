import React from 'react';
import Header from '../src/components/Header/Header';
import Menu from '../src/components/Menu/Menu';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Speakers from '../src/components/Speakers/Speakers';
import Footer from '../src/components/Footer/Footer';
import SpeakerContext from '../src/components/Speakers/SpeakerContext';

function Page(){
    const speakers = [
        {
        imageSrc: 'speaker-component-1124',
        name: 'Douglas Crockford',
        },
        {
        imageSrc: 'speaker-component-1530',
        name: 'Tamara Baker',
        },
        {
        imageSrc: 'speaker-component-10803',
        name: 'Eugene Chuvyrov',
        },
    ];
    return(
        <div>
            <Header />
            <Menu />
            <SpeakerContext.Provider value={speakers}>
                <SearchBar />
                <Speakers />
            </SpeakerContext.Provider>
            <Footer />
        </div>
    );
}

export default Page; 