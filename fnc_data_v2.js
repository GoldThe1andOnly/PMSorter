// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'http://i.imgur.com/';
// 0:é †ç•ªã?«ã€€1:æ˜”ã?®
var bln_ResultMode = 1;
// 0:ãƒ†ã‚­ã‚¹ãƒˆã€€1:ã‚¤ãƒ©ã‚¹ãƒˆã€€2:ãƒ†ã‚­ã‚¹ãƒˆï¼‹ã‚¤ãƒ©ã‚¹ãƒˆ
var int_ResultImg = 2;
// ã‚¤ãƒ©ã‚¹ãƒˆè¡¨ç¤ºæ™‚ã€?ä½•ä½?ã?¾ã?§ã‚’ã‚¤ãƒ©ã‚¹ãƒˆè¡¨ç¤ºã?«ã?™ã‚‹ã?‹ã€‚
var int_ResultRank = 3;

// ã‚½ãƒ¼ãƒˆç”¨ã?®ãƒ†ãƒ¼ãƒ–ãƒ«ã‚’
// 0:æ®‹ã?™ã€€1:æ¶ˆã?™
var bln_ResultStyle = 0;

// ã‚½ãƒ¼ãƒˆé€²æ?—ãƒ?ãƒ¼ã?®è¡¨ç¤º
// 0:è¡¨ç¤ºã€€1:æ¶ˆã?™
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * ã‚¿ã‚¤ãƒˆãƒ«æƒ…å ±ï¼ˆç·¨é›†å?¯èƒ½ã€‚æœ€å¾Œã?®è¡Œã?«â€?,â€?ã‚’ä»˜ã?‘ã?ªã?„ã‚ˆã?†ã?«ã?—ã?¦ã??ã? ã?•ã?„ï¼‰
var int_Colspan = 3;
var ary_TitleData = [
   "lobotomyChar",
   "lobotomyAbno",
   "ruinaChar",
   "ruinaAbno",
   "limbusChar",
   "limbusAbno",
   "wonderlabChar",
   "wonderlabAbno",
   "distortiondetectiveChar",
   "leviathanChar",
   "artbook",
   "betaFan"
];

