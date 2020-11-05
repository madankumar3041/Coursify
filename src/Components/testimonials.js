import React, { Component } from 'react'

export class testimonials extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    image:"https://www.bigcommerce.com/blog/wp-content/uploads/2017/04/customer-testimonials-hero.jpg",
                    id:"Grateful email messages… Thank you so much for a job well done."
                },
                {
                    image: "https://www.bigcommerce.com/blog/wp-content/uploads/2017/04/customer-testimonials-hero.jpg",
                    id:"Social media love… You guys are the best! Keep up the great work!"
                },
                {
                    image: "https://www.bigcommerce.com/blog/wp-content/uploads/2017/04/customer-testimonials-hero.jpg",
                    id:"Grateful email messages… Thank you so much for a job well done."
                },
                {
                    image: "https://www.bigcommerce.com/blog/wp-content/uploads/2017/04/customer-testimonials-hero.jpg",
                    id:"Social media love… You guys are the best! Keep up the great work!"
                },
                {
                    image:"https://www.bigcommerce.com/blog/wp-content/uploads/2017/04/customer-testimonials-hero.jpg",
                    id:"Grateful email messages… Thank you so much for a job well done."
                },
            ]
        }
    }
    render() {
        return (
            <div className="solution1" >

                <h4 className="student-material">Testimonials</h4>
                <div className="solution-class">
                    {this.state.data.map((item) =>
                        <div className="solution-map">
                         
                       <img className="image-map" src= {item.image}/>

                            <div className="idmap"> {item.id} </div>
                        </div>

                    )}
                </div>
<button className="testimonial-button"> Download the app for free</button>
            </div>
        )
    }
}

export default testimonials
