import React, { useState } from 'react';
import { Dropdown, Form, Tab, Tabs } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';
import { Trans, useTranslation } from 'react-i18next';

export default function Orders() {

    const { t } = useTranslation();

    const [orderType, setOrderType] = useState('buy');
    const [productType, setProductType] = useState(null);

    const changeProductType = type => {
      setProductType(type);
    };
    

    const getDropDownText = () => {

      const dropDownMap = {
        'stock': 'Stocks',
        'funds': 'Investiment Funds',
        'reit': 'REITs',
        'treasure': 'Direct Treasure',
        'fix': 'CDB, LCA, LCI, CRI, CRA'
      }

      if (productType !== null) return dropDownMap[productType];

      return `What product did you ${orderType}?`
    }

    const getTickerLabel = () => {
      const tickerLabelMap = {
        'stock': t('Stock Ticker'),
        'funds': t('Fund Ticker'),
        'reit': t('REIT Ticker'),
        'treasure': t('Direct Treasure Ticker'),
        'fix': t('CDB, LCA, LCI, CRI, CRA Ticker'),
      }
      return tickerLabelMap[productType];
    }

    const getPriceLabel = () => {
      return t(`${orderType[0].toUpperCase()}${orderType.slice(1)} Price (${productType === 'funds' ? 'account' : 'unit'})`);
    }

    const getAmountLabel = () => {
      return t(`Amounts of ${productType === 'funds' ? 'account' : 'stocks'}`);

    }

    return (
        <div>
          <div className="page-header">
            <h3 className="page-title">
              <Trans>Orders</Trans>
            </h3>
          </div>
          <div className="row">
           
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title"><Trans>New Order</Trans></h4>
                  <p className="card-description"> <Trans>Which operation did you do ?</Trans> </p>
                  <div className="template-demo">
                    <Form.Group className="row ">
                      <div className="col-sm-6">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input onClick={() => setOrderType('buy')} type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> <Trans>Buy</Trans> 
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      </div>
                      <div className="col-sm-6">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input onClick={() => setOrderType('sell')} type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> <Trans>Sell</Trans> 
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      </div>
                    </Form.Group>
                    <Form.Group className="row">
                      <div className="col-sm-12">
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-outline-secondary d-flex" className={"order-dropdown"} id="dropdownMenuButton1"><Trans>{getDropDownText()}</Trans>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => changeProductType('stock')}><Trans>Stocks</Trans></Dropdown.Item>
                          <Dropdown.Item onClick={() => changeProductType('funds')}><Trans>Investiment Funds</Trans></Dropdown.Item>
                          <Dropdown.Item onClick={() => changeProductType('reit')}><Trans>REITs</Trans></Dropdown.Item>
                          <Dropdown.Item onClick={() => changeProductType('treasure')}><Trans>Direct Treasure</Trans></Dropdown.Item>
                          <Dropdown.Item onClick={() => changeProductType('fix')}><Trans>CDB, LCA, LCI, CRI, CRA</Trans></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      </div>
                    </Form.Group>

                    {productType && 
                    <div>
                    <Form.Group className="row">
                      <div className="col-sm-12">
                        <FloatingLabel label={getTickerLabel()+'*'} inputClassName='remove-shadow' className='order-drop-down' labelStyle={{fontSize: 14}} labelClassName='float-label-custom'/>
                      </div>
                    </Form.Group>
                    <Form.Group  className="row">
                      <div className="col-sm-12">
                        <FloatingLabel type="number" label={getPriceLabel()+'*'} inputClassName='remove-shadow' className='order-drop-down' labelStyle={{fontSize: 14}} labelClassName='float-label-custom'/>
                      </div>
                    </Form.Group>
                    <Form.Group  className="row">
                      <div className="col-sm-12">
                        <FloatingLabel type="number" label={getAmountLabel()+'*'} inputClassName='remove-shadow' className='order-drop-down' labelStyle={{fontSize: 14}} labelClassName='float-label-custom'/>
                      </div>
                    </Form.Group>

                    <Form.Group  className="row">
                      <div className="col-sm-12">
                        <FloatingLabel type="date" label={t('When did you buy it?')} initialValue={true} inputClassName='remove-shadow' className='order-drop-down' labelStyle={{fontSize: 14}} labelClassName="float-label-custom" />
                      </div>
                    </Form.Group>

                    <Form.Group  className="row">
                      <div className="col-sm-12">
                        <FloatingLabel label={t('In which broker?')} inputClassName='remove-shadow' className='order-drop-down' labelStyle={{fontSize: 14}} labelClassName='float-label-custom'/>
                      </div>
                    </Form.Group>

                    <Form.Group  className="row">
                      <div className="col-sm-12">
                        <FloatingLabel type="number" label={t('What is the operational cost?')} inputClassName='remove-shadow' className='order-drop-down' labelStyle={{fontSize: 14}} labelClassName='float-label-custom'/>
                      </div>
                    </Form.Group>

                    </div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <Tabs defaultActiveKey="buy">

                    <Tab title="Previous Buy Orders" eventKey="buy" className="col-xl-12">
                    <div className="card-body">
                    <div className="row">
                      <p className="card-description">All the buy orders you have done!</p>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th><Trans>Paper</Trans> </th>
                              <th><Trans>Date</Trans></th>
                              <th><Trans>Amount</Trans></th>
                              <th><Trans>Total Value</Trans></th>
                              <th><Trans>Current Value</Trans></th>
                              <th><Trans>Yield</Trans> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>WEGE3</td>
                              <td>12/01/2021</td>
                              <td>50</td>
                              <td>R$ 1502.7</td>
                              <td>R$ 1502.7</td>
                              <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>ITSA4</td>
                              <td>10/01/2021</td>
                              <td>200</td>
                              <td>R$ 1800.32</td>
                              <td>R$ 1800.32</td>
                              <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>PETR4</td>
                              <td>10/01/2021</td>
                              <td>10</td>
                              <td>R$ 340.10</td>
                              <td>R$ 340.10</td>
                              <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>IVVB11</td>
                              <td>05/01/2022</td>
                              <td>20</td>
                              <td>R$ 4923.27</td>
                              <td>R$ 4923.27</td>
                              <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                            <tr>
                              <td>Versa Fit</td>
                              <td>02/01/2022</td>
                              <td>5.771</td>
                              <td>R$ 6789.20</td>
                              <td>R$ 6789.20</td>
                              <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                            <tr>
                              <td>MGLU3</td>
                              <td>02/01/2022</td>
                              <td>20</td>
                              <td>R$ 123.87</td>
                              <td>R$ 123.87</td>
                              <td className="text-danger"> 68.76% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>SQIA3</td>
                              <td>26/12/2021</td>
                              <td>20</td>
                              <td>R$ 260.78</td>
                              <td>R$ 260.78</td>
                              <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>Charles River</td>
                              <td>25/12/2021</td>
                              <td>0.32812</td>
                              <td>R$ 5000</td>
                              <td>R$ 5000</td>
                              <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>BBSA3</td>
                              <td>23/12/2021</td>
                              <td>20</td>
                              <td>R$ 382.72</td>
                              <td>R$ 382.72</td>
                              <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                            <tr>
                              <td>LREN3</td>
                              <td>21/12/2021</td>
                              <td>20</td>
                              <td>R$ 121.85</td>
                              <td>R$ 121.85</td>
                              <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    </div>
                    </Tab>

                    <Tab title="Previous Sell Orders" eventKey="sell" className="col-xl-12">
                    <div className="card-body">
                    <div className="row">
                      <p className="card-description">All the sell orders you have done!</p>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th><Trans>Paper</Trans> </th>
                              <th><Trans>Date</Trans></th>
                              <th><Trans>Amount</Trans></th>
                              <th><Trans>Total Value</Trans></th>
                              <th><Trans>Current Value</Trans></th>
                              <th><Trans>Yield</Trans> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>WEGE3</td>
                              <td>12/01/2021</td>
                              <td>50</td>
                              <td>R$ 1502.7</td>
                              <td>R$ 1502.7</td>
                              <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>ITSA4</td>
                              <td>10/01/2021</td>
                              <td>200</td>
                              <td>R$ 1800.32</td>
                              <td>R$ 1800.32</td>
                              <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>PETR4</td>
                              <td>10/01/2021</td>
                              <td>10</td>
                              <td>R$ 340.10</td>
                              <td>R$ 340.10</td>
                              <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>IVVB11</td>
                              <td>05/01/2022</td>
                              <td>20</td>
                              <td>R$ 4923.27</td>
                              <td>R$ 4923.27</td>
                              <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                            <tr>
                              <td>Versa Fit</td>
                              <td>02/01/2022</td>
                              <td>5.771</td>
                              <td>R$ 6789.20</td>
                              <td>R$ 6789.20</td>
                              <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                            <tr>
                              <td>MGLU3</td>
                              <td>02/01/2022</td>
                              <td>20</td>
                              <td>R$ 123.87</td>
                              <td>R$ 123.87</td>
                              <td className="text-danger"> 68.76% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>SQIA3</td>
                              <td>26/12/2021</td>
                              <td>20</td>
                              <td>R$ 260.78</td>
                              <td>R$ 260.78</td>
                              <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>Charles River</td>
                              <td>25/12/2021</td>
                              <td>0.32812</td>
                              <td>R$ 5000</td>
                              <td>R$ 5000</td>
                              <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                            </tr>
                            <tr>
                              <td>BBSA3</td>
                              <td>23/12/2021</td>
                              <td>20</td>
                              <td>R$ 382.72</td>
                              <td>R$ 382.72</td>
                              <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                            <tr>
                              <td>LREN3</td>
                              <td>21/12/2021</td>
                              <td>20</td>
                              <td>R$ 121.85</td>
                              <td>R$ 121.85</td>
                              <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    </div>
                    </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>

        </div>
      );
}