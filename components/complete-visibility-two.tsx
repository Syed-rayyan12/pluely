import React from 'react'

const CompleteInvisibilityTwo = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto mt-30'>
                <div className='flex items-start justify-between gap-12 mb-8 data-animate'>
                    <h2 className='font-bold text-4xl whitespace-nowrap'>Keyboard Shortcuts
</h2>
                    <p className='text-white text-left max-w-xl'>Pluely's translucent overlay window sits above all applications, invisible in video calls, screen shares, and recordings. Perfect stealth for meetings on Zoom, Google Meet, Microsoft Teams, and Slack Huddles.
                    </p>
                </div>

                <div className="rounded-xl relative bg-black border  border-gray-600/20  p-4 max-w-6xl   mx-auto">
                    <div
                        className="absolute bottom-0 left-0 w-full h-1/2  rounded-b-2xl"
                        style={{
                            background: 'linear-gradient(to top, black, rgba(0,0,0,0))',
                        }}
                    />
                    <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="rounded-xl w-full"
                    >
                        <source src="/video/complete-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </>
    )
}

export default CompleteInvisibilityTwo;
