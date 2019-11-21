import SessionsService from "../Services/SessionsService.js";
import _store from "../store.js"

// private
function _drawSessions() {
  // get html

 let template = ''
 let sessions = _store.State.sessions
 sessions.forEach(session => template += session.template)
 document.querySelector("#sessions").innerHTML = template
}

// public
export default class SessionsController {
  constructor() {
    _drawSessions();
    console.log('Hello from sesionsController')
  }
}
