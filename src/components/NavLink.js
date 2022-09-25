

function NavLink(props){
    return(
        <a href={props.url} className="NavLink">
            {props.item}
        </a>
    )
}

export default NavLink;