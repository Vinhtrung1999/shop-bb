import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class Footer extends Component{
    render(){
        return(
            <footer>
                <div className='row g-0'>
                    <div className="col-lg-3 col-sm-12 p-3">
                        <div className="text-lg-start text-center">
                            <img src="https://bobui.vn/assets/img/logo/logo-white.svg" alt="logo" width="200px"></img>
                        </div>
                        <div className="container-icon text-lg-start text-center">
                            <div><a target="_blank" className="facebook" href="/"><i className="fa fa-facebook-square"></i></a></div>
                            <div><a target="_blank" className="instagram" href='/'><i className="fa fa-instagram"></i></a></div>
                            <div><a target="_blank" className="instagram" href="/"><i className="fa fa-envelope"></i></a></div>
                            <div><a target="_blank" className="instagram" href="/"><i className="fa fa-phone-square"></i></a></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 p-3 line-height">
                        <h6 className='footer-tittle'>HỖ TRỢ KHÁCH HÀNG</h6>
			    		<div><Link to="">Chính sách thanh toán</Link></div>
			    		<div><Link to="">Chính sách đổi trả</Link></div>
			    		<div><Link to="">Chính sách vận chuyển</Link></div>
			    		<div><Link to="">Hướng dẫn mua hàng</Link></div>
			    		<div><Link to="">Chính sách bảo mật</Link></div>
                    </div>
                    <div className="col-lg-2 col-sm-12 p-3 line-height">
                        <h6 className='footer-tittle'>LIÊN KẾT</h6>
			            <div><Link to="">Về BO BỤI</Link></div>
			            <div><Link to="">NEWS - EVENTS</Link></div>
			            <div><Link to="">Hỗ trợ kỹ thuật</Link></div>
			            <div><Link to="">Điều khoản sử dụng</Link></div>
			            <div><Link to="">Liên hệ</Link></div>
                    </div>
                    <div className="col-lg-3 col-sm-12 p-3 line-height">
                        <h6 className='footer-tittle'>CÔNG TY TNHH THỜI TRANG BO BỤI</h6>
			    		<div>Địa chỉ: <span>91 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh</span></div>
			    		<div>GPĐK Kinh doanh số 0316044564, cấp ngày 29/11/2019 bởi Sở KH&ĐT TPHCM</div>
			    		<div>Người đại diện: <span>Anh</span> Nguyễn Thanh Dũng</div>
                    </div>
                    <div className="col-lg-2 col-sm-12 p-3">
                        <div><Link to=""><img src="https://bobui.vn/assets/img/logoSaleNoti.png" alt="logo" width="80%"></img></Link></div>
						<div>Copyright © 2021 <Link to="">BOBUI <sup>&reg;</sup></Link><br/>All Right Reserved.</div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer