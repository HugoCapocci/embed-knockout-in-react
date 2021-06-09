import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ko from 'knockout';

const reactHandler = {
    render: function (element: HTMLElement, Component: any, props: any) {
        ReactDOM.render(
            React.createElement(Component, props),
            element
        );
    },
    init: function (element: HTMLElement, valueAccessor: any) {
        const options = valueAccessor();
        const Component = ko.unwrap(options.Component);
        const props = ko.toJS(options.props);

        reactHandler.render(element, Component, props);

        return { controlsDescendantBindings: true };
    },
    update: function (element: HTMLElement, valueAccessor: any) {
        const options = valueAccessor();
        const Component = ko.unwrap(options.Component);
        const props = ko.toJS(options.props);

        reactHandler.render(element, Component, props);

        return { controlsDescendantBindings: true };
    }
}

ko.bindingHandlers.react = reactHandler;
