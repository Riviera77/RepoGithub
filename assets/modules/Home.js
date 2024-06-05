class Home {
	constructor() {
		this.descriptionHTML = document.querySelector('.js-home-description');
		this.profilHTML = document.querySelector('.js-home-profil-url');
		this.avatarHTML = document.querySelector('.js-home-avatar');
		this.data = {};

		this.init();
	}

	init() {
		// Récupérer les informations du profil depuis l'API
		this.getUserInformations();
	}

	getUserInformations() {
		// Récupérer les informations du profil depuis l'API

		fetch('https://api.github.com/users/Riviera77')
			.then((response) => response.json())
			.then((data) => {
				this.APIdata = data;
				this.updateContent();

				this.descriptionHTML.innerHTML = data.bio;
				this.profilHTML.innerHTML = data.html_url;
				this.avatarHTML.src = data.avatar_url;
			})
			.catch((error) => {
				console.error('Erreur lors de la récupération des informations du profil', error);
			});
	}

	updateContent() {
		// Afficher la description de mon profil Github
		this.descriptionHTML.textContent = this.APIdata.bio;
		// Afficher l'url de mon profil Github
		this.profilHTML.setAttribute('href', this.APIdata.html_url);
		// Afficher mon avatar Github
		this.avatarHTML.setAttribute('src', this.APIdata.avatar_url);
	}
}

export { Home };
