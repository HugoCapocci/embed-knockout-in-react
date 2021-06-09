import React from 'react';
import ko from 'knockout';

import './ko-components/like-widget';

export default class ReactWrapper extends React.Component {
  componentDidMount() {
    this.koTrigger = ko.observable(true);
    this.koModel = ko.computed(() => {
      // Magic.
      // Calling this observable will add it to the dependancy
      // chain for __koModel, as it is a computedObservable.
      // Anytime __koTrigger is changed, such as in updateKnockout(),
      // this model will revaluate
      this.koTrigger();

      return {
        props: this.props,
        state: this.state,
      };
    });

    // Bind the __koModel view model to the components mounted DOM node
    ko.applyBindings(this.koModel, this.node);
  }

  componentDidUpdate() {
    this.updateKnockout();
  }

  componentWillUnmount() {
    console.log('ReactWrapper will unmount');
    ko.cleanNode(this.node);
  }

  updateKnockout() {
    // This has been bound to the dependancy chain in __koModel,
    // found in the componentDidMount lifecycle stage. Changing this
    // observable will cause __koModel to revaluate it's values.
    this.koTrigger(!this.koTrigger());
  }

  render() {
    return (
      <div data-bind="foreach: props.todos" ref={node => this.node = node}>
        <span data-bind="text: $data.name" />
        <like-widget params="value: $data.userRating" />
      </div>
    );
  }
}
