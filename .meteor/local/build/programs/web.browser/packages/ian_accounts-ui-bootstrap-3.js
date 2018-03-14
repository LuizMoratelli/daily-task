//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Session = Package.session.Session;
var Spacebars = Package.spacebars.Spacebars;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var Template = Package['templating-runtime'].Template;
var i18n = Package['anti:i18n'].i18n;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var ptPT, ptBR, zhCN, zhTW, srCyrl, srLatn, accountsUIBootstrap3, i, $modal;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/accounts_ui.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (!Accounts.ui){
	Accounts.ui = {};
}

if (!Accounts.ui._options) {
	Accounts.ui._options = {
		extraSignupFields: [],
		requestPermissions: {},
		requestOfflineToken: {},
		forceApprovalPrompt: {},
		forceEmailLowercase: false,
		forceUsernameLowercase: false,
		forcePasswordLowercase: false
	};
}

Accounts.ui.navigate = function (route, hash) {
	// if router is iron-router
	if (window.Router && _.isFunction(Router.go)) {
		Router.go(route, hash);
	}
}

Accounts.ui.config = function(options) {
	// validate options keys
	var VALID_KEYS = ['onCreate', 'passwordSignupFields', 'extraSignupFields', 'forceEmailLowercase', 'forceUsernameLowercase','forcePasswordLowercase',
	'requestPermissions', 'requestOfflineToken', 'forceApprovalPrompt'];

	_.each(_.keys(options), function(key) {
		if (!_.contains(VALID_KEYS, key)){
			throw new Error("Accounts.ui.config: Invalid key: " + key);
		}
	});

	if (options.onCreate && typeof options.onCreate === 'function') {
		Accounts.ui._options.onCreate = options.onCreate;
	} else if (! options.onCreate ) {
		//ignore and skip
	} else {
		throw new Error("Accounts.ui.config: Value for 'onCreate' must be a" +
				" function");
	}

	options.extraSignupFields = options.extraSignupFields || [];

	// deal with `passwordSignupFields`
	if (options.passwordSignupFields) {
		if (_.contains([
			"USERNAME_AND_EMAIL_CONFIRM",
			"USERNAME_AND_EMAIL",
			"USERNAME_AND_OPTIONAL_EMAIL",
			"USERNAME_ONLY",
			"EMAIL_ONLY"
		], options.passwordSignupFields)) {
			if (Accounts.ui._options.passwordSignupFields){
				throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");
			} else {
				Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;
			}
		} else {
			throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);
		}
	}

	Accounts.ui._options.forceEmailLowercase = options.forceEmailLowercase;
	Accounts.ui._options.forceUsernameLowercase = options.forceUsernameLowercase;
	Accounts.ui._options.forcePasswordLowercase = options.forcePasswordLowercase;

	// deal with `requestPermissions`
	if (options.requestPermissions) {
		_.each(options.requestPermissions, function(scope, service) {
			if (Accounts.ui._options.requestPermissions[service]) {
				throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);
			} else if (!(scope instanceof Array)) {
				throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");
			} else {
				Accounts.ui._options.requestPermissions[service] = scope;
			}
		});
	}
	if (typeof options.extraSignupFields !== 'object' || !options.extraSignupFields instanceof Array) {
		throw new Error("Accounts.ui.config: `extraSignupFields` must be an array.");
	} else {
		if (options.extraSignupFields) {
			_.each(options.extraSignupFields, function(field, index) {
				if (!field.fieldName || !field.fieldLabel){
					throw new Error("Accounts.ui.config: `extraSignupFields` objects must have `fieldName` and `fieldLabel` attributes.");
				}
				if (typeof field.visible === 'undefined'){
					field.visible = true;
				}
				Accounts.ui._options.extraSignupFields[index] = field;
			});
		}
	}

	// deal with `requestOfflineToken`
	if (options.requestOfflineToken) {
		_.each(options.requestOfflineToken, function (value, service) {
			if (service !== 'google'){
				throw new Error("Accounts.ui.config: `requestOfflineToken` only supported for Google login at the moment.");
			}
			if (Accounts.ui._options.requestOfflineToken[service]) {
				throw new Error("Accounts.ui.config: Can't set `requestOfflineToken` more than once for " + service);
			} else {
				Accounts.ui._options.requestOfflineToken[service] = value;
			}
		});
	}

	// deal with `forceApprovalPrompt`
	if (options.forceApprovalPrompt) {
		_.each(options.forceApprovalPrompt, function (value, service) {
			if (service !== 'google'){
				throw new Error("Accounts.ui.config: `forceApprovalPrompt` only supported for Google login at the moment.");
			}
			if (Accounts.ui._options.forceApprovalPrompt[service]) {
				throw new Error("Accounts.ui.config: Can't set `forceApprovalPrompt` more than once for " + service);
			} else {
				Accounts.ui._options.forceApprovalPrompt[service] = value;
			}
		});
	}
};

