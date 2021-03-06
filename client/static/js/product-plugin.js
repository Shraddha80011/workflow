/*

Develop branch

https://9d89b0632a794a289b08f4de77dbf09a.us-east-1.aws.found.io:9243/pdm1/_search
elastic
4t4AplzzRsGmarJ6txoSHJIX


https://techyhunkie.000webhostapp.com/productdata.json

Old api
https://554babe34aa78d4ac60745ab85148d81.us-east-1.aws.found.io:9243/pdm1/_search
elastic
is7DAuqM84il8D3abxCqftdN
*/


grapesjs.plugins.add('product-plugin', function(editor, options){
  var bm = editor.BlockManager;

  // Full Home Page Layout
	bm.add('homepage', {
		label: 'Homepage',
		content: '<html><head><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><style>.clearfix{clear:both;}.card, .product-card > a, .product_image img{transition-delay:initial;transition-property:all;}.product a, .product-card > a, .product-card > a:hover{text-decoration-line:none;text-decoration-color:initial;}.product-card > a{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(242, 242, 242);color:rgb(51, 51, 51);transition-duration:0.1s;transition-timing-function:initial;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration-style:initial;}.product_buttons .add_to_cart:hover, .product_buttons .product_compare:hover, .product_buttons .product_heart:hover{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgba(255, 255, 255, 0.5);}.product-card > a:hover{text-decoration-style:initial;box-shadow:rgba(0, 0, 0, 0.3) 0px 1px 3px;}.product-card figcaption{display:block;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;}.product-card .product-card-address{color:rgb(136, 136, 136);line-height:1.2;}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2;}.product-card .product-card-price{display:block;text-align:right;}.product-card .product-card-price .original-price, .product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle;}.product-card .product-card-price .price-savings{float:left;color:rgb(130, 181, 72);}.product-card .product-card-price .original-price{color:rgb(170, 170, 170);font-size:14px;}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:rgb(130, 181, 72);}.product-card .product-card-price .from{font-size:12px;}.product_price span, .product_title h5{font-size:1.1em;line-height:1;}*{box-sizing:border-box;font-family:"Open Sans", Arial, sans-serif;}img{max-width:100%;height:auto;}ul.product_list{list-style-type:none;width:100%;display:inline;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.product_image img{display:block;position:absolute;top:0px;bottom:0px;left:0px;right:0px;transition-duration:0.5s;transition-timing-function:ease-in-out;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto;}.product_image img:hover{transform:scale(1.2, 1.2);}.product_title h5{font-weight:500;padding-bottom:5px;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto;}.product_price a{color:rgb(0, 0, 0);}.product_desc p{line-height:1.3;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;}.product_buttons .product_heart:hover{color:rgb(223, 4, 4);}.product_buttons .product_compare:hover{color:rgb(18, 150, 18);}.product_buttons .add_to_cart:hover{color:rgb(77, 200, 211);}.product a{text-decoration-style:initial;}.product:hover .info{height:40px;}.product:hover .info::before{transform:scaleY(0.7);}.product:hover .info::after{visibility:visible;transform:translateY(10px);}.title a{color:inherit;}.product:hover .title{transform:translateY(-18px);font-weight:700;color:rgb(0, 0, 0);}.actions-wrapper *{width:50%;text-align:center;color:rgb(25, 25, 25);font-size:0.95em;font-weight:700;padding-top:2px;padding-right:0px;padding-bottom:2px;padding-left:0px;}.actions-wrapper ::before{font-family:FontAwesome;margin-right:8px;}.product:hover .actions-wrapper *{visibility:visible;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#c18765, #c18771{position:relative;}#c18793, #c18805{left:-1131px;top:0px;}#c18765, #c18770, #c18772, #c18801, #c18805, #c18810, #c18846, #c18874{width:1170px;height:370px;}#c18801, #c18813{opacity:0;position:absolute;}#c17455, #c18772, #c18793, #c18801{display:none;}#c18770, #c18772, #c18773, #c18777, #c18784, #c18793, #c18800, #c18805, #c18810, #c18813, #c18821, #c18822, #c18826, #c18836, #c18846, #c18853, #c18854, #c18858, #c18868, #c18874, #c18881, #c18882, #c18886{position:absolute;}#c18765, #c18784, #c18800, #c18805, #c18836, #c18868{overflow-x:hidden;overflow-y:hidden;}#c18770{top:0px;left:0px;transform-origin:0px 0px 0px;transform:scale(1);}#c18771{overflow-x:visible;overflow-y:visible;display:block;top:0px;left:0px;}#c18772{top:0px;left:0px;}#c18773, #c18822, #c18854, #c18882{opacity:0.7;display:block;background-color:rgb(0, 0, 0);top:0px;left:0px;width:100%;height:100%;}#c18777, #c18826, #c18858, #c18886{display:block;background-image:url("/bundles/officebrainpage/images/img/loading.gif");background-position-x:50%;background-position-y:50%;background-size:initial;background-repeat-x:no-repeat;background-repeat-y:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:initial;top:0px;left:0px;width:100%;height:100%;}#c18784, #c18800{cursor:move;left:0px;top:0px;z-index:0;}#c18793{z-index:0;pointer-events:none;}#c18801{top:0px;left:0px;background-color:rgb(0, 0, 0);}#c18810, #c18846, #c18874{top:0px;left:0px;}#c18813{width:599px;right:auto;height:65px;bottom:auto;left:-693px;top:4px;}.js-banner-dynamic-height-width, #c18821, #c18836, #c18841, #c18853, #c18868, #c18873, #c18881{width:1170px;height:370px;}#c18821, #c18853, #c18881{top:0px;left:0px;z-index:1000;display:none;}#c18836{top:0px;left:39px;}#c18841, #c18873{top:0px;left:0px;}#c18868{top:0px;left:-1170px;}#c18899{top:157.5px;left:8px;}#c18907{top:157.5px;right:8px;}.home-content{margin-top:150px;}.ob-qa-basic-search-btn{position:absolute;background-color:#008080;color:#f8efef;padding:6px 10px 10px 10px;margin:0px 0px 0px 0px;}.ob-qa-basic-search-btn:hover{color:#f8efef;}.js-banner-dynamic-height-width{margin:0px auto 0px auto;}@media only screen and (min-width: 320px){.product_sale p, .product_values .product_buttons button{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;}.product_sale p{color:rgb(255, 255, 255);background-color:red;box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 8px 0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:3px;padding-right:25px;padding-bottom:3px;padding-left:25px;}.product_image .product_buttons{display:none;}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px;}.product_values .product_buttons button{color:rgb(37, 37, 37);background-color:rgb(255, 255, 255);font-size:1em;width:40px;height:40px;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);}}@media only screen and (max-width: 480px){.product_title h5{font-weight:700;}}@media only screen and (max-width: 320px){.product_image img{position:relative;}.product_price span{float:left;width:100%;}}</style></head>'+
				'<body><homepage><div class="js-body-container js-theme-publish" id="ob-SmcDistributorTheme"> <header> <div id="js-fix-header-controller"> <div class="ob-header"> <div class="main-logo-part"> <div class="ob-logo-block"> <div class="container"> <div class="row"> <div class="col-lg-6 col-md-6 col-sm-8 col-xs-6 logo-col"> <a class="js-editable js-draggable" href="http://localhost/exported/index.html" data-title="Logo" data-id="header_logo_area"><img class="js-logo img-responsive" src="http://i.imgur.com/WQhZy0t.png" data-id="header_logo_area" data-highlightable="1"/></a> </div><div class="col-lg-6 col-md-6 col-sm-4 col-xs-6 shop-menu-col"> <div class="slidemenu shop-menu" id="slidemenu">  <div class="clearfix"> </div></div><div class="clearfix"> </div></div><ul class="nav navbar-nav ui-advance-search pull-right position-inherit"> <li class="dropdown nav-search-btn js-advance-menu position-inherit"> <a class="header-search-medium dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-search"> </i>Search In </a> <div class="top-search-block"> <div class="search-form searchbox pull-left">  <span class="header-search search-field advance-search-wrap js-advance-search-wrap dropdown"><input class="form-control ob-qa-srch-txt-box" id=search_query name=search_query placeholder="Enter Keyword here"><a style="cursor: pointer" class="ob-qa-basic-search-btn searchButton"><i class="fa fa-search fa-fw"data-highlightable=1></i></a></span> </div> </div></li></ul> </div></div></div></div></div><div class="ob-menu"> <div class="container"> <div class="navbar2 navbar-default mainmenu-nav menu-box menu-box-op2" role="navigation" id="mainmenu-nav"> <div class="navbar-header2"> <a class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a> </div><div id="mainmenu"> <span class="scroll-logo"><a href="https://smcmadetoorder.com/en_us"><img class="img-responsive" src="Service%20Master%20Clean%20Made%20To%20Order%20Store_files/1492085906_signet-logo.png"/></a></span>  </div><div id="navbar-height-col2"> </div></div></div></div></div></header></div><div class="home-content"> <div class="container"><img class="js-banner-dynamic-height-width" id="c28614" u="image" src="https://smcmadetoorder.com/images/uploads/banner_images/thumb_5d2fd65ac0cbb483f0233b7505bd53fb84580132.jpg" border="0"/> <div class="row"> <div class="col-lg-12"> <div class="ribbon-section"> <div class="container"> <div class="row"> <h3 class="ribbon ribbon-custom-2"> <span>Looking for something else? </span> <a href="https://smcmadetoorder.com/en_us/requestquote"><u>Request a Quote </u></a> or Call (800) 654-3889 </h3> </div></div></div><div class="row pro-img"> <div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/ME5183/87/2?color=White&project_id=33&originalImage=http%3A%2F%2Fimage.promoworld.ca%2Fsignet-api%2Fweb%2Fimages%2F33%2Fmedia%2Fcache%2Fthumb_product_image_210x210%2F87%2FME5183-front-1000x.jpg" alt="pulsar bluetooth speaker" title="pulsar bluetooth speaker"/> </div><div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/BC12SJB/318/2?project_id=33&originalImage=http%3A%2F%2Fimage.promoworld.ca%2Fsignet-api%2Fweb%2Fimages%2F33%2Fmedia%2Fcache%2Fthumb_product_image_210x210%2F318%2Fbc12sjb_3.jpg" alt="business card magnet w/small bag of jelly beans" title="business card magnet w/small bag of jelly beans"/> </div><div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/TM6008/87/2?color=Silver&project_id=33&originalImage=https%3A%2F%2Fvirtualmarketingcart.com%2Fapi%2Fv3%2F54607c1317207c5f03d63af1%2Fen_us%2Fsignet-admin-image%2FTM6008%2F87%3Fcolor%3DSilver" alt="cape cod tumbler" title="cape cod tumbler"/> </div><div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/FB3215/87/2?color=Black&project_id=33&originalImage=https%3A%2F%2Fvirtualmarketingcart.com%2Fapi%2Fv3%2F54607c1317207c5f03d63af1%2Fen_us%2Fsignet-admin-image%2FFB3215%2F87%3Fcolor%3DBlack" alt="reply lunch cooler tote" title="reply lunch cooler tote"/> </div></div><div class="clearfix"> </div></div></div></div></div><div class="container"> <div class="banner-box"> <div class="row js-adverise-sortable"> <div class="ui-state-default js-element"> <div class="js-editable" data-id="footer_banner_1_area" data-title="Footer Banner Area" data-type="footer-banner-1-area"> <div class="col-lg-6 col-md-6 col-sm-12 cat-right-side"> <div class="deal-banner js-sub-element" data-id="0" data-title="Small Banner 1"> <a href="#" data-href="yes"><img src="https://smcmadetoorder.com/uploads/themeImages/1492085438_banner-small01-SVMC.jpg" data-src="yes" width="570px" height="185px"/></a> </div><div class="row"> <div class="col-md-12 col-sm-12 col-xs-6 design-ideas"> <div class="deal-banner"> <div class="js-sub-element" data-id="1" data-title="Small Banner 2"> <a href="mailto:info@smcmadetoorder.com" target="_top" data-href="yes"><img src="https://smcmadetoorder.com/uploads/themeImages/1492085448_banner-small02.jpg" data-src="yes" width="570px" height="185px"/></a> </div></div></div></div></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-6 closeout-bg js-sub-element cat-right-side" data-id="2" data-title="Square Banner"> <a href="http://www.signetcompanystore.com/" target="_blank" data-href="yes"><div class="banner-over"> <div class="deal-banner"> <img src="https://smcmadetoorder.com/uploads/themeImages/1495486896_smc%20bottom%20revised%203.png" data-src="yes" width="570px" height="378px"/> </div></div></a> </div></div></div></div></div></div><div class="clearfix"></div><div class="middle-footer"> <div class="container"> <div class="row js-row-elements"> <div class="col-lg-4 col-md-3 col-sm-3 col-xs-12"> <div class="common-title"> <h3 class="footer-heading">My account </h3> </div><div class="clearfix"> </div><ul class="list-unstyled footer-link"> <li> <a href="https://smcmadetoorder.com/en_us/my-account/info" title="My account">My account</a> </li><li> <a href="https://smcmadetoorder.com/en_us/order-list" title="Order History">Order History</a> </li><li> <a href="https://smcmadetoorder.com/en_us/wish-list" title="Wish List">Wish List</a> </li><li> <a href="https://smcmadetoorder.com/en_us/cart-list" title="My Cart">My Cart</a> </li></ul> </div><div class="col-lg-4 col-md-3 col-sm-3 col-xs-12"> <div class="common-title"> <h3 class="footer-heading">information </h3> </div><div class="clearfix"> </div><ul class="list-unstyled footer-link"> <ul class="list-unstyled footer-link"> <li> <a href="https://smcmadetoorder.com/en_us/page/about-us" title="About Us">About Us</a> </li><li> <a href="https://smcmadetoorder.com/en_us/page/general-info" title="General Information">General Information</a> </li><li> <a href="https://smcmadetoorder.com/en_us/customer-survey" title="Customer Satisfaction Survey">Customer Satisfaction Survey</a> </li><li> <a href="https://smcmadetoorder.com/en_us/page/privacy-policy" title="Privacy Policy">Privacy Policy</a> </li></ul> </ul> </div><div class="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div class="ui-state-default js-element"> <div class="common-title"> <h3 class="footer-heading">Contact Details </h3> </div><div class="clearfix"> </div><div class="js-editable" data-title="Contact Detail" data-id="footer_contact_area" data-type="footer-contact-area"> <ul class="footer-contact-detail footer-link js-sub-sortable"> <li class="phone-number js-sub-element" data-element-title="Phone" data-id="phone" data-sort="1">(800) 654-3889 </li><li class="email-css js-sub-element" data-element-title="Email" data-id="email" data-sort="2"> <i class="fa fa-envelope"> </i> <span data-title="yes">info@smcmadetoorder.com</span> </li><li class="address-contact js-sub-element" data-element-title="Address" data-id="address" data-sort="3">SIGNET, INC. </li><li class="address-contact-1 js-sub-element" data-element-title="Address1" data-id="address1">1801 N. Shelby Oaks Drive, Suite 12 </li><li class="address-contact-1 js-sub-element" data-element-title="Address2" data-id="address2">Memphis, TN 38134 </li></ul> </div></div></div></div></div></div><div class="bottom-footer"> <div class="container"> <div class="social-icon-box"> <div class="pull-left"> <ul> <li class="social-icon"> <a href="https://facebook.com/gosignet" target="_blank"><i class="fb-icon strip-icon"> </i></a> </li><li class="social-icon"> <a href="https://twitter.com/signetpromo" target="_blank"><i class="twitter-icon strip-icon"> </i></a> </li><li class="social-icon"> <a href="https://www.linkedin.com/company/signet-inc-" target="_blank"><i class="in-icon strip-icon"> </i></a> </li><li class="social-icon"> <a href="https://www.instagram.com/signetinc/" target="_blank"><i class="instagram-icon strip-icon"> </i></a> </li></ul> </div><div class="pull-right"> <p class="newslatter">JOIN OUR NEWSLETTER </p><form class="form-inline news-box" role="form" action="https://smcmadetoorder.com/en_us/newsletter"> <div class="form-group"> <input class="form-control" id="email_id" name="email_send" placeholder="Enter Your Email Address" type="email"/> </div><button class="btn btn-default news-letter-validation-submit-btn" type="submit">Subscribe</button> </form> </div><div class="clearfix"> </div></div><span class="pull-left"> Powered by: <a href="http://i.imgur.com/WQhZy0t.png" target="_blank"><img src="http://i.imgur.com/WQhZy0t.png"/></a></span> <span class="col-lg-7 col-md-7 col-sm-7 col-xs-12 text-center">Copyright Â© 2017 Signet, Inc. All rights reserved</span> </div></div><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/><link rel="stylesheet" type="text/css" href="https://smcmadetoorder.com/bundles/officebraincustombundletheme/SmcDistributorTheme/css/all-css.css"/></homepage><script src="https://code.jquery.com/jquery-3.2.1.js"></script><script src="./js/client-listing-plugin.js"></script></body></html>',
		attributes: {
		    class: 'fa fa-home',
		    title: 'Homepage'
		},
		category: 'Static Components'
	});
	
	// Header Layout
	bm.add('Header-1', {
		label: 'Header-1',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Header-1</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');html{background-color: #eaf0f2;}body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-basic-light{padding: 20px 40px;box-sizing:border-box;box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);height: 80px;background-color: #fff;}.header-basic-light .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}/* Logo */.header-basic-light .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-basic-light .header-limiter h1 span{color: #5383d3;}/* The header links */.header-basic-light .header-limiter a{color: #5c616a;text-decoration: none;}.header-basic-light .header-limiter nav{font:15px Arial, Helvetica, sans-serif;line-height: 40px;float: right;}.header-basic-light .header-limiter nav a{display: inline-block;padding: 0 5px;opacity: 0.9;text-decoration:none;color: #5c616a;line-height:1;}.header-basic-light .header-limiter nav a.selected{background-color: #86a3d5;color: #ffffff;border-radius: 3px;padding:6px 10px;}/* Making the header responsive. */@media all and (max-width: 600px){.header-basic-light{padding: 20px 0;height: 85px;}.header-basic-light .header-limiter h1{float: none;margin: -8px 0 10px;text-align: center;font-size: 24px;line-height: 1;}.header-basic-light .header-limiter nav{line-height: 1;float:none;}.header-basic-light .header-limiter nav a{font-size: 13px;}}/* For the headers to look good, be sure to reset the margin and padding of the body */body{margin:0;padding:0;}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-basic-light"><div class="header-limiter"><h1><a href="#">Company<span>logo</span></a></h1><nav><a href="#">Home</a><a href="#" class="selected">Blog</a><a href="#">Pricing</a><a href="#">About</a><a href="#">Faq</a><a href="#">Contact</a></nav></div></header></body></html>',
		attributes: {
		    class: 'fa fa-header',
		    title: 'Header-1'
		},
		category: 'Header'
	});

	// Header Layout
	bm.add('Header-2', {
		label: 'Header-2',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Basic Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #BBDEFB;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-fixed{background-color:#80CBC4;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;top:-100px;-webkit-transition:top 0.3s;transition:top 0.3s;}.header-fixed .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}.header-fixed-placeholder{height: 80px;display: none;}.header-fixed .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-fixed .header-limiter h1 span{color: #5383d3;}/* The navigation links */.header-fixed .header-limiter a{color: #ffffff;text-decoration: none;}.header-fixed .header-limiter nav{font:16px Arial, Helvetica, sans-serif;line-height: 40px;float: right;}.header-fixed .header-limiter nav a{display: inline-block;padding: 0 5px;text-decoration:none;color: #ffffff;opacity: 0.9;}.header-fixed .header-limiter nav a:hover{opacity: 1;}.header-fixed .header-limiter nav a.selected{color: #608bd2;pointer-events: none;opacity: 1;}/* Fixed version of the header */body.fixed .header-fixed{padding: 10px 40px;height: 50px;position: fixed;width: 100%;top: 0;left: 0;z-index: 1;}body.fixed .header-fixed-placeholder{display: block;}body.fixed .header-fixed .header-limiter h1{font-size: 24px;line-height: 30px;}body.fixed .header-fixed .header-limiter nav{line-height: 28px;font-size: 13px;}@media all and (max-width: 600px){.header-fixed{padding: 20px 0;height: 75px;}.header-fixed .header-limiter h1{float: none;margin: -8px 0 10px;text-align: center;font-size: 24px;line-height: 1;}.header-fixed .header-limiter nav{line-height: 1;float:none;}.header-fixed .header-limiter nav a{font-size: 13px;}body.fixed .header-fixed{display: none;}}body{margin: 0;padding: 0;height: 1500px;}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-fixed"><div class="header-limiter"><h1><a href="#"><span>logo</span></a></h1><nav><a href="#" class="selected">Home</a><a href="#">Blog</a><a href="#">Pricing</a><a href="#">About</a><a href="#">Faq</a><a href="#">Contact</a></nav></div></header></body></html>',
		attributes: {
		    class: 'fa fa-header',
		    title: 'Header-2'
		},
		category: 'Header'
	});

	// Header Layout
	bm.add('Header-3', {
		label: 'Header-3',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Login, Sign up Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-login-signup{background-color:#827717;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;}.header-login-signup .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}/* Logo */.header-login-signup .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-login-signup .header-limiter h1 span{color: #5383d3;}/* The navigation links */.header-login-signup .header-limiter a{color: #ffffff;text-decoration: none;}.header-login-signup .header-limiter nav{font:16px Arial, Helvetica, sans-serif;line-height: 40px;float: left;margin: 0 0 0 60px;padding: 0;}.header-login-signup .header-limiter nav a{font-size: 14px;display: inline-block;padding: 0 5px;opacity: 0.9;text-decoration:none;line-height: 1;}.header-login-signup .header-limiter nav a:hover{opacity: 1;}.header-login-signup .header-limiter nav a.selected{color: #608bd2;}/* Login/Sign up buttons */.header-login-signup .header-limiter ul{font: 14px Arial, Helvetica, sans-serif;list-style: none;line-height: 1;float: right;}.header-login-signup .header-limiter ul li{display: inline-block;margin-left: 15px;opacity:0.9;}.header-login-signup .header-limiter ul li:hover{opacity: 1;}/* The sign up button */.header-login-signup .header-limiter ul li:last-child a{font-weight: bold;background-color: #C0CA33;padding: 10px 15px;border-radius: 3px;}/* Making the header responsive */@media all and (max-width: 600px){.header-login-signup{padding: 25px;height: 85px;}.header-login-signup .header-limiter h1{float: none;margin: -8px 0 2px;text-align: center;font-size: 24px;line-height: 1;}.header-login-signup .header-limiter nav{margin: 0;float: none;}.header-login-signup .header-limiter nav li a{font-size: 13px;}.header-login-signup .header-limiter ul{display: none;}}For the headers to look good, be sure to reset the margin and padding of the body */body{margin:0;padding:0;}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-login-signup"><div class="header-limiter"><h1><a href="#"><span>logoOfCompany</span></a></h1><nav><a href="#" class="selected">Home</a><a href="#">Blog</a><a href="#">Pricing</a></nav><ul><li><a href="#">Login</a></li><li><a href="#">Sign up</a></li></ul></div></header></body></html>',
		attributes: {
		    class: 'fa fa-header',
		    title: 'Header-3'
		},
		category: 'Header'
	});

	// Header Layout
	bm.add('Header-4', {
		label: 'Header-4',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Second Bar Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-two-bars{font:13px Arial, Helvetica, sans-serif;}.header-two-bars .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}/* Logo */.header-two-bars h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-two-bars h1 span{color: #FF5722;}/* The first bar */.header-two-bars .header-first-bar{background-color:#757575;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;}.header-two-bars .header-first-bar a{color: #ffffff;text-decoration: none;}.header-two-bars .header-first-bar nav{font:14px Arial, Helvetica, sans-serif;line-height: 40px;float: left;margin: 0 0 0 60px;padding: 0;}.header-two-bars .header-first-bar nav a{display: inline-block;padding: 0 5px;opacity: 0.9;text-decoration:none;line-height: 1;}.header-two-bars .header-first-bar nav a:hover{opacity: 1;}.header-two-bars .header-first-bar nav a.selected{border-radius: 2px;background-color: #2B5773;padding: 8px 12px;}.header-two-bars .header-first-bar a.logout-button{font-size: 13px;font-weight: bold;float: right;border-radius: 3px;background-color: rgba(58, 60, 62, 0);height: 40px;padding: 0 20px;border: 1px solid #5E6367;line-height: 40px;box-sizing: border-box;}/* Second Bar */.header-two-bars .header-second-bar{background-color: #ffffff;box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.05);padding: 20px 40px;}.header-two-bars .header-second-bar h2{line-height: 20px;margin: 0;float: left;}.header-two-bars .header-second-bar h2 a{font-size: 16px;color: #4e5359;text-decoration: none;}.header-two-bars .header-second-bar nav{text-align: right;line-height: 20px;font-size: 16px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}.header-two-bars .header-second-bar nav a{display: inline-block;color: #4e5359;text-decoration: none;}.header-two-bars .header-second-bar nav i.fa{color: #A9B7BF;margin: 0 4px 0 15px;}/*Making the header responsive. Remove these styles, ifyou don\'t need the header to work on mobile devices. */@media all and (max-width: 800px){.header-two-bars .header-second-bar nav{font-size:14px;}}@media all and (max-width: 600px){.header-two-bars .header-first-bar{padding:20px 0;}.header-two-bars .header-first-bar h1{float: none;margin: -8px 0 2px;text-align: center;font-size: 24px;line-height: 1;}.header-two-bars .header-first-bar nav{margin: 0;float: none;font-size:13px;}.header-two-bars .header-first-bar nav a.selected{padding: 5px 8px;}.header-two-bars .header-first-bar .logout-button{display: none;}.header-two-bars .header-second-bar{padding: 20px 0;}.header-two-bars .header-second-bar h2{float:none;margin: 0 0 12px;}.header-two-bars .header-second-bar nav{text-align: center;}.header-two-bars .header-second-bar nav a{display: block;padding: 8px;}.header-two-bars .header-second-bar nav i.fa{margin-left:0;}}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></head><body><header class="header-two-bars"><div class="header-first-bar"><div class="header-limiter"><h1><a href="#"><span>Nike</span></a></h1><nav><a href="#" class="selected">Overview</a><a href="#">Surveys</a><a href="#">Reports</a><a href="#">Roles</a></nav><a href="#" class="logout-button">Logout</a></div></div><div class="header-second-bar"><div class="header-limiter"><h2><a href="#">Survey name</a></h2><nav><a href="#"><i class="fa fa-comments-o"></i> Questions</a><a href="#"><i class="fa fa-file-text"></i> Results</a><a href="#"><i class="fa fa-group"></i> Participants</a><a href="#"><i class="fa fa-cogs"></i> Settings</a></nav></div></div></header></body></html>',
		attributes: {
		    class: 'fa fa-header',
		    title: 'Header-4'
		},
		category: 'Header'
	});

	// Header Layout
	bm.add('Header-5', {
		label: 'Header-5',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>User Dropdown Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-user-dropdown{background-color:#4E342E;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;}.header-user-dropdown .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}/* Logo */.header-user-dropdown .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin:0;}.header-user-dropdown .header-limiter h1 span{color: #bc40df;}/* The header links */.header-user-dropdown .header-limiter a{color: #ffffff;text-decoration: none;}.header-user-dropdown .header-limiter nav{font:16px Arial, Helvetica, sans-serif;line-height: 40px;float: left;margin: 0 0 0 60px;padding: 0;}.header-user-dropdown .header-limiter nav a{font-size: 14px;display: inline-block;padding: 0 12px;opacity: 0.9;position: relative;text-decoration:none;line-height: 1;}.header-user-dropdown .header-limiter nav a:hover{opacity: 1;}/* The "new" badge */.header-user-dropdown .header-limiter nav a span{position: absolute;top: -12px;border-radius: 2px;background-color: #2A6A92;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);height: 13px;font-size: 11px;right: -15px;padding: 1px 4px 0;}/* The user menu */.header-user-dropdown .header-limiter .header-user-menu{position: relative;float:right;background-color:#757575;width:75px;height:40px;border-radius:2px;}.header-user-dropdown .header-limiter .header-user-menu:before{content:\'\';width:0;height:0;top: 18px;left: 15px;position:absolute;border:5px solid transparent;border-top-color:#fff;}.header-user-dropdown .header-limiter .header-user-menu ul{display: none;font:bold 13px Arial, Helvetica, sans-serif;background-color: inherit;list-style: none;position: absolute;text-align: center;width: 125px;top: 25px;right: 0;padding: 10px;border-radius: 2px;box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);box-sizing: border-box;}.header-user-dropdown .header-user-menu:active ul,.header-user-dropdown .header-user-menu:hover ul,.header-user-dropdown .header-user-menu.show ul{display:block;}.header-user-dropdown .header-user-menu ul li{padding:5px;}.header-user-dropdown .header-user-menu ul li a:hover{opacity:0.9;}.header-user-dropdown .header-user-menu ul li a.highlight{color:#e9ac09;}.header-user-dropdown .header-user-menu img{border-radius:50%;position:absolute;top:6px;max-width: 28px;right:10px;}@media all and (max-width: 800px){.header-user-dropdown .header-limiter h1{font-size: 24px;}.header-user-dropdown .header-limiter nav a{padding: 0 5px;}.header-user-dropdown .header-limiter nav{margin-left: 20px;}}@media all and (max-width: 600px){.header-user-dropdown .header-limiter nav{display: none;}}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-user-dropdown"><div class="header-limiter"><h1><a href="#"><span>Puma</span></a></h1><nav><a href="#">Overview</a><a href="#">Surveys</a><a href="#">Reports</a><a href="#">Roles <span class="header-new-feature">new</span></a></nav><div class="header-user-menu"><img src="assets/2.jpg" alt="User Image"/><ul><li><a href="#">Settings</a></li><li><a href="#">Payments</a></li><li><a href="#" class="highlight">Logout</a></li></ul></div></div></header></body></html>',
		attributes: {
		    class: 'fa fa-header',
		    title: 'Header-5'
		},
		category: 'Header'
	});

	// Footer Layout
	bm.add('Footer-1', {
		label: 'Footer-1',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, links, icons"/><title>Distributed Footer</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}@media (max-height:800px){footer{position: static;}}.footer-distributed{background-color: #80CBC4;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;text-align: left;font: normal 16px sans-serif;padding: 45px 50px;margin-top: 80px;}.footer-distributed .footer-left p{color: #8f9296;font-size: 14px;margin: 0;}/* Footer links */.footer-distributed p.footer-links{font-size:18px;font-weight: bold;color: #ffffff;margin: 0 0 10px;padding: 0;}.footer-distributed p.footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-right{float: right;margin-top: 6px;max-width: 180px;}.footer-distributed .footer-right a{display: inline-block;width: 35px;height: 35px;background-color: #4b7188;border-radius: 2px;font-size: 20px;color: #ffffff;text-align: center;line-height: 35px;margin-left: 3px;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 600px){.footer-distributed .footer-left,.footer-distributed .footer-right{text-align: center;}.footer-distributed .footer-right{float: none;margin: 0 auto 20px;}.footer-distributed .footer-left p.footer-links{line-height: 1.8;}}</style><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></head><body><footer class="footer-distributed"><div class="footer-right"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div><div class="footer-left"><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p>Company Name &copy; 2017</p></div></footer></body></html>',
		attributes: {
		    class: 'fa fa-square-o',
		    title: 'Footer-1'
		},
		category: 'Footer'
	});

	// Footer Layout
	bm.add('Footer-2', {
		label: 'Footer-2',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, address, phone, icons"/><title>Footer With Address And Phones</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}html{background-color: #eaf0f2;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}header{text-align: center;padding-top: 100px;margin-bottom:200px;}header h1{font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}header h2{color: #F05283;}header h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}header h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}header ul{max-width: 600px;margin: 60px auto 0;}header ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}header ul li a.active{background-color: #66B650;pointer-events: none;}header ul li a:hover{opacity: 1;}header ul{list-style: none;padding: 0;}header ul li{display: inline-block;}/* In our demo, the footers are fixed to the bottom of the page */@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-distributed{background-color: #292c2f;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;text-align: left;font: bold 16px sans-serif;padding: 55px 50px;margin-top: 80px;}.footer-distributed .footer-left,.footer-distributed .footer-center,.footer-distributed .footer-right{display: inline-block;vertical-align: top;}/* Footer left */.footer-distributed .footer-left{width: 40%;}/* The company logo */.footer-distributed h3{color: #ffffff;font: normal 36px \'Cookie\', cursive;margin: 0;}.footer-distributed h3 span{color: #5383d3;}/* Footer links */.footer-distributed .footer-links{color: #ffffff;margin: 20px 0 12px;padding: 0;}.footer-distributed .footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-company-name{color: #8f9296;font-size: 14px;font-weight: normal;margin: 0;}/* Footer Center */.footer-distributed .footer-center{width: 35%;}.footer-distributed .footer-center i{background-color: #33383b;color: #ffffff;font-size: 25px;width: 38px;height: 38px;border-radius: 50%;text-align: center;line-height: 42px;margin: 10px 15px;vertical-align: middle;}.footer-distributed .footer-center i.fa-envelope{font-size: 17px;line-height: 38px;}.footer-distributed .footer-center p{display: inline-block;color: #ffffff;vertical-align: middle;margin:0;}.footer-distributed .footer-center p span{display:block;font-weight: normal;font-size:14px;line-height:2;}.footer-distributed .footer-center p a{color: #5383d3;text-decoration: none;;}/* Footer Right */.footer-distributed .footer-right{width: 20%;}.footer-distributed .footer-company-about{line-height: 20px;color: #92999f;font-size: 13px;font-weight: normal;margin: 0;}.footer-distributed .footer-company-about span{display: block;color: #ffffff;font-size: 14px;font-weight: bold;margin-bottom: 20px;}.footer-distributed .footer-icons{margin-top: 25px;}.footer-distributed .footer-icons a{display: inline-block;width: 35px;height: 35px;cursor: pointer;background-color: #33383b;border-radius: 2px;font-size: 20px;color: #ffffff;text-align: center;line-height: 35px;margin-right: 3px;margin-bottom: 5px;}@media (max-width: 880px){.footer-distributed{font: bold 14px sans-serif;}.footer-distributed .footer-left,.footer-distributed .footer-center,.footer-distributed .footer-right{display: block;width: 100%;margin-bottom: 40px;text-align: center;}.footer-distributed .footer-center i{margin-left: 0;}}</style><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"><link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></head><body><footer class="footer-distributed"><div class="footer-left"><h3>Company<span>logo</span></h3><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p></div><div class="footer-center"><div><i class="fa fa-map-marker"></i><p><span>21 Revolution Street</span> Paris, France</p></div><div><i class="fa fa-phone"></i><p>+1 555 123456</p></div><div><i class="fa fa-envelope"></i><p><a href="mailto:support@company.com">support@company.com</a></p></div></div><div class="footer-right"><p class="footer-company-about"><span>About the company</span>Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p><div class="footer-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div></div></footer></body></html>',
		attributes: {
		    class: 'fa fa-square-o',
		    title: 'Footer-2'
		},
		category: 'Footer'
	});

	// Footer Layout
	bm.add('Footer-3', {
		label: 'Footer-3',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, contact, form, icons"/><title>Footer Distributed With Contact Form</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-distributed{background-color: #827717;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;font: bold 16px sans-serif;text-align: left;padding: 50px 60px 40px;margin-top: 80px;overflow: hidden;}/* Footer left */.footer-distributed .footer-left{float: left;}/* The company logo */.footer-distributed h3{color: #ffffff;font: normal 36px \'Cookie\', cursive;margin: 0 0 10px;}.footer-distributed h3 span{color: #5383d3;}/* Footer links */.footer-distributed .footer-links{color: #ffffff;margin: 0 0 10px;padding: 0;}.footer-distributed .footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-company-name{color: #8f9296;font-size: 14px;font-weight: normal;margin: 0;}/* Footer social icons */.footer-distributed .footer-icons{margin-top: 40px;}.footer-distributed .footer-icons a{display: inline-block;width: 35px;height: 35px;cursor: pointer;background-color: #33383b;border-radius: 2px;font-size: 20px;color: #ffffff;text-align: center;line-height: 35px;margin-right: 3px;margin-bottom: 5px;}/* Footer Right */.footer-distributed .footer-right{float: right;}.footer-distributed .footer-right p{display: inline-block;vertical-align: top;margin: 15px 42px 0 0;color: #ffffff;}/* The contact form */.footer-distributed form{display: inline-block;}.footer-distributed form input,.footer-distributed form textarea{display: block;border-radius: 3px;box-sizing: border-box;background-color: #1f2022;box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);border: none;resize: none;font: inherit;font-size: 14px;font-weight: normal;color: #d1d2d2;width: 400px;padding: 18px;}.footer-distributed ::-webkit-input-placeholder{color: #5c666b;}.footer-distributed ::-moz-placeholder{color: #5c666b;opacity: 1;}.footer-distributed :-ms-input-placeholder{color: #5c666b;}.footer-distributed form input{height: 55px;margin-bottom: 15px;}.footer-distributed form textarea{height: 100px;margin-bottom: 20px;}.footer-distributed form button{border-radius: 3px;background-color: #33383b;color: #ffffff;border: 0;padding: 15px 50px;font-weight: bold;float: right;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 1000px){.footer-distributed{font: bold 14px sans-serif;}.footer-distributed .footer-company-name{font-size: 12px;}.footer-distributed form input,.footer-distributed form textarea{width: 250px;}.footer-distributed form button{padding: 10px 35px;}}@media (max-width: 800px){.footer-distributed{padding: 30px;}.footer-distributed .footer-left,.footer-distributed .footer-right{float: none;max-width: 300px;margin: 0 auto;}.footer-distributed .footer-left{margin-bottom: 40px;}.footer-distributed form{margin-top: 30px;}.footer-distributed form{display: block;}.footer-distributed form button{float: none;}}</style><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"><link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></head><body><footer class="footer-distributed"><div class="footer-left"><h3>Company<span>logo</span></h3><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p><div class="footer-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div></div><div class="footer-right"><p>Contact Us</p><form action="#" method="post"><input type="text" name="email" placeholder="Email"/><textarea name="message" placeholder="Message"></textarea><button>Send</button></form></div></footer></body></html>',
		attributes: {
		    class: 'fa fa-square-o',
		    title: 'Footer-3'
		},
		category: 'Footer'
	});

	// Footer Layout
	bm.add('Footer-4', {
		label: 'Footer-4',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, search, form, icons"/><title>Footer with a Search Form</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}html{background-color: #eaf0f2;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}header{text-align: center;padding-top: 100px;margin-bottom:200px;}header h1{font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}header h2{color: #F05283;}header h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}header h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}header ul{max-width: 600px;margin: 60px auto 0;}header ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}header ul li a.active{background-color: #66B650;pointer-events: none;}header ul li a:hover{opacity: 1;}header ul{list-style: none;padding: 0;}header ul li{display: inline-block;}@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-distributed{background-color: #292c2f;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;font: bold 16px sans-serif;text-align: left;padding: 50px 60px;margin-top: 80px;overflow: hidden;}/* Footer left */.footer-distributed .footer-left{float: left;}.footer-distributed .footer-links{color: #ffffff;margin: 0 0 10px;padding: 0;}.footer-distributed .footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-company-name{color: #8f9296;font-size: 14px;font-weight: normal;margin: 0;}/* Footer right */.footer-distributed .footer-right{float: right;}/* The search form */.footer-distributed form{position: relative;}.footer-distributed form input{display: block;border-radius: 3px;box-sizing: border-box;background-color: #1f2022;box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);border: none;font: inherit;font-size: 14px;font-weight: normal;color: #d1d2d2;width: 500px;padding: 18px 50px 18px 18px;}.footer-distributed form input:focus{outline: none;}/* Changing the placeholder color */.footer-distributed form input::-webkit-input-placeholder{color: #5c666b;}.footer-distributed form input::-moz-placeholder{opacity: 1;color: #5c666b;}.footer-distributed form input:-ms-input-placeholder{color: #5c666b;}/* The magnify glass icon */.footer-distributed form i{width: 18px;height: 18px;position: absolute;top: 16px;right: 18px;color: #d1d2d2;font-size: 18px;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 1000px){.footer-distributed form input{width: 300px;}}@media (max-width: 800px){.footer-distributed{padding: 30px;text-align: center;font: bold 14px sans-serif;}.footer-distributed .footer-company-name{margin-top: 10px;font-size: 12px;}.footer-distributed .footer-left,.footer-distributed .footer-right{float: none;max-width: 300px;margin: 0 auto;}.footer-distributed .footer-left{margin-bottom: 20px;}.footer-distributed form input{width: 100%;}}</style><link rel="stylesheet" href="css/footer-distributed-with-search.css"><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></head><body><footer class="footer-distributed"><div class="footer-left"><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p></div><div class="footer-right"><form method="get" action="#"><input placeholder="Search our website" name="search"/><i class="fa fa-search"></i></form></div></footer></body></html>',
		attributes: {
		    class: 'fa fa-square-o',
		    title: 'Footer-4'
		},
		category: 'Footer'
	});

	// Footer Layout
	bm.add('Footer-5', {
		label: 'Footer-5',
		content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, basic, centered, links"/><title>Basic, Centered Footer</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}html{background-color: #eaf0f2;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}header{text-align: center;padding-top: 100px;margin-bottom:200px;}header h1{font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}header h2{color: #F05283;}header h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}header h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}header ul{max-width: 600px;margin: 60px auto 0;}header ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}header ul li a.active{background-color: #66B650;pointer-events: none;}header ul li a:hover{opacity: 1;}header ul{list-style: none;padding: 0;}header ul li{display: inline-block;}@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-basic-centered{background-color: #292c2f;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;text-align: center;font: normal 18px sans-serif;padding: 45px;margin-top: 80px;}.footer-basic-centered .footer-company-motto{color: #8d9093;font-size: 24px;margin: 0;}.footer-basic-centered .footer-company-name{color: #8f9296;font-size: 14px;margin: 0;}.footer-basic-centered .footer-links{list-style: none;font-weight: bold;color: #ffffff;padding: 35px 0 23px;margin: 0;}.footer-basic-centered .footer-links a{display:inline-block;text-decoration: none;color: inherit;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 600px){.footer-basic-centered{padding: 35px;}.footer-basic-centered .footer-company-motto{font-size: 18px;}.footer-basic-centered .footer-company-name{font-size: 12px;}.footer-basic-centered .footer-links{font-size: 14px;padding: 25px 0 20px;}.footer-basic-centered .footer-links a{line-height: 1.8;}}</style><link rel="stylesheet" href="css/footer-basic-centered.css"></head><footer class="footer-basic-centered"><p class="footer-company-motto">The company motto.</p><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p></footer></body></html>',
		attributes: {
		    class: 'fa fa-square-o',
		    title: 'Footer-5'
		},
		category: 'Footer'
	});
// Login Layout
	bm.add('Login-1', {
		label: 'Login-1',
		content: '<html><head><meta charset="UTF-8"> <title>Login Form</title> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"> <style>@import url(https://fonts.googleapis.com/css?family=Open+Sans);.btn{display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em;}.btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled]{background-color: #e6e6e6;}.btn-large{padding: 9px 14px; font-size: 15px; line-height: normal; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;}.btn:hover{color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; -webkit-transition: background-position 0.1s linear; -moz-transition: background-position 0.1s linear; -ms-transition: background-position 0.1s linear; -o-transition: background-position 0.1s linear; transition: background-position 0.1s linear;}.btn-primary, .btn-primary:hover{text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff;}.btn-primary.active{color: rgba(255, 255, 255, 0.75);}.btn-primary{background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0); border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);}.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled]{filter: none; background-color: #4a77d4;}.btn-block{width: 100%; display:block;}*{-webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box;}html{width: 100%; height:100%; overflow:hidden;}body{width: 100%;height:100%;font-family: \'Open Sans\', sans-serif;background: #092756;background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top, rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%,#092756 100%);background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg, #670d10 0%,#092756 100%);background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg, #670d10 0%,#092756 100%);background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg, #670d10 0%,#092756 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#3E1D6D\', endColorstr=\'#092756\',GradientType=1 );}.login{position: absolute;top: 50%;left: 50%;margin: -150px 0 0 -150px;width:300px;height:300px;}.login h1{color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center;}input{width: 100%; margin-bottom: 10px; background: rgba(0,0,0,0.3);border: none;outline: none;padding: 10px;font-size: 13px;color: #fff;text-shadow: 1px 1px 1px rgba(0,0,0,0.3);border: 1px solid rgba(0,0,0,0.3);border-radius: 4px;box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);-webkit-transition: box-shadow .5s ease;-moz-transition: box-shadow .5s ease;-o-transition: box-shadow .5s ease;-ms-transition: box-shadow .5s ease;transition: box-shadow .5s ease;}input:focus{box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2);}</style> <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script></head><body> <div class="login"><h1>Login</h1> <form method="post"> <input type="text" name="u" placeholder="Username" required="required"/> <input type="password" name="p" placeholder="Password" required="required"/> <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button> </form></div><script src="js/index.js"></script></body></html>',
		attributes: {
		    class: 'fa fa-user-o',
		    title: 'Login-1'
		},
		category: 'Login'
	});

	// Login Layout
	bm.add('Login-2', {
		label: 'Login-2',
		content: '<html><head> <meta charset="UTF-8"> <link rel=\'stylesheet prefetch\' href=\'http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\'> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Vibur);*{box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; font-family: arial;}body{background: grey;}h1{color: #ccc; text-align: center; font-family: \'Vibur\', cursive; font-size: 50px;}.login-form{width: 350px; padding: 40px 30px; background: #eee; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; margin: auto; position: absolute; left: 0; right: 0; top: 50%; -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -webkit-transform: translateY(-50%); transform: translateY(-50%);}.form-group{position: relative; margin-bottom: 15px;}.form-control{width: 100%; height: 50px; border: none; padding: 5px 7px 5px 15px; background: #fff; color: #666; border: 2px solid #ddd; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;}.form-control:focus, .form-control:focus + .fa{border-color: #10CE88; color: #10CE88;}.form-group .fa{position: absolute; right: 15px; top: 17px; color: #999;}.log-status.wrong-entry{-moz-animation: wrong-log 0.3s; -webkit-animation: wrong-log 0.3s; animation: wrong-log 0.3s;}.log-status.wrong-entry .form-control, .wrong-entry .form-control + .fa{border-color: #ed1c24; color: #ed1c24;}.log-btn{background: #0AC986; dispaly: inline-block; width: 100%; font-size: 16px; height: 50px; color: #fff; text-decoration: none; border: none; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;}.link{text-decoration: none; color: #C6C6C6; float: right; font-size: 12px; margin-bottom: 15px;}.link:hover{text-decoration: underline; color: #8C918F;}.alert{display: none; font-size: 12px; color: #f00; float: left;}@-moz-keyframes wrong-log{0%, 100%{left: 0px;}20% , 60%{left: 15px;}40% , 80%{left: -15px;}}@-webkit-keyframes wrong-log{0%, 100%{left: 0px;}20% , 60%{left: 15px;}40% , 80%{left: -15px;}}@keyframes wrong-log{0%, 100%{left: 0px;}20% , 60%{left: 15px;}40% , 80%{left: -15px;}}</style> </head><body> <div class="login-form"> <h1>Vini</h1> <div class="form-group "> <input type="text" class="form-control" placeholder="Username " id="UserName"> <i class="fa fa-user"></i> </div><div class="form-group log-status"> <input type="password" class="form-control" placeholder="Password" id="Passwod"> <i class="fa fa-lock"></i> </div><span class="alert">Invalid Credentials</span> <a class="link" href="#">Lost your password?</a> <button type="button" class="log-btn" >Log in</button> </div></body></html>',
		attributes: {
		    class: 'fa fa-user-o',
		    title: 'Login-2'
		},
		category: 'Login'
	});

	// Login Layout
	bm.add('Login-3', {
		label: 'Login-3',
		content: '<!DOCTYPE html><html ><head> <meta charset="UTF-8"> <style type="text/css"> body{font-family: \'Open Sans\', sans-serif; color:blue; background:#3498db; margin: 0 auto 0 auto; width:100%; text-align:center; margin: 20px 0px 20px 0px;}p{font-size:12px; text-decoration: none; color:#ffffff;}h1{font-size:1.5em; color:#525252;}.box{background:white; width:300px; border-radius:6px; margin: 0 auto 0 auto; padding:0px 0px 70px 0px; border: #2980b9 4px solid;}.email{background:#ecf0f1; border: #ccc 1px solid; border-bottom: #ccc 2px solid; padding: 8px; width:250px; color:#AAAAAA; margin-top:10px; font-size:1em; border-radius:4px;}.password{border-radius:4px; background:#ecf0f1; border: #ccc 1px solid; padding: 8px; width:250px; font-size:1em;}.btn{background:#2ecc71; width:125px; padding-top:5px; padding-bottom:5px; color:white; border-radius:4px; border: #27ae60 1px solid; margin-top:20px; margin-bottom:20px; float:left; margin-left:16px; font-weight:800; font-size:0.8em;}.btn:hover{background:#2CC06B;}#btn2{float:left; background:#3498db; width:125px; padding-top:5px; padding-bottom:5px; color:white; border-radius:4px; border: #2980b9 1px solid; margin-top:20px; margin-bottom:20px; margin-left:10px; font-weight:800; font-size:0.8em;}#btn2:hover{background:#3594D2;}</style></head><body> <link href=\'https://fonts.googleapis.com/css?family=Open+Sans:700,600\' rel=\'stylesheet\' type=\'text/css\'><form method="post" action="index.html"><div class="box"><h1>Dashboard</h1><input type="email" name="email" placeholder="email" class="email"/> <input type="password" name="password" placeholder="password" class="email"/> <a href="#"><div class="btn">Sign In</div></a> <a href="#"><div id="btn2">Sign Up</div></a> </div></form><p>Forgot your password? <u style="color:#f1c40f;">Click Here!</u></p></body></html>',
		attributes: {
		    class: 'fa fa-user-o',
		    title: 'Login-3'
		},
		category: 'Login'
	});

	// Login Layout
	bm.add('Login-4', {
		label: 'Login-4',
		content: '<html><head> <meta charset="UTF-8"> <title>Simple login form</title> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Tenor+Sans); html{background-color: #5D92BA; font-family: "Tenor Sans", sans-serif;}.container{width: 500px; height: 400px; margin: 0 auto;}.login{margin-top: 50px; width: 450px;}.login-heading{font: 1.8em/48px "Tenor Sans", sans-serif; color: #a51f1f;}.input-txt{width: 100%; padding: 20px 10px; background: #5D92BA; border: none; font-size: 1em; color: #000000; border-bottom: 1px dotted rgba(250, 250, 250, 0.4); -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; -moz-transition: background-color 0.5s ease-in-out; -o-transition: background-color 0.5s ease-in-out; -webkit-transition: background-color 0.5s ease-in-out; transition: background-color 0.5s ease-in-out;}.input-txt:-moz-placeholder{color: #81aac9;}.input-txt:-ms-input-placeholder{color: #81aac9;}.input-txt::-webkit-input-placeholder{color: #81aac9;}.input-txt:focus{background-color: #4478a0;}.login-footer{margin: 10px 0; overlow: hidden; float: left; width: 100%;}.btn{padding: 15px 30px; border: none; background: #a51f1f; color: #5D92BA;}.btn--right{float: right;}.icon{display: inline-block;}.icon--min{font-size: .9em;}.lnk{font-size: .8em; line-height: 3em; color: #a51f1f; text-decoration: none;}</style></head><body> <div class="container"> <div class="login"> <h1 class="login-heading"> <strong>Welcome.</strong> Please login.</h1> <form method="post"> <input type="text" name="user" placeholder="Username" required="required" class="input-txt"/> <input type="password" name="password" placeholder="Password" required="required" class="input-txt"/> <div class="login-footer"> <a href="#" class="lnk"> <span class="icon icon--min">ಠ╭╮ಠ</span> I\'ve forgotten something </a> <button type="submit" class="btn btn--right">Sign in </button> </div></form> </div></div></body></html>',
		attributes: {
		    class: 'fa fa-user-o',
		    title: 'Login-4'
		},
		category: 'Login'
	});

	// Search Layout
	bm.add('search', {
		label: 'search',
		content: '<html><head><title>search</title><style type="text/css">#search{}#search input[type="text"]{background: url(search-white.png) no-repeat 10px 6px #fcfcfc; border: 1px solid #d1d1d1; font: bold 12px Arial,Helvetica,Sans-serif; color: #bebebe; width: 150px; padding: 6px 15px 6px 35px; -webkit-border-radius: 20px; -moz-border-radius: 20px; border-radius: 20px; text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1); -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset; -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset; -webkit-transition: all 0.7s ease 0s; -moz-transition: all 0.7s ease 0s; -o-transition: all 0.7s ease 0s; transition: all 0.7s ease 0s;}#search input[type="text"]:focus{width: 200px;}</style></head><body><form method="get" action="/search" id="search"> <input name="q" type="text" size="40" placeholder="Search..."/></form></body></html>',
		attributes: {
		    class: 'fa fa-search',
		    title: 'search'
		},
		category: 'Search'
	});
	
	// Simple logo component
	bm.add('logo',{
		label: 'Logo',
		content: '<logo><img src="http://placehold.it/250x100/008080/ffffff?text=Logo"></logo>',
		attributes: {
			class: 'fa fa-google',
			title: 'Logo'
		},
		category: 'Static Components'
	});

	// Static components for page
	bm.add('productContents', {
		label: 'Product Content',
		content: '<style type="text/css">*{box-sizing: border-box;}body{margin: 0;}#c3963{padding:0px; margin-top:0px; margin-right:0px; margin-left:0px; text-rendering:optimizeLegibility; font-weight:400; color:rgb(17, 17, 17); font-family:Arial, sans-serif; margin-bottom:0px !important; font-size:21px !important; line-height:1.3 !important;}#c3997{color:rgb(0, 0, 0); font-family:Arial, sans-serif; font-size:small;}#c4025{padding:0px 0px 4px; margin:0px 0px 0.75em; text-rendering:optimizeLegibility; font-size:12px; line-height:1.255; color:rgb(204, 102, 0); font-family:verdana, arial, helvetica, sans-serif;}.container-width{width:90%; max-width:1150px; margin-top:0px; margin-right:auto; margin-bottom:0px; margin-left:auto;}.flex-sect{background-color:rgb(250, 250, 250); padding-top:100px; padding-right:0px; padding-bottom:100px; padding-left:0px; font-family:Helvetica, serif;}.flex-title{margin-bottom:15px; font-size:2em; text-align:center; font-weight:700; color:rgb(85, 85, 85); padding-top:5px; padding-right:5px; padding-bottom:5px; padding-left:5px;}.cards{padding-top:20px; padding-right:0px; padding-bottom:20px; padding-left:0px; display:flex; justify-content:space-around; flex-direction:initial; flex-wrap:wrap;}.card{background-color:white; height:300px; width:300px; margin-bottom:30px; box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 2px 0px; border-top-left-radius:2px; border-top-right-radius:2px; border-bottom-right-radius:2px; border-bottom-left-radius:2px; transition-duration:0.5s; transition-timing-function:ease; transition-delay:initial; transition-property:all; font-weight:100; overflow-x:hidden; overflow-y:hidden;}.card:hover{margin-top:-5px; box-shadow:rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;}.card-header{height:155px; background-image:url("http://placehold.it/350x250/78c5d6/fff/image1.jpg"); background-size:cover; background-position-x:center; background-position-y:center;}.card-header.ch2{background-image:url("http://placehold.it/350x250/459ba8/fff/image2.jpg");}.card-header.ch3{background-image:url("http://placehold.it/350x250/79c267/fff/image3.jpg");}.card-header.ch4{background-image:url("http://placehold.it/350x250/c5d647/fff/image4.jpg");}.card-header.ch5{background-image:url("http://placehold.it/350x250/f28c33/fff/image5.jpg");}.card-header.ch6{background-image:url("http://placehold.it/350x250/e868a2/fff/image6.jpg");}.card-body{padding-top:15px; padding-right:15px; padding-bottom:5px; padding-left:15px; color:rgb(85, 85, 85);}.card-title{font-size:1.4em; margin-bottom:5px;}.card-sub-title{color:rgb(179, 179, 179); font-size:1em; margin-bottom:15px;}.card-desc{font-size:0.85rem; line-height:17px;}.am-sect{padding-top:100px; padding-bottom:100px; font-family:Helvetica, serif;}.img-phone{float:left;}.am-container{display:flex; flex-wrap:wrap; align-items:center; justify-content:space-around;}.am-content{float:left; padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; width:490px; color:rgb(68, 68, 68); font-weight:100; margin-top:50px;}.am-pre{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; color:rgb(177, 177, 177); font-size:15px;}.am-title{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; font-size:25px; font-weight:400;}.am-desc{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; font-size:17px; line-height:25px;}.am-post{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; line-height:25px; font-size:13px;}</style>'+
					'<productContents><section class="flex-sect"> <div class="container-width"> <div class="flex-title">Our Top Grossing Products </div><div class="cards"> <div class="card"> <div class="card-header"> </div><div class="card-body"> <div class="card-title">Title one </div><div class="card-sub-title">Subtitle one </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch2"> </div><div class="card-body"> <div class="card-title">Title two </div><div class="card-sub-title">Subtitle two </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch3"> </div><div class="card-body"> <div class="card-title">Title three </div><div class="card-sub-title">Subtitle three </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch4"> </div><div class="card-body"> <div class="card-title">Title four </div><div class="card-sub-title">Subtitle four </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch5"> </div><div class="card-body"> <div class="card-title">Title five </div><div class="card-sub-title">Subtitle five </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch6"> </div><div class="card-body"> <div class="card-title">Title six </div><div class="card-sub-title">Subtitle six </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div></div></div></section><section class="am-sect"> <div class="container-width"> <div class="am-container"> <img class="img-phone" src="http://grapesjs.com/img/phone-app.png"/> <div class="am-content"> <div class="am-pre">BEST PRODUCT OF ALL TIME </div><div class="am-title"> <h1 class="a-size-large a-spacing-none" id="c3963" id="title">Apple iPhone 6s with Free Vodafone RED Plan (Gold, 16GB) </h1> </div><div class="am-desc"> <span id="c3997" >iPhone 6s - Take everything that made the previous generation great, and advance it to a new level. They’re made with 7000 Series aluminium, the strongest alloy we’ve ever used in an iPhone. They both feature Retina HD displays made from the strongest cover glass used on any smartphone in the world. And now they’re available in an elegant new rose gold ﬁnish.</span> </div><div class="am-post"> <h4 id="c4025" >A breakthrough design. Pushed even further. </h4> </div></div></div></div></section></productContents>',
		attributes: {
			class: 'fa fa-file-o',
			title: 'Content Block'
		},
		category: 'Static Components'
	});

	// bm.add('bootstrapSlider',{
	// 	label: 'Bootstrap Slider',
	// 	content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script><div id="myCarousel" class="carousel slide" data-ride="carousel"> <ol class="carousel-indicators"> <li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li></ol> <div class="carousel-inner"> <div class="item active"> <img src="http://lorempixel.com/1920/1080/sports/1/" alt="Los Angeles" style="width:100%;"> </div><div class="item"> <img src="http://lorempixel.com/1920/1080/sports/2/" alt="Chicago" style="width:100%;"> </div><div class="item"> <img src="http://lorempixel.com/1920/1080/sports/3/" alt="New york" style="width:100%;"> </div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">Next</span> </a> </div>',
	// 	attributes: {
	// 		class: 'fa fa-user',
	// 		title: 'Bootstrap Slider'
	// 	},
	// 	category: 'Custom Components'
	// });

	// Pre Defined Site Header
	bm.add('siteHeader', {
		label: 'Header',
		content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><style>.clearfix{clear:both}.card,.product-card>a,.product_image img{transition-delay:initial;transition-property:all}.product a,.product-card>a,.product-card>a:hover{text-decoration-line:none;text-decoration-color:initial}.product-card>a{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:#f2f2f2;color:#333;transition-duration:.1s;transition-timing-function:initial;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration-style:initial}.product_buttons .add_to_cart:hover,.product_buttons .product_compare:hover,.product_buttons .product_heart:hover{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgba(255,255,255,.5)}.product-card>a:hover{text-decoration-style:initial;box-shadow:rgba(0,0,0,.3) 0 1px 3px}.product-card figcaption{display:block;padding-top:0;padding-right:10px;padding-bottom:0;padding-left:10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.product_price span,.product_title h5{font-size:1.1em;line-height:1}*{box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif}img{max-width:100%;height:auto}ul.product_list{list-style-type:none;width:100%;display:inline;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0}.product_image img{display:block;position:absolute;top:0;bottom:0;left:0;right:0;transition-duration:.5s;transition-timing-function:ease-in-out;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto}.product_image img:hover{transform:scale(1.2,1.2)}.product_title h5{font-weight:500;padding-bottom:5px;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto}.product_price a{color:#000}.product_desc p{line-height:1.3;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:10px;padding-right:0;padding-bottom:10px;padding-left:0}.product_buttons .product_heart:hover{color:#df0404}.product_buttons .product_compare:hover{color:#129612}.product_buttons .add_to_cart:hover{color:#4dc8d3}.product a{text-decoration-style:initial}.product:hover .info{height:40px}.product:hover .info::before{transform:scaleY(.7)}.product:hover .info::after{visibility:visible;transform:translateY(10px)}.title a{color:inherit}.product:hover .title{transform:translateY(-18px);font-weight:700;color:#000}.actions-wrapper *{width:50%;text-align:center;color:#191919;font-size:.95em;font-weight:700;padding-top:2px;padding-right:0;padding-bottom:2px;padding-left:0}.actions-wrapper::before{font-family:FontAwesome;margin-right:8px}.product:hover .actions-wrapper *{visibility:visible}body{margin-top:0;margin-right:0;margin-bottom:0;margin-left:0}#c18765,#c18771{position:relative}#c18793,.footer-div-fix{background-color: transparent !important; border: none !important; font-weight: normal}#c18805{left:-1131px;top:0}#c18765,#c18770,#c18772,#c18801,#c18805,#c18810,#c18846,#c18874{width:1170px;height:370px}#c18801,#c18813{opacity:0;position:absolute}#c17455,#c18772,#c18793,#c18801{display:none}#c18770,#c18772,#c18773,#c18777,#c18784,#c18793,#c18800,#c18805,#c18810,#c18813,#c18821,#c18822,#c18826,#c18836,#c18846,#c18853,#c18854,#c18858,#c18868,#c18874,#c18881,#c18882,#c18886{position:absolute}#c18765,#c18784,#c18800,#c18805,#c18836,#c18868{overflow-x:hidden;overflow-y:hidden}#c18770{top:0;left:0;transform-origin:0 0 0;transform:scale(1)}#c18771{overflow-x:visible;overflow-y:visible;display:block;top:0;left:0}#c18772{top:0;left:0}#c18773,#c18822,#c18854,#c18882{opacity:.7;display:block;background-color:#000;top:0;left:0;width:100%;height:100%}#c18777,#c18826,#c18858,#c18886{display:block;background-image:url(/bundles/officebrainpage/images/img/loading.gif);background-position-x:50%;background-position-y:50%;background-size:initial;background-repeat-x:no-repeat;background-repeat-y:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:initial;top:0;left:0;width:100%;height:100%}#c18784,#c18800{cursor:move;left:0;top:0;z-index:0}#c18793{z-index:0;pointer-events:none}#c18801{top:0;left:0;background-color:#000}#c18810,#c18846,#c18874{top:0;left:0}#c18813{width:599px;right:auto;height:65px;bottom:auto;left:-693px;top:4px}#c18821,#c18836,#c18841,#c18853,#c18868,#c18873,#c18881,.js-banner-dynamic-height-width{width:1170px;height:370px}#c18821,#c18853,#c18881{top:0;left:0;z-index:1000;display:none}#c18836{top:0;left:39px}#c18841,#c18873{top:0;left:0}#c18868{top:0;left:-1170px}#c18899{top:157.5px;left:8px}#c18907{top:157.5px;right:8px}.home-content{margin-top:150px}.ob-qa-basic-search-btn{position:absolute;background-color:teal;color:#f8efef;padding:8px 10px 12px 10px;margin:0}.ob-qa-basic-search-btn:hover{color:#f8efef}.js-banner-dynamic-height-width{margin:0 auto 0 auto}@media only screen and (min-width:320px){.product_sale p,.product_values .product_buttons button{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial}.product_sale p{color:#fff;background-color:red;box-shadow:rgba(0,0,0,.4) 0 2px 8px 0;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:3px;padding-right:25px;padding-bottom:3px;padding-left:25px}.product_image .product_buttons{display:none}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px}.product_values .product_buttons button{color:#252525;background-color:#fff;font-size:1em;width:40px;height:40px;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:#000;border-right-color:#000;border-bottom-color:#000;border-left-color:#000}}@media only screen and (max-width:480px){.product_title h5{font-weight:700}}@media only screen and (max-width:320px){.product_image img{position:relative}.product_price span{float:left;width:100%}}</style>'+
				'<body><homepage><div class="js-body-container js-theme-publish"id=ob-SmcDistributorTheme><header><div id=js-fix-header-controller><div class=ob-header><div class=main-logo-part><div class=ob-logo-block><div class=container><div class=row><div class="col-md-6 col-lg-6 col-xs-6 col-sm-8 logo-col"><a href=http://localhost/exported/index.html class="js-editable js-draggable"data-id=header_logo_area data-title=Logo><img src=http://i.imgur.com/WQhZy0t.png class="img-responsive js-logo"data-highlightable=1 data-id=header_logo_area></a></div><div class="col-md-6 col-lg-6 col-xs-6 col-sm-4 shop-menu-col"><div class="shop-menu slidemenu"id=slidemenu><div class=clearfix></div></div><div class=clearfix></div></div><ul class="position-inherit nav navbar-nav pull-right ui-advance-search"><li class="dropdown js-advance-menu nav-search-btn position-inherit"><a href=javascript:void(0) class="dropdown-toggle header-search-medium"aria-expanded=true data-toggle=dropdown><i class="fa fa-search"></i>Search In</a><div class=top-search-block><div class="pull-left search-form searchbox"><span class="dropdown advance-search-wrap header-search js-advance-search-wrap search-field"><input class="form-control ob-qa-srch-txt-box"id=search_query name=search_query placeholder="Enter Keyword here"><a style="cursor: pointer" class="ob-qa-basic-search-btn searchButton"><i class="fa fa-search fa-fw"data-highlightable=1></i></a></span><div style="display: inline-block; padding-top: 19px; font-size: 14px; color: #008080;"><a class="" style="font-family: \'HelveticaNeueLTStd55-Roman\';" href="product-listing.html">Advanced Search</a></div></div></div></ul></div></div></div></div></div><div class=ob-menu><div class=container><div class="mainmenu-nav menu-box menu-box-op2 navbar-default navbar2"id=mainmenu-nav role=navigation><div class=navbar-header2><a class=navbar-toggle><span class=sr-only>Toggle navigation</span><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></a></div><div id=mainmenu><span class=scroll-logo><a href=https://smcmadetoorder.com/en_us><img src=Service%20Master%20Clean%20Made%20To%20Order%20Store_files/1492085906_signet-logo.png class=img-responsive></a></span></div><div id=navbar-height-col2></div></div></div></div></div></header></div><div class="blk-row" style="min-height: 50px; margin-top:180px"></div><div class=clearfix></div><div class=middle-footer><div class=container><div class="row js-row-elements"><div class="col-xs-12 col-lg-4 col-md-3 col-sm-3"><div class=common-title><h3 class=footer-heading>My account</h3></div><div class=clearfix></div><ul class="footer-link list-unstyled"><li><a href=https://smcmadetoorder.com/en_us/my-account/info title="My account">My account</a><li><a href=https://smcmadetoorder.com/en_us/order-list title="Order History">Order History</a><li><a href=https://smcmadetoorder.com/en_us/wish-list title="Wish List">Wish List</a><li><a href=https://smcmadetoorder.com/en_us/cart-list title="My Cart">My Cart</a></ul></div><div class="col-xs-12 col-lg-4 col-md-3 col-sm-3"><div class=common-title><h3 class=footer-heading>information</h3></div><div class=clearfix></div><ul class="footer-link list-unstyled"><ul class="footer-link list-unstyled"><li><a href=https://smcmadetoorder.com/en_us/page/about-us title="About Us">About Us</a><li><a href=https://smcmadetoorder.com/en_us/page/general-info title="General Information">General Information</a><li><a href=https://smcmadetoorder.com/en_us/customer-survey title="Customer Satisfaction Survey">Customer Satisfaction Survey</a><li><a href=https://smcmadetoorder.com/en_us/page/privacy-policy title="Privacy Policy">Privacy Policy</a></ul></ul></div><div class="col-xs-12 col-lg-4 col-md-6 col-sm-6"><div class="js-element ui-state-default footer-div-fix"><div class=common-title><h3 class=footer-heading>Contact Details</h3></div><div class=clearfix></div><div class=js-editable data-id=footer_contact_area data-title="Contact Detail"data-type=footer-contact-area><ul class="footer-link footer-contact-detail js-sub-sortable"><li class="js-sub-element phone-number"data-element-title=Phone data-id=phone data-sort=1>(800) 654-3889<li class="js-sub-element email-css"data-element-title=Email data-id=email data-sort=2><i class="fa fa-envelope"></i> <span data-title=yes>info@smcmadetoorder.com</span><li class="js-sub-element address-contact"data-element-title=Address data-id=address data-sort=3>SIGNET, INC.<li class="js-sub-element address-contact-1"data-element-title=Address1 data-id=address1>1801 N. Shelby Oaks Drive, Suite 12<li class="js-sub-element address-contact-1"data-element-title=Address2 data-id=address2>Memphis, TN 38134</ul></div></div></div></div></div></div><div class=bottom-footer><div class=container><div class=social-icon-box><div class=pull-left><ul><li class=social-icon><a href=https://facebook.com/gosignet target=_blank><i class="strip-icon fb-icon"></i></a><li class=social-icon><a href=https://twitter.com/signetpromo target=_blank><i class="strip-icon twitter-icon"></i></a><li class=social-icon><a href=https://www.linkedin.com/company/signet-inc- target=_blank><i class="strip-icon in-icon"></i></a><li class=social-icon><a href=https://www.instagram.com/signetinc/ target=_blank><i class="strip-icon instagram-icon"></i></a></ul></div><div class=pull-right><p class=newslatter>JOIN OUR NEWSLETTER<form action=https://smcmadetoorder.com/en_us/newsletter class="form-inline news-box"role=form><div class=form-group><input class=form-control id=email_id name=email_send placeholder="Enter Your Email Address"type=email></div><button class="btn btn-default news-letter-validation-submit-btn"type=submit>Subscribe</button></form></div><div class=clearfix></div></div><span class=pull-left>Powered by: <a href=http://i.imgur.com/WQhZy0t.png target=_blank><img src=http://i.imgur.com/WQhZy0t.png></a></span><span class="col-xs-12 col-lg-7 col-md-7 col-sm-7 text-center">Copyright © 2017 Flowz, Inc. All rights reserved</span></div></div><link href=https://smcmadetoorder.com/bundles/officebraincustombundletheme/SmcDistributorTheme/css/all-css.css rel=stylesheet></homepage></script>',
		attributes: {
			class: 'fa fa-file-text',
			title: 'Header'
		},
		category: 'Ecommerce Components'
	});

	// Flipkart Like header
	bm.add('siteHeaderNew', {
		label: 'Ecommerce Navabr',
		content: '<style type="text/css">#flipkart-navbar{background-color: #008080; color: #FFFFFF;}.row1{padding-top: 10px;}.row2{padding-bottom: 20px;}.flipkart-navbar-input{padding: 11px 16px; border-radius: 2px 0 0 2px; border: 0 none; outline: 0 none; font-size: 15px; color: #000;}.flipkart-navbar-button{background-color: #ffe11b; border: 1px solid #ffe11b; border-radius: 0 2px 2px 0; color: #565656; padding: 10px 0; height: 43px; cursor: pointer; padding-left: 18px;}.cart-button{background-color: #008888; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2); padding: 10px 0; text-align: center; height: 41px; border-radius: 2px; font-weight: 500; width: 120px; display: inline-block; color: #FFFFFF; text-decoration: none; color: inherit; border: none; outline: none;}.cart-button:hover{text-decoration: none; color: #fff; cursor: pointer;}.cart-svg{display: inline-block; width: 16px; height: 16px; vertical-align: middle; margin-right: 8px;}.item-number{border-radius: 3px; background-color: rgba(0, 0, 0, .1); height: 20px; padding: 3px 6px; font-weight: 500; display: inline-block; color: #fff; line-height: 12px; margin-left: 10px;}.upper-links{display: inline-block; padding: 0 11px; line-height: 23px; font-family: \'Roboto\', sans-serif; letter-spacing: 0; color: inherit; border: none; outline: none; font-size: 12px;}.dropdown{position: relative; display: inline-block; margin-bottom: 0px;}.dropdown:hover{background-color: #fff;}.dropdown:hover .links{color: #000;}.dropdown:hover .dropdown-menu{display: block;}.dropdown .dropdown-menu{position: absolute; top: 100%; display: none; background-color: #fff; color: #333; left: 0px; border: 0; border-radius: 0; box-shadow: 0 4px 8px -3px #555454; margin: 0; padding: 0px;}.links{color: #fff; text-decoration: none;}.links:hover{color: #fff; text-decoration: none;}.profile-links{font-size: 12px; font-family: \'Roboto\', sans-serif; border-bottom: 1px solid #e9e9e9; box-sizing: border-box; display: block; padding: 0 11px; line-height: 23px;}.profile-li{padding-top: 2px;}.largenav{display: none;}.smallnav{display: block;}.smallsearch{margin-left: 15px; margin-top: 15px;}.menu{cursor: pointer;}@media screen and (min-width: 768px){.largenav{display: block;}.smallnav{display: none;}.smallsearch{margin: 0px;}}/*Sidenav*/.sidenav{height: 100%; width: 0; position: fixed; z-index: 1; top: 0; left: 0; background-color: #fff; overflow-x: hidden; transition: 0.5s; box-shadow: 0 4px 8px -3px #555454; padding-top: 0px;}.sidenav a{padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #818181; display: block; transition: 0.3s}.sidenav .closebtn{position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px; color: #fff;}@media screen and (max-height: 450px){.sidenav a{font-size: 18px;}}.sidenav-heading{font-size: 36px; color: #fff;}'+
					' .footer-top-layout{background: #008080 none repeat scroll 0 0; color: #ffffff; padding: 40px 0;}.OurBlog{margin-bottom: 32px; text-align: center;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.OurBlog > p{color: #ffffff;}.post-blog-date::after{background: #ffffff none repeat scroll 0 0; bottom: 0; content: ""; height: 4px; left: 0; margin: auto; position: absolute; right: 0; width: 50px;}.post-blog-date{padding-bottom: 25px; position: relative;}body{color: #fff; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-top-layout [class*="col-sm-"]:first-child{padding: 0;}.footer-top-layout [class*="col-sm-"]{border-right: 2px solid #333333; padding: 0 0 0 28px;}.footer-top-layout{color: #ffffff;}.footer-col-item{min-height: 140px;}address{color: #eee;}.footer-top-layout [class*="col-sm-"]:last-child{border-right: medium none;}.footer-top-layout{color: #ffffff;}body{color: #666666; font-family: "Open Sans",sans-serif;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{color: #eee; font-family: "Roboto",sans-serif; font-weight: 500; line-height: 1.1; margin-top: 0;}body{color: #eee; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-col-item .item-contact a{color: #eee; display: inline-block; margin-bottom: 7px; width: 100%;}.footer-col-item .item-contact a .link-id{color: #ffffff; margin-left: 0; margin-right: 6px;}.footer-col-item span{margin-left: 7px;}.footer-col-item .item-contact a{color: #eee;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.signUpNewsletter{position: relative;}.signUpNewsletter .gt-email{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border: 1px solid #eee; border-radius: 0; color: #ffffff; height: 52px;}.signUpNewsletter .btn-go{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border-color: #eee; border-style: solid; border-width: 0 0 0 1px; bottom: 0; color: #ffffff; font-size: 16px; position: absolute; right: 0; text-transform: uppercase; top: 0; width: 52px;}.footer-bottom-layout{background: #008888 none repeat scroll 0 0; padding: 20px 0; text-align: center; color: #eee;}.socialMedia-footer{margin-bottom: 20px;}.socialMedia-footer > a{display: inline-block; margin: 0 8px;}.footer-bottom-layout{text-align: center;}</style><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">'+
					'<commonLayout><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"><div id="flipkart-navbar"> <div class="container"> <div class="row row1"> <ul class="largenav pull-right"> <li class="upper-links"><a class="links" href="#">Link 1</a></li><li class="upper-links"><a class="links" href="#">Link 2</a></li><li class="upper-links"><a class="links" href="#">Link 3</a></li><li class="upper-links"><a class="links" href="#">Link 4</a></li><li class="upper-links"><a class="links" href="#">Link 5</a></li><li class="upper-links"><a class="links" href="#">Link 6</a></li><li class="upper-links"> <a class="links" href="#"> <svg class="" width="16px" height="12px" style="overflow: visible;"> <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path> </svg> </a> </li><li class="upper-links dropdown"><a class="links" href="http://clashhacks.in/">Dropdown</a> <ul class="dropdown-menu"> <li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li></ul> </li></ul> </div><div class="row row2"> <div class="col-sm-2"><a href="http://localhost/exported/index.html"><h1 style="margin:0px;"><span class="largenav">Flowz</span></h1></a> </div><div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11"> <div class="row"> <input class="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" id=search_query name=search_query> <a style="cursor:pointer"><a class="flipkart-navbar-button col-xs-1 searchButton" > <i class="fa fa-search"></i> </a> </div></div><div class="cart largenav col-sm-2"> <a class="cart-button" href="http://localhost/exported/product-listing.html"> <i class="fa fa-shopping-cart"></i> Link <span class="item-number ">0</span> </a> </div></div></div></div><div id="mySidenav" class="sidenav"> <div class="container" style="background-color: #2874f0; padding-top: 10px;"> <span class="sidenav-heading">Home</span> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> </div><a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a></div>'+
					'<div class="blk1" style="min-height: 50px; display: block; width:100%"></div><footer id="footer-Section"> <div class="footer-top-layout"> <div class="container"> <div class="row"> <div class="OurBlog"> <h4>Our Blog</h4> <p>BCM wins mandate for Avendus Wealth Management portal revamp</p><div class="post-blog-date">20th Oct 2016</div></div><div class=" col-lg-8 col-lg-offset-2"> <div class="col-sm-4"> <div class="footer-col-item"> <h4>Go Travel Cloud</h4> <address> 501,507 your company address<br>400015 Maharashtra, UK </address> </div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Reach Us</h4> <div class="item-contact"> <a href="tel:630-885-9200"><span class="link-id">P</span>:<span>630-885-9200</span></a> <a href="tel:630-839.2006"><span class="link-id">F</span>:<span>630-839.2006</span></a> <a href="mailto:info@brandcatmedia.com"><span class="link-id">E</span>:<span>info@brandcatmedia.com</span></a> </div></div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Sign up for Newsletter</h4> <form class="signUpNewsletter" action="" method="get"> <input name="" class="gt-email form-control" placeholder="You@youremail.com" type="text"> <input name="" class="btn-go" value="Go" type="button"> </form> </div></div></div></div></div></div><div class="footer-bottom-layout"> <div class="socialMedia-footer"> <i class="fa fa-facebook fa-fw fa-2x"></i> <i class="fa fa-google-plus fa-fw fa-2x"></i> <i class="fa fa-twitter fa-fw fa-2x"></i> <i class="fa fa-youtube fa-fw fa-2x"></i> </div><div class="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div></div></footer></commonLayout>',
		attributes: {
			class: 'fa fa-file-code-o',
			title: 'Ecommerce Navbar'
		},
		category: 'Ecommerce Components'
	});

	// Predefined footer matching with Flipkart like Header
	bm.add('footer',{
		label: 'Footer & Copyright',
		content: '<style type="text/css">.footer-top-layout{background: #008080 none repeat scroll 0 0; color: #ffffff; padding: 40px 0;}.OurBlog{margin-bottom: 32px; text-align: center;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.OurBlog > p{color: #ffffff;}.post-blog-date::after{background: #ffffff none repeat scroll 0 0; bottom: 0; content: ""; height: 4px; left: 0; margin: auto; position: absolute; right: 0; width: 50px;}.post-blog-date{padding-bottom: 25px; position: relative;}body{color: #fff; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-top-layout [class*="col-sm-"]:first-child{padding: 0;}.footer-top-layout [class*="col-sm-"]{border-right: 2px solid #333333; padding: 0 0 0 28px;}.footer-top-layout{color: #ffffff;}.footer-col-item{min-height: 140px;}address{color: #eee;}.footer-top-layout [class*="col-sm-"]:last-child{border-right: medium none;}.footer-top-layout{color: #ffffff;}body{color: #666666; font-family: "Open Sans",sans-serif;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{color: #eee; font-family: "Roboto",sans-serif; font-weight: 500; line-height: 1.1; margin-top: 0;}body{color: #eee; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-col-item .item-contact a{color: #eee; display: inline-block; margin-bottom: 7px; width: 100%;}.footer-col-item .item-contact a .link-id{color: #ffffff; margin-left: 0; margin-right: 6px;}.footer-col-item span{margin-left: 7px;}.footer-col-item .item-contact a{color: #eee;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.signUpNewsletter{position: relative;}.signUpNewsletter .gt-email{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border: 1px solid #eee; border-radius: 0; color: #ffffff; height: 52px;}.signUpNewsletter .btn-go{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border-color: #eee; border-style: solid; border-width: 0 0 0 1px; bottom: 0; color: #ffffff; font-size: 16px; position: absolute; right: 0; text-transform: uppercase; top: 0; width: 52px;}.footer-bottom-layout{background: #008888 none repeat scroll 0 0; padding: 20px 0; text-align: center; color: #eee;}.socialMedia-footer{margin-bottom: 20px;}.socialMedia-footer > a{display: inline-block; margin: 0 8px;}.footer-bottom-layout{text-align: center;}</style><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">'+
				'<footer id="footer-Section"> <div class="footer-top-layout"> <div class="container"> <div class="row"> <div class="OurBlog"> <h4>Our Blog</h4> <p>BCM wins mandate for Avendus Wealth Management portal revamp</p><div class="post-blog-date">20th Oct 2016</div></div><div class=" col-lg-8 col-lg-offset-2"> <div class="col-sm-4"> <div class="footer-col-item"> <h4>Go Travel Cloud</h4> <address> 501,507 your company address<br>400015 Maharashtra, UK </address> </div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Reach Us</h4> <div class="item-contact"> <a href="tel:630-885-9200"><span class="link-id">P</span>:<span>630-885-9200</span></a> <a href="tel:630-839.2006"><span class="link-id">F</span>:<span>630-839.2006</span></a> <a href="mailto:info@brandcatmedia.com"><span class="link-id">E</span>:<span>info@brandcatmedia.com</span></a> </div></div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Sign up for Newsletter</h4> <form class="signUpNewsletter" action="" method="get"> <input name="" class="gt-email form-control" placeholder="You@youremail.com" type="text"> <input name="" class="btn-go" value="Go" type="button"> </form> </div></div></div></div></div></div><div class="footer-bottom-layout"> <div class="socialMedia-footer"> <i class="fa fa-facebook fa-fw fa-2x"></i> <i class="fa fa-google-plus fa-fw fa-2x"></i> <i class="fa fa-twitter fa-fw fa-2x"></i> <i class="fa fa-youtube fa-fw fa-2x"></i> </div><div class="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div></div></footer>',
		attributes: {
			class: 'fa fa-html5',
			title: 'Footer & Copyright'
		},
		category: 'Ecommerce Components'
	});

	// Dynamic navigation menu from JSON created from menu builder
	bm.add('navMenu',{
		label: 'Navbar Menu',
		content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">'+
				'<navMenu><div class="navbar navbar-default" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div><div class="collapse navbar-collapse" id="navigationDiv"><ul class="nav navbar-nav"><li class="active"><a href="#" target="_blank">Home</a></li></ul></li></ul></div></div></div></navMenu>',
		attributes: {
			class: 'fa fa-bars',
			title: 'Navigation Menu'
		},
		category: 'Ecommerce Components'
	});

	// Lisiting Page sidebar filters
	bm.add('filters', {
		label: 'Product Filters',
		content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><style type="text/css">.filters{background-color: #fafafa;padding: 20px;}.panel-group{border: 1px solid #eee;}.filter-heading{border-radius: 0;box-shadow: none;background-color: #fff !important;}.filter-heading:hover{background-color: #f5f5f5 !important;}.filter-heading a:hover, .filter-heading a:focus, .filter-heading a:active{text-decoration: none;}.panel-default{border-color: transparent;}.list-group-item{border: none;}.panel-body{padding: 0;}.colors-list{list-style: none;padding: 20px;margin-left: 0;}.color-link:hover{text-decoration: none !important;}.colors-list li{display: inline;}span.color{min-width: 25px;min-height: 25px;padding: 10px 15px;border: 1px solid #aaa;margin: 5px;}.color.green{background-color: #00FF00;}.color.redd{background-color: #ff0000;}.color.blue{background-color: #0000ff;}.color.teal{background-color: #008080;}.color.orange{background-color: orange;}.color.purple{background-color: purple;}.list-group-item{padding-top: 1px;}</style>'+
				'<div class="filters"><div class="categories-filter"><div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading filter-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> Categories<span class="pull-right">+</span></a> </h4> </div><div id="collapse1" class="panel-collapse collapse"> <div class="panel-body"> <div class="list-group"> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">All Categories</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">Bags</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">Pens</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">Pens</label></div></a></div></div></div></div></div></div><div class="categories-filter"><div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading filter-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> Price Range<span class="pull-right">+</span></a> </h4> </div><div id="collapse2" class="panel-collapse collapse"> <div class="panel-body"> <div class="list-group"> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">$0 - $100</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">$100 - $500</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">$500 +</label></div></a></div></div></div></div></div></div><div class="categories-filter"><div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading filter-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> Color<span class="pull-right">+</span></a> </h4> </div><div id="collapse3" class="panel-collapse collapse"> <div class="panel-body"> <ul class="colors-list"> <li><a href="#" class="color-link"><span class="color green"></span></a></li><li><a href="#" class="color-link"><span class="color redd"></span></a></li><li><a href="#" class="color-link"><span class="color blue"></span></a></li><li><a href="#" class="color-link"><span class="color teal"></span></a></li><li><a href="#" class="color-link"><span class="color orange"></span></a></li><li><a href="#" class="color-link"><span class="color purple"></span></a></li></ul> </div></div></div></div></div></div>',
		attributes: {
			class: 'fa fa-filter',
			title: 'Product Filters'
		},
		category: 'Ecommerce Components'
	});

  // Custom droppable block of product listing
	bm.add('productListing', {
  	label: 'Product Listing',
  	content:  '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>'+
            '<style type="text/css">.product-card{max-width:23%;font-size:12px;margin:5px;display:inline-block;box-shadow:2px 2px 15px #999}.product-card>a{background:#f2f2f2;color:#333;transition:all .1s;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration:none}.product-card>a:hover{text-decoration:none;box-shadow:0 1px 3px rgba(0,0,0,.3)}.product-card-title{min-height:70px;font-size:21px}.product-description{min-height:70px;max-height:70px;overflow-y:auto}.product-card-img{display:block;height:250px;width:100%}.product-card figcaption{display:block;padding:0 10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.product_price span,.product_title h5{font-size:1.1em;line-height:1}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif}img{max-width:100%;height:auto}ul.product_list{list-style-type:none;margin:0;padding:0;width:100%;display:inline}.product_grid{text-decoration:none;display:inline}.product_item{display:inline-block;background:#fff;border:1px solid #ccc;padding:10px;position:relative;overflow:hidden}.product_sale{position:absolute;z-index:2;right:-28px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform:rotate(45deg)}.product_image{position:relative;overflow:hidden}.product_image img{display:block;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.info,.product{position:relative}.product_image img:hover{-o-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}.product_title{float:left;width:100%;text-transform:uppercase}.product_title h5{margin:auto;font-weight:500;padding-bottom:5px}.product_price a{color:#000}.price_old{color:#ea2e49;text-decoration:line-through}.product_desc p{margin:0;line-height:1.3;padding:10px 0}.product_rating{float:right;width:100px;height:20px;overflow:hidden;background:url(https://bit.ly/1B4PjyM) 0 76% no-repeat}.product_buttons{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased}.product_buttons .product_heart:hover{color:#DF0404;background:rgba(255,255,255,.5)}.product_buttons .product_compare:hover{color:#129612;background:rgba(255,255,255,.5)}.product_buttons .add_to_cart:hover{color:#4DC8D3;background:rgba(255,255,255,.5)}@media only screen and (min-width:320px){.product_sale p{margin:0;color:#fff;background:red;padding:3px 25px;box-shadow:0 2px 8px 0 rgba(0,0,0,.4)}.product_values{float:left;width:calc(100% - 100px);padding:0 10px}.product_rating{margin-right:10px}.product_image{height:150px;float:left;width:100px}.product_image .product_buttons{display:none}.product_desc{overflow:hidden;auto:left;line-height:1}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px}.product_values .product_buttons button{color:#252525;background:rgba(255,255,255,1);font-size:1em;border-radius:50%;width:40px;height:40px;border:1px solid #000}}@media only screen and (min-width:480px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}}@media only screen and (min-width:678px){.product_item{width:49.5%}.product_image{height:150px;width:100px}.product_values{width:calc(100% - 100px)}}@media only screen and (min-width:992px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}.product_desc{max-height:200px}}@media only screen and (min-width:1200px){.product_item{width:33%}.product_desc{max-height:131px}}@media only screen and (max-width:992px){.product_desc{max-height:67px}}@media only screen and (max-width:480px){.product_title h5{font-weight:700}}@media only screen and (max-width:320px){.product_buttons,.product_desc,.product_sale{display:none}.product_image img{position:relative}.product_price span{float:left;width:100%}}.listing{list-style:none;margin:20px;padding:0;display:inline-block}.product{width:240px}.img-wrapper,.info{width:100%;text-align:center}.product a{text-decoration:none}.img-wrapper{display:block;height:240px;border:1px solid #afafaf;border-bottom:0;overflow:hidden}.info{background:#000;color:#fff;padding:40px 10px 20px;vertical-align:middle;transform:translateZ(0);box-shadow:0 0 1px transparent;backface-visibility:hidden;transition-property:color,height;transition-duration:.3s,.4s;transition-timing-function:ease-out;height:83px}.info:after,.info:before,.note,.price{position:absolute}.info:before{content:"";z-index:-1;top:0;bottom:0;left:0;right:0;background:#fff;transform:scaleY(0);transform-origin:50%;transition:transform .3s ease-out}.info:after{visibility:hidden;pointer-events:none;z-index:-1;content:"";border-style:solid;transition-duration:.3s;transition-property:transform;left:calc(50% - 11px);bottom:0;border-width:10px 10px 0;border-color:#000 transparent transparent}.product:hover .info{height:40px}.product:hover .info:before{transform:scaleY(.7)}.product:hover .info:after{visibility:visible;transform:translateY(10px)}.slide-title{transition:transform .3s ease-out}.slide-title a{color:inherit}.product:hover .slide-title{transform:translateY(-18px);font-weight:700;color:#000}.price{background:#e32d2c;font-size:1.3em;padding:4px 13px;top:-15px;right:10px}.note.on-sale,.price.sale{background:#00ba2f}.price.old{font-size:.95em;padding:4px 6px;text-decoration:line-through;top:-43px}.actions-wrapper{margin-top:14px;display:flex;justify-content:space-around}.actions-wrapper *{width:50%;padding:2px 0;text-align:center;color:#191919;font-size:.95em;font-weight:700}.actions-wrapper :before{font-family:FontAwesome;margin-right:8px}.wishlist{border-right:1px solid #afafaf}.wishlist:hover{color:#e32d2c}.cart:hover{color:#0a75b9}.product:hover .actions-wrapper *{visibility:visible}.note{top:0;left:0;padding:4px 8px;font-size:.9em}.note.on-sale{color:#fff}.note.no-stock{background:#191919;color:#fff}</style>'+
            '<productListing style="display: block; width: 100%;margin-top: 180px;"><figure class="product-card portrait"> <img class="product-card-img" src="http://placehold.it/400x300"/> <figcaption> <h3 class="product-card-title">Product Title</h3> <div class="product-description">Product Sescription</div><p class="product-card-address"> <i class="fa fa-map-marker"></i> US</p><div class="product-card-price"> <span class="price-savings">Save 25%</span> <s class="original-price">$ 10.99</s> <p class="amount-price"> <span class="from">starting at</span> $ 10.99<!-- <span class="from">/night</span>--> </p></div></figcaption></figure>'+
            '<div class="product_grid landscape" style="visibility: hidden;"> <ul class="product_list list"> <li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="#"><img src="http://placehold.it/400x300" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>Product Title</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$79.99</span> <span class="price_new">$11.11</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">Product Descriptions</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> </div></div></li></ul> </div>'+
            '<div class="listing creative" style="visibility: hidden"> <div class="product"> <a class="img-wrapper" href="#"> <img src="https://hussein-alhammad.com/images/codepen/product-card/running-shoe_pink.jpg" alt="Pink running shoe"/> </a> <div class="note on-sale" style="position: absolute;top: 0;left: 0;padding: 4px 8px;font-size: 0.9em;background: #00ba2f;color: #fff;">On sale</div><div class="info"> <div class="slide-title"><a href="#">Some Product</a></div><div class="price sale">$20.50</div><div class="price old">$34.99</div></div><div class="actions-wrapper"> <a href="#" class="add-btn wishlist"><i class="fa fa-heart-o"> Wishlist</a> <a href="#" class="add-btn cart"><i class="fa fa-shopping-cart"> Cart</a> </div></div></div></productListing><script src="js/client-listing-plugin.js">',
  	attributes: { 
    		class: 'fa fa-tags',
    		title: 'Product Block'
  	},
  	category: 'Ecommerce Components'
	});

  // Product Detail
	bm.add('productDetail', {
  	label: 'Detail Page',
  	content: '<style type="text/css">.blk-row{margin-top: 0;}.details,.preview{-webkit-box-orient:vertical;-webkit-box-direction:normal}.add-to-cart,.colors,.like,.price,.product-title,.sizes{text-transform:UPPERCASE;font-weight:700}body{font-family:\'open sans\';overflow-x:hidden}img{max-width:100%}.preview{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width:996px){.preview{margin-bottom:20px}}.preview-pic{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.preview-thumbnail.nav-tabs{border:none;margin-top:15px}.preview-thumbnail.nav-tabs li{width:18%;margin-right:2.5%}.preview-thumbnail.nav-tabs li img{max-width:100%;display:block}.preview-thumbnail.nav-tabs li a{padding:0;margin:0}.preview-thumbnail.nav-tabs li:last-of-type{margin-right:0}.color,.size{margin-right:10px}.tab-content{overflow:hidden}.tab-content>active{height: auto !important}.tab-content img{width:100%;-webkit-animation-name:opacity;animation-name:opacity;-webkit-animation-duration:.3s;animation-duration:.3s}.detail-card{margin-top:50px;background:#eee;padding:3em;line-height:1.5em}@media screen and (min-width:997px){.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}.details{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.colors{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.checked,.price span{color:#ff9f1a}.price,.product-description,.product-title,.rating,.sizes,.vote{margin-bottom:15px}.product-title{margin-top:0}.size:first-of-type{margin-left:40px}.color{display:inline-block;vertical-align:middle;height:2em;width:2em;border-radius:2px}.color:first-of-type{margin-left:20px}.add-to-cart,.like{background:#ff9f1a;padding:1.2em 1.5em;border:none;color:#fff;-webkit-transition:background .3s ease;transition:background .3s ease}.add-to-cart:hover,.like:hover{background:#b36800;color:#fff}.not-available{text-align:center;line-height:2em}.not-available:before{font-family:fontawesome;content:"\f00d";color:#fff}.orange{background:#ff9f1a}.green{background:#85ad00}.blue{background:#0076ad}.tooltip-inner{padding:1.3em}@-webkit-keyframes opacity{0%{opacity:0;-webkit-transform:scale(3);transform:scale(3)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes opacity{0%{opacity:0;-webkit-transform:scale(3);transform:scale(3)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}</style>'+
            '<productDetail style="padding: 20px; display: block; width: 100%; min-height: 50px;"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><div class=detail-card style="margin-top:180px;"><div class=container-fliud><div class="row wrapper"><div class="col-md-6 preview"><div class="preview-pic tab-content"><div class="tab-pane active"id=pic-1><img src=http://placehold.it/500x500></div><div class=tab-pane id=pic-2><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-3><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-4><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-5><img src=http://placehold.it/500x300></div></div><ul class="nav nav-tabs preview-thumbnail"><li class=active><a data-target=#pic-1 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-2 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-3 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-4 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-5 data-toggle=tab><img src=http://placehold.it/200x125></a></ul></div><div class="col-md-6 details"><h3 class=product-title>men\'s shoes fashion</h3><div class=rating><div class=stars><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span></div><span class=review-no>41 reviews</span></div><p class=product-description>Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.<h4 class=price>current price: <span>$180</span></h4><p class=vote><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong><h5 class=sizes>sizes: <span class=size data-toggle=tooltip title=small>s</span> <span class=size data-toggle=tooltip title=medium>m</span> <span class=size data-toggle=tooltip title=large>l</span> <span class=size data-toggle=tooltip title="xtra large">xl</span></h5><div class=action><button class="btn btn-default add-to-cart"type=button>add to cart</button> <button class="btn btn-default like"type=button><span class="fa fa-heart"></span></button></div></div></div></div></div></productDetail><script src="js/client-product-detail-plugin.js">',
  	attributes: {
    		class: 'fa fa-shopping-bag',
    		title: 'Product Detail Page',
  	},
  	category: 'Ecommerce Components'
	});

    
    
      
    bm.add('InvoiceDetail', {
  	    label: 'Invoice',
    // '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <body> <div class="container-fluid"><InvoiceDetail> <div class="row" style=""> <div clss="col-sm-3 col-md-2"> </div><div class="col-sm-8 col-md-8" style="margin-top:51px;margin-left:auto !important;margin-right:auto !important;"> <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <thead> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th> </thead> <tbody> <tr> <td> InvoiceID </td><td> ContactName </td><td> Date </td><td> AmountPaid </td><td> AmountDue </td> <td> Total Amount</td> </tr></tbody> </table> </div><div clss="col-sm-3 col-md-2"> </div></div></InvoiceDetail></div>',  
  //  content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <body> <div class="container-fluid"><InvoiceDetail>  <div class="col-sm-8 col-md-8" style="margin-top:51px;margin-left:auto !important;margin-right:auto !important;"> <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <thead> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th> </thead> <tbody> <tr> <td> InvoiceID </td><td> ContactName </td><td> Date </td><td> AmountPaid </td><td> AmountDue </td> <td> Total Amount</td> </tr></tbody> </table> </div><div clss="col-sm-3 col-md-2"> </div></InvoiceDetail></div>', 
        content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><InvoiceDetail style="display: block; width: 100%;padding:15px"> <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th><div class="invoiceTableBody"></div></table> </InvoiceDetail>',
 // content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><InvoiceDetail><div class="container-fluid"></InvoiceDetail><InvoiceDetail>   <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <thead> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th> </thead> <tbody> <tr> <td> 1  </td> <td> krishna </td> <td> 04/01/2017 </td> <td> 1000</td> <td>500 </td> <td> 1500 </td> </tr> <tr> <td> 2  </td> <td> dweep </td> <td> 04/05/2017 </td> <td> 2500</td> <td>500 </td> <td> 3000 </td> </tr> <td> 3  </td> <td> ekta </td> <td> 12/05/2017 </td> <td> 3500</td> <td>500 </td> <td> 4000 </td> </tr> <td> 4  </td> <td> ashwini </td> <td> 10/05/2017 </td> <td> 4500</td> <td>500 </td> <td> 5000 </td> </tr></tbody>  </table> </InvoiceDetail></div>',
 
        attributes: {
    		class: 'fa fa-file-text-o',
    		title: 'Invoice Page',
  	    },
  	category: 'Accounting Components'
	});



  	bm.add('InvoiceCustomer', {
  	    label: 'Customers',
    	// content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><InvoiceCustomer style="display: block; width: 100%;padding:15px"><h3> Customer </h3> <table class="table table-bordered table-striped table-collapsed"> <th>Customer Name</th> <div class="invoiceTableBody"> </div> </table></InvoiceCustomer></div>',
        content: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"></head> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control" id="Select1" style="width: 100px !important; min-width: 100px; max-width: 100px;"><option>Select</option><option>Paid</option><option>Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Amount</label> <select class="form-control" id="Select2" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Paid</option><option>Unpaid</option><option>Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control" id="Select3" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Greater Than</option><option>less Than</option> </select></div></div></div></div> </InvoiceFilter></html>',
        attributes: {
    		class: 'fa fa-users',
    		title: 'Invoice Page',
  	    },
  	category: 'Accounting Components'
	});

  	bm.add('InvoiceFilter', {
  	    label: 'Invoice Filter',
       // content:'<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control" id="Select1" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Paid</option><option>Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Amount</label> <select class="form-control" id="Select2" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Paid</option><option>Unpaid</option><option>Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control" id="Select3" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Greater Than</option><option>less Than</option> </select></div><div class="col-xs-2"> <label> Amount </label> <input class="form-control" style="width: 150px !important; min-width: 150px; max-width: 150px;" type="text"></div></div></div> <div class="form-group"><h3> Invoices</h3><table class="table table-bordered table-striped table-collapsed"><th>Id</th><th>Name</th><th>Date</th><th>Amount Paid</th><th>Amount Due</th><th> Total Amount</th></table></div> </div> </InvoiceFilter></div>',
        content:'<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="container"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control ye no y n s" id="menu" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Paid">Paid</option><option value="Unpaid">Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Amount</label> <select class="form-control yes no y n s" id="Select2" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Paid">Paid</option><option value="Unpaid">Unpaid</option><option value="Total">Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control yes no y n s" id="Select3" style="width: 150px !important; min-width: 160px; max-width: 160px;"><option>Select</option><option>Greater Than Or Equal To</option><option>less ThanOr Equal To</option> </select></div><div class="col-xs-2"> <label> Amount </label> <input id="input" class="form-control yes no y n s" id="text1" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Date</label> <select class="form-control yes ye y n s" id="Select4" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Due_Date">Due Date</option><option value="Gen_Date">Generation Date</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control yes ye y n s" id="Select5" style="width: 150px !important; min-width: 160px; max-width: 160px;"><option>Select</option><option>Greater Than Or Equal To</option><option>less ThanOr Equal To</option> </select></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye y n s" id="date1" style="width: 100px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no n s" id="date2" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"></div><div class="col-xs-2"> <label style="margin-top: 25px;margin-left: 50px;"> To </label></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no n s" id="date3" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label> Name </label> <input class="form-control yes ye no y s" id="text2" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text" onkeyup="check(this)"></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no y s" id="date4" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div><div class="col-xs-2"> <label> Paid Amount </label> <input class="form-control yes ye no y s" id="text3" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div><div class="col-xs-2"> <label> Total Amount </label> <input class="form-control yes ye no y s" id="text4" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div></div></div><div class="form-group"><h3> Invoices</h3><table class="table table-bordered table-striped table-collapsed" id="tbdata"> <th>  </th> <th>Id</th><th>Name</th><th>Date</th><th>Amount Paid</th><th>Amount Due</th><th> Total Amount</th></table></div></div> </InvoiceFilter></div>',
        attributes: {
    		class: 'fa fa-filter',
    		title: 'Invoice Filter',
  	    },
  	category: 'Accounting Components'
	});
    
    bm.add('InvoicePayment', {
  	    label: 'Payment',
        content:'<InvoicePayment style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <input type="submit" class="btn btn-success pull-right" value="Pay Now" style="width: 150px !important; min-width: 160px; max-width: 160px; margin-right: 2px;"></div></div></InvoicePayment>',
        attributes: {
    		class:'fa fa-cc-paypal',
    		title: 'Invoice Payment',
  	    },
  	category: 'Accounting Components'
	});

    bm.add('b1', {
  	    label: '1 Block',
        content:'<b1 style="display: block; width: 100%;padding:15px"><div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row"><div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div></div></b1>',
        attributes: {
    		class:'gjs-fonts gjs-f-b1',
    		title: '1 Block',
  	    },
  	category: 'Basic'
	});

	bm.add('b2', {
  	    label: '2 Blocks',
        content:'<b2 style="display: block; width: 100%;padding:15px"><div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row"><div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div><div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div></div></b2>',
        attributes: {
    		class:'gjs-fonts gjs-f-b2',
    		title: '2 Blocks',
  	    },
  	category: 'Basic'
	});

	// {
 //                id: 'b2',
 //                label: '2 Blocks',
 //                category: 'Basic',
 //                attributes: {
 //                    class: 'gjs-fonts gjs-f-b2'
 //                },
 //                content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
	//           <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	//           <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	//         </div>`
 //            }, 

	bm.add('socialmedia', {
	    label: 'socialmedia',
	    content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"><style>/*=========================Icons=================*//* footer social icons */ul.social-network{list-style: none;display: inline;margin-left:0 !important;padding: 0;}ul.social-network li{display: inline;margin: 0 5px;}/* footer social icons */.social-network a.icoRss:hover{background-color: #F56505;}.social-network a.icoFacebook:hover{background-color:#3B5998;}.social-network a.icoTwitter:hover{background-color:#33ccff;}.social-network a.icoGoogle:hover{background-color:#BD3518;}.social-network a.icoVimeo:hover{background-color:#0590B8;}.social-network a.icoLinkedin:hover{background-color:#007bb7;}.social-network a.icoRss:hover i, .social-network a.icoFacebook:hover i, .social-network a.icoTwitter:hover i,.social-network a.icoGoogle:hover i, .social-network a.icoVimeo:hover i, .social-network a.icoLinkedin:hover i{color:#fff;}a.socialIcon:hover, .socialHoverClass{color:#44BCDD;}.social-circle li a{display:inline-block;position:relative;margin:0 auto 0 auto;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;text-align:center;width: 50px;height: 50px;font-size:20px;}.social-circle li i{margin:0;line-height:50px;text-align: center;}.social-circle li a:hover i, .triggeredHover{-moz-transform: rotate(360deg);-webkit-transform: rotate(360deg);-ms--transform: rotate(360deg);transform: rotate(360deg);-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-o-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;}.social-circle i{color: #fff;-webkit-transition: all 0.8s;-moz-transition: all 0.8s;-o-transition: all 0.8s;-ms-transition: all 0.8s;transition: all 0.8s;}a{background-color: #D3D3D3;}</style><div class="col-md-12"><ul class="social-network social-circle"> <li><a href="#" class="icoRss" title="Rss"><i class="fa fa-rss"></i></a></li><li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li><li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li><li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li><li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li></ul></div>',
	    attributes: {
	        class: 'fa fa-facebook',
	        title: 'socialmedia'
	    },
	    category: 'Static Components'
	});

//Custom Form Components
bm.add('mainForm', {
  label: 'Main Form',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><style>.btn-danger{margin-left:10%;}.input-group .form-control {position: relative;z-index: 2;float: left;width: 100%;margin-bottom: 0;}.input-group {position: relative;display: table;border-collapse: separate;width: 30%;margin-left: 10%;margin-top:1%}</style><body><form name="form" action="" id="form"><fieldset id="exercises"><div class="exercise"><div class="input-group"><span class="input-group-addon">Text</span><input type="text" id="custom_input_default" class="form-control" name="text" placeholder="Please enter text"></div><div class="input-group"><span class="input-group-addon">Text</span><input type="text" name="input" class="form-control" placeholder="Please enter text" id="custom_input_default"></div><br><button class="remove btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button></div></fieldset></form><div id="hello"></div><button id="add_exercise" class="btn btn-primary btn-md">ADD</button></body>',
  attributes: {
      class: 'fa fa-list-alt',
      title: 'Main Form',
  },
  category: 'Custom Form'
});

//Custom Form Input Component
bm.add('Input', {
  label: 'Input',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><style>.form-group{width:30%;margin-left:10%;}</style></head><body><div class="form-group"> <input type="text" id="custom_input"  name="" class="form-control" placeholder=""></div></body>',
  attributes: {
      class: 'fa fa-text-width',
      title: 'Input',
  },
  category: 'Custom Form'
});

//Custom Form Textarea Component
bm.add('Textarea', {
  label: 'Textarea',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><style>.form-group{width:30%;margin-left:10%;margin-top:1%}</style></head><body><div class="form-group"><textarea class="form-control" rows="5" id="custom_textarea" name="" placeholder=""></textarea></div></body>',
  attributes: {
      class: 'fa fa-square',
      title: 'Textarea',
  },
  category: 'Custom Form'
});

//Custom Form Select Component
bm.add('Select', {
  label: 'Select',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><style>.form-group{width:30%;margin-left:10%;margin-top:1%}</style></head><body><div class="form-group"> <select class="form-control" id="select1" name=""><option selected disabled>Please Select</option></select></div>',
  attributes: {
      class: 'fa fa-caret-square-o-down',
      title: 'Select',
  },
  category: 'Custom Form'
});

//Custom Form Radio Button Component
bm.add('RadioButton', {
  label: 'RadioButton',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><RadioButton id="custom_radio" style="display: block; width: 30%;margin-left:10%"><style>.form-group{width:30%;margin-left:10%;margin-top:1%}</style></head><body><div class="form-group"><p class="radiobutton"> <input type="radio" id="radio1" value="radio1" checked> <label for="radio1">Radio1</label></p></div></body></RadioButton>',
  attributes: {
      class: 'fa fa-dot-circle-o',
      title: 'RadioButton',
  },
  category: 'Custom Form'
});

//Custom Form Checkbox Component
bm.add('CheckBox', {
  label: 'CheckBox',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><CheckBox style="display: block; width: 30%;margin-left:10%"><style>.form-group{width:30%;margin-left:10%}</style><div class="form-group"><div class="checkbox"> <label><input type="checkbox" id="checkbox1" value="option1">Option 1</label></div></div></CheckBox>',
  attributes: {
      class: 'fa fa-check-circle-o',
      title: 'CheckBox',
  },
  category: 'Custom Form'
});

//Custom Form Label Component
bm.add('Label', {
  label: 'Label',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><Label  id="label1" name="" style="display: block; width: 30%;margin-left:10%"><style>.form-group{width:30%;margin-left:10%}</style><body><div class="form-group"><h4><span class="label label-default">Label</span></h4></div></body></Label>',
  attributes: {
      class: 'fa fa-square-o',
      title: 'Label',
  },
  category: 'Custom Form'
});

//Custom Form Button Component
bm.add('Button', {
  label: 'Button',
  content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><style>.form-group{width:30%;margin-left:10%}</style><button type="button" class="btn btn-primary btn-md">Submit</button>',
  attributes: {
      class: 'fa fa-minus-square-o',
      title: 'Button',
  },
  category: 'Custom Form'
});
	

  // Get DomComponents module
  var comps = editor.DomComponents;

  // Get the model and the view from the default Component type
  var defaultType = comps.getType('default');
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  var traits;

  comps.addType('Input', {
    // Define the Model
    model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
                {
                    label: 'Name',
                    name: 'name',
                    type: 'text'
                },
                {
                    label: 'Placeholder',
                    name: 'placeholder',
                    type: 'text'
                },
                {
                    label: 'Type',
                    name: 'type',
                    type: 'select',
                    options: [{value: 'text', name: 'Text'},{value: 'email', name: 'Email'},{value: 'password', name: 'Password'},{value: 'number', name: 'Number'}]
                },
                {
                  label: 'Required',
                  name: 'required',
                  type: 'checkbox'
                },
            ],
        }),

    }, {
        isComponent: function(el) {
            if (el.tagName == 'INPUT') {
                return {
                    type: 'Input'
                };
            }
        },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
    },
});

comps.addType('Select', {
  // Define the Model
  model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
              {
                  label: 'Name',
                  name: 'name',
                  type: 'text'
              },
              {
                  label: 'NumberOfOptions',
                  name: 'NumberOfOptions',
                  type: 'text'
              }
          ],
      }),
  }, {
      isComponent: function(el) {
          if (el.tagName == 'SELECT') {
              return {
                  type: 'Select'
              };
          }
      },
  }),

  view: defaultType.view,

  // The render() should return 'this'
  render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
  },
});

