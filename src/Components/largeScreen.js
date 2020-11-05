import React from 'react'

function largeScreen() {
    return (
        <div class="largescreen">
            <div class="col-lg-6 col-12">
                <h1 class="homehead">Every student matters</h1>
                <p class="subtitle">Get your doubts clarified and attend LIVE classes <br />in the language of your choice</p>
                <input type="text" value="" class="input" title="Search your doubts here" placeholder="Search your doubts here" ></input>

                <div>
                    <button className="get-app">Get the free app on Play Store</button>
                </div>
            </div>
            <div class="row">
                <img className="large-image"src="https://cwpwp2.betterthanpaper.com/wp-content/uploads/2020/02/alphabet-blur-books-close-up-301920.jpg " width= "611px" height= "247px" />
              <div className="align">
                <div class="align-items">
                    <div class="px">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3074/3074767.svg"  width= "58px" height= "92px"/>
                    </div>
                    <div>
                        <p class="counttext"> 10,00,000 +</p>
                        <p class="count">video lectures</p>
                    </div>
                </div>
                <div class="align-items">
                    <div class="px">
                        <img src="data:image/png;base64,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"    width= "89px"
    height= "78px" />
                    </div>
                    <div>
                        <p class="counttext1">40,000 +</p>
                        <p class="count">satisfied students</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default largeScreen
