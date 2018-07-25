console.log('home_script loaded');

$('#home_next').click(function() {
    ipc.send('next-home');
});