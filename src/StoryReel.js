import React from 'react'
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className = "storyReel">
            <Story
                image="https://i.pinimg.com/originals/7e/a7/d6/7ea7d66caa163dd5962161ae97752438.png"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu5TBFIq8_-gbAhYNbfdCe_PedrZA-2_cLQ&usqp=CAU"
                title="Jerry Smith"
            />
            <Story
                image="http://i.ebayimg.com/images/g/UMIAAOSwJ4FdfWWe/s-l500.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHH3_yWFIg4LXLBlxzqTTEw_rVmYeS5jyGvhzxvC-X7DuJ4pgeTh-2mrfhgJ-IQh9-3k&usqp=CAU"
                title="Sandor Clegane"
            />
            <Story
                image="https://i.pinimg.com/564x/23/6b/17/236b172df2ca4fee127e34b370bda70b.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BaN_lUbwq2qCojuEpg1VcJZZVoiD1jspqg&usqp=CAU"
                title="Steve Harington"
            />
            <Story
                image="https://i.pinimg.com/originals/a4/35/02/a4350267a585af3269348af54b95e0cc.jpg"
                profileSrc="https://pbs.twimg.com/media/A6gYCdaCcAAfqnz.jpg"
                title="Barney Stinson"
            />
            <Story
                image="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNDYyMTg2OC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NDI2NjU1MX0.EX3X37UjuQvbxq7WZ5N_Hv4ZDBf0kUPiSdtv-KXC2xU/img.jpg?quality=80&width=744"
                profileSrc="https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg"
                title="Chandler Bing"
            />
        </div>
    )
}

export default StoryReel
