import { useState } from "react";
import EyeImage from "../Eyedata"

function About(){

    let printImage = EyeImage.slice(0,6);
    let [images , setImages] = useState(printImage);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Eyeglasses</h4>
                    <p>초경량 프레임과 템플로 가벼움의 차이를 경험해 보세요.</p>
                    <div style={ {display: 'flex' , flexWrap: 'wrap' , maxWidth: '100%'} }>
                        {
                            images.map((item) => {
                                return(
                                    <div>
                                    <img src={require(`../img/${item.image}`)} style={ { padding : '15px', width: '350px', height: '400px' } }></img>
                                    <p style={ { fontWeight: 'bold' , fontSize: '15px' , marginLeft: '15px' , cursor: 'pointer'} }>{item.title}</p>
                                    <p style={ { fontSize: '13px' , marginLeft: '15px' } }>{item.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={ { display: 'flex' ,  justifyContent: 'center' } }>
                    <button onClick={() => {
                    const printImage2 = EyeImage.slice(images.length,images.length + 6);
                    const copy = printImage.concat(printImage2);
                    setImages(copy);
                    }} style={ {border: 'none', background: 'white'} }>더보기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;