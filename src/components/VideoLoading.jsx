import React from 'react'

function VideoLoading() {
	return (
		<div className='w-full h-full flex items-center bg-slate-100 aspect-video'>
			<div className='h-8 w-8 rounded-full border-2 block mx-auto border-dotted border-blue-600 animate-spin' />
		</div>
	)
}

export default VideoLoading
