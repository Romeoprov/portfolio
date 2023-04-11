---
title: Implémenter Markdown, le language pour améliorer la prise de note et la production de documentation
date: 2022-10-10
description: Apprenez ce qu'est Markdown et apprenez à l'utiliser
tag: Veille technologique
author: Roméo Provenzano
---

## Introduction

Dans cet article, je vous présente le language Markdown, un language de balisage servant à la prise de note. Nous verrons en quoi il est utile et dans quel contexte l'utiliser.
Je présenterai également, les perspectives d'avenir de cette technologie ainsi que les enjeux liés à son usage.
Pour finir, je présenterai un tutoriel d'utilisation du language pour que vous puissiez l'adopter après la lecture de l'article.

<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png" alt="Logo MD" width="400" />
  <figcaption>Logo MD</figcaption>
</figure>

## Etat de l'art de Markdown

Markdown est un langage de balisage léger créé par John Gruber en 2004. Il permet de formater du texte de manière simple et rapide pour le Web, sans nécessiter de connaissances techniques poussées. Le but de Markdown est de faciliter la rédaction et la lecture de contenu en ligne, en offrant une syntaxe simple et intuitive.

Le fonctionnement de Markdown est assez simple : chaque élément à formater est entouré de caractères spéciaux, appelés balises, comme en html. Par exemple, pour mettre un texte en gras, il suffit de l'entourer de deux astérisques **. Pour mettre un texte en italique, on utilise des astérisques simplese *.

Markdown permet également de créer des titres, des listes, des liens hypertexte, des images, des tableaux, des blocs de code, et d'autres.
La syntaxe de Markdown est donc suffisamment riche pour permettre de créer des contenus complets, tout en restant très accessible aux utilisateurs de tous niveaux.

Enfin, il est important de noter que Markdown est compatible avec de nombreux logiciels et plateformes, notamment GitHub, Stack Overflow, Reddit, Medium, etc. Il est donc facilement exportable et utilisable sur de nombreuses plateformes en ligne.

En somme, Markdown est un langage de balisage léger, simple et efficace, qui permet de formater du texte rapidement et facilement pour le Web. Sa syntaxe intuitive et sa compatibilité avec de nombreuses plateformes en ligne en font un outil de choix pour tous ceux qui cherchent à communiquer efficacement sur le web.

Il existe plusieurs concurents à Markdown chacun offrant plusieurs avantages comme inconvénients. Nous pouvons citer l'exemple d'AsciiDoc : AsciiDoc est un langage de balisage qui se concentre sur la documentation technique. Il est plus robuste que Markdown et permet une plus grande personnalisation des styles et des formats. Les fichiers AsciiDoc peuvent également être convertis en formats tels que HTML, PDF, DocBook et LaTeX. Cependant, il peut être plus difficile à apprendre pour les débutants, et son utilisation est moins populaire.

## Les tendances de Markdown

Markdown est en fait très utilisé dans le monde de la programmation. C'est avec ce language que sont formatés les fichiers texte dont les fameux fichiers README.md que vous avez certainement luts dans les repos GitHub [(voous pouvez voir cet article parlant de GitHub)](https://r-provenzano.net/veille-technologique/utiliser-git-le-gestionnaire-de-gestion-de-code)

<figure>
  <img src="https://cdn.bulldogjob.com/system/photos/files/000/003/440/original/readme.png" alt="fichier Readme" width="400" />
  <figcaption>Exemple d'un fichier README.md</figcaption>
</figure>

Cela permet aux utilisateurs de GitHub de créer des documents bien formatés avec des titres, des listes, des liens et des images sans avoir à apprendre un langage de balisage complexe comme html.

Il permet la compatibilité universel entre les appareils, pas besoin de s'embêter avec les différents formats de docuements, comme on peut le trouver avec les suite burautique.

Markdown est beaucoup présent dans les applicaitons de prise de notes appelés "Second Cerveau". J'ai par exemple rédigé ce site internet en Markdown, sur mon éditeur de texte favoris, Joplin. Ce genre d'application permet de créer des notes en markdown et de les classer dans des classeurs.