// * ã‚­ãƒ£ãƒ©ã‚¯ã‚¿ãƒ¼æƒ…å ±ï¼ˆç·¨é›†å?¯èƒ½ã€‚æœ€å¾Œã?®è¡Œã?«â€?,â€?ã‚’ä»˜ã?‘ã?ªã?„ã‚ˆã?†ã?«ã?—ã?¦ã??ã? ã?•ã?„ï¼‰
// * ä½¿ç”¨ãƒ•ãƒ©ã‚°ï¼ˆ0ã?«ã?™ã‚‹ã?¨ã‚½ãƒ¼ãƒˆã?«å…¥ã‚Šã?¾ã?›ã‚“ï¼‰, 
//   "ã‚¿ã‚¤ãƒˆãƒ«ID"ï¼ˆå…ˆé ­ã?‹ã‚‰0, 1, 2...ï¼‰, 
//   {ã‚¿ã‚¤ãƒˆãƒ«åˆ¥å?‚åŠ ãƒ•ãƒ©ã‚°}ï¼ˆ1ã‚’å…¥ã‚Œã‚‹ã?¨å¯¾è±¡ã‚¿ã‚¤ãƒˆãƒ«ã?«å…¥ã‚Šã?¾ã?™ï¼‰,
//   "ã‚­ãƒ£ãƒ©ã‚¯ã‚¿ãƒ¼å??", "ç”»åƒ?ï¼ˆç©ºç™½ã?®å ´å?ˆã€?ã‚­ãƒ£ãƒ©ã‚¯ã‚¿ãƒ¼å??ã?Œä½¿ç”¨ã?•ã‚Œã?¾ã?™ï¼‰"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
    //Lobotomy Corp Characters:
   [1, "Angela",			[1,0,1,0,0,0,0,0,0,0,0,0], "PaIAOsj.png"], 
   [1, "Malkuth",                       [1,0,1,0,0,0,0,0,0,0,0,0], "WlMFlbG.png"], 
   [1, "Yesod",				[1,0,1,0,0,0,0,0,0,0,0,0], "FdqbZN1.png"], 
   [1, "Hod",           		[1,0,1,0,0,0,0,0,0,0,0,0], "QCCCBIR.png"],
   [1, "Netzach",           		[1,0,1,0,0,0,0,0,0,0,0,0], "gVZHQ54.png"], 
   [1, "Tiphereth (A)",			[1,0,1,0,0,0,0,0,0,0,0,0], "gyt2E48.png"],
   [1, "Tiphereth (B)",			[1,0,0,0,0,0,0,0,0,0,0,0], "VO3TaaR.png"], 
   [1, "Gebura",			[1,0,1,0,0,0,0,0,0,0,0,0], "BXsZUS2.png"],
   [1, "Chesed",                        [1,0,1,0,0,0,0,0,0,0,0,0], "gsmkKoc.png"], 
   [1, "Binah",    			[1,0,1,0,0,0,0,0,0,0,0,0], "UHMCKFT.png"], 
   [1, "Hokma",         		[1,0,1,0,0,0,0,0,0,0,0,0], "8Sx6ZXb.png"], 
   [1, "Elijah",        		[1,0,0,0,0,0,0,0,0,0,0,0], "gND8UGi.png"], 
   [1, "Gabriel",       		[1,0,0,0,0,0,0,0,0,0,0,0], "SQGLCqe.png"], 
   [1, "Michelle",			[1,0,0,0,0,0,0,0,0,0,0,0], "RWTNvNl.png"], 
   [1, "Giovanni",      		[1,0,0,0,0,0,0,0,0,0,0,0], "hROORXO.png"],
   [1, "Lisa",     			[1,0,0,0,0,0,0,0,0,0,0,0], "Zw8dbn0.png"], 
   [1, "Enoch",         		[1,0,0,0,0,0,0,0,0,0,0,0], "igj71ij.png"], 
   [1, "Kali",          		[1,0,1,0,0,0,0,0,0,0,0,0], "3LnXkGm.png"],
   [1, "Daniel",        		[1,0,0,0,0,0,0,0,0,0,0,0], "XEdYdvH.png"], 
   [1, "Garion",			[1,0,0,0,0,0,0,0,0,0,0,0], "lntK1IH.png"], 
   [1, "Benjamin",      		[1,0,0,0,0,0,0,0,0,0,0,0], "4PmdbuZ.png"], 
   [1, "Carmen",			[1,0,1,0,0,0,0,0,0,0,0,0], "qVtw7S7.png"], 
   [1, "Ayin",                          [1,0,0,0,0,0,0,0,0,0,0,0], "0H7Kz1e.png"],
   [1, "Adam",                          [1,0,0,0,0,0,0,0,0,0,0,0], "x1rr3Gq.png"],
   [1, "Abram",                         [1,0,0,0,0,0,0,0,0,0,0,0], "cm7xLL8.png"], 
   [1, "Abel",                          [1,0,0,0,0,0,0,0,0,0,0,0], "v7XmIiJ.png"],
   [1, "Myo",                           [1,0,1,0,0,0,0,0,0,0,0,0], "4uhw7Av.png"],
   //Lobotomy Corp Abnos:
   [1, "Standard Training Dummy Rabbit", [0,1,0,0,0,0,0,0,0,0,0,0], "8aNqB0h.png"], 
   [1, "Scorched Girl",			[0,1,0,1,0,0,0,1,0,0,0,0], "47J3UgD.png"],
   [1, "One Sin and Hundreds of Good Deeds", [0,1,0,1,0,0,0,0,0,0,0,0], "Im6L3fV.png"], 
   [1, "Queen of Hatred",		[0,1,0,1,0,0,0,0,0,0,0,0], "sk2iRvV.png"], 
   [1, "Happy Teddy Bear",		[0,1,0,1,0,0,0,0,0,0,0,0], "xqGSlb2.png"], 
   [1, "Red Shoes",                     [0,1,0,1,0,0,0,0,0,0,0,0], "Q1Cd36k.png"], 
   [1, "Theresia",      		[0,1,0,0,0,0,0,0,0,0,0,0], "C6wENyh.png"], 
   [1, "Old Lady",                      [0,1,0,0,0,0,0,0,0,0,0,0], "xkyZOrR.png"], 
   [1, "Nameless Fetus",		[0,1,0,0,0,0,0,0,0,0,0,0], "pNz6iFA.png"],
   [1, "Lady Facing the Wall",		[0,1,0,0,0,0,0,0,0,0,0,0], "f0fnPx9.png"], 
   [1, "Nothing There",                 [0,1,0,1,0,0,0,0,0,0,0,0], "na4U0pb.png"],
   [1, "1.76 MHz",			[0,1,0,0,0,0,0,0,0,0,0,0], "hlkD631.png"],
   [1, "Singing Machine",		[0,1,0,1,0,0,0,0,0,0,0,0], "HOdHKOz.png"],
   [1, "Silent Orchestra",		[0,1,0,1,0,0,0,0,0,0,0,0], "YoumWIQ.png"],
   [1, "Warm-Hearted Woodsman",		[0,1,0,1,0,0,0,0,0,0,0,0], "EHPOZBw.png"],
   [1, "The Snow Queen",		[0,1,0,1,0,0,0,0,0,0,0,0], "WCvPjtx.png"],
   [1, "Big Bird",			[0,1,0,1,0,0,0,0,0,0,0,0], "HMPSofZ.png"],
   [1, "All-Around Helper",		[0,1,0,1,0,0,0,0,0,0,0,0], "JBQ1LgW.png"],
   [1, "Snow White's Apple",		[0,1,0,1,0,0,0,0,0,0,0,0], "eL8w3eT.png"],
   [1, "Spider Bud",			[0,1,0,1,0,0,0,1,0,0,0,0], "AXZadp2.png"],
   [1, "Beauty and The Beast",		[0,1,0,0,0,0,0,0,0,0,0,0], "BHUKvSE.png"],
   [1, "Plague Doctor",			[0,1,0,1,0,0,0,0,0,0,0,0], "35C8Mc4.png"],
   [1, "WhiteNight",    		[0,1,0,1,0,0,0,0,0,0,0,0], "otI3x4e.png"],
   [1, "Don't Touch Me",		[0,1,0,0,0,0,0,0,0,0,0,0], "RUfsRZg.png"],
   [1, "Rudolta",                       [0,1,0,0,0,0,0,0,0,0,0,0], "4OzN7hV.png"],
   [1, "Queen Bee",                     [0,1,0,1,0,0,0,0,0,0,0,0], "X4943X4.png"],
   [1, "Bloodbath",                     [0,1,0,1,0,0,0,0,0,0,0,0], "xeF6PQF.png"],
   [1, "Opened Can of Wellcheers",      [0,1,0,0,0,0,0,0,0,0,0,0], "ySyXLkj.png"],
   [1, "Alriune (LC)",       		[0,1,0,0,0,0,0,0,0,0,0,0], "pkMSUhy.png"],
   [1, "Forsaken Murderer",		[0,1,0,1,0,0,0,0,0,0,0,0], "sPefoc2.png"],
   [1, "Child of the Galaxy",		[0,1,0,1,0,0,0,0,0,0,0,0], "gGN03ok.png"],
   [1, "Punishing Bird",		[0,1,0,1,0,0,0,0,0,0,0,0], "Dn6cm0K.png"],
   [1, "Little Red Riding Hooded Mercenary",	[0,1,0,1,0,0,0,0,0,0,0,0], "FJ0z1er.png"],
   [1, "Big and Will be Bad Wolf",		[0,1,0,1,0,0,0,0,0,0,0,0], "T6QGvkT.png"],
   [1, "Fragment of the Universe",	[0,1,0,1,0,0,0,0,0,0,0,0], "VBoDBLq.png"],
   [1, "Crumbling Armor",			[0,1,0,0,0,0,0,0,0,0,0,0], "xnCxBIE.png"],
   [1, "Judgement Bird",		[0,1,0,1,0,0,0,0,0,0,0,0], "iPHresk.png"],
   [1, "Apocalypse Bird",		[0,1,0,1,0,0,0,0,0,0,0,0], "OaY4xV1.png"],
   [1, "King of Greed",         	[0,1,0,1,0,0,0,0,0,0,0,0], "Q3znpQ6.png"],
   [1, "The Little Prince",		[0,1,0,0,0,0,0,0,0,0,0,0], "S3kdAti.png"],
   [1, "Laetitia",			[0,1,0,1,0,0,0,0,0,0,0,0], "dzQLkSe.png"],
   [1, "Funeral of the Dead Butterflies",	[0,1,0,1,0,0,0,0,0,0,0,0], "1MnC1QR.png"],
   [1, "Der Freischutz",		[0,1,0,1,0,0,0,0,0,0,0,0], "eIoYPrA.png"],
   [1, "Dream of a Black Swan",		[0,1,0,1,0,0,0,0,0,0,0,0], "pC2bNtd.png"],
   [1, "Dreaming Current",		[0,1,0,0,0,0,0,0,0,0,0,0], "7RtpbUc.png"],
   [1, "Burrowing Heaven",		[0,1,0,1,0,0,0,0,0,0,0,0], "x8YLhLK.png"],
   [1, "Knight of Despair",		[0,1,0,1,0,0,0,0,0,0,0,0], "2ZrSdof.png"],
   [1, "Naked Nest",                    [0,1,0,0,0,0,0,0,0,0,0,0], "ZmdFNjP.png"],
   [1, "Mountain of Smiling Bodies",    [0,1,0,1,0,0,0,0,0,0,0,0], "rqVITGj.png"],
   [1, "Schadenfreude", 		[0,1,0,0,0,0,0,0,0,0,0,0], "IZLWR2h.png"],
   [1, "Heart of Aspiration",		[0,1,0,1,0,0,0,0,0,0,0,0], "HKuqS0G.png"],
   [1, "Notes from a Crazed Researcher", [0,1,0,0,0,0,0,0,0,0,0,0], "FBdZjVh.png"],
   [1, "Flesh Idol",    		[0,1,0,0,0,0,0,0,0,0,0,0], "vQMP9HE.png"],
   [1, "Giant Tree Sap",		[0,1,0,0,0,0,0,0,0,0,0,0], "otC7k3z.png"],
   [1, "Mirror of Adjustment",          [0,1,0,0,0,0,0,0,0,0,0,0], "ieJepph.png"],
   [1, "Shelter from the 27th of March",	[0,1,0,0,0,0,0,0,0,0,0,0], "aTIXyG4.png"],
   [1, "Fairy Festival (LC)",           [0,1,0,0,0,0,0,0,0,0,0,0], "3DNFelq.png"],
   [1, "Meat Lantern",  		[0,1,0,0,0,0,0,0,0,0,0,0], "SB7B2oa.png"],
   [1, "We Can Change Anything",        [0,1,0,0,0,0,0,0,0,0,0,0], "zU6dzcx.png"],
   [1, "Express Train to Hell",		[0,1,0,0,0,0,0,0,0,0,0,0], "mavR4Bs.png"],
   [1, "Scarecrow Searching for Wisdom",	[0,1,0,1,0,0,0,0,0,0,0,0], "TiiRpjr.png"],
   [1, "Dimensional Refraction Variant",	[0,1,0,0,0,0,0,0,0,0,0,0], "E0sgWuB.png"],
   [1, "CENSORED",                      [0,1,0,0,0,0,0,0,0,0,0,0], "9W6W6g9.png"],
   [1, "Skin Prophecy",                 [0,1,0,0,0,0,0,0,0,0,0,0], "DrZ5Tjz.png"],
   [1, "Portrait of Another World",	[0,1,0,0,0,0,0,0,0,0,0,0], "z1mFkHs.png"],
   [1, "Today's Shy Look",		[0,1,0,1,0,0,0,0,0,0,0,0], "wMY9kJu.png"],
   [1, "Blue Star",			[0,1,0,1,0,0,0,0,0,0,0,0], "d5CXI72.png"],
   [1, "You Must be Happy",		[0,1,0,0,0,0,0,0,0,0,0,0], "iWUHQ9L.png"],
   [1, "Luminous Bracelet",             [0,1,0,0,0,0,0,0,0,0,0,0], "HMMD2Nw.png"],
   [1, "Behaviour Adjustment",		[0,1,0,0,0,0,0,0,0,0,0,0], "kRoUJ3k.png"],
   [1, "Old Faith and Promise",         [0,1,0,0,0,0,0,0,0,0,0,0], "euSVd1Q.png"],
   [1, "Porccubus",			[0,1,0,1,0,0,0,0,0,0,0,0], "3gSnVMT.png"],
   [1, "Void Dream",			[0,1,0,0,0,0,0,0,0,0,0,0], "1n8cMQO.png"],
   [1, "Grave of Cherry Blossoms",	[0,1,0,0,0,0,0,0,0,0,0,0], "r0QlBKD.png"],
   [1, "The Firebird",			[0,1,0,0,0,0,0,0,0,0,0,0], "7PnPxYw.png"],
   [1, "Yin",                   	[0,1,0,0,0,0,0,0,0,0,0,0], "QmsMgAD.png"],
   [1, "Yang",				[0,1,0,0,0,0,0,0,0,0,0,0], "lhfHvoc.png"],
   [1, "Backward Clock",		[0,1,0,0,0,0,0,0,0,0,0,0], "8t2acQX.png"],
   [1, "Il Pianto della Luna",		[0,1,0,0,0,0,0,0,0,0,0,0], "i3ViEs9.png"],
   [1, "Army in Black",                 [0,1,0,0,0,0,0,0,0,0,0,0], "16BaWkv.png"],
   [1, "Ppodae",			[0,1,0,0,0,0,0,0,0,0,0,0], "BJzkIz8.png"],
   [1, "Parasite Tree",			[0,1,0,0,0,0,0,0,0,0,0,0], "byx5ia3.png"],
   [1, "Melting Love",          	[0,1,0,0,0,0,0,0,0,0,0,0], "p6uGln0.png"],
   [1, "Clouded Monk",			[0,1,0,0,0,0,0,0,0,0,0,0], "QKXMiLI.png"],
   [1, "You're Bald",			[0,1,0,0,0,0,0,0,0,0,0,0], "Zdz3SF0.png"],
   //Library of Ruina Characters
   [1, "Roland",                	[0,0,1,0,0,0,0,0,0,0,0,0], "6kDrL4F.png"],
   [1, "Pete",                          [0,0,1,0,0,0,0,0,0,0,0,0], "Nl8Hkz5.png"],
   [1, "Lenny",                         [0,0,1,0,0,0,0,0,0,0,0,0], "SA1JDyj.png"],
   [1, "Mang-Chi",			[0,0,1,0,0,0,0,0,0,0,0,0], "PYK6uIM.png"],
   [1, "Finn (LoR)",                    [0,0,1,0,0,0,0,0,0,0,0,0], "JxZ2xAy.png"],
   [1, "Yun",                           [0,0,1,0,0,0,0,0,0,0,0,0], "ulYXBuj.png"],
   [1, "Eri",				[0,0,1,0,0,0,0,0,0,0,0,0], "6CL9tWV.png"],
   [1, "Mo",    			[0,0,1,0,0,0,0,0,0,0,0,0], "4qsbur0.png"],
   [1, "Consta",			[0,0,1,0,0,0,0,0,0,0,0,0], "U0D1b1Z.png"],
   [1, "Arnold",			[0,0,1,0,0,0,0,0,0,0,0,0], "JL0edhh.png"],
   [1, "Taein",				[0,0,1,0,0,0,0,0,0,0,0,0], "je6yCUd.png"],
   [1, "McCullin",			[0,0,1,0,0,0,0,0,0,0,0,0], "wTSnTc0.png"],
   [1, "Naoki", 			[0,0,1,0,0,0,0,0,0,0,0,0], "ofX0ddI.png"],
   [1, "Pierre",				[0,0,1,0,0,0,0,0,0,0,0,0], "A4CLeZ5.png"],
   [1, "Jack",				[0,0,1,0,0,0,0,0,0,0,0,0], "yaGvBPC.png"],
   [1, "Mars",				[0,0,1,0,0,0,0,0,0,0,0,0], "nFnFdAg.png"],
   [1, "San",				[0,0,1,0,0,0,0,0,0,0,0,0], "HpiY59A.png"],
   [1, "Lulu",          		[0,0,1,0,0,0,0,0,0,0,0,0], "9BtuLky.png"],
   [1, "Walter",			[0,0,1,0,0,0,0,0,0,0,0,0], "jYVO3L3.png"],
   [1, "Isadora",                	[0,0,1,0,0,0,0,0,0,0,0,0], "HvGRUyU.png"],
   [1, "Julia",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "xPzygGO.png"],
   [1, "Gyeong-Mi",                	[0,0,1,0,0,0,0,0,0,0,0,0], "Ey4r2bA.png"],
   [1, "Dino",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "v5dncU2.png"],
   [1, "Zulu",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "fn42rsG.png"],
   [1, "Olga",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "O627wM5.png"],
   [1, "Rain",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "pIzkLRL.png"],
   [1, "Mika",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "AcQv00h.png"],
   [1, "Tommy",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "zGhQr3R.png"],
   [1, "Merry",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "RNy2cjD.png"],
   [1, "Alpha",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "lRi7RTi.png"],
   [1, "Beta",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "qWkWnBR.png"],
   [1, "Gamma",                   	[0,0,1,0,0,0,0,0,0,0,0,0], "OSgOMQe.png"],
   [1, "Liwei",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "t9c85U4.png"],
   [1, "Stephan",                	[0,0,1,0,0,0,0,0,0,0,0,0], "VJDVanv.png"],
   [1, "Tamaki",                	[0,0,1,0,0,0,0,0,0,0,0,0], "8gJjm1l.png"],
   [1, "Salvador",                	[0,0,1,0,0,0,0,0,0,0,0,0], "tn2DKxJ.png"],
   [1, "Yuna",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "9w6WoJm.png"],
   [1, "Philip",                	[0,0,1,0,0,0,0,0,0,0,0,0], "96rsuFL.png"],
   [1, "Alloc",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "QLTgD8a.png"],
   [1, "Dalloc",                	[0,0,1,0,0,0,0,0,0,0,0,0], "k0LuFym.png"],
   [1, "Bono",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "ck3jyfD.png"],
   [1, "Sayo",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "7lGDlPX.png"],
   [1, "Gin",                   	[0,0,1,0,0,0,0,0,0,0,0,0], "q1YWYCG.png"],
   [1, "Yang",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "CTEgHn4.png"],
   [1, "Meow",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "1L2pKs2.png"],
   [1, "Oink",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "aNMuIvb.png"],
   [1, "Mumu",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "tpucl4s.png"],
   [1, "Oscar",                         [0,0,1,0,0,0,0,0,0,0,0,0], "7CWZ8aJ.png"],
   [1, "Pamela",                	[0,0,1,0,0,0,0,0,0,0,0,0], "s2MH4KP.png"],
   [1, "Pameli",                	[0,0,1,0,0,0,0,0,0,0,0,0], "4BrPc0i.png"],
   [1, "Tomerry",                	[0,0,1,0,0,0,0,0,0,1,0,0], "Mg5gicm.png"],
   [1, "Lyla",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "7bDaJ5C.png"],
   [1, "Valerie",                	[0,0,1,0,0,0,0,0,0,0,0,0], "cZ3UZfJ.png"],
   [1, "Anton",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "jhRK0tx.png"],
   [1, "Yujin",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "CyC725U.png"],
   [1, "Valentin",                	[0,0,1,0,0,0,0,0,0,0,0,0], "bwFuaIr.png"],
   [1, "Tenma",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "DyniFRV.png"],
   [1, "Emma",                          [0,0,1,0,0,0,0,0,0,0,0,0], "TOAwuO2.png"],
   [1, "Noah",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "X6vdZLC.png"],
   [1, "Jin",                   	[0,0,1,0,0,0,0,0,0,0,0,0], "8nFPdmx.png"],
   [1, "Mi",                    	[0,0,1,0,0,0,0,0,0,0,0,0], "m53Vbx8.png"],
   [1, "Wang",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "QZ11wwy.png"],
   [1, "Rose (LoR)",                	[0,0,1,0,0,0,0,0,0,0,0,0], "Ax1ue6x.png"],
   [1, "Sen",                   	[0,0,1,0,0,0,0,0,0,0,0,0], "6yiEZZJ.png"],
   [1, "Lesti",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "kvyekFi.png"],
   [1, "Kalo",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "fZPDzg7.png"],
   [1, "Boris",                         [0,0,1,0,0,0,0,0,0,0,0,0], "zeMdLKh.png"],
   [1, "Katriel",                	[0,0,1,0,0,0,0,0,0,0,0,0], "z7kztPB.png"],
   [1, "Denis",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "QydepR1.png"],
   [1, "Lowell",                	[0,0,1,0,0,0,0,0,0,0,0,0], "pAgNCTF.png"],
   [1, "Cecil",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "nakl8RO.png"],
   [1, "Mei",                   	[0,0,1,0,0,0,0,0,0,0,0,0], "rplj641.png"],
   [1, "Nemo",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "LJPfCet.png"],
   [1, "Bada",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "zu0twDk.png"],
   [1, "Martina",                	[0,0,1,0,0,0,0,0,0,0,0,0], "3ca1lNN.png"],
   [1, "Esther",                	[0,0,1,0,0,0,0,0,0,0,0,0], "tV3q3Z9.png"],
   [1, "Hubert",                	[0,0,1,0,0,0,0,0,0,0,0,0], "dplQnyv.png"],
   [1, "Gloria",                	[0,0,1,0,0,0,0,0,0,0,0,0], "tj7cD1W.png"],
   [1, "Miris",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "jYhE0Ua.png"],
   [1, "Chun",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "Bf5gjSt.png"],
   [1, "Rudolph",                	[0,0,1,0,0,0,0,0,0,0,0,0], "2IX6Hk9.png"],
   [1, "Maxim",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "9J1Yw1N.png"],
   [1, "Nikolai",                	[0,0,1,0,0,0,0,0,0,0,0,0], "No6pDYr.png"],
   [1, "Moirai",                	[0,0,1,0,0,0,0,0,0,0,0,0], "uexonmN.png"],
   [1, "Yan",                   	[0,0,1,0,0,0,0,0,0,0,0,0], "jFW7U6h.png"],
   [1, "Iori",                  	[0,0,1,0,0,0,0,0,0,1,0,0], "QtXKeUw.png"],
   [1, "Xiao",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "VLW3JFR.png"],
   [1, "Mirinae",                	[0,0,1,0,0,0,0,0,0,0,0,0], "E7IwvHn.png"],
   [1, "Harold",                	[0,0,1,0,0,0,0,0,0,0,0,0], "EGYrPMz.png"],
   [1, "Olivier",                	[0,0,1,0,0,0,0,0,0,0,0,0], "ArzLTJN.png"],
   [1, "Eileen",                	[0,0,1,0,0,0,0,0,0,0,0,0], "mQbfbFu.png"],
   [1, "Greta",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "4caNu2Z.png"],
   [1, "Bremen",                	[0,0,1,0,0,0,0,0,0,0,0,0], "fI6hgpI.png"],
   [1, "Oswald",                	[0,0,1,0,0,0,0,0,0,0,0,0], "TOPM2BU.png"],
   [1, "Tanya",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "yQUyztN.png"],
   [1, "Jae-Heon",                	[0,0,1,0,0,0,0,0,0,0,0,0], "geKWxau.png"],
   [1, "Elena",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "L8wK0mG.png"],
   [1, "Pluto",                         [0,0,1,0,0,0,0,0,0,0,0,0], "PLPlQMF.png"],
   [1, "Argalia",                	[0,0,1,0,0,0,0,0,0,0,0,0], "ng02tHq.png"],
   [1, "Angelica",                	[0,0,1,0,0,0,0,0,0,0,0,0], "t7seNmK.png"],
   [1, "Astolfo",                	[0,0,1,0,0,0,0,0,0,0,0,0], "QnR7rzD.png"],
   [1, "Baral",                 	[0,0,1,0,0,0,0,0,0,0,0,0], "xBSPpJ4.png"],
   [1, "Luda",                  	[0,0,1,0,0,0,0,0,0,0,0,0], "4bhobhj.png"],
   [1, "Zena",                       	[0,0,1,0,0,0,0,0,0,0,0,0], "2LA1S3J.png"],
   [1, "The Vermillion Cross",          [0,0,1,0,0,0,0,0,0,0,0,0], "GYyqi4d.png"],
   [1, "Bayard",                        [0,0,1,0,0,0,0,0,0,0,0,0], "xn0E6Bv.png"],
   [1, "Dong-Hwan",                     [0,0,1,0,0,0,0,0,0,0,0,0], "55cfAlS.png"],
   [1, "Allen",                         [0,0,1,0,0,0,0,0,0,0,0,0], "h0aecwx.png"],
   [1, "Yae",                           [0,0,1,0,0,0,0,0,0,0,0,0], "UQBN1QU.png"],
   [1, "Irina",                         [0,0,1,0,0,0,0,0,0,0,0,0], "gNgf3o6.png"],
   [1, "Bamboo Hat Kim",                [0,0,1,0,0,0,0,0,0,0,0,0], "uVVckfI.png"],
   [1, "Dante (LoR)",                   [0,0,1,0,0,0,0,0,0,0,0,0], "o5vnEdX.png"],
   [1, "Jikan",                         [0,0,1,0,0,0,0,0,0,0,0,0], "ER7juO2.png"],
   [1, "Hanafuda",                      [0,0,1,0,0,0,0,0,0,0,0,0], "PSuJBul.png"],
   [1, "Thelma",                        [0,0,1,0,0,0,0,0,0,0,0,0], "dmnuKeR.png"],
   [1, "Naimon",                        [0,0,1,0,0,0,0,0,0,0,0,0], "0WFy1en.png"],
   [1, "Renaud",                        [0,0,1,0,0,0,0,0,0,0,0,0], "eTaiEtz.png"],
   [1, "Ogier",                         [0,0,1,0,0,0,0,0,0,0,0,0], "uy0ItCF.png"],
   [1, "??? (The Bookhunter)",          [0,0,1,0,0,0,0,0,0,0,0,0], "HnJa8Er.png"],
   [1, "The Pianist",                   [0,0,1,0,0,0,0,0,0,0,0,0], "qF321dt.png"],
   //Library of Ruina Abnormalities
   [1, "Pinnochio",                     [0,0,0,1,0,0,0,0,0,0,0,0], "StJABlm.png"],
   [1, "Silent Girl",                   [0,0,0,1,0,0,0,0,0,0,0,0], "4JiEZjf.png"],
   [1, "Fairy Festival (LoR)",          [0,0,0,1,0,0,0,0,0,0,0,0], "m3YqaUG.png"],
   [1, "Alriune (LoR)",       		[0,0,0,1,0,0,0,0,0,0,0,0], "yosuzTj.png"],
   [1, "Nosferatu",                     [0,0,0,1,0,0,0,0,0,0,0,0], "1d2YyJ6.png"],
   [1, "Ozma",                          [0,0,0,1,0,0,0,0,0,0,0,0], "uSncFgS.png"],
   [1, "Price of Silence",              [0,0,0,1,0,0,0,0,0,0,0,0], "ChUWdoA.png"],
   [1, "The Adult who Tells Lies",      [0,0,0,1,0,0,0,0,0,0,0,0], "vmOeDf9.png"],
   [1, "Jester of Nihil",               [0,0,0,1,0,0,0,0,0,0,0,0], "ZgLYJ23.png"],
   //Wonderlab Characters
   [1, "Catt",                          [0,0,0,0,1,0,0,0,0,0,0,0], "QuGLg41.png"],
   [1, "Rose (WL)",                     [0,0,0,0,1,0,0,0,0,0,0,0], "L9jNmTD.png"],
   [1, "Taii",                          [0,0,0,0,1,0,0,0,0,0,0,0], "tk5ZZHx.png"],
   [1, "Finn (WL)",                     [0,0,0,0,1,0,0,0,0,0,0,0], "DXQzrvB.png"],
   [1, "Ella",                          [0,0,0,0,1,0,0,0,0,0,0,0], "6W8lK7h.png"],
   [1, "Flower",                        [0,0,0,0,1,0,0,0,0,0,0,0], "uWCUC55.png"],
   [1, "Shasha",                        [0,0,0,0,1,0,0,0,0,0,0,0], "bM3RsPG.png"],
   [1, "Joe",                           [0,0,0,0,1,0,0,0,0,0,0,0], "LOXeosD.png"],
   [1, "Beebi",                         [0,0,0,0,1,0,0,0,0,0,0,0], "t1Z61wt.png"],
   [1, "Suho",                          [0,0,0,0,1,0,0,0,0,0,0,0], "6PMxcIv.png"],
   [1, "Daisy",                         [0,0,0,0,1,0,0,0,0,0,0,0], "yQBF0Y8.png"],
   [1, "Beozzi",                        [0,0,0,0,1,0,0,0,0,0,0,0], "aSKOtSv.png"],
   [1, "Narae",                         [0,0,0,0,1,0,0,0,0,0,0,0], "pFhg0sd.png"],
   [1, "Dal",                           [0,0,0,0,1,0,0,0,0,0,0,0], "CJgcZeV.png"],
   [1, "Alex",                          [0,0,0,0,1,0,0,0,0,0,0,0], "w8FoRQY.png"],
   [1, "Purin",                         [0,0,0,0,1,0,0,0,0,0,0,0], "QKpEtD0.png"],
   [1, "Toma",                          [0,0,0,0,1,0,0,0,0,0,0,0], "yQd1qIP.png"],
   [1, "Rza",                           [0,0,0,0,1,0,0,0,0,0,0,0], "QFUNoQw.png"],
   [1, "Kookie",                        [0,0,0,0,1,0,0,0,0,0,0,0], "jhelviC.png"],
   [1, "Parker",                        [0,0,0,0,1,0,0,0,0,0,0,0], "aZ6554w.png"],
   //Wonderlab Abnormalities
   [1, "Bottle of Tears",               [0,0,0,0,0,1,0,0,0,0,0,0], "kwNqhNQ.png"],
   [1, "Dingle Dangle",                 [0,0,0,0,0,1,0,0,0,0,0,0], "HUvx2Ag.png"],
   [1, "My Sweet Home",                 [0,0,0,0,0,1,0,0,0,0,0,0], "GoP3roL.png"],
   [1, "Red Queen",                     [0,0,0,0,0,1,0,0,0,0,0,0], "JHzkJQr.png"],
   [1, "Tangle",                        [0,0,0,0,0,1,0,0,0,0,0,0], "pwfNCPr.png"],
   [1, "Hookah Caterpillar",            [0,0,0,0,0,1,0,0,0,0,0,0], "zDvNafQ.png"],
   [1, "White Lake",                    [0,0,0,0,0,1,0,0,0,0,0,0], "DgM0klW.png"],
   [1, "Penitent Girl",                 [0,0,0,0,0,1,0,0,0,0,0,0], "vqO5wFn.png"],
   [1, "Drowned Sisters",               [0,0,0,0,0,1,0,0,0,0,0,0], "hfM0FoY.png"],
   [1, "Piscine Mermaid",               [0,0,0,0,0,1,0,0,0,0,0,0], "PrPjsOE.png"],
   [1, "Staining Rose",                 [0,0,0,0,0,1,0,0,0,0,0,0], "NlTq5Ln.png"],
   [1, "Titania",                       [0,0,0,0,0,1,0,0,0,0,0,0], "DXHbmqi.png"],
   [1, "Nobody Is",                     [0,0,0,0,0,1,0,0,0,0,0,0], "aYeVsCb.png"],
   [1, "Pygmalion",                     [0,0,0,0,0,1,0,0,0,0,0,0], "b9JqEZm.png"],
   [1, "Blue-Smocked Shepherd",         [0,0,0,0,0,1,0,0,0,0,0,0], "4F7kMxU.png"],
   [1, "Reddened Buddy",                [0,0,0,0,0,1,0,0,0,0,0,0], "5e4qcqp.png"],
   [1, "Servant of Wrath",              [0,0,0,1,0,1,0,0,0,0,0,0], "fQ0iGE7.png"],
   [1, "Road Home",                     [0,0,0,1,0,1,0,0,0,0,0,0], "2GN2On3.png"],
   [1, "Scaredy Cat",                   [0,0,0,1,0,1,0,0,0,0,0,0], "gQN9Ezu.png"],
   //Limbus Company Characters
   [1, "Dante (Limbus)",                [0,0,0,0,0,0,1,0,0,0,0,0], "31ysLFz.png"],
   [1, "Vergilius",                     [0,0,0,0,0,0,1,0,0,1,0,0], "hhD0QN2.png"],
   [1, "Charon",                        [0,0,0,0,0,0,1,0,0,0,0,0], "KB2klLW.png"],
   [1, "Mephistopheles",                [0,0,0,0,0,0,1,0,0,0,0,0], "QEjqWzJ.png"],
   [1, "Yi Sang",                       [0,0,0,0,0,0,1,0,0,0,0,0], "SH1UDZ4.png"],
   [1, "Faust",                         [0,0,0,0,0,0,1,0,0,0,0,0], "3o8pZtN.png"],
   [1, "Don Quixote",                   [0,0,0,0,0,0,1,0,0,0,0,0], "BPoGR71.png"],
   [1, "Ryoshu",                        [0,0,0,0,0,0,1,0,0,0,0,0], "HqbEVR2.png"],
   [1, "Meursault",                     [0,0,0,0,0,0,1,0,0,0,0,0], "nVfonL5.png"],
   [1, "Hong Lu",                       [0,0,0,0,0,0,1,0,0,0,0,0], "2fSnZh2.png"],
   [1, "Heathcliff",                    [0,0,0,0,0,0,1,0,0,0,0,0], "gpMtmgY.png"],
   [1, "Ishmael",                       [0,0,0,0,0,0,1,0,0,0,0,0], "iJWf8of.png"],
   [1, "Rodion",                        [0,0,0,0,0,0,1,0,0,0,0,0], "MTU4XJY.png"],
   [1, "Sinclair",                      [0,0,0,0,0,0,1,0,0,0,0,0], "MkjCIAJ.png"],
   [1, "Outis",                         [0,0,0,0,0,0,1,0,0,0,0,0], "xtgmA0p.png"],
   [1, "Gregor",                        [0,0,0,0,0,0,1,0,0,0,0,0], "qFIGl5G.png"],
   [1, "Yuri",                          [0,0,0,0,0,0,1,0,0,0,0,0], "iol7h5q.png"],
   [1, "Aya",                           [0,0,0,0,0,0,1,0,0,0,0,0], "FCK1q9y.png"],
   [1, "Hopkins",                       [0,0,0,0,0,0,1,0,0,0,0,0], "FDlBmv2.png"],
   [1, "Tomah",                         [0,0,0,0,0,0,1,0,0,0,0,0], "bdMVhtR.png"],
   [1, "Effie",                         [0,0,0,0,0,0,1,0,0,0,0,0], "AzurXOH.png"],
   [1, "Saude",                         [0,0,0,0,0,0,1,0,0,0,0,0], "wkgWXRx.png"],
   [1, "Kromer",                        [0,0,0,0,0,0,1,0,0,0,0,0], "KWpX3aA.png"],
   [1, "Guido",                         [0,0,0,0,0,0,1,0,0,0,0,0], "QppmGDf.png"],
   [1, "Papa Bongy",                    [0,0,0,0,0,0,1,0,0,0,0,0], "U1T9hOb.png"],
   [1, "Hermann",                       [0,0,0,0,0,0,1,0,0,0,0,0], "FehTuOH.png"],
   [1, "Gubo",                          [0,0,0,0,0,0,1,0,0,0,0,0], "8x970F0.png"],
   [1, "Jia Huan",                      [0,0,0,0,0,0,1,0,0,0,0,0], "CS4x4cM.png"],
   [1, "Sonya",                         [0,0,0,0,0,0,1,0,0,0,0,0], "rN0gcvX.png"],
   [1, "Demian",                        [0,0,0,0,0,0,1,0,0,0,0,0], "4AiOut8.png"],
   [1, "Aida",                          [0,0,0,0,0,0,1,0,0,0,0,0], "pt5ebol.png"],
   [1, "Siegfried",                     [0,0,0,0,0,0,1,0,0,0,0,0], "MS4FWR0.png"],
   [1, "Samjo",                         [0,0,0,0,0,0,1,0,0,0,0,0], "S9jY1FG.png"],
   [1, "Dongrang",                      [0,0,0,0,0,0,1,0,0,0,0,0], "7iGR09G.png"],
   [1, "Dongbaek",                      [0,0,0,0,0,0,1,0,0,0,0,0], "kzUUB53.png"],
   [1, "Shrenne",                       [0,0,0,0,0,0,1,0,0,0,0,0], "QgcA1Ez.png"],
   [1, "Ran",                           [0,0,0,0,0,0,1,0,0,0,0,0], "ZtKCFSa.png"],
   [1, "Marile",                        [0,0,0,0,0,0,1,0,0,0,0,0], "lrBjhXc.png"],
   [1, "Niko",                          [0,0,0,0,0,0,1,0,0,0,0,0], "lyLNcuI.png"],
   [1, "Alfonso",                       [0,0,0,0,0,0,1,0,0,0,0,0], "OFSOyea.png"],
   [1, "Panther",                       [0,0,0,0,0,0,1,0,0,0,0,0], "tD8jdjp.png"],
   [1, "Lion",                          [0,0,0,0,0,0,1,0,0,0,0,0], "cT6asRM.png"],
   [1, "Wolf",                          [0,0,0,0,0,0,1,0,0,0,0,0], "9d6LxmZ.png"],
   [1, "Aeng-Du",                       [0,0,0,0,0,0,1,0,0,0,1,0], "wk8Sd2i.png"],
   //Limbus Company Abnormalities
   [1, "Ebony Queen's Apple",           [0,0,0,0,0,0,0,1,0,0,0,0], "Q0h5WUx.png"],
   [1, "Pink Shoes",                    [0,0,0,0,0,0,0,1,0,0,0,0], "S9PU6I5.png"],
   [1, "Doomsday Calendar",             [0,0,0,0,0,0,0,1,0,0,0,0], "vqVhzZ9.png"],
   [1, "Golden Apple",                  [0,0,0,0,0,0,0,1,0,0,0,0], "rSiYAQy.png"],
   [1, "False Apple",                   [0,0,0,0,0,0,0,1,0,0,0,0], "ZrQPw29.png"],
   [1, "Have you Become Strong",        [0,0,0,0,0,0,0,1,0,0,0,0], "JDfxhun.png"],
   [1, "You Want To Get Beat? Hurtily?", [0,0,0,0,0,0,0,1,0,0,0,0], "QJu4B8i.png"],
   [1, "Baba Yaga",                     [0,0,0,0,0,0,0,1,0,0,0,0], "uYuIZiB.png"],
   [1, "Headless Ichthys",              [0,0,0,0,0,0,0,1,0,0,0,0], "a3BqdxZ.png"],
   [1, "Alleyway Watchdog",             [0,0,0,0,0,0,0,1,0,0,0,0], "q5e0zDO.png"],
   [1, "Blubbering Toad",               [0,0,0,0,0,0,0,1,0,0,0,0], "oO5LEWV.png"],
   [1, "KQE-1J-23",                     [0,0,0,0,0,0,0,1,0,0,0,0], "VsZ3WEf.png"],
   [1, "My Form Empties",               [0,0,0,0,0,0,0,1,0,0,0,0], "O3hsW8c.png"],
   [1, "Ardor Blossom Moth",            [0,0,0,0,0,0,0,1,0,0,0,0], "POc373w.png"],
   [1, "Hurting Teddy Bear",            [0,0,0,0,0,0,0,1,0,0,0,0], "3cmqbg2.png"],
   [1, "Heavenly Executor's Scribe",    [0,0,0,0,0,0,0,1,0,0,0,0], "W96lZxf.png"],
   [1, "Wayward Passenger",             [0,0,0,0,0,0,0,1,0,0,0,0], "00QF2B1.png"],
   [1, "Drifting Fox",                  [0,0,0,0,0,0,0,1,0,0,0,0], "8kqUOQo.png"],
   [1, "Bronze Bull",                   [0,0,0,0,0,0,0,1,0,0,0,0], "gllKSWN.png"],
   [1, "Shock Centipede",               [0,0,0,0,0,0,0,1,0,0,0,0], "CL2uTwU.png"],
   [1, "Fairy Gentleman",               [0,0,0,0,0,0,0,1,0,0,0,0], "2T3IXJg.png"],
   [1, "So That No One Will Cry",       [0,0,0,0,0,0,0,1,0,0,0,0], "2zCl9V7.png"],
   [1, "Spiral of Contempt",            [0,0,0,0,0,0,0,1,0,0,0,0], "RtcXc1g.png"],
   [1, "Rising Ashes",                  [0,0,0,0,0,0,0,1,0,0,0,0], "uvqWZmk.png"],
   [1, "Nymph",                         [0,0,0,0,0,0,0,1,0,0,0,0], "YOFwWUi.png"],
   [1, "Coffin Return",                 [0,0,0,0,0,0,0,1,0,0,0,0], "rtv25Wh.png"],
   [1, "Paper Chairman",                [0,0,0,0,0,0,0,1,0,0,0,0], "N2PNP5n.png"],
   [1, "Sunset Traveler",               [0,0,0,0,0,0,0,1,0,0,0,0], "3SY9nGd.png"],
   [1, "Skin Prophet",                  [0,0,0,0,0,0,0,1,0,0,0,0], "y7Yq9wk.png"],
   [1, "Rose Sign",                     [0,0,0,0,0,0,0,1,0,0,0,0], "6nNmvxa.png"],
   [1, "Walking Pearl",                 [0,0,0,0,0,0,0,1,0,0,0,0], "GD3QR03.png"],
   [1, "Gossypium Flower",              [0,0,0,0,0,0,0,1,0,0,0,0], "WZWZSWL.png"],
   [1, "Lost Mind",                     [0,0,0,0,0,0,0,1,0,0,0,0], "K3NJm5m.png"],
   [1, "Monkey Tree",                   [0,0,0,0,0,0,0,1,0,0,0,0], "dKY8K8O.png"],
   [1, "Hole-in-the-Man",               [0,0,0,0,0,0,0,1,0,0,0,0], "RyuDbZV.png"],
   [1, "Stuck in Heaven",               [0,0,0,0,0,0,0,1,0,0,0,0], "LT0nOQz.png"],
   [1, "Steam Transport Machine",       [0,0,0,0,0,0,0,1,0,0,0,0], "3xMAI6k.png"],
   [1, "Blue-ish Star",                 [0,0,0,0,0,0,0,1,0,0,0,0], "M9Mf2CH.png"],
   [1, "Spider of Marriage",            [0,0,0,0,0,0,0,1,0,0,0,0], "aI1ThE9.png"],
   [1, "Will You Play?",                [0,0,0,0,0,0,0,1,0,0,0,0], "VR2Rjb5.png"],
   [1, "Dreaming Electric Sheep",       [0,0,0,0,0,0,0,1,0,0,0,0], "ezH3XR8.png"],
   [1, "Faelantern",                    [0,0,0,0,0,0,0,1,0,0,0,0], "zyW1NpG.png"],
   [1, "Pagoda Veneration",             [0,0,0,0,0,0,0,1,0,0,0,0], "GqElOMe.png"],
   [1, "Basilisoup",                    [0,0,0,0,0,0,0,1,0,0,0,0], "53dDjqM.png"],
   [1, "Tomorrow's Expression",         [0,0,0,0,0,0,0,1,0,0,0,0], "ivucftR.png"],
   [1, "Drunkard",                      [0,0,0,0,0,0,0,1,0,0,0,0], "2ylBCDw.png"],
   [1, "Chattering Teeth",              [0,0,0,0,0,0,0,1,0,0,0,0], "s1JgYa2.png"],
   [1, "Four-hundred Roses",            [0,0,0,0,0,0,0,1,0,0,0,0], "JohA0LA.png"],
   [1, "Children in the Flask",         [0,0,0,0,0,0,0,1,0,0,0,0], "oXoiUy3.png"],
   [1, "All-Around Cleaner",            [0,0,0,0,0,0,0,1,0,0,0,0], "mXcfPtX.png"],
   [1, "Smokey Old Man",                [0,0,0,0,0,0,0,1,0,0,0,0], "r6L8jTV.png"],
   [1, "Star Luminary",                 [0,0,0,0,0,0,0,1,0,0,0,0], "3k0bydG.png"],
   [1, "Centipede Apostle",             [0,0,0,0,0,0,0,1,0,0,0,0], "32rb2XS.png"],
   [1, "4th Front of the Smoke War",    [0,0,0,0,0,0,0,1,0,0,0,0], "sPRRxnX.png"],
   [1, "Forsaken Employee",             [0,0,0,0,0,0,0,1,0,0,0,0], "INwFn4F.png"],
   [1, "Rose Hunter",                   [0,0,0,0,0,0,0,1,0,0,0,0], "PBft0Kc.png"],
   [1, "Heavenly Commander's Throne",   [0,0,0,0,0,0,0,1,0,0,0,0], "dMQZEzC.png"],
   [1, "Dimensional Oxidation Variant", [0,0,0,0,0,0,0,1,0,0,0,0], "cHlf8OZ.png"],
   [1, "Funeral of a Dying Butterfly",  [0,0,0,0,0,0,0,1,0,0,0,0], "GSvkMeD.png"],
   [1, "Der Schütze",                   [0,0,0,0,0,0,0,1,0,0,0,0], "WKSaPAP.png"],
   [1, "Overdue Assignments",           [0,0,0,0,0,0,0,1,0,0,0,0], "m73HfiI.png"],
   [1, "Centaur",                       [0,0,0,0,0,0,0,1,0,0,0,0], "oCPLOM8.png"],
   [1, "Hydra",                         [0,0,0,0,0,0,0,1,0,0,0,0], "qiwlUwY.png"],
   [1, "Nappy",                         [0,0,0,0,0,0,0,1,0,0,0,0], "rGCGVJu.png"],
   [1, "Golden Grip",                   [0,0,0,0,0,0,0,1,0,0,0,0], "fcFJrss.png"],
   [1, "Highway Devotee",               [0,0,0,0,0,0,0,1,0,0,0,0], "Fbtvn8T.png"],
   [1, "Fairy-Long-Legs",               [0,0,0,0,0,0,0,1,0,0,0,0], "IBvSw0j.png"],
   //Distortion Detective Characters
   [1, "Moses",                         [0,0,0,0,0,0,0,0,1,0,0,0], "FGUZhmn.png"],
   [1, "Ezra",                          [0,0,0,0,0,0,0,0,1,0,0,0], "FccWKpL.png"],
   [1, "YuRia",                         [0,0,0,0,0,0,0,0,1,0,0,0], "eWgk5qM.png"],
   [1, "Vespa",                         [0,0,0,0,0,0,0,0,1,0,0,0], "qqbSwZL.png"],
   [1, "Dias",                          [0,0,0,0,0,0,0,0,1,0,0,0], "g9wCwcL.png"],
   [1, "Han Hee-Joon",                  [0,0,0,0,0,0,0,0,1,0,0,0], "IqN1RNf.png"],
   //Leviathan Characters
   [1, "Garnet",                        [0,0,0,0,0,0,0,0,0,1,0,0], "MImGkOj.png"],
   [1, "Lapis",                         [0,0,0,0,0,0,0,0,0,1,0,0], "jgGTIz9.png"],
   [1, "Denver",                        [0,0,0,0,0,0,0,0,0,1,0,0], "pBEiRbH.png"],
   [1, "Lan Yen",                       [0,0,0,0,0,0,0,0,0,1,0,0], "iU5hmfc.png"],
   [1, "Nanseul",                       [0,0,0,0,0,0,0,0,0,1,0,0], "keAAh1h.png"],
   [1, "Rikako",                        [0,0,0,0,0,0,0,0,0,1,0,0], "xBK8FYw.png"],
   [1, "Jumsoon",                       [0,0,0,0,0,0,0,0,0,1,0,0], "h9ngHCv.png"],
   [1, "Pablo",                         [0,0,0,0,0,0,0,0,0,1,0,0], "TuQ7VaS.png"],
   [1, "Aseah",                         [0,0,0,0,0,0,1,0,0,1,0,0], "ISKdFRx.png"],
   //Artbook Characters
   [1, "Jeremy",                        [0,0,0,0,0,0,0,0,0,0,1,0], "o6UkWW1.png"],
   [1, "Norinori",                      [0,0,0,0,0,0,0,0,0,0,1,0], "8d15bTn.png"],
   [1, "Pale Horse",                    [0,0,0,0,0,0,0,0,0,0,1,0], "qtTx3W0.png"],
   [1, "The Beanstalk without Jack",    [0,0,0,0,0,0,0,0,0,0,1,0], "XqMpKaM.png"],
   [1, "Book Without Pictures or Dialogue", [0,0,0,0,0,0,0,0,0,0,1,0], "tCdPYq0.png"],
   [1, "Clown Smiling at Me",           [0,0,0,0,0,0,0,0,0,0,1,0], "ghAMxWH.png"],
   [1, "Fallen Amurdad",                [0,0,0,0,0,0,0,0,0,0,1,0], "ZkXsWyq.png"],
   [1, "My Sweet Orange Tree",          [0,0,0,0,0,0,0,0,0,0,1,0], "rLGeu3i.png"],
   [1, "Cinderellas Pumpkin Carriage",  [0,0,0,0,0,0,0,0,0,0,1,0], "hvkoF66.png"],
   [1, "Puss in Boots",                 [0,0,0,0,0,0,0,0,0,0,1,0], "1pZGSrr.png"],
   [1, "Someones Portrait",             [0,0,0,0,0,0,0,0,0,0,1,0], "jTzwdeE.png"],
   [1, "Missed Reaper",                 [0,0,0,0,0,0,0,0,0,0,1,0], "eJgJNhT.png"],
   [1, "Warden",                        [0,0,0,0,0,0,0,0,0,0,1,0], "r5lJm15.png"],
   [1, "Siren",                         [0,0,0,0,0,0,0,0,0,0,1,0], "emFDCXW.png"],
   [1, "The Little Mermaid",            [0,0,0,0,0,0,0,0,0,0,1,0], "57qtYGS.png"],
   [1, "Rope and Cord",                 [0,0,0,0,0,0,0,0,0,0,1,0], "yUHosnC.png"],
   [1, "Distorted Form",                [0,0,0,0,0,0,0,0,0,0,1,0], "CkVeBZw.png"],
   [1, "Spring God",                    [0,0,0,0,0,0,0,0,0,0,1,0], "oQOF5lg.png"],
   [1, "Autumn God",                    [0,0,0,0,0,0,0,0,0,0,1,0], "5K45B0i.png"],
   [1, "Winter God",                    [0,0,0,0,0,0,0,0,0,0,1,0], "sHBnEUF.png"],
   [1, "Summer Deity",                  [0,0,0,0,0,0,0,0,0,0,1,0], "1rx1l4c.png"],
   [1, "Spring Deity",                  [0,0,0,0,0,0,0,0,0,0,1,0], "4FRUXGs.png"],
   [1, "Jangsan Tiger",                 [0,0,0,0,0,0,0,0,0,0,1,0], "neRmUaN.png"],
   [1, "Unused Blade Lineage Member",   [0,0,0,0,0,0,0,0,0,0,1,0], "Uiwiwth.png"],
   //Betas and Fanmade
   [1, "BongBong",                      [0,0,0,0,0,0,0,0,0,0,0,1], "GetB065.png"],
   [1, "Poor Screenwriters Note",       [0,0,0,0,0,0,0,0,0,0,0,1], "h068rj2.png"],
   [1, "Hammer of Light",               [0,0,0,0,0,0,0,0,0,0,0,1], "mMjjOnv.png"],
   [1, "Yellow Zwei Crewmember",        [0,0,0,0,0,0,0,0,0,0,1,1], "HtDQDz2.png"],
   [1, "Orange Zwei Crewmember",        [0,0,0,0,0,0,0,0,0,0,1,1], "UbvRf0y.png"],
   [1, "Grey Zwei Crewmember",          [0,0,0,0,0,0,0,0,0,0,1,1], "R6ScaBx.png"]
];
