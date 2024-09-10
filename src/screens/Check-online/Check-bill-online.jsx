import { last, values } from 'lodash';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Input, InputGroup,DatePicker,SelectPicker,Button } from 'rsuite';

function CheckBillOnline() {
    const [show, setShow] = useState(false);

    const [data,setData]=useState({
        startDate:new Date(),
        endDate:new Date()
    });

const status=[{
    label:'ຄ້າງຮັບ',
    value:'1'
},
{
    label:'ກວດສອບແລ້ວ',
    value:'2'
},
{
    label:'ຢືນຢັນອອກຄຳແລ້ວ',
    value:'3'
}]

const changeReport=(name,value)=>{
    setData(value)
}
    return (
        <>
            <div id="content" class="app-content px-1">
                <div className="row mb-3">
                    <div className="col-sm-8">
                        <span className='me-3 fs-20px'>ຟອມບັນທຶກສິນຄ້າ</span>
                    </div>
                    <div className="col-sm-4">
                        <InputGroup inside size='lg'>
                            <Input size='lg' className='text-center' placeholder='|||||||||||||||||||||||||' />
                            <InputGroup.Button>
                                <i className='fas fa-search' />
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-body">
                        <div className="row fs-15px mb-2">
                            <div className="col-sm-3 col-6 mb-2">
                                <label htmlFor="" className='form-label'>ວັນທິນຳເຂົ້າ</label>
                                <DatePicker oneTap format="dd/MM/yyyy" defaultValue={data.startDate} onChange={(e) => changeReport('startDate', e)} block />
                            </div>
                            <div className="col-sm-3  col-6  mb-2">
                                <label htmlFor="" className='form-label'>ຫາວັນທິ</label>
                                <DatePicker oneTap format="dd/MM/yyyy" defaultValue={data.endDate} onChange={(e) => changeReport('endDate', e)} block />
                            </div>
                            <div className="col-sm-3  mb-2">
                                <label htmlFor="" className='form-label'>ສະຖານະຮັບ</label>
                                <SelectPicker data={status} onChange={(e) => changeReport('title_id_fk', e)} block />
                            </div>
                            
                            <div className="col-sm-3 mb-2">
                            <label htmlFor="" className='form-label'>ຄົນຂໍ້ມູນ</label>
                               <Input placeholder='ຄົ້ນຫາຊື້ລຸກຄ້າ' />
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table id='table-to-xls' className="table table-striped table-bordered align-middle w-100 text-nowrap">
                                <thead className='thead-plc'>
                                    <tr className=''>
                                        <th width="1%" className='text-center'>ລ/ດ</th>
                                        <th width="1%" className='text-center'>ກວດສອບ</th>
                                        <th width="10%" className='text-center'>ວັນທິນຳເຂົ້າ</th>
                                        <th className='text-center'>ລະຫັດ</th>
                                        <th className=''>ຊື່ສິນຄ້າ</th>
                                        <th className=''>ເບີໂທລະສັບ</th>
                                        <th className='text-center' width="15%">ລວມເງິນ</th>
                                        <th>ເອກະສານຊຳລະ</th>
                                        <th>ເລກທີໂອຍ</th>
                                        <th>ລາຍລະອຽດ</th>
                                    </tr>
                                </thead>
                               
                                {/* <tbody>
                                    {isLoading===true ?(
                                        <tr>
                                        <td colSpan={8} className='bg-white'> <Placeholder.Grid rows={5} columns={8} active /></td>
                                        </tr>
                                    ):(
                                        itemreceived.length > 0 ? (
                                            itemreceived.map((item, key) => (
                                                <React.Fragment key={key}>
                                                    <tr>
                                                        <td className='text-center'>{key + 1}  </td>
                                                        <td className='text-center'><a href="javascript:;" onClick={() => toggleVisibility(key)}> {visibleItems[key] ? (<i class="fa-solid fa-circle-minus fa-lg text-red"></i>) : (<i class="fa-solid fa-circle-plus fa-lg text-green"></i>)}</a> </td>
                                                        <td className='text-center'>{moment(item.received_date).format('DD/MM/YYYY')}</td>
                                                        <td className='text-center'>{item.code_id}</td>
                                                        <td>{item.tile_name}</td>
                                                        <td>{item.qty_baht} {item.option_name}</td>
                                                        <td className='text-center'> {item.received_qty} {item.unite_name}</td>
                                                        <td>{item.zone_name}</td>
                                                    </tr>
                                                    {visibleItems[key] && (
                                                        <tr>
                                                            <td colSpan={8}>
                                                                <table className='table table-sm'>
                                                                    <thead className='thead-plc'>
                                                                        <tr>
                                                                            <th className='text-center'>ລ/ດ</th>
                                                                            <th className='text-center'>ເວລານຳເຂົ້າ</th>
                                                                            <th className='text-center'>ຈຳນວນ</th>
                                                                            <th className='text-center'>ຍົກຍອດ</th>
                                                                            <th className='text-center'>ຈຳນວນລວມ</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.detail.map((val, index) => (
                                                                            <tr>
                                                                                <td className='text-center'>{index + 1}</td>
                                                                                <td className='text-center'>{moment(val.received_date).format('h:mm')}</td>
                                                                                <td className='text-center'>{val.received_qty + ' ' + val.unite_name}</td>
                                                                                <td className='text-center'>{val.old_quantity + ' ' + val.unite_name}</td>
                                                                                <td className='text-center'>{val.received_qty + val.old_quantity + ' ' + val.unite_name}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </React.Fragment>
                                            ))
                                        ) : (<>
                                            <tr>
                                                <td colSpan={8} className='text-center text-red'> ບໍ່ພົບຂໍ້ມູນການນຳເຂົ້າສິນຄ້າ</td>
                                            </tr>
                                        </>)
                                    
                                )}
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default CheckBillOnline