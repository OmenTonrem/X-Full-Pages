const main = document.getElementById("main")
const hesap = document.getElementById("hesapolusturma")
const label = document.getElementById("isim")
const sa = document.getElementById("Telefon")
const label2 = document.getElementById("name")
const sa2 = document.getElementById("pass")



function a() {
    main.style.opacity = '0.9';
    hesap.style.display = 'flex';
}
function b() {
    main.style.opacity = '1';
    hesap.style.display = 'none';
}
function c() {
    
    label.style.borderColor = '#1B92C5';

}
function settings() {
    let settings = document.getElementById("Settings")
    settings.style.display = 'flex'
}
function settingsnone() {
    let settings = document.getElementById("Settings")
    settings.style.display = 'none'
}

function d() {
    sa.style.bordercolor = '#1B92C5';
}
function y() {
    let x = document.getElementById("na")
    x.style.backgroundColor = '##1d1d1e';
}
function n() {
    let n = document.getElementById("kk");
    let d = document.getElementById("ok");
    let k = document.getElementById("tm");
    let t = document.getElementById("mm");
    let m = document.getElementById("kss")
    m.style.height = '156px';
    k.style.display = 'inline';
    n.style.display = 'flex';
    d.style.display = 'block';
    t.style.display = 'inline';
    // t.style.color = '#1D9BF0';
}

function o() {
    let leftten40 = document.getElementById("leftten40");
    leftten40.style.marginLeft = '55px';
    leftten40.style.color = 'white';
    let inlineolcak = document.getElementById("inlineolcak");
    inlineolcak.style.display = 'inline';
    let kkf = document.getElementById("kkf");
    kkf.style.display = 'none';
    let ls = document.getElementById("ls");
    ls.style.marginLeft = '-15px';
    ls.style.color = '#71767B'



}

