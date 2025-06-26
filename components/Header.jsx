import globe from '../images/Globe.png'

function Header() {

    return (
        <>
            <nav className= "header">
                <img src={globe} />
                <h4>my travel journal.</h4>
            </nav>
        </>
    );
}

export default Header;