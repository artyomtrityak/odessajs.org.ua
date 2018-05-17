$(document).ready(function () {

  var talks6july = [
    {time: '16:30', author: '', title: 'Registration and welcome drinks'},
    {time: '17:00', author: 'Sara Vieira', title: 'The Dream of Styleguide Driven Development'},
    {time: '17:30', author: '', title: 'Break'},
    {time: '17:45', author: 'Assim Hussain', title: 'Everyday AI'},
    {time: '18:15', author: '', title: 'Break'},
    {time: '18:30', author: '', title: ''},
    {time: '19:00', author: '', title: 'Pizza break'},
    {time: '19:30', author: '', title: ''},
    {time: '20:00', author: '', title: 'Break'},
    {time: '20:10', author: '', title: ''},
    {time: '20:30', author: '', title: 'Q&A Session'},
  ];

  var talks7july = [
    {
      time: '08:00-09:00',
      talks: [
        {author: '', title: 'Yoga'}
      ]
    },
    {
      time: '08:30 - 09:30',
      talks: [
        {author: '', title: 'Registration'}
      ]
    },
    {
      time: '09:30- 10:10',
      talks: [
        {author: '[en] Asim Hussain ', title: 'How to scale an SPA to 1M views for $1?'},
        {author: 'Yuriy Sherstyuk', title: 'How to get a good job as a Front End Dev'}
      ]
    },
    {
      time: '10:10-10:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:30 - 11:10',
      talks: [
        {author: '[en] Ivan Jovanovic', title: 'Serverless - the way microservices should be.'},
        {author: 'Sergiy Babich', title: 'WebComponents why and how'},
        {author: 'Ксения Редунова', title: 'Estimates: is there a silver bullet? [TechCorner]'}
      ]
    },
    {
      time: '11:10 - 11:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '11:30 - 12:15',
      talks: [
        {author: '[en] Gerard Sans', title: 'Advanced State Management using ngrx v5'},
        {author: 'Roman Rodomansky', title: 'Our experience of building effective educational process'}
      ]
    },
    {
      time: '12:15 - 12:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:30 - 13:10',
      talks: [
        {author: '[en] Rowdy Rabouw ', title: 'Unleash your web skills on native'},
        {author: 'Oleg Chorny ', title: 'TBD'}
      ]
    },
    {
      time: '13:10 - 14:30',
      talks: [
        {author: '', title: 'Lunch'}
      ]
    },
    {
      time: '14:30-15:10',
      talks: [
        {author: 'Trishul Goel', title: 'Cross browser extensions - lets make one'},
        {author: 'Илья Иванов', title: 'Advanced React-Native'}
      ]
    },
    {
      time: '15:10 - 15:40',
      talks: [
        {author: '', title: 'Long break'}
      ]
    },
    {
      time: '15:40-16:20',
      talks: [
        {author: 'Patrick Kettner ', title: ' JavaScript without javascript'}
      ]
    },
    {
      time: '16:30 - 16:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:50- 17:30',
      talks: [
        {author: '[en] David Kopal', title: 'Unleash the power of the higher-order components'},
        {author: 'Mihail Zachepilo', title: 'WebAssembly powered Machine Learning'}
      ]
    },
    {
      time: '17:30-18:00',
      talks: [
        {author: '', title: 'Long break'}
      ]
    },
    {
      time: '18:00-18:40',
      talks: [
        {author: 'Henning Muszynski', title: 'The ABC of Coded Style Guides'},
        {author: '[ua] Леонід Байда', title: 'Flow typing: шлях від експериментів до повного впровадження в enterprise проекті'}
      ]
    },
    {
      time: '18:40 - 20:00',
      talks: [
        {author: '', title: 'Afterparty with drinks and snacks'}
      ]
    }
  ];


  var timeRow = '<td colspan="3" style=" font-size: 25px; font-weight: bold;">${time}</td>';
  $.template("timeRowTemplate", timeRow);

  var talksRowCell =
    '<td colspan="${rowspan}">' +
    '<div class="item"> ' +
    '<div class="info-wrapper" style=" text-align: left; "> ' +
    '<div class="info"> ' +
    '<h7 class="info-title">' +
    '<span class="info-title-name">${author}</span>' +
    '</h7> ' +
    '<p class="info-rept font-weight-bold" style=" margin-top: 10px; font-size: 17px; "> ' +
    '${title}' +
    '</p></div> </div>' +
    '</div> ' +
    '</td>';
  $.template("talksRowCellTemplate", talksRowCell);

  function renderTalksTable() {

    // start render all
    var july6_schedule = '';
    $.each(talks6july, function (i, sp) {
      if (sp.title) {
        july6_schedule += '<tr>';
        sp.rowspan = '1';
        july6_schedule += $.tmpl("timeRowTemplate", sp)[0].outerHTML;
        july6_schedule += $.tmpl("talksRowCellTemplate", sp)[0].outerHTML;
        july6_schedule += '/<tr>';
      }
    });

    console.log(july6_schedule);

    $('#july6_schedule tbody').append(july6_schedule);

    var july7_schedule = '';
    $.each(talks7july, function (i, sp) {
      july7_schedule += '<tr>';
      july7_schedule += $.tmpl("timeRowTemplate", sp)[0].outerHTML;
      july7_schedule += '</tr>';
      july7_schedule += '<tr>';
      for (var j=0; j< 3; j++) {
        var tlk = sp.talks[j];
        if (tlk && tlk.title) {
          tlk.rowspan = sp.talks.length === 1 ? '3' : '1';
          july7_schedule += $.tmpl("talksRowCellTemplate", tlk)[0].outerHTML;
        }
      }
      if (sp.talks.length === 2) {
        july7_schedule += '<td></td>';
      }

      july7_schedule += '/<tr>';
    });

    console.log(july7_schedule);

    $('#july7_schedule tbody').append(july7_schedule);
  }

  renderTalksTable();

});
