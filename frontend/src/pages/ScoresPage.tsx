import * as React from 'react';
import Navbar from '../components/Navbar'



export default class ScoresPage extends React.Component{
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
                <h1 className='dark:text-white Title'>Scores</h1>
            </div>
        );
    }
}
