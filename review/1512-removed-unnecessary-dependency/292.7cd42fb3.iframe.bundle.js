"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[292],{"./packages/db-ui-elements-stencil/dist/esm/db-card.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_card:()=>DbCard});var _index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-545aea95.js");function cov_26wsstzd7c(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-card.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"56d180f7f1c70cad34f56d7d2851fa1124c2f1a0"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-card.entry.js",statementMap:{0:{start:{line:3,column:18},end:{line:3,column:4101}},1:{start:{line:5,column:15},end:{line:146,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:8,column:4},end:{line:134,column:6}},4:{start:{line:135,column:4},end:{line:135,column:25}},5:{start:{line:136,column:4},end:{line:136,column:28}},6:{start:{line:137,column:4},end:{line:137,column:29}},7:{start:{line:138,column:4},end:{line:138,column:27}},8:{start:{line:139,column:4},end:{line:139,column:34}},9:{start:{line:140,column:4},end:{line:140,column:57}},10:{start:{line:141,column:4},end:{line:141,column:28}},11:{start:{line:144,column:4},end:{line:144,column:602}},12:{start:{line:147,column:0},end:{line:147,column:25}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:142,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:143,column:2},end:{line:143,column:3}},loc:{start:{line:143,column:11},end:{line:145,column:3}},line:143}},branchMap:{0:{loc:{start:{line:144,column:92},end:{line:144,column:318}},type:"binary-expr",locations:[{start:{line:144,column:92},end:{line:144,column:109}},{start:{line:144,column:114},end:{line:144,column:317}}],line:144},1:{loc:{start:{line:144,column:320},end:{line:144,column:429}},type:"binary-expr",locations:[{start:{line:144,column:320},end:{line:144,column:338}},{start:{line:144,column:342},end:{line:144,column:352}},{start:{line:144,column:357},end:{line:144,column:428}}],line:144},2:{loc:{start:{line:144,column:453},end:{line:144,column:503}},type:"binary-expr",locations:[{start:{line:144,column:453},end:{line:144,column:464}},{start:{line:144,column:468},end:{line:144,column:503}}],line:144},3:{loc:{start:{line:144,column:505},end:{line:144,column:547}},type:"binary-expr",locations:[{start:{line:144,column:505},end:{line:144,column:517}},{start:{line:144,column:521},end:{line:144,column:547}}],line:144},4:{loc:{start:{line:144,column:549},end:{line:144,column:597}},type:"binary-expr",locations:[{start:{line:144,column:549},end:{line:144,column:561}},{start:{line:144,column:565},end:{line:144,column:578}},{start:{line:144,column:582},end:{line:144,column:597}}],line:144}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0,0],2:[0,0],3:[0,0],4:[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"56d180f7f1c70cad34f56d7d2851fa1124c2f1a0"});var actualCoverage=coverage[path];return cov_26wsstzd7c=function(){return actualCoverage},actualCoverage}cov_26wsstzd7c();var dbCardCss=(cov_26wsstzd7c().s[0]++,'@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.cmp-card{background-color:#fff;border-radius:8px;box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05)}.cmp-card>a{text-decoration:none}.cmp-card figure{margin:1rem 1rem 1rem 0.5rem}.cmp-card[data-variant=banner] figure{display:flex}.cmp-card[data-variant=banner] figcaption{margin-left:1rem}.cmp-card[data-variant=banner] figcaption h1,.cmp-card[data-variant=banner] figcaption h2,.cmp-card[data-variant=banner] figcaption h3,.cmp-card[data-variant=banner] figcaption h4,.cmp-card[data-variant=banner] figcaption h5,.cmp-card[data-variant=banner] figcaption h6{font-size:1.125rem}.cmp-card[data-variant=banner] figcaption h1,.cmp-card[data-variant=banner] figcaption h1~p,.cmp-card[data-variant=banner] figcaption h2,.cmp-card[data-variant=banner] figcaption h2~p,.cmp-card[data-variant=banner] figcaption h3,.cmp-card[data-variant=banner] figcaption h3~p,.cmp-card[data-variant=banner] figcaption h4,.cmp-card[data-variant=banner] figcaption h4~p,.cmp-card[data-variant=banner] figcaption h5,.cmp-card[data-variant=banner] figcaption h5~p,.cmp-card[data-variant=banner] figcaption h6,.cmp-card[data-variant=banner] figcaption h6~p{margin:0.125rem 0}.cmp-card[data-variant=banner] figcaption p{font-size:0.875rem;max-width:18.125rem}.cmp-card[data-variant=tile]{text-align:center}.cmp-card figcaption{max-width:60ch}.cmp-card{padding:1rem 1rem 1rem 0.5rem}.cmp-card figure{margin:0}.cmp-card svg,.cmp-card img[src$=".svg"]{margin:auto 0}');cov_26wsstzd7c().s[1]++;var DbCard=function(){function DbCard(hostRef){cov_26wsstzd7c().f[0]++,cov_26wsstzd7c().s[2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_26wsstzd7c().s[3]++,this.illustrationPaths={account:"action/db_ic_il_account.svg",alarm_clock:"action/db_ic_il_alarm_clock.svg",ar_icon:"action/db_ic_il_ar_icon.svg",calendar:"action/db_ic_il_calendar.svg",christmas:"action/db_ic_il_christmas.svg",clock_moving:"action/db_ic_il_clock_moving.svg",compass:"action/db_ic_il_compass.svg",construction_sign:"action/db_ic_il_construction_sign.svg",construction_worker:"action/db_ic_il_construction_worker.svg",db_clock:"action/db_ic_il_db_clock.svg",diamond:"action/db_ic_il_diamond.svg",fokus:"action/db_ic_il_fokus.svg",gift:"action/db_ic_il_gift.svg",handshake:"action/db_ic_il_handshake.svg",heart:"action/db_ic_il_heart.svg",information:"action/db_ic_il_information.svg",onlineshop_brand:"action/db_ic_il_onlineshop_brand.svg",onlineshop_feature:"action/db_ic_il_onlineshop_feature.svg",pdf:"action/db_ic_il_pdf.svg",printer:"action/db_ic_il_printer.svg",savings:"action/db_ic_il_savings.svg",search:"action/db_ic_il_search.svg",tips:"action/db_ic_il_tips.svg",trash:"action/db_ic_il_trash.svg",broken:"communication/db_ic_il_broken.svg",chat:"communication/db_ic_il_chat.svg",customer_feedback:"communication/db_ic_il_customer_feedback.svg",envelope_closed:"communication/db_ic_il_envelope_closed.svg",envelope_open:"communication/db_ic_il_envelope_open.svg",error:"communication/db_ic_il_error.svg",hashtag:"communication/db_ic_il_hashtag.svg",wifi:"communication/db_ic_il_wifi.svg","2g_rule":"covid_19/db_ic_il_2g_rule.svg","3g_rule":"covid_19/db_ic_il_3g_rule.svg",distance:"covid_19/db_ic_il_distance.svg",ffp2_mask:"covid_19/db_ic_il_ffp2_mask.svg",ffp2_mask_with_sign:"covid_19/db_ic_il_ffp2_mask_with_sign.svg",handwashing:"covid_19/db_ic_il_handwashing.svg",no_handshaking:"covid_19/db_ic_il_no_handshaking.svg",recovered:"covid_19/db_ic_il_recovered.svg",single_entry:"covid_19/db_ic_il_single_entry.svg",test_antigen:"covid_19/db_ic_il_test_antigen.svg",test_pcr:"covid_19/db_ic_il_test_pcr.svg",vaccinated:"covid_19/db_ic_il_vaccinated.svg",laptop:"devices/db_ic_il_laptop.svg",smartphone:"devices/db_ic_il_smartphone.svg",tablet:"devices/db_ic_il_tablet.svg",der_kleine_ice:"entertainment/db_ic_il_der_kleine_ice.svg",gaming:"entertainment/db_ic_il_gaming.svg",gaming_no_wire:"entertainment/db_ic_il_gaming_no_wire.svg",movie:"entertainment/db_ic_il_movie.svg",podcast:"entertainment/db_ic_il_podcast.svg",sport:"entertainment/db_ic_il_sport.svg",green:"feature/db_ic_il_green.svg",green_energy:"feature/db_ic_il_green_energy.svg",mobile_payment:"feature/db_ic_il_mobile_payment.svg",nfc_scan:"feature/db_ic_il_nfc_scan.svg",whats_schmutzig:"feature/db_ic_il_whats_schmutzig.svg",coffee_cup:"food/db_ic_il_coffee_cup.svg",restaurant:"food/db_ic_il_restaurant.svg",home:"maps/db_ic_il_home.svg",location:"maps/db_ic_il_location.svg",disruptions:"news/db_ic_il_disruptions.svg",news:"news/db_ic_il_news.svg",newsletter:"news/db_ic_il_newsletter.svg",newspaper:"news/db_ic_il_newspaper.svg",s_bahn_magazin_muenchen:"news/db_ic_il_s_bahn_magazin_muenchen.svg",db_ticket_shop:"station/db_ic_il_db_ticket_shop.svg",db_ticket_vending_machine:"station/db_ic_il_db_ticket_vending_machine.svg",db_trainstation:"station/db_ic_il_db_trainstation.svg",db_trainstation_with_train:"station/db_ic_il_db_trainstation_with_train.svg",db_travel_center:"station/db_ic_il_db_travel_center.svg",db_video_travel_center:"station/db_ic_il_db_video_travel_center.svg",kiosk:"station/db_ic_il_kiosk.svg",mini_store:"station/db_ic_il_mini_store.svg",classic_printout:"ticket/db_ic_il_classic_printout.svg",mobileticket_brand:"ticket/db_ic_il_mobileticket_brand.svg",mobileticket_feature:"ticket/db_ic_il_mobileticket_feature.svg",onlineticket_brand:"ticket/db_ic_il_onlineticket_brand.svg",onlineticket_feature:"ticket/db_ic_il_onlineticket_feature.svg",scan_ticket_printout:"ticket/db_ic_il_scan_ticket_printout.svg",show_ticket:"ticket/db_ic_il_show_ticket.svg",tickets:"ticket/db_ic_il_tickets.svg",airplane:"transportation/db_ic_il_airplane.svg",airplane_2:"transportation/db_ic_il_airplane_2.svg",bicycle:"transportation/db_ic_il_bicycle.svg",bike_trailer:"transportation/db_ic_il_bike_trailer.svg",buggy:"transportation/db_ic_il_buggy.svg",bus_side_view:"transportation/db_ic_il_bus_side_view.svg",call_a_bike:"transportation/db_ic_il_call_a_bike.svg",car:"transportation/db_ic_il_car.svg",car_side_view:"transportation/db_ic_il_car_side_view.svg",commuter_train:"transportation/db_ic_il_commuter_train.svg",electric_scooter:"transportation/db_ic_il_electric_scooter.svg",ev_car:"transportation/db_ic_il_ev_car.svg",ferry:"transportation/db_ic_il_ferry.svg",handcart:"transportation/db_ic_il_handcart.svg",ice:"transportation/db_ic_il_ice.svg",intercity_train:"transportation/db_ic_il_intercity_train.svg",local_bus:"transportation/db_ic_il_local_bus.svg",local_train:"transportation/db_ic_il_local_train.svg",long_distance_bus:"transportation/db_ic_il_long_distance_bus.svg",scooter:"transportation/db_ic_il_scooter.svg",self_driving_side_view:"transportation/db_ic_il_self_driving_side_view.svg",speedboat:"transportation/db_ic_il_speedboat.svg",subway:"transportation/db_ic_il_subway.svg",taxi:"transportation/db_ic_il_taxi.svg",tram:"transportation/db_ic_il_tram.svg",advertising_transportation:"travel/db_ic_il_advertising_transportation.svg",bear:"travel/db_ic_il_bear.svg",db_comfort_checkin:"travel/db_ic_il_db_comfort_checkin.svg",delayed:"travel/db_ic_il_delayed.svg",dog:"travel/db_ic_il_dog.svg",id_card:"travel/db_ic_il_id_card.svg",itinerary:"travel/db_ic_il_itinerary.svg",lost_and_found:"travel/db_ic_il_lost_and_found.svg",luggage:"travel/db_ic_il_luggage.svg",passenger_rights:"travel/db_ic_il_passenger_rights.svg",poi_berlin:"travel/db_ic_il_poi_berlin.svg",poi_berlin_alternative:"travel/db_ic_il_poi_berlin_alternative.svg",suitcase:"travel/db_ic_il_suitcase.svg",timetable:"travel/db_ic_il_timetable.svg",zuginformation:"travel/db_ic_il_zuginformation.svg",blizzard:"weather/db_ic_il_blizzard.svg",thunderstorm:"weather/db_ic_il_thunderstorm.svg"},cov_26wsstzd7c().s[4]++,this.alt=void 0,cov_26wsstzd7c().s[5]++,this.header=void 0,cov_26wsstzd7c().s[6]++,this.content=void 0,cov_26wsstzd7c().s[7]++,this.image=void 0,cov_26wsstzd7c().s[8]++,this.illustration=void 0,cov_26wsstzd7c().s[9]++,this.uiCoreIllustrationPath="./icons/illustrative",cov_26wsstzd7c().s[10]++,this.variant="banner"}return DbCard.prototype.render=function render(){return cov_26wsstzd7c().f[1]++,cov_26wsstzd7c().s[11]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"cmp-card","data-variant":this.variant},(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("figure",null,(cov_26wsstzd7c().b[0][0]++,this.illustration&&(cov_26wsstzd7c().b[0][1]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64","aria-hidden":"true"},(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("use",{href:this.uiCoreIllustrationPath+"/"+this.illustrationPaths[this.illustration]+"#icon"})))),(cov_26wsstzd7c().b[1][0]++,!this.illustration&&(cov_26wsstzd7c().b[1][1]++,this.image)&&(cov_26wsstzd7c().b[1][2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{src:this.image,height:"64",width:"64",alt:this.alt}))),(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("figcaption",null,(cov_26wsstzd7c().b[2][0]++,this.header&&(cov_26wsstzd7c().b[2][1]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-headline",null,this.header))),(cov_26wsstzd7c().b[3][0]++,this.content&&(cov_26wsstzd7c().b[3][1]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,this.content))),(cov_26wsstzd7c().b[4][0]++,!this.header&&(cov_26wsstzd7c().b[4][1]++,!this.content)&&(cov_26wsstzd7c().b[4][2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))))},DbCard}();cov_26wsstzd7c().s[12]++,DbCard.style=dbCardCss}}]);