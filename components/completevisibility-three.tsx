import React from 'react'

const CompleteInvisibilityThree = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto mt-30'>
                <div className='flex items-start justify-between gap-12 mb-8 data-animate'>
                    <h2 className='font-bold text-4xl whitespace-nowrap'>Screenshot Capture - Manual<br/> Mode

                    </h2>
                    <p className='text-gray-400 text-left max-w-xl'>Capture multiple screenshots and attach them to your conversation. Full-screen or selection mode with intelligent file management. Perfect for visual analysis and documentation.
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
                        <source src="/video/complete-3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </>
    )
}

export default CompleteInvisibilityThree;
