function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return NaN;
}
function binarySearch(arr, x) {
    // some logic
}

// export default function fun() {
//     console.log('I am a default export.');
// }
/*
    module.exports = {
        linear: linearSearch,
        binary: binarySearch,
    };
*/

// 1st-way
// export { linearSearch, binarySearch };

// 2nd-way
// we can have only 1 default export in 1 file.
export default {
    binarySearch,
    gun: function () {
        console.log('I am gun.');
    },
};
