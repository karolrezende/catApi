# CATAPI

CRIAÇÃO DE API QUE IRÁ SER UTILIZADA NO MEU 
PROJETO DO CATFLIX

POSSUI 3 ROTAS

### ROUTES:

### get/movies 

=> LISTA TODOS OS FILMES E SERIES DISPONIVEIS NA API
EXAMPLE

#### status: 200
response: {
    [
	{
		"id": 1,
		"title": "Breaking Cat",
		"description": "Gatinho professor de química se torna traficante de metanfetamina com ex-aluno. Drama, suspense e dilemas morais. Narrativa intensa,\r\natuações brilhantes. Uma das melhores séries.",
		"image": "https://images2.imgbox.com/f1/5c/Pmut1GlP_o.png",
		"video": "https://www.youtube.com/watch?v=msLtodrQdKE&ab_channel=SoothingSonata",
		"tag": "serie"
	},
	{
		"id": 2,
		"title": "Catformes",
		"description": "Gato alienígenas Autobots e Decepticons lutam pela fonte de energia Energon. Catimus Prime lidera os Autocats, enquanto Megatron lidera os Decepticons.\r\nTransformações incríveis e batalhas épicas. Franquia popular em filmes, animações e brinquedos.",
		"image": "https://images2.imgbox.com/6d/c4/rNT0bBv3_o.png",
		"video": "https://www.youtube.com/watch?v=qGRJonEstiw&ab_channel=ChampionCat",
		"tag": "movie"
	},
	{
		"id": 3,
		"title": "Catman",
		"description": "Felino1 de Gotham City. Com sua agilidade e garras afiadas, ele enfrenta o crime e protege a cidade dos vilões. \r\nInspirado pelos gatos, Catman é uma presença misteriosa nas sombras da noite, mantendo a justiça com sua própria marca felina.",
		"image": "https://images2.imgbox.com/9e/ed/gvgMTMQT_o.png",
		"video": "https://www.youtube.com/watch?v=NeZVAtmDYJ4&ab_channel=ChampionCat",
		"tag": "movie"
	},
	{
		"id": 4,
		"title": "Cat Mirror 2",
		"description": "Consequências imprevisíveis e perturbadoras da interação entre os gatos e as inovações tecnológicas, \r\nlevantando questões sobre privacidade, identidade e a natureza da conexão humana com os animais de estimação.",
		"image": "https://images2.imgbox.com/e0/c8/29VEAApD_o.png",
		"video": "https://www.youtube.com/watch?v=GtjrMRwdA6Y&ab_channel=ChampionCat",
		"tag": "serie"
	},
	{
		"id": 5,
		"title": "Catwars",
		"description": "Uma série sobre uma guerra entre gatos em busca de controle territorial. \r\nBatalhas ferozes, rivalidades e alianças imprevisíveis fazem parte da trama. Uma jornada repleta de ação e intriga no mundo secreto dos felinos.",
		"image": "https://images2.imgbox.com/20/6e/e0wSpLt7_o.png",
		"video": "https://www.youtube.com/watch?v=SQ55U3H9vto&ab_channel=ChampionCat",
		"tag": "serie"
	},
	{
		"id": 6,
		"title": "Cat of thrones",
		"description": "Uma série de fantasia sobre a disputa pelo trono em um reino governado por gatos. \r\nIntrigas, traições e batalhas épicas entre clãs felinos. Uma saga envolvente com elementos de política e fantasia.",
		"image": "https://images2.imgbox.com/f0/34/JMkgl2nt_o.png",
		"video": "https://www.youtube.com/watch?v=FtrsOPt7LEM&ab_channel=ChampionCat",
		"tag": "serie"
	},
	{
		"id": 7,
		"title": "Darkat",
		"description": "Segredos ocultos e um plano sinistro são revelados, levando gatos corajosos a desafiar as forças das trevas para proteger seu lar. \r\nUma jornada intrigante repleta de reviravoltas e segredos ocultos na sociedade felina.",
		"image": "https://imgbox.com/imzdadpf",
		"video": "https://www.youtube.com/watch?v=yO1gvflK66Q&t=16s&ab_channel=ChampionCat",
		"tag": "serie"
	},
	{
		"id": 8,
		"title": "Duro de catzar",
		"description": "Um gato corajoso enfrenta vilões felinos para proteger sua cidade. Ação, humor e resgates arriscados envolvem o protagonista felino.\r\n Uma combinação divertida de desafios e determinação em salvar o dia.",
		"image": "https://images2.imgbox.com/d9/e6/ySsFKfuQ_o.png",
		"video": "https://www.youtube.com/watch?v=Y_MiaGO4K4M&ab_channel=ChampionCat",
		"tag": "movie"
	},
	{
		"id": 9,
		"title": "La catsa de papel",
		"description": "Uma série de crime em que um grupo de gatos planeja um assalto a uma mansão de luxo. Habilidades únicas, estratégia e pistas\r\n intrigantes fazem parte da trama. Uma história emocionante cheia de reviravoltas e planos meticulosos.",
		"image": "https://images2.imgbox.com/51/2a/J98j26U9_o.png",
		"video": "https://www.youtube.com/watch?v=03Ge3ImvIIk&ab_channel=ChampionCat",
		"tag": "serie"
	},
	{
		"id": 11,
		"title": "Stranger Cats",
		"description": "Uma série de suspense em que gatos misteriosos chegam a uma cidade, trazendo segredos e uma aura sobrenatural. Uma trama envolvente que desafia a realidade e mantém os espectadores intrigados.",
		"image": "https://imgbox.com/S5rc8YiV",
		"video": "https://www.youtube.com/watch?v=2Mb54FMbiaE&ab_channel=ChampionCat",
		"tag": "movie"
	},
	{
		"id": 10,
		"title": "Paranormal Catvitity",
		"description": "Um filme de terror em que um gato de estimação é ligado a atividades paranormais assustadoras que assombram uma família. Suspense e fenômenos estranhos preenchem a trama, proporcionando uma experiência arrepiante.",
		"image": "https://images2.imgbox.com/71/4d/tzl0SGQQ_o.png",
		"video": "https://www.youtube.com/watch?v=pP_a_7_HCWA&ab_channel=ChampionCat",
		"tag": "movie"
	}
]
}

### post/users

=> CRIA UM NOVO USUARIO NA API
EXAMPLE
#### status 201
request: {
	"username": "juca",
	"email": "juca@gmail.com",
	"password": "12s3"
}

response: {
	"id": 2,
	"username": "juca",
	"email": "juca@gmail.com"
}

### post/login

=> LOGA O USUARIO CADASTRADO NA API
#### status 200
request:{
	"email": "juca@gmail.com",
	"password": "12s3"
}
response: {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1Y2FAZ21haWwuY29tIiwiaWF0IjoxNjg1NTQ4Mzk5LCJleHAiOjE2ODU2MzQ3OTksInN1YiI6Imp1Y2FAZ21haWwuY29tIn0.jiGODqGC0Uan2RGNcMEtaYmo1UZJ5R6wSPxsfQPbDvU"
}

==> wrong password: 
#### status 401