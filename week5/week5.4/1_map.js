const arr = [1, 2, 3, 4]

const newArray = arr.map((element)=>{                   // existingArr.map.function to transform elemenet
    return element * 2                                      // wo process jo har element ko tranforms krti hai
})                                                          // ** Map ek New array return krta hai to better hoga ki result ko ek variable me store kiya jaye => here newArray

console.log(newArray)          // [2, 4, 6, 8]