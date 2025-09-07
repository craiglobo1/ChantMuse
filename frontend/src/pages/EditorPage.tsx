import * as React from 'react';
import Navbar from '../components/Navbar'
import GabcEditor from '../components/gabceditor';
import ChantRenderer from '../components/ChantRenderer';
import ChantPlayback  from '../components/ChantPlayback';

// @ts-ignore
import * as exsurge from '../lib/exsurge/exsurge.es.js'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


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
                <ChantRenderer gabc={this.state.gabcText} onAudioMappingsChange={this.handleAudioMappingsChange} />
                <div>
                    <ChantPlayback color="secondary" text={<>Intone</>} audioMappings={this.state.audioMappings.slice(0, 4)} />
                    <ChantPlayback color="primary" text={<><PlayArrowIcon sx={{ fontSize: 'medium' }} /> play</>} audioMappings={this.state.audioMappings} />
                </div>
                <GabcEditor value={this.state.gabcText} onChange={this.handleGabcChange}/>
            </div>
        );
    }
}
