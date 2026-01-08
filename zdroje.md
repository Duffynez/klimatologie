---
title: "Seznam použité literatury"
layout: single
permalink: /zdroje/
author_profile: true
toc: false
classes: wide
---

Zde naleznete kompletní seznam zdrojů seřazený chronologicky.

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
      vertical-align: top;
  }

  /* Efekt při prokliku na konkrétní citaci */
  tr:target {
      background-color: #fff9c4 !important;
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
      {% assign sorted_citace = site.data.citace | sort: 'year' %}
      
      {% for citace in sorted_citace %}
      <tr id="{{ citace.id }}">
        <td>
            <strong>[{{ citace.id }}]</strong>
        </td>
        <td>
            {% if citace.url != "" %}
              <a href="{{ citace.url }}" target="_blank"><strong>{{ citace.title }}</strong></a>
            {% else %}
              <strong>{{ citace.title }}</strong>
            {% endif %}
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
