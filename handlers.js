export default{
  onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
                + ", sessionId=" + session.sessionId);
  },
  onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);

  },
  onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);

    const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;

  },
  onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);
  },
  buildResponse(sessionAttributes, speechletResponse) {
    return {
      version: "0.1",
      sessionAttributes: sessionAttributes,
      response: speechletResponse
    }
  }
}


