import requests 


body = {
    "title": "Jesu Dulcis Memoria",
    "gabc": """
annotation: Hymn
annotation: 1
%%
(c4) JE(h)su,(h') dul(h)cis(h') me(d)mó(f')ri(e)a,(d'_) (,) Dans(h) ve(h')ra(i) cor(g')dis(h) gáu(j')di(i)a :(h.) (;) Sed(h) su(i')per(j) mel(k') et(j) ó(h')mni(j)a(ivHG'_) (,) E(h)jus(h') dul(i)cis(g') prae(e)sén(g')ti(h)a.(h.) (::)
""",
    "mode": "I"
}

req = requests.get('http://localhost:5000/api/chants')
print(req.text)