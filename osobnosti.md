---
title: "Osobnosti klimatologie"
layout: single
author_profile: false
permalink: /osobnosti/
toc: false
classes: wide
---

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }

  .person-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none !important;
    color: inherit;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
  }

  .person-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  /* ÚPRAVA: Přidáno !important, aby to šablona nemohla ignorovat */
  .card-image {
    width: 100% !important;
    height: 250px !important;
    object-fit: contain !important;   /* Zobrazí celou fotku */
    object-position: center !important;
    background-color: #fff !important;
    border-bottom: 1px solid #eaeaea;
    padding: 10px;
    margin: 0 !important; /* Reset marginů šablony */
  }

  .card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .person-year {
    font-size: 0.85rem;
    font-weight: bold;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .person-name {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-weight: 700;
    color: #222;
  }

  .person-desc {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 0;
  }
</style>

<p class="intro">
  Přehled klíčových vědců a badatelů, jejichž objevy formovaly naše chápání klimatického systému Země.
</p>

<div class="grid-container">
  {% assign sorted_osobnosti = site.osobnosti | sort: 'rok' %}
   
  {% for person in sorted_osobnosti %}
    <a href="{{ person.url }}" class="person-card">
       
  {% if person.header.teaser %}
        <img src="{{ person.header.teaser }}" alt="{{ person.title }}" class="card-image">
      {% else %}
    <div class="card-image" style="display:flex;align-items:center;justify-content:center;color:#ccc;font-size:0.9rem;">
          (Doplnit foto)
    </div>
      {% endif %}

  <div class="card-content">
        <div class="person-year">{{ person.rok }}</div>
        <h3 class="person-name">{{ person.title }}</h3>
        <p class="person-desc">{{ person.excerpt | truncate: 120 }}</p>
   </div>
    </a>
  {% endfor %}
</div>
