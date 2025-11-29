let reloadPage = () => {};

let embedIsAllowed =
	localStorage &&
	localStorage.getItem &&
	localStorage.getItem('allowEmbed') === 'true';

const allowEmbedValue = document.getElementById('allowEmbedValue');
allowEmbedValue.checked = embedIsAllowed;
const button = document.getElementById('embedSettings');

function reactToAllowEmbedChange(embedIsAllowed) {
	allowEmbedValue.checked = embedIsAllowed;
	button.style.display = embedIsAllowed ? 'block' : 'none';
}
reactToAllowEmbedChange(embedIsAllowed);

function checkAppleMusicEmbed() {
	const elements = document.getElementsByClassName('apple-music-embed');
	if (elements.length !== 1) {
		return;
	}
	reloadPage = () => {
		location.reload();
	};
	const music = elements[0].attributes.getNamedItem('data-id').value;
	function embedAppleMusic() {
		elements[0].outerHTML = `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${music}"></iframe>`;
	}

	if (
		localStorage &&
		localStorage.getItem &&
		localStorage.getItem('allowEmbed') === 'true'
	) {
		embedAppleMusic();
		return;
	}

	const button = document.getElementById('allowEmbed');
	button.addEventListener('click', function () {
		reactToAllowEmbedChange(true);
		localStorage.setItem('allowEmbed', 'true');
		embedAppleMusic();
	});
}

checkAppleMusicEmbed();

button.addEventListener('click', function () {
	const dialog = document.getElementById('dialog');
	dialog.showModal();
});

const embedForm = document.getElementById('embedForm');
embedForm.addEventListener('submit', (event) => {
	if (event.submitter.formNoValidate) {
		return;
	}
	event.preventDefault();
	localStorage.setItem('allowEmbed', allowEmbedValue.checked);
	document.getElementById('dialog').close();
	reloadPage();
});
