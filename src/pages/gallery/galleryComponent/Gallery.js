import React from "react";
import "./Gallery.css"
export default function Gallery() {
    const enlarge = (i) =>{
       
    }
  const photos = [
    {
      title: 1,
      link: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    },
    {
      title: "2",
      link: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      title: 3,
      link: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
    },
    { title: "4", link: "https://1x.com/assets/img/pro08.jpg" },
    {
        title: 1,
        link: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      },
      {
        title: "2",
        link: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      },
      {
        title: 1,
        link: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      },
      {
        title: "2",
        link: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      },
      {
        title: 3,
        link: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      },
      { title: "4", link: "https://1x.com/assets/img/pro08.jpg" },
      {
          title: 1,
          link: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        },
        {
          title: "2",
          link: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        },
  ];
  return (
  <div className="flex justify-center items-center h-screen flex-col">
  <div  className="grid grid-cols-3 gap-3">{photos.map((photo, i) => (
    <div className="enlarge" key={i}  onMouseOver={()=>enlarge(i)}>
        <img src={photo.link} className="imageGallery resize" alt=""/>
    </div>
  ))}</div>;
  </div>
)}
