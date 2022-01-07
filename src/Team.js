Team = (teamAwesome) => {
    console.log('you made it')
    console.log(teamAwesome)

    const man1 = members(teamAwesome);
    const wtf = 
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
            <div class="col-4">
                <h1>Name</h1>
                <h2>Job</h2>
                <p class="ID">ID</p>
                <p class= "email">Email: <a href="mailto:"</p>
                <p class="github">Github: <a href="http://github.com/"</p>
            </div>
            <div class="col-4">
                <h1>Name</h1>
                <h2>Job</h2>
                <p class="ID">ID</p>
                <p class= "email">Email: <a href="mailto:"</p>
                <p class="github">Github: <a href="http://github.com/"</p>
            </div>
        </div>
    </div>
</body>
</html>
        `;
    return wtf;
}

members = (teamAwesome) => {
    return `
        <div class="col-4">
            <h1>Manager</h1>
            <h2>Test</h2>
            <p class="ID">ID</p>
            <p class= "email">Email: <a href="mailto:"</p>
            <p class="github">Github: <a href="http://github.com/"</p>
        </div>
`;
}

module.exports = Team;