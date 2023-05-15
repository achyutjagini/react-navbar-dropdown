import { useContext,useState } from "react";
import { createContext } from "react";
export const ClickContext = createContext();

export const ClickProvider = ({ children }) => {

    const [click, setClick] = useState(false);
   // const [loading, setIsLoading] = useState(false);

   /*
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(true)
        //return () => setUser(null);

    }, []);*/

    const handleClick = () => {
        //localStorage.setItem('user', JSON.stringify(userObj));
        setClick(!click)
    };

    const closeMobileMenu = () => {
        //localStorage.removeItem('user');
        setClick(false)
    };


    return (
        <ClickContext.Provider value={{ click,handleClick,closeMobileMenu}}>
            {children}
        </ClickContext.Provider>
    );
};

export default ClickProvider;