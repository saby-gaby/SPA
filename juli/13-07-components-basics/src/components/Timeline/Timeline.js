import './Timeline.scss';
import gezwitscher from '../../gezwitscher.js'
import Post from './Post/Post'

function Timeline() {

    const posts = gezwitscher.map((post, i) => {
        return (
            <Post key={i} post={post} />
      )
    });

    return (
        <>
            <h2>Posts</h2>
            <div className='posts'>{posts}</div>
        </>
    )
}

export default Timeline;