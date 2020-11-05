// import React from 'react'

// function Exams() {
//     return (
//       
//     )
// }

// export default Exams

import React, { Component } from 'react'

export class Exams extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    id:"Board Exams",

                },
                {
                    id:"JEE Mains & Advanced",
                
                },
                {
                    id:"NEET",
                },

            ]
        }
    }
    render() {
        return (
            <div className="examKey"> 
              <h1 className="student-material">Exams that you can ace with coursify</h1>
                <div className="examkey1">
            {this.state.data.map((item)=>
            <div className="mapped">
              <button className="Button">{item.id}</button>  

            </div>
                     
            )}
                    </div>
                    </div>
        )
    }
}


export default Exams
