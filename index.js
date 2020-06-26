

const puppeteer = require('puppeteer');


(async () => {



    // console.log("asElement- ", windowHandle.asElement())
   // console.log(await windowHandle.dispose())
    // windowHandle.evaluate(pageFunction[, ...args])
    // windowHandle.evaluateHandle(pageFunction[, ...args])
   // console.log(await (windowHandle.executionContext()).getProperties() )
   // console.log(await windowHandle.getProperties())
    // console.log(windowHandle.getProperty(propertyName))
   // console.log(await windowHandle.jsonValue())
    

/*


 'onmouseup' => [JSHandle],
  'onmousewheel' => [JSHandle],
  'onpause' => [JSHandle],
  'onplay' => [JSHandle],
  'onplaying' => [JSHandle],
  'onprogress' => [JSHandle],
  'onratechange' => [JSHandle],
  'onreset' => [JSHandle],
  'onresize' => [JSHandle],
  'onscroll' => [JSHandle],
  'onseeked' => [JSHandle],
  'onseeking' => [JSHandle],
  'onselect' => [JSHandle],
  'onstalled' => [JSHandle],
  'onsubmit' => [JSHandle],
  'onsuspend' => [JSHandle],
  'ontimeupdate' => [JSHandle],
  'ontoggle' => [JSHandle],
  'onvolumechange' => [JSHandle],
  'onwaiting' => [JSHandle],
  'onwebkitanimationend' => [JSHandle],
  'onwebkitanimationiteration' => [JSHandle],
  'onwebkitanimationstart' => [JSHandle],
  'onwebkittransitionend' => [JSHandle],
  'onwheel' => [JSHandle],
  'onauxclick' => [JSHandle],
  'ongotpointercapture' => [JSHandle],
  'onlostpointercapture' => [JSHandle],
  'onpointerdown' => [JSHandle],
  'onpointermove' => [JSHandle],
  'onpointerup' => [JSHandle],
  'onpointercancel' => [JSHandle],
  'onpointerover' => [JSHandle],
  'onpointerout' => [JSHandle],
  'onpointerenter' => [JSHandle],
  'onpointerleave' => [JSHandle],
  'onselectstart' => [JSHandle],
  'onselectionchange' => [JSHandle],
  'onanimationend' => [JSHandle],
  'onanimationiteration' => [JSHandle],
  'onanimationstart' => [JSHandle],
  'ontransitionend' => [JSHandle],
  'onafterprint' => [JSHandle],
  'onbeforeprint' => [JSHandle],
  'onbeforeunload' => [JSHandle],
  'onhashchange' => [JSHandle],
  'onlanguagechange' => [JSHandle],
  'onmessage' => [JSHandle],
  'onmessageerror' => [JSHandle],
  'onoffline' => [JSHandle],
  'ononline' => [JSHandle],
  'onpagehide' => [JSHandle],
  'onpageshow' => [JSHandle],
  'onpopstate' => [JSHandle],
  'onrejectionhandled' => [JSHandle],
  'onstorage' => [JSHandle],
  'onunhandledrejection' => [JSHandle],
  'onunload' => [JSHandle],
  'performance' => [JSHandle],
  'stop' => [JSHandle],
  'open' => [JSHandle],
  'alert' => [JSHandle],
  'confirm' => [JSHandle],
  'prompt' => [JSHandle],
  'print' => [JSHandle],
  'queueMicrotask' => [JSHandle],
  'requestAnimationFrame' => [JSHandle],
  'cancelAnimationFrame' => [JSHandle],
  'captureEvents' => [JSHandle],
  'releaseEvents' => [JSHandle],
  'requestIdleCallback' => [JSHandle],
  'cancelIdleCallback' => [JSHandle],
  'getComputedStyle' => [JSHandle],
  'matchMedia' => [JSHandle],
  'moveTo' => [JSHandle],
  'moveBy' => [JSHandle],
  'resizeTo' => [JSHandle],
  'resizeBy' => [JSHandle],
  'scroll' => [JSHandle],
  'scrollTo' => [JSHandle],
  'scrollBy' => [JSHandle],
  'getSelection' => [JSHandle],
  'find' => [JSHandle],
  'webkitRequestAnimationFrame' => [JSHandle],
  'webkitCancelAnimationFrame' => [JSHandle],
  'fetch' => [JSHandle],
  'btoa' => [JSHandle],
  'atob' => [JSHandle],
  'setTimeout' => [JSHandle],
  'clearTimeout' => [JSHandle],
  'setInterval' => [JSHandle],
  'clearInterval' => [JSHandle],
  'createImageBitmap' => [JSHandle],
  'close' => [JSHandle],
  'focus' => [JSHandle],
  'blur' => [JSHandle],
  'postMessage' => [JSHandle],
  'onappinstalled' => [JSHandle],
  'onbeforeinstallprompt' => [JSHandle],
  'crypto' => [JSHandle],
  'indexedDB' => [JSHandle],
  'webkitStorageInfo' => [JSHandle],
  'sessionStorage' => [JSHandle],
  'localStorage' => [JSHandle],
  'chrome' => [JSHandle],
  'onpointerrawupdate' => [JSHandle],
  'speechSynthesis' => [JSHandle],
  'webkitRequestFileSystem' => [JSHandle],
  'webkitResolveLocalFileSystemURL' => [JSHandle],
  'openDatabase' => [JSHandle],
  'trustedTypes' => [JSHandle],
  'applicationCache' => [JSHandle],
  'caches' => [JSHandle],
  'ondevicemotion' => [JSHandle],
  'ondeviceorientation' => [JSHandle],
  'ondeviceorientationabsolute' => [JSHandle],
  'PARALLEL_FETCH_SCRIPT' => [JSHandle],
  'webpackJsonp' => [JSHandle],
  'Exe' => [JSHandle],
  'setImmediate' => [JSHandle],
  'clearImmediate' => [JSHandle],
  'requestFileSystem' => [JSHandle],
  'LOG' => [JSHandle],
  'SEND_LOGS' => [JSHandle],
  'Modernizr' => [JSHandle],
  'Velocity' => [JSHandle],
  'WebFont' => [JSHandle],
  'dataURLtoBlob' => [JSHandle],
  'Debug' => [JSHandle],
  'l10n' => [JSHandle],
  'regeneratorRuntime' => [JSHandle]

*/

// urlWebSocket


    try {


        // const pathToExtension = require('path').join(__dirname, 'my-extension');
      const browser = await puppeteer.launch({
        userDataDir: './user-data',
        headless: false
      });
  
      const page = await browser.newPage();
      await page.goto("http://web.whatsapp.com/", { waitUntil : "networkidle2" });
  
      const urlWebSocket = browser.wsEndpoint();
  
  
    //  page.workers()
  
      // Test the background page as you would any other page.
    //  await browser.close();
  //  webWorker.url()
      const windowHandle = await page.evaluateHandle(() => window);


        var socket = require('socket.io-client')('wss://web.whatsapp.com/ws');
        socket.on('connect', function(){
            console.log("connect: conectow")
        });

        socket.on('ws', function(){
            console.log("teste ws: conectow")
        });

        socket.on('event', function(data){
            console.log("evento: ", data);
        });
        
        socket.on('disconnect', function(){
            console.log("teste ws: desconectow")
        });

        socket.on('*', function(){
            console.log("teste ")
        });

    } catch (err) {
        console.log("deu merda .... ", err.message)
    }









  })();








