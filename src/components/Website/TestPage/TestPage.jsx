import react, { Component } from 'react';

import './TestPage.css';
import Modal from '../../UI/Modal/Modal';
import axios from '../../../axios-order';;

class TestPage extends Component {

    constructor( props )
    {

        super( props );
        this.state = {

            step1: true,
            step2: false,
            userInfo: {
                pname: null,
                pcnic: null,
                page: null,
                pemail: null,
                pphone: null,
                psax: null
            },
            bloodModal: false,
            urineModal: false,
            xrayModal: false,
            coronaModal: false,
            bloodTestsValues: {
                CBC: null,
                MPICT: null,
                DengueAntigen: null,
                FastingGlucoseLevel: null,
                RendomGlucoseLevel: null,
                LipidProfile: null,
                ThyroidProfile: null,
                IronProfile: null,
                SUCE: null,
                LiverProfile: null,
            },
            bloodTestsName: {
                test1: null,
                test2: null,
                test3: null,
                test4: null,
                test5: null,
                test6: null,
                test7: null,
                test8: null,
                test9: null,
                test10: null,
            },
            bloodTestsSelected: {
                test1: null,
                test2: null,
                test3: null,
                test4: null,
                test5: null,
                test6: null,
                test7: null,
                test8: null,
                test9: null,
                test10: null,
            },
            UrineAnalysis: {
                CBC: null,
                MPICT: null,
                DengueAntigen: null,
                FastingGlucoseLevel: null,
                RendomGlucoseLevel: null,
                LipidProfile: null,
                ThyroidProfile: null,
                IronProfile: null,
                SUCE: null,
                LiverProfile: null,
            },
            CronaVirusInvestigation: {
                CBC: null,
                MPICT: null,
                DengueAntigen: null,
                FastingGlucoseLevel: null,
                RendomGlucoseLevel: null,
                LipidProfile: null,
                ThyroidProfile: null,
                IronProfile: null,
                SUCE: null,
                LiverProfile: null,
            },
            XRaysAltrasound: {
                CBC: null,
                MPICT: null,
                DengueAntigen: null,
                FastingGlucoseLevel: null,
                RendomGlucoseLevel: null,
                LipidProfile: null,
                ThyroidProfile: null,
                IronProfile: null,
                SUCE: null,
                LiverProfile: null,
            },
            totalAmount: 0


        }

    }

    componentDidMount()
    {

        axios.get( '/bloodtestsnames.json' )
             .then( response => {

                this.setState(
                    {
                        bloodTestsName: {
                            test1: response.data.test1,
                            test2: response.data.test2,
                            test3: response.data.test3,
                            test4: response.data.test4,
                            test5: response.data.test5,
                            test6: response.data.test6,
                            test7: response.data.test7,
                            test8: response.data.test8,
                            test9: response.data.test9,
                            test10: response.data.test10,
                        }
                    }
                )

                axios.get( '/bloodtests.json' ).then( responses => {

                    this.setState(
                        {
                            bloodTestsValues: {
                                CBC: responses.data.CBC,
                                MPICT: responses.data.MPICT,
                                DengueAntigen: responses.data.DengueAntigen,
                                FastingGlucoseLevel: responses.data.FastingGlucoseLevel,
                                RendomGlucoseLevel: responses.data.RendomGlucoseLevel,
                                LipidProfile: responses.data.LipidProfile,
                                ThyroidProfile: responses.data.ThyroidProfile,
                                IronProfile: responses.data.IronProfile,
                                SUCE: responses.data.SUCE,
                                LiverProfile: responses.data.LiverProfile,
                            }
                        }
                    );

                } )

             } )
             .catch( error => {

                console.log( error );

             } );

    }

    onChangeHandler = ( event ) => {

        const  { name, value } = event.target;

        const setInfo = {

            ...this.state.userInfo,
            [name]: value

        }

        this.setState( { userInfo: setInfo } );

    }

    userWhatSax = ( event ) => {

        if(event.target.value == 'male')
        {

            const setInfo = {

                ...this.state.userInfo,
                psax: 'male'
    
            }
            this.setState( { userInfo: setInfo } );

        }else {

            const setInfo = {

                ...this.state.userInfo,
                psax: 'female'
    
            }
            this.setState( { userInfo: setInfo } );

        }
    }

    stepToggle = ( event ) => {

        event.preventDefault();
        
        if(this.state.step1)
        {
            this.setState( { step1: false, step2: true } );
        }else {
            this.setState( { step2: false, step1: true } );
        }

    }

    modalShow = ( event ) => {

        event.preventDefault();

        const { name } = event.target;

        if( name == 'BloodTest' )
        {
            this.setState( { bloodModal: true } );
        }

        if( name == 'UrineAnalysis' )
        {
            this.setState( { urineModal: true } );
        }

        if( name == 'CronaVirusInvestigation' )
        {
            this.setState( { coronaModal: true } );
        }

        if( name == 'X-Rays' )
        {
            this.setState( { xrayModal: true } );
        }

    }

    hideModal = ( event ) => {

        this.setState( { bloodModal: false, urineModal: false, xrayModal: false, coronaModal: false } );

    }

    testOptionsSelected = ( event ) => {

        const { name, value } = event.target;
        const setValues = {
            ...this.state.bloodTestsSelected,
            [name]: value
        }

        this.setState( { bloodTestsSelected: setValues } );

    }

