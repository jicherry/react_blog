import { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import SunImage from "../data";

// let Img = styled.div`
//     backgroundigm : ${props  => props.bg };

// `

// [ 현재 ]
// 처음 출력 대상 : 0 ~ 6까지 고정 출력
// 그 다음 더보기 버튼을 클릭했을 때 7 ~ 10까지만 추가가된다.

// [ 변경 ]
// 더보기 버튼을 눌렀을때 계속해서 새로운 아이템을 6개찍 추가
function Detail(){
    let printImage = SunImage.slice(0,6);
    let [images , setImages] = useState(printImage);
    
    console.log('rendering!!');
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Sunglasses</h4>
                    <p>송강과 함께한 WONDEREGO의 새로운 크리스틴 시리즈를 만나보세요.</p>
                    <div style={ { display : 'flex', flexWrap: 'wrap', maxWidth: '100%'} }>
                    {
                        images.map((item) => {
                            return(
                                <div>
                                    <img src={require(`../img/${item.image}`)} style={ { padding : '15px', width: '350px', height: '400px' } } ></img>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    <button onClick={() => {
                        // printImage에 출력할 배열을 가져온다.(=뒤에 추가할 애들을 가져온다.)
                        // 추가할 배열과 printImage를 이어붙인다.
                        const printImage2 = SunImage.slice(images.length,images.length + 6);
                        const copy = printImage.concat(printImage2);
                        setImages(copy);
                    }}>더보기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;