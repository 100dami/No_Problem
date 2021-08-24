let user = "Dami";

function greeter(person: string): string {
    return "Hello, " + person;
}

document.body.textContent = greeter(user);