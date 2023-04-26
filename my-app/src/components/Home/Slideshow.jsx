import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

// const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: 'white',
// }

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
  width:'100%',
  border:'1px solid white',
}
const slideImages = [
  {url: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-mobile-home-page-banner-seeds-upto-70-off-2_800x400.jpg?v=1671778012',
  // caption: 'Denim Jackets'
},
  {url: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-banner-combo-pack-v3_1349x500.jpg?v=1636743217',
  // caption: 'Denim Jackets'
},
  {url: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-app-home-page-cactus-and-succulent-banner-v3_1_670x400.jpg?v=1637848499',
    // caption: 'Shop Now'
  },
  {url: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-app-home-page-banner-balcony-and-terrace-garden-metal-stand-v3_c1641745-019f-492b-bb98-34fc435c3f8f_670x400.jpg?v=1636743163',
    //  caption: 'New Outerwear Collection'
  },
];

export const Slideshow = () => {
    return (
      <DIV className="slide-container">
        
        <Slide>
         {slideImages.map((el, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${el.url})` }}>
                {/* <span style={{spanStyle,fontSize:"30px", color: 'white',fontWeight:'bold'}}>{el.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </DIV>
    )
}

const DIV = styled.div`
    border:1px solid white;
    width:98%;
    height:auto;
    margin-top:30px;

  @media (max-width: 710px){
     width:100%;
}
`;
