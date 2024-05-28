import { Octokit } from 'https://esm.sh/octokit';

//Instanciation de l'objet Octokit
const octokit = new Octokit({});
console.log(octokit);

//octokit.rest.repos => provient du SDK
// get => Méthode du SDK pour récupérer ici les repos
octokit.rest.repos
	.get({
		owner: 'Riviera77',
		repo: 'FrontZooArcadia',
	}) // On récupère un seul repo
	.then(({ data }) => {
		console.log('Repo récupéré', data);
		console.log(data.url);
	});
