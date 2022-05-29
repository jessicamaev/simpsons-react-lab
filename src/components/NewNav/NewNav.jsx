export default function NewNav(props) {
    return (
        <li className="trigger"><a href="/#">{props.name}</a>
            <ul className="submenu">
                <li><a href="/#">Link 1</a></li>
                <li><a href="/#">Link 2</a></li>
            </ul>
        </li>
    )
}