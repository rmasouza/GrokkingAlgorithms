import binarySearch from "./BinarySearch";


describe('Binary Search', () => {
    it('', () => {
        const arr = Array.from(Array(2450).keys())
        const compare = (first: number, second: number) => {
            const delta = first - second;
            return delta == 0 ? 0 :  (delta) / Math.abs(delta)
        }
        expect(binarySearch(4, arr, compare)).toBe(4);
        expect(binarySearch(2399, arr, compare)).toBe(2399);
        expect(binarySearch(-1, arr, compare)).toBe(undefined);
    })
    
});
