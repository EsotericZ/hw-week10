const Engineer = require('../lib/Engineer');

test("Test to see if Engineer instance is being passed as object", () => {
    const eng = new Engineer();
    expect(typeof(eng)).toBe("object");
})

test("Test GitHub username input on Engineer", () => {
    const gittest = "GitHubName";
    const g = new Engineer("role", "name", "id", "email", gittest);
    expect(g.github).toBe(gittest);
})