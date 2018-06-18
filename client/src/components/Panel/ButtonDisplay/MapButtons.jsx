import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addQuestion,
  editQuestion,
  clearQuestion,
  saveQuestion,
  deleteQuestion,
  cancelQuestion,
  submitQuestion,
  sendQuestion,
  registerLocation
} from '../../store'


class MapButtons extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (type) {
    const { question, allQuestions, user } = this.props
    const action = type === 'register' ? `${type}Location` : `${type}Question`
    if (type === 'delete') this.props[action](question, allQuestions)
    else if (type === 'register') this.props[action](window.location.href)
    else if (type === 'cancel') this.props[action](allQuestions)
    else if (type === 'submit' || type === 'save') this.props.setStateInDrawer(this.props[action])
    else this.props[action](question, user)
  }

  render () {
    const { mode, user, question } = this.props
    const buttonType = mode.type !== 'Register' ? 'question' : 'url'
    const questionCreator = user.id === question.userId
    const buttonsAvailable = mode && mode.buttons.filter(button => {
      if (button.name === 'add') return true
      if (mode.type === 'Add') return true
      if (mode.type === 'Register') return true
      return questionCreator && question.id
    })

    return (
      question &&
      buttonsAvailable.map(button => (
        <div key={ button.name } >
          <button
            type="submit"
            className="question-display btn-border"
            onClick={ () => this.handleClick(button.name) }
          >
            { `${button.name} ${buttonType}` }
          </button>
        </div>
      ))
    )
  }

}


const mapStateToProps = state => ({
  user: state.user,
  question: state.question,
  allQuestions: state.allQuestions,
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  addQuestion: () => dispatch(addQuestion()),
  editQuestion: question => dispatch(editQuestion(question)),
  clearQuestion: question => dispatch(clearQuestion(question)),
  saveQuestion: question => dispatch(saveQuestion(question)),
  deleteQuestion: (question, urlId) => dispatch(deleteQuestion(question, urlId)),
  cancelQuestion: question => dispatch(cancelQuestion(question)),
  submitQuestion: question => dispatch(submitQuestion(question)),
  sendQuestion: () => dispatch(sendQuestion()),
  registerLocation: url => dispatch(registerLocation(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(MapButtons)
