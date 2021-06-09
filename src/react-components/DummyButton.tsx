import * as React from 'react';

export interface OwnProps {
    buttonLabel: string;
    clickHandler: () => void;
}

export class DummyButton extends React.Component<OwnProps> {
    componentWillUnmount() {
        console.log('DummyButton class component unmounted');
        
    }

    render() {
        return <button onClick={this.props.clickHandler}>{this.props.buttonLabel}</button>
    }
}