Accounts.ui._passwordSignupFields = function() {
	return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/en.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("en", {
	resetPasswordDialog: {
		title: "Reset your password",
		newPassword: "New password",
		newPasswordAgain: "New Password (again)",
		cancel: "Cancel",
		submit: "Set password"
	},
	enrollAccountDialog: {
		title: "Choose a password",
		newPassword: "New password",
		newPasswordAgain: "New Password (again)",
		cancel: "Close",
		submit: "Set password"
	},
	justVerifiedEmailDialog: {
		verified: "Email address verified",
		dismiss: "Dismiss"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Dismiss",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Change password",
		signOut: "Sign out"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Sign in",
		up: "Join"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "or"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Create",
		signIn: "Sign in",
		forgot: "Forgot password?",
		createAcc: "Create account"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Reset password",
		invalidEmail: "Invalid email"
	},
	loginButtonsBackToLoginLink: {
		back: "Cancel"
	},
	loginButtonsChangePassword: {
		submit: "Change password",
		cancel: "Cancel"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Sign in with",
		configure: "Configure",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Sign out"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "No login services configured"
	},
	loginFields: {
		usernameOrEmail: "Username or Email",
		username: "Username",
		email: "Email",
		password: "Password"
	},
	signupFields: {
		username: "Username",
		email: "Email",
		emailOpt: "Email (optional)",
		password: "Password",
		passwordAgain: "Password (again)"
	},
	changePasswordFields: {
		currentPassword: "Current Password",
		newPassword: "New Password",
		newPasswordAgain: "New Password (again)"
	},
	infoMessages : {
		emailSent: "Email sent",
		passwordChanged: "Password changed"
	},
	errorMessages: {
		genericTitle: "There was an error",
		userNotFound: "User not found",
		invalidEmail: "Invalid email",
		incorrectPassword: "Incorrect password",
		usernameTooShort: "Username must be at least 3 characters long",
		passwordTooShort: "Password must be at least 6 characters long",
		passwordsDontMatch: "Passwords don't match",
		newPasswordSameAsOld: "New and old passwords must be different",
		signupsForbidden: "Signups forbidden"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/es.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("es", {
	resetPasswordDialog: {
		title: "Restablece tu contraseña",
		newPassword: "Nueva contraseña",
		newPasswordAgain: "Nueva contraseña (otra vez)",
		cancel: "Cancelar",
		submit: "Guardar"
	},
	enrollAccountDialog: {
		title: "Escribe una contraseña",
		newPassword: "Nueva contraseña",
		newPasswordAgain: "Nueva contraseña (otra vez)",
		cancel: "Cerrar",
		submit: "Guardar contraseña"
	},
	justVerifiedEmailDialog: {
		verified: "Correo electrónico verificado",
		dismiss: "Cerrar"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Cerrar",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Cambiar contraseña",
		signOut: "Cerrar sesión"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Iniciar sesión",
		up: "registrarse"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "o"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Crear",
		signIn: "Iniciar sesión",
		forgot: "¿Ha olvidado su contraseña?",
		createAcc: "Registrarse"
	},
	forgotPasswordForm: {
		email: "Correo electrónico",
		reset: "Restablecer contraseña",
		invalidEmail: "Correo electrónico inválido"
	},
	loginButtonsBackToLoginLink: {
		back: "Cancelar"
	},
	loginButtonsChangePassword: {
		submit: "Cambiar contraseña",
		cancel: "Cancelar"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Inicia sesión con",
		configure: "Configurar",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Cerrar sesión"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "No hay ningún servicio configurado"
	},
	loginFields: {
		usernameOrEmail: "Usuario o correo electrónico",
		username: "Usuario",
		email: "Correo electrónico",
		password: "Contraseña"
	},
	signupFields: {
		username: "Usuario",
		email: "Correo electrónico",
		emailOpt: "Correo elect. (opcional)",
		password: "Contraseña",
		passwordAgain: "Contraseña (otra vez)"
	},
	changePasswordFields: {
		currentPassword: "Contraseña Actual",
		newPassword: "Nueva Contraseña",
		newPasswordAgain: "Nueva Contraseña (otra vez)"
	},
	infoMessages: {
		emailSent: "Email enviado",
		passwordChanged: "Contraseña modificada"
	},
	errorMessages: {
		genericTitle: "Ha ocurrido un error",
		userNotFound: "El usuario no existe",
		invalidEmail: "Correo electrónico inválido",
		incorrectPassword: "Contraseña incorrecta",
		usernameTooShort: "El nombre de usuario tiene que tener 3 caracteres como mínimo",
		passwordTooShort: "La contraseña tiene que tener 6 caracteres como mínimo",
		passwordsDontMatch: "Las contraseñas no son iguales",
		newPasswordSameAsOld: "La contraseña nueva y la actual no pueden ser iguales"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/ca.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ca", {
	resetPasswordDialog: {
		title: "Restablir la contrasenya",
		newPassword: "Nova contrasenya",
		newPasswordAgain: "Nova contrasenya (un altre cop)",
		cancel: "Cancel·lar",
		submit: "Guardar"
	},
	enrollAccountDialog: {
		title: "Escriu una contrasenya",
		newPassword: "Nova contrasenya",
		newPasswordAgain: "Nova contrasenya (un altre cop)",
		cancel: "Tancar",
		submit: "Guardar contrasenya"
	},
	justVerifiedEmailDialog: {
		verified: "Adreça electrònica verificada",
		dismiss: "Tancar"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Tancar",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Canviar contrasenya",
		signOut: "Tancar sessió"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Iniciar sessió",
		up: "Registrar-se"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "o bé"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Crear",
		signIn: "Iniciar sessió",
		forgot: "Ha oblidat la contrasenya?",
		createAcc: "Registrar-se"
	},
	forgotPasswordForm: {
		email: "Adreça electrònica",
		reset: "Restablir contrasenya",
		invalidEmail: "Adreça invàlida"
	},
	loginButtonsBackToLoginLink: {
		back: "Cancel·lar"
	},
	loginButtonsChangePassword: {
		submit: "Canviar contrasenya",
		cancel: "Cancel·lar"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Inicia sessió amb",
		configure: "Configurar"
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Tancar sessió"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "No hi ha cap servei configurat"
	},
	loginFields: {
		usernameOrEmail: "Usuari o correu electrònic",
		username: "Usuari",
		email: "Adreça electrònica",
		password: "Contrasenya"
	},
	signupFields: {
		username: "Usuari",
		email: "Adreça electrònica",
		emailOpt: "Adreça elect. (opcional)",
		password: "Contrasenya",
		passwordAgain: "Contrasenya (un altre cop)"
	},
	changePasswordFields: {
		currentPassword: "Contrasenya Actual",
		newPassword: "Nova Contrasenya",
		newPasswordAgain: "Nova Contrasenya (un altre cop)"
	},
	infoMessages: {
		emailSent: "Email enviat",
		passwordChanged: "Contrasenya canviada"
	},
	errorMessages: {
		genericTitle: "Hi ha hagut un error",
		userNotFound: "L'usuari no existeix",
		invalidEmail: "Adreça invàlida",
		incorrectPassword: "Contrasenya incorrecta",
		usernameTooShort: "El nom d'usuari ha de tenir 3 caracters com a mínim",
		passwordTooShort: "La contrasenya ha de tenir 6 caracters como a mínim",
		passwordsDontMatch: "Les contrasenyes no són iguals",
		newPasswordSameAsOld: "La contrasenya nova i l'actual no poden ser iguals"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/fr.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("fr", {
	resetPasswordDialog: {
		title: "Réinitialiser mon mot de passe",
		newPassword: "Nouveau mot de passe",
		newPasswordAgain: "Nouveau mot de passe (confirmation)",
		cancel: "Annuler",
		submit: "Définir le mot de passe"
	},
	enrollAccountDialog: {
		title: "Choisir un mot de passe",
		newPassword: "Nouveau mot de passe",
		newPasswordAgain: "Nouveau mot de passe (confirmation)",
		cancel: "Fermer",
		submit: "Définir le mot de passe"
	},
	justVerifiedEmailDialog: {
		verified: "L'adresse email a été vérifiée",
		dismiss: "Fermer"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Fermer",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Changer le mot de passe",
		signOut: "Déconnexion"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Connexion",
		up: "Inscription"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "ou"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Créer",
		signIn: "Connexion",
		forgot: "Mot de passe oublié ?",
		createAcc: "Inscription"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Réinitialiser le mot de passe",
		invalidEmail: "L'adresse email est invalide"
	},
	loginButtonsBackToLoginLink: {
		back: "Annuler"
	},
	loginButtonsChangePassword: {
		submit: "Changer le mot de passe",
		cancel: "Annuler"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Se connecter avec",
		configure: "Configurer",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Déconnexion"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Aucun service d'authentification n'est configuré"
	},
	loginFields: {
		usernameOrEmail: "Nom d'utilisateur ou email",
		username: "Nom d'utilisateur",
		email: "Email",
		password: "Mot de passe"
	},
	signupFields: {
		username: "Nom d'utilisateur",
		email: "Email",
		emailOpt: "Email (optionnel)",
		password: "Mot de passe",
		passwordAgain: "Mot de passe (confirmation)"
	},
	changePasswordFields: {
		currentPassword: "Mot de passe actuel",
		newPassword: "Nouveau mot de passe",
		newPasswordAgain: "Nouveau mot de passe (confirmation)"
	},
	infoMessages: {
		emailSent: "Email envoyé",
		passwordChanged: "Mot de passe modifié"
	},
	errorMessages: {
		genericTitle: "Il y avait une erreur",
		userNotFound: "Utilisateur non trouvé",
		invalidEmail: "L'adresse email est invalide",
		incorrectPassword: "Mot de passe incorrect",
		usernameTooShort: "Le nom d'utilisateur doit comporter au moins 3 caractères",
		passwordTooShort: "Le mot de passe doit comporter au moins 6 caractères",
		passwordsDontMatch: "Les mots de passe ne sont pas identiques",
		newPasswordSameAsOld: "Le nouveau et le vieux mot de passe doivent être différent"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/de.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("de", {
	resetPasswordDialog: {
		title: "Passwort zurücksetzen",
		newPassword: "Neues Passwort",
		newPasswordAgain: "Neues Passwort (wiederholen)",
		cancel: "Abbrechen",
		submit: "Passwort ändern"
	},
	enrollAccountDialog: {
		title: "Passwort wählen",
		newPassword: "Neues Passwort",
		newPasswordAgain: "Neues Passwort (wiederholen)",
		cancel: "Schließen",
		submit: "Passwort ändern"
	},
	justVerifiedEmailDialog: {
		verified: "Email Adresse verifiziert",
		dismiss: "Schließen"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Schließen"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Passwort ändern",
		signOut: "Abmelden"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Anmelden",
		up: "Registrieren"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "oder"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Erstellen",
		signIn: "Anmelden",
		forgot: "Passwort vergessen?",
		createAcc: "Account erstellen"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Passwort zurücksetzen",
		invalidEmail: "Ungültige Email Adresse"
	},
	loginButtonsBackToLoginLink: {
		back: "Abbrechen"
	},
	loginButtonsChangePassword: {
		submit: "Passwort ändern",
		cancel: "Abbrechen"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Anmelden mit",
		configure: "Konfigurieren",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Abmelden"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Keine Anmelde Services konfiguriert"
	},
	loginFields: {
		usernameOrEmail: "Benutzername oder Email",
		username: "Benutzername",
		email: "Email",
		password: "Passwort"
	},
	signupFields: {
		username: "Benutzername",
		email: "Email",
		emailOpt: "Email (freiwillig)",
		password: "Passwort",
		passwordAgain: "Passwort (wiederholen)"
	},
	changePasswordFields: {
		currentPassword: "Aktuelles Passwort",
		newPassword: "Neues Passwort",
		newPasswordAgain: "Neues Passwort (wiederholen)"
	},
	infoMessages : {
		sent: "Email gesendet",
		passwordChanged: "Passwort geändert"
	},
	errorMessages: {
		genericTitle: "Es gab einen Fehler",
		userNotFound: "Benutzer nicht gefunden",
		invalidEmail: "Ungültige Email Adresse",
		incorrectPassword: "Falsches Passwort",
		usernameTooShort: "Der Benutzername muss mindestens 3 Buchstaben lang sein",
		passwordTooShort: "Passwort muss mindestens 6 Zeichen lang sein",
		passwordsDontMatch: "Die Passwörter stimmen nicht überein",
		newPasswordSameAsOld: "Neue und aktuelle Passwörter müssen unterschiedlich sein"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/it.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("it", {
	resetPasswordDialog: {
		title: "Reimposta la password",
		newPassword: "Nuova password",
		newPasswordAgain: "Nuova password (di nuovo)",
		cancel: "Annulla",
		submit: "Imposta password"
	},
	enrollAccountDialog: {
		title: "Scegli una password",
		newPassword: "Nuova password",
		newPasswordAgain: "Nuova password (di nuovo)",
		cancel: "Chiudi",
		submit: "Imposta password"
	},
	justVerifiedEmailDialog: {
		verified: "Indirizzo email verificato",
		dismiss: "Chiudi"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Chiudi",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Cambia password",
		signOut: "Esci"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Accedi",
		up: "Registrati"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "oppure"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Crea",
		signIn: "Accedi",
		forgot: "Password dimenticata?",
		createAcc: "Crea un account"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Reimposta la password",
		invalidEmail: "Email non valida"
	},
	loginButtonsBackToLoginLink: {
		back: "Cancella"
	},
	loginButtonsChangePassword: {
		submit: "Cambia password",
		cancel: "Annulla"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Accedi con",
		configure: "Configura",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Esci"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Nessun servizio di accesso configurato"
	},
	loginFields: {
		usernameOrEmail: "Username o Email",
		username: "Username",
		email: "Email",
		password: "Password"
	},
	signupFields: {
		username: "Username",
		email: "Email",
		emailOpt: "Email (opzionale)",
		password: "Password",
		passwordAgain: "Password (di nuovo)"
	},
	changePasswordFields: {
		currentPassword: "Password corrente",
		newPassword: "Nuova password",
		newPasswordAgain: "Nuova password (di nuovo)"
	},
	infoMessages: {
		emailSent: "Email inviata",
		passwordChanged: "Password changed"
	},
	errorMessages: {
		genericTitle: "C'era un errore",
		userNotFound: "Username non trovato",
		invalidEmail: "Email non valida",
		incorrectPassword: "Password errata",
		usernameTooShort: "La Username deve essere almeno di 3 caratteri",
		passwordTooShort: "La Password deve essere almeno di 6 caratteri",
		passwordsDontMatch: "Le password non corrispondono",
		newPasswordSameAsOld: "Nuove e vecchie password devono essere diversi"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/pt-PT.i18n.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
ptPT = {
	resetPasswordDialog: {
		title: "Esqueci-me da palavra-passe",
		newPassword: "Nova palavra-passe",
		newPasswordAgain: "Nova palavra-passe (confirmacao)",
		cancel: "Cancelar",
		submit: "Alterar palavra-passe"
	},
	enrollAccountDialog: {
		title: "Introduza a nova palavra-passe",
		newPassword: "Nova palavra-passe",
		newPasswordAgain: "Nova palavra-passe (confirmacao)",
		cancel: "Fechar",
		submit: "Alterar palavra-passe"
	},
	justVerifiedEmailDialog: {
		verified: "E-mail verificado!",
		dismiss: "Ignorar"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Ignorar"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Mudar palavra-passe",
		signOut: "Sair"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Entrar",
		up: "Registar"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "ou"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Criar",
		signIn: "Entrar",
		forgot: "Esqueci-me da palavra-passe",
		createAcc: "Registar"
	},
	forgotPasswordForm: {
		email: "E-mail",
		reset: "Alterar palavra-passe",
		sent: "E-mail enviado",
		invalidEmail: "E-mail inválido"
	},
	loginButtonsBackToLoginLink: {
		back: "Cancelar"
	},
	loginButtonsChangePassword: {
		submit: "Mudar palavra-passe",
		cancel: "Cancelar"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Entrar com",
		configure: "Configurar"
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Sair"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Nenhum servico de login configurado"
	},
	loginFields: {
		usernameOrEmail: "Utilizador ou E-mail",
		username: "Utilizador",
		email: "E-mail",
		password: "Palavra-passe"
	},
	signupFields: {
		username: "Utilizador",
		email: "E-mail",
		emailOpt: "E-mail (opcional)",
		password: "Palavra-passe",
		passwordAgain: "Palavra-passe (confirmacão)"
	},
	changePasswordFields: {
		currentPassword: "Palavra-passe atual",
		newPassword: "Nova palavra-passe",
		newPasswordAgain: "Nova palavra-passe (confirmacao)"
	},
	infoMessages: {
		emailSent: "E-mail enviado",
		passwordChanged: "Palavra-passe alterada"
	},
	errorMessages: {
		genericTitle: "Houve um erro",
		usernameTooShort: "Utilizador precisa de ter mais de 3 caracteres",
		invalidEmail: "E-mail inválido",
		passwordTooShort: "Palavra-passe precisa ter mais de 6 caracteres",
		passwordsDontMatch: "As Palavras-passe estão diferentes",
		userNotFound: "Utilizador não encontrado",
		incorrectPassword: "Palavra-passe incorreta",
		newPasswordSameAsOld: "A nova palavra-passe tem de ser diferente da antiga"
	}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/pt-BR.i18n.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
ptBR = {
	resetPasswordDialog: {
		title: "Esqueceu sua senha?",
		newPassword: "Nova senha",
		newPasswordAgain: "Nova senha (confirmacao)",
		cancel: "Cancelar",
		submit: "Alterar senha"
	},
	enrollAccountDialog: {
		title: "Digite a nova senha",
		newPassword: "Nova senha",
		newPasswordAgain: "Nova senha (confirmacao)",
		cancel: "Fechar",
		submit: "Alterar senha"
	},
	justVerifiedEmailDialog: {
		verified: "E-mail verificado!",
		dismiss: "Ignorar"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Ignorar"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Mudar senha",
		signOut: "Sair"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Entrar",
		up: "Cadastrar"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "ou"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Criar",
		signIn: "Login",
		forgot: "Esqueceu sua senha?",
		createAcc: "Cadastrar"
	},
	forgotPasswordForm: {
		email: "E-mail",
		reset: "Alterar senha",
		invalidEmail: "E-mail inválido"
	},
	loginButtonsBackToLoginLink: {
		back: "Cancelar"
	},
	loginButtonsChangePassword: {
		submit: "Mudar senha",
		cancel: "Cancelar"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Logar com",
		configure: "Configurar",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Sair"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Nenhum servico de login configurado"
	},
	loginFields: {
		usernameOrEmail: "Usuário ou E-mail",
		username: "Usuário",
		email: "E-mail",
		password: "Senha"
	},
	signupFields: {
		username: "Usuário",
		email: "E-mail",
		emailOpt: "E-mail (opcional)",
		password: "Senha",
		passwordAgain: "Senha (confirmacão)"
	},
	changePasswordFields: {
		currentPassword: "Senha atual",
		newPassword: "Nova Senha",
		newPasswordAgain: "Nova Senha (confirmacao)"
	},
	infoMessages: {
		emailSent: "E-mail enviado",
		passwordChanged: "Senha alterada"
	},
	errorMessages: {
		genericTitle: "Houve um erro",
		userNotFound: "Usuário não encontrado",
		invalidEmail: "E-mail inválido",
		incorrectPassword: "Senha incorreta",
		usernameTooShort: "Usuário precisa ter mais de 3 caracteres",
		passwordTooShort: "Senha precisa ter mais de 6 caracteres",
		passwordsDontMatch: "Senhas estão diferentes",
		newPasswordSameAsOld: "A nova senha tem de ser diferente da antiga"
	}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/pt.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map('pt', ptPT);
i18n.map('pt-PT', ptPT);
i18n.map('pt-BR', ptBR);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/ru.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ru", {
	resetPasswordDialog: {
		title: "Сбросить пароль",
		newPassword: "Новый пароль",
		newPasswordAgain: "Новый пароль (еще раз)",
		cancel: "Отмена",
		submit: "Сохранить пароль"
	},
	enrollAccountDialog: {
		title: "Выбрать пароль",
		newPassword: "Новый пароль",
		newPasswordAgain: "Новый пароль (еще раз)",
		cancel: "Отмена",
		submit: "Сохранить пароль"
	},
	justVerifiedEmailDialog: {
		verified: "Email подтвержден",
		dismiss: "Закрыть"
	},
	loginButtonsMessagesDialog: {
			dismiss: "Закрыть"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Изменить пароль",
		signOut: "Выйти"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Войти",
		up: "Зарегистрироваться"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "или"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Создать",
		signIn: "Войти",
		forgot: "Забыли пароль?",
		createAcc: "Создать аккаунт"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Сбросить пароль",
		invalidEmail: "Некорректный email"
	},
	loginButtonsBackToLoginLink: {
		back: "Отмена"
	},
	loginButtonsChangePassword: {
		submit: "Изменить пароль",
		cancel: "Отмена"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Войти через",
		configure: "Настроить вход через",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Выйти"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Сервис для входа не настроен"
	},
	loginFields: {
		usernameOrEmail: "Имя пользователя или email",
		username: "Имя пользователя",
		email: "Email",
		password: "Пароль"
	},
	signupFields: {
		username: "Имя пользователя",
		email: "Email",
		emailOpt: "Email (необязательный)",
		password: "Пароль",
		passwordAgain: "Пароль (еще раз)"
	},
	changePasswordFields: {
		currentPassword: "Текущий пароль",
		newPassword: "Новый пароль",
		newPasswordAgain: "Новый пароль (еще раз)"
	},
	infoMessages : {
		sent: "Вам отправлено письмо",
		passwordChanged: "Пароль изменён"
	},
	errorMessages: {
		genericTitle: "Там была ошибка",
		userNotFound: "Пользователь не найден",
		invalidEmail: "Некорректный email",
		incorrectPassword: "Неправильный пароль",
		usernameTooShort: "Имя пользователя должно быть длиной не менее 3-х символов",
		passwordTooShort: "Пароль должен быть длиной не менее 6-ти символов",
		passwordsDontMatch: "Пароли не совпадают",
		newPasswordSameAsOld: "Новый и старый пароли должны быть разными"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/el.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("el", {
	resetPasswordDialog: {
		title: "Ακύρωση κωδικού",
		newPassword: "Νέος κωδικός",
		newPasswordAgain: "Νέος Κωδικός (ξανά)",
		cancel: "Ακύρωση",
		submit: "Ορισμός κωδικού"
	},
	enrollAccountDialog: {
		title: "Επιλέξτε κωδικό",
		newPassword: "Νέος κωδικός",
		newPasswordAgain: "Νέος Κωδικός (ξανά)",
		cancel: "Ακύρωση",
		submit: "Ορισμός κωδικού"
	},
	justVerifiedEmailDialog: {
		verified: "Ο λογαριασμός ηλεκτρονικού ταχυδρομείου έχει επιβεβαιωθεί",
		dismiss: "Κλείσιμο"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Κλείσιμο",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Αλλαγή κωδικού",
		signOut: "Αποσύνδεση"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Είσοδος",
		up: "Εγγραφή"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "ή"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Δημιουργία",
		signIn: "Είσοδος",
		forgot: "Ξεχάσατε τον κωδικό σας;",
		createAcc: "Δημιουργία λογαριασμού"
	},
	forgotPasswordForm: {
		email: "Ηλεκτρονικό ταχυδρομείο (email)",
		reset: "Ακύρωση κωδικού",
		invalidEmail: "Μη έγκυρος λογαριασμός ηλεκτρονικού ταχυδρομείου (email)"
	},
	loginButtonsBackToLoginLink: {
		back: "Επιστροφή"
	},
	loginButtonsChangePassword: {
		submit: "Αλλαγή κωδικού",
		cancel: "Ακύρωση"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Είσοδος με",
		configure: "Διαμόρφωση",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Αποσύνδεση"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Δεν έχουν διαμορφωθεί υπηρεσίες εισόδου"
	},
	loginFields: {
		usernameOrEmail: "Όνομα χρήστη ή Λογαριασμός Ηλεκτρονικού Ταχυδρομείου",
		username: "Όνομα χρήστη",
		email: "Ηλεκτρονικό ταχυδρομείο (email)",
		password: "Κωδικός"
	},
	signupFields: {
		username: "Όνομα χρήστη",
		email: "Ηλεκτρονικό ταχυδρομείο (email)",
		emailOpt: "Ηλεκτρονικό ταχυδρομείο (προαιρετικό)",
		password: "Κωδικός",
		passwordAgain: "Κωδικός (ξανά)"
	},
	changePasswordFields: {
		currentPassword: "Ισχύων Κωδικός",
		newPassword: "Νέος Κωδικός",
		newPasswordAgain: "Νέος Κωδικός (ξανά)"
	},
	infoMessages: {
		emailSent: "Το email έχει αποσταλεί",
		passwordChanged: "Password changed"
	},
	errorMessages: {
		genericTitle: "Υπήρξε ένα σφάλμα",
		userNotFound: "Ο χρήστης δεν βρέθηκε",
		invalidEmail: "Μη έγκυρος λογαριασμός ηλεκτρονικού ταχυδρομείου (email)",
		incorrectPassword: "Λάθος κωδικός",
		usernameTooShort: "Το όνομα χρήστη πρέπει να είναι τουλάχιστον 3 χαρακτήρες",
		passwordTooShort: "Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες",
		passwordsDontMatch: "Οι κωδικοί δεν ταιριάζουν",
		newPasswordSameAsOld: "Νέα και παλιά κωδικούς πρόσβασης πρέπει να είναι διαφορετική"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/ko.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ko", {
	resetPasswordDialog: {
		title: "비밀번호 초기화하기",
		newPassword: "새로운 비밀번호",
		newPasswordAgain: "새로운 비밀번호 (확인)",
		cancel: "취소",
		submit: "변경"
	},
	enrollAccountDialog: {
		title: "비밀번호를 입력해주세요",
		newPassword: "새로운 비밀번호",
		newPasswordAgain: "새로운 비밀번호 (확인)",
		cancel: "닫기",
		submit: "변경"
	},
	justVerifiedEmailDialog: {
		verified: "이메일 주소가 인증되었습니다",
		dismiss: "취소"
	},
	loginButtonsMessagesDialog: {
		dismiss: "취소",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "비밀번호 변경하기",
		signOut: "로그아웃"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "로그인",
		up: "계정 만들기"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "또는"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "만들기",
		signIn: "로그인",
		forgot: "비밀번호를 잊어버리셨나요?",
		createAcc: "계정 만들기"
	},
	forgotPasswordForm: {
		email: "이메일 주소",
		reset: "비밀번호 초기화하기",
		invalidEmail: "올바르지 않은 이메일 주소입니다"
	},
	loginButtonsBackToLoginLink: {
		back: "취소"
	},
	loginButtonsChangePassword: {
		submit: "비밀번호 변경하기",
		cancel: "취소"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "다음으로 로그인하기:",
		configure: "설정",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "로그아웃"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "사용 가능한 로그인 서비스가 없습니다"
	},
	loginFields: {
		usernameOrEmail: "사용자 이름 또는 이메일 주소",
		username: "사용자 이름",
		email: "이메일 주소",
		password: "비밀번호"
	},
	signupFields: {
		username: "사용자 이름",
		email: "이메일 주소",
		emailOpt: "이메일 주소 (선택)",
		password: "비밀번호",
		passwordAgain: "비밀번호 (확인)"
	},
	changePasswordFields: {
		currentPassword: "현재 비밀번호",
		newPassword: "새로운 비밀번호",
		newPasswordAgain: "새로운 비밀번호 (확인)"
	},
	infoMessages: {
		emailSent: "이메일이 발송되었습니다",
		passwordChanged: "비밀번호가 변경되었습니다"
	},
	errorMessages: {
		genericTitle: "오류가 발생했습니다",
		userNotFound: "찾을 수 없는 회원입니다",
		invalidEmail: "잘못된 이메일 주소",
		incorrectPassword: "비밀번호가 틀렸습니다",
		usernameTooShort: "사용자 이름은 최소 3글자 이상이어야 합니다",
		passwordTooShort: "비밀번호는 최소 6글자 이상이어야 합니다",
		passwordsDontMatch: "비밀번호가 같지 않습니다",
		newPasswordSameAsOld: "새 비밀번호와 기존 비밀번호는 달라야합니다"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/ar.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ar", {
	resetPasswordDialog: {
		title: "استرجع كلمة المرور",
		newPassword: "كلمة المرور الجديدة",
		newPasswordAgain: "أعد كتابة كلمة السر الجديدة",
		cancel: "إلغ",
		submit: "تم"
	},
	enrollAccountDialog: {
		title: "اختر كلمة سر",
		newPassword: "كلمة السر",
		newPasswordAgain: "أعد كتابة كلمة السر الجديدة",
		cancel: "أغلق",
		submit: "تم"
	},
	justVerifiedEmailDialog: {
		verified: "تم تأكيد البريد",
		dismiss:  "حسنًا"
	},
	loginButtonsMessagesDialog: {
		dismiss: "حسنًا"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "غير كلمة السر",
		signOut: "تسجيل الخروج"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "دخول",
		up: "إنشاء حساب"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "أو"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "أنشئ",
		signIn: "دخول",
		forgot: "نسيت كلمة السر؟",
		createAcc: "أنشئ حسابا"
	},
	forgotPasswordForm: {
		email: "البريد",
		reset: "إعادة تعين كلمة السر",
		invalidEmail: "البريد خاطئ"
	},
	loginButtonsBackToLoginLink: {
		back: "إلغ"
	},
	loginButtonsChangePassword: {
		submit: "غير كلمة السر",
		cancel: "إلغ"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "سجل الدخول عبر",
		configure: "تعيين"
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "اخرج"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "لا يوجد خدمة دخول مفعله"
	},
	loginFields: {
		usernameOrEmail: "اسم المستخدم او عنوان البريد",
		username: "اسم المستخدم",
		email: "البريد",
		password: "كلمة السر"
	},
	signupFields: {
		username: "اسم المستخدم",
		email: "البريد",
		emailOpt: "-اختياري- البريد",
		password: "كلمة السر",
		passwordAgain: "أعد كتابة كلمة السر"
	},
	changePasswordFields: {
		currentPassword: "كلمة السر الحالية",
		newPassword: "كلمة السر الجديدة",
		newPasswordAgain: "أعد كتابة كلمة السر الجديدة"
	},
	infoMessages : {
		emailSent: "تم الارسال",
		passwordChanged: "تمت إعادة تعيين كلمة السر"
	},
	errorMessages: {
		genericTitle: "كان هناك خطأ",
		userNotFound: "المستخدم غير موجود",
		invalidEmail: "بريد خاطئ",
		incorrectPassword: "كلمة السر خطأ",
		usernameTooShort: "اسم المستخدم لابد ان يكون علي الاقل ٣ حروف",
		passwordTooShort: "كلمة السر لابد ان تكون علي الاقل ٦ احرف",
		passwordsDontMatch: "كلمة السر غير متطابقة",
		newPasswordSameAsOld: "لابد من اختيار كلمة سر مختلفة عن السابقة",
		signupsForbidden: "التسجيل مغلق"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/pl.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("pl", {
	resetPasswordDialog: {
		title: "Resetuj hasło",
		newPassword: "Nowe hasło",
		newPasswordAgain: "Nowe hasło (powtórz)",
		cancel: "Anuluj",
		submit: "Ustaw hasło"
	},
	enrollAccountDialog: {
		title: "Wybierz hasło",
		newPassword: "Nowe hasło",
		newPasswordAgain: "Nowe hasło (powtórz)",
		cancel: "Zamknij",
		submit: "Ustaw hasło"
	},
	justVerifiedEmailDialog: {
		verified: "Adres email został zweryfikowany",
		dismiss: "Odrzuć"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Odrzuć"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Zmień hasło",
		signOut: "Wyloguj się"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Zaloguj się",
		up: "Zarejestruj się"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "lub"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Stwórz",
		signIn: "Zaloguj się ",
		forgot: "Nie pamiętasz hasła?",
		createAcc: "Utwórz konto"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Resetuj hasło",
		invalidEmail: "Niepoprawny email"
	},
	loginButtonsBackToLoginLink: {
		back: "Anuluj"
	},
	loginButtonsChangePassword: {
		submit: "Zmień hasło",
		cancel: "Anuluj"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Zaloguj się przez",
		configure: "Configure"
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Wyloguj się"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Nie skonfigurowano usługi logowania"
	},
	loginFields: {
		usernameOrEmail: "Nazwa użytkownika lub email",
		username: "Nazwa użytkownika",
		email: "Email",
		password: "Hasło"
	},
	signupFields: {
		username: "Nazwa użytkownika",
		email: "Email",
		emailOpt: "Email (opcjonalnie)",
		password: "Hasło",
		passwordAgain: "Hasło (powtórz)"
	},
	changePasswordFields: {
		currentPassword: "Obecne hasło",
		newPassword: "Nowe hasło",
		newPasswordAgain: "Nowe hasło (powtórz)"
	},
	infoMessages : {
		emailSent: "Wysłano email",
		passwordChanged: "Hasło zostało zmienione"
	},
	errorMessages: {
		genericTitle: "Wystąpił błąd",
		userNotFound: "Nie znaleziono użytkownika",
		invalidEmail: "Niepoprawny email",
		incorrectPassword: "Niepoprawne hasło",
		usernameTooShort: "Nazwa użytkowika powinna mieć przynajmniej 3 znaki",
		passwordTooShort: "Hasło powinno składać się przynajmnej z 6 znaków",
		passwordsDontMatch: "Hasło są różne",
		newPasswordSameAsOld: "Nowe hasło musi się różnić od starego",
		signupsForbidden: "Rejstracja wyłączona"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/zh-CN.i18n.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
zhCN = {
	resetPasswordDialog: {
		title: "重置密码",
		newPassword: "新密码",
		newPasswordAgain: "重复新密码",
		cancel: "取消",
		submit: "确定"
	},
	enrollAccountDialog: {
		title: "选择一个密码",
		newPassword: "新密码",
		newPasswordAgain: "重复新密码",
		cancel: "取消",
		submit: "确定"
	},
	justVerifiedEmailDialog: {
		verified: "Email地址验证",
		dismiss: "失败"
	},
	loginButtonsMessagesDialog: {
		dismiss: "失败"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "更改密码",
		signOut: "退出"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "登录",
		up: "注册"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "或"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "新建",
		signIn: "登陆",
		forgot: "忘记密码?",
		createAcc: "新建用户"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "重置密码",
		invalidEmail: "email格式不正确"
	},
	loginButtonsBackToLoginLink: {
		back: "取消"
	},
	loginButtonsChangePassword: {
		submit: "更改密码",
		cancel: "取消"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "登陆以",
		configure: "配置"
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "退出"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "没有配置登录服务"
	},
	loginFields: {
		usernameOrEmail: "用户名或者Email",
		username: "用户名",
		email: "Email",
		password: "密码"
	},
	signupFields: {
		username: "用户名",
		email: "Email",
		emailOpt: "Email (可选)",
		password: "密码",
		passwordAgain: "重复密码"
	},
	changePasswordFields: {
		currentPassword: "当前密码",
		newPassword: "新密码",
		newPasswordAgain: "重复新密码"
	},
	infoMessages: {
		emailSent: "发送Email",
		passwordChanged: "密码更改成功"
	},
	errorMessages: {
		genericTitle: "出現了一個錯誤",
		userNotFound: "用户不存在",
		invalidEmail: "Email格式不正确",
		incorrectPassword: "密码错误",
		usernameTooShort: "用户名必需大于3位",
		passwordTooShort: "密码必需大于6位",
		passwordsDontMatch: "密码输入不一致",
		newPasswordSameAsOld: "新密码和旧的不能一样",
		signupsForbidden: "没有权限"
	}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/zh-TW.i18n.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
zhTW = {
	resetPasswordDialog: {
		title: "重設密碼",
		newPassword: "新密碼",
		newPasswordAgain: "重複新密碼",
		cancel: "取消",
		submit: "確定"
	},
	enrollAccountDialog: {
		title: "選擇一個密碼",
		newPassword: "新密碼",
		newPasswordAgain: "重複新密碼",
		cancel: "取消",
		submit: "確定"
	},
	justVerifiedEmailDialog: {
		verified: "Email驗證",
		dismiss: "失敗"
	},
	loginButtonsMessagesDialog: {
		dismiss: "失敗"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "更改密碼",
		signOut: "登出"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "登入",
		up: "註冊"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "或"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "新建",
		signIn: "登入",
		forgot: "忘记密碼?",
		createAcc: "新建用户"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "重設密碼",
		invalidEmail: "email格式不正確"
	},
	loginButtonsBackToLoginLink: {
		back: "取消"
	},
	loginButtonsChangePassword: {
		submit: "更改密碼",
		cancel: "取消"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "登入以",
		configure: "設定"
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "退出"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "沒有設定登入服务"
	},
	loginFields: {
		usernameOrEmail: "用户名或者Email",
		username: "用户名",
		email: "Email",
		password: "密碼"
	},
	signupFields: {
		username: "用户名",
		email: "Email",
		emailOpt: "Email (可選)",
		password: "密碼",
		passwordAgain: "重複密碼"
	},
	changePasswordFields: {
		currentPassword: "目前密碼",
		newPassword: "新密碼",
		newPasswordAgain: "重複新密碼"
	},
	infoMessages: {
		emailSent: "發送Email",
		passwordChanged: "密碼更改成功"
	},
	errorMessages: {
		genericTitle: "出現了一個錯誤",
		userNotFound: "用户不存在",
		invalidEmail: "Email格式不正確",
		incorrectPassword: "密碼错误",
		usernameTooShort: "用户名必需大于3位",
		passwordTooShort: "密碼必需大于6位",
		passwordsDontMatch: "密碼输入不一致",
		newPasswordSameAsOld: "新密碼和舊的不能一樣",
		signupsForbidden: "沒有權限"
	}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/zh.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("zh", zhCN);
i18n.map("zh-CN", zhCN);
i18n.map("zh-TW", zhTW);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/nl.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("nl", {
	resetPasswordDialog: {
		title: "Wachtwoord resetten",
		newPassword: "Nieuw wachtwoord",
		newPasswordAgain: "Nieuw wachtwoord (opnieuw)",
		cancel: "Annuleren",
		submit: "Wachtwoord instellen"
	},
	enrollAccountDialog: {
		title: "Stel een wachtwoord in",
		newPassword: "Nieuw wachtwoord",
		newPasswordAgain: "Nieuw wachtwoord (opnieuw)",
		cancel: "Sluiten",
		submit: "Wachtwoord instellen"
	},
	justVerifiedEmailDialog: {
		verified: "E-mailadres geverifieerd",
		dismiss: "Sluiten"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Sluiten",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Wachtwoord veranderen",
		signOut: "Afmelden"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Aanmelden",
		up: "Registreren"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "of"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Aanmaken",
		signIn: "Aanmelden",
		forgot: "Wachtwoord vergeten?",
		createAcc: "Account aanmaken"
	},
	forgotPasswordForm: {
		email: "E-mailadres",
		reset: "Wachtwoord opnieuw instellen",
		invalidEmail: "Ongeldig e-mailadres"
	},
	loginButtonsBackToLoginLink: {
		back: "Annuleren"
	},
	loginButtonsChangePassword: {
		submit: "Wachtwoord veranderen",
		cancel: "Annuleren"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Aanmelden via",
		configure: "Instellen",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Afmelden"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Geen aanmelddienst ingesteld"
	},
	loginFields: {
		usernameOrEmail: "Gebruikersnaam of e-mailadres",
		username: "Gebruikersnaam",
		email: "E-mailadres",
		password: "Wachtwoord"
	},
	signupFields: {
		username: "Gebruikersnaam",
		email: "E-mailadres",
		emailOpt: "E-mailadres (niet verplicht)",
		password: "Wachtwoord",
		passwordAgain: "Wachtwoord (opnieuw)"
	},
	changePasswordFields: {
		currentPassword: "Huidig wachtwoord",
		newPassword: "Nieuw wachtwoord",
		newPasswordAgain: "Nieuw wachtwoord (opnieuw)"
	},
	infoMessages : {
		emailSent: "E-mail verstuurd",
		passwordChanged: "Wachtwoord veranderd"
	},
	errorMessages: {
		genericTitle: "Er is een fout opgetreden",
		userNotFound: "Gebruiker niet gevonden",
		invalidEmail: "Ongeldig e-mailadres",
		incorrectPassword: "Onjuist wachtwoord",
		usernameTooShort: "De gebruikersnaam moet minimaal uit 3 tekens bestaan",
		passwordTooShort: "Het wachtwoord moet minimaal uit 6 tekens bestaan",
		passwordsDontMatch: "De wachtwoorden komen niet overeen",
		newPasswordSameAsOld: "Het oude en het nieuwe wachtwoord mogen niet hetzelfde zijn",
		signupsForbidden: "Aanmeldingen niet toegestaan"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/ja.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ja", {
	resetPasswordDialog: {
		title: "パスワードを再設定する",
		newPassword: "新しいパスワード",
		newPasswordAgain: "新しいパスワード (確認)",
		cancel: "キャンセル",
		submit: "パスワードを設定"
	},
	enrollAccountDialog: {
		title: "パスワードを決める",
		newPassword: "新しいパスワード",
		newPasswordAgain: "新しいパスワード (確認)",
		cancel: "閉じる",
		submit: "パスワードを設定"
	},
	justVerifiedEmailDialog: {
		verified: "メールアドレス菅確認されました",
		dismiss: "閉じる"
	},
	loginButtonsMessagesDialog: {
		dismiss: "閉じる",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "パスワードを変える",
		signOut: "サインアウト"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "サインイン",
		up: "参加"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "または"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "作成",
		signIn: "サインイン",
		forgot: "パスワードを忘れましたか?",
		createAcc: "アカウントを作成"
	},
	forgotPasswordForm: {
		email: "メール",
		reset: "パスワードを再設定する",
		invalidEmail: "無効なメール"
	},
	loginButtonsBackToLoginLink: {
		back: "キャンセル"
	},
	loginButtonsChangePassword: {
		submit: "パスワードを変える",
		cancel: "キャンセル"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "サインインする",
		configure: "設定する",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "サインアウト"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "ログインサービスが設定されていません"
	},
	loginFields: {
		usernameOrEmail: "ユーザー名またはメール",
		username: "ユーザー名",
		email: "メール",
		password: "パスワード"
	},
	signupFields: {
		username: "ユーザー名",
		email: "メール",
		emailOpt: "メール (オプション)",
		password: "パスワード",
		passwordAgain: "パスワード (確認)"
	},
	changePasswordFields: {
		currentPassword: "現在のパスワード",
		newPassword: "新しいパスワード",
		newPasswordAgain: "新しいパスワード (確認)"
	},
	infoMessages : {
		emailSent: "メールを送りました",
		passwordChanged: "パスワードが変わりました"
	},
	errorMessages: {
		genericTitle: "エラーが発生しました",
		userNotFound: "ユーザーが見つかりません",
		invalidEmail: "無効なメール",
		incorrectPassword: "無効なパスワード",
		usernameTooShort: "ユーザー名は3文字以上でなければいけません",
		passwordTooShort: "パスワードは6文字以上でなければいけません",
		passwordsDontMatch: "パスワードが一致しません",
		newPasswordSameAsOld: "新しいパスワードは古いパスワードと違っていなければいけません",
		signupsForbidden: "サインアップが許可されませんでした"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/he.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("he", {
	resetPasswordDialog: {
		title: "איפוס סיסמא",
		newPassword: "סיסמא חדשה",
		newPasswordAgain: "סיסמא חדשה (שוב)",
		cancel: "ביטול",
		submit: "קביעת סיסמא"
	},
	enrollAccountDialog: {
		title: "בחירת סיסמא",
		newPassword: "סיסמא חדשה",
		newPasswordAgain: "סיסמא חדשה (שוב)",
		cancel: "סגירה",
		submit: "קביעת סיסמא"
	},
	justVerifiedEmailDialog: {
		verified: "כתובת דואר אלקטרוני אומתה",
		dismiss: "סגירה"
	},
	loginButtonsMessagesDialog: {
		dismiss: "סגירה",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "שינוי סיסמא",
		signOut: "יציאה"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "כניסה",
		up: "רישום"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "או"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "יצירה",
		signIn: "התחברות",
		forgot: "סיסמא נשכחה?",
		createAcc: "יצירת חשבון"
	},
	forgotPasswordForm: {
		email: "דואר אלקטרוני (אימייל)",
		reset: "איפוס סיסמא",
		invalidEmail: "כתובת דואר אלקטרוני לא חוקית"
	},
	loginButtonsBackToLoginLink: {
		back: "ביטול"
	},
	loginButtonsChangePassword: {
		submit: "שינוי סיסמא",
		cancel: "ביטול"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "התחברות עםh",
		configure: "הגדרות",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "התנתקות"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "שירותים התחברות נוספים לא הוגדרו"
	},
	loginFields: {
		usernameOrEmail: "שם משתמש או כתובת דואר אלקטרוני",
		username: "שם משתמש",
		email: "דואר אלקטרוני",
		password: "סיסמא"
	},
	signupFields: {
		username: "שם משתמש",
		email: "דואר אלקטרוני",
		emailOpt: "דואר אלקטרוני (לא חובה)",
		password: "סיסמא",
		passwordAgain: "סיסמא (שוב)"
	},
	changePasswordFields: {
		currentPassword: "סיסמא נוכחית",
		newPassword: "סיסמא חדשה",
		newPasswordAgain: "סיסמא חדשה (שוב)"
	},
	infoMessages : {
		emailSent: "דואר אלקטרוני נשלח",
		passwordChanged: "סיסמא שונתה"
	},
	errorMessages: {
		genericTitle: "תרעה שגיאה",
		userNotFound: "משתמש/ת לא קיים/מת",
		invalidEmail: "כתובת דואר אלקטרוני לא חוקי",
		incorrectPassword: "סיסמא שגויה",
		usernameTooShort: "שם משתמש חייב להיות בן 3 תוים לפחות",
		passwordTooShort: "סיסמא חייבת להיות בת 6 תווים לפחות",
		passwordsDontMatch: "סיסמאות לא תואמות",
		newPasswordSameAsOld: "סיסמא חדשה וישנה חייבות להיות שונות",
		signupsForbidden: "אין אפשרות לרישום"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/sv.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("sv", {
	resetPasswordDialog: {
		title: "Återställ ditt lösenord",
		newPassword: "Nytt lösenord",
		cancel: "Avbryt",
		submit: "Spara lösenord"
	},
	enrollAccountDialog: {
		title: "Välj ett lösenord",
		newPassword: "Nytt lösenord",
		cancel: "Stäng",
		submit: "Spara lösenord"
	},
	justVerifiedEmailDialog: {
		verified: "Epostadressen verifierades",
		dismiss: "Avfärda"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Avfärda",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Byt lösenord",
		signOut: "Logga ut"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Logga in",
		up: "Skapa konto"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "eller"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Skapa",
		signIn: "Logga in",
		forgot: "Glömt ditt lösenord?",
		createAcc: "Skapa konto"
	},
	forgotPasswordForm: {
		email: "E-postadress",
		reset: "Återställ lösenord",
		sent: "E-post skickat",
		invalidEmail: "Ogiltig e-postadress"
	},
	loginButtonsBackToLoginLink: {
		back: "Avbryt"
	},
	loginButtonsChangePassword: {
		submit: "Byt lösenord",
		cancel: "Avbryt"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Logga in med",
		configure: "Konfigurera",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Logga ut"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Inga inloggningstjänster har konfigurerats"
	},
	loginFields: {
		usernameOrEmail: "Användarnamn eller e-postadress",
		username: "Användarnamn",
		email: "E-postadress",
		password: "Lösenord"
	},
	signupFields: {
		username: "Användarnamn",
		email: "E-postadress",
		emailOpt: "E-postadress (valfritt)",
		password: "Lösenord",
		passwordAgain: "Upprepa lösenord"
	},
	changePasswordFields: {
		currentPassword: "Nuvarande lösenord",
		newPassword: "Nytt lösenord",
		newPasswordAgain: "Upprepa nytt lösenord"
	},
	infoMessages : {
		emailSent: "E-post skickat",
		passwordChanged: "Lösenord ändrat"
	},
	errorMessages: {
		genericTitle: "Ett fel har uppstått",
		userNotFound: "Ingen användare hittades",
		invalidEmail: "Ogiltig e-postadress",
		incorrectPassword: "Fel lösenord",
		usernameTooShort: "Användarnamnet måste vara minst 3 tecken långt",
		passwordTooShort: "Lösenordet bör vara längre än 6 tecken",
		passwordsDontMatch: "Lösenorden matchar inte",
		newPasswordSameAsOld: "Den nya och gamla lösenordet bör inte vara samma",
		signupsForbidden: "Sign up är inte tillåtet"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/uk.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map('uk', {
	resetPasswordDialog: {
		title: "Скинути пароль",
		newPassword: "Новий пароль",
		newPasswordAgain: "Новий пароль (ще раз)",
		cancel: "Скасувати",
		submit: "Зберегти пароль"
	},
	enrollAccountDialog: {
		title: "Обрати пароль",
		newPassword: "Новий пароль",
		newPasswordAgain: "Новий пароль (ще раз)",
		cancel: "Скасувати",
		submit: "Зберегти пароль"
	},
	justVerifiedEmailDialog: {
		verified: "Email підтверджено",
			dismiss: "Закрити"
	},
	loginButtonsMessagesDialog: {
			dismiss: "Закрити"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Змінити пароль",
		signOut: "Вийти"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Ввійти",
		up: "Зареєструватись"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "або"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Створити",
		signIn: "Ввійти",
		forgot: "Забули пароль?",
		createAcc: "Створити аккаунт"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Скинути пароль",
		invalidEmail: "Некорректный email"
	},
	loginButtonsBackToLoginLink: {
		back: "Скасувати"
	},
	loginButtonsChangePassword: {
		submit: "Змінити пароль",
		cancel: "Скасувати"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Ввійти через",
		configure: "Налаштувати вхід через",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Вийти"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Сервіс для входу не налаштований"
	},
	loginFields: {
		usernameOrEmail: "Им’я користувача або email",
		username: "Им’я користувача",
		email: "Email",
		password: "Пароль"
	},
	signupFields: {
		username: "Им’я користувача",
		email: "Email",
		emailOpt: "Email (необов’язковий)",
		password: "Пароль",
		passwordAgain: "Пароль (ще раз)"
	},
	changePasswordFields: {
		currentPassword: "Поточний пароль",
		newPassword: "Новий пароль",
		newPasswordAgain: "Новий пароль (ще раз)"
	},
	infoMessages : {
		sent: "Вам відправлено лист",
		passwordChanged: "Пароль змінено"
	},
	errorMessages: {
		genericTitle: "Там була помилка",
		userNotFound: "Користувача не знайдено",
		invalidEmail: "Некорректний email",
		incorrectPassword: "Невірний пароль",
		usernameTooShort: "Им’я користувача повинно бути довжиною не менше 3-ьох символів",
		passwordTooShort: "Пароль повинен бути довжиною не менше 6-ти символів",
		passwordsDontMatch: "Паролі не співпадають",
		newPasswordSameAsOld: "Новий та старий паролі повинні бути різними"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/fi.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("fi", {
	resetPasswordDialog: {
		title: "Palauta salasana",
		newPassword: "Uusi salasana",
		newPasswordAgain: "Uusi salasana (uudestaan)",
		cancel: "Peruuta",
		submit: "Aseta salasana"
	},
	enrollAccountDialog: {
		title: "Valitse salasana",
		newPassword: "Uusi salasana",
		newPasswordAgain: "Uusi salasana (uudestaan)",
		cancel: "Sulje",
		submit: "Aseta salasana"
	},
	justVerifiedEmailDialog: {
		verified: "Sähköpostiosoite vahvistettu",
		dismiss: "Sulje"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Sulje",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Vaihda salasana",
		signOut: "Kirjaudu ulos"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Kirjaudu",
		up: "Rekisteröidy"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "tai"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Luo",
		signIn: "Kirjaudu",
		forgot: "Unohditko salasanasi?",
		createAcc: "Luo tunnus"
	},
	forgotPasswordForm: {
		email: "Sähköpostiosoite",
		reset: "Palauta salasana",
		invalidEmail: "Virheellinen sähköpostiosoite"
	},
	loginButtonsBackToLoginLink: {
		back: "Peruuta"
	},
	loginButtonsChangePassword: {
		submit: "Vaihda salasana",
		cancel: "Peruuta"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Kirjaudu käyttäen",
		configure: "Konfiguroi",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Kirjaudu ulos"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Kirjautumispalveluita ei konfiguroituna"
	},
	loginFields: {
		usernameOrEmail: "Käyttäjätunnus tai sähköpostiosoite",
		username: "Käyttäjätunnus",
		email: "Sähköpostiosoite",
		password: "Salasana"
	},
	signupFields: {
		username: "Käyttäjätunnus",
		email: "Sähköpostiosoite",
		emailOpt: "Sähköposti (vapaaehtoinen)",
		password: "Salasana",
		passwordAgain: "Salasana (uudestaan)"
	},
	changePasswordFields: {
		currentPassword: "Nykyinen salasana",
		newPassword: "Uusi salasana",
		newPasswordAgain: "Uusi salasana (uudestaan)"
	},
	infoMessages : {
		emailSent: "Sähköposti lähetetty",
		passwordChanged: "Salasana vaihdettu"
	},
	errorMessages: {
		genericTitle: "Tapahtui virhe",
		userNotFound: "Käyttäjää ei löytynyt",
		invalidEmail: "Virheellinen sähköpostiosoite",
		incorrectPassword: "Virheellinen salasana",
		usernameTooShort: "Käyttäjätunnuksen on oltava vähintään 3 merkkiä pitkä",
		passwordTooShort: "Salasanan on oltava vähintään 6 merkkiä pitkä",
		passwordsDontMatch: "Salasanat eivät täsmää",
		newPasswordSameAsOld: "Uuden ja vanhan salasanan on oltava eri",
		signupsForbidden: "Rekisteröityminen estetty"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/vi.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("vi", {
	resetPasswordDialog: {
		title: "Đặt lại mật khẩu",
		newPassword: "Mật khẩu mới",
		newPasswordAgain: "Xác nhận mật khẩu mới",
		cancel: "Thoát",
		submit: "Lưu lại"
	},
	enrollAccountDialog: {
		title: "Cài đặt mật khẩu",
		newPassword: "Mật khẩu mới",
		newPasswordAgain: "Xác nhận mật khẩu mới",
		cancel: "Thoát",
		submit: "Lưu lại"
	},
	justVerifiedEmailDialog: {
		verified: "Địa chỉ Email đã được xác nhận.",
		dismiss: "Đóng"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Đóng",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Thay đổi mật khẩu",
		signOut: "Đăng xuất"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Đăng nhập",
		up: "Đăng ký"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "hoặc"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Tạo mới",
		signIn: "Đăng nhập",
		forgot: "Quên mật khẩu?",
		createAcc: "Khởi tạo tài khoản"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Cài lại mật khẩu",
		invalidEmail: "Email không hợp lệ"
	},
	loginButtonsBackToLoginLink: {
		back: "Thoát"
	},
	loginButtonsChangePassword: {
		submit: "Lưu lại",
		cancel: "Thoát"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Đăng nhập bằng",
		configure: "Cấu hình",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Đăng xuất"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Không có dịch vụ nào được cấu hình"
	},
	loginFields: {
		usernameOrEmail: "Tên đăng nhập hoặc Email",
		username: "Tên đăg nhập",
		email: "Email",
		password: "Mật khẩu"
	},
	signupFields: {
		username: "Tên đăng nhập",
		email: "Email",
		emailOpt: "Email (Không bắt buộc)",
		password: "Mật khẩu",
		passwordAgain: "Xác nhận mật khẩu"
	},
	changePasswordFields: {
		currentPassword: "Mật khẩu hiện tại",
		newPassword: "Mật khẩu mới",
		newPasswordAgain: "Xác nhận mật khẩu mới"
	},
	infoMessages : {
		emailSent: "Gửi Email",
		passwordChanged: "Mật khẩu đã được thay đổi"
	},
	errorMessages: {
		genericTitle: "Có lỗi xảy ra",
		userNotFound: "Người dùng không tồn tại",
		invalidEmail: "Email không hợp lệ",
		incorrectPassword: "Sai mật khẩu",
		usernameTooShort: "Tên đăng nhập phải có ít nhất 3 ký tự",
		passwordTooShort: "Mật khẩu phải có ít nhất 6 ký tự",
		passwordsDontMatch: "Xác nhận mật khẩu không khớp",
		newPasswordSameAsOld: "Mật khẩu mới và cũ phải khác nhau",
		signupsForbidden: "Tạm khoá đăng ký"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/sk.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map('sk', {
	resetPasswordDialog: {
		title: 'Obnovenie hesla',
		newPassword: 'Nové heslo',
		newPasswordAgain: 'Nové heslo (opakujte)',
		cancel: 'Zrušiť',
		submit: 'Zmeniť heslo'
	},
	enrollAccountDialog: {
		title: 'Nastaviť heslo',
		newPassword: 'Nové heslo',
		newPasswordAgain: 'Nové heslo (opakujte)',
		cancel: 'Zatvoriť',
		submit: 'Nastaviť heslo'
	},
	justVerifiedEmailDialog: {
		verified: 'Emailová adresa overená',
		dismiss: 'Zavrieť'
	},
	loginButtonsMessagesDialog: {
		dismiss: 'Zrušiť'
	},
	loginButtonsLoggedInDropdownActions: {
		password: 'Zmeniť heslo',
		signOut: 'Odhlásiť'
	},
	loginButtonsLoggedOutDropdown: {
		signIn: 'Prihlásenie',
		up: 'Registrovať'
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: 'alebo'
	},
	loginButtonsLoggedOutPasswordService: {
		create: 'Vytvoriť',
		signIn: 'Prihlásiť',
		forgot: 'Zabudli ste heslo?',
		createAcc: 'Vytvoriť účet'
	},
	forgotPasswordForm: {
		email: 'Email',
		reset: 'Obnoviť heslo',
		invalidEmail: 'Nesprávný email'
	},
	loginButtonsBackToLoginLink: {
		back: 'Späť'
	},
	loginButtonsChangePassword: {
		submit: 'Zmeniť heslo',
		cancel: 'Zrušiť'
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: 'Prihlasiť s',
		configure: 'Nastaviť'
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: 'Odhlásiť'
	},
	loginButtonsLoggedOut: {
		noLoginServices: 'Žiadne prihlasovacie služby'
	},
	loginFields: {
		usernameOrEmail: 'Užívateľské meno alebo email',
		username: 'Užívateľské meno',
		email: 'Email',
		password: 'Heslo'
	},
	signupFields: {
		username: 'Užívateľské meno',
		email: 'Email',
		emailOpt: 'Email (voliteľné)',
		password: 'Heslo',
		passwordAgain: 'Heslo (opakujte)'
	},
	changePasswordFields: {
		currentPassword: 'Vaše heslo',
		newPassword: 'Nové heslo',
		newPasswordAgain: 'Nové heslo (opakujte)'
	},
	infoMessages: {
		emailSent: 'Email odoslaný',
		passwordChanged: 'Heslo zmenené'
	},
	errorMessages: {
		genericTitle: 'Nastala chyba',
		userNotFound: 'Užívateľ sa nenašiel',
		invalidEmail: 'Nesprávný email',
		incorrectPassword: 'Nesprávne heslo',
		usernameTooShort: 'Užívateľské meno musi obsahovať minimálne 3 znaky',
		passwordTooShort: 'Heslo musi obsahovať minimálne 6 znakov',
		passwordsDontMatch: 'Hesla sa nezhodujú',
		newPasswordSameAsOld: 'Staré a nové hesla sa nezhodujú',
		signupsForbidden: 'Prihlasovanie je zakázané'
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/be.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map('be', {
	resetPasswordDialog: {
		title: "Скасаваць пароль",
		newPassword: "Новы пароль",
		newPasswordAgain: "Новы пароль (яшче раз)",
		cancel: "Скасаваць",
		submit: "Захаваць пароль"
	},
	enrollAccountDialog: {
		title: "Выбраць пароль",
		newPassword: "Новы пароль",
		newPasswordAgain: "Новы пароль (яшче раз)",
		cancel: "Скасаваць",
		submit: "Захаваць пароль"
	},
	justVerifiedEmailDialog: {
		verified: "Email пацьверджаны",
		dismiss: "Закрыць"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Закрыць"
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Зьмяніць пароль",
		signOut: "Выйсьці"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Увайсьці",
		up: "Зарэгістравацца"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "або"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Стварыць",
		signIn: "Увайсьці",
		forgot: "Забылі пароль?",
		createAcc: "Стварыць акаўнт"
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Ськінуць пароль",
		invalidEmail: "Некарэктны email"
	},
	loginButtonsBackToLoginLink: {
		back: "Скасаваць"
	},
	loginButtonsChangePassword: {
		submit: "Зьмяніць пароль",
		cancel: "Скасаваць"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Увайсьці праз",
		configure: "Наладзіць уваход праз",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Выйсьці"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Сервіс для ўваходу не наладжаны"
	},
	loginFields: {
		usernameOrEmail: "Імя карыстальніка або email",
		username: "Імя карыстальніка",
		email: "Email",
		password: "Пароль"
	},
	signupFields: {
		username: "Імя карыстальніка",
		email: "Email",
		emailOpt: "Email (неабавязковы)",
		password: "Пароль",
		passwordAgain: "Пароль (яшче раз)"
	},
	changePasswordFields: {
		currentPassword: "Цяперашні пароль",
		newPassword: "Новы пароль",
		newPasswordAgain: "Новы пароль (яшче раз)"
	},
	infoMessages : {
		sent: "Вам высланы ліст",
		passwordChanged: "Пароль зьменены"
	},
	errorMessages: {
		genericTitle: "Там была памылка",
		userNotFound: "Карыстальнік не знойдзены",
		invalidEmail: "Некарэктны email",
		incorrectPassword: "Няверны пароль",
		usernameTooShort: "Імя карыстальніка павінна быць даўжынёю не меней 3-ох літараў",
		passwordTooShort: "Пароль павінна быць даўжынёю не меней 6-ці літараў",
		passwordsDontMatch: "Паролі не аднолькавыя",
		newPasswordSameAsOld: "Новы і стары паролі павінны быць рознымі"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/fa.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("fa", {
	resetPasswordDialog: {
		title: "رمز عبور خود را تنظیم مجدد",
		newPassword: "رمز عبور جدید",
		newPasswordAgain: "رمز عبور (دوباره)",
		cancel: "لغو",
		submit: "تنظیم رمز عبور"
	},
	enrollAccountDialog: {
		title: "یک رمز عبور انتخاب کنید",
		newPassword: "رمز عبور جدید",
		newPasswordAgain: "رمز عبور (دوباره)",
		cancel: "نزدیک",
		submit: "تنظیم رمز عبور"
	},
	justVerifiedEmailDialog: {
		verified: "آدرس ایمیل تایید",
		dismiss: "پنهان کن"
	},
	loginButtonsMessagesDialog: {
		dismiss: "پنهان کن",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "تغییر رمز عبور",
		signOut: "خروج"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "ورود",
		up: "بپیوندید"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "یا"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "ايجاد كردن",
		signIn: "ورود",
		forgot: "رمز عبور را فراموش کرده اید؟",
		createAcc: "ایجاد حساب کاربری"
	},
	forgotPasswordForm: {
		email: "ایمیل",
		reset: "تنظیم مجدد رمز ورود",
		invalidEmail: "ایمیل نامعتبر"
	},
	loginButtonsBackToLoginLink: {
		back: "لغو"
	},
	loginButtonsChangePassword: {
		submit: "تغییر رمز عبور",
		cancel: "لغو"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "ورود به سیستم با",
		configure: "پیکربندی",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "خروج"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "بدون خدمات پیکربندی ورود"
	},
	loginFields: {
		usernameOrEmail: "نام کاربری یا پست الکترونیک",
		username: "نام کاربری",
		email: "ایمیل",
		password: "رمز عبور"
	},
	signupFields: {
		username: "نام کاربری",
		email: "ایمیل",
		emailOpt: "ایمیل اختیاری ",
		password: "رمز عبور",
			passwordAgain: "رمز عبور دوباره "
	},
		changePasswordFields: {
		currentPassword: "رمز عبور فعلی",
		newPassword: "رمز عبور جدید",
		newPasswordAgain:  "رمز عبر (دوباره"
	},
		infoMessages : {
		emailSent: "ایمیل ارسال",
		passwordChanged: "رمز عبور تغییر کرد"
	},
		errorMessages: {
		genericTitle: "یک خطای وجود دارد",
	userNotFound: "کاربر پیدا نشد",
	invalidEmail: "ایمیل نامعتبر",
	incorrectPassword: "رمز عبور اشتباه",
	usernameTooShort: "نام کاربری حداقل باید 3 کاراکتر باشد",
	passwordTooShort: "رمز عبور باید حداقل 6 کاراکتر باشد",
	passwordsDontMatch: "کلمه عبور هماهنگ نیست",
	newPasswordSameAsOld: "کلمه عبور جدید و قدیمی باید متفاوت باشد",
	signupsForbidden: "ثبت نام ممنوع"
	}

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/sr-Cyrl.i18n.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
srCyrl = {
	resetPasswordDialog: {
		title: "Ресетуј своју лозинку",
		newPassword: "Нова лозинка",
		newPasswordAgain: "Нова Лозинка (поново)",
		cancel: "Откажи",
		submit: "Постави лозинку"
	},
	enrollAccountDialog: {
		title: "Одабери лозинку",
		newPassword: "Нова лозинка",
		newPasswordAgain: "Нова Лозинка (поново)",
		cancel: "Затвори",
		submit: "Постави лозинку"
	},
	justVerifiedEmailDialog: {
		verified: "Адреса еПоште је проверена",
		dismiss: "Одбаци"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Одбаци",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Промени лозинку",
		signOut: "Одјави се"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Пријави се",
		up: "Придружи се"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "или"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Креирај",
		signIn: "Пријави се",
		forgot: "Заборавили сте лозинку?",
		createAcc: "Креирај налог"
	},
	forgotPasswordForm: {
		email: "еАдреса",
		reset: "Ресетуј лозинку",
		invalidEmail: "Неправилна еАдреса"
	},
	loginButtonsBackToLoginLink: {
		back: "Откажи"
	},
	loginButtonsChangePassword: {
		submit: "Промени лозинку",
		cancel: "Откажи"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Пријави се са",
		configure: "Подеси",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Одјави се"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Пријавни сервиси нису подешени"
	},
	loginFields: {
		usernameOrEmail: "Корисничко име или еАдреса",
		username: "Корисничко име",
		email: "еАдреса",
		password: "Лозинка"
	},
	signupFields: {
		username: "Лозинка",
		email: "еАдреса",
		emailOpt: "еАдреса (опционо)",
		password: "Лозинка",
		passwordAgain: "Лозинка (поново)"
	},
	changePasswordFields: {
		currentPassword: "Тренутна Лозинка",
		newPassword: "Нова Лозинка",
		newPasswordAgain: "Нова Лозинка (поново)"
	},
	infoMessages : {
		emailSent: "еПорука је послата",
		passwordChanged: "Лозинка је промењена"
	},
	errorMessages: {
		genericTitle: "Појавила се једна грешка",
		userNotFound: "Корисник није пронађен",
		invalidEmail: "Неправилна еАдреса",
		incorrectPassword: "Нетачна лозинка",
		usernameTooShort: "Корисничко име мора бити најмање 3 знака дуго",
		passwordTooShort: "Лозинка мора бити најмање 6 знакова дуга",
		passwordsDontMatch: "Лозинке се не поклапају",
		newPasswordSameAsOld: "Нова и стара лозинка морају бити различите",
		signupsForbidden: "Пријаве забрањене"
	}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/sr-Latn.i18n.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
srLatn = {
	resetPasswordDialog: {
		title: "Resetuj svoju lozinku",
		newPassword: "Nova lozinka",
		newPasswordAgain: "Nova Lozinka (ponovo)",
		cancel: "Otkaži",
		submit: "Postavi lozinku"
	},
	enrollAccountDialog: {
		title: "Odaberi lozinku",
		newPassword: "Nova lozinka",
		newPasswordAgain: "Nova Lozinka (ponovo)",
		cancel: "Zatvori",
		submit: "Postavi loziknu"
	},
	justVerifiedEmailDialog: {
		verified: "Adresa ePošte je proverena",
		dismiss: "Odbaci"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Odbaci",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Promeni lozinku",
		signOut: "Odjavi se"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Prijavi se",
		up: "Pridruži se"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "ili"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Kreiraj",
		signIn: "Prijavi se",
		forgot: "Zaboravili ste lozinku?",
		createAcc: "Kreiraj nalog"
	},
	forgotPasswordForm: {
		email: "eAdresa",
		reset: "Resetuj lozinku",
		invalidEmail: "Nepravilna eAdresa"
	},
	loginButtonsBackToLoginLink: {
		back: "Otkaži"
	},
	loginButtonsChangePassword: {
		submit: "Promeni lozinku",
		cancel: "Otkaži"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Prijavi se sa",
		configure: "Podesi",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Odjavi se"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Prijavni servisi nisu podešeni"
	},
	loginFields: {
		usernameOrEmail: "Korisničko ime ili eAdresa",
		username: "Korisničko ime",
		email: "eAdresa",
		password: "Lozinka"
	},
	signupFields: {
		username: "Lozinka",
		email: "eAdresa",
		emailOpt: "eAdresa (opciono)",
		password: "Lozinka",
		passwordAgain: "Lozinka (ponovo)"
	},
	changePasswordFields: {
		currentPassword: "Trenutna Lozinkа",
		newPassword: "Nova Lozinka",
		newPasswordAgain: "Nova Lozinka (ponovo)"
	},
	infoMessages : {
		emailSent: "ePoruka je poslata",
		passwordChanged: "Lozinka je promenjena"
	},
	errorMessages: {
		genericTitle: "Pojavila se jedna greška",
		userNotFound: "Korisnik nije pronađen",
		invalidEmail: "Nepravilna eAdresa",
		incorrectPassword: "Netačna lozinka",
		usernameTooShort: "Korisničko ime mora biti najmanje 3 znaka dugo",
		passwordTooShort: "Lozinka mora biti najmanje 6 znakova duga",
		passwordsDontMatch: "Lozinke se ne poklapaju",
		newPasswordSameAsOld: "Nova i stara lozinka moraju biti različite",
		signupsForbidden: "Prijave zabranjene"
	}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/sr.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("sr", srCyrl);
i18n.map("sr-Cyrl", srCyrl);
i18n.map("sr-Latn", srLatn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n/hu.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("hu", {
	resetPasswordDialog: {
		title: "Új jelszó választása",
		newPassword: "Új jelszó",
		newPasswordAgain: "Új jelszó (újra)",
		cancel: "Mégsem",
		submit: "Tovább"
	},
	enrollAccountDialog: {
		title: "Jelszó választása",
		newPassword: "Új jelszó",
		newPasswordAgain: "Új jelszó (újra)",
		cancel: "Mégsem",
		submit: "Tovább"
	},
	justVerifiedEmailDialog: {
		verified: "Email cím megerősítve",
		dismiss: "Ok"
	},
	loginButtonsMessagesDialog: {
		dismiss: "Ok",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Jelszó módosítása",
		signOut: "Kijelentkezés"
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Bejelentkezés",
		up: "Regisztráció"
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "vagy"
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Regisztráció",
		signIn: "Bejelentkezés",
		forgot: "Elfelejtetted a jelszavadat?",
		createAcc: "Regisztráció"
	},
	forgotPasswordForm: {
		email: "Email cím",
		reset: "Jelszó visszaállítása",
		invalidEmail: "Érvénytelen email cím"
	},
	loginButtonsBackToLoginLink: {
		back: "Mégsem"
	},
	loginButtonsChangePassword: {
		submit: "Módosít",
		cancel: "Mégsem"
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Bejelentkezés: ",
		configure: "Beállítás",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Kijelentkezés"
	},
	loginButtonsLoggedOut: {
		noLoginServices: "Nincs bejelentkezési szolgáltatás beállítva"
	},
	loginFields: {
		usernameOrEmail: "Felhasználónév vagy Email cím",
		username: "Felhasználónév",
		email: "Email cím",
		password: "Jelszó"
	},
	signupFields: {
		username: "Felhasználónév",
		email: "Email cím",
		emailOpt: "Email cím (nem kötelező)",
		password: "Jelszó",
		passwordAgain: "Jelszó (újra)"
	},
	changePasswordFields: {
		currentPassword: "Jelenlegi jelszó",
		newPassword: "Új jelszó",
		newPasswordAgain: "Új jelszó (újra)"
	},
	infoMessages : {
		emailSent: "Email elküldve",
		passwordChanged: "Jelszó megváltoztatva"
	},
	errorMessages: {
		genericTitle: "Hiba történt",
		userNotFound: "Nem létező felhasználó",
		invalidEmail: "Érvénytelen email cím",
		incorrectPassword: "Hibás jelszó",
		usernameTooShort: "A felhasználónévnek legalább 3 karakter hosszúnak kell lennie",
		passwordTooShort: "A jelszónak legalább 6 karakter hosszúnak kell lennie",
		passwordsDontMatch: "A jelszavak nem egyeznek",
		newPasswordSameAsOld: "Az új jelszónak el kell térnie a régi jelszótól",
		signupsForbidden: "A regisztráció le van tiltva"
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/i18n.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.setDefaultLanguage('en')

accountsUIBootstrap3 = {
	setLanguage: function (lang) {
		return i18n.setLanguage(lang)
	},
	getLanguage: function () {
		return i18n.getLanguage()
	},
	map: function (lang, obj) {
		return i18n.map(lang, obj)
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/template.login_buttons.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("_loginButtons");
Template["_loginButtons"] = new Template("Template._loginButtons", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n\t\t", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("loggingIn"));
    }, function() {
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedIn")), "\n\t\t" ];
    }), "\n\t" ];
  }, function() {
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOut")), "\n\t" ];
  });
}));

Template.__checkName("_loginButtonsLoggedIn");
Template["_loginButtonsLoggedIn"] = new Template("Template._loginButtonsLoggedIn", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdown"));
}));

Template.__checkName("_loginButtonsLoggedOut");
Template["_loginButtonsLoggedOut"] = new Template("Template._loginButtonsLoggedOut", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("services"));
  }, function() {
    return [ " \n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("configurationLoaded"));
    }, function() {
      return [ "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("dropdown"));
      }, function() {
        return [ " \n\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutDropdown")), "\n\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t", Spacebars.With(function() {
          return Spacebars.call(view.lookup("singleService"));
        }, function() {
          return [ " \n\t\t\t\t\t", Blaze.Unless(function() {
            return Spacebars.call(view.lookup("logginIn"));
          }, function() {
            return [ "\n\t\t\t\t\t\t", HTML.DIV({
              class: "navbar-form"
            }, "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];
          }), "\n\t\t\t\t" ];
        }), "\n\t\t\t" ];
      }), "\n\t\t" ];
    }), "\n\t" ];
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "no-services"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOut.noLoginServices");
    })), "\n\t" ];
  });
}));

Template.__checkName("_loginButtonsMessages");
Template["_loginButtonsMessages"] = new Template("Template._loginButtonsMessages", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("errorMessage"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "alert alert-danger"
    }, Blaze.View("lookup:errorMessage", function() {
      return Spacebars.mustache(view.lookup("errorMessage"));
    })), "\n\t" ];
  }), "\n\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("infoMessage"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "alert alert-success no-margin"
    }, Blaze.View("lookup:infoMessage", function() {
      return Spacebars.mustache(view.lookup("infoMessage"));
    })), "\n\t" ];
  }) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/template.login_buttons_single.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("_loginButtonsLoggedOutSingleLoginButton");
Template["_loginButtonsLoggedOutSingleLoginButton"] = new Template("Template._loginButtonsLoggedOutSingleLoginButton", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("configured"));
  }, function() {
    return [ "\n\t\t", HTML.BUTTON({
      class: function() {
        return [ "login-button btn btn-block btn-", Spacebars.mustache(view.lookup("capitalizedName")) ];
      }
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutSingleLoginButton.signInWith");
    }), " ", Blaze.View("lookup:capitalizedName", function() {
      return Spacebars.mustache(view.lookup("capitalizedName"));
    })), "\n\t" ];
  }, function() {
    return [ "\n\t\t", HTML.BUTTON({
      class: "login-button btn btn-block configure-button btn-danger"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutSingleLoginButton.configure");
    }), " ", Blaze.View("lookup:capitalizedName", function() {
      return Spacebars.mustache(view.lookup("capitalizedName"));
    })), "\n\t" ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/template.login_buttons_dropdown.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("_loginButtonsLoggedInDropdown");
Template["_loginButtonsLoggedInDropdown"] = new Template("Template._loginButtonsLoggedInDropdown", (function() {
  var view = this;
  return HTML.LI({
    id: "login-dropdown-list",
    class: "dropdown"
  }, "\n\t\t", HTML.A({
    class: "dropdown-toggle",
    "data-toggle": "dropdown"
  }, "\n\t\t\t", Blaze.View("lookup:displayName", function() {
    return Spacebars.mustache(view.lookup("displayName"));
  }), "\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("user_profile_picture"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("."));
      },
      width: "30px",
      height: "30px",
      class: "img-circle",
      alt: "#"
    }), "\n\t\t\t" ];
  }), "\n\t\t\t", HTML.Raw('<b class="caret"></b>'), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "dropdown-menu"
  }, "\n\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("inMessageOnlyFlow"));
  }, function() {
    return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t\t\t" ];
  }, function() {
    return [ "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("inChangePasswordFlow"));
    }, function() {
      return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsChangePassword")), "\n\t\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdownActions")), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\t");
}));

Template.__checkName("_loginButtonsLoggedInDropdownActions");
Template["_loginButtonsLoggedInDropdownActions"] = new Template("Template._loginButtonsLoggedInDropdownActions", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("additionalLoggedInDropdownActions"));
  }, function() {
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsAdditionalLoggedInDropdownActions")), "\n\t" ];
  }), "\n\n\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("allowChangingPassword"));
  }, function() {
    return [ "\n\t\t", HTML.BUTTON({
      class: "btn btn-default btn-block",
      id: "login-buttons-open-change-password"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedInDropdownActions.password");
    })), "\n\t" ];
  }), "\n\n\t", HTML.BUTTON({
    class: "btn btn-block btn-primary",
    id: "login-buttons-logout"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedInDropdownActions.signOut");
  })) ];
}));

Template.__checkName("_loginButtonsLoggedOutDropdown");
Template["_loginButtonsLoggedOutDropdown"] = new Template("Template._loginButtonsLoggedOutDropdown", (function() {
  var view = this;
  return HTML.LI({
    id: "login-dropdown-list",
    class: "dropdown"
  }, "\n\t\t", HTML.A({
    class: "dropdown-toggle",
    "data-toggle": "dropdown"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutDropdown.signIn");
  }), Blaze.Unless(function() {
    return Spacebars.call(view.lookup("forbidClientAccountCreation"));
  }, function() {
    return [ " / ", Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutDropdown.up");
    }) ];
  }), " ", HTML.Raw('<b class="caret"></b>')), "\n\t\t", HTML.DIV({
    class: "dropdown-menu"
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutAllServices")), "\n\t\t"), "\n\t");
}));

Template.__checkName("_loginButtonsLoggedOutAllServices");
Template["_loginButtonsLoggedOutAllServices"] = new Template("Template._loginButtonsLoggedOutAllServices", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("services"));
  }, function() {
    return [ "\n\t", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("hasPasswordService"));
    }, function() {
      return [ "\n\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t" ];
    }), "\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("isPasswordService"));
    }, function() {
      return [ "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("hasOtherServices"));
      }, function() {
        return [ " \n\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordServiceSeparator")), "\n\t\t\t" ];
      }), "\n\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordService")), "\n\t\t" ];
    }, function() {
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n\t\t" ];
    }), "\n\t" ];
  });
}));

Template.__checkName("_loginButtonsLoggedOutPasswordServiceSeparator");
Template["_loginButtonsLoggedOutPasswordServiceSeparator"] = new Template("Template._loginButtonsLoggedOutPasswordServiceSeparator", (function() {
  var view = this;
  return HTML.DIV({
    class: "or"
  }, HTML.Raw('\n\t\t<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n\t\t'), HTML.SPAN({
    class: "or-text"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordServiceSeparator.or");
  })), HTML.Raw('\n\t\t<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n\t'));
}));

Template.__checkName("_loginButtonsLoggedOutPasswordService");
Template["_loginButtonsLoggedOutPasswordService"] = new Template("Template._loginButtonsLoggedOutPasswordService", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("inForgotPasswordFlow"));
  }, function() {
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("_forgotPasswordForm")), "\n\t" ];
  }, function() {
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("fields"));
    }, function() {
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n\t\t" ];
    }), "\n\t\t", HTML.BUTTON({
      class: "btn btn-primary col-xs-12 col-sm-12",
      id: "login-buttons-password",
      type: "button"
    }, "\n\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("inSignupFlow"));
    }, function() {
      return [ "\n\t\t\t\t", Blaze.View("lookup:i18n", function() {
        return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.create");
      }), "\n\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t", Blaze.View("lookup:i18n", function() {
        return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.signIn");
      }), "\n\t\t\t" ];
    }), "\n\t\t"), "\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("inLoginFlow"));
    }, function() {
      return [ "\n\t\t\t", HTML.DIV({
        id: "login-other-options"
      }, "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("showForgotPasswordLink"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.A({
          id: "forgot-password-link",
          class: "pull-left"
        }, Blaze.View("lookup:i18n", function() {
          return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.forgot");
        })), "\n\t\t\t" ];
      }), "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("showCreateAccountLink"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.A({
          id: "signup-link",
          class: "pull-right"
        }, Blaze.View("lookup:i18n", function() {
          return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.createAcc");
        })), "\n\t\t\t" ];
      }), "\n\t\t\t"), "\n\t\t" ];
    }), "\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("inSignupFlow"));
    }, function() {
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n\t\t" ];
    }), "\n\t" ];
  });
}));

