---
title: 01/2023 - Confrontation de la solution de déploiement BMC avec MDT (Microsoft Deployment Toolkit)
date: 2022-01-20
description: Tests sur un nouvel outil de déploiement d'OS, Microsoft Deployment Toolkit.
tag: Mettre à disposition des utilisateurs un service informatique
author: Roméo Provenzano
---

## Résumé

Dans cette situation j'ai initié des tests sur un nouvel outil de déploiement d'OS, Microsoft Deployment Toolkit.

Je vous invite à consulter [la documentation annexe de ce projet ici](https://mydrive.univ-st-etienne.fr/s/Dyjcb9NaDmNm77L)

## Compétence mise en oeuvre (cf. tableau de synthèse des compétences)

- Gérer le patrimoine informatique
	- Recenser et identifier les ressources numériques 
	- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique
	- Mettre en place et vérifier les niveaux d’habilitation associés à un service
	- Vérifier les conditions de la continuité d’un service informatique
	- Gérer des sauvegardes
	- Vérifier le respect des règles d’utilisation des ressources numériques
- Répondre aux incidents et aux demandes d’assistance et d’évolution
	- Collecter, suivre et orienter des demandes 
	- Traiter des demandes concernant les services réseau et système, applicatifs
	- Traiter des demandes concernant les applications
- Travailler en mode projet
	- Analyser les objectifs et les modalités d’organisation d’un projet
	- Planifier les activités
	- Évaluer les indicateurs de suivi d’un projet et analyser les écarts
- Mettre à disposition des utilisateurs un service informatique
	- Réaliser les tests d’intégration et d’acceptation d’un service
	- Déployer un service
	- Accompagner les utilisateurs dans la mise en place d’un service
- Organiser son développement professionnel
	- Mettre en place son environnement d’apprentissage personnel
	- Mettre en œuvre des outils et stratégies de veille informationnelle

## Synthèse

### Contexte

Dans le cadre de mon projet de 2de année de BTS au sein de la DNUM Proximité, nous avons initié une recherche d’outil de gestion de parc en remplacement de l’actuel, BMC Client Management.
Les problématiques rencontrées au maintien de cette solution sont les suivantes :
-	Pas d’évolution des services depuis 10 ans
-	Manque de visibilité sur le fonctionnement des services
-	Disparité de connaissances sur les outils entre les techniciens

Résultant de cette recherche, un outil est ressorti, Microsoft Intune, une solution MDM (Mobile Device Managment) permettant la gestion des appareils Windows, iOS, MacOS, Android et la définition des politiques de déploiement et de gestion.

Problème ? 

La mise en place de cette solution implique l’utilisation d’un Active Directory implanté sur Azure, une solution cloud ne répondant pas à notre politique de confidentialité.

Je me suis focalisé sur le service de déploiement d'OS.

La solution à explorer sera finalement le MDT (Microsoft Deployment Toolkit), un outil gratuit de Microsoft qui aide à déployer et à migrer des systèmes d'exploitation Windows, ainsi que des applications. Il s'agit d'un ensemble d'outils qui automatise et personnalise le processus de déploiement.

### Objectif

L'objectif de l'opération réside dans le fait d'évaluer les améliorations offertes par MDT par rapport à la solution actuelle.

Pour ceci je dois :

- Évaluer la performance globale de MDT en termes de vitesse, de précision et de fiabilité par rapport à la solution actuelle.
- Comparer les fonctionnalités offertes par MDT avec celles de la solution actuelle pour déterminer les avantages et les inconvénients de chaque solution.
- Évaluer l'impact de l'utilisation de MDT 
- Déterminer si l'utilisation de MDT nécessite de la formation supplémentaires pour les techniciens
- Évaluer la satisfaction des techniciens avec MDT par rapport à la solution actuelle et déterminer s'il y a des problèmes d'adoption.

### Contraintes

J'ai du faire face à plusieurs contraintes : 

- La contrainte temporelle : la date butoire du projet est fixée à aout 2023.
Voici le planning sous forme de diagramme de GANTT du projet GestionPT qui s'applique aussi à ce projet :


<figure>
  <img src="https://doc-08-2c-docs.googleusercontent.com/docs/securesc/garv5h351dka3t1mbk5i4mkjm0mfdcq6/mducslhqd58v10ihfpv4rjufip7lt995/1681174200000/02850856222745739433/02850856222745739433/10i8z0oTuk4tuLBnJOuXzHbHo3kQFrn4z?ax=ALy03A4hgISiHYFM5kLY1QduuorbTP6uwm2ZNZZGP3W7dNxq-bNtfa1jeaVWTXwKURIO8JK5HMYXpELNji2j8lpuKZ2L_vAZDO72iHis9dxUql-cwzxeZphHIWnUMReT748WtyeO14ctPGh9dSd_UxSlyhM6DBqi1u30Vsvo568TdScH1-TbSrUfZTnHxuVSfTs35Q8bjLF-DOIK3WJ_mfYkyXR24SSXphk3xQv1OXJdTYWXGmGGfC62nvS4jTcrCwuH3zY7sCIPiK39gs4sxHjgFxDD158Du9zi0ClWQyZzPAGNFpYf1c4VjDpAOPG91VTz_KIhZnYOAP9n0GDx1ChuzilhO6z1ohzo1FSsoBwWEmCUT57LIVsi-3ngTIwuwiIzcdNXfZgt9tgeGzONloa2t8loMrBUUaRE3lv7f8ligewHD9KQcfKSuSLE0YGNMMwpQHKGVp2OY8V1gAs2OMKn1d28Tuh32YcbbIq1ldhzjGOye6duPc_QAJ9k0pR8eBPJ5-gpkDpr1Mchj6waw-pZwxjKROvoPqy8kx2wyd0w-RHR2wIwRY8RDZ34vkaGPk_sQSo1L9rMbMLmtEtB23zDW6hi5SwPkHbLveeUo1SqchIas4ssTj1NuwbNqLh7zwVLZS5WHPZP2WoBJzuc8y8tWJ7tF6GS994-D-hZj5P1FlrxfgbXtej2STMgNk2edwltsiHgQYV2bi1BE-1qs4I71_Ukd2SbilIOrqXFHl0WXTCepO8DphjSzwVBUcxWncDtYbV2tYCHn6blJjbgbkLCMQlDRVe-pgrnoBs2-GbdwUYwo205dr--7GGwM7BUjITewHU4cV2VrYzX1l7H3VQL5w4IMNsmtRJ6gHu-hTibZ-477QxX0j97qYbr7gyxrNPIKOA_WSStUhYO5_KUvivl1uEb25mw_AEhoxk&uuid=2dbe06a1-337e-4552-8222-0e45122913f5&authuser=0" alt="Planning du projet" width="200" />
<figcaption>Planning du projet </figcaption>
</figure>


- Pas de planification budgétaire : pas de budget prévu pour cette opération
- Pas d'objectifs quantifiables : objectif de vente, satisfaction client.

### Déroulement

Je vous invité à consuler l'archive du projet MDT pour connaitre le déroulé du projet

[archive du projet](https://mydrive.univ-st-etienne.fr/s/Dyjcb9NaDmNm77L)


### Bilan

L'ancien outil n'est pas documenté, son utilisation est complexe et nécessite l'accompagnement du technicien référent dans ce domaine.

Le produit que je propose est encore en phase de test, ce qui ne permet pas de faire un bilan complet.
Je peux dire, à ce stade, qu'en comparaison avec l'outil utilisé jusqu'alors, MDT s'avère plus efficient.

L'évaluation finale se fera donc à l'issue de la phase de test.

### Avancée du projet MDT

Vous pouvez retrouver ici, les documents produits à ce jour sur le [projet MDT](https://mydrive.univ-st-etienne.fr/s/Dyjcb9NaDmNm77L) .