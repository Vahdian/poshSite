import React from "react";
import Socials from "../../../components/socialsComponent/Socials";
import "./Gallery.css"
export default function Gallery() {
    const enlarge = (i) =>{
       
    }
  const photos = [
    {
        title: "2",
        link: "https://live.staticflickr.com/65535/52659432546_0790b631cd_h.jpg",
      },   {
        title: 1,
        link: "https://live.staticflickr.com/65535/52658852217_d545f94a46_k.jpg",
      },    
       
    // {
    //     title: 1,
    //     link: "https://live.staticflickr.com/65535/52658924252_1a5e0ff64e_h.jpg",
    //   },
     
    
    { title: "4", link: "https://live.staticflickr.com/65535/52659856673_78052a91ca_k.jpg" },
    
    {
        title: 3,
        link: "https://live.staticflickr.com/65535/52659836093_7f9f7b6e1c_h.jpg",
      }, 
    {
      title: 3,
      link: "https://live.staticflickr.com/65535/52659838883_cba5b70fc7_k.jpg",
    },
    {
        title: "2",
        link: "https://live.staticflickr.com/4273/34731811761_0ac338d463_k.jpg",
      },
    //   {
    //     title: 3,
    //     link: "https://live.staticflickr.com/4283/34780728773_4e99b32502_k.jpg",
    //   },
  
    // {
    //     title: 1,
    //     link: "https://live.staticflickr.com/65535/52659796870_326131e87a_h.jpg",
    //   },
    //   {
    //     title: "2",
    //     link: "https://live.staticflickr.com/65535/52659836093_ca95274dc8_h.jpg",
    //   },
    //   {
    //     title: 1,
    //     link: "https://live.staticflickr.com/4317/35226550374_101f518b6e_h.jpg",
    //   },
     
     
      
      
    //     {
    //       title: "2",
    //       link: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    //     },
  ];
  return (
  <div className="flex justify-center items-center h-screen flex-col ">
  <div  className="grid grid-cols-3 gap-3 gallery">{photos.map((photo, i) => (
    <div className="enlarge" key={i}  onMouseOver={()=>enlarge(i)}>
        <img src={photo.link} className="imageGallery resize" alt=""/>
    </div>
  ))}</div>;
  <Socials></Socials>
  </div>
)}