function p() {
    let kkf = document.getElementById("kkf");
    kkf.style.display = 'inline'
    let ls = document.getElementById("ls");
    ls.style.marginLeft = '40px';
    ls.style.color = 'white';
    let inlineolcak = document.getElementById("inlineolcak");
    inlineolcak.style.display = 'none';
    let leftten40 = document.getElementById("leftten40");
    leftten40.style.marginLeft = '0px';
    leftten40.style.color = '#71767B';
    
}
function l() {
    let ll = document.getElementById("ll");
    let inp = document.getElementById("inp");
    let inp1= document.getElementById("inp1");
    ll.style.color = '#1D9BF0';
    inp1.style.border = '1px solid #1D9BF0'
    inp.style.paddingRight = '50px';
    let flexolcak = document.getElementById("flexolcak");
    flexolcak.style.display = 'flex';
    flexolcak.style.cursor = 'pointer';
    inp1.style.marginLeft = '50px';

}
function olck() {
    let ll = document.getElementById("ll");
    let inp = document.getElementById("inp");
    let inp1= document.getElementById("inp1");
    let saga= document.getElementById("saga");
    let ghs= document.getElementById("ghs");
    let hahayt= document.getElementById("hahayt");
    inp1.style.backgroundColor = 'black';
    ghs.style.display = 'flex';
    inp1.style.width = '444px';
    saga.style.marginLeft = '64px';
    ll.style.color = '#1D9BF0';
    inp1.style.border = '1px solid #1D9BF0'
    // inp.style.paddingRight = '50px';
    let flexolcak = document.getElementById("flexolcak");
    flexolcak.style.display = 'flex';
    flexolcak.style.cursor = 'pointer';
    // inp1.style.marginLeft = '50px';
    // ghs.style.height = '60px';
    hahayt.style.marginTop = '-2px';

}
function oynatma() {
    let oynatma = document.getElementById("oynatma");
    let oynatmama = document.getElementById("oynatmama");
    oynatma.style.color = '#00BA7C'
    oynatmama.style.color = '#00BA7C'
}
function oynatmama() {
    let oynatma = document.getElementById("oynatma");
    let oynatmama = document.getElementById("oynatmama");
    oynatma.style.color = '#71767B'
    oynatmama.style.color = '#71767B'

}
function istatik() {
    let istatik = document.getElementById("istatik");
    let istatistik = document.getElementById("istatistik");
    istatik.style.color = '#1D9BF0'
    istatistik.style.color = '#1D9BF0'
}
function istatistik() {
    let istatik = document.getElementById("istatik");
    let istatistik = document.getElementById("istatistik");
    istatik.style.color = '#71767B'
    istatistik.style.color = '#71767B'

}
function yorum() {
    let yorum = document.getElementById("yorum");
    let yorumsuz = document.getElementById("yorumsuz");
    yorum.style.color = '#1D9BF0'
    yorumsuz.style.color = '#1D9BF0'
}
function yorumsuz() {
    let yorum = document.getElementById("yorum");
    let yorumsuz = document.getElementById("yorumsuz");
    yorum.style.color = '#71767B'
    yorumsuz.style.color = '#71767B'

}
function kalp() {
    let kalp = document.getElementById("kalp");
    let kalpsayi = document.getElementById("kalpsayi");
    kalpsayi.style.color = '#F91880'
    kalp.style.color = '#F91880';
}
function kalpsiz() {
    let kalp = document.getElementById("kalp");
    let kalpsayi = document.getElementById("kalpsayi");
    kalpsayi.style.color = '#71767B'
    kalp.style.color = '#71767B';
}
function an(){
    
    let ghs= document.getElementById("ghs");
    let ll = document.getElementById("ll");
    let flexolcak = document.getElementById("flexolcak");
    let inp1= document.getElementById("inp1");
    let saga= document.getElementById("saga");
    let hahayt= document.getElementById("hahayt");
    inp1.style.backgroundColor = '#202327';
    ghs.style.display = 'none';
    ll.style.color = '#2F3336';
    flexolcak.style.display = 'none';
    inp1.style.width = '508px';
    saga.style.marginLeft = '0';
    hahayt.style.marginTop = '53px';
    

}
function kes() {
    main.style.opacity = '1';
    // let ohom = document.getElementById("ohom");
    let h = document.getElementById("lol");
    h.style.display = 'none';
    
}
function foryou() {
    let foryou = document.getElementById("foryou");
    let foryouborder = document.getElementById("foryouborder");
    let trendingborder = document.getElementById("trendingborder");
    let trending = document.getElementById("trending");
    let news = document.getElementById("news");
    let newsborder = document.getElementById("newsborder");
    let sports = document.getElementById("sports");
    let sportsborder = document.getElementById("sportsborder");
    let entertainment = document.getElementById("entertainment");
    let entertainmentborder = document.getElementById("entertainmentborder");
    let hlour = document.getElementById("hlour");
    let hahayt = document.getElementById("jsjs");
    let mlak = document.getElementById("mlak");
    let simdisport = document.getElementById("simdisports");
    let klas = document.getElementById("klas");
    
    mlak.style.display = 'none'

    hlour.style.display = 'none'
    hahayt.style.display = 'block'
    foryou.style.color = 'white';
    foryouborder.style.display = 'block';
    trending.style.color = '#71767B';
    trendingborder.style.display = 'none';
    news.style.color = '#71767B';
    newsborder.style.display = 'none';
    sports.style.color = '#71767B';
    sportsborder.style.display = 'none';
    entertainment.style.color = '#71767B';
    entertainmentborder.style.display = 'none';
    simdisport.style.display = 'none'
    klas.style.display = 'none'
}



