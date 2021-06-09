import * as React from 'react';

export interface DummyButtonProps {
    buttonLabel: string;
    clickHandler: () => void;
}

export function DummyButtonFC(props: DummyButtonProps) {
    const [displayLabel, setDisplayLabel] = React.useState(true);

    const clickHandler = React.useCallback(() => {
        props.clickHandler();
        setDisplayLabel(previousValue => !previousValue);
    }, [])

    return <button onClick={clickHandler}>
        {displayLabel && props.buttonLabel}
    </button>;
}