Template.__checkName("_forgotPasswordForm");
Template["_forgotPasswordForm"] = new Template("Template._forgotPasswordForm", (function() {
  var view = this;
  return HTML.DIV({
    class: "login-form"
  }, "\n\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t\t", HTML.DIV({
    id: "forgot-password-email-label-and-input"
  }, " \n\t\t\t", HTML.INPUT({
    id: "forgot-password-email",
    type: "email",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("i18n"), "forgotPasswordForm.email");
    },
    class: "form-control"
  }), "\n\t\t"), "\n\t\t", HTML.BUTTON({
    class: "btn btn-primary login-button-form-submit col-xs-12 col-sm-12",
    id: "login-buttons-forgot-password"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "forgotPasswordForm.reset");
  })), "\n\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n\t");
}));

Template.__checkName("_loginButtonsBackToLoginLink");
Template["_loginButtonsBackToLoginLink"] = new Template("Template._loginButtonsBackToLoginLink", (function() {
  var view = this;
  return HTML.BUTTON({
    id: "back-to-login-link",
    class: "btn btn-default col-xs-12 col-sm-12"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsBackToLoginLink.back");
  }));
}));

Template.__checkName("_loginButtonsFormField");
Template["_loginButtonsFormField"] = new Template("Template._loginButtonsFormField", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("visible"));
  }, function() {
    return [ "\n\t\t", HTML.Comment(" TODO: Implement more input types "), "\n\t\t", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("equals"), view.lookup("inputType"), "checkbox");
    }, function() {
      return [ "\n\t\t\t", HTML.DIV({
        class: "checkbox"
      }, "\n\t\t\t\t", HTML.LABEL(HTML.INPUT({
        type: "checkbox",
        id: function() {
          return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];
        },
        name: function() {
          return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];
        },
        value: "true"
      }), "\n\t\t\t\t", Blaze.View("lookup:fieldLabel", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("fieldLabel")));
      })), "\n\t\t\t"), "\n\t\t" ];
    }), "\n\n\t\t", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("equals"), view.lookup("inputType"), "select");
    }, function() {
      return [ "\n\t\t\t", HTML.DIV({
        class: "select-dropdown"
      }, "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("showFieldLabel"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.LABEL(Blaze.View("lookup:fieldLabel", function() {
          return Spacebars.mustache(view.lookup("fieldLabel"));
        })), HTML.BR(), "\n\t\t\t" ];
      }), "\n\t\t\t", HTML.SELECT({
        id: function() {
          return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];
        }
      }, "\n\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("empty"));
      }, function() {
        return [ "\n\t\t\t\t\t", HTML.OPTION({
          value: ""
        }, Blaze.View("lookup:empty", function() {
          return Spacebars.mustache(view.lookup("empty"));
        })), "\n\t\t\t\t" ];
      }), "\n\t\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("data"));
      }, function() {
        return [ "\n\t\t\t\t\t", HTML.OPTION({
          value: function() {
            return Spacebars.mustache(view.lookup("value"));
          }
        }, Blaze.View("lookup:label", function() {
          return Spacebars.mustache(view.lookup("label"));
        })), "\n\t\t\t\t" ];
      }), "\n\t\t\t"), "\n\t\t\t"), "\n\t\t" ];
    }), "\n\n\t\t", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("equals"), view.lookup("inputType"), "radio");
    }, function() {
      return [ "\n\t\t\t", HTML.DIV({
        class: "radio"
      }, "\n\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("showFieldLabel"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.LABEL(Blaze.View("lookup:fieldLabel", function() {
          return Spacebars.mustache(view.lookup("fieldLabel"));
        })), HTML.BR(), "\n\t\t\t\t" ];
      }), "\n\t\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("data"));
      }, function() {
        return [ "\n\t\t\t\t\t", HTML.LABEL(HTML.INPUT(HTML.Attrs({
          type: "radio",
          id: function() {
            return [ "login-", Spacebars.mustache(Spacebars.dot(view.lookup(".."), "fieldName")), "-", Spacebars.mustache(view.lookup("id")) ];
          },
          name: function() {
            return [ "login-", Spacebars.mustache(Spacebars.dot(view.lookup(".."), "fieldName")) ];
          },
          value: function() {
            return Spacebars.mustache(view.lookup("value"));
          }
        }, function() {
          return Spacebars.attrMustache(view.lookup("checked"));
        })), " ", Blaze.View("lookup:label", function() {
          return Spacebars.mustache(view.lookup("label"));
        })), "\n\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup(".."), "radioLayout"), "vertical");
        }, function() {
          return [ "\n\t\t\t\t\t\t", HTML.BR(), "\n\t\t\t\t\t" ];
        }), "\n\t\t\t\t" ];
      }), "\n\t\t\t"), "\n\t\t" ];
    }), "\n\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("inputTextual"));
    }, function() {
      return [ "\n\t\t\t", HTML.INPUT({
        id: function() {
          return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];
        },
        type: function() {
          return Spacebars.mustache(view.lookup("inputType"));
        },
        placeholder: function() {
          return Spacebars.mustache(view.lookup("fieldLabel"));
        },
        class: "form-control"
      }), "\n\t\t" ];
    }), "\n\t" ];
  });
}));