function trending() {
    let foryou = document.getElementById("foryou");
    let foryouborder = document.getElementById("foryouborder");
    let trendingborder = document.getElementById("trendingborder");
    let trending = document.getElementById("trending");
    let news = document.getElementById("news");
    let newsborder = document.getElementById("newsborder");
    let sports = document.getElementById("sports");
    let sportsborder = document.getElementById("sportsborder");
    let entertainment = document.getElementById("entertainment");
    let entertainmentborder = document.getElementById("entertainmentborder");
    let hlour = document.getElementById("hlour");
    let hahayt = document.getElementById("jsjs");
    let mlak = document.getElementById("mlak");
    let klas = document.getElementById("klas");
    klas.style.display = 'none'
    foryou.style.color = '#71767B';
    foryouborder.style.display = 'none';
    trending.style.color = 'white';
    trendingborder.style.display = 'block';
    news.style.color = '#71767B';
    newsborder.style.display = 'none';
    sports.style.color = '#71767B';
    sportsborder.style.display = 'none';
    entertainment.style.color = '#71767B';
    entertainmentborder.style.display = 'none';
    // zzzzzzzzzzzzzzzzzzzz
    hlour.style.display = 'flex'
    hahayt.style.display = 'none'
    mlak.style.display = 'none'


}
function news() {
    let foryou = document.getElementById("foryou");
    let foryouborder = document.getElementById("foryouborder");
    let news = document.getElementById("news");
    let newsborder = document.getElementById("newsborder");
    let trendingborder = document.getElementById("trendingborder");
    let trending = document.getElementById("trending");
    let sports = document.getElementById("sports");
    let sportsborder = document.getElementById("sportsborder");
    let entertainment = document.getElementById("entertainment");
    let entertainmentborder = document.getElementById("entertainmentborder");
    let mlak = document.getElementById("mlak");
    let simdisport = document.getElementById("simdisports");
    let klas = document.getElementById("klas");
    klas.style.display = 'none'
    sports.style.color = '#71767B';
    sportsborder.style.display = 'none';
    foryou.style.color = '#71767B';
    foryouborder.style.display = 'none';
    news.style.color = 'white';
    trending.style.color = '#71767B';
    trendingborder.style.display = 'none';
    newsborder.style.display = 'block';
    entertainment.style.color = '#71767B';
    entertainmentborder.style.display = 'none';
    mlak.style.display = 'flex'
    let hlour = document.getElementById("hlour");
    let hahayt = document.getElementById("jsjs");
    hlour.style.display = 'none'
    hahayt.style.display = 'none'
    simdisport.style.display = 'none'

}
function sports() {
    let foryou = document.getElementById("foryou");
    let foryouborder = document.getElementById("foryouborder");
    let news = document.getElementById("news");
    let newsborder = document.getElementById("newsborder");
    let trendingborder = document.getElementById("trendingborder");
    let trending = document.getElementById("trending");
    let sports = document.getElementById("sports");
    let sportsborder = document.getElementById("sportsborder");
    let entertainment = document.getElementById("entertainment");
    let entertainmentborder = document.getElementById("entertainmentborder");
    let simdisport = document.getElementById("simdisports");
    let hahayt = document.getElementById("jsjs");
    let klas = document.getElementById("klas");
    klas.style.display = 'none'
    sports.style.color = 'white';
    sportsborder.style.display = 'block';
    trending.style.color = '#71767B';
    trendingborder.style.display = 'none';
    news.style.color = '#71767B';
    newsborder.style.display = 'none';
    foryou.style.color = '#71767B';
    foryouborder.style.display = 'none';
    entertainment.style.color = '#71767B';
    entertainmentborder.style.display = 'none';
    simdisport.style.display = 'flex'
    hlour.style.display = 'none'
    mlak.style.display = 'none'
    hahayt.style.display = 'none'
    

}
function entertainment() {
    let foryou = document.getElementById("foryou");
    let foryouborder = document.getElementById("foryouborder");
    let news = document.getElementById("news");
    let newsborder = document.getElementById("newsborder");
    let trendingborder = document.getElementById("trendingborder");
    let trending = document.getElementById("trending");
    let sports = document.getElementById("sports");
    let sportsborder = document.getElementById("sportsborder");
    let entertainment = document.getElementById("entertainment");
    let entertainmentborder = document.getElementById("entertainmentborder");
    let hlour = document.getElementById("hlour");
    let hahayt = document.getElementById("jsjs");
    let mlak = document.getElementById("mlak");
    let klas = document.getElementById("klas")
    let simdisport = document.getElementById("simdisports");
    entertainment.style.color = 'white';
    entertainmentborder.style.display = 'block';
    trending.style.color = '#71767B';
    trendingborder.style.display = 'none';
    news.style.color = '#71767B';
    newsborder.style.display = 'none';
    foryou.style.color = '#71767B';
    foryouborder.style.display = 'none';
    sports.style.color = '#71767B';
    sportsborder.style.display = 'none';
    hlour.style.display = 'none'
    simdisport.style.display = 'none'
    hahayt.style.display = 'none'
    mlak.style.display = 'none'
    klas.style.display = 'flex'
    

}
function All() {
    let all = document.getElementById("allborder")
    let Mentions = document.getElementById("mentionsborder")
    let Verified = document.getElementById("verifiedborder")
    let all1 = document.getElementById("all")
    let verified1 = document.getElementById("verified")
    let mentions1 = document.getElementById("mentions")
    all.style.display = 'inline'
    Mentions.style.display = 'none'
    Verified.style.display = 'none'
    all1.style.color = 'white'
    verified1.style.color = '#71767B'
    mentions1.style.color = '#71767B'
    
}
function Verified() {
    let all = document.getElementById("allborder")
    let Mentions = document.getElementById("mentionsborder")
    let Verified = document.getElementById("verifiedborder")
    let all1 = document.getElementById("all")
    let verified1 = document.getElementById("verified")
    let mentions1 = document.getElementById("mentions")
    all.style.display = 'none'
    Mentions.style.display = 'none'
    Verified.style.display = 'inline'
    all1.style.color = '#71767B'
    verified1.style.color = 'white'
    mentions1.style.color = '#71767B'
    
}
function ohaknk() {
    let ohaknk = document.getElementById("ohaknk")
    ohaknk.style.backgroundColor = '#181919'
}
function ohaama() {
    let ohaama = document.getElementById("ohaknk")
    ohaama.style.backgroundColor = 'black'
}
function knkama() {
    let knkama = document.getElementById("knkama")
    knkama.style.backgroundColor = '#181919'
}
function knkamaa() {
    let knkama = document.getElementById("knkama")
    knkama.style.backgroundColor = 'black'
}
function yuhh() {
    let jsknk = document.getElementById("jsknk")
    jsknk.style.backgroundColor = '#181919'
}
function yuhhh() {
    let jsknk = document.getElementById("jsknk")
    jsknk.style.backgroundColor = 'black'
}
function Mentions() {
    let all = document.getElementById("allborder")
    let Mentions = document.getElementById("mentionsborder")
    let Verified = document.getElementById("verifiedborder")
    let all1 = document.getElementById("all")
    let verified1 = document.getElementById("verified")
    let mentions1 = document.getElementById("mentions")
    all1.style.color = '#71767B'
    verified1.style.color = '#71767B'
    mentions1.style.color = 'white'
    all.style.display = 'none'
    Mentions.style.display = 'inline'
    Verified.style.display = 'none'
    
}
function pok() {
    let h = document.getElementById("lol");
    h.style.display = 'flex';
    main.style.opacity = '0.9';
    
}
function kullanicidan_al()
{
    if (localStorage.getItem(label.value)!= null || sa.value.length <5 &&  sa.value.length <20 ||  label.value.length <5 && label.value.length <20){
        console.log("supraaa");
    }
    else{
        localStorage.setItem(label.value, sa.value)
    }
}
function yonlandirma(){
    console.log(label2.value , sa2.value);
    if (localStorage.getItem(label2.value) == null){
    console.log("Valid Value");
}else{
    if (localStorage.getItem(label2.value) == sa2.value) {
        window.location.href="./home.html";
    }
}}