let role, name, id, email, office, github, school, job;

Team = (teamAwesome) => {
    console.log(teamAwesome)
    const htmlInside = members(teamAwesome);
    const htmlFull = 
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"> -->
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
        <div class="row justify-content-center">
            ${htmlInside}
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;
    return htmlFull;
}

members = (teamAwesome) => {
    let htmlPart = '';

    teamAwesome.forEach(n => {
        role = n.role;
        name = n.name;
        id = n.id;
        email = n.email
        if (n.role === 'Manager') {
            console.log('man')
            office = n.officeNumber;
            icon = "fas fa-mug-hut";
            job = `<div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
                <div class="card">
                    <div class="card-header">
                        ${name}<br/>
                        <i class=${icon}></i> ${role}
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text">Office:${office}</p>
                    </div>
                </div>
            </div>`;
            htmlPart += job;
        } else if (n.role === 'Engineer') {
            console.log('eng')
            github = n.github;
            icon = "fas fa-glasses";
            job = `          
            <div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
                <div class="card">
                    <div class="card-header">
                        ${name}<br/>
                        <i class=${icon}></i> ${role}
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text">Github: <a href="http://github.com/${github}" target="_blank">${github}</p>
                    </div>
                </div>
            </div>`;
            htmlPart += job;
        } else {
            console.log('int')
            school = n.school;
            icon = "fas fa-user-graduate";
            job = `          
            <div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
                <div class="card">
                    <div class="card-header">
                        ${name}<br/>
                        <i class=${icon}></i> ${role}
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text">School:${school}</p>
                    </div>
                </div>
            </div>`;
            htmlPart += job;
        }
    });
    return htmlPart;
}

module.exports = Team;