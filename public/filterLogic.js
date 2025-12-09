//Grab the filter field we want
const filterBtn = document.getElementById("filter-update-button");

//Add event listener to filter update btn
filterBtn.addEventListener("click", function() {
    /* Grab values from filter fields */

    //For likes - not implemented - TODO

    //For date
    const desiredTimePeriod = document.getElementById("filter-date");

    //We need to take the raw number "10","7" days ago etc, and convert to actual date so we can compare to postDatas format (MM-DD-YYYY)
    let filterDate = null;
    const currentDate = new Date();
    const posts = document.querySelectorAll(".post-container"); //grab all posts on page

    if (desiredTimePeriod.value === "") {
        filterDate = null; //no filtering on date
        //reshow everything
        posts.forEach(function(post) {
            post.style.display = "block";
        });
    } else {
        filterDate = new Date(); //todays date
        const daysAgo = parseInt(desiredTimePeriod.value); //make str to int
        filterDate.setDate(filterDate.getDate() - daysAgo); //subtract days from todays date - js date obj is smart!

        //loop through each post in dom
        posts.forEach(function(post) {
            const indivPostDate = post.getAttribute("data-dateuploaded"); //grab date from attribute we set in ejs
            const indivPostDateObj = new Date(indivPostDate); //make it a date obj

            //compare to desiredDate
            if(indivPostDateObj >= filterDate){
                //set to block
                post.style.display = "block";
            }
            else{
                //Rather than remove from dom (which we could do) we can just hide elements for this level of implementation
                post.style.display = "none"; //hide it
            }
        });
    }

});
