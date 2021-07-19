import React , { Component } from 'react'
class Point extends Component{
    render(){
        return(
            <div style={{marginTop:'20px'}}>
                <h6>CHƯƠNG TRÌNH ĐIỂM THƯỞNG:</h6>
                <p>VỚI NHỮNG QUYỀN LỢI VÀ MỨC ƯU ĐÃI KHÁC NHAU. MỖI KHI THỰC HIỆN GIAO DỊCH TẠI BOBUI STORE, BẠN SẼ NHẬN NGAY MỘT SỐ ĐIỂM TÍCH LŨY NHẤT ĐỊNH. MỨC TÍCH LŨY ĐIỂM CHO CÁC THÀNH VIÊN NHƯ SAU:</p>
                <p>TỶ LỆ QUY ĐỔI ĐIỂM <strong>100.000 VND → 1.000 VND</strong></p>
                <div >
                    <ul>
                        <li>VỚI MỖI 100.000 VND KHI MUA HÀNG, KHÁCH HÀNG SẼ ĐƯỢC TÍCH ĐIỂM TƯƠNG ĐƯƠNG 1.000 VND.</li>
                        <li>SỐ TIỀN 1.000 VND SẼ ĐƯỢC CỘNG DỒN QUA CÁC LẦN MUA VÀ CÓ THỂ DÙNG ĐỂ THANH TOÁN CHO CÁC HÓA ĐƠN MUA HÀNG LẦN SAU.</li>
                    </ul>
                </div>
                <p>KHI THANH TOÁN GIAO DỊCH BẰNG ĐIỂM TÍCH KHÁCH HÀNG SẼ KHÔNG ĐƯỢC TÍCH LŨY VÀO TỔNG CHI TIÊU. VÍ DỤ: VỚI GIAO DỊCH MUA HÀNG GIÁ 100.000 VND BẠN CÓ THỂ: </p>
                <div >
                    <ul>
                        <li>THANH TOÁN 80.000 VND + 20 ĐIỂM TÍCH</li>
                        <li>HOẶC THANH TOÁN VỚI 0 VND + 100 ĐIỂM TÍCH</li>
                        <li>KHÁCH HÀNG MUA HÀNG SALE SẼ KHÔNG ĐƯỢC TÍCH DỒN CHIẾT KHẤU, NHƯNG VẪN ĐƯỢC TÍCH ĐIỂM</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Point