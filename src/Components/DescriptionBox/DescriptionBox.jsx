import React from 'react'
import './DescriptionBox.css'
export default function DescriptionBox() {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-nav">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores non eaque beatae tenetur at hic fugit, ut mollitia eum expedita iure,
                    sapiente a veniam libero vel culpa quasi blanditiis iste?
                </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur numquam sint iure, quia nihil optio repudiandae minus nemo inventore hic laboriosam ea.
                    Amet, veritatis commodi! Maiores atque vero labore aliquid?</p>
            </div>
        </div>
    )
}
