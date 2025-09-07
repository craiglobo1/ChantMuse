import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import GabcEditor from '../components/gabceditor';
import ChantRenderer from '../components/ChantRenderer';
import ChantPlayback from '../components/ChantPlayback';
// @ts-ignore
import * as exsurge from '../lib/exsurge/exsurge.es.js';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function EditorPage() {
    const [gabcText, setGabcText] = useState<string>(
        `(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`
    );
    const [audioMappings, setAudioMappings] = useState<Array<{ pitch: typeof exsurge.GabcPitch, duration: number }>>([]);

    const handleGabcChange = (newText: string) => {
        setGabcText(newText);
    };
    const handleAudioMappingsChange = (newMappings: Array<{ pitch: typeof exsurge.GabcPitch, duration: number }>) => {
        setAudioMappings(newMappings);
    };

    return (
        <div>
            <Navbar />
            <ChantRenderer gabc={gabcText} onAudioMappingsChange={handleAudioMappingsChange} />
            <div>
                <ChantPlayback color="secondary" text={<>Intone</>} audioMappings={audioMappings.slice(0, 4)} />
                <ChantPlayback color="primary" text={<><PlayArrowIcon sx={{ fontSize: 'medium' }} /> play</>} audioMappings={audioMappings} />
            </div>
            <GabcEditor value={gabcText} onChange={handleGabcChange} />
        </div>
    );
}
