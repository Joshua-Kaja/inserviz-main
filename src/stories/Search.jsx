
import React,{useState} from 'react';

function Search() {
    const [selected, setSelected] = useState("");
    const handleOptionChange = (event) => {
        const dropdown = event.target.value;
        setSelected(dropdown);
    };

    return (
        <div className="dropdown-menu">
            <div className="dropdown">
               <label htmlFor="dropdown"></label>                 
                <select className="dropdown-select" value={selected} onChange={handleOptionChange}>  
                    <option value="option1" className="opt">UI/UX Designer</option>
                    <option value="option2" className="opt">Frontend Developer</option>
                    <option value="option3" className='opt'>Backend Developer</option>
                    <option value="option4" className='opt'>Full stack developer</option>
                    <option value="option5" className='opt'>Graphic Designer</option>
                    <option value="option6" className='opt'>Mobile Developer</option>
                </select>
            </div>
        </div>
    )
}
export default Search;