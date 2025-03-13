import React, { Suspense } from 'react'
import { youtubeVideos } from '../constants'
import VideoCard from './VideoCard'
import VideoLoading from './VideoLoading'

function YoutubeVideos() {
	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto px-6'>
				<h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
					Foydali videolar
				</h2>
				<div className='youtube-grid'>
					{/* Replace these with actual Instagram video embeds */}
					{youtubeVideos.map(video => (
						<Suspense key={video?.videoId} fallback={<VideoLoading />}>
							<VideoCard videoId={video?.videoId} />
						</Suspense>
					))}
				</div>
			</div>
		</section>
	)
}

export default YoutubeVideos
