











function word_counter(istring)
{
    
   // const arr = istring.split(/\\S+/);
    const arr = istring.trim().split(/\s+/)

    //arr.length is the number of words in the string.


    


    console.log(arr);

    return arr.length;
}


