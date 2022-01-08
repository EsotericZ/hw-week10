const Intern = require('../lib/Intern');

test("Test to see if Intern instance is being passed as object", () => {
    const int = new Intern();
    expect(typeof(int)).toBe("object");
})

test("Test school input on Intern", () => {
    const schooltest = "University";
    const s = new Intern("role", "name", "id", "email", schooltest);
    expect(s.school).toBe(schooltest);
})