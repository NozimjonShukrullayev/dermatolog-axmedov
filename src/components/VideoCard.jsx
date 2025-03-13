import ReactPlayer from 'react-player'

function VideoCard({ videoId }) {
	return (
		<div className='max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 aspect-video'>
			{/* YouTube Video */}
			<ReactPlayer
				width={'100%'}
				style={{ aspectRatio: 16 / 9 }}
				height={'100%'}
				controls
				url={`https://www.youtube.com/watch?v=${videoId}`}
			/>
			<div className='invisible'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint,
				consequuntur accusantium cupiditate libero officia. consequuntur
				accusantium cupiditate libero officia.
			</div>
		</div>
	)
}

export default VideoCard
