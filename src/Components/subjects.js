import React, { Component } from 'react'

export class subjects extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    id1: "Maths",
                },
                {
                    id1: "Physics",
                },
                {
                    id1: "Chemistry",
                },
                {
                    id1: "Biology",
                },
                {
                    id1: "Science",
                },
                {
                    id1: "Commerce",
                },
                {
                    id1: "Coding",
                },
                {
                    id1: "Languages",
                }

            ]
        }
    }
    render() {
        return (
            <div className="subject">

                <h4 className="student-material">Explore our subjects</h4>
                <div className="subject-class">
                    {this.state.data.map((item) =>
                        <div className="sub-map">
                            <button className="sub-button">{item.id1}</button>

                        </div>

                    )}
                </div>
            </div>
        )
    }
}

export default subjects