Template.__checkName("_loginButtonsChangePassword");
Template["_loginButtonsChangePassword"] = new Template("Template._loginButtonsChangePassword", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t", Blaze.Each(function() {
    return Spacebars.call(view.lookup("fields"));
  }, function() {
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n\t" ];
  }), "\n\t", HTML.BUTTON({
    class: "btn btn-block btn-primary",
    id: "login-buttons-do-change-password"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsChangePassword.submit");
  })), "\n\t", HTML.BUTTON({
    class: "btn btn-block btn-default",
    id: "login-buttons-cancel-change-password"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsChangePassword.cancel");
  })) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/template.login_buttons_dialogs.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.body.addContent((function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("_resetPasswordDialog")), "\n\t", Spacebars.include(view.lookupTemplate("_enrollAccountDialog")), "\n\t", Spacebars.include(view.lookupTemplate("_justVerifiedEmailDialog")), "\n\t", Spacebars.include(view.lookupTemplate("_configureLoginServiceDialog")), "\n\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessagesDialog")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("_resetPasswordDialog");
Template["_resetPasswordDialog"] = new Template("Template._resetPasswordDialog", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("inResetPasswordFlow"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "modal",
      id: "login-buttons-reset-password-modal"
    }, "\n\t\t\t", HTML.DIV({
      class: "modal-dialog"
    }, "\n\t\t\t\t", HTML.DIV({
      class: "modal-content"
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-header"
    }, "\n\t\t\t\t\t\t", HTML.BUTTON({
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    })), "\n\t\t\t\t\t\t", HTML.H4({
      class: "modal-title"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.title");
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-body"
    }, "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t\t\t\t\t\t", HTML.INPUT({
      id: "reset-password-new-password",
      class: "form-control",
      type: "password",
      placeholder: function() {
        return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.newPassword");
      }
    }), HTML.BR(), "\n\t\t\t\t\t\t", HTML.INPUT({
      id: "reset-password-new-password-again",
      class: "form-control",
      type: "password",
      placeholder: function() {
        return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.newPasswordAgain");
      }
    }), HTML.BR(), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-footer"
    }, "\n\t\t\t\t\t\t", HTML.A({
      class: "btn btn-default",
      id: "login-buttons-cancel-reset-password"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.cancel");
    })), "\n\t\t\t\t\t\t", HTML.BUTTON({
      class: "btn btn-primary",
      id: "login-buttons-reset-password-button"
    }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.submit");
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), HTML.Comment(" /.modal-content "), "\n\t\t\t"), HTML.Comment(" /.modal-dalog "), "\n\t\t"), HTML.Comment(" /.modal "), "\n\t" ];
  }), "\n\n\t", HTML.DIV({
    class: "modal",
    id: "login-buttons-reset-password-modal-success"
  }, "\n\t\t", HTML.DIV({
    class: "modal-dialog"
  }, "\n\t\t\t", HTML.DIV({
    class: "modal-content"
  }, "\n\t\t\t\t", HTML.DIV({
    class: "modal-header"
  }, "\n\t\t\t\t\t", HTML.Raw('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'), "\n\t\t\t\t\t", HTML.H4({
    class: "modal-title"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.title");
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
    class: "modal-body"
  }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
    class: "modal-footer"
  }, "\n\t\t\t\t\t", HTML.A({
    class: "btn btn-default",
    id: "login-buttons-dismiss-reset-password-success"
  }, Blaze.View("lookup:i18n", function() {
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsMessagesDialog.dismiss");
  })), "\n\t\t\t\t"), "\n\t\t\t"), HTML.Raw("<!-- /.modal-content -->"), "\n\t\t"), HTML.Raw("<!-- /.modal-dalog -->"), "\n\t"), HTML.Raw("<!-- /.modal -->") ];
}));

