import { useEffect, useRef } from "react";
import Card from "./Card";

export default function ScrollTo({ navbarRef }) {
    // create a `ref` to the Card component to which we want to scroll to.
    const scrollToRef = useRef( null );
    const scrollToCardNum = 5;

    // Create an array of Card components
    const items = [1,2,3,4,5,6,7,8,9,10];
    const cards = items.map( i => (
        <Card cardNum={i} key={i} 
            className="bg-primary-subtle"  
            // If we should scroll to this card component, 
            // then pass `scrollToRef` else pass `null`  
            ref={ i === scrollToCardNum ? scrollToRef : null } 
        />
    ));

    useEffect( () => {
        // If `scrollToRef` points to an element, then scroll it into view.
        if( scrollToRef.current ) {
            // Get the height of the fixed nav bar.
            const navbarHeight = navbarRef.current.getBoundingClientRect().height;
            // Calculate the distance to be scrolled.
            const scrollPosY = scrollToRef.current.getBoundingClientRect().top - navbarHeight;
            // scroll away!
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