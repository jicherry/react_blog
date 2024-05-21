import Etcdata from '../Etcdata';

function Etc(){

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6 mt-4" style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Acc</h4>
                    <p>WONDEREGO 만의 감성이 담긴 아이웨어 액세서리를 만나보세요.</p>
                    <div style={ { display: 'flex' } }>
                        {
                            Etcdata.map((item) => {
                                return(
                                    <div>
                                    <img src={require(`../img/${item.image}`)} style={ { padding : '25px' , width: '380px'} } ></img>
                                    <p style={ { fontWeight: 'bold' , fontSize: '15px' , marginLeft: '28px' , cursor: 'pointer' } }>{item.title}</p>
                                    <p style={ { fontSize: '13px' , marginLeft: '28px' , cursor: 'pointer' } }>{item.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Etc;