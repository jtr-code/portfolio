import { useState } from "react";
import "./Header.css";
import Hamburger from "hamburger-react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className='nav'>
            <div className='nav_left'>
                <div className='title'>jishnu</div>
            </div>
            <div className='nav_right'>
                <div className='icon'>
                    <Hamburger
                        toggled={openMenu}
                        toggle={setOpenMenu}
                        size={20}
                        duration={0.5}
                    />
                </div>
                {openMenu && (
                    <div className={`list ${openMenu ? "open" : ""}`}>
                        <ul>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href='#'>Projects</a>
                            </li>
                            <li>
                                <a href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
