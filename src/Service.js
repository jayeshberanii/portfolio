import React from 'react'
import "./Service.css"

function Service() {
  return (
    <div className='service component__space'>
        <div className='heading'>
             <h1 className='heading'>Services</h1>
        </div>
        <div className='containet'>
            <div className='row'>
                <div className='col__3'>
                    <div className='service__box pointer'>
                        <div className='icon'></div>
                        <div className='service__meta'></div>
                    </div>
                </div>
                <div className='col__3'>
                    <div className='service__box pointer'>
                        <div className='icon'></div>
                        <div className='service__meta'></div>
                    </div>
                </div>
                <div className='col__3'>
                    <div className='service__box pointer'>
                        <div className='icon'></div>
                        <div className='service__meta'></div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Service