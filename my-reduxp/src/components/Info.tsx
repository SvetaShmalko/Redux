import React from 'react'
import { InfoState } from '../redux/infoReducer';
import { connect } from 'react-redux'

export interface InfoProps {
    name: string;
}

interface State {
    arrInfo: InfoProps[];
}

interface ConnectedProps {
    arrInfo: InfoProps[];
}

export class Info extends React.Component<InfoProps>{

    render() {

        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state: { infoReducer: InfoState }): ConnectedProps => ({
    arrInfo: state.infoReducer.arrInfo
});

export default connect(mapStateToProps)(Info);
