Team = (teamAwesome) => {
    console.log(teamAwesome)
    const man1 = members(teamAwesome);
    const htmlFull = 
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="./style.css" />
    <title>Team Generator</title>
</head>
<header>
    <nav class="navbar" id="navbar">
        <span class="navbar-brand">Team Generator</span>
    </nav>
</header>

<body>
    <div class="container">
        <div class="row">
            ${man1}
        </div>
    </div>
</body>
</html>
        `;
    return htmlFull;
}

let roll, name, id, email, office, github, school, job;

members = (teamAwesome) => {
    let htmlPart = '';

    teamAwesome.forEach(n => {
        roll = n.roll;
        name = n.name;
        id = n.id;
        email = n.email
        if (n.roll === 'Manager') {
            office = n.officeNumber;
            icon = "fas fa-mug-hut";
            job = `          
            <div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
                <div class="card">
                    <div class="card-header">
                        ${name}<br/>
                        <i class=${icon}></i> ${roll}
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text">Office:${office}</p>
                    </div>
                </div>
            </div>
            `;
            htmlPart += job;
        } else if (n.roll === 'Engineer') {
            github = n.github;
            icon = "fas fa-glasses";
            job = `          
            <div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
                <div class="card">
                    <div class="card-header">
                        ${name}<br/>
                        <i class=${icon}></i> ${roll}
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text">Github: <a href="http://github.com/${github}" target="_blank">${github}</p>
                    </div>
                </div>
            </div>
            `;
            htmlPart += job;
        } else {
            school = n.school;
            icon = "fas fa-user-graduate";
            job = `          
            <div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
                <div class="card">
                    <div class="card-header">
                        ${name}<br/>
                        <i class=${icon}></i> ${roll}
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text">School:${intern.school}</p>
                    </div>
                </div>
            </div>
            `;
            htmlPart += job;
        }
    });
    return ;
}

module.exports = Team;