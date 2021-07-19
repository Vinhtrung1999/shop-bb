import React , { Component } from 'react'
class Rank extends Component{
    render(){
        return(
            <div style={{marginTop:'20px'}}>
                <h6>NÂNG HẠNG MEMBER VÀ VIP</h6>
                <div>CHÚNG TÔI SẼ GỒM CÓ 4 ĐỐI TƯỢNG THÀNH VIÊN | MEMBER | MEMBER 1 | VIP | V.VIP</div>
                <table className="tb-member">
                    <thead>
                        <tr className="tb-header">
                            <th style={{width:"5%"}}>STT</th>
                            <th style={{width:"10%"}}>ĐỐI TƯỢNG THÀNH VIÊN</th>
                            <th>ĐIỀU KIỆN</th>
                            <th style={{width:"30%"}}>YÊU CẦU BẮT BUỘC</th>
                            <th style={{width:"30%"}}>ƯU ĐÃI</th>
                            <th style={{width:"10%"}}>THỜI HẠN CỦA THẺ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>MEMBER</td>
                            <td>ĐIỀU KIỆN</td>
                            <td>KHI KHÁCH HÀNG ĐĂNG KÝ SẼ TRỞ THÀNH THÀNH VIÊN CỦA BOBUI.</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MEMBER 1</td>
                            <td>CÓ TỔNG CHI TIÊU TỪ 10 TRIỆU ĐẾN 50 TRIỆU ĐỒNG</td>
                            <td></td>
                            <td>
                                <ul>
                                    <li>CHIẾT KHẤU 5%</li>
                                </ul>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>VIP</td>
                            <td>CÓ TỔNG CHI TIÊU TỪ 50 TRIỆU ĐỒNG</td>
                            <td>PHẢI ĐẠT TỐI THIỂU 25 TRIỆU ĐỒNG (TRONG THỜI HẠN 18 THÁNG), ĐỂ DUY TRÌ THẺ VIP</td>
                            <td>
                                <ul>
                                    <li>CHIẾT KHẤU 8%</li>
                                    <li>CÓ PRIVATE SALE VÀ LINE- UP MUA HÀNG RIÊNG.</li>
                                </ul>
                            </td>
                            <td>18 THÁNG</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>V.VIP</td>
                            <td>CÓ TỔNG CHI TIÊU TỪ 250 TRIỆU ĐỒNG</td>
                            <td>PHẢI ĐẠT TỐI THIỂU 150 TRIỆU ĐỒNG (TRONG THỜI HẠN 18 THÁNG), ĐỂ DUY TRÌ THẺ V.VIP.</td>
                            <td>
                                <ul>
                                    <li>CHIẾT KHẤU 12%</li>
                                    <li>ĐƯỢC MỜI ĐẾN THAM DỰ CÁC SỰ KIỆN, PRIVATE SALE VÀ LINE – UP MUA HÀNG RIÊNG.</li>
                                    <li>BIẾT TRƯỚC COLLECTION – SẢN PHẨM MỚI VÀ PRE – ORDER</li>
                                </ul>
                            </td>
                            <td>18 THÁNG</td>
                        </tr>
                    </tbody>
                    
                </table>

                <div className="small-rank">
                    <div className="small-rank-tittle">MEMBER</div>
                    <div className="small-rank-content">
                        <div><b>ĐIỀU KIỆN: </b>CÓ TỔNG CHI TIÊU TỪ 10 TRIỆU ĐẾN 50 TRIỆU ĐỒNG</div>
                    </div>
                    <div className="small-rank-tittle">MEMBER 1</div>
                    <div className="small-rank-content">
                        <div><b>ĐIỀU KIỆN: </b>CÓ TỔNG CHI TIÊU TỪ 10 TRIỆU ĐẾN 50 TRIỆU ĐỒNG</div>
                        <div><b>ƯU ĐÃI: </b>CHIẾT KHẤU 5%</div>
                    </div>
                    <div className="small-rank-tittle">VIP</div>
                    <div className="small-rank-content">
                        <div><b>ĐIỀU KIỆN: </b>PHẢI ĐẠT TỐI THIỂU 25 TRIỆU ĐỒNG (TRONG THỜI HẠN 18 THÁNG), ĐỂ DUY TRÌ THẺ VIP</div>
                        <div><b>YÊU CẦU BẮT BUỘC: </b>PHẢI ĐẠT TỐI THIỂU 25 TRIỆU ĐỒNG (TRONG THỜI HẠN 18 THÁNG), ĐỂ DUY TRÌ THẺ VIP</div>
                        <div><b>ƯU ĐÃI: </b>
                            <ul>
                                <li>CHIẾT KHẤU 8%.</li>
                                <li>CÓ PRIVATE SALE VÀ LINE- UP MUA HÀNG RIÊNG.</li>
                            </ul>
                        </div>
                        <div><b>THỜI HẠN CỦA THẺ: </b>18 THÁNG</div>
                    </div>
                    <div className="small-rank-tittle">V.VIP</div>
                    <div className="small-rank-content">
                        <div><b>ĐIỀU KIỆN: </b>PHẢI ĐẠT TỐI THIỂU 250 TRIỆU ĐỒNG (TRONG THỜI HẠN 18 THÁNG), ĐỂ DUY TRÌ THẺ VIP</div>
                        <div><b>YÊU CẦU BẮT BUỘC: </b>PHẢI ĐẠT TỐI THIỂU 150 TRIỆU ĐỒNG (TRONG THỜI HẠN 18 THÁNG), ĐỂ DUY TRÌ THẺ V.VIP.</div>
                        <div><b>ƯU ĐÃI: </b>
                            <ul>
                                <li>CHIẾT KHẤU 12%.</li>
                                <li>ĐƯỢC MỜI ĐẾN THAM DỰ CÁC SỰ KIỆN, PRIVATE SALE VÀ LINE – UP MUA HÀNG RIÊNG.</li>
                                <li>BIẾT TRƯỚC COLLECTION – SẢN PHẨM MỚI VÀ PRE – ORDER</li>
                            </ul>
                        </div>
                        <div><b>THỜI HẠN CỦA THẺ: </b>18 THÁNG</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Rank