// Filter => name se hi pata chalta hai ki filter , array me se elements ko filter krta hai but accordoing to certain condition


const arr = [1, 2, 3,4 ,5]

// now uper wali array mujhe ek aisa array chahiye jisme even elements ho


const newArray = arr.filter((ele)=>{           // ye har element par iterate krta hai also ek naya array return krta hai
    if(ele %2 == 0){
        return true                            // agar conditon match kri to true return krna
    } else {
        return false
    }
})