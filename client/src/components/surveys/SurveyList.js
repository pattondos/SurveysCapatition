import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurvey } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurvey();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>

                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>

                        <p>
                            {survey.body}
                        </p>
                        <br />

                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>

                    <div className="card-action">
                        <a href="#">Yes: {survey.yes}</a>
                        <a href="#">No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <h4 style={{ textAlign: "center" }}>Survey List</h4>
                    <div className="row">
                        {this.renderSurveys()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurvey })(SurveyList);