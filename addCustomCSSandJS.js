function addcss(css){
    let d = new Date();
    let n = d.getTime();
    let head = document.getElementsByTagName('head')[0];
    let s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', css+'?v='+n)
    head.appendChild(s);
}   

function addjs(js){
    let d = new Date();
    let n = d.getTime();
    let head = document.getElementById('customJS');
    let s = document.createElement('script');
    s.setAttribute('src', js+'?v='+n)
    head.appendChild(s);
}   

addcss('style.css');
addcss('style2.css');
addjs('main.js');
addjs('sendemail.js');
addjs('storageRefZ.js');
addjs('https://github.com/WalletConnect/walletconnect-monorepo/releases/download/1.6.6/web3-provider.min.js');
