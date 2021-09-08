import React from 'react'

const Video = () => {
    return (
        <div className="video" >
            <video autoPlay muted loop id="myVideo">
  <source src="/sony.mp4" type="video/mp4" />
</video>
<div class="content">
  <h1>Heading</h1>
  <p>Lorem ipsum...</p>
</div>
        </div>
    )
}

export default Video
