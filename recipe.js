import handler from  './handlers.js';
export default function (event, context) {
  try {
    console.log("event.session.application.applicationId=" + event.session.application.applicationId);

    if (event.session.new) {
      handler.onSessionStarted({requestId: event.request.requestId}, event.session);
    }

    if (event.request.type === "LaunchRequest") {
      handler.onLaunch(event.request,
                       event.session,
                       function callback(sessionAttributes, speechletResponse) {
                         context.succeed(buildResponse(sessionAttributes, speechletResponse));
                       });
    }  else if (event.request.type === "IntentRequest") {
      handler.onIntent(event.request,
                       event.session,
                       function callback(sessionAttributes, speechletResponse) {
                         context.succeed(buildResponse(sessionAttributes, speechletResponse));
                       });
    } else if (event.request.type === "SessionEndedRequest") {
      handler.onSessionEnded(event.request, event.session);
      context.succeed();
    }
  } catch (e) {
    context.fail("Exception: " + e);
  }
};


