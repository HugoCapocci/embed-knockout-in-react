import * as React from 'react';
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
  koTrigger: any;
  koModel: any;
  node!: HTMLDivElement | null;

  updateKnockout() {
    this.koTrigger(!this.koTrigger());
  }

  componentDidMount() {
    this.koTrigger = ko.observable(true);
    this.koModel = ko.computed(() => {
      this.koTrigger();
      return {
          props: this.props,
          state: this.state
      };
    });
    ko.applyBindings(this.koModel, this.node);
  }

  componentWillUnmount() {
      ko.cleanNode(this.node as Node);
  }

  componentDidUpdate() {
      this.updateKnockout();
  }

  render() {
      return (
        <div data-bind="foreach: props.todos" ref={node => this.node = node}>
          <span data-bind="text: $data.name" />
          <like-widget params="value: $data.userRating" />
        </div>
      )
  }
}