    render()
    {

        let steps = null;

        if(this.state.step1)
        {
            steps = (
                <>
                    <div className="step1">
                        <h3 className="text-left mb-4">Patient Information</h3>
                        <input 
                            type="text" 
                            className="form-control form-control-sm mb-3" 
                            placeholder="Patient Name"
                            onChange={this.onChangeHandler}
                            name="pname"
                             />
                        <input 
                            type="text" 
                            className="form-control form-control-sm mb-3" 
                            placeholder="Patient CNIC"
                            onChange={this.onChangeHandler}
                            name="pcnic"
                             />
                        {/* <input type="text" className="form-control form-control-sm mb-3" placeholder="Patient Sax" /> */}
                        <div className="text-center pb-2 d-grid">
                            <div>
                                <span className="pr-2">
                                    
                                    <input 
                                    type="radio" 
                                    name="sax" value="male"
                                    onChange={this.userWhatSax}
                                     /> male
                                
                                </span>
                                <span className="pl-2">
                                    
                                    <input 
                                    type="radio" 
                                    name="sax" value="female"
                                    onChange={this.userWhatSax}
                                     /> female
                                
                                </span>
                            </div>
                        </div>
                        <input 
                            type="number" 
                            className="form-control form-control-sm mb-3" 
                            placeholder="Patient Age"
                            onChange={this.onChangeHandler}
                            name="page"
                             />
                        <input 
                            type="email" 
                            className="form-control form-control-sm mb-3" 
                            placeholder="Patient Email"
                            onChange={this.onChangeHandler}
                            name="pemail"
                             />
                        <input 
                            type="text" 
                            className="form-control form-control-sm mb-4" 
                            placeholder="Patient Phone"
                            onChange={this.onChangeHandler}
                            name="pphone"
                             />
                        <div className="text-right">
                            <button className="btn general-btns px-4 btn-sm" onClick={this.stepToggle}>Continue</button>
                        </div>
                    </div>
                </>
            )
        }

        if(this.state.step2)
        {

            steps = (
                <>
                    <div className="step2">
                        <button href="##" className="back_aero btn" onClick={this.stepToggle}>
                            <i class="las la-arrow-left"></i>
                        </button>
                        <h3 className="text-left mb-4">Diagnostic Tests</h3>
                        <div className="text-center">

                            <button 
                                className="btn btn-sm test-btns shadow" 
                                onClick={this.modalShow}
                                name="BloodTest"
                            >
                                Blood Test
                            </button><br/>


                            <button 
                                className="btn btn-sm test-btns shadow" 
                                onClick={this.modalShow}
                                name="UrineAnalysis"
                            >
                                Urine Analysis
                            </button><br/>


                            <button 
                                className="btn btn-sm test-btns shadow" 
                                onClick={this.modalShow}
                                name="CronaVirusInvestigation"
                            >
                                Crona Virus Investigation
                            </button><br/>


                            <button 
                                className="btn btn-sm test-btns shadow mb-5" 
                                onClick={this.modalShow}
                                name="X-Rays"
                            >
                                X-Rays & Altrasound
                            </button>


                        </div>
                        <div className="text-right">
                            <button className="btn general-btns px-4 btn-sm" onClick={this.stepToggle}>Continue</button>
                        </div>
                    </div>
                </>
            )

        }

        return(

            <>
                <div className="TestPage d-grid">
                    <div className="d-flex justify-content-center">
                        <div className="p-5 bg-white TestPage-inner">
                            <form>
                                {steps}
                            </form>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.bloodModal} hide={this.hideModal}>
                    <div className="container-fluid">
                        <h3 className="text-center" style={ { 'color' : '#DE2C2C' } }>Blood Tests</h3>
                        <div className="row pt-5">
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="CBC"
                                            value="CBC"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test1}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.CBC}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="DengueAntigen"
                                            value="DengueAntigen"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test2}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.DengueAntigen}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="FastingGlucoseLevel"
                                            value="FastingGlucoseLevel"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test3}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.FastingGlucoseLevel}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="LipidProfile"
                                            value="LipidProfile"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test4}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.LipidProfile}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="LipidProfile"
                                            value="LipidProfile"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test5}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.LipidProfile}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="LiverProfile"
                                            value="LiverProfile"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test6}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.LiverProfile}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="MPICT"
                                            value="MPICT"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test7}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.MPICT}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="RendomGlucoseLevel"
                                            value="RendomGlucoseLevel"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test8}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.RendomGlucoseLevel}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="SUCE"
                                            value="SUCE"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test9}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.SUCE}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input 
                                            type="checkbox" 
                                            name="ThyroidProfile"
                                            value="ThyroidProfile"
                                            onChange={this.testOptionsSelected}
                                             /> {this.state.bloodTestsName.test10}
                                    </div>
                                    <div>
                                        <small>Rs {this.state.bloodTestsValues.ThyroidProfile}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-3 font-weight-bold">
                            <p>Total Amount: Rs {this.state.totalAmount}</p>
                            <button className="btn px-4 general-btns" onClick={this.hideModal}>Confirm</button>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.coronaModal} hide={this.hideModal}>
                    <h1>coronaModal test</h1>
                </Modal>
                <Modal show={this.state.urineModal} hide={this.hideModal}>
                    <h1>urineModal test</h1>
                </Modal>
                <Modal show={this.state.xrayModal} hide={this.hideModal}>
                    <h1>xrayModal test</h1>
                </Modal>
            </>

        );

    };

};

export default TestPage;