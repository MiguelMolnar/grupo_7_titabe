function MovieList (props) {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.subcategory.name}</td>
        </tr>
    )
}
export default MovieList