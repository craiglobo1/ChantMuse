import * as React from 'react';
import Navbar from '../components/Navbar'
import GabcEditor from '../components/gabceditor';
import ChantRenderer from '../components/ChantRenderer';
import ChantPlayback  from '../components/ChantPlayback';

// @ts-ignore
import * as exsurge from '../lib/exsurge/exsurge.es.js'

export default class EditorPage extends React.Component{
    state = {
        gabcText: `(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`,
        audioMappings: []
    };

    handleGabcChange = (newText: string) => {
        this.setState({ gabcText: newText });
    };
    handleAudioMappingsChange = (newMappings: Array<{ pitch: exsurge.GabcPitch, duration: number }>) => {
        this.setState({ audioMappings: newMappings });
    };

    public render() {
        return (
            <div>
                <Navbar />
                <h1 className='dark:text-white Title'>ChantMuse</h1>
                <ChantPlayback audioMappings={this.state.audioMappings} />
                <ChantRenderer gabc={this.state.gabcText} onAudioMappingsChange={this.handleAudioMappingsChange} />
                <GabcEditor value={this.state.gabcText} onChange={this.handleGabcChange}/>
            </div>
        );
    }
}
