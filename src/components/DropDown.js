import { useState, useEffect ,useRef} from 'react';
import Panel from './Panel';
import { GoChevronDown } from "react-icons/go";
function DropDown({ options, value, onChange }) {
    const [isOpen, SetIsOpen] = useState(false);
    const divEl = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)){
                SetIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true)
        return () => {
            document.removeEventListener('click',handler)
        }
    }, [])
    const handleClick = () => {
        SetIsOpen(!isOpen)
    }
    const handleOptionCkick = (option) => {
        SetIsOpen(false);
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return (<div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionCkick(option)} key={option.value}>
            {option.label}
        </div>)
    })



    return (
        <div ref={divEl}  className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer '
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown />
            </Panel>
            {isOpen && <Panel className='absolute top-full '  >
                {renderedOptions}
            </Panel>}
        </div>
    )
}
export default DropDown;