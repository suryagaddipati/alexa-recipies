import {assert} from 'chai'
import event from './../event.js';
const srcEvent ={
  request: {
    type: "LaunchRequest"
  },
  session:{
    application:{
      applicationId: 'appId'
    }
  }
};
describe('event', () =>{
  describe('#isLaunchRequest', () =>{
    it('should check for requst type', ()=> {
      assert.isTrue(event(srcEvent).request.isLaunchRequest);
    });
  });
});
