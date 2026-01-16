// Each name should be in the format "Stu1, Stu2, and Stu3" with two URLs: the student's website first followed by the repo for the website.
// The boolean should indicate whether or not the website has the option to login with GitHub OAuth.
var projects = [
    ["Lily and Ann", "https://ann-liliana-dsw-final-project.onrender.com/", "https://github.com/burningChairs/Ann-Liliana-DSW-final-project"],
    ["George and Zade", "https://final-project-tatx.onrender.com/", "https://github.com/rogue-acid/Final-Project"],
    ["Juan and Kayleb", "https://final-project-o075.onrender.com/", "https://github.com/JuanSanchez001/Final-Project"],
    ["Alice and Melanie", "https://dsw-final-project-1-1liq.onrender.com/", "https://github.com/MelanieCampuzano/DSW-Final-Project"]
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(title, imageName, altText, websiteUrl, repoUrl) {
    return `
    <div class="card text-center"> 
    	<div class="card-body"> 
    		<h5 class="card-title">${title}</h5>
    		<p class="card-text"> 
    			<img src="images/${imageName}" alt="${altText}" class="screenshots"> 
    			<div class="d-flex flex-column gap-2">
                    <a href="${websiteUrl}" target="_blank" class="btn btn-primary w-100">Project Website</a>
                    <a href="${repoUrl}" target="_blank" class="btn btn-outline-dark w-100">GitHub Repository</a>
                </div>
    		</p> 
    	</div> 
    </div>`;
}

function makeCard() {
    if (idx >= projects.length) return;
    var entry = projects[idx];
    var name = entry[0];
    var websiteUrl = entry[1];
    var repoUrl = entry[2];
    var hasGitHubLogin = entry[3];
    var file = name.replace(" and ","").replaceAll(" ","").replaceAll(",","");
    var imageName = file + ".png";
    var card = generateCard(name, imageName, name, websiteUrl, repoUrl, hasGitHubLogin);
    gridHtml += card;
    idx++;
}

function makeGrid() {
    for (var i = 0; i < projects.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    if (projects.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    document.getElementById("grid").innerHTML += gridHtml;
}