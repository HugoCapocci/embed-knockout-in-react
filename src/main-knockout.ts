import * as ko from 'knockout';

import './ko-bindings';
import { DummyButtonFC } from './react-components/DummyButtonFC';
// import { DummyButton } from './react-components/DummyButton';

ko.components.register('ko-dummy-button', {
  viewModel: function (params: any) {
    // @ts-ignore
    this.DummyButton = DummyButtonFC; //DummyButton;
    // @ts-ignore
    this.clickHandler = () => {
        window.alert('cliked');
    };
    // @ts-ignore
    this.buttonLabel = 'Click Me!'; //params
  },
  template: '<div data-bind="react: { Component: DummyButton, props: { clickHandler, buttonLabel } }"></div>'
});

// class Product {
//   name: string;
//   userRating: KnockoutObservable<string>
//   constructor(name: string, rating?: string) {
//       this.name = name;
//       this.userRating = ko.observable(rating || null);
//   }
// }

// class MyViewModel {
//   products: Product[];
//   enabled :boolean;
//   constructor() {
//       this.products = [
//           new Product('Garlic bread'),
//           new Product('Pain au chocolat'),
//           new Product('Seagull spaghetti', 'like'), // This one was already 'liked'
//       ];
//       this.enabled = true;
//   }
// }

ko.applyBindings();