Template.__checkName("_enrollAccountDialog");
Template["_enrollAccountDialog"] = new Template("Template._enrollAccountDialog", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("inEnrollAccountFlow"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "modal",
      id: "login-buttons-enroll-account-modal"
    }, "\n\t\t\t", HTML.DIV({
      class: "modal-dialog"
    }, "\n\t\t\t\t", HTML.DIV({
      class: "modal-content"
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-header"
    }, "\n\t\t\t\t\t\t", HTML.BUTTON({
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    })), "\n\t\t\t\t\t\t", HTML.H4({
      class: "modal-title"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.title");
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-body"
    }, "\n\t\t\t\t\t\t", HTML.INPUT({
      id: "enroll-account-password",
      class: "form-control",
      type: "password",
      placeholder: function() {
        return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.newPassword");
      }
    }), HTML.BR(), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({
      id: "enroll-account-password-again",
      class: "form-control",
      type: "password",
      placeholder: function() {
        return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.newPasswordAgain");
      }
    }), HTML.BR(), "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-footer"
    }, "\n\t\t\t\t\t\t", HTML.A({
      class: "btn btn-default",
      id: "login-buttons-cancel-enroll-account-button"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.cancel");
    })), "\n\t\t\t\t\t\t", HTML.BUTTON({
      class: "btn btn-primary",
      id: "login-buttons-enroll-account-button"
    }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.submit");
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), HTML.Comment(" /.modal-content "), "\n\t\t\t"), HTML.Comment(" /.modal-dalog "), "\n\t\t"), HTML.Comment(" /.modal "), "\n\t" ];
  });
}));

