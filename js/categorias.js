var cate = js_get.get("cat");
var idnum = js_get.get("id");

var receitas = { "aves":[ 
                { 
                "nomereceita":"Frango Especial da eliane",
                "url":"folhareceita.html?id=1",
                },
                { 
                "nomereceita":"Filé de frango aos Quatro Qeijos",
                "url":"folhareceita.html?id=2",
                },
                { 
                "nomereceita":"Frango assado no azeite",
                "url":"folhareceita.html?id=3",
                },
                 { 
                "nomereceita":"Peru de Festa",
                "url":"folhareceita.html?id=4",
                },
                 { 
                "nomereceita":"Coxa e sobrecoxa assadas com batata",
                "url":"folhareceita.html?id=5",
                },
                 { 
                "nomereceita":"Frango cordon bleu",
                "url":"folhareceita.html?id=6",
                }                  
                ],
                "peixes":[ 
                { 
                "nomereceita":"Filé de peixe ao forno do Edu Guedes",
                "url":"folhareceita.html?id=7",
                },
                { 
                "nomereceita":"Salmão com nectarinas",
                "url":"folhareceita.html?id=8",
                },
                { 
                "nomereceita":"Quiche de camarão com aspargos",
                "url":"folhareceita.html?id=9",
                },
                 { 
                "nomereceita":"Peixe à Brasileira",
                "url":"folhareceita.html?id=10",
                },
                 { 
                "nomereceita":"Namorado ao Molho de Gengibre",
                "url":"folhareceita.html?id=11",
                },
                 { 
                "nomereceita":"Quibe de Atum da Renata",
                "url":"folhareceita.html?id=12",
                }                  
                ],
                "carnes":[ 
                { 
                "nomereceita":"Rocambole de Carne do Edu Guedes",
                "url":"folhareceita.html?id=13",
                },
                { 
                "nomereceita":"Bifes ao Molho Madeira",
                "url":"folhareceita.html?id=14",                },
                { 
                "nomereceita":"Pernil assado com farofa esperta",
                "url":"folhareceita.html?id=15",
                },
                 { 
                "nomereceita":"Abobrinha recheada com carne moída",
                "url":"folhareceita.html?id=16",
                },
                 { 
                "nomereceita":"Lombo ao Molho Madeira",
                "url":"folhareceita.html?id=17",
                },
                 { 
                "nomereceita":"Maminha na panela de pressão do Edu Guedes",
                "url":"folhareceita.html?id=18",
                }                  
                ],
                "massas":[ 
                { 
                "nomereceita":"Massa verde e branca com molho de tomates",
                "url":"folhareceita.html?id=19",
                },
                { 
                "nomereceita":"Pão de azeitona",
                "url":"folhareceita.html?id=20",                },
                { 
                "nomereceita":"Miojo Mix com Chèvre, Rúcula, Gengibre, Maçã",
                "url":"folhareceita.html?id=21",
                },
                 { 
                "nomereceita":"Brigatone",
                "url":"folhareceita.html?id=22",
                },
                 { 
                "nomereceita":"Lasanha de Alcachofra com Presunto de Parma",
                "url":"folhareceita.html?id=23",
                },
                 { 
                "nomereceita":"Pizza de Liquidificador Maravilhosa",
                "url":"folhareceita.html?id=24",
                }                  
                ],
                "saladas":[ 
                { 
                "nomereceita":"Salada morna de legumes e verduras da primavera",
                "url":"folhareceita.html?id=25",
                },
                { 
                "nomereceita":"Salada de ervilhas com nozes e queijo pecorino ao mel",
                "url":"folhareceita.html?id=26",                },
                { 
                "nomereceita":"Salada com beterraba e Queijo Brie",
                "url":"folhareceita.html?id=27",
                },
                 { 
                "nomereceita":"Salada de manga com abacate",
                "url":"folhareceita.html?id=28",
                },
                 { 
                "nomereceita":"Salada de macarrão à moda",
                "url":"folhareceita.html?id=29",
                },
                 { 
                "nomereceita":"Salpicão de Natal",
                "url":"folhareceita.html?id=30",
                }   
                 ],
                "doces":[ 
                { 
                "nomereceita":"Tiramisú Especial (sem gemas cruas)",
                "url":"folhareceita.html?id=31",
                },
                { 
                "nomereceita":"Canjica com Abacaxi",
                "url":"folhareceita.html?id=32",                },
                { 
                "nomereceita":"Picolé de Lichia com Saquê",
                "url":"folhareceita.html?id=33",
                },
                 { 
                "nomereceita":"Geleia de morango e água de rosas",
                "url":"folhareceita.html?id=34",
                },
                 { 
                "nomereceita":"Pavê de Uva com Chocolate",
                "url":"folhareceita.html?id=35",
                },
                 { 
                "nomereceita":"Abacaxi com farofa vita",
                "url":"folhareceita.html?id=36",
                }  
                ],
                "lanches":[ 
                { 
                "nomereceita":"Recheio para Tacos",
                "url":"folhareceita.html?id=37",
                },
                { 
                "nomereceita":"Sanduíche Delicioso de Forno",
                "url":"folhareceita.html?id=38",                },
                { 
                "nomereceita":"Pastel de tofu",
                "url":"folhareceita.html?id=39",
                },
                 { 
                "nomereceita":"Pizza enrolada da Neia",
                "url":"folhareceita.html?id=40",
                },
                 { 
                "nomereceita":"Pasteizinhos de Legumes",
                "url":"folhareceita.html?id=41",
                },
                 { 
                "nomereceita":"Hambúrger de brócolis",
                "url":"folhareceita.html?id=42",
                }  
        ]
    } 

