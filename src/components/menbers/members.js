import React , { Component } from 'react'
import MemberHeader from './menbers_header'
import Membership from './membership'
import Rank from './rank'
import Point from './point'
import Birday from './birday'
import Note from './note'
class Members extends Component{
    render(){
        return(
            <div style={{color:"grey"}}>
                <MemberHeader></MemberHeader>
                <div className="member-content">
                    <Membership></Membership>
                    <Rank></Rank>
                    <Point></Point>
                    <Birday></Birday>
                    <Note></Note>
                </div>
                
            </div>
        )
    }
}
export default Members