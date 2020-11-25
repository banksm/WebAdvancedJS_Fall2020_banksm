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


    SC.initialize({
        client_id: 'YOUR_CLIENT_ID'
    });

    let track_url = 'https://soundcloud.com/marxistmusic/dont-rush-feat-muchacho-major';
    SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
        console.log('oEmbed response: ', oEmbed);

    });


});







//Display the JSON Date in the Container Div