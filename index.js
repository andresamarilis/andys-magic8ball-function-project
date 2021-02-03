// Andy's Magic 8-Ball function project. 

const generateResponse = (response, randomNumber) => {

    response = ['Looks like yes', 'Chances arent good', 'Cant say now', 'Indications say yes', 'Dont bet on it', 'The stars say no', 'No doubt about it', 'Ask again'];
    randomNumber = Math.floor(Math.random() * 8);
    return `The magic 8 ball says:  ${response[randomNumber]}`;

};

console.log(generateResponse())

document.querySelector('li').innerHTML = generateResponse();