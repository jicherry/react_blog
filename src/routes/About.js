function About(){

    const EyeImage = ['안경.PNG' , '안경2.PNG' , '안경3.PNG' , '안경4.PNG' , '안경5.PNG' , 
    '안경6.PNG' , '안경7.PNG' , '안경8.PNG' , '안경9.PNG' , '안경10.PNG']
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6 mt-4" style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Eyeglasses</h4>
                    <p>초경량 프레임과 템플로 가벼움의 차이를 경험해 보세요.</p>
                    <div style={ {display : 'flex'} }>
                        {
                            EyeImage.map((props) => {
                                return(
                                    <img src={require(`../img/${props}`)} style={ { padding : '20px' } } ></img>
                                )
                            })
                        }
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default About;