var i=0;
function carrega(){
if(cate=="aves"){
    some = document.all.final;
    some.innerHTML += '<ul id="receitas">';
    some.innerHTML += '<li class=\"recepted2\"><span class=\"nomecategoria\">RECEITAS:</span></li>';  
        for(i=0;i<receitas.aves.length;i++){
        some.innerHTML +="<a href=" + receitas.aves[i].url +" ><li class=\"recepted\"><span class=\"nomecategoria\">" + receitas.aves[i].nomereceita + "</span></li></a>";
        }
    some.innerHTML += '<a href=\"index.html\"><li class=\"recepted2\"><span class=\"nomecategoria\">VOLTAR</span></li></a>';
    some.innerHTML += '</ul>';
    }
    if(cate=="peixes"){
    some = document.all.final;
    some.innerHTML += '<ul id="receitas">';
    some.innerHTML += '<li class=\"recepted2\"><span class=\"nomecategoria\">RECEITAS:</span></li>';  
        for(i=0;i<receitas.peixes.length;i++){
        some.innerHTML +="<a href=" + receitas.peixes[i].url +" ><li class=\"recepted\"><span class=\"nomecategoria\">" + receitas.peixes[i].nomereceita + "</span></li></a>";
        }
    some.innerHTML += '<a href=\"index.html\"><li class=\"recepted2\"><span class=\"nomecategoria\">VOLTAR</span></li></a>';
    some.innerHTML += '</ul>';
    }
        if(cate=="carnes"){
    some = document.all.final;
    some.innerHTML += '<ul id="receitas">';
    some.innerHTML += '<li class=\"recepted2\"><span class=\"nomecategoria\">RECEITAS:</span></li>';  
        for(i=0;i<receitas.carnes.length;i++){
        some.innerHTML +="<a href=" + receitas.carnes[i].url +" ><li class=\"recepted\"><span class=\"nomecategoria\">" + receitas.carnes[i].nomereceita + "</span></li></a>";
        }
    some.innerHTML += '<a href=\"index.html\"><li class=\"recepted2\"><span class=\"nomecategoria\">VOLTAR</span></li></a>';
    some.innerHTML += '</ul>';
    }
       if(cate=="massas"){
    some = document.all.final;
    some.innerHTML += '<ul id="receitas">';
    some.innerHTML += '<li class=\"recepted2\"><span class=\"nomecategoria\">RECEITAS:</span></li>';  
        for(i=0;i<receitas.massas.length;i++){
        some.innerHTML +="<a href=" + receitas.massas[i].url +" ><li class=\"recepted\"><span class=\"nomecategoria\">" + receitas.massas[i].nomereceita + "</span></li></a>";
        }
    some.innerHTML += '<a href=\"index.html\"><li class=\"recepted2\"><span class=\"nomecategoria\">VOLTAR</span></li></a>';
    some.innerHTML += '</ul>';
    }
           if(cate=="saladas"){
    some = document.all.final;
    some.innerHTML += '<ul id="receitas">';
    some.innerHTML += '<li class=\"recepted2\"><span class=\"nomecategoria\">RECEITAS:</span></li>';  
        for(i=0;i<receitas.saladas.length;i++){
        some.innerHTML +="<a href=" + receitas.saladas[i].url +" ><li class=\"recepted\"><span class=\"nomecategoria\">" + receitas.saladas[i].nomereceita + "</span></li></a>";
        }
    some.innerHTML += '<a href=\"index.html\"><li class=\"recepted2\"><span class=\"nomecategoria\">VOLTAR</span></li></a>';
    some.innerHTML += '</ul>';
    }
               if(cate=="doces"){
    some = document.all.final;
    some.innerHTML += '<ul id="receitas">';
    some.innerHTML += '<li class=\"recepted2\"><span class=\"nomecategoria\">RECEITAS:</span></li>';  
        for(i=0;i<receitas.doces.length;i++){
        some.innerHTML +="<a href=" + receitas.doces[i].url +" ><li class=\"recepted\"><span class=\"nomecategoria\">" + receitas.doces[i].nomereceita + "</span></li></a>";
        }
    some.innerHTML += '<a href=\"index.html\"><li class=\"recepted2\"><span class=\"nomecategoria\">VOLTAR</span></li></a>';
    some.innerHTML += '</ul>';
    }
        if(cate=="lanches"){
    some = document.all.final;
    some.innerHTML += '<ul id="receitas">';
    some.innerHTML += '<li class=\"recepted2\"><span class=\"nomecategoria\">RECEITAS:</span></li>';  
        for(i=0;i<receitas.lanches.length;i++){
        some.innerHTML +="<a href=" + receitas.lanches[i].url +" ><li class=\"recepted\"><span class=\"nomecategoria\">" + receitas.lanches[i].nomereceita + "</span></li></a>";
        }
    some.innerHTML += '<a href=\"index.html\"><li class=\"recepted2\"><span class=\"nomecategoria\">VOLTAR</span></li></a>';
    some.innerHTML += '</ul>';
    }
};