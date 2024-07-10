const fibinput = document.querySelector('#fibsinput')
const fibloopbutton = document.querySelector('#fibsloopbutton')
const fibrecbutton = document.querySelector('#fibsrecbutton')

const mergeinput = document.querySelector('#mergesortinput')
const mergebutton = document.querySelector('#mergesortbutton')


function updatetext(target, text) {
    if (target === 'fibonacci') {
        const texttarget = document.querySelector('#fibonacciresult')
        texttarget.textContent = text
    }

    if (target === 'mergesortresult') {
        const texttarget = document.querySelector('#mergesortresult')
        texttarget.textContent = text
    }

}

fibloopbutton.addEventListener('click', (event) => {
    if (fibinput.value) {
        fibs(fibinput.value)

    } else {
        fibs(8)
    }
})

fibrecbutton.addEventListener('click', (event) => {
    if (fibinput.value) {
        fibsrec(fibinput.value, [0, 1], 0)

    } else {
        fibsrec(8, [0, 1], 0)

    }

    
    })

mergebutton.addEventListener('click', (event) => {
    let arr
    if (mergeinput.value) {
        arr = []
        let parsearr = mergeinput.value.toString().split('')
      for (const num of parsearr) {
          arr.push(parseInt(num))
         }
    } else {
        arr = [5, 4, 3, 2, 1]
    }
     
    mergesort(arr)
})
function fibs(num) {
    let fibsarr = [0, 1]
    console.log(0)
    console.log(1)
    

    for (let i = 0; i < num; i++) {
        setTimeout(() => {

        if (fibsarr.length >= num) {
            updatetext('fibonacci', fibsarr)
            return console.table(fibsarr)
        } else {
            fibsarr.push(fibsarr[fibsarr.length - 1] + fibsarr[fibsarr.length - 2])
            console.log(fibsarr[fibsarr.length - 1])
            updatetext('fibonacci', fibsarr)
        }
        }, i * 250);
    }
}


function fibsrec(num, arr, result) {
    let fibsarr = arr
    setTimeout(() => {
        if (fibsarr.length >= num) {
            console.table(fibsarr)
            updatetext('fibonacci', arr)
            return result
        }

        if (fibsarr.length < 3) {
            let calc = fibsarr[fibsarr.length - 1] + fibsarr[fibsarr.length - 2]

            fibsarr.push(calc)
            console.log(fibsarr)
            updatetext('fibonacci', fibsarr)

            fibsrec(num, fibsarr, calc)
        }
        else {
            console.log(result)

            let calc = fibsarr[fibsarr.length - 2] + result
            // console.log(calc)
            fibsarr.push(calc)
            updatetext('fibonacci', fibsarr)

            fibsrec(num, fibsarr, calc)
        }
    }, 250);
}


// if only one number quit
// split array in half til only two elements in the left half
// compare left most of the two arrays, move the lowest to the end of the next array until reach end.

/*   
72541603

7254
27 45
2457

1603
16 03
0136

2457 0136
01234567

*/

//Take input number, split number at spaces to fill the array if there no spaces split all the numbers into single digits
// let arr = [8,9,4,7,1,9]

function mergesort(arr) {
    result = split(arr)
    console.log(result)
    updatetext('mergesortresult', result)
}

function split(arr) {
    if (arr.length <= 1) {return arr }
    
        const middle = Math.floor(arr.length / 2)
        const arr1split = split(arr.slice(0, middle))
        const arr2split = split(arr.slice(middle))
        return merge(arr1split, arr2split)
    
}

function merge(arr1, arr2) {
    const sorted = []

    while (arr1.length > 0 && arr2.length > 0) {
       const whichsmaller = arr1[0] < arr2[0] ? arr1 : arr2
        const merged = whichsmaller.shift()
       sorted.push(merged)
    }

    return sorted.concat(arr1, arr2)

    }