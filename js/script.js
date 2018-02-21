/*
var GalleryItem = React.createClass({
		render: function() {
			return React.createElement('h2', {}, 'Pierwszy komponent');
}
});
*/
/*
var GalleryItem = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
		},

		render: function() {
			return (
				React.createElement('div', {},
					React.createElement('h2', {}, this.props.image.name),
					React.createElement('img', {src: this.props.image.src})
				)
			);
		},
});

var image = {
	name: 'Kotek',
	src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));
*/

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: './images/harry.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: './images/lew.jpg'
	},
	{
		id: 3,
		title: 'Piraci z Karaibów',
		desc: 'Film o piratach',
		img: './images/piraci.jpeg'
	},
	{
		id: 4,
		title: 'Titanic',
		desc: 'Film o Titanicu',
		img: './images/titanic.jpg'
	}  
];

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
        return React.createElement('h2', {}, this.props.title);
    },
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function() {
        return React.createElement('p', {}, this.props.desc);
    },
});

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},

	render: function() {
        return React.createElement('img', {src: this.props.img});
    },
});

var Movie = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {key: this.props.item.id},
				React.createElement(MovieTitle, {title: this.props.item.title}),
				React.createElement(MovieImage, {img: this.props.item.img}),
				React.createElement(MovieDescription, {desc: this.props.item.desc})
			)
		);
	},
});

var MoviesList = React.createClass({
	propTypes: {
  		items: React.PropTypes.array.isRequired,
	},

    render: function(){
    	var moviesElements = this.props.items.map(function(movie) {  //  movies.map??
    		return React.createElement(Movie, {item: movie, key: movie.id});
		});

        return React.createElement('ul', {}, moviesElements);
    },
});

var element = 
	React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement(MoviesList, {items: movies})
);

ReactDOM.render(element, document.getElementById('app'));




