const getString = window.location.search;
const myInfo = new URLSearchParams(getString);
// document.getElementById("timestamp").value = new Date().toISOString();


document.querySelector(`#results`).innerHTML = `
<p>New Member: ${myInfo.get(`firstname`)} ${myInfo.get(`lastname`)}</p>
<p>Title: ${myInfo.get(`title`)}</p>
<p>Email: ${myInfo.get(`email`)}</p>
<p>Phone: ${myInfo.get(`phone`)}</p>
<p>Member Level: ${myInfo.get(`rating`)}</p>
<p>Buisness Name: ${myInfo.get(`buisnessName`)}</p>
<p>Buisness Description: ${myInfo.get(`description`)}</p>
<p>Join at: ${myInfo.get(`timestamp`)}
`;

