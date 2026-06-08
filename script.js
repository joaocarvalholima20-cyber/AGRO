/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Header */
header {
    background-color: #2E7D32;
    color: white;
    padding: 20px;
    text-align: center;
}

header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

header nav ul li a:hover {
    text-decoration: underline;
}

/* Hero */
#hero {
    background-color: #A5D6A7;
    text-align: center;
    padding: 60px 20px;
}

#hero h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

#hero button {
    background-color: #2E7D32;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
}

#hero button:hover {
    background-color: #1B5E20;
}

/* Seções */
section {
    padding: 40px 20px;
    max-width: 1000px;
    margin: auto;
}

.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background-color: #E8F5E9;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
}

/* Formulário */
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    margin: auto;
}

input, textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button[type="submit"] {
    background-color: #2E7D32;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
}

button[type="submit"]:hover {
    background-color: #1B5E20;
}

/* Footer */
footer {
    background-color: #2E7D32;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}
