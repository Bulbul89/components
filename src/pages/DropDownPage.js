import { useState } from "react";
import DropDown from "../components/DropDown";

function DropDownPage () {
    const [selection, setSelection] = useState(null);
    const handleSelect = (option)=> {
        setSelection(option)
    }

    const options = [
        { label: "red" , value : "red"},
        { label: "green" , value : "green"},
        { label: "blue" , value : "blue"},
    ]

return <div className="flex">
    <DropDown value={selection} onChange={handleSelect} options ={options}/>
       </div>
}

export default DropDownPage;