import React from 'react'

const NewsItem = (props)=>{

  
      let {title, description, imageUrl, newsUrl, author,date, source} = props;
    return (
        <div className="card" >
        <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          position:'absolute',
          right: '0'
        }}>
        <span className="badge rounded-pill bg-danger" > {source}</span>
        </div>
        <img src={!imageUrl?"https://images.indianexpress.com/2022/09/Uranus-neptune-ice-giant-diamond-rain-20220905.jpg":imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">{!author ? "Unknown" :author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target= "_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
}

export default NewsItem