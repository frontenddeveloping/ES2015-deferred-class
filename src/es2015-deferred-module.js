const PENDING_STATE  = 'pending';
const REJECTED_STATE = 'rejected';
const RESOLVED_STATE = 'resolved';

class Deferred {
    static PENDING_STATE  = PENDING_STATE;
    static REJECTED_STATE = REJECTED_STATE;
    static RESOLVED_STATE = RESOLVED_STATE;
    constructor() {
        let state = PENDING_STATE;
        let promise = new Promise((resolve, reject) => {
          this.resolveWith = (value) => {
            state = RESOLVED_STATE;
            resolve(value);
            return this;
          }

          this.rejectWith = (value) => {
            state = REJECTED_STATE;
            reject(value);
            return this;
          }
        });
        this.then = promise.then.bind(promise);
        this.catch = promise.catch.bind(promise);
        this.promise = () => promise;
        this.state = () => state;
    }
}

module.exports = Deferred;
