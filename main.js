var jokesArray = [
'I never trust the leaders of pretzel companies, their CEOs are always so Twisted.',
'I could have put more jokes about unemployed people but sadly none of them work.',
'I should make a song about candy, It would sound pretty sweet don`t you think?',
'I showed a blind person my drawing the other day, he couldn`t see why I thought it was so good.',
'A girl was talking to her friend, and she was dissapointed that she applied for two jobs and she got the one she didnt want. Her friend "Well it sucks to suck". She said "Well not really".',
'How do you make a tissue dance? Put a little boogie in it.',
'Where do you learn to make ice cream? Sunday School.',
'A little kid once asked me how do stars die. He was upset when I told him they usually die of overdose.'
];
var picArray = [
'https://arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/IHGJA2ODNBDDTFCTMLUJXQYWEA.jpg',
'https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2020/05/istock-677377162.jpg',
'https://static.tumblr.com/af6d21c12a86253955ae9336e7f9b1c9/gsi4ady/bQCofxliw/tumblr_static_qsrj3xhg5i8k0osoows8840w.png',
'https://www.theplaidzebra.com/wp-content/uploads/2015/04/6_blind-people-can-see-art-.jpg',
'https://ak.picdn.net/shutterstock/videos/1007831551/thumb/12.jpg',
'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/michaelolsonart/products/1677542/shirt-1599683398-20ef2558abab897afe842e91a9c0ddf7.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmMmNjIn1dXX0=',
'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2021_27/1746707/ice-cream-day-mc-main-210709.jpeg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png'
];
var randomNumber;
var responseBtnCntr = 1;
function proceed() {

randomNumber =	Math.floor(Math.random() * jokesArray.length);
document.getElementById('theJoke').textContent = jokesArray[randomNumber];
document.getElementById('pic').src = picArray[randomNumber];
}
