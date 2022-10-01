
function MovieComponent(props){

    return(<div key ={props.id} className="App-grid">
            <div>Name:{props.name}</div>
            <div>Rating:{props.rating}</div>
            <div>Releasedate:{props.releaseDate}</div>
        </div>)
}

export default MovieComponent;