import React, { Component } from 'react'
import { connect } from 'react-redux'

class Info extends Component {
  render() {
    console.log('this.props', this.props.sinhVienReducer)
    let { sinhVienReducer } = this.props;
    return (
        <table className=' mt-4 container'>
          <thead >
            <tr className='text-white bg-dark ' style={{ height: '50px', textAlign: 'center' }}>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td> {sinhVienReducer.maSV}</td>
              <td> {sinhVienReducer.hoTen}</td>
              <td> {sinhVienReducer.email}</td>
              <td> {sinhVienReducer.sdt}</td>

              <td> {sinhVienReducer.email}</td>

            </tr>
          </tbody>

</table>
    )
  }
}

const mapStateToProps = (state) => state;



export default connect(mapStateToProps)(Info)