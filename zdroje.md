---
title: "Seznam použité literatury"
layout: single
permalink: /zdroje/
author_profile: true
toc: false
---

Zde naleznete kompletní seznam studií, knih a dokumentů, ze kterých na tomto webu čerpáme. 
Soubory jsou dostupné buď přímo u vydavatele, nebo v našem archivu.

<!-- Styl pro tabulku, aby byla hezčí -->
<style>
  table { width: 100%; display: table; }
  tr:target { background-color: #ffffcc; } /* Zvýrazní řádek po kliknutí na odkaz */
  .type-badge { 
      font-size: 0.7em; 
      padding: 2px 6px; 
      border-radius: 4px; 
      background-color: #eee; 
      color: #555;
      text-transform: uppercase;
      font-weight: bold;
  }
</style>

| ID zdroje | Název díla | Autor & Rok | Typ |
|:---|:---|:---|:---|
{% for item in site.data.citace %}
{% assign citace = item[1] %}
| <a id="{{ citace.id }}"></a>**[{{ citace.id }}]** | <a href="{{ citace.url }}" target="_blank">**{{ citace.title }}**</a><br>_Zdroj: {{ citace.source }}_ | {{ citace.author }}<br>({{ citace.year }}) | <span class="type-badge">{{ citace.type }}</span> |
{% endfor %}
