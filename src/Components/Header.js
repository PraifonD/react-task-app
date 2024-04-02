import "./Header.css";
import { RiMoonClearFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";
export default function Header(props) {
    const {theme,setTheme} = props;
    function toggleTheme() {
        if(theme === "light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }
    return(
        <header>
            <div className="logo">
                <span>Task Manager</span>
            </div>
            <div className="ctn__theme">
                <span className="btn__theme" onClick={toggleTheme}>
                    {theme === "light"? <> Light {<RiSunFill />} </>: <> Dark {<RiMoonClearFill />} </>}
                </span>
            </div>
        </header>
    )
};