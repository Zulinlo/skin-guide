import './styles.scss'

const Navbar = () => {
    return (
        <>
            <div class='nav--container'>
                <div class='content'>
                    Cleanser | Toner | Exfoliant | Essence | Serum | Sheet-mask | Moisturiser | Sunscreen | Other
                    <input type="text" placeholder="search" />
                </div>
            </div>
            <div class='nav--sticky'>
                <div class='content'>
                    <span class='heading'>Home</span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
