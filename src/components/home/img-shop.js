import React , { Component } from 'react'
import ImgFullLine from './img_fullLine'
import ImgTeamBobui from './img_teamBobui'

class ImgShop extends Component{
    render(){
        return(
            <div className="row g-0 bg-white">
                <ImgFullLine linkSrc= {'/images/bobui_spring_summer_v2_2021.jpg'}></ImgFullLine>
                <ImgFullLine linkSrc= {'/images/bobui-sl1.jpg'}></ImgFullLine>
                
                <ImgTeamBobui
                    linkSrc={'/images/7.jpg'}
                    messh6={'CỘNG ĐỒNG'}
                    messh5={'BOBUI SQUAD'}
                    messp={'(22,6k THÀNH VIÊN)'}
                ></ImgTeamBobui>

                <ImgTeamBobui
                    linkSrc={'/images/11.jpg'}
                    messh6={'HÌNH ẢNH'}
                    messh5={'CỬA HÀNG &'}
                    messp={'NHÂN VIÊN'}
                ></ImgTeamBobui>
            </div>
        )
    }
}
export default ImgShop