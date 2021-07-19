import React , { Component } from 'react'
class Birday extends Component{
    render(){
        return(
            <div className="m-20">
                <h6>QUÀ TẶNG SINH NHẬT:</h6>
                <p>BẠN SẼ NHẬN ĐƯỢC ƯU ĐÃI NÀY TRONG THÁNG SINH NHẬT CỦA MÌNH (THÁNG SINH NHẬT ĐƯỢC TÍNH TỪ NGÀY SINH NHẬT ĐẾN HẾT 30 NGÀY SAU ĐÓ). VÍ DỤ: SINH NHẬT BẠN LÀ NGÀY 01/01/2000 VẬY THỜI GIAN ĐỂ BẠN NHẬN QUÀ LÀ TỪ NGÀY 01/01/2020 ĐẾN HẾT NGÀY 30/01/2020.</p>
                <div>
                    <ul>
                        <li><strong>MEMBER 1:</strong> NHẬN MỘT PHIẾU GIẢM GIÁ 10% TRỰC TIẾP TẠI CỬA HÀNG</li>
                        <li><strong>VIP:</strong> NHẬN MỘT PHIẾU GIẢM GIÁ 10% TRỰC TIẾP TẠI CỬA HÀNG, MÓN QUÀ VIP</li>
                        <li><strong>V.VIP:</strong> NHẬN MỘT PHIẾU GIẢM GIÁ 20% TRỰC TIẾP TẠI CỬA HÀNG, MÓN QUÀ V.VIP</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Birday