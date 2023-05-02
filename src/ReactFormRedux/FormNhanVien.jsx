import React, { Component } from 'react'
import { connect } from 'react-redux'
import Info from './Info';

class FormNhanVien extends Component {
    handleChangeInput = (e) => {

        let { id, value } = e.target;
        const action = {
            type: 'CHANGE_INFO',
            payload: {
                id,
                value
            }
        }
        // const action = {id,value}
        //Đưa object {id,value} lên redux 
        this.props.dispatch(action);//

    }

    render() {
        return (
            <div className='container'>
                <form >
                    <h2 className='text-white bg-dark p-3 mt-3'>Thông tin sinh viên</h2>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Mã SV</p>
                                <input className='form-control' id='maSV' onInput={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input className='form-control' id='sdt' onInput={this.handleChangeInput} />
                            </div>
                            <div>
                                <button className='btn btn-success mt-3' >Thêm sinh viên</button>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <p>Họ tên</p>
                                <input className='form-control' id='hoTen' onInput={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <p>Email</p>
                                <input className='form-control' id='email' onInput={this.handleChangeInput} />
                            </div>
                        </div>
                    </div>
                </form>
                <Info/>

            </div>

        )
    }
}

const mapStateToProps = (state) => state


export default connect(mapStateToProps)(FormNhanVien)