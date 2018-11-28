import ko from 'knockout';

ko.components.register('like-widget', {
  viewModel: function(params) {
    this.chosenValue = ko.isObservable(params.value) ? params.value : ko.observable(params.value);     

    // Behaviors
    this.like = () => {
      this.chosenValue('like');
    };

    this.dislike = () => {
      this.chosenValue('dislike');
    };
    
    this.isLike = ko.pureComputed(() => 
      this.chosenValue() === 'like'
    );
  },
  template: `<div class="like-or-dislike" data-bind="visible: !chosenValue()">
          <button data-bind="click: like"><i class="fa fa-thumbs-o-up"></i> Like it</button>
          <button data-bind="click: dislike"><i class="fa fa-thumbs-o-down"></i> Dislike it</button>
      </div>
      <div class="result" data-bind="visible: chosenValue">
          <i class="fa" data-bind="css: { 'fa-thumbs-o-up': isLike, 'fa-thumbs-o-down': !isLike() }"></i>
          <span>You <strong data-bind="text: chosenValue"></strong> it</span>
      </div>`
  }
);
  
function Product(name, rating) {
  this.name = name;
  this.userRating = ko.observable(rating || null);
}

function MyViewModel() {
  this.products = [
    new Product('Garlic bread'),
    new Product('Pain au chocolat'),
    new Product('Seagull spaghetti', 'like') // This one was already 'liked'
  ];
  this.enabled = true;
}

ko.applyBindings(new MyViewModel());
