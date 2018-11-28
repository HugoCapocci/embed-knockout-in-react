import React from 'react';
import ReactDOM from 'react-dom';
import ko from 'knockout';

import './ko-components/like-widget';

export default class ReactWrapper extends React.Component {
    updateKnockout() {
        // This has been bound to the dependancy chain in __koModel,
        // found in the componentDidMount lifecycle stage. Changing this
        // observable will cause __koModel to revaluate it's values.
        this.__koTrigger(!this.__koTrigger());
    }

    componentDidMount() {
        this.__koTrigger = ko.observable(true);
        this.__koModel = ko.computed(() => {

            // Magic.
            // Calling this observable will add it to the dependancy
            // chain for __koModel, as it is a computedObservable.
            // Anytime __koTrigger is changed, such as in updateKnockout(),
            // this model will revaluate
            this.__koTrigger();

            return {
                props: this.props,
                state: this.state
            };
        });

        // Bind the __koModel view model to the components mounted DOM node
        ko.applyBindings(this.__koModel, ReactDOM.findDOMNode(this));
    }

    componentWillUnmount() {
        ko.cleanNode(ReactDOM.findDOMNode(this));
    }

    componentDidUpdate() {
        this.updateKnockout();
    }

    render() {
        return (
            <div data-bind="foreach: props.todos">
                <span data-bind="text: $data.name" />
                <like-widget params="value: $data.userRating" />
            </div>
        )
    }
}
