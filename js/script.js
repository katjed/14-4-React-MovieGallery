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
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieImage, {img: this.props.movie.img}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc})
			)
		);
	},
});

var MoviesList = React.createClass({
	propTypes: {
  		items: React.PropTypes.array.isRequired,
	},

    render: function(){
    	var moviesElements = movies.map(function(movie) {
    		return React.createElement(Movie, {key: movie.id, movie: movie});
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


/*
var MoviesList = React.createClass({
	propTypes: {
  		movies: React.PropTypes.array.isRequired,
	},

	render: function (){
    	return React.createElement('div', {}, 
        	React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
            )
   	}
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie: movie});
});


var element = React.createElement(MoviesList, {movies: movies});  

ReactDOM.render(element, document.getElementById('app'));
*/

