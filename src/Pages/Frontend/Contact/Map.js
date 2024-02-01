import React from 'react'

export default function Map() {
    return (
        <div style={{ height: 450 }} className='overflow-hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.466448629737!2d72.9826646753534!3d31.37369957428156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225b59ecfc3d37%3A0xacf1640a695c200e!2sAirport%20Rd%2C%20Faislabad%20Airport%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1685244211931!5m2!1sen!2s" width="100%" height="450" className='border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
