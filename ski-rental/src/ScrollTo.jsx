import { useEffect, useRef } from "react";
import Card from "./Card";

export default function ScrollTo({ navbarRef }) {
    const scrollToRef = useRef( null );
    const scrollToCardNum = 5;

    const items = [1,2,3,4,5,6,7,8,9,10];
    const cards = items.map( i => (
        <Card cardNum={i} key={i} 
            className="bg-primary-subtle"    
            ref={ i === scrollToCardNum ? scrollToRef : null } 
        />
    ));

    useEffect( () => {
        if( scrollToRef.current ) {
            const navbarHeight = navbarRef.current.getBoundingClientRect().height;
            const scrollPosY = scrollToRef.current.getBoundingClientRect().top - navbarHeight;
            window.scrollTo( 0, scrollPosY );            
        }
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {cards}
                </div>
            </div>
        </div>
    );
}