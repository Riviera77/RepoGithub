import { Octokit, App } from 'https://esm.sh/octokit';

class Home {
	constructor() {
		this.descriptionHTML = document.querySelector('.js-home-description');
		this.profilHTML = document.querySelector('.js-home-profil-url');
		this.avatarHTML = document.querySelector('.js-home-avatar');

		this.projectsTitle = document.querySelectorAll('.js-home-project-title');
		this.projectsDescription = document.querySelectorAll('.js-home-project-description');
		this.projectsTagsContainer = document.querySelectorAll('.js-home-project-tags-container');

		this.init();
	}

	init() {
		// Récupérer les informations du profil depuis l'API
		this.getUserInformations();
		this.getReposInformations();
	}

	getUserInformations() {
		// API #1 : Récupérer les informations du profil depuis l'API avec fetch
		fetch('https://api.github.com/users/Riviera77')
			.then((response) => response.json())
			.then((data) => {
				this.updateHTMLUser(data);
			})
			.catch((error) => {
				console.error('Erreur lors de la récupération des informations du profil', error);
			});
	}

	async getReposInformations() {
		// API #2 : Récupérer les informations du profil depuis l'API avec Octokit JS + await/async
		//URL de l'API classique : https://api.github.com/users/Riviera77/repos
		const octokit = new Octokit();
		const response = await octokit.request('GET /users/Riviera77/repos');
		const data = response.data;
		console.log(data);
	}

	updateHTMLUser(APIdata) {
		// Afficher la description de mon profil Github
		this.descriptionHTML.textContent = APIdata.bio;
		// Afficher l'url de mon profil Github
		this.profilHTML.setAttribute('href', APIdata.html_url);
		// Afficher mon avatar Github
		this.avatarHTML.setAttribute('src', APIdata.avatar_url);
	}
}

export { Home };
