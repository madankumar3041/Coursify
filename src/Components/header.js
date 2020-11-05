import React from 'react'

function header() {
    return (
        <div className="main">
            <header>
                <div className="logo">
                    <img className="image" src="https://www.flaticon.com/svg/static/icons/svg/3076/3076691.svg" width="30px" height="30px" />
                    <h2>Coursify </h2>
                </div>
                <ul>
                    <li>Boards</li>
                    <li>Books</li>
                    <li>Exams</li>
                    <li>Why Us?</li>
                    <button className="button">  Sign Up</button>
                    <div className="menu-bar">
            <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                    
                    </div>
                  
                </ul>
               
            
            </header>
        </div>
    )
}

export default header;
