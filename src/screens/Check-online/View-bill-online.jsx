import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'rsuite';

import '../../style.invoice.css';
const ViewBillOnline = ({ show, data, handleClose }) => {
    return (
        <Modal show={show} style={'lg'} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id="invoiceholder">
                    <div id="invoice" class="effect2 mb-3">
                        <div id="invoice-top">
                            <div class="logo"><img src="./assets/img/logo/logo.png" alt="Logo" /></div>
                            <div class="title">
                                <h1 className='h1'>ເລກທີບິນ : <span class="invoiceVal invoice_num">VK-2024-000001</span></h1>
                                <p className='fs-15px p'>ວັນທີໃບບິນ: <span id="invoice_date">01 Feb 2018</span><br />
                                    GL Date: <span id="gl_date">23 Feb 2018</span>
                                </p>
                            </div>
                        </div>

                        <div id="invoice-mid">
                            <div id="message">
                                <h2 className='h1'>Hello Andrea De Asmundis,</h2>
                                <p className='0'>An invoice with invoice number #<span id="invoice_num">tst-inv-23</span> is created for <span id="supplier_name">TESI S.P.A.</span> which is 100% matched with PO and is waiting for your approval. <a href="javascript:void(0);">Click here</a> to login to view the invoice.</p>
                            </div>
                            <div class="cta-group mobile-btn-group">
                                <a href="javascript:void(0);" class="btn-primary">Approve</a>
                                <a href="javascript:void(0);" class="btn-default">Reject</a>
                            </div>
                            <div class="clearfix">
                                <div class="col-left">
                                    <div class="clientlogo"><img src="https://cdn3.iconfinder.com/data/icons/daily-sales/512/Sale-card-address-512.png" alt="Sup" /></div>
                                    <div class="clientinfo">
                                        <h2 id="supplier h2 fs-18px">ຂໍ້ມູນການຊຳລະ</h2>
                                        <p className='p'><span id="address">VIA SAVIGLIANO, 48</span><br /><span id="city">RORETO DI CHERASCO</span><br /><span id="country">IT</span> - <span id="zip">12062</span><br /><span id="tax_num">555-555-5555</span><br /></p>
                                    </div>
                                </div>
                                <div class="col-right">
                                    <table class="v-table">
                                        <tbody>
                                            <tr>
                                                <td><span>ຊື່ລູກຄ້າ:</span><label id="invoice_total">61.2</label></td>
                                                <td><span>Currency</span><label id="currency">EUR</label></td>
                                            </tr>
                                            <tr>
                                                <td><span>ເບີໂທລະສັບ:</span><label id="payment_term">60 gg DFFM</label></td>
                                                <td><span>Invoice Type</span><label id="invoice_type">EXP REP INV</label></td>
                                            </tr>
                                            <tr><td colspan="2"><span>ເລກບັດປະຈຳຕົວ: </span><label id="note">None</label></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div id="invoice-bot">
                            <div id="table">
                                <table class="table-main v-table">
                                    <thead>
                                        <tr class="tabletitle">
                                            <th className='th'>ລ/ດ</th>
                                            <th className='th'>ລາຍການສິນຄ້າ</th>
                                            <th className='th'>ລາຄາ</th>
                                            <th className='th'>ຈຳນວນ</th>
                                            <th className='th'>ບັນຈຸ</th>
                                            <th className='th'>ລວມເງິນ</th>
                                        </tr>
                                    </thead>
                                    <tr class="list-item">
                                        <td data-label="Type" class="td">1</td>
                                        <td data-label="Description" class="td">Servizio EDI + Traffico mese di novembre 2017</td>
                                        <td data-label="Quantity" class="td">46.6</td>
                                        <td data-label="Unit Price" class="td">1</td>
                                        <td data-label="Taxable Amount" class="td">46.6</td>
                                        <td data-label="Total" class="td">55.92</td>
                                    </tr>
                                    <tr class="list-item">
                                        <td data-label="Type" class="td">2</td>
                                        <td data-label="Description" class="td">Traffico mese di novembre 2017 FRESSNAPF TIERNAHRUNGS GMBH riadd. Almo DE</td>
                                        <td data-label="Quantity" class="td">4.4</td>
                                        <td data-label="Unit Price" class="td">1</td>
                                        <td data-label="Taxable Amount" class="td">46.6</td>
                                        <td data-label="Total" class="text-end">55.92</td>
                                    </tr>
                                    <tr class="list-item total-row">
                                        <th colspan="5" class="td">Grand Total</th>
                                        <td class="text-end td">111.84</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <footer>
                            <div id="legalcopy" class="clearfix">
                                <p class="col-right p">Our mailing address is:
                                    <span class="email"><a href="mailto:supplier.portal@almonature.com">supplier.portal@almonature.com</a></span>
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ViewBillOnline