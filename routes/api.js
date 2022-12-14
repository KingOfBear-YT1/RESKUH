__path = process.cwd()
var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "King Of Bear"
var lolkey = "KingOfBear"
const brainly = require('brainly-scraper');
var si = require('systeminformation');
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var now = require("performance-now")
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./../lib/utils/anjay");


var {
  igStalk,
  igDownload
} = require("./../lib/utils/ig");

var {
  pinterest
} = require("./../lib/utils/pinterest");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB,
  Tiktok,
  mediafiredownloader
} = require("./../lib/utils/downloader");

var { 
  ttdl,
  fbdl,
  soundcloud,
  telesticker,
  stickersearch,
  ssweb,
  tafsirsurah,
  linkwa,
  styletext,
  wikimedia,
  chara
} = require("./../lib/utils/scraper");

var { 
  stalkff
} = require("./../lib/utils/stalker");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        result: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        result: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        result: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        result: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notid: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter id'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 404,
        result: 'APIKEY SALAH, pastikan anda pernah berlangganan di https://saipulanuar.herokuapp.com'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        result: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        result: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        result: '500 - internal server error'
    }
}

/*
Akhir Pesan Error
*/
router.use(favicon(__path + "/views/favicon.ico"));
var listkey = ['KingOfBear', 'KINGOFBEAR', 'Riska', 'Utomodwiramadhan', 'https://youtu.be/JNuiRPRysuk', 'FreeApikey']

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});
// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

// LAHAN DIJUAL

router.get('/random/artinama', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://mnazria.herokuapp.com/api/arti?nama=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})

// About performa dan info viko-api
router.get("/about-info", async(req, res, next) => {
	var start = now()
        var end = now()
	const speednya = (start-end).toFixed(3)
	const speedsec = start.toFixed(3)
res.json({
speed_server : speednya,
speed_millisec : speedsec
})
});
router.get("/about-system-cpu", async(req, res, next) => {
	var start = now()
        var end = now()
	const speednya = (start-end).toFixed(3)
	const speedsec = start.toFixed(3)
si.cpu(function(data) {
	res.json({
  manufuc: data.manufacturer,
  brands: data.brand,
  speed: data.speed,
  core: data.cores,
  physical: data.physicalCores
})
})
});
router.get("/about-system-current", async(req, res, next) => {
	var start = now()
        var end = now()
	const speednya = (start-end).toFixed(3)
	const speedsec = start.toFixed(3)
si.currentLoad(function(data) {
	res.json({
  cpuload: data.currentLoad,
  cpuuser: data.currentLoadUser,
  loadsystem: data.currentLoadSystem
})
})
});
router.get('/music/joox', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
  Joox(query)
  .then((result) => {
  res.json(result)
    res.json(result)
  });
  } else {

    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/pendidikan/brainly', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
   brainly(query)
  .then((data) => {
 res.json(data)
  });
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/hack/tlpn', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://id.jagreward.com/member/verify-mobile/` + query))
  .then(response => response.json())
        .then(hasil => {
        var phone_prefix = hasil.phone_prefix;
        var result = hasil.message;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
		 phone_prefix
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})


router.get('/hack/sms', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://id.jagreward.com/member/verify-mobile/${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/textmaker/quobucin', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://viko-textmaker.herokuapp.com/api/textmaker2?text=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.results;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/card/welcome', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  const descriminator = req.query.descriminator;
  const memcount = req.query.memcount;
  const gcname = req.query.gcname;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!nama) return res.json(loghandler.notnama)
  if(!descriminator) return res.json(loghandler.descriminator)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!memcount) return res.json(loghandler.memcount)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hadi-api.herokuapp.com/api/card/Welcome?nama=${nama}&descriminator=${descriminator}&memcount=${memcount}&gcname=${gcname}&pp=${pp}&bg=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome.png', data)
        res.sendFile(__path+'/tmp/welcome.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/card/welcome2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  const descriminator = req.query.descriminator;
  const memcount = req.query.memcount;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!nama) return res.json(loghandler.notnama)
  if(!descriminator) return res.json(loghandler.descriminator)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!memcount) return res.json(loghandler.memcount)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hadi-api.herokuapp.com/api/card/Welcome2?nama=${nama}&descriminator=${descriminator}&memcount=${memcount}&gcname=${gcname}&gcicon=${gcicon}&pp=${pp}&bg=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome2.png', data)
        res.sendFile(__path+'/tmp/welcome2.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/card/welcome3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!username) return res.json(loghandler.username)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hadi-api.herokuapp.com/api/card/welcome3?username=${username}&memberCount=${memberCount}&gcname=${gcname}&bg=${bg}&pp=${pp}&gcicon=${gcicon}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome3.png', data)
        res.sendFile(__path+'/tmp/welcome3.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/card/goodbye', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  const descriminator = req.query.descriminator;
  const memcount = req.query.memcount;
  const gcname = req.query.gcname;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!nama) return res.json(loghandler.notnama)
  if(!descriminator) return res.json(loghandler.descriminator)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!memcount) return res.json(loghandler.memcount)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hadi-api.herokuapp.com/api/card/goodbye?nama=${nama}&descriminator=${descriminator}&memcount=${memcount}&gcname=${gcname}&pp=${pp}&bg=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
        res.sendFile(__path+'/tmp/goodbye.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/card/goodbye2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.nama;
  const descriminator = req.query.descriminator;
  const memcount = req.query.memcount;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!nama) return res.json(loghandler.notnama)
  if(!descriminator) return res.json(loghandler.descriminator)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!memcount) return res.json(loghandler.memcount)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hadi-api.herokuapp.com/api/card/goodbye2?nama=${nama}&descriminator=${descriminator}&memcount=${memcount}&gcname=${gcname}&gcicon=${gcicon}&pp=${pp}&bg=${bg}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodbye2.png', data)
        res.sendFile(__path+'/tmp/goodbye2.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/card/goodbye3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!username) return res.json(loghandler.username)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hadi-api.herokuapp.com/api/card/goodbye3?username=${username}&memberCount=${memberCount}&gcname=${gcname}&bg=${bg}&pp=${pp}&gcicon=${gcicon}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/goodbye3.png', data)
        res.sendFile(__path+'/tmp/goodbye3.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textmaker/quoteser', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://viko-textmaker.herokuapp.com/api/textmaker?text=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.results;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/textmaker/nulis2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://viko-textmaker.herokuapp.com/api/textmaker3?text=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.results;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})


////Add scrapper Itskhyaa
router.get("/pinterest", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    pinterest(query)
        .then((result) => {
	    const url_download = result[Math.floor(Math.random() * result.length)];
            res.json({
		    status : true,
                    creator : `${creator}`,
		    url_download,
		    'author' : 'KING OF BEAR, VIKO, ITSKHYAA, FDCIABDUL'
	    });
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
       res.sendFile(__path + '/views/apikey-not-found.html');
      }
});
	  

router.get('/f/simi', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://api.simsimi.net/v2/?text=${query}&lc=id&cf=false`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.success;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/f/simi2', async (req, res, next) => {
  const apikey = req.query.apikey;
  const query= req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://api.lolhuman.xyz/api/simi?apikey=KingOfBear&text=${query}`))
  .then(response => response.json())
        .then(data => {

        var result = data.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/f/botkuh', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://fdciabdul.tech/api/ayla?pesan=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.jawab;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/download/mediafire', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  mediafiredownloader(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
      res.sendFile(__path + '/views/apikey-not-found.html');
    }
});

router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey-not-found.html');
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.sendFile(__path + '/views/apikey-not-found.html');
    }
});

