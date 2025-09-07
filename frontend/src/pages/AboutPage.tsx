import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import GabcEditor from '../components/gabceditor';

export default function AboutPage() {
    const [gabcText, setGabcText] = useState<string>(
        `(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`
    );

    const handleGabcChange = (newText: string) => {
        setGabcText(newText);
    };

    return (
        <div>
            <Navbar />
            <h1 className='dark:text-white Title'>About</h1>
        </div>
    );
}
