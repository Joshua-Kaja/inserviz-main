import React from 'react';

const  Search = () => {
  function handleOptionChange(e) {
    const value = e.target.value;
  }

  return (
    <div className='dropdown'>
      <select name="specialty" id="drop_select" onChange={handleOptionChange}>
       
        <option value="ui/ux designer">U1/UX Designer</option>
        <option value="frontend developer">Frontend Developer</option>
        <option value="backend developer">Backend Developer</option>
        <option value="grahic designer">Graphic Designer</option>
        <option value="software eng">Software Engineer</option>
        <option value="game dev">Game Developer</option>
        <option value="mobile dev">Mobile Developer</option>
      </select>
    </div>
    
  );
}
export default Search;
