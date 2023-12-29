import "./DeviceList.scss";
import AppBar from "../AppBar/AppBar";
import ButtonAdd from "../ui/ButtonAdd";
import { useEffect, useState } from "react";
import TableRows from "./TableRows";
import SearchBar from "../ui/SearchBar";
import { loadDevices, removeDevice , addDevice }  from "../../api/loadDevices";
import ErrorMessage from "./ErrorMessage";

const DeviceList = () => {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [value, setValue] = useState('');
    const bodyTest = {
        id: 1,
        name: 'Name',
        uniqueId: '345678',
        status: 'offline',
        disabled: false,
        lastUpdate: '1963-11-22T18:30:00Z',
        positionId: 45,
        groupId: 2,
        phone: '666',
        model: 'autoVaz',
        contact: 'ok',
        category: 'truck',
        attributes: {
            details: 33
        }
    };
    const titles = ['ID', 'Unique ID', 'Name', 'Status', 'LastUpDate'];

    useEffect(() => {
        loadDevices().then((data) => setData(data));
    }, []);

    const handleRemove = (id) => {
        removeDevice(id).then(
            () => {
                setData(arr => arr.filter(device => device.uniqueId !== id));
            },
            (error) => {
                setErrorMessage(error.message);
            },
        )
    }

    const handleAdd = () =>  {
        addDevice(bodyTest).then(
            (arr) => {
                setData([...data, arr])
            },
            (error) => {
                setErrorMessage(error.message);
            },
        )
    }

    return (
        <div>
            <AppBar />
            <div className="wrapper">
                <SearchBar 
                    value={value} 
                    setValue={setValue}
                />
                <ButtonAdd onAdd={handleAdd}/>
            </div>
            <div className="wrapper__table">
                <table className="table__deviceList">
                    <thead>
                        <tr>
                            {titles.map((title, i) => 
                            <th 
                                style={{
                                padding: '10px', 
                                textAlign: 'center', 
                                backgroundColor: '#97acbf'
                                }} key={i}>
                                {title}
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data && 
                        <TableRows
                            data={data} 
                            onRemove={handleRemove}
                            value={value}
                        />}
                    </tbody>
                </table>
            </div>
            <ErrorMessage 
                message={errorMessage} 
                open={errorMessage !== null} 
                onClose={() => setErrorMessage(null)}
            />
        </div>
    );
};

export default DeviceList;
