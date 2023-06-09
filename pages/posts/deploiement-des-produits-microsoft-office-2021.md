---
title: 05/2022 - Déploiement des produits Microsoft Office 2021
date: 2022-05-01
description: Outils Office Deployment Tools, scripts PowerShell
tag: Mettre à disposition des utilisateurs un service informatique
author: Roméo Provenzano
---

## Résumé 

Au cours de ma 1ère année à l'UJM, j'ai pu mettre à disposition des utilisateurs la nouvelle version de la suite Office Pro 2021 rendu disponibe par Microsoft.

## Compétence mise en oeuvre (cf. tableau de synthèse des compétences)

- Mettre à disposition des utilisateurs un service informatique 
	- Réaliser les tests d’intégration et d’acceptation d’un service
	- Déployer un service

## Synthèse

### Contexte

Une nouvelle version de la suite Office Pro 2021 a été rendu disponible par Microsoft. Nous étions précédement sur la version 2019.


Étant en possession de clés d'activation en volume pour les licences Office 2021, nous avions la possibilité de migrer vers cette version en utilisant un serveur KMS Microsoft hébergé en interne pour gérer l'activation.

De ma propre initiative, j'ai décidé de mener cette mission.

### Objectif

L'objectif est de fournir aux utilisateurs les dernières fonctionnalités de la suite Office et cela permet d'assurer un support pérenne dans le temps sur les machines équipées.

### Risques et contraintes

Le risque est de destabiliser l'utilisateur qui a l'habitude d'utiliser l'ancienne version du la suite logiciel.

Les mises à jour se feront uniquement sur les matériels nouvellement injectés dans le parc pour éviter une interruption de service sur les postes en production.

### Déroulement

- Découverte du fonctionnement de l'outil de déploiement de logiciel
- Création des ressources nécessaires au déploiement de la suite Office (Scripts d'installation PowerShell, récupération des sources d'installation du produit)
- Mise à disposition du partage de déploiement dans l'outil de gestion de parc.
- Lancement du déploiement à distance sur des machines de test
- Test du logiciel
- Validation
- Mise en production ?

### Bilan

J'ai pu tester de mon coté cette réalisation sur mon poste, sur des postes de Test et sur des postes en production.
L'opération s'est déroulée avec succès.

La mise en production à grande échelle n'a pour l'instant pas eu lieu en raison du manque de confomrité du serveur KMS impliqué, et du caractère non urgent de l'opération. Je suis en attente de confirmation de mise en place définitive par mon service.

### Procédure annexe du déroulement de l'opération

Regardez ci-joint la procédure résumé de l'opération.

