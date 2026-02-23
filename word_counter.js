











function word_counter(istring)
{
    
   // const arr = istring.split(/\\S+/);
    const arr = istring.trim().split(/\s+/)

    //arr.length is the number of words in the string.


    


    console.log(arr.length);

    //craete a variable with the time
    let time_value = document.getElementById("timerDisplay").textContent;

    let words_per_minute = arr.length / (time_value / 60);

    document.getElementById("wpm").textContent = words_per_minute.toFixed(2);

    return arr.length;
}


