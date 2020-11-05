import React from 'react'

function studyMaterial() {
    return (
        <div  >
            <h1 className="student-material">Study material of 50+ State Boards</h1>
            <div className="list">
            {[...Array(20)].map(item=><div className="map-list">
                <img className="list-1"src="https://prod-wp-content.occupationalenglishtest.org/resources/uploads/2015/05/31235233/icon-buy-learning-resources.png"width="73px" height="73px"/>
                <div className="state-map">Andhra Pradesh</div></div>)}
        </div>
        </div>
    )
}

export default studyMaterial


