// Get the JSON File

$.getJSON("data.json", (data) => {
    console.log("JSON Loaded");

    let work = data.Resume;
    let art = data.Art;
    let school = data.Curriculum;

    console.log(work);
    console.log(art);
    console.log(school);



    $("#resume-container").append(work[0].LinkedIn + "<br>");
    $("#music-container").append(art[0].Songwriting + "<br>");
    $("#curriculum-container").append(school[0].BioDesign + "<br>");
});




//Display the JSON Date in the Container Div