comps.addType('CheckBox', {
  // Define the Model
  model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
              {
                  label: 'Name',
                  name: 'name',
                  type: 'text'
              },
              {
                label: 'Id',
                name: 'id',
                type: 'text'
              },
              {
                label: 'Label & Value',
                name: 'value',
                type: 'text'
              }
          ],
      }),

  }, {
      isComponent: function(el) {
          if (el.tagName == 'CHECKBOX') {
              return {
                  type: 'CheckBox'
              };
          }
      },
  }),

  view: defaultType.view,

  // The render() should return 'this'
  render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
  },
});


comps.addType('RadioButton', {
  // Define the Model
  model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
              {
                  label: 'Name',
                  name: 'name',
                  type: 'text'
              },
              {
                  label: 'Id',
                  name: 'id',
                  type: 'text'
              },
              {
                label: 'Label & Value',
                name: 'value',
                type: 'text'
            },
          ],
      }),

  }, {
      isComponent: function(el) {
          if (el.tagName == 'RADIOBUTTON') {
              return {
                  type: 'RadioButton'
              };
          }
      },
  }),

  view: defaultType.view,

  // The render() should return 'this'
  render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
  },
});

  // The `input` will be the Component type ID
  comps.addType('productListing', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          'id',
          {
            label: 'API URL',
            name: 'apiurl'
          },
          {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          },
          {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          },
          {
            label: 'Items',
            name: 'numberofitems',
            type: 'text'
          },
          {
            label: 'Template',
            name: 'selecttemplate',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Template'},{value: 'portrait', name:'Portrait'},{value: 'landscape', name:'Landscape'},{value: 'creative', name:'Creative'}]
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'PRODUCTLISTING'){
          return {type: 'productListing'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('navMenu', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Menu Type',
            name: 'menuType',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'NAVMENU'){
          return {type: 'navMenu'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('InvoiceDetail', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'API URL Invoice',
            name: 'apiurl'
          }
          // {
          //   label: 'Domain',
          //   name: 'selectdomain',
          //   type: 'select',
          //   // changeProp: 1,
          //   options: [{value: 'Select', name:'Select Domain'},{value: 'QB', name:'QB'},{value: 'Xero', name:'Xero'}]
          // }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'INVOICEDETAIL'){
          return {type: 'InvoiceDetail'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });


 comps.addType('InvoiceCustomer', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'API URL Customer',
            name: 'apiurl'
          //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'INVOICECUSTOMER'){
          return {type: 'InvoiceCustomer'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

 comps.addType('InvoiceFilter', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'API URL Filter',
            name: 'apiurl'
          //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'INVOICEFILTER'){
          return {type: 'InvoiceFilter'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

 comps.addType('InvoicePayment', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'API URL Payment',
            name: 'apiurl'
          //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'INVOICEPAYMENT'){
          return {type: 'InvoicePayment'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });
 comps.addType('b1', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Name',
            name: 'apiurl'
          }
          // {
          //   label: 'Domain',
          //   name: 'selectdomain',
          //   type: 'select',
          //   // changeProp: 1,
          //   options: [{value: 'Select', name:'Select Domain'},{value: 'QB', name:'QB'},{value: 'Xero', name:'Xero'}]
          // }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'B1'){
          return {type: 'b1'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });
 comps.addType('b2', {

    // Define the Model
    model: defaultModel.extend({

      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {

        editable: true,
        droppable: true,
        traits: [  
          // 'name',
          // 'placeholder',      	
          {
            label: 'Name',
            name: 'apiurl',
            type: 'text'
          },          
       	  {
            label: 'Add',
            type: 'content1'
            // name: 'apiurl'
       	  },
       	  {
            type: 'content'
            // name: 'apiurl'
       	  },
       	  {
            label:'Extra', 
            type: 'text',
            name: 'eg'
            // name: 'apiurl'
       	  }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'B2'){
          return {type: 'b2'};
        }
      },
    }),
    

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },

  });

})