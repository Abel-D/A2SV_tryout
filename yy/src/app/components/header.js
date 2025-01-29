import '../styles/header.css';
import React,{useState} from "react";
import { Button } from 'antd';
import {Modal} from 'antd';

export default function Header() {

    const [openModal, setOpenModal]=useState(false);

    return(
    <nav>
        <Modal 

        <ul className='nav flex flex-column justify-content-between'>
            <div>
                <img src="" alt="logo"/>
            </div>
            <div>
                <Button label="Add food" onClick={()=> setOpenModal(true)} />
            </div>
        </ul>
    </nav>
    )
}