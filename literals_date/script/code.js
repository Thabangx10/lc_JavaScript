function tenDays() {
    // We are going to create containers for the current date and the next ten days. 

    let today = new Date();
    let next_ten = new Date();

    for (let i = 0; i < 5; i++) {
        next_ten.setDate(today.getDate() + (i * 10));
        let format = formatDate(next_ten);
        
        console.log(" Day",(i + 1),": ", format);
    }
}

// Function to format the date as "YYYY-MM-DD"
function formatDate(date) {
    var year = date.getFullYear(); 
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());

    return year + "-" + month + "-" + day;
}

// Function to pad a single digit with a leading zero
function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}

tenDays()