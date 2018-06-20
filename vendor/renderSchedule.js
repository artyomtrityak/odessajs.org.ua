$(document).ready(function () {

  var talks6july = [
    {time: '16:30', author: '', title: 'Registration and welcome drinks'},
    {time: '17:00', author: 'Sara Vieira', title: 'The Dream of Styleguide Driven Development'},
    {time: '17:30', author: '', title: 'Break'},
    {time: '17:45', author: 'Haroen Viaene', title: 'You’re probably making an api client'},
    {time: '18:15', author: '', title: 'Break'},
    {time: '18:30', author: 'Alex Troush', title: 'The existential crisis in a blockchain era'},
    {time: '19:00', author: '', title: 'Pizza break'},
    {time: '19:30', author: 'Aleksandra Shynkevich & Nikita Dubko', title: 'Get prepared for your performance. Speaker\'s guidelines from an organizer [Speech]'},
    {time: '20:00', author: '', title: 'Break'},
    {time: '20:10', author: 'Mike MacCana', title: 'Deploying your JS app in 2018 [en]'},
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

  var infoBlock =
    '           <div class="schedule__info">' +
    '              <div class="schedule__info-time">${time}</div>' +
    '              <div class="schedule__info-text">' +
    '                <span class="schedule__info-text-icon form"></span>' +
    '                ${title}' +
    '              </div>' +
    '            </div>';

  $.template("InfoBlockTemplate", infoBlock);


  var reportBlock_1 =
    '<div class="schedule__report">' +
    '        <div class="schedule__report-time">${time}</div>' +
    '        <div class="schedule__report-hall-b">' +
    '             ${title}' +
    '          <div class="schedule__reporter">${author}</div>' +
    '        </div>' +
    '      </div>';

  $.template("reportBlockTemplate_1", reportBlock_1);

  var reportTimeBlock =
    '         <div class="schedule__report-time">${time}</div>';
  $.template("reportTimeBlockTemplate", reportTimeBlock);

  var infoBlock_2 =
    '              <div class="schedule__info-text">' +
    '                <span class="schedule__info-text-icon form"></span>' +
    '                ${title}' +
    '              </div>';
  $.template("InfoBlockTemplate_2", infoBlock_2);

  var hallBlock =
    '        <div class="schedule__report-hall-c">' +
    '          ${title}' +
    '          <div class="schedule__reporter">${author}</div>' +
    '         </div>';
  $.template("hallBlockTemplate", hallBlock);

  function renderTalksTable() {

    var july6_schedule = '';

    $.each(talks6july, function (i, sp) {
      if (sp.author) {
        july6_schedule += $.tmpl("reportBlockTemplate_1", sp)[0].outerHTML;
      } else {
        july6_schedule += $.tmpl("InfoBlockTemplate", sp)[0].outerHTML;
      }
    });

    $('#july6_schedule').append(july6_schedule);

    // _____________________________________________

    var july7_schedule = '';
    $.each(talks7july, function (i, sp) {

      var scheduleRow = '<div class="schedule__report">';
      var scheduleCells = '';

      scheduleRow += $.tmpl("reportTimeBlockTemplate", sp)[0].outerHTML;

      $.each(sp.talks, function (i, obj) {

        if(obj.author) {
          scheduleCells += $.tmpl("hallBlockTemplate", obj)[0].outerHTML;
        } else {
          if(i < 1){
            scheduleCells += $.tmpl("InfoBlockTemplate_2", obj)[0].outerHTML;
            console.log(scheduleCells)
          }
        }

      });

      scheduleRow += scheduleCells + '</div>';
      july7_schedule += scheduleRow;
    });


    $('#july7_schedule').append(july7_schedule);
  }

  renderTalksTable();

});
