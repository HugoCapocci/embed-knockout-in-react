import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ko from 'knockout';

import './ko-components/like-widget';

export type UserRating = null | 'like' | 'dislike';
export type Todo = {
  name: string;
  userRating: UserRating;
}
type Props = {
  todos: Todo[]
};

// typescript does not allow unknown tags
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'like-widget': any
    }
  }
}

export class ReactWrapper extends React.Component<Props> {
  __koTrigger: any;
  __koModel: any

  updateKnockout() {
    this.__koTrigger(!this.__koTrigger());
  }

  componentDidMount() {
    this.__koTrigger = ko.observable(true);
    this.__koModel = ko.computed(() => {

      this.__koTrigger();

      return {
          props: this.props,
          state: this.state
      };
    });

    ko.applyBindings(this.__koModel, ReactDOM.findDOMNode(this));
  }

  componentWillUnmount() {
      ko.cleanNode(ReactDOM.findDOMNode(this) as Node);
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
