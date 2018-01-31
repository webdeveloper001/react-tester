import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import PatientForm from './patient/index';
import FormularForm from './formular/index';
import ReviewForm from './review/index';

import './style.scss';

class IndexView extends React.Component {

    step: number = 1;
    state: any = {
        step: 1,
        patient_info: null,
        formular_info: null
    }
    form: any;
    form_ins: any;

    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handlePrint = this.handlePrint.bind(this);
    }

    handlePrev() {
        this.setState({
            step: 1
        })
    };

    handleNext() {
        let next_state = {
            ...this.state,
            step: this.state.step + 1
        }
        if(this.state.step == 1) {
            next_state.patient_info = this.form_ins.getData();
        }
        if(this.state.step == 2) {
            next_state.formular_info = this.form_ins.getData();
        }
        console.log(next_state);
        this.setState(next_state);
    };

    handlePrint() {
        console.log("print");
    };


    render() {

        let prev_button = <button onClick={this.handlePrev} > Back to home </button>;
        let next_button = <button onClick={this.handleNext} > Next </button>;
        let print_button = <button onClick={this.handlePrint}> Print </button>;

        switch(this.state.step) {
            case 1: {
                prev_button = null;
                print_button = null;
                this.form = <PatientForm ref={ins => {this.form_ins = ins;}} > </PatientForm>
                break; 
            }
            case 2: {
                prev_button = null;
                print_button = null;
                this.form = <FormularForm ref={ins => {this.form_ins = ins;}} > </FormularForm>
                break;
            }
            case 3: {
                next_button = null;
                this.form = <ReviewForm data = {this.state} > </ReviewForm>
                break;
            }
        }
        return (
            <div className="content">
                <div className="form">
                    { this.form }
                    { prev_button }
                    { next_button }
                    { print_button }
                </div>
                <DevTools />
            </div>
        );
     }

};

ReactDOM.render(<IndexView />, document.getElementById('root'));
