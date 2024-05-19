function Etc(){
    const AccImage = ['acc.PNG', 'acc2.PNG', 'acc3.PNG'];
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6 mt-4" style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Acc</h4>
                    <p>WONDEREGO 만의 감성이 담긴 아이웨어 액세서리를 만나보세요.</p>
                    <div style={ { display : 'flex' } }>
                        {
                            AccImage.map((props) => {
                                return(
                                    <img src={require(`../img/${props}`)} style={ { padding : '15px' } } ></img>
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