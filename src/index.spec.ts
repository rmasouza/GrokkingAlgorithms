import helloWorld from './index';

describe('Greetings', () => {
    it('simple hello world', () => {
        expect(helloWorld()).toBe('Hello World');
    })

    
});
