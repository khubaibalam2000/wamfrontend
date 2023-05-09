import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Axios from "axios";
import fileDownload from 'js-file-download';
import * as Components from './Components';
import Header from "./Header";
import Profile from './Modal';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;



function Image(props) {

    const geturl ="https://nodetry.azurewebsites.net/getasset"
    
    // const [asset,setAssets] = useState(null);

    const [column, setColumn] = useState([]);
    const [records, setRecords] = useState([]);
    
    useEffect(() => {
        fetch(geturl)
        .then(res => res.json())
        .then(data => {
            // console.log(column, records, data);
            setColumn(Object.keys(data));
            setRecords(data);
        })
    })

    return (
        <div>
            <Header />
            <Profile />
            <table className="table">
                <thead>
                    <tr>
                        {/* {column.map((c, i) => (
                            <th key={i}>{c}</th>
                        ))} */}
                        <td><b>{"ID"}</b></td>
                        <td><b>{"Type"}</b></td>
                        <td><b>{"Location"}</b></td>
                        <td><b>{"Threat"}</b></td>
                        <td><b>{"Level"}</b></td>
                        <td><b>{"Current Defense"}</b></td>
                        <td><b>{"Proposed Defense"}</b></td>
                        <td><b>{"Created at"}</b></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((record, i) => (
                            <tr key={i}>
                                <td>{record._id}</td>
                                <td>{record.type}</td>
                                <td>{record.location}</td>
                                <td>{record.threat}</td>
                                <td>{record.level}</td>
                                <td>{record.currentdefense}</td>
                                <td>{record.proposeddefense}</td>
                                <td>{record.createdat}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Image;