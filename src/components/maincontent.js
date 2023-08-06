import React from 'react'

export default function Maincontent(props) {
  return (
    <div className='card-container'>   
         {props.data && props.data.data.files.map((ele,index)=>(
            <div className="card" key={index}> 
            <li><img src={ele.thumbnail} alt='Thumbnail' className='card-img'/></li>
            <li className='content card-title'>{ele.name}</li>
            <li className='content card-info'>{ele.discription ? `discription : ${ele.discription}`: ''}</li>
        </div>
      ))}
    </div>

  )
}
