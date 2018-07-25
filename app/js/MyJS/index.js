console.log('home_script loaded');

$('#home_next').click(()=> {
    ipc.send('next-home');
});