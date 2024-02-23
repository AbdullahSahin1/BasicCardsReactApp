import React from 'react'

function Course({image,title,description}) {
    return (

        <div class="card">
  <div class="card-image">
  <img src={image} alt="Kurslarım" />
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{title}</p>
      </div>
    </div>

    <div class="content">
        {description}
    </div>
  </div>
</div>

        // <div>
        // <img src={image} alt="" />
        // <div>{title}</div>
        // <div>{description}</div>
        
        // </div>
    )
}

export default Course;
