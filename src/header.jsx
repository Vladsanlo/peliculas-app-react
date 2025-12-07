function Header({ callback }) {
    return (
        <header>
            <h1>Peliculas App </h1>
            <nav>
                <ul>
                    <li id="sci-fi" onClick={callback}>Sci-fi</li>
                    <li id="terror" onClick={callback}>Terror</li>
                    <li id="thriller" onClick={callback}>Thrillers</li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header 