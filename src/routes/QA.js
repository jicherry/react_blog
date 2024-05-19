function QA(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6 mt-4" style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Q&A</h4>
                    <table style={ { width: '100%' ,borderTop: '1px solid' , borderCollapse: 'collapse' } }>
                        <thead style={ {borderBottom: '1px solid' , padding: '10px'} }>
                            <tr>
                                <th>번호</th>
                                <th>상품정보</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody style={ {borderBottom: '1px solid' , padding: '10px'} }>
                            <tr>
                                <td>1</td>
                                <td>WONDEREGO</td>
                                <td>상품문의</td>
                                <td>지채빈</td>
                                <td>24-01-25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default QA;