import React, { Component } from 'react'

export class solution extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    id2: "NCERT Solutions",
                },
                {
                    id2: "NCERT Exemplar",
                },
                {
                    id2: "Reference Books",
                },
                {
                    id2: "Exam Prep Material",
                },
            ]
        }
    }
    render() {
        return (
            <div className="solution">

                <h4 className="student-material">Free Solutions</h4>
                <div className="solution-class">
                    {this.state.data.map((item) =>
                        <div className="solution-map">
                            <button className="solution-button">{item.id2}</button>

                        </div>

                    )}
                </div>
            </div>
        )
    }
}
export default solution
