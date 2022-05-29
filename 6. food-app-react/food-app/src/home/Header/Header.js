import './Header.css';

function Header({locationChange, nameChange}){

    return(
        <div className='header'>
            <div className='header-form'>
            <select onChange={(event)=>{locationChange(event.target.value)}} className='form-control form-select'>
                <option>Select</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Banglore">Banglore</option>
            </select>
            <input onInput={(event)=>nameChange(event.target.value)} className='form-control' type="text" placeholder='Search for a restaurant' name="name"></input>
            </div>
        </div>
    );
}

export default Header;