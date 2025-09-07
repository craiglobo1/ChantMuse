import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function ScoresPage() {
    const [gabcText, setGabcText] = useState<string>(
        `(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`
    );

    const handleGabcChange = (newText: string) => {
        setGabcText(newText);
    };

    return (
        <div>
            <Navbar />
            <h1 className='dark:text-white Title'>Scores</h1>
        </div>
    );
}