https://play-lh.googleusercontent.com/6FVKy9WcrHA2FMUOqbPTwe4k4id2_ZeZLShINyju36F7QyJfjWtzEdNP6aGP2RdD87ok
Insérer des images là
<figure>
  <img src="https://play-lh.googleusercontent.com/6FVKy9WcrHA2FMUOqbPTwe4k4id2_ZeZLShINyju36F7QyJfjWtzEdNP6aGP2RdD87ok" alt="Application Joplin" width="200" />
  <figcaption>Application Joplin</figcaption>
</figure>

<figure>
  <img src="https://play-lh.googleusercontent.com/McJwuNc1Gbs8-XrPCH77Ar-qZMGujN6L0_zb_jv_0oBe2vwnmIboESQjPsTSu1uINbg" alt="Application Obsidian" width="250" />
  <figcaption>Application Obsidian</figcaption>
</figure>

## Perspectives d'évolution de la technologie

Les perspectives d'évolution de la technologie Markdown sont prometteuses, car elle continue d'être adoptée par de plus en plus de personnes et d'organisations. Voici quelques tendances et évolutions possibles pour l'avenir de Markdown :

1. Intégration plus poussée dans les outils de développement : De nombreux éditeurs de code et autres outils de développement intègrent déjà Markdown, mais cette intégration pourrait devenir encore plus poussée à l'avenir, offrant ainsi des fonctionnalités plus avancées et une meilleure expérience utilisateur.

2. Extension de la syntaxe Markdown : La syntaxe de base de Markdown est simple et facile à comprendre, mais il existe déjà des extensions et des variantes de Markdown qui ajoutent des fonctionnalités supplémentaires. À l'avenir, il est possible que de nouvelles extensions soient créées pour répondre à des besoins spécifiques.

3. Intégration de l'IA : L'intelligence artificielle pourrait être utilisée pour améliorer la syntaxe Markdown, en suggérant des balises manquantes ou en corrigeant les erreurs syntaxiques.

4. Utilisation pour la création de documents plus complexes : Bien que Markdown soit souvent utilisé pour écrire des documents simples, il pourrait être utilisé à l'avenir pour la création de documents plus complexes, tels que des livres électroniques ou des manuels d'utilisation.

---

## Tutoriel d'utilisation

### Avant propos

Veuillez noter que ce tutoriel ne présente pas toutes les subtilités de MD, mais il présente un aperçu de la syntaxe Mardown

### Table des matières

En-têtes
Accentuation (accentuations de propos)
Règle horizontale
Sauts de ligne
Listes
Liens
Images
Images + Liens
Citations en bloc
Notes de bas de page
Tableaux
Code et coloration syntaxique
HTML imbriqué
Divers


