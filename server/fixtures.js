if (Characters.find().count() === 0) {
  Characters.insert({
    name: 'Rhaubahn',
    lvl: 5,
    class: 'Paladin',
    race: 'Human',
    background: 'Acolyte',
    alignment: 'Lawful Good'
  });

  Characters.insert({
    name: 'Dave',
    lvl: 5,
    class: 'Fighter',
    race: 'Dwarf',
    background: 'Folk Hero',
    alignment: 'Chaotic Good'
  });

  Characters.insert({
    name: 'Fineas',
    lvl: 5,
    class: 'Warlock',
    race: 'Gnome',
    background: 'Charlatan',
    alignment: 'Chaotic Neutral'
  });
}
