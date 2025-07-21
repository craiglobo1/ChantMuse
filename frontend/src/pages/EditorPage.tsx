import * as React from 'react';
import Navbar from '../components/Navbar'
import GabcEditor from '../components/gabceditor';
import ChantRenderer from '../components/ChantRenderer';


export default class EditorPage extends React.Component{
    state = {
        gabcText: `(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`
    };

    handleGabcChange = (newText: string) => {
        this.setState({ gabcText: newText });
    };

    public render() {
        return (
            <div>
                <Navbar />
                <h1 className='dark:text-white Title'>ChantMuse</h1>
                <ChantRenderer gabc={this.state.gabcText} />
                <GabcEditor value={this.state.gabcText} onChange={this.handleGabcChange}/>
            </div>
        );
    }
}
