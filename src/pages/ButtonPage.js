import { GoBell,GoArrowUp,GoBeaker,GoBug,GoCheck } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage () {
    const handleClick =()=> { }
    return(<div>
                <div>
                    <Button primary rounded className= 'mb-5' onClick={handleClick}><GoBell />Click Me</Button>
                </div>
                <div>
                    <Button success rounded><GoArrowUp />Buy Now</Button>
                </div>
                <div>
                    <Button warning outline><GoBeaker />See Deals</Button>
                </div>
                <div>
                    <Button danger outline><GoBug />Hide Ads</Button>
                </div>
                <div>
                    <Button secondary rounded><GoCheck />Something</Button>
                </div>
    </div>)
}

export default ButtonPage;