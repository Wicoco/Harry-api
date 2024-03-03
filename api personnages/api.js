function fetchHP(id) {
  return fetch("https://hp-api.lainocs.fr/characters/" + id).then((response) =>
    response.json()
  );
}

async function displayHP(id, elementId) {
  const data = await fetchHP(id);
  let date = data.birthday.slice(0, -14);
  document.getElementById(elementId).innerHTML = `
        <img src="${data.image}" alt="${data.name}"/>
        <h1>Name : ${data.name}</h1>
        <h1>Hairs : ${data.hairs}</h1>
        <h1>Eye color : ${data.eyes}</h1>
        <h1>Birthday : ${date}</h1>
        <h1>Blood : ${data.blood}</h1>
        <h1>Wand : ${data.wand}</h1>
        <h1>Patronus : ${data.patronus}</h1>
        <h1>Role : ${data.role}</h1>
        <h1>House : ${data.house}</h1>
        <h1>Actor : ${data.actor}</h1>

`;
}

displayHP("harry-potter", "harry");
displayHP("ron-weasley", "ron");
displayHP("draco-malfoy", "draco");
displayHP("hermione-granger", "hermione");
displayHP("minerva-mcgonagall", "minerva");
displayHP("severus-snape", "severus");
displayHP("albus-dumbledore", "albus");
displayHP("lord-voldemort", "lord");
displayHP("sirius-black", "sirius");
displayHP("bellatrix-lestrange", "bellatrix");
displayHP("neville-longbottom", "neville");
displayHP("cedric-diggory", "cedric");
displayHP("gregory-goyle", "gregory");
displayHP("vincent-crabbe", "vincent");
displayHP("gilderoy-lockhart", "gilderoy");
displayHP("luna-lovegood", "luna");
displayHP("cho-chang", "cho");
displayHP("lucius-malfoy", "lucius");
displayHP("doloress-umbridge", "doloress");
displayHP("nymphadora-tonks", "nymphadora");
displayHP("rubeus-hagrid", "rubeus");
displayHP("quirinus-quirrel", "quirinus");