```markdown
### En-têtes

# H1
## H2
### H3
#### H4
##### H5
###### H6

Ou bien, pour H1 et H2, une syntaxe alternative :

Alt-H1
======

Alt-H2
------

### Accentuation (accentuations de propos)

L'accentuation, c'est-à-dire l'italique, avec *astérisques* ou _underscores_.

L'accentuation forte, c'est-à-dire le gras, avec **astérisques** ou __underscores__.

Accentuation combinée avec **astérisques et _underscores_**.

Le texte barré utilise deux tildes. ~~Gratte ça.~~

### Règle horizontale

Tirets :
- - -

Astérisques :
***

Underscores :
___

### Sauts de ligne

Ma recommandation de base pour apprendre comment fonctionnent les sauts de ligne est d'expérimenter et de découvrir -- appuyez sur <Entrée> une fois (c'est-à-dire, insérer une nouvelle ligne), puis appuyez deux fois (c'est-à-dire, insérer deux nouvelles lignes), voyez ce qui se passe.

Voici une ligne avec laquelle nous pouvons commencer.

Cette ligne est séparée de la précédente par deux retours à la ligne, il s'agira donc d'un *paragraphe séparé*.

Cette ligne est également un paragraphe séparé, mais...
Cette ligne n'est séparée que par un seul saut de ligne, il s'agit donc d'une ligne distincte dans le *même paragraphe*.

(Note technique : Markdown Here utilise les sauts de ligne GFM (github flavored markdown), il n'est donc pas nécessaire d'utiliser les sauts de ligne à deux espaces de MD).

### Listes

1. Premier élément de la liste ordonnée
2. Un autre élément
  * Sous-liste non ordonnée. 
1. Les chiffres réels n'ont pas d'importance, la liste s'incrémente.
  1. Sous-liste ordonnée
4. Et un autre point.

Les [ ] ci-dessous, n'ayant pas de [ x ], deviendront des cases à cocher HTML
non-cochées.
- [ ] Première tache à réaliser.
- [ ] Une autre chose à faire.
La case suivante sera une case à cocher HTML cochée.
- [x] Ça ... c'est fait!


* Les listes non ordonnées peuvent utiliser des astérisques.
- Ou des moins
+ Ou des plus.

### Liens

Il y a deux façons de créer des liens.

[Je suis un lien](https://www.google.com)

[Je suis un lien avec un titre](https://www.google.com "Page d'accueil de Google")

[Je suis un lien de style référencie][Texte de référence arbitraire insensible à la casse]

[Je suis une référence relative à un fichier de répertoire local](../blob/master/LICENSE)

[Vous pouvez utiliser des numéros pour les définitions de liens de style référence][1]

Ou laissez-le vide et utilisez le [texte du lien lui-même].

Les URLs entre crochets sont automatiquement transformés en liens. 
http://www.example.com ou <http://www.example.com> et parfois 
exemple.com (mais pas sur Github ou Joplin, par exemple).

Les liens de référence peuvent être écrient plus tard dans le fichier :

[texte de référence arbitraire insensible à la casse]: https://www.mozilla.org
[1]: http://slashdot.org
[texte du lien lui-même]: http://www.reddit.com

Vous pouvez créer un lien vers des rubriques avec des ID personnalisés dans le fichier en créant un lien standard avec un signe numérique (#) suivi de l'ID de la rubrique personnalisée. Ces liens sont communément appelés liens d'ancrage :

[Heading IDs](#heading-ids)	

### Images

Voici notre logo (survolez pour voir le texte du titre) :

Inline-style: 

![texte alternatif à l'image (àla manière de HTML)](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Titre du logo 1")

Ajuster la taille de l'image avec une balise html :

<img src="https://user.oc-static.com/upload/2019/01/10/15471323228309_p1c3.png" alt="Windows serv architecture" width="400"/>

Style de référence : 

![texte alt][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Titre du logo 2"

### Images + Liens

Il n'est pas possible de les ajouter directement mais vous pouvez ajouter une image avec un lien vers la vidéo comme ceci en HTML :

<a href="https://youtu.be/dQw4w9WgXcQ" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" alt="ALT TEXT" width="240" height="180" border="10" /></a>

Ou, en pur Markdown, mais en perdant la personnalisation de la taille et la bordure de l'image :

[![ALT TEXT](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://youtu.be/dQw4w9WgXcQ)

### Citations en bloc

> Les citations en bloc sont très pratiques dans les e-mails pour imiter le texte des réponses.
> Cette ligne fait partie de la même citation.
> > On peut imbriquer des citations dans des citations.

Casse de la citation.

> C'est une très longue ligne qui sera toujours citée correctement lorsqu'elle se terminera. Oh, vous pouvez *saisir* du **Markdown** dans une citation.

### Notes de bas de page

Les notes de bas de page ne font pas partie de la spécification Markdown de base, mais elles sont [prises en charge par GFM.](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes)

Voici une simple note de bas de page[^1].

Une note de bas de page peut également comporter plusieurs lignes[^2].

Vous pouvez également utiliser des mots, pour mieux coller à votre style d'écriture[^note].

[^1]: My reference.
[^2]: Chaque nouvelle ligne doit être préfixée par 2 espaces.
  Cela vous permet d'avoir une note de bas de page avec plusieurs lignes.
[^note]:
    Les notes de bas de page nommées seront toujours affichées avec des numéros à la place du texte, mais elles permettent une identification et une liaison plus faciles. 
    Cette note de bas de page a également été réalisée avec une syntaxe différente utilisant 4 espaces pour les nouvelles lignes.
	
### Tableaux

Les tableaux ne font pas partie de la spécification de base de Markdown, mais ils font partie de GFM et Markdown Here. Ils constituent un moyen facile d'ajouter des tableaux à votre courrier électronique - une tâche qui nécessiterait autrement un copier-coller depuis une autre application.

Les deux points peuvent être utilisés pour aligner les colonnes.

| Les tableaux  | sont          | cool  |
| ------------- |:-------------:| -----:|
| La col 2 est | centrée | $12 |
| La col 3 est | allignée à droite | $1600 |
| Les rayures de zèbre | sont chouettes | $1 |

Il doit y avoir au moins 3 tirets séparant chaque cellule d'en-tête.

Les pipes extérieurs (|) sont facultatifs, et vous n'avez pas besoin de faire en sorte que le format que le texte Markdown brut s'aligne joliment. Vous pouvez également utiliser le format Markdown en ligne.

Markdown | moins | joli
--- | --- | ---
*Ca rend* | `quand même` | **bien**
1 | 2 | 3

J'utilise [un générateur de tableaux en ligne](https://www.tablesgenerator.com/markdown_tables#) 

### Code et coloration syntaxique

Les blocs de code font partie de la spécification Markdown, mais la coloration syntaxique ne l'est pas. Cependant, de nombreux moteurs de rendu comme celui de Github, Markdown Here, ou Joplin prennent en charge la coloration syntaxique. Les languages pris en charge et la manière dont les noms de languages doivent être écrits varient d'un moteur de rendu à l'autre. Markdown Here prend en charge la coloration pour des dizaines de langues (et des langues qui ne sont pas vraiment des languages, comme les diffs et les en-têtes HTTP) ; pour voir la liste complète, et comment écrire les noms de languages, voir la page [highlight.js](highlight.js.https://highlightjs.org/static/demo/) de démonstartion.

Le `code` a des `back-ticks` autour de lui.

Les blocs de code sont entourés par trois accents graves ```, soit indentés avec quatre espaces. Je recommande de n'utiliser que les blocs de code délimités par les accents graves -- ils sont plus faciles et seuls ceux-là supportent la coloration syntaxique.
````
```javascript
var s = "Coloration syntaxique de JavaScript";
alert(s);
```
 ```python
s = "Coloration syntaxique de Python"
print s
```
 ```
Aucune language indiqué, donc pas de coloration syntaxique. 
Mais ajoutons une <b> balise </b>.
```
```
### HTML imbriqué

Vous pouvez également utiliser du HTML brut dans votre Markdown, et cela fonctionnera généralement très bien.

<dl>
  <dt>Definition list</dt>
  <dd>est quelque chose de souvent utilisé</dd>

  <dt>Markdown dans HTML</dt>
  <dd>Ne *marche* pas **très** bien. Utilisez plutôt HTML <em>tags</em>.</dd>
</dl>

Ton ordinateur a planté? Essayer de taper :
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>

 <!-- Vous pouvez utiliser les commentaires HTML -->

### Divers

#### Caracteres d'echappement

Pour taper *ce texte* entouré d'astérisques mais pas en italique :
Tapez \*ce texte\*.
```

## Conclusion

En conclusion, la technologie Markdown est une solution pratique et efficace pour la prise de notes et la production de documentation. En utilisant des symboles simples et des balises pour formater le texte, il est facile de créer des documents clairs et bien structurés en quelques minutes. De plus, le format Markdown est largement pris en charge par de nombreuses applications et outils, ce qui permet une intégration facile avec d'autres plateformes et systèmes. Enfin, la simplicité de la syntaxe Markdown en fait une option accessible pour les débutants et les utilisateurs avancés, leur permettant de produire du contenu de haute qualité sans avoir à apprendre des compétences de programmation complexes.



