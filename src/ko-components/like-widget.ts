import * as ko from 'knockout';

import '../ko-bindings';
import { DummyButton } from '../react-components/DummyButton';

ko.components.register('ko-dummy-button', {
  viewModel: function (params: any) {
    // @ts-ignore
    this.DummyButton = DummyButton;
    // @ts-ignore
    this.clickHandler = () => {
        window.alert('cliked');
    };
    // @ts-ignore
    this.buttonLabel = params.label;
  },
  template: '<div data-bind="react: { Component: DummyButton, props: { clickHandler, buttonLabel } }"></div>'

});

ko.applyBindings();
