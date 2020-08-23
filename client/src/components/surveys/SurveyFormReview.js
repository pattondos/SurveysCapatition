import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return(
            <div key={ name } className="container-fluid">
                
                <label>{ label }</label>

                <div className="container">
                    { formValues[name] }
                </div>
                <br/>
                
            </div>
        );
    });

    return (
        <div>
            <h5>Please review your entires!</h5>
            <hr/>
            <div className="container">
                
                { reviewFields }
            </div>
            <button className="yellow white-text btn flat left"
                    onClick={ onCancel }>
                Back

                <i className="material-icons left">arrow_back</i>
            </button>


            <button className="green white-text btn-flat right"
            onClick={ () => submitSurvey(formValues, history) }
            >
                Send survey

                <i className="material-icons right">email</i>

            </button>
        </div>
    );
};

function mapStateToProps(state) {
    console.log(state);

    return{
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));