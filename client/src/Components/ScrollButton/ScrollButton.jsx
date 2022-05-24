import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import "./ScrollButton.css";

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);

    const toggle = () => {
        if (window.pageYOffset > 200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggle);

        return () => {
            window.removeEventListener("scroll", toggle);
        }

    }, []);

    return (
        <div className="scrollButtonContainer">
            <button className="scrollButton" onClick={scrollToTop}
                style={{
                    display: showButton ? 'inline' : 'none',
                }}>
                <BiUpArrowAlt />
            </button>
        </div>
    );
};

export default ScrollButton;