---
title: "Seznam použité literatury"
layout: single
permalink: /zdroje/
author_profile: true
toc: false
---

Zde naleznete kompletní seznam zdrojů.

<style>
  /* Stylování tabulky */
  .sources-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 0.9em;
  }
  
  .sources-table th {
      background-color: #f2f2f2;
      text-align: left;
      padding: 12px;
      border-bottom: 2px solid #ddd;
  }

  .sources-table td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
      vertical-align: top; /* Zarovnání nahoru, aby texty seděly */
  }

  /* Efekt při prokliku na konkrétní citaci (zežloutnutí řádku) */
  tr:target {
      background-color: #fff9c4 !important; /* !important přebije styl šablony */
      transition: background-color 0.5s ease-in;
  }

  /* Vzhled štítku TYP */
  .type-badge { 
      display: inline-block;
      font-size: 0.75em; 
      padding: 4px 8px; 
      border-radius: 4px; 
      background-color: #eef1f5; 
      color: #333; 
      border: 1px solid #d1d5db;
      text-transform: uppercase; 
      font-weight: bold;
      white-space: nowrap;
  }

  /* Responzivní obal pro mobily */
  .table-wrapper {
      overflow-x: auto;
  }
</style>

<div class="table-wrapper">
  <table class="sources-table">
    <thead>
      <tr>
        <th style="width: 15%;">ID zdroje</th>
        <th style="width: 45%;">Název díla</th>
        <th style="width: 25%;">Autor & Rok</th>
        <th style="width: 15%;">Typ</th>
      </tr>
    </thead>
    <tbody>
      {% for citace in site.data.citace %}
      <tr id="{{ citace.id }}">
        <td>
            <strong>[{{ citace.id }}]</strong>
        </td>
        <td>
            <a href="{{ citace.url }}" target="_blank"><strong>{{ citace.title }}</strong></a>
            <br>
            <em style="color: #666; font-size: 0.9em;">Zdroj: {{ citace.source }}</em>
        </td>
        <td>
            {{ citace.author }}
            <br>
            ({{ citace.year }})
        </td>
        <td>
            <span class="type-badge">{{ citace.type }}</span>
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
