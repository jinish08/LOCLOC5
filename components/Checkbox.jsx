import React, { useState } from 'react'

const Checkbox = ({id,label}) => {

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    console.log(selectedCheckboxes)

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
          setSelectedCheckboxes([...selectedCheckboxes, id]);
        } else {
          setSelectedCheckboxes(selectedCheckboxes.filter((checkboxId) => checkboxId !== id));
        }
      };
    
      return (
        <label>
          <input
            type="checkbox"
            checked={selectedCheckboxes.includes(id)}
            onChange={handleCheckboxChange}
          />
          {label}
        </label>
      );
}

export default Checkbox