Template.__checkName("_justVerifiedEmailDialog");
Template["_justVerifiedEmailDialog"] = new Template("Template._justVerifiedEmailDialog", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("visible"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "modal",
      id: "login-buttons-email-address-verified-modal"
    }, "\n\t\t\t", HTML.DIV({
      class: "modal-dialog"
    }, "\n\t\t\t\t", HTML.DIV({
      class: "modal-content"
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-body"
    }, "\n\t\t\t\t\t\t", HTML.H4(HTML.B(Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "justVerifiedEmailDialog.verified");
    }))), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-footer"
    }, "\n\t\t\t\t\t\t", HTML.BUTTON({
      class: "btn btn-primary login-button",
      id: "just-verified-dismiss-button",
      "data-dismiss": "modal"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "justVerifiedEmailDialog.dismiss");
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];
  });
}));

Template.__checkName("_configureLoginServiceDialog");
Template["_configureLoginServiceDialog"] = new Template("Template._configureLoginServiceDialog", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("visible"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "modal",
      id: "configure-login-service-dialog-modal"
    }, "\n\t\t\t", HTML.DIV({
      class: "modal-dialog"
    }, "\n\t\t\t\t", HTML.DIV({
      class: "modal-content"
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-header"
    }, "\n\t\t\t\t\t\t", HTML.BUTTON({
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, HTML.SPAN({
      "aria-hidden": "true"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    }))), "\n\t\t\t\t\t\t", HTML.H4({
      class: "modal-title"
    }, "Configure Service"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-body"
    }, "\n\t\t\t\t\t\t", HTML.DIV({
      id: "configure-login-service-dialog",
      class: "accounts-dialog accounts-centered-dialog"
    }, "\n\t\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("configurationSteps")), "\n\t\t\t\t\t\t\t\t", HTML.P("\n\t\t\t\t\t\t\t\tNow, copy over some details.\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.P("\n\t\t\t\t\t\t\t\t", HTML.TABLE("\n\t\t\t\t\t\t\t\t\t", HTML.COLGROUP("\n\t\t\t\t\t\t\t\t\t\t", HTML.COL({
      span: "1",
      class: "configuration_labels"
    }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.COL({
      span: "1",
      class: "configuration_inputs"
    }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("configurationFields"));
    }, function() {
      return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({
        for: function() {
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];
        }
      }, Blaze.View("lookup:label", function() {
        return Spacebars.mustache(view.lookup("label"));
      })), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({
        id: function() {
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];
        },
        type: "text"
      }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t" ];
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.P({
      class: "new-section"
    }, "\n\t\t\t\t\t\t\t\t\tChoose the login style:\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.P("\n\t\t\t\t\t\t\t\t\t", HTML.CharRef({
      html: "&emsp;",
      str: " "
    }), HTML.INPUT({
      id: "configure-login-service-dialog-popupBasedLogin",
      type: "radio",
      checked: "checked",
      name: "loginStyle",
      value: "popup"
    }), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL({
      for: "configure-login-service-dialog-popupBasedLogin"
    }, "Popup-based login (recommended for most applications)"), "\n\n\t\t\t\t\t\t\t\t\t", HTML.BR(), HTML.CharRef({
      html: "&emsp;",
      str: " "
    }), HTML.INPUT({
      id: "configure-login-service-dialog-redirectBasedLogin",
      type: "radio",
      name: "loginStyle",
      value: "redirect"
    }), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL({
      for: "configure-login-service-dialog-redirectBasedLogin"
    }, "\n\t\t\t\t\t\t\t\t\tRedirect-based login (special cases explained\n\t\t\t\t\t\t\t\t\t", HTML.A({
      href: "https://github.com/meteor/meteor/wiki/OAuth-for-mobile-Meteor-clients#popup-versus-redirect-flow",
      target: "_blank"
    }, "here"), ")\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "modal-footer new-section"
    }, "\n\t\t\t\t\t\t", HTML.DIV({
      class: "login-button btn btn-danger configure-login-service-dismiss-button"
    }, "\n\t\t\t\t\t\t\tI'll do this later\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
      class: function() {
        return [ "login-button login-button-configure btn btn-success ", Blaze.If(function() {
          return Spacebars.call(view.lookup("saveDisabled"));
        }, function() {
          return "login-button-disabled";
        }) ];
      },
      id: "configure-login-service-dialog-save-configuration"
    }, "\n\t\t\t\t\t\t\tSave Configuration\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];
  });
}));

Template.__checkName("_loginButtonsMessagesDialog");
Template["_loginButtonsMessagesDialog"] = new Template("Template._loginButtonsMessagesDialog", (function() {
  var view = this;
  return HTML.DIV({
    class: "modal",
    id: "login-buttons-message-dialog"
  }, "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("visible"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "modal-dialog"
    }, "\n\t\t\t", HTML.DIV({
      class: "modal-content"
    }, "\n\t\t\t\t", HTML.DIV({
      class: "modal-header"
    }, "\n\t\t\t\t\t", HTML.BUTTON({
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, HTML.SPAN({
      "aria-hidden": "true"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    }))), "\n\t\t\t\t\t", HTML.H4({
      class: "modal-title"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "errorMessages.genericTitle");
    })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
      class: "modal-body"
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
      class: "modal-footer"
    }, "\n\t\t\t\t\t", HTML.BUTTON({
      class: "btn btn-primary login-button",
      id: "messages-dialog-dismiss-button",
      "data-dismiss": "modal"
    }, Blaze.View("lookup:i18n", function() {
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsMessagesDialog.dismiss");
    })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t" ];
  }), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/login_buttons_session.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {
	var VALID_KEYS = [
		'dropdownVisible',

		// XXX consider replacing these with one key that has an enum for values.
		'inSignupFlow',
		'inForgotPasswordFlow',
		'inChangePasswordFlow',
		'inMessageOnlyFlow',

		'errorMessage',
		'infoMessage',

		// dialogs with messages (info and error)
		'resetPasswordToken',
		'enrollAccountToken',
		'justVerifiedEmail',

		'configureLoginServiceDialogVisible',
		'configureLoginServiceDialogServiceName',
		'configureLoginServiceDialogSaveDisabled'
	];

	var validateKey = function (key) {
		if (!_.contains(VALID_KEYS, key)){
			throw new Error("Invalid key in loginButtonsSession: " + key);
		}
	};

	var KEY_PREFIX = "Meteor.loginButtons.";

	// XXX we should have a better pattern for code private to a package like this one
	Accounts._loginButtonsSession = {
		set: function(key, value) {
			validateKey(key);
			if (_.contains(['errorMessage', 'infoMessage'], key)){
				throw new Error("Don't set errorMessage or infoMessage directly. Instead, use errorMessage() or infoMessage().");
			}

			this._set(key, value);
		},

		_set: function(key, value) {
			Session.set(KEY_PREFIX + key, value);
		},

		get: function(key) {
			validateKey(key);
			return Session.get(KEY_PREFIX + key);
		},

		closeDropdown: function () {
			this.set('inSignupFlow', false);
			this.set('inForgotPasswordFlow', false);
			this.set('inChangePasswordFlow', false);
			this.set('inMessageOnlyFlow', false);
			this.set('dropdownVisible', false);
			this.resetMessages();
		},

		infoMessage: function(message) {
			this._set("errorMessage", null);
			this._set("infoMessage", message);
			this.ensureMessageVisible();
		},

		errorMessage: function(message) {
			this._set("errorMessage", message);
			this._set("infoMessage", null);
			this.ensureMessageVisible();
		},

		// is there a visible dialog that shows messages (info and error)
		isMessageDialogVisible: function () {
			return this.get('resetPasswordToken') ||
				this.get('enrollAccountToken') ||
				this.get('justVerifiedEmail');
		},

		// ensure that somethings displaying a message (info or error) is
		// visible.  if a dialog with messages is open, do nothing;
		// otherwise open the dropdown.
		//
		// notably this doesn't matter when only displaying a single login
		// button since then we have an explicit message dialog
		// (_loginButtonsMessageDialog), and dropdownVisible is ignored in
		// this case.
		ensureMessageVisible: function () {
			if (!this.isMessageDialogVisible()){
				this.set("dropdownVisible", true);
			}
		},

		resetMessages: function () {
			this._set("errorMessage", null);
			this._set("infoMessage", null);
		},

		configureService: function (name) {
			this.set('configureLoginServiceDialogVisible', true);
			this.set('configureLoginServiceDialogServiceName', name);
			this.set('configureLoginServiceDialogSaveDisabled', true);
			setTimeout(function(){
				$('#configure-login-service-dialog-modal').modal();
			}, 500)
		}
	};
}) ();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/login_buttons.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {
	if (!Accounts._loginButtons){
		Accounts._loginButtons = {};
	}

	// for convenience
	var loginButtonsSession = Accounts._loginButtonsSession;

	UI.registerHelper("loginButtons", function() {
		return Template._loginButtons;
	});

	// shared between dropdown and single mode
	Template._loginButtons.events({
		'click #login-buttons-logout': function() {
			Meteor.logout(function(error) {
				loginButtonsSession.closeDropdown();
				if (typeof accountsUIBootstrap3.logoutCallback === 'function') {
					accountsUIBootstrap3.logoutCallback(error);
				}
			});
		}
	});

	//
	// loginButtonLoggedOut template
	//
	Template._loginButtonsLoggedOut.helpers({
		dropdown: function() {
			return Accounts._loginButtons.dropdown();
		},
		services: function() {
			return Accounts._loginButtons.getLoginServices();
		},
		singleService: function() {
			var services = Accounts._loginButtons.getLoginServices();
			if (services.length !== 1){
				throw new Error(
					"Shouldn't be rendering this template with more than one configured service");
			}
			return services[0];
		},
		configurationLoaded: function() {
			return Accounts.loginServicesConfigured();
		}
	});



	//
	// loginButtonsLoggedIn template
	//

	// decide whether we should show a dropdown rather than a row of
	// buttons
	Template._loginButtonsLoggedIn.helpers({
		dropdown: function() {
			return Accounts._loginButtons.dropdown();
		},
		displayName: function() {
			return Accounts._loginButtons.displayName();
		}
	})



	//
	// loginButtonsMessage template
	//

	Template._loginButtonsMessages.helpers({
		errorMessage: function() {
			return loginButtonsSession.get('errorMessage');
		},
		infoMessage: function() {
			return loginButtonsSession.get('infoMessage');
		}
	});



	//
	// helpers
	//

	Accounts._loginButtons.displayName = function() {
		var user = Meteor.user();
		if (!user){
			return '';
		}

		if (user.profile && user.profile.name){
			return user.profile.name;
		}
		if (user.username){
			return user.username;
		}
		if (user.emails && user.emails[0] && user.emails[0].address){
			return user.emails[0].address;
		}

		return '';
	};

	Accounts._loginButtons.getLoginServices = function() {
		// First look for OAuth services.
		var services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];

		// Be equally kind to all login services. This also preserves
		// backwards-compatibility. (But maybe order should be
		// configurable?)
		services.sort();

		// Add password, if it's there; it must come last.
		if (this.hasPasswordService()){
			services.push('password');
		}

		return _.map(services, function(name) {
			return {
				name: name
			};
		});
	};

	Accounts._loginButtons.hasPasswordService = function() {
		return !!Package['accounts-password'];
	};

	Accounts._loginButtons.dropdown = function() {
		return this.hasPasswordService() || Accounts._loginButtons.getLoginServices().length > 1;
	};

	// XXX improve these. should this be in accounts-password instead?
	//
	// XXX these will become configurable, and will be validated on
	// the server as well.
	Accounts._loginButtons.validateUsername = function(username) {
		if (username.length >= 3) {
			return true;
		} else {
			loginButtonsSession.errorMessage(i18n('errorMessages.usernameTooShort'));
			return false;
		}
	};
	Accounts._loginButtons.validateEmail = function(email) {
		if (Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL" && email === ''){
			return true;
		}

		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (re.test(email)) {
			return true;
		} else {
			loginButtonsSession.errorMessage(i18n('errorMessages.invalidEmail'));
			return false;
		}
	};
	Accounts._loginButtons.validatePassword = function(password, passwordAgain) {
		if (password.length >= 6) {
			if (typeof passwordAgain !== "undefined" && passwordAgain !== null && password != passwordAgain) {
				loginButtonsSession.errorMessage(i18n('errorMessages.passwordsDontMatch'));
				return false;
			}
			return true;
		} else {
			loginButtonsSession.errorMessage(i18n('errorMessages.passwordTooShort'));
			return false;
		}
	};

	Accounts._loginButtons.rendered = function() {
		debugger;
	};

})();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/login_buttons_single.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {
	// for convenience
	var loginButtonsSession = Accounts._loginButtonsSession;

	Template._loginButtonsLoggedOutSingleLoginButton.events({
		'click .login-button': function() {
			var serviceName = this.name;
			loginButtonsSession.resetMessages();
			var callback = function(err) {
				if (!err) {
					loginButtonsSession.closeDropdown();
				} else if (err instanceof Accounts.LoginCancelledError) {
					// do nothing
				} else if (err instanceof Accounts.ConfigError) {
					loginButtonsSession.configureService(serviceName);
				} else {
					loginButtonsSession.errorMessage(err.reason || "Unknown error");
				}
			};

			// XXX Service providers should be able to specify their
			// `Meteor.loginWithX` method name.
			var loginWithService = Meteor["loginWith" + (serviceName === 'meteor-developer' ?  'MeteorDeveloperAccount' :  capitalize(serviceName))];

			var options = {}; // use default scope unless specified
			if (Accounts.ui._options.requestPermissions[serviceName])
				options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
			if (Accounts.ui._options.requestOfflineToken[serviceName])
				options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
			if (Accounts.ui._options.forceApprovalPrompt[serviceName])
				options.forceApprovalPrompt = Accounts.ui._options.forceApprovalPrompt[serviceName];

			loginWithService(options, callback);
		}
	});

	Template._loginButtonsLoggedOutSingleLoginButton.helpers({
		configured: function() {
			return !!Accounts.loginServiceConfiguration.findOne({
				service: this.name
			});
		},
		capitalizedName: function() {
			if (this.name === 'github'){
			// XXX we should allow service packages to set their capitalized name
				return 'GitHub';
			} else {
				return capitalize(this.name);
			}
		}
	});


	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js
	var capitalize = function(str) {
		str = (str == null) ? '' : String(str);
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
})();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/login_buttons_dropdown.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {

	// for convenience
	var loginButtonsSession = Accounts._loginButtonsSession;

	// events shared between loginButtonsLoggedOutDropdown and
	// loginButtonsLoggedInDropdown
	Template._loginButtons.events({
		'click input, click .radio, click .checkbox, click option, click select': function(event) {
			event.stopPropagation();
		},
		'click #login-name-link, click #login-sign-in-link': function(event) {
			event.stopPropagation();
			loginButtonsSession.set('dropdownVisible', true);
			Meteor.flush();
		},
		'click .login-close': function() {
			loginButtonsSession.closeDropdown();
		}
	});

	Template._loginButtons.toggleDropdown = function() {
		toggleDropdown();
		focusInput();
	};

	//
	// loginButtonsLoggedInDropdown template and related
	//

	Template._loginButtonsLoggedInDropdown.events({
		'click #login-buttons-open-change-password': function(event) {
			event.stopPropagation();
			loginButtonsSession.resetMessages();
			loginButtonsSession.set('inChangePasswordFlow', true);
			Meteor.flush();
		}
	});

	Template._loginButtonsLoggedInDropdown.helpers({
		displayName: function() {
			return Accounts._loginButtons.displayName();
		},

		inChangePasswordFlow: function() {
			return loginButtonsSession.get('inChangePasswordFlow');
		},

		inMessageOnlyFlow: function() {
			return loginButtonsSession.get('inMessageOnlyFlow');
		},

		dropdownVisible: function() {
			return loginButtonsSession.get('dropdownVisible');
		},

		user_profile_picture: function() {
			var user = Meteor.user();
			if (user && user.profile && user.profile.display_picture) {
				return user.profile.display_picture;
			}
			return "";
		}
	});


	Template._loginButtonsLoggedInDropdownActions.helpers({
		allowChangingPassword: function() {
			// it would be more correct to check whether the user has a password set,
			// but in order to do that we'd have to send more data down to the client,
			// and it'd be preferable not to send down the entire service.password document.
			//
			// instead we use the heuristic: if the user has a username or email set.
			var user = Meteor.user();
			return user.username || (user.emails && user.emails[0] && user.emails[0].address);
		},
		additionalLoggedInDropdownActions: function() {
			return Template._loginButtonsAdditionalLoggedInDropdownActions !== undefined;
		}
	});


	//
	// loginButtonsLoggedOutDropdown template and related
	//

	Template._loginButtonsLoggedOutAllServices.events({
		'click #login-buttons-password': function(event) {
			event.stopPropagation();
			loginOrSignup();
		},

		'keypress #forgot-password-email': function(event) {
			event.stopPropagation();
			if (event.keyCode === 13){
				forgotPassword();
			}
		},

		'click #login-buttons-forgot-password': function(event) {
			event.stopPropagation();
			forgotPassword();
		},

		'click #signup-link': function(event) {
			event.stopPropagation();
			loginButtonsSession.resetMessages();

			//check to see if onCreate is populated with a function. If it is, call it
			var onCreateFn = Accounts.ui._options.onCreate;
			if (onCreateFn){
				loginButtonsSession.closeDropdown();
				onCreateFn.apply();

			} else {
				// store values of fields before swtiching to the signup form
				var username = trimmedElementValueById('login-username');
				var email = trimmedElementValueById('login-email');
				var usernameOrEmail = trimmedElementValueById('login-username-or-email');
				// notably not trimmed. a password could (?) start or end with a space
				var password = elementValueById('login-password');

				loginButtonsSession.set('inSignupFlow', true);
				loginButtonsSession.set('inForgotPasswordFlow', false);

				// force the ui to update so that we have the approprate fields to fill in
				Meteor.flush();

				// update new fields with appropriate defaults
				if (username !== null) {
					document.getElementById('login-username').value = username;
				} else if (email !== null) {
					document.getElementById('login-email').value = email;
				} else if (usernameOrEmail !== null) {
					if (usernameOrEmail.indexOf('@') === -1) {
						document.getElementById('login-username').value = usernameOrEmail;
					} else {
						document.getElementById('login-email').value = usernameOrEmail;
					}
				}
			}
		},
		'click #forgot-password-link': function(event) {
			event.stopPropagation();
			loginButtonsSession.resetMessages();

			// store values of fields before swtiching to the signup form
			var email = trimmedElementValueById('login-email');
			var usernameOrEmail = trimmedElementValueById('login-username-or-email');

			loginButtonsSession.set('inSignupFlow', false);
			loginButtonsSession.set('inForgotPasswordFlow', true);

			// force the ui to update so that we have the approprate fields to fill in
			Meteor.flush();
			//toggleDropdown();

			// update new fields with appropriate defaults
			if (email !== null){
				document.getElementById('forgot-password-email').value = email;
			} else if (usernameOrEmail !== null){
				if (usernameOrEmail.indexOf('@') !== -1){
					document.getElementById('forgot-password-email').value = usernameOrEmail;
				}
			}
		},
		'click #back-to-login-link': function(event) {
			event.stopPropagation();
			loginButtonsSession.resetMessages();

			var username = trimmedElementValueById('login-username');
			var email = trimmedElementValueById('login-email') || trimmedElementValueById('forgot-password-email'); // Ughh. Standardize on names?

			loginButtonsSession.set('inSignupFlow', false);
			loginButtonsSession.set('inForgotPasswordFlow', false);

			// force the ui to update so that we have the approprate fields to fill in
			Meteor.flush();

			if (document.getElementById('login-username')){
				document.getElementById('login-username').value = username;
			}
			if (document.getElementById('login-email')){
				document.getElementById('login-email').value = email;
			}
			// "login-password" is preserved thanks to the preserve-inputs package
			if (document.getElementById('login-username-or-email')){
				document.getElementById('login-username-or-email').value = email || username;
			}
		},
		'keypress #login-username, keypress #login-email, keypress #login-username-or-email, keypress #login-password, keypress #login-password-again': function(event) {
			if (event.keyCode === 13){
				loginOrSignup();
			}
		}
	});

	Template._loginButtonsLoggedOutDropdown.helpers({
		forbidClientAccountCreation: function() {
			return Accounts._options.forbidClientAccountCreation;
		}
	});

	Template._loginButtonsLoggedOutAllServices.helpers({
		// additional classes that can be helpful in styling the dropdown
		additionalClasses: function() {
			if (!Accounts.password) {
				return false;
			} else {
				if (loginButtonsSession.get('inSignupFlow')) {
					return 'login-form-create-account';
				} else if (loginButtonsSession.get('inForgotPasswordFlow')) {
					return 'login-form-forgot-password';
				} else {
					return 'login-form-sign-in';
				}
			}
		},

		dropdownVisible: function() {
			return loginButtonsSession.get('dropdownVisible');
		},

		services: function() {
			return Accounts._loginButtons.getLoginServices();
		},

		isPasswordService: function() {
			return this.name === 'password';
		},

		hasOtherServices: function() {
			return Accounts._loginButtons.getLoginServices().length > 1;
		},

		hasPasswordService: function() {
			return Accounts._loginButtons.hasPasswordService();
		}
	});


	Template._loginButtonsLoggedOutPasswordService.helpers({
		fields: function() {
			var loginFields = [{
				fieldName: 'username-or-email',
				fieldLabel: i18n('loginFields.usernameOrEmail'),
				visible: function() {
					return _.contains(
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],
						Accounts.ui._passwordSignupFields());
				}
			}, {
				fieldName: 'username',
				fieldLabel: i18n('loginFields.username'),
				visible: function() {
					return Accounts.ui._passwordSignupFields() === "USERNAME_ONLY";
				}
			}, {
				fieldName: 'email',
				fieldLabel: i18n('loginFields.email'),
				inputType: 'email',
				visible: function() {
					return Accounts.ui._passwordSignupFields() === "EMAIL_ONLY";
				}
			}, {
				fieldName: 'password',
				fieldLabel: i18n('loginFields.password'),
				inputType: 'password',
				visible: function() {
					return true;
				}
			}];

			var signupFields = [{
				fieldName: 'username',
				fieldLabel: i18n('signupFields.username'),
				visible: function() {
					return _.contains(
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],
						Accounts.ui._passwordSignupFields());
				}
			}, {
				fieldName: 'email',
				fieldLabel: i18n('signupFields.email'),
				inputType: 'email',
				visible: function() {
					return _.contains(
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "EMAIL_ONLY"],
						Accounts.ui._passwordSignupFields());
				}
			}, {
				fieldName: 'email',
				fieldLabel: i18n('signupFields.emailOpt'),
				inputType: 'email',
				visible: function() {
					return Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";
				}
			}, {
				fieldName: 'password',
				fieldLabel: i18n('signupFields.password'),
				inputType: 'password',
				visible: function() {
					return true;
				}
			}, {
				fieldName: 'password-again',
				fieldLabel: i18n('signupFields.passwordAgain'),
				inputType: 'password',
				visible: function() {
					// No need to make users double-enter their password if
					// they'll necessarily have an email set, since they can use
					// the "forgot password" flow.
					return _.contains(
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],
						Accounts.ui._passwordSignupFields());
				}
			}];

			signupFields = signupFields.concat(Accounts.ui._options.extraSignupFields);

			return loginButtonsSession.get('inSignupFlow') ? signupFields : loginFields;
		},

		inForgotPasswordFlow: function() {
			return loginButtonsSession.get('inForgotPasswordFlow');
		},

		inLoginFlow: function() {
			return !loginButtonsSession.get('inSignupFlow') && !loginButtonsSession.get('inForgotPasswordFlow');
		},

		inSignupFlow: function() {
			return loginButtonsSession.get('inSignupFlow');
		},

		showForgotPasswordLink: function() {
			return _.contains(
				["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],
				Accounts.ui._passwordSignupFields());
		},

		showCreateAccountLink: function() {
			return !Accounts._options.forbidClientAccountCreation;
		}
	});

	Template._loginButtonsFormField.helpers({
		equals: function(a, b) {
			return (a === b);
		},
		inputType: function() {
			return this.inputType || "text";
		},
		inputTextual: function() {
			return !_.contains(["radio", "checkbox", "select"], this.inputType);
		}
	});

	//
	// loginButtonsChangePassword template
	//
	Template._loginButtonsChangePassword.events({
		'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function(event) {
			if (event.keyCode === 13){
				changePassword();
			}
		},
		'click #login-buttons-do-change-password': function(event) {
			event.stopPropagation();
			changePassword();
		},
		'click #login-buttons-cancel-change-password': function(event) {
			event.stopPropagation();
			loginButtonsSession.resetMessages();
			Accounts._loginButtonsSession.set('inChangePasswordFlow', false);
			Meteor.flush();
		}
	});

	Template._loginButtonsChangePassword.helpers({
		fields: function() {
			return [{
				fieldName: 'old-password',
				fieldLabel: i18n('changePasswordFields.currentPassword'),
				inputType: 'password',
				visible: function() {
					return true;
				}
			}, {
				fieldName: 'password',
				fieldLabel: i18n('changePasswordFields.newPassword'),
				inputType: 'password',
				visible: function() {
					return true;
				}
			}, {
				fieldName: 'password-again',
				fieldLabel: i18n('changePasswordFields.newPasswordAgain'),
				inputType: 'password',
				visible: function() {
					// No need to make users double-enter their password if
					// they'll necessarily have an email set, since they can use
					// the "forgot password" flow.
					return _.contains(
						["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],
						Accounts.ui._passwordSignupFields());
				}
			}];
		}
	});

	//
	// helpers
	//

	var elementValueById = function(id) {
		var element = document.getElementById(id);
		if (!element){
			return null;
		} else {
			return element.value;
		}
	};

	var elementValueByIdForRadio = function(fieldIdPrefix, radioOptions) {
		var value = null;
		for (i in radioOptions) {
			var element = document.getElementById(fieldIdPrefix + '-' + radioOptions[i].id);
			if (element && element.checked){
				value =  element.value;
			}
		}
		return value;
	};

	var elementValueByIdForCheckbox = function(id) {
		var element = document.getElementById(id);
		return element.checked;
	};

	var trimmedElementValueById = function(id) {
		var element = document.getElementById(id);
		if (!element){
			return null;
		} else {
			return element.value.replace(/^\s*|\s*$/g, ""); // trim;
		}
	};

	var loginOrSignup = function() {
		if (loginButtonsSession.get('inSignupFlow')){
			signup();
		} else {
			login();
		}
	};

	var login = function() {
		loginButtonsSession.resetMessages();

		var username = trimmedElementValueById('login-username');
		if (username && Accounts.ui._options.forceUsernameLowercase) {
			username = username.toLowerCase();
		}
		var email = trimmedElementValueById('login-email');
		if (email && Accounts.ui._options.forceEmailLowercase) {
			email = email.toLowerCase();
		}
		var usernameOrEmail = trimmedElementValueById('login-username-or-email');
		if (usernameOrEmail && Accounts.ui._options.forceEmailLowercase && Accounts.ui._options.forceUsernameLowercase) {
			usernameOrEmail = usernameOrEmail.toLowerCase();
		}

		// notably not trimmed. a password could (?) start or end with a space
		var password = elementValueById('login-password');
		if (password && Accounts.ui._options.forcePasswordLowercase) {
			password = password.toLowerCase();
		}

		var loginSelector;
		if (username !== null) {
			if (!Accounts._loginButtons.validateUsername(username)){
				return;
			} else {
				loginSelector = {
					username: username
				};
			}
		} else if (email !== null) {
			if (!Accounts._loginButtons.validateEmail(email)){
				return;
			} else {
				loginSelector = {
					email: email
				};
			}
		} else if (usernameOrEmail !== null) {
			// XXX not sure how we should validate this. but this seems good enough (for now),
			// since an email must have at least 3 characters anyways
			if (!Accounts._loginButtons.validateUsername(usernameOrEmail)){
				return;
			} else {
				loginSelector = usernameOrEmail;
			}
		} else {
			throw new Error("Unexpected -- no element to use as a login user selector");
		}

		Meteor.loginWithPassword(loginSelector, password, function(error, result) {
			if (error) {
				if (error.reason == 'User not found'){
					loginButtonsSession.errorMessage(i18n('errorMessages.userNotFound'))
				} else if (error.reason == 'Incorrect password'){
					loginButtonsSession.errorMessage(i18n('errorMessages.incorrectPassword'))
				} else {
					loginButtonsSession.errorMessage(error.reason || "Unknown error");
				}
			} else {
				loginButtonsSession.closeDropdown();
			}
		});
	};

	var toggleDropdown = function() {
		$("#login-dropdown-list").toggleClass("open");
	}

	var focusInput = function() {
		setTimeout(function() {
			$("#login-dropdown-list input").first().focus();
		}, 0);
	};

	var signup = function() {
		loginButtonsSession.resetMessages();

		// to be passed to Accounts.createUser
		var options = {};
		if(typeof accountsUIBootstrap3.setCustomSignupOptions === 'function') {
			options = accountsUIBootstrap3.setCustomSignupOptions();
			if (!(options instanceof Object)){ options = {}; }
		}

		var username = trimmedElementValueById('login-username');
		if (username && Accounts.ui._options.forceUsernameLowercase) {
			username = username.toLowerCase();
		}
		if (username !== null) {
			if (!Accounts._loginButtons.validateUsername(username)){
				return;
			} else {
				options.username = username;
			}
		}

		var email = trimmedElementValueById('login-email');
		if (email && Accounts.ui._options.forceEmailLowercase) {
			email = email.toLowerCase();
		}
		if (email !== null) {
			if (!Accounts._loginButtons.validateEmail(email)){
				return;
			} else {
				options.email = email;
			}
		}

		// notably not trimmed. a password could (?) start or end with a space
		var password = elementValueById('login-password');
		if (password && Accounts.ui._options.forcePasswordLowercase) {
			password = password.toLowerCase();
		}
		if (!Accounts._loginButtons.validatePassword(password)){
			return;
		} else {
			options.password = password;
		}

		if (!matchPasswordAgainIfPresent()){
			return;
		}

		// prepare the profile object
		// it could have already been set through setCustomSignupOptions
		if (!(options.profile instanceof Object)){
			options.profile = {};
		}

		// define a proxy function to allow extraSignupFields set error messages
		var errorFunction = function(errorMessage) {
			Accounts._loginButtonsSession.errorMessage(errorMessage);
		};

		var invalidExtraSignupFields = false;
		// parse extraSignupFields to populate account's profile data
		_.each(Accounts.ui._options.extraSignupFields, function(field, index) {
						var value = null;
						var elementIdPrefix = 'login-';

						if (field.inputType === 'radio') {
							value = elementValueByIdForRadio(elementIdPrefix + field.fieldName, field.data);
						} else if (field.inputType === 'checkbox') {
							value = elementValueByIdForCheckbox(elementIdPrefix + field.fieldName);
						} else {
							value = elementValueById(elementIdPrefix + field.fieldName);
						}

			if (typeof field.validate === 'function') {
				if (field.validate(value, errorFunction)) {
					if (typeof field.saveToProfile !== 'undefined' && !field.saveToProfile){
						options[field.fieldName] = value;
					} else {
						options.profile[field.fieldName] = value;
					}
				} else {
					invalidExtraSignupFields = true;
				}
			} else {
				options.profile[field.fieldName] = value;
			}
		});

		if (invalidExtraSignupFields){
			return;
		}

		Accounts.createUser(options, function(error) {
			if (error) {
				if (error.reason == 'Signups forbidden'){
					loginButtonsSession.errorMessage(i18n('errorMessages.signupsForbidden'))
				} else {
					loginButtonsSession.errorMessage(error.reason || "Unknown error");
				}
			} else {
				loginButtonsSession.closeDropdown();
			}
		});
	};

	var forgotPassword = function() {
		loginButtonsSession.resetMessages();

		var email = trimmedElementValueById("forgot-password-email");
		if (email.indexOf('@') !== -1) {
			Accounts.forgotPassword({
				email: email
			}, function(error) {
				if (error) {
					if (error.reason == 'User not found'){
						loginButtonsSession.errorMessage(i18n('errorMessages.userNotFound'))
					} else {
						loginButtonsSession.errorMessage(error.reason || "Unknown error");
					}
				} else {
					loginButtonsSession.infoMessage(i18n('infoMessages.emailSent'));
				}
			});
		} else {
			loginButtonsSession.errorMessage(i18n('forgotPasswordForm.invalidEmail'));
		}
	};
	var changePassword = function() {
		loginButtonsSession.resetMessages();
		// notably not trimmed. a password could (?) start or end with a space
		var oldPassword = elementValueById('login-old-password');
		// notably not trimmed. a password could (?) start or end with a space
		var password = elementValueById('login-password');

		if (password == oldPassword) {
			loginButtonsSession.errorMessage(i18n('errorMessages.newPasswordSameAsOld'));
			return;
		}

		if (!Accounts._loginButtons.validatePassword(password)){
			return;
		}

		if (!matchPasswordAgainIfPresent()){
			return;
		}

		Accounts.changePassword(oldPassword, password, function(error) {
			if (error) {
				if (error.reason == 'Incorrect password'){
					loginButtonsSession.errorMessage(i18n('errorMessages.incorrectPassword'))
				} else {
					loginButtonsSession.errorMessage(error.reason || "Unknown error");
				}
			} else {
				loginButtonsSession.infoMessage(i18n('infoMessages.passwordChanged'));

				// wait 3 seconds, then expire the msg
				Meteor.setTimeout(function() {
					loginButtonsSession.resetMessages();
				}, 3000);
			}
		});
	};

	var matchPasswordAgainIfPresent = function() {
		// notably not trimmed. a password could (?) start or end with a space
		var passwordAgain = elementValueById('login-password-again');
		if (passwordAgain !== null) {
			// notably not trimmed. a password could (?) start or end with a space
			var password = elementValueById('login-password');
			if (password !== passwordAgain) {
				loginButtonsSession.errorMessage(i18n('errorMessages.passwordsDontMatch'));
				return false;
			}
		}
		return true;
	};
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian_accounts-ui-bootstrap-3/login_buttons_dialogs.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {
	// for convenience
	var loginButtonsSession = Accounts._loginButtonsSession;


	//
	// populate the session so that the appropriate dialogs are
	// displayed by reading variables set by accounts-urls, which parses
	// special URLs. since accounts-ui depends on accounts-urls, we are
	// guaranteed to have these set at this point.
	//

	if (Accounts._resetPasswordToken) {
		loginButtonsSession.set('resetPasswordToken', Accounts._resetPasswordToken);
	}

	if (Accounts._enrollAccountToken) {
		loginButtonsSession.set('enrollAccountToken', Accounts._enrollAccountToken);
	}

	// Needs to be in Meteor.startup because of a package loading order
	// issue. We can't be sure that accounts-password is loaded earlier
	// than accounts-ui so Accounts.verifyEmail might not be defined.
	Meteor.startup(function() {
		if (Accounts._verifyEmailToken) {
			Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {
				Accounts._enableAutoLogin();
				if (!error){
					loginButtonsSession.set('justVerifiedEmail', true);
				}
				// XXX show something if there was an error.
			});
		}
	});

	//
	// resetPasswordDialog template
	//

	Template._resetPasswordDialog.events({
		'click #login-buttons-reset-password-button': function(event) {
			event.stopPropagation();
			resetPassword();
		},
		'keypress #reset-password-new-password': function(event) {
			if (event.keyCode === 13){
				resetPassword();
			}
		},
		'click #login-buttons-cancel-reset-password': function(event) {
			event.stopPropagation();
			loginButtonsSession.set('resetPasswordToken', null);
			Accounts._enableAutoLogin();
			$('#login-buttons-reset-password-modal').modal("hide");
		},
		'click #login-buttons-dismiss-reset-password-success': function(event) {
			event.stopPropagation();
			$('#login-buttons-reset-password-modal-success').modal("hide");
		}
	});

	var resetPassword = function() {
		loginButtonsSession.resetMessages();
		var newPassword = document.getElementById('reset-password-new-password').value;
		var passwordAgain= document.getElementById('reset-password-new-password-again').value;
		if (!Accounts._loginButtons.validatePassword(newPassword,passwordAgain)){
			return;
		}

		Accounts.resetPassword(
			loginButtonsSession.get('resetPasswordToken'), newPassword,
			function(error) {
				if (error) {
					loginButtonsSession.errorMessage(error.reason || "Unknown error");
				} else {
					$('#login-buttons-reset-password-modal').modal("hide");
					$('#login-buttons-reset-password-modal-success').modal();
					loginButtonsSession.infoMessage(i18n('infoMessages.passwordChanged'));
					loginButtonsSession.set('resetPasswordToken', null);
					Accounts._enableAutoLogin();
				}
			});
	};

	Template._resetPasswordDialog.helpers({
		inResetPasswordFlow: function() {
			return loginButtonsSession.get('resetPasswordToken');
		}
	});

	Template._resetPasswordDialog.onRendered(function() {
		var $modal = $(this.find('#login-buttons-reset-password-modal'));
		if (!_.isFunction($modal.modal)) {
			console.error("You have to add a Bootstrap package, i.e. meteor add twbs:bootstrap");
		} else {
			$modal.modal();
		}
	});

	//
	// enrollAccountDialog template
	//

	Template._enrollAccountDialog.events({
		'click #login-buttons-enroll-account-button': function() {
			enrollAccount();
		},
		'keypress #enroll-account-password': function(event) {
			if (event.keyCode === 13){
				enrollAccount();
			}
		},
		'click #login-buttons-cancel-enroll-account-button': function() {
			loginButtonsSession.set('enrollAccountToken', null);
			Accounts._enableAutoLogin();
			$modal.modal("hide");
		}
	});

	var enrollAccount = function() {
		loginButtonsSession.resetMessages();
		var password = document.getElementById('enroll-account-password').value;
		var passwordAgain= document.getElementById('enroll-account-password-again').value;
		if (!Accounts._loginButtons.validatePassword(password,passwordAgain)){
			return;
		}

		Accounts.resetPassword(
			loginButtonsSession.get('enrollAccountToken'), password,
			function(error) {
				if (error) {
					loginButtonsSession.errorMessage(error.reason || "Unknown error");
				} else {
					loginButtonsSession.set('enrollAccountToken', null);
					Accounts._enableAutoLogin();
					$modal.modal("hide");
				}
			});
	};

	Template._enrollAccountDialog.helpers({
		inEnrollAccountFlow: function() {
			return loginButtonsSession.get('enrollAccountToken');
		}
	});

	Template._enrollAccountDialog.onRendered(function() {
		$modal = $(this.find('#login-buttons-enroll-account-modal'));
		if (!_.isFunction($modal.modal)) {
			console.error("You have to add a Bootstrap package, i.e. meteor add twbs:bootstrap");
		} else {
			$modal.modal();
		}
	});

	//
	// justVerifiedEmailDialog template
	//

	Template._justVerifiedEmailDialog.events({
		'click #just-verified-dismiss-button': function() {
			loginButtonsSession.set('justVerifiedEmail', false);
		}
	});

	Template._justVerifiedEmailDialog.helpers({
		visible: function() {
			if (loginButtonsSession.get('justVerifiedEmail')) {
				setTimeout(function() {
					$('#login-buttons-email-address-verified-modal').modal()
				}, 500)
			}
			return loginButtonsSession.get('justVerifiedEmail');
		}
	});


	//
	// loginButtonsMessagesDialog template
	//

	var messagesDialogVisible = function() {
		var hasMessage = loginButtonsSession.get('infoMessage') || loginButtonsSession.get('errorMessage');
		return !Accounts._loginButtons.dropdown() && hasMessage;
	}


	Template._loginButtonsMessagesDialog.onRendered(function() {
		var self = this;

		self.autorun(function() {
			if (messagesDialogVisible()) {
				var $modal = $(self.find('#login-buttons-message-dialog'));
				if (!_.isFunction($modal.modal)) {
					console.error("You have to add a Bootstrap package, i.e. meteor add twbs:bootstrap");
				} else {
					$modal.modal();
				}
			}
		});
	});

	Template._loginButtonsMessagesDialog.events({
		'click #messages-dialog-dismiss-button': function() {
			loginButtonsSession.resetMessages();
		}
	});

	Template._loginButtonsMessagesDialog.helpers({
		visible: function() { return messagesDialogVisible(); }
	});


	//
	// configureLoginServiceDialog template
	//

	Template._configureLoginServiceDialog.events({
		'click .configure-login-service-dismiss-button': function(event) {
			event.stopPropagation();
			loginButtonsSession.set('configureLoginServiceDialogVisible', false);
			$('#configure-login-service-dialog-modal').modal('hide');
		},
		'click #configure-login-service-dialog-save-configuration': function() {
			if (loginButtonsSession.get('configureLoginServiceDialogVisible') &&
				!loginButtonsSession.get('configureLoginServiceDialogSaveDisabled')) {
				// Prepare the configuration document for this login service
				var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');
				var configuration = {
					service: serviceName
				};
				_.each(configurationFields(), function(field) {
					configuration[field.property] = document.getElementById(
						'configure-login-service-dialog-' + field.property).value
						.replace(/^\s*|\s*$/g, ""); // trim;
				});

				configuration.loginStyle =
				$('#configure-login-service-dialog input[name="loginStyle"]:checked')
				.val();

				// Configure this login service
				Meteor.call("configureLoginService", configuration, function(error, result) {
					if (error){
						Meteor._debug("Error configuring login service " + serviceName, error);
					} else {
						loginButtonsSession.set('configureLoginServiceDialogVisible', false);
					}
					$('#configure-login-service-dialog-modal').modal('hide');
				});
			}
		},
		// IE8 doesn't support the 'input' event, so we'll run this on the keyup as
		// well. (Keeping the 'input' event means that this also fires when you use
		// the mouse to change the contents of the field, eg 'Cut' menu item.)
		'input, keyup input': function(event) {
			// if the event fired on one of the configuration input fields,
			// check whether we should enable the 'save configuration' button
			if (event.target.id.indexOf('configure-login-service-dialog') === 0){
				updateSaveDisabled();
			}
		}
	});

	// check whether the 'save configuration' button should be enabled.
	// this is a really strange way to implement this and a Forms
	// Abstraction would make all of this reactive, and simpler.
	var updateSaveDisabled = function() {
		var anyFieldEmpty = _.any(configurationFields(), function(field) {
			return document.getElementById(
				'configure-login-service-dialog-' + field.property).value === '';
		});

		loginButtonsSession.set('configureLoginServiceDialogSaveDisabled', anyFieldEmpty);
	};

	// Returns the appropriate template for this login service.  This
	// template should be defined in the service's package
	var configureLoginServiceDialogTemplateForService = function() {
		var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');
		return Template['configureLoginServiceDialogFor' + capitalize(serviceName)];
	};

	var configurationFields = function() {
		var template = configureLoginServiceDialogTemplateForService();
		return template.fields();
	};

	Template._configureLoginServiceDialog.helpers({
		configurationFields: function() {
			return configurationFields();
		},

		visible: function() {
			return loginButtonsSession.get('configureLoginServiceDialogVisible');
		},

		configurationSteps: function() {
			// renders the appropriate template
			return configureLoginServiceDialogTemplateForService();
		},

		saveDisabled: function() {
			return loginButtonsSession.get('configureLoginServiceDialogSaveDisabled');
		}
	});


	;



	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js
	var capitalize = function(str) {
		str = str == null ? '' : String(str);
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("ian:accounts-ui-bootstrap-3", {
  accountsUIBootstrap3: accountsUIBootstrap3
});

})();
