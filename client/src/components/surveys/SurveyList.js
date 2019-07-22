import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
      return this.props.surveys.reverse().map(survey => {
          return (
              <div className="card darken-2" key={survey._id}>
                  <div className="car content text-white">
                      <span className="card-title">{survey.title}</span>
                      <p>
                          {survey.body}
                      </p>
                      <p className="right">
                          Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                      </p>
                     
                      <div className="card-action">
                          <button className="btn-flat disabled">Yes: {survey.yes}</button>
                          <button className="btn-flat disabled">No: {survey.no}</button>
                      </div>


                  </div>
              </div>
          )
      })
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}
function mapStateToProps({ surveys }) {
  return { surveys };
}
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
