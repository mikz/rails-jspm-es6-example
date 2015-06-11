import {Greeter} from 'greeter.js';

describe("Greeter", function() {
    const greeter = new Greeter();

    it('greets', function(){
        expect(greeter.greet('Someone')).toBe("Hello Someone!")
    });
});
