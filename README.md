# Application exemple de manipulation d'une API REST, de restranscription et transformation des données
## Pré-requis pour un environnement local :
* Composer (géstionnaire de dépendances)
* Git For Windows (Outil de suivi de version)
* Wamp (Windows Apache Mysql PHP)
* Visual Studio Code (IDE : Integrated Development Environment)
* Microsoft Visual C++

## Web
### Apache
#### Présentation générale
Apache est un serveur web permettant l'écoute sur le protocole http (80) ou https (443).

Celui-ci fait le lien entre les appels qui sont réalisés sur un serveur avec les différentes applications pouvant être installés sur celui-ci.

En complément du langage de programmation PHP, cette architecture permet rapidement et simplement de construire une et de déployer une application web.

#### Configuration 
Voici un exemple de fichier de configuration (utilisation d'alias) pour déployer le code php sur un serveur Apache:
```
Alias /phpForms "C:\Users\a\Documents\projects\phpForms/"

<Directory "C:\Users\a\Documents\projects\phpForms/">
	Options Indexes FollowSymLinks MultiViews
  AllowOverride all
  <ifDefine APACHE24>
		Require local
	</ifDefine>
	<ifDefine !APACHE24>
		Order Deny,Allow
    Deny from all
    Allow from localhost ::1 127.0.0.1
	</ifDefine>
</Directory>
```

#### Réalisation
Dans notre cas le code PHP n'est pas exploité, les traitements sont réalisés par un script javascript avec l'aide de JQuery.

La partie PHP a été maintenu pour exploitation dans le future, de préférence avec une surcouche : Framework, pour faciliter la mise en oeuvre.

#### Accès
Dans notre cas le code PHP n'est pas exploité, les traitements sont réalisés par un script javascript avec l'aide de JQuery.

Pour accéder à l'application, il suffit ensuite d'ouvrir un navigateur et de saisir l'adresse suivante :
> http://{adresse_serveur}/phpForms

NB : {adresse_serveur} correspond à localhost sur un environement local

## Scripts
### powershell
#### Présentation générale
Powershell est une console utilisé sur les plateformes Windows pour réaliser des actions en invite de commande.
Ces actions peuvent être automatisées par l'intermédiaire d'un fichier script reprenant les commandes souaitées.

#### Présentation du script
Le script permet de récupérer les informations provenant d'une API et de les enregistrer au format CSV.
Les paramètres possible sont les suivants :
 * $fileLocation : Emplacement du fichier sauvegardé (répertoire)
 * $searchedValue : Titre du programme recherché
 * $searchedType : Type du programme rechercé

 Pour ouvrir l'aide :
 > Get-Help .\scripts\exportCsv.ps1 -detailed

 Exemple d'utiliation :
> .\scripts\exportCsv.ps1 -searchedValue Interstell -searchedType game
