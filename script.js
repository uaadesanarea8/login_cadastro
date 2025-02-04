console.log("Olá Mundo!");
// <! -- Script Login e Senha
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="ns" && password=="ns") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (username=="eb" && password=="eb") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (username=="fl" && password=="fl") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (username=="mb" && password=="mb") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (username=="bl" && password=="bl") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (username=="rf" && password=="rf") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (done==0) { alert("Login Invalido!"); }
}
// Fim -->
