import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    return(
    <div className="container-list">
        <h2>{title}</h2>
        {isVisible ? (
            <button className="instamart-btn" onClick={()=> setIsVisible(false)}>Hide</button>
        ) : 
        (
            <button className="instamart-btn" onClick={()=> setIsVisible(true)}>Show</button>
        )}
        
        
        {isVisible && <p>{description}</p>}
    </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("")
    return(
        <div className="instamart-container">
        <h1>Instamart</h1>
        <Section title={"About Instamart"}
        description={"More than 16 million people in India live in gated communities, and this figure is expected to double in the next 10 years1. Of the 4 million households using community management platforms today, 3.5 million or 82% are on the MyGate App. Gated communities are major hubs of commerce, with high, fairly homogenous consumption patterns of doorstep services. This has been further intensified in the wake of the pandemic. They are home to a majority of decision-makers for consumer brands and, hence, represent an important target audience for businesses looking for a direct-to-customer approach."}
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
            setVisibleSection("about")
        }}
        />

        <Section title={"Team Instamart"}
        description={"The leaflet that accompanies an Instamart order says, Swiggy redefined the way you order food. Now, we are redefining the way you order groceries Instamart, Swiggys brand-new cloud grocery initiative, is currently piloting in Bengaluru and Gurgaon. The last couple of years have seen Swiggy expand beyond its core restaurant delivery offering, to hyperlocal logistics with Swiggy Genie, and then daily need deliveries through its acquisition of Supr in 2018. Instamart is probably its boldest move yet, bringing it into a highly competitive space with players like Walmart/Flipkart, Amazon, JioMart and BigBasket. It is probably a testament to Swiggy’s product, design and engineering team that the pilot was shipped in just a month."}
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
        />
        </div>
    );
};


export default Instamart;