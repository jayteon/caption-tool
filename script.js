const megaDatabase = {
    food: ["Fresh out the oven. 🍕", "The secret ingredient is cheese. 🧀", "Better than a 5-star meal. 😋"],
    hustle: ["Grind now, shine later. 💎", "Building an empire. 🏗️", "Boss moves only. 🚀"],
    fitness: ["No pain, no gain. 💪", "Consistency is key. 🏋️‍♂️", "Leveling up daily. 🔥"],
    generic: ["Current mood: Unstoppable. ⚡", "Making memories. ✨", "Stay humble. 🙌"]
};

document.getElementById('generateBtn').addEventListener('click', () => {
    const topic = document.getElementById('captionInput').value.toLowerCase();
    const output = document.getElementById('output');
    if(!topic) return alert("Enter a topic!");
    output.innerText = "Accessing Mega-Database...";
    let selected = megaDatabase.generic;
    Object.keys(megaDatabase).forEach(key => {
        if(topic.includes(key)) selected = megaDatabase[key];
    });
    setTimeout(() => {
        output.innerHTML = `1. ${selected[0]}<br><br>2. ${selected[1]}<br><br>3. ${selected[2]}`;
    }, 300);
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const text = document.getElementById('output').innerText;
    if(!text || text === "Waiting...") return alert("Nothing to copy!");
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("Captions copied to clipboard! 📋");
});
