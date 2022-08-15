import React, { Component } from 'react'
import '../../Style/teacher.css'
import { BsFillPlusCircleFill } from "react-icons/bs";

export class Child extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='teacher'>
                <p  >  اسم طفل: {this.props.child.name}</p>
                <p> رقم الهوية   : {this.props.child.idNum}</p>
                <p>  اسم الاب : {this.props.child.Fname}</p>
                <p> اسم الام : {this.props.child.Mname}</p>
                <p>رقم هاتف الاب  : {this.props.child.Fphone}</p>
                <p>رقم هاتف الام  : {this.props.child.Mphone}</p>
                <p>تاريخ الميلاد  : {this.props.child.BD}</p>
               
                <BsFillPlusCircleFill />
            </div>
        )
    }
}

export default Child