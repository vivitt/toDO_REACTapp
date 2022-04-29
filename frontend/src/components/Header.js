import NavBar from './NavBar';


function Header ({text}) {
    const titol = "ToDo List";
    return (<div className="header" >
    <NavBar titol = {titol} > </NavBar>
</div>)
}

export default Header;