router.get("/yt/playmp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
       res.sendFile(__path + '/views/apikey-not-found.html');
      }
});

router.get("/yt/playmp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.sendFile(__path + '/views/apikey-not-found.html');
      }
});


router.get('/yt/search', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.sendFile(__path + '/views/apikey-not-found.html');
     }
});

router.get('/download/tiktok', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!apikey) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.notquery)
	
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://api.lolhuman.xyz/api/tiktok?apikey=KingOfBear&url=${url}`))
        .then(data => {
	
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/download/tiktok2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    ttdl(url)
        .then(result => {
        var result = result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/download/telesticker', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    telesticker(url)
        .then(result => {
        var result = result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/download/stickersearch', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    stickersearch(text)
        .then(result => {
        var result = result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/download/ssweb', async(req, res, next) => {
  var url = req.query.url
  var apikey = req.query.apikey
  
  if (!url) return res.json(loghandler.noturl)  
  if (!apikey) return res.json(loghandler.notapikey)
  if(listkey.includes(apikey)){
  
  ssweb(url)
  .then((data) =>{ 
    if (!data) return res.json(loghandler.notfound)
    res.set({'Content-Type': 'image/png'})
    res.send(data)
  })
           .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/download/linkwa', async(req, res, next) => {
  const apikey = req.query.apikey;
  const nama = req.query.query;
  
  if(!nama) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    linkwa(nama)
        .then(result => {
        var result = result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/textpro/styletext', async(req, res, next) => {
  const apikey = req.query.apikey;
  const teks = req.query.text;
  
  if(!teks) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    styletext(teks)
        .then(hasil => {
        var result = hasil;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/download/wikimedia', async(req, res, next) => {
  const apikey = req.query.apikey;
  const title = req.query.query;
  
  if(!title) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    wikimedia(title)
        .then(hasil => {
        var result = hasil;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/wallpaper/chara', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    chara(query)
        .then(jadi => {
        var result = jadi;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/download/soundcloud', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    soundcloud(url)
        .then(result => {
        var result = result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/download/tiktokview', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!apikey) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://api.lolhuman.xyz/api/tiktok?apikey=KingOfBear&url=${url}`))
  .then(response => response.json())
        .then(data => {

        var result = data.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/download/ig', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${url}`))
  .then(response => response.json())
        .then(data => {

        var result = data.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/download/pornhub', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/pornhub/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.res;
             res.json({
                 status : true,
                 creator : `${creator}`,
		 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/xvideo', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/xnxx', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/fb', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fbdl(url)
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/stalk/tiktok', async (req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  if(!apikey) return res.json(loghandler.notparam)
  if(!username) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=KingOfBear`))
  .then(response => response.json())
        .then(data => {

        var result = data.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/stalk/ig', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://vikopr.herokuapp.com/api/stalk?username=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/info/gempa', async (req, res, next) => {
	        var Apikey = req.query.apikey

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/stalk/npm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})
////New by itskhyaa & viko
router.get('/cerpen/random', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://viko-cerpenmu.herokuapp.com/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/quotes', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/quotes.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
             	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/cerpen/cinta', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/cerita/cinta`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/cerpen/horor', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/cerita/horor`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
});

router.get("/sertifikat/tolol", async (req, res, next) => {
  
  apikey = req.query.apikey;
  name = req.query.name;
  
  if(!name) return res.json(loghandler.notname)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/toloserti?apikey=KingOfBear&name='+ name 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/tolol.jpeg', data)
    res.sendFile(__path +'/tmp/tolol.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get("/sertifikat/fuckboy", async (req, res, next) => {
  
  apikey = req.query.apikey;
  name = req.query.name;
  
  if(!name) return res.json(loghandler.notname)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/fuckboy?apikey=KingOfBear&name='+ name 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/fuckboy.jpeg', data)
    res.sendFile(__path +'/tmp/fuckboy.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get("/sertifikat/fuckgirl", async (req, res, next) => {
  
  apikey = req.query.apikey;
  name = req.query.name;
  
  if(!name) return res.json(loghandler.notname)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/fuckgirl?apikey=KingOfBear&name='+ name 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/fuckgirl.jpeg', data)
    res.sendFile(__path +'/tmp/fuckgirl.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get("/sertifikat/bucinserti", async (req, res, next) => {
  
  apikey = req.query.apikey;
  name = req.query.name;
  
  if(!name) return res.json(loghandler.notname)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/bucinserti?apikey=KingOfBear&name='+ name 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/bucinserti.jpeg', data)
    res.sendFile(__path +'/tmp/bucinserti.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get("/sertifikat/pacarserti", async (req, res, next) => {
  
  apikey = req.query.apikey;
  name1 = req.query.name1;
  name2 = req.query.name2;
  
  if(!name1) return res.json(loghandler.notname1)
  if(!name2) return res.json(loghandler.notname2)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/pacarserti?apikey=KingOfBear&name1='+ name1 +'&name2='+ name2 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/pacarserti.jpeg', data)
    res.sendFile(__path +'/tmp/pacarserti.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/darkjoke', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const darkjoke = JSON.parse(fs.readFileSync(__path +'/data/darkjoke.json'));
    const Darkjoke = darkjoke[Math.floor(Math.random() * darkjoke.length)];
    let hasil = Darkjoke.darkjoke;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/darkjoke.jpeg', data)
    res.sendFile(__path +'/tmp/darkjoke.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/loli', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const loli = JSON.parse(fs.readFileSync(__path +'/data/loli.json'));
    const Loli = loli[Math.floor(Math.random() * loli.length)];
    let hasil = Loli.loli;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/loli.jpeg', data)
    res.sendFile(__path +'/tmp/loli.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/nsfwloli', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const nsfwloli = JSON.parse(fs.readFileSync(__path +'/data/NsfwLoli.json'));
    const NsfwLoli = nsfwloli[Math.floor(Math.random() * nsfwloli.length)];
    let hasil = NsfwLoli.nsfwloli;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nsfwloli.jpeg', data)
    res.sendFile(__path +'/tmp/nsfwloli.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/bokepig', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const bokepig = JSON.parse(fs.readFileSync(__path +'/data/bokepig.json'));
    const Bokepig = bokepig[Math.floor(Math.random() * bokepig.length)];
    let hasil = Bokepig.bokepig;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/bokepig.jpeg', data)
    res.sendFile(__path +'/tmp/bokepig.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/random/couple', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/couple`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 creator : `${creator}, Itskhyaa`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/stalk/epep', async (req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.id;
  
  if(!text) return res.json(loghandler.notid)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    stalkff(text)
        .then(hasil => {
        var result = hasil;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/id/ml', async (req, res, next) => {
        var Apikey = req.query.apikey;
	var id = req.query.id;
	var server = req.query.server;
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(!id) return res.json({'Pesan_untuk_anda': 'Masukkin id Mobile Legendsnya'})
	if(!server) return res.json({'Pesan_untuk_anda': 'Masukkin Servernya'})
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.lolhuman.xyz/api/mobilelegend/${id}/${server}?apikey=KingOfBear`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/database/micanbot', async (req, res, next) => {
        var Apikey = req.query.apikey
const portabel = '8080'
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://47.74.68.147:${portabel}/`))
        .then(response => response.json())
        .then(data => {
        var result = data
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})
////Akhir update by Itskhyaa

router.get('/random/pantun', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.zeks.me/api/pantun?apikey=pikodeka67`))
        .then(response => response.json())
        .then(data => {
        var result = data.result.pantun;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/random/wallpaper', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/wallpaper_hd?q=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});


router.get('/info/berita2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://newsapi.org/v2/top-headlines?country=id&apiKey=c0d2a1336d194743955b4170bd86f7af`))
        .then(response => response.json())
        .then(data => {
        var result = data.articles;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/info/berita', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=c0d2a1336d194743955b4170bd86f7af`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/jadwal-bioskop', async(req, res, next) => {
var Apikey = req.query.apikey

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.json({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/short/tinyurl', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
	} else {
res.json(loghandler.invalidKey)
}
});

router.get('/tools/wpuser', async(req, res, next) => {
  const link = req.query.url;
  const apikey = req.query.apikey;
  
  if(!link) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    WPUser(link)
    .then((data) => {
      res.json(data)
    })
} else {
  res.json(loghandler.invalidKey)
};
});

router.get('/info/cuaca', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://hadi-api.herokuapp.com/api/cuaca?prov=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
               status: true,
               code: 200,
	       creator: `${creator}`,
	       error_logs: data.msg,
               Sumber: `bmkg`,
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		Apikey = req.query.apikey;

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/hadits', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/quran', async (req, res, next) => {
        var Apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/tafsirsurah', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    tafsirsurah(query)
        .then(result=> {
        var result = result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/muslim/tahlil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/wirid', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/saipulanuar/database/master/religi/ayatkursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
		 status: true,
            	 code: 200,
            	 creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/niatisya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/muslim/jadwalshalat', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/search/image', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    try {
        var options = {
            url: `https://www.google.com/search?q=&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
  } else {
    res.json(loghandler.invalidKey)
  }
})

//Tandai(walper)

router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/Lujomloajg/cybertod`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/teknologi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/cwelumanasu/teknologi`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/muslim', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/tobatboy/islam`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/lariadahemkel/programming`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://privatasw.herokuapp.com/montain/gunung`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/random/quotes/muslim', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/info/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://vikopr.herokuapp.com/api/wiki?q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
		 creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/drakorasia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fakedata', async (req, res, next) => {
        var Apikey = req.query.apikey,
            country = req.query.country
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/hilih', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/music/liriklagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.query;
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json(loghandler.notquery)
        Lirik(lagu)
        .then((lirik) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: lirik.data
          })
        });
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/music/chordlagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://vikopr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kbbi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidindo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidworld', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/meme', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/memeh', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const memeindo = JSON.parse(fs.readFileSync(__path +'/data/memeindo.json'));
    const Memeindo = memeindo[Math.floor(Math.random() * memeindo.length)];
    let hasil = Memeindo.memeindo;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/memeindo.jpeg', data)
    res.sendFile(__path +'/tmp/memeindo.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/info/kodepos', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/translate', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/anime/kusonime', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/kuso?q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/anime/loli', async(req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
    } else {
      res.json(loghandler.invalidKey)
    }
});


router.get('/anime/manga', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/caklontong.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
             	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/tekateki', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tekateki.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
             	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/tebakbendera', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakbendera.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
              	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: `${result.jawaban}`,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
  } else {
  res.json(loghandler.invalidKey)
  }
})

/**
* @Maker
**/


router.get('/kuis/asahotak', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/asahotak.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
             	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/tebakjenaka', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakjenaka.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
             	...soal[~~(Math.random() * soal.length)] 
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/tebakkalimat', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkalimat.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
             	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/tebaktebakan', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebaktebakan.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
             	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/tebaklirik', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebaklirik.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
             	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/family100', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/family100.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
              ...soal[~~(Math.random() * soal.length)] 
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/siapakahaku', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/siapakahaku.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
              	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/kuis/susunkata', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/susunkata.json')
        )
	res
          .status(200)
          .json({
              code: 200,
              success: true,
	      creator: `${creator}`,
	      result: {
              	...soal[~~(Math.random() * soal.length)] 
	      }
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get("/photooxy/shadow", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pShadow(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/romantic", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/naruto", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-message", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/glitch", async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/double-heart", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-text", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/butterfly", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    } else {
    	res.json(loghandler.invalidKey)
    }
});

/*
@ AKHIR PHOTOOXY
*/
/*
@ TEXTPROME
*/
router.get('/textpro/logo-wolf', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/neondevil', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/textpro/neon", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/textprome/neon?apikey=KingOfBear&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/neon.jpeg', data)
    res.sendFile(__path +'/tmp/neon.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/textpro/natural-leaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/harry-potter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/matrix', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/transfomer', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/sketsa', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/silvermetal', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/text-logo-3d-metal-silver-946.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/thunder-text-effect-online-881.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/black-pink', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/textpro/blackpink", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/textprome/blackpink?apikey=KingOfBear&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/blackpink.jpeg', data)
    res.sendFile(__path +'/tmp/blackpink.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get("/textpro/horrorblood", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=KingOfBear&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/horrorblood.jpeg', data)
    res.sendFile(__path +'/tmp/horrorblood.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/textpro/drop-water', async(req, res, next) => {

  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/christmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3d-gradient', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/youtub-hub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/youtub-hub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/marvel', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glitch2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/asupan', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const asupan = JSON.parse(fs.readFileSync(__path +'/data/asupan.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.asupan;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
    res.sendFile(__path +'/tmp/asupan.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/asupan2', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
  const Asupan = JSON.parse(fs.readFileSync(__path +'/data/asupantiktok.json'));
  const randAsupan = Asupan[Math.floor(Math.random() * Asupan.length)];
  data = await fetch(randAsupan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
  res.sendFile(__path +'/tmp/asupan.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});
 
router.get("/maker/nulis", async (req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://itskhyaa-textmaker.herokuapp.com/api/nulis?text=${text}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get("/maker/pubeje", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  text2 = req.query.text2;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.me/api/pubglogo?apikey=pikodeka67&text1='+ text +'&text2='+ text2
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/pup.jpeg', data)
    res.sendFile(__path +'/tmp/pup.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
})

router.get("/text-to-audio/tts", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  idbahasa = req.query.text2;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.me/api/tts?apikey=pikodeka67&code='+ idbahasa +'&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/tts.mp3', data)
    res.sendFile(__path +'/tmp/tts.mp3')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
})

router.get("/maker/gold-button", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.me/api/gplaybutton?apikey=pikodeka67&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/gold.jpeg', data)
    res.sendFile(__path +'/tmp/gold.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
})

router.get("/maker/silver-button", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.me/api/splaybutton?apikey=pikodeka67&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/sil.jpeg', data)
    res.sendFile(__path +'/tmp/sil.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
})

router.get("/maker/epep", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.me/api/epep?apikey=pikodeka67&text=&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/epep.jpeg', data)
    res.sendFile(__path +'/tmp/epep.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
})

router.get("/maker/joker", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=KingOfBear&text='+ text 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/joker.jpeg', data)
    res.sendFile(__path +'/tmp/joker.jpeg')
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
})

router.get('/maker/harta-tahta', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/hartatahta?text='+ text +'&apikey=pikodeka67' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
  res.sendFile(__path +'/tmp/tahta.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/skatch', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://lindow-api.herokuapp.com/api/sketcheffect?img=${url}&apikey=LindowApi`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/skatch.jpeg', data)
        res.sendFile(__path+'/tmp/skatch.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/emoji2png', async(req, res, next) => {
  const apikey = req.query.apikey;
  const Emoji = req.query.text;
  
  if(!apikey) return jes.json(loghandler.notparam)
  if(!Emoji) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)) {

    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.sendFile(__path + '/views/apikey-not-found.html');
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/web2plain-text', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      result: 'APIKEY BENAR, lihat dokumen apikey-bear3'
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
