var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () 
{
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> "
}

function displayScores() 
{
    var table = "<tr><th>Name</th><th>Score</th></tr>";
    for (var i = 0; i < names.length; i++) {
        table += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    document.getElementById("scores_table").innerHTML = table;
}

function addScore() 
{
    var nameInput = $("name").value;
    var scoreInput = parseInt($("score").value); // Convert score to integer

    // Check if both name and score are provided
    if (nameInput && !isNaN(scoreInput)) {
        names.push(nameInput);
        scores.push(scoreInput);
        alert("Score added successfully.");
    } else {
        alert("Please enter both name and score.");
    }

    // Clear input fields after adding score
    $("name").value = "";
    $("score").value = "";
}