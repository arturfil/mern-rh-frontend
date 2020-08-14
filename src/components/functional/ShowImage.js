import React from 'react';
import {API} from '../../config';

const ShowImage = ({item, url}) => {


  return (
    <img
      src={`${API}/${url}/image/${item._id}`}
      alt={item.name}
      className="mb-3 img-container"
      style={{maxHeight: "600px", maxWidth: "300px", height: "120px", width: "200px"}}
    />
  )
}

export default ShowImage;