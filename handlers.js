import Response from './response.js';
export default{
  onSessionStarted(event) {
    console.log(`New session ${event.session.id}`);
  },
  LaunchRequest(event,context) {
    const rsp = Response(context,event.session);
    rsp.ask('Hi What are you cooking?', "You can say Sambar"); 
  },
  IntentRequest(event,context) {
    const rsp = Response(context,event.session);
    rsp.tell('hello Intent meow meow'); 
  },
  SessionEndedRequest(event,context) {
    const rsp = Response(context,event.session);
    rsp.tell('Session Ended'); 
  }
}


