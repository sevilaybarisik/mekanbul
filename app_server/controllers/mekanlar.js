var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res, next) {
    res.render('anasayfa', { 'baslik': "Ana Sayfa","sayfaBaslik":{
      'siteAd': 'Mekanbul',
      'slogan': 'Civardaki Mekanları Keşfet!',    },
      'mekanlar':[
        {
            'ad':'Line Kafe',
            'adres':'iyaş Civarı',
            'puan':'4',
            'mesafe':'10km',
            'imkanlar':['kahve','çay','pasta']
        }, 
        {
            'ad':'Palermo Kafe',
            'adres':'iyaş Civarı',
            'puan':'4',
            'mesafe':'10km',
            'imkanlar':['kahve','çay','pasta']
        }, 
        {
            'ad':'Lenitivo Kafe',
            'adres':'iyaş Civarı',
            'puan':'2',
            'mesafe':'10km',
            'imkanlar':['kahve','çay','pasta']
        }, 
      ]
    
    });
};

const mekanBilgisi = function (req, res, next) {
    res.render('mekanbilgisi',  
    { 'baslik':'Mekan Bilgisi',
      "mekanBaslik":'Line Kafe',
      "mekanDetay":{
        'ad':'Line Kafe',
        'adres':'iyaş Civarı',
        'puan':'2',
        'saatler':[
            {
                'gunler':'Pazartesi-Cuma',
                'acilis':'9.00',
                'kapanis':'23.00',
                'kapali':'false'
            },
            {
                'gunler':'Cumartesi-Pazar',
                'acilis':'10.00',
                'kapanis':'22.00',
                'kapali':'false'
            }

        ],
        'imkanlar':['kahve','çay','pasta'],
        'koordinatlar':{
            'enlem':'37.7',
            'boylam':'30.5'
        },
        'yorumlar':[
            {
                'yorumYapan':'Sevilay',
                'puan':'3',
                'tarih':'20 Ekim 2022',
                'yorumMetni':'Çok Berbat'
            },
            {
                'yorumYapan':'Ali',
                'puan':'5',
                'tarih':'20 Ekim 2022',
                'yorumMetni':'Süper'
            },
        ]
        
      }
     
}
)}

const yorumEkle = function (req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle ' });
}

module.exports = {
anaSayfa,
mekanBilgisi,
yorumEkle,
}