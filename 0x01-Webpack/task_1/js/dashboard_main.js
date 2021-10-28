import $ from 'jquery';
const _ = require('lodash');

$.when( $.ready ).then(function() {
    let count = 0;
    function updateCounter() {
        count++;
        $('#count').html(`${count} clicks on the button`);
    };

    $('body').append(
        $('<p>').text('Holberton Dashboard'),
        $('<p>').text('Dashboard data for the students'),
        $('<button>').text('Click here to get started'),
        $('<p>').attr('id', 'count'),
        $('<p>').text('Copyright - Holberton School'),
    )

    $('button').on('click', _.debounce(updateCounter, 500));
});

