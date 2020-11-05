
import React, { Component } from 'react';

class Cards extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    head: "LIVE Classes",
                    term: "Learn live from  ",
                    value: "the best tutors",
                    growth: "in India",
                    button: "Book now"
                },
                {
                    head: "Earn Cash",
                    term: "Ask Doubts",
                    value: "Answer Questions ",
                    growth: "Earn Money!",
                    button: "Explore"
                },
                {
                    head: "Exam Preparation",
                    term: "JEE Mains",
                    value: "JEE Advanced",
                    growth: "NEET",
                    button: "Explore"

                },
                {
                    head: "New Users",
                    term: "Test With",
                    value: "detailed analysis",
                    growth: "national ranking",
                    button: "Explore"

                }

            ]
        }
    }
    render() {
        return (
            <div className='flex-container'>
                {
                    this.state.data.map((item) =>
                        <div className='chat'>
                            <div className="sameLines">
                                <div className="font">{item.head}</div>
                                <div className="fontsize">{item.term}</div>
                                <div className="fontsize">{item.value}</div>
                                <div className="fontsize">{item.growth}</div>
                            </div>
                <button className="item">{item.button}</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Cards;