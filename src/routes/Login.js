function Login(){
    return (
        <div className="container">
            <div className="row">
                <h4>Login</h4>
                <table style={ { width: '100%' } }>
                        <thead style={ {borderBottom: '1px solid' , padding: '10px', marginLeft : '20px'} }>
                            <tr>
                                <th>아이디 : </th>
                            </tr>
                        </thead>
                        <tbody style={ {borderBottom: '1px solid' , padding: '10px'} }>
                            <tr>
                                <th>비밀번호 : </th>
                            </tr>
                        </tbody>
                    </table>
            </div>    
        </div>
    )
}

export default Login;