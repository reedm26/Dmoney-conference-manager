import _store from "../store.js";
import Speaker from "../Models/Speaker.js";
import Session from "../Models/Session.js";
import store from "../store.js";

class SessionsService {
  addSession(newSession) {
    let session = new Session(newSession);
    _store.State.sessions.push(session);

    console.log(newSession);
    console.log(session);
    _store.saveState();
  }
  deleteSession(sessionId) {
    _store.State.sessions.filter(
      sessionId => _store.State.session != sessionId
    );
    console.log("got to the return");

    // session => session.id == sessionId

    _store.saveState();
  }
  addSpeaker(speakerData) {
    let speaker = new Speaker(speakerData);
    let foundSession = _store.State.sessions.find(
      session => session.id == speaker.sessionId
    );
    foundSession.speakers.push(speaker);
    _store.saveState();
  }
  deleteSpeaker(sessionId, speakerId) {
    let foundSession = _store.State.sessions.find(
      session => session.id == sessionId
    );
    foundSession.speakers = foundSession.speakers.filter(
      speaker => speaker.id != speakerId
    );
    _store.saveState();
  }
  constructor() {
    console.log("Hello from sesionsService");
  }
}

const SESSIONSERVICE = new SessionsService();

export default SESSIONSERVICE;
