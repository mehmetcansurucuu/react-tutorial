import React from 'react';
import { Carousel } from 'antd';


function Slider() {
    const contentStyle: React.CSSProperties = {
        height: '100vh',
        color: '#fff',
        lineHeight: '100vh',
        textAlign: 'center',
        background: '#bbb',
    };
    return (
    <Carousel
    autoplay
    autoplaySpeed={7000}
    touchMove={true}
    slickGoTo={true}
    slickNext={true}
    slickPrev={true}>
    <div>
        <div style={contentStyle}>
            <h1>Slider 1</h1>
        </div>
    </div>

    <div>
        <div style={contentStyle}>
            <h1>Slider 2</h1>
        </div>
    </div>

</Carousel>
  )
}

export default Slider