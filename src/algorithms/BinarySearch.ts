const binarySearch = <T>(element: T, array: Array<T>, compare: (first: T, second:T) => number): number | undefined => {
    let minor = 0;
    let major = array.length - 1;
    
    while ( minor <= major ) {
        let middle = Math.floor((minor + major)/2);
        const compared = compare(element, array[middle]);
        if(compared == 0) {
            return middle;
        } else if (compared == 1) {
            minor = middle + 1;
        } else  {
            major = middle - 1;
        }
    } 

    return undefined;
}

export default binarySearch;