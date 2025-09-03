import React from 'react'

function Footer() {
    return (
        <section className='relative border border-t-2 bg-red-900 p-10'>
            <div className='flex w-full justify-between'>
                <div className=''>
                    <div>
                        Logo
                    </div>
                </div>
                <div className='flex justify-center gap-36 '>
                    <div className='flex flex-wrap'>
                        <div className=''>
                            <h3 className=' mb-9'>
                                Company
                            </h3>
                            <ul className=''>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Affiliate Program</li>
                                <li>Press kit</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className=' mb-9'>
                                Support
                            </h3>
                            <ul>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Affiliate Program</li>
                                <li>Press kit</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className=' mb-9'>
                                Legals
                            </h3>
                            <ul>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Affiliate Program</li>
                                <li>Press kit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer