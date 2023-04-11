---
title: Utiliser GIT, le gestionnaire de version de code
date: 2022-12-19 
description: Utiliser GIT, le gestionnaire de version de code
tag: Veille technologique
author: Roméo Provenzano
---

## Intro

Git est un **système de contrôle de version** open-source, conçu pour gérer efficacement les projets informatiques. Il permet à plusieurs développeurs de **travailler simultanément sur un même projet**, en enregistrant toutes les modifications apportées aux fichiers du projet au fil du temps.

Git utilise une approche **décentralisée**, ce qui signifie que chaque développeur a une copie complète de l'historique du projet sur son propre ordinateur. Les développeurs peuvent travailler sur leur **copie locale** du projet, puis synchroniser leurs modifications avec la version principale du projet, appelée "dépôt" à distance, en utilisant des commandes Git spécifiques.

<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png" alt="Logo git" width="400" />
  <figcaption>Logo GIT</figcaption>
</figure>

<figure>
  <img src="https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Logo.png" alt="Logo Github" width="400" />
  <figcaption>Logo GitHb</figcaption>
</figure>

## Git et les dépôts à distance

Git et GitHub sont des choses différentes.
Dans cet article, vous allez comprendre ce qu'est Git et comment l'utiliser sur une plateforme d'hébergement de code, comme GitHub. Il existe d'autres plateformes comme GitLab ou Bitbucket.

On va se concentrer ici sur **GitHub** qui est très largement utilisé par tous informaticiens.

## Introduction à Git et GitHub

### Qu'est-ce que Git ?

Git est un système de contrôle de version populaire. Il a été créé par Linus Torvalds, le créateur du code source Linux, en 2005, et a été maintenu par Junio Hamano depuis lors.

Il est utilisé pour :

- **Suivre** des modifications du code.
- **Suivre** qui a effectué des modifications.
- **Programmer** entre plusieurs développeurs.

### Que fait Git ?

- Gérer des projets avec des **Repositories (dépot)**
- **Cloner** un projet pour travailler sur une copie locale
- Contrôler et suivre les changements avec le **Staging** et le **Committing**
- **Branch** et **Merge** pour permettre de travailler sur différentes parties et versions d'un projet.
- **Pull (tirer)** la dernière version du projet vers une copie locale
- **Push (pousser)** les mises à jour locales vers le projet principal sur la plateforme d'hébergement.

### Travailler avec Git

Mode de fonctionnement :

- Initialiser Git sur un dossier, pour en faire un **Repository local**.
- Git crée un **dossier caché** pour garder la trace des changements dans ce dossier
- Lorsqu'un fichier est modifié, ajouté ou supprimé, il est considéré comme **modified**.
- Vous sélectionnez les fichiers modifiés que vous voulez **Stage**
- Les fichiers **Staged** sont ensuite **Committed**, ce qui demande à Git de stocker un instantané permanent des fichiers.
- Git vous permet de voir l'historique complet de chaque commit.
- Vous pouvez revenir en arrière à n'importe quel commit précédent.
- Git ne stocke pas une copie séparée de chaque fichier dans chaque commit, mais garde uniquement la trace des changements effectués dans chaque commit.

### Pourquoi utiliser Git ?

- Plus de **70%** des développeurs utilisent Git.
- Les développeurs peuvent **travailler ensemble** de n'importe où dans le monde.
- Les développeurs peuvent **voir l'historique** complet du projet.
- Les développeurs peuvent **revenir à des versions antérieures d'un projet.**

### Qu'est-ce que GitHub ?

- Git n'est pas la même chose que GitHub.
- GitHub est le plus grand hébergeur de code source au monde, et appartient à Microsoft depuis 2018.

Dans ce tutoriel, nous allons nous concentrer sur l'utilisation de Git avec GitHub.

## Les commandes en local

Tous d'abord, vous pouvez **installer** la dernière version de Git [ici](https://git-scm.com/downloads)

### Git Init

- Check si git est **installé**

```bash
$ git --version
git version 2.30.2.windows.1
```

- Configuration du **profil git local global**

```bash
$ git config --global user.name remplacez name par votre nom Github "Romeoprov"
$ git config --global user.email remplacez mail par le mail de votre Github "provenzano.romeopro@gmail.com"
```

- Créer un dossier dans l'**endroit souhaité**

```bash
$ mkdir myproject
$ cd myproject
```

- **Initialiser** git dans ce dossier

```bash
$ git init 
Initialized empty Git repository in /Users/user/myproject/.git/
```
Un fichier .git est créé, notre répertoire est initialisé.

- **Ajouter** des fichiers dans le dossier

```bash
$ ls
index.html
```
Nous avons créé un fichier index.html

- Voir le **statut** du dossier et voir si git est conscient de l'apparition du fichier index.html

```bash
$ git status
On branch main

No commits yet

Untracked files:
        (use "git add ..." to include in what will be committed)
    index.html

nothing added to commit but untracked files present (use "git add" to track)
```

Git n'a pas encore ajouté le fichier au repo. Il existe 2 états de fichiers dans GIT :

- **Tracked** - fichiers que Git connaît et qui sont ajoutés au référentiel.
- **Untracked** - les fichiers qui sont dans votre répertoire de travail, mais qui ne sont pas ajoutés au dépôt (comme index.html)

### Git Staging Environment

- **Ajouter** un fichier à l'environnement de stagging

```bash
$ git add index.html
```

- **Check** si ça a marché

```bash
$ git status
On branch main

No commits yet

Changes to be committed:
        (use "git rm --cached ..." to unstage)
    new file: index.html
```

- Ajouter **tous les fichiers du projet**

```bash
$ git add --all
$ git add -A
        
$ git status
On branch main

No commits yet

Changes to be committed:
        (use "git rm --cached ..." to unstage)
              new file:   README.md
              new file:   bluestyle.css
              new file:   index.html
```

### Git Commit

- Commit

Ajoutez un **message** à chaque Commit pour être plus clair lors du déploiement

```bash
$ git commit -m "Première version de Hello World !"
[main (root-commit) 221ec6e] First release of Hello World!
3 files changed, 26 insertions(+)
create mode 100644 README.md
create mode 100644 bluestyle.css
create mode 100644 index.html
```

Le **staging** était livré a un dépôt, avec le message :

**"Première version de Hello World !"**

- Commit **sans staging**

Il est possible d'effectuer un commit directement **sans staging** pour des petites modifs.
Ce n'est généralement **pas recommandé**, car peut apporter des confusions.

Après la modification d'un fichier, regarder son statut :

```bash
$ git status --short
 M index.html
```

Les **flags** de status sont les suivants :

- ?? - Fichier untrack
- A - Fichier ajouté au stagging
- M - Fichier modifié
- D - Fichier supprimé

Une fois le fichier modifié, faire le commit sans passer par le stagging avec l'option **-a** :

```bash
$ git commit -a -m "Fichier index.html modifié"
[main 09f4acd] Updated index.html with a new line
    1 file changed, 1 insertion(+)
```

- Voir les **logs de Commit**

Pour voir l'historique des commits :

```bash
$ git log
commit 09f4acd3f8836b7f6fc44ad9e012f82faf861803 (HEAD -> main)
Author: Romeoprov
Date:   Fri Dec 23 12:35:54 2022 +0100

Fichier index.html modifié

commit 221ec6e10aeedbfd02b85264087cd9adc18e4b26
Author: Romeoprov 
Date:   Date:   Fri Dec 23 9:17:22 2022 +0100

Première version de Hello World !
```

### Git Help

Il existe **2 types d'aides** :

```bash
$ git 'command' -help - Voir toutes les options disponibles pour la commande spécifique
$ git help --all - Voir toutes les commandes possibles
```

### Git Branch

Dans Git, une `branche` est une version séparée du dépôt principal. Celle-ci étant appelé `main` ou `master`.

#### Les commandes

- **Créer une nouvelle branche** pour travailler sur une nouvelle version d'un fichier par exemple

```bash
Créer une nouvelle branche à partir de la branche main
$ git branch hello-world-images
ou alors
$ git checkout -b hello-world-images 
L'utilisation de l'option -b sur le checkout créera une nouvelle branche, et se déplacera vers elle, si elle n'existe pas.
```
        
- **Voir les branches**

```bash
$ git branch
hello-world-images
* main
```

* veut dire que nous nous trouvons dans cette branche

- **Switcher** d'une branche à l'autre

```bash
$ git checkout hello-world-images
Switched to branch 'hello-world-images'
```

Maintenant, vous pouvez **faire des changements** aux fichiers qui vous intéressent

- **Check le statut** de la branche courante

```bash
$ git status
On branch hello-world-images
Changes not staged for commit:
        (use "git add ..." to update what will be committed)
        (use "git restore ..." to discard changes in working directory)
              modified:   index.html

Untracked files:
        (use "git add ..." to include in what will be committed)
              img_hello_world.jpg

no changes added to commit (use "git add" and/or "git commit -a")
```

- Faire des **Stages** et des **Commits** à votre convenance, et check le statut (vu précédemment)

**! Attention,** si vous voulez créer une branche de main par exemple, il faut se placer dans celle-ci avant la création.

### Git Merge Branch

Avant de **fusionner** 2 branches, nous devons nous déplacer dans celle où nous voulons effectuer les modifs.

Par exemple, ici, dans la branch main.

```bash
$ git checkout main
Switched to branch 'main'
```

- **Fusionner** la branche voulue dans la branche main

```bash
$ git merge branche-à-merge
Updating 09f4acd..dfa79db
Fast-forward
    index.html | 2 +-
    1 file changed, 1 insertion(+), 1 deletion(-)
```

Nous pouvons **supprimer** la branch fusionné

```bash
$ git branch -d branche-à-merge
Deleted branch branche-à-merge (was dfa79db).
```

- Les **conflits de fusion**

S'il y a des **conflits de fusion**n entre plusieurs branches, éditez les fichiers problématiques et réessayez.

## Les commandes en remote pour GitHub

### Git First Push

- Créer un dépot sur **Github**

- Ajouter ce repo **GitHub en local**

```bash
$ git remote add origin https://github.com/Romeoprov/hello-world.git
```

- Push le **main dans l'url origin**

```bash
$ git push -u origin main
Enumerating objects: 22, done.
Counting objects: 100% (22/22), done.
Delta compression using up to 16 threads
Compressing objects: 100% (22/22), done.
Writing objects: 100% (22/22), 92.96 KiB | 23.24 MiB/s, done.
Total 22 (delta 11), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (11/11), done.
To https://github.com/Romeoprov/hello-world.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```
### Git Fetch et merge (la même chose que Pull)

Chaque fois que vous commencez à travailler sur un projet, vous devez obtenir les **modifications les plus récentes** sur votre **copie locale**.

Avec Git, vous pouvez le faire avec **pull**.

pull est une combinaison de **2 commandes** différentes :

- **fetch** (récupérer)
- **merge** (fusionner)

Examinons de plus près le fonctionnement de fetch, merge et pull.

#### Git Fetch

Fetch **récupère** tout l'historique des changements d'une branche/référence suivie.

- Ainsi, sur votre Git local, **récupérez** les mises à jour pour voir ce qui a changé sur GitHub

```bash
$ git fetch origin
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 733 bytes | 3.00 KiB/s, done.
From https://github.com/Romeoprov/hello-world
         e0b6038..d29d69f  main     -> origin/main
```

- Maintenant que nous avons récupéré tous les changements, nous pouvons **voir le statut** :

```bash
$ git status
On branch main
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
        (use "git pull" to update your local branch)

        nothing to commit, working tree clean
```

- En regardant sur GitHub, nous voyons que le fichier README.md **a été modifié**, mais vérifions tout de même

```bash
$ git log origin/main
commit d29d69ffe2ee9e6df6fa0d313bb0592b50f3b853 (origin/main)
Author: Romeoprov <77673807+Romeoprov@users.noreply.github.com>
Date:   Fri Mar 26 14:59:14 2021 +0100

          Updated README.md with a line about GitHub

commit e0b6038b1345e50aca8885d8fd322fc0e5765c3b (HEAD -> main)
Merge: dfa79db 1f1584e
Author: Romeoprov 
Date:   Fri Mar 26 12:42:56 2021 +0100

          merged with hello-world-images after fixing conflicts

        ...
        ...
```
Nous voyons bien que le fichier readme.md a été modifié.

#### Git Merge origin/main avec main local

- Maintenant, nous pouvons fusionner les branches origin/main et main locale :

```bash
$ git merge origin/main
Updating e0b6038..d29d69f
Fast-forward
    README.md | 4 +++-
    1 file changed, 3 insertions(+), 1 deletion(-)
```
- Check le statut

```bash
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
Le git local est à jour !

### Git pull

- Pull est une **combinaison** de **fetch** et **merge**, nous pouvons l'utiliser pour tirer directement le contenu dans notre main local :

```bash
git pull origin
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 794 bytes | 1024 bytes/s, done.
From https://github.com/Romeoprov/hello-world
         a7cdd4b..ab6b4ed  main       -> origin/main
Updating a7cdd4b..ab6b4ed
Fast-forward
    README.md | 2 ++
    1 file changed, 2 insertions(+)
```

### Git Push

Faire des **changements** dans le repo local

- Push sur GH

```bash
$ git commit -a -m "Updated index.html. Resized image"
[main e7de78f] Updated index.html. Resized image
    1 file changed, 1 insertion(+), 1 deletion(-)
```
```bash
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
        (use "git push" to publish your local commits)

nothing to commit, working tree clean
```
```bash
$ git push origin
Enumerating objects: 9, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 16 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 578 bytes | 578.00 KiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/w3schools-test/hello-world.git
         5a04b6f..facaeae  main -> main
```
Allez sur GitHub, et confirmez que le dépôt a un nouveau commit !


## En résumé

Voilà, vous savez maintenant utiliser **GIT** et **GitHub** dans la globalité. Personnellement, mon utilisation de ces outils se limite à ce tutoriel. Les fonctionnalités avancées ne sont pas utiles à mon cas d'usage de simple étudiant en réseau. Normalement, vous avez déjà les bases de la gestion de repo locaux et distants. Cette compétence vous sera bien utile si vous êtes amenés à gérer des projets de code en ligne ou si vous voulez héberger des fichiers de configuration de vos systèmes par exemple.