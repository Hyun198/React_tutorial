import React from 'react'
import './NewsLetter.css'
export default function NewsLetter() {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers on Your email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
