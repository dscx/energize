//data is ordered by year, 2012-1960
var data = [ 
{"state":"AL","data":[[1904676],[1932241],[1958357],[1827395],[2018501],[2093521],[2104898],[2066495],[2084863],[1971282],[1978930],[1917972],[2111641],[2061548],[2018481],[1972627],[2005036],[1972438],[1898492],[1807308],[1753456],[1682950],[1665543],[1683264],[1651823],[1582744],[1504837],[1519791],[1544689],[1446066],[1499225],[1604167],[1645058],[1649050],[1638624],[1623676],[1551983],[1515313],[1547838],[1527391],[1478196],[1385063],[1393617],[1343234],[1246729],[1138614],[1088594],[1044971],[979643],[913539],[881582],[831574],[866851]]},
{"state":"AK","data":[[637312],[640959],[642769],[631498],[651624],[724068],[746806],[797925],[775234],[733584],[733019],[735865],[742179],[725462],[723358],[708870],[718841],[704213],[623209],[623828],[627237],[602660],[584083],[576194],[521404],[499218],[504260],[474439],[482898],[437637],[409072],[279672],[295757],[299782],[324057],[293532],[254674],[232186],[201495],[196970],[214384],[200968],[182043],[156633],[122532],[115172],[102698],[87781],[85067],[80788],[78813],[72174],[61434]]},
{"state":"AZ","data":[[1407012],[1433136],[1390596],[1388306],[1474850],[1504909],[1474614],[1427875],[1386250],[1334974],[1315766],[1321828],[1311460],[1264449],[1222847],[1169112],[1144978],[1079032],[1042843],[989332],[973175],[944742],[938975],[943223],[906477],[865876],[853027],[843159],[802689],[758051],[746562],[787960],[754566],[786539],[748032],[738931],[691920],[660048],[676350],[670143],[616472],[554228],[520418],[498204],[456162],[414505],[403499],[375254],[369697],[348343],[324948],[304873],[283075]]},
{"state":"AR","data":[[1064299],[1117706],[1120307],[1043905],[1114760],[1131992],[1116261],[1119562],[1096038],[1104609],[1122839],[1100552],[1145619],[1105038],[1087645],[1067541],[1048262],[1030788],[980085],[949773],[874462],[845526],[855939],[882991],[817841],[736276],[759661],[789635],[799105],[796758],[792669],[821962],[859453],[872845],[887235],[886514],[841074],[785929],[798522],[820242],[744791],[700849],[709020],[681147],[635446],[596758],[566462],[529133],[527688],[485089],[457213],[432030],[426405]]},
{"state":"CA","data":[[7640652],[7845443],[7855765],[7851312],[8125004],[8294849],[8304980],[8176480],[8266993],[7897285],[8013132],[7959755],[7925691],[7856739],[7834940],[7542286],[7425010],[7302266],[7280112],[7158883],[7309920],[7343441],[7445222],[7421929],[7145316],[6939976],[6502678],[6603078],[6534948],[6093451],[6077238],[6333429],[6541825],[6729279],[6474592],[6363228],[6188055],[6034581],[5817867],[6048369],[5873069],[5748474],[5499913],[5357405],[5115522],[4841294],[4647090],[4387443],[4221395],[3925660],[3725916],[3610724],[3451501]]},
{"state":"CO","data":[[1452353],[1483582],[1515150],[1472419],[1499226],[1489010],[1434511],[1417150],[1382928],[1354813],[1353540],[1353529],[1251400],[1189514],[1169959],[1125217],[1128274],[1078474],[1053173],[1052458],[983917],[983716],[932912],[915293],[899459],[866210],[859492],[869818],[867797],[831600],[833306],[816435],[838278],[856285],[850434],[835293],[818964],[784588],[787232],[802038],[756424],[691983],[677688],[648930],[622808],[555507],[532133],[508906],[498252],[466131],[468555],[461946],[424768]]},
{"state":"CT","data":[[730263],[742098],[765680],[766939],[781679],[846280],[812404],[865165],[908714],[895600],[816463],[830320],[865114],[825968],[782843],[803475],[813121],[774294],[791399],[790345],[800879],[767359],[768285],[811361],[795530],[763578],[739790],[723129],[715162],[688492],[696822],[695862],[728307],[755772],[768902],[748286],[742265],[689651],[714248],[743181],[717707],[682668],[694004],[667714],[648817],[624146],[609518],[569706],[563712],[545442],[536794],[518268],[508131]]},
{"state":"DE","data":[[273570],[271843],[252958],[262049],[292515],[294342],[288693],[302410],[289652],[303979],[308928],[292607],[305207],[286964],[273788],[276233],[275816],[265208],[264067],[268904],[264229],[253317],[255443],[241643],[234168],[227520],[217108],[214986],[220573],[197960],[186602],[195254],[242632],[245070],[226572],[227940],[229418],[219035],[229120],[246617],[232722],[222514],[219874],[219576],[206991],[187643],[192954],[184691],[173552],[173152],[162273],[150651],[156707]]},
{"state":"DC","data":[[169274],[180384],[186737],[191636],[187177],[195197],[182640],[196166],[196947],[189162],[192712],[188759],[192611],[185746],[181647],[185282],[188538],[191021],[188782],[193527],[186771],[187140],[181020],[180533],[174976],[174234],[174696],[165934],[167024],[162575],[163811],[149272],[153262],[152431],[160278],[163353],[164436],[163161],[171284],[193442],[188830],[199397],[205891],[195629],[181890],[182216],[169526],[159170],[132268],[121016],[120459],[118176],[119872]]},
{"state":"FL","data":[[4064902],[4174029],[4310093],[4146031],[4298052],[4442356],[4449319],[4392910],[4324304],[4165178],[4150376],[4036326],[4047914],[3892783],[3841361],[3712021],[3691438],[3604116],[3461972],[3343378],[3308518],[3246402],[3281327],[3249116],[3042242],[2870739],[2782201],[2699251],[2551499],[2457726],[2402597],[2482482],[2512464],[2422815],[2327477],[2217646],[2062141],[1939945],[1929127],[1995392],[1804065],[1674176],[1577497],[1453825],[1349486],[1223757],[1180501],[1111764],[1049840],[994700],[949692],[848978],[809836]]},
{"state":"GA","data":[[2790845],[3002990],[3119881],[2928813],[2962182],[3090101],[3094641],[3111775],[3096296],[2955622],[2934445],[2818981],[2919342],[2802892],[2784380],[2752058],[2774219],[2617303],[2436993],[2422143],[2266653],[2222569],[2229704],[2219783],[2138471],[2049217],[1953859],[1931245],[1875367],[1749505],[1680042],[1694616],[1717557],[1730075],[1683507],[1629162],[1552929],[1490137],[1495883],[1555418],[1435826],[1349064],[1281009],[1228336],[1154138],[1062891],[998188],[917780],[857725],[803621],[765534],[706226],[701562]]},
{"state":"HI","data":[[280269],[285877],[275437],[276332],[280301],[340910],[329166],[326528],[316360],[302399],[284917],[270323],[273488],[269516],[273559],[273618],[283301],[297066],[299395],[283089],[306060],[295171],[321434],[309779],[289692],[249461],[245329],[248555],[232426],[221347],[218287],[236808],[262456],[256672],[236977],[233361],[220087],[214429],[212139],[224342],[218088],[211699],[196979],[190890],[182801],[163868],[145505],[130589],[123481],[114308],[108306],[113772],[94855]]},
{"state":"ID","data":[[519243],[525819],[520893],[506819],[539589],[543060],[524889],[511408],[502264],[469943],[496511],[501179],[540016],[527750],[504436],[499610],[497537],[463779],[450175],[435697],[420072],[415496],[405414],[399762],[365738],[345525],[342169],[354853],[346845],[345715],[350377],[361939],[347717],[384079],[369965],[366462],[362236],[358890],[347839],[337025],[334056],[311621],[296413],[286795],[287259],[266759],[245125],[234793],[230469],[213350],[211209],[202896],[190689]]},
{"state":"IL","data":[[3863755],[3976164],[3976447],[3873178],[4089501],[4087007],[3973876],[4121957],[3975899],[3928419],[3901794],[3886480],[4016753],[3998219],[3828494],[3916900],[3941510],[3856858],[3747300],[3731895],[3623695],[3645143],[3581174],[3619981],[3706619],[3475787],[3420061],[3437085],[3504791],[3475454],[3396645],[3550532],[3771873],[4054014],[4203077],[4102933],[4022402],[3863205],[3958922],[4021666],[3931571],[3724341],[3698253],[3635972],[3451757],[3315785],[3189994],[3030575],[2853253],[2723285],[2659812],[2562301],[2527178]]},
{"state":"IN","data":[[2785621],[2869569],[2888236],[2734072],[2928574],[2966532],[2897317],[2958295],[2932562],[2937871],[2856375],[2771218],[2867486],[2786000],[2671798],[2681919],[2702892],[2618464],[2552699],[2569285],[2460381],[2474930],[2492407],[2517335],[2484610],[2380921],[2262840],[2301534],[2271233],[2198089],[2177836],[2359623],[2400599],[2586227],[2536343],[2486593],[2410904],[2378215],[2432314],[2474655],[2436007],[2236310],[2219865],[2157196],[2043557],[1952147],[1920148],[1799062],[1715404],[1635716],[1581586],[1551659],[1531067]]},
{"state":"IA","data":[[1449576],[1511398],[1503673],[1447630],[1437821],[1385736],[1306487],[1277386],[1244106],[1187865],[1192861],[1163606],[1191792],[1195261],[1144675],[1135244],[1148633],[1105856],[1067995],[1036990],[973339],[982068],[945871],[941086],[979000],[907224],[902493],[898498],[937293],[953923],[970038],[969292],[983984],[1039858],[963184],[981154],[980209],[942635],[950175],[963155],[904757],[862715],[850829],[822106],[782037],[747655],[699406],[697362],[670010],[644807],[626989],[600462],[602393]]},
{"state":"KS","data":[[1126570],[1161521],[1168214],[1139125],[1158528],[1162020],[1078858],[1050101],[1105873],[1125251],[1084373],[1048806],[1100062],[1093090],[1073793],[1085474],[1095783],[1065555],[1101385],[1076537],[1047973],[1061000],[1066456],[1044606],[1071478],[1017138],[975862],[1014562],[1019959],[918421],[946138],[947908],[1022744],[1132776],[1037533],[981586],[972888],[925231],[959918],[966538],[961348],[908399],[874412],[839491],[793944],[722961],[764078],[724161],[657588],[641606],[639952],[618593],[631796]]},
{"state":"KY","data":[[1870604],[1911701],[1987600],[1940319],[2019665],[2053664],[1981250],[1989535],[1962670],[1883156],[1949239],[1797842],[1767379],[1776128],[1689195],[1730893],[1722119],[1704157],[1635754],[1589061],[1548954],[1487035],[1462803],[1509378],[1419500],[1341657],[1304903],[1330171],[1375812],[1277227],[1262684],[1297953],[1368806],[1433445],[1401090],[1414868],[1401149],[1279131],[1229076],[1237678],[1203702],[1118165],[1105190],[1073719],[1014453],[954219],[907302],[901019],[891616],[889549],[837570],[819931],[824167]]},
{"state":"LA","data":[[3908558],[4071361],[4084958],[3778315],[4042185],[4288648],[4232770],[4027746],[4187801],[3986430],[4145043],[4009385],[4550618],[4227030],[4227289],[4496529],[4388591],[4209621],[4169910],[4035299],[3965926],[3847059],[3858312],[3763796],[3606859],[3569097],[3507057],[3348558],[3583587],[3442860],[3647798],[3970057],[3914218],[4050965],[4102110],[3942869],[3541481],[3113223],[3414052],[3323191],[3088439],[2901626],[2840721],[2704622],[2424458],[2238323],[1984862],[1843331],[1876431],[1756472],[1588806],[1572683],[1509592]]},
{"state":"ME","data":[[379103],[413470],[414433],[412968],[457747],[452237],[451689],[463229],[462464],[450417],[446487],[445205],[490289],[454406],[453726],[483193],[481470],[466329],[486168],[485285],[480129],[460127],[457273],[479036],[484815],[433213],[444397],[423490],[418315],[391618],[426476],[380534],[381590],[363638],[384665],[396894],[380623],[324675],[354431],[378961],[380438],[353586],[302394],[288294],[271199],[256816],[244303],[232211],[242748],[241444],[237920],[244910],[232345]]},
{"state":"MD","data":[[1386430],[1427346],[1479742],[1468613],[1474934],[1511924],[1473757],[1582215],[1554126],[1569655],[1519577],[1434246],[1443643],[1404608],[1366260],[1362729],[1364925],[1326208],[1309902],[1302589],[1253149],[1265310],[1268968],[1320508],[1288414],[1249169],[1182486],[1160115],[1192511],[1120496],[1102252],[1141032],[1156630],[1219360],[1154812],[1129967],[1148222],[1069477],[1123145],[1214681],[1122834],[1104577],[1068020],[1024006],[969025],[915543],[900436],[860051],[823905],[775444],[748501],[700033],[697377]]},
{"state":"MA","data":[[1385965],[1399508],[1419126],[1377890],[1445713],[1464899],[1422880],[1487750],[1499014],[1498830],[1533777],[1517874],[1521828],[1469879],[1423130],[1443339],[1449831],[1424684],[1440901],[1437532],[1432293],[1365847],[1406841],[1459758],[1427431],[1404996],[1383354],[1313714],[1292314],[1232102],[1235051],[1215906],[1246829],[1308594],[1471794],[1486770],[1499312],[1420430],[1475143],[1581640],[1546543],[1493856],[1464439],[1402451],[1373646],[1326510],[1248142],[1245398],[1119766],[1083397],[1112029],[1080062],[1054221]]},
{"state":"MI","data":[[2704535],[2802496],[2774543],[2708116],[2929110],[3032859],[3030685],[3198496],[3145858],[3180247],[3140223],[3084151],[3201591],[3202899],[3037898],[3100204],[3099921],[2999346],[2873874],[2855174],[2855785],[2807434],[2874111],[2846499],[2812947],[2640525],[2652909],[2635524],[2597439],[2521700],[2525390],[2673249],[2824680],[2923759],[2942668],[2873412],[2984164],[2865849],[2916412],[3060483],[2970385],[2798249],[2702586],[2734316],[2627352],[2490898],[2430563],[2278624],[2140646],[2072876],[1985381],[1876863],[1851832]]},
{"state":"MN","data":[[1824319],[1866452],[1868674],[1798047],[1920660],[1901241],[1835402],[1860754],[1866373],[1865354],[1786770],[1722210],[1750667],[1699843],[1626583],[1649728],[1680171],[1609452],[1525313],[1489783],[1441502],[1427757],[1401020],[1392910],[1355430],[1251591],[1246199],[1258541],[1251990],[1190822],[1187761],[1176854],[1224657],[1350909],[1350829],[1257507],[1293754],[1246227],[1237697],[1257820],[1209882],[1148590],[1107966],[1081972],[991513],[929428],[922467],[865620],[816299],[775933],[766930],[728507],[723332]]},
{"state":"MS","data":[[1133356],[1162455],[1187381],[1121255],[1171353],[1228410],[1214028],[1169099],[1213096],[1210147],[1177563],[1135330],[1247540],[1240056],[1145315],[1153289],[1154809],[1129078],[1101888],[1089080],[1079624],[1054900],[1029011],[959484],[917728],[868908],[846519],[837429],[858995],[820110],[814504],[818086],[834180],[877896],[849593],[819541],[779228],[772268],[817560],[848196],[830943],[786263],[747068],[684917],[645589],[580000],[566820],[512033],[513844],[473778],[438747],[411792],[405348]]},
{"state":"MO","data":[[1812551],[1879196],[1938738],[1863494],[1963454],[1994237],[1938264],[1953321],[1864896],[1851286],[1845013],[1830483],[1796893],[1856649],[1816702],[1771638],[1774647],[1688911],[1631793],[1621397],[1507609],[1517242],[1483661],[1511963],[1500396],[1430989],[1407869],[1405948],[1382988],[1365210],[1362282],[1364764],[1422939],[1530708],[1556417],[1505957],[1471776],[1412688],[1399150],[1418803],[1383552],[1326892],[1309319],[1265666],[1211277],[1132508],[1102479],[1043155],[989411],[954454],[939955],[898823],[899995]]},
{"state":"MT","data":[[391654],[397478],[395355],[424118],[459376],[471977],[440014],[420067],[399568],[377242],[379154],[355877],[407501],[393379],[388089],[365513],[394702],[388543],[368624],[364772],[346155],[352433],[347551],[351858],[341867],[329322],[352625],[370297],[359548],[323494],[317061],[337227],[360295],[397210],[383381],[361119],[365146],[345422],[351959],[347684],[342408],[333954],[322800],[314319],[280484],[260382],[275687],[258879],[263855],[252561],[248319],[241726],[227499]]},
{"state":"NE","data":[[860567],[871302],[864555],[782092],[800188],[760493],[711826],[694834],[686988],[674126],[665168],[653904],[656346],[654638],[664477],[647948],[634791],[603485],[575272],[552007],[523596],[534910],[525503],[534125],[535322],[495899],[482670],[500077],[506596],[503131],[492374],[477866],[507347],[545407],[556884],[557160],[555097],[525840],[518672],[522227],[509601],[496224],[487529],[455958],[422770],[385236],[389315],[348715],[347201],[335133],[327525],[315065],[307992]]},
{"state":"NV","data":[[639988],[632826],[646566],[653839],[701235],[735922],[741061],[699207],[674321],[639914],[615060],[622344],[615055],[594721],[574358],[555280],[550912],[506004],[491520],[454022],[429541],[415737],[403074],[389075],[353338],[330605],[303340],[302715],[300584],[300707],[290209],[286246],[291350],[296528],[282206],[256720],[250245],[238103],[233775],[233464],[217660],[201666],[190127],[177000],[163400],[150717],[144961],[130208],[133765],[123387],[113119],[104971],[91161]]},
{"state":"NH","data":[[283938],[292734],[295546],[299000],[303786],[310787],[307021],[325467],[332199],[325471],[316260],[306392],[309588],[292168],[282230],[279327],[279782],[267429],[264680],[261798],[261566],[252219],[267455],[272820],[273583],[273314],[252352],[233540],[224324],[204591],[201406],[200350],[208312],[210827],[233332],[230473],[227055],[201947],[206547],[216659],[212341],[201083],[186621],[176230],[159472],[149533],[144804],[131286],[133120],[133718],[128249],[119951],[112173]]},
{"state":"NJ","data":[[2271875],[2440990],[2421519],[2393501],[2606742],[2675123],[2536527],[2654158],[2554923],[2510158],[2481182],[2449090],[2473425],[2562800],[2450747],[2500782],[2480217],[2477470],[2482156],[2368435],[2357575],[2274916],[2245821],[2355210],[2294556],[2276645],[2201435],[2138124],[2185909],[2088210],[2065603],[2026699],[2042912],[2033349],[2021250],[2006411],[2071267],[1884455],[1982264],[2122727],[2080623],[1971332],[1978433],[1896602],[1841318],[1768510],[1669150],[1570997],[1539593],[1502327],[1461863],[1362662],[1302822]]},
{"state":"NM","data":[[687028],[687774],[669026],[661656],[693154],[718345],[688025],[680768],[681942],[658067],[656673],[659130],[660417],[637039],[633607],[642020],[602882],[581034],[589693],[602475],[586608],[589251],[596449],[535236],[510395],[485525],[454928],[466487],[475291],[472883],[465385],[472970],[480958],[480913],[475439],[473564],[509098],[459629],[476708],[477992],[501933],[469664],[458841],[429258],[436394],[407788],[376423],[353676],[366313],[370877],[376499],[340487],[328883]]},
{"state":"NY","data":[[3513379],[3618478],[3734653],[3709046],[3893927],[3971421],[3838013],[4134803],[4240213],[4138037],[4003660],[3994507],[4111101],[4032206],[3912520],[3986803],[3915870],[3765128],[3718128],[3784822],[3755522],[3672238],[3735466],[3771145],[3748885],[3658573],[3554742],[3508631],[3404110],[3354065],[3529860],[3673950],[3863538],[3973044],[4196106],[4195426],[4225157],[3925391],[4128189],[4419198],[4269956],[4251358],[4303521],[4200710],[4052487],[3955854],[3867361],[3664836],[3382264],[3306071],[3238653],[3093946],[2989143]]},
{"state":"NC","data":[[2482902],[2573241],[2698652],[2575482],[2713245],[2696442],[2626963],[2681265],[2652775],[2577987],[2558469],[2536023],[2589548],[2474701],[2465500],[2421875],[2444154],[2358090],[2245440],[2219373],[2130093],[2035475],[2055660],[2064847],[2044988],[1966658],[1880347],[1797484],[1800581],[1669407],[1592522],[1629974],[1667857],[1730984],[1665913],[1634286],[1558946],[1459181],[1502143],[1551365],[1480452],[1404067],[1342825],[1281143],[1211187],[1138029],[1090025],[1000841],[967443],[930431],[903059],[859225],[826737]]},
{"state":"ND","data":[[552929],[526241],[476987],[435985],[445418],[438564],[414978],[408435],[403329],[399694],[400244],[406703],[380864],[374732],[347142],[359013],[352631],[349686],[341527],[331897],[328660],[322407],[312502],[319177],[306625],[303038],[304004],[300479],[259596],[230570],[234781],[236221],[222444],[238066],[230052],[210377],[210453],[206529],[204373],[202209],[203760],[195315],[191127],[192573],[191978],[185112],[180871],[169488],[172105],[170760],[164970],[154871],[159507]]},
{"state":"OH","data":[[3686420],[3830787],[3864009],[3706050],[4017958],[4060892],[3875877],[4029424],[3998724],[3963008],[3895845],[3950806],[4204275],[4170520],[4013171],[4113136],[4131156],[4042633],[3973831],[3861173],[3806046],[3767682],[3770731],[3954437],[3844811],[3709240],[3592805],[3625326],[3649529],[3449332],[3512270],[3852476],[3955203],[4266346],[4276502],[4198966],[4209348],[3980319],[4198540],[4218779],[4126091],[3871855],[3932974],[3856358],[3710254],[3544106],[3540777],[3369966],[3216173],[3114950],[3037198],[2899387],[2995302]]},
{"state":"OK","data":[[1568825],[1594983],[1587114],[1499271],[1587950],[1575782],[1558290],[1517434],[1465884],[1476873],[1447451],[1495469],[1474600],[1418632],[1437194],[1434820],[1429220],[1369199],[1394913],[1390884],[1330524],[1316161],[1382847],[1325432],[1291642],[1257209],[1203627],[1298478],[1323164],[1317529],[1318677],[1249477],[1214699],[1322984],[1266942],[1225142],[1162981],[1070307],[1064255],[1024365],[1019377],[965829],[939390],[886584],[843635],[763582],[745521],[774957],[803333],[769321],[692629],[583284],[581454]]},
{"state":"OR","data":[[985929],[1013923],[985882],[1022905],[1051979],[1065887],[1073531],[1037315],[1000591],[1002113],[1023735],[1028064],[1117236],[1133398],[1108081],[1096799],[1085630],[1041393],[1033879],[1020911],[1002013],[1009715],[978200],[999603],[991107],[940534],[895547],[913961],[936568],[868066],[906001],[939079],[945091],[977195],[951181],[885127],[885944],[867668],[837621],[854981],[837453],[796894],[752937],[733068],[691621],[646404],[630449],[591841],[578517],[527336],[509522],[485255],[470788]]},
{"state":"PA","data":[[3630765],[3731081],[3762687],[3637653],[3957693],[3972591],[3889403],[4015892],[3992330],[3945142],[3895024],[3834849],[3927659],[3753641],[3716770],[3876466],[3912607],[3879539],[3822300],[3750563],[3676130],[3573252],[3636089],[3739173],[3714260],[3552531],[3378937],[3434629],[3605399],[3377784],[3363923],[3810424],[3996851],[4250339],[4129035],[4127671],[4164563],[3914259],[4124338],[4294664],[4188065],[4045173],[4107115],[3982272],[3959414],[3816180],[3832427],[3732472],[3589424],[3391502],[3255865],[3146474],[3253583]]},
{"state":"RI","data":[[181569],[183971],[192011],[192268],[195627],[199277],[198853],[207602],[214160],[216184],[200930],[201942],[202607],[224502],[225162],[216304],[218630],[227945],[239070],[202053],[244599],[218161],[212706],[216878],[223302],[215891],[206232],[204292],[192243],[180992],[174906],[175223],[185630],[201356],[212656],[223192],[215539],[206253],[215613],[231970],[236781],[235527],[222549],[210710],[197940],[193453],[175307],[173506],[178175],[180623],[180878],[172917],[187092]]},
{"state":"SC","data":[[1571194],[1610901],[1652371],[1582044],[1647167],[1677964],[1681794],[1671062],[1698105],[1592131],[1586920],[1547971],[1595883],[1550243],[1548251],[1501627],[1453927],[1416416],[1363520],[1363393],[1306229],[1290260],[1262961],[1243933],[1235423],[1178624],[1142301],[1076403],[1069389],[1006585],[973246],[1002274],[998039],[984602],[994662],[1000460],[964745],[840982],[858734],[886211],[835044],[779705],[745786],[699241],[654397],[603111],[593592],[554461],[560697],[561175],[540258],[507192],[489314]]},
{"state":"SD","data":[[376438],[382432],[379840],[365539],[355976],[332471],[308044],[302795],[284890],[275356],[271056],[251715],[259136],[245477],[239979],[242770],[253073],[239872],[236309],[229942],[216438],[213623],[217316],[214493],[205458],[195275],[195087],[194864],[188737],[185593],[191360],[178828],[190797],[205072],[205729],[196991],[195443],[181995],[172639],[176862],[179218],[170198],[168806],[159813],[153325],[145671],[146408],[140097],[143820],[140456],[136674],[131593],[128864]]},
{"state":"TN","data":[[2097214],[2211176],[2266000],[2102871],[2294259],[2352601],[2319217],[2318947],[2272853],[2241378],[2222840],[2197451],[2181762],[2148919],[2108788],[2028301],[2050713],[1945533],[1928052],[1868071],[1833855],[1791027],[1792042],[1829553],[1777090],[1712748],[1700095],[1711578],[1737608],[1660326],[1611949],[1693074],[1725010],[1800468],[1763058],[1779418],[1720099],[1614259],[1578531],[1614114],[1474008],[1371132],[1365628],[1340797],[1284605],[1236066],[1231693],[1137525],[1088612],[1062306],[1015673],[978207],[962716]]},
{"state":"TX","data":[[12281904],[12199323],[11964074],[11205727],[11482446],[11859122],[11929641],[11914016],[12391061],[12348674],[12562851],[12252909],[12469675],[12128264],[12468523],[12287691],[11878171],[11112750],[10919771],[10598910],[10481505],[10315134],[10305355],[10122093],[9840982],[9265921],[9033794],[9042345],[8979308],[8431018],[8493789],[9169623],[9404691],[9325603],[8960420],[8493877],[7851699],[7526866],[8109795],[8257192],[7637413],[7245446],[6932890],[6665515],[6275726],[5884256],[5590968],[5244514],[5042973],[4921259],[4666199],[4471219],[4438686]]},
{"state":"UT","data":[[792170],[797613],[759659],[746135],[771355],[783434],[779621],[760480],[729863],[699118],[688646],[708789],[739107],[694692],[704174],[680756],[666563],[637274],[587598],[578051],[551644],[565543],[535857],[537693],[526365],[462469],[470862],[500514],[504072],[491918],[467748],[478320],[504666],[526526],[510727],[486133],[510286],[480808],[473695],[457795],[428193],[415206],[397025],[395844],[365626],[345271],[350852],[339527],[334563],[311851],[310361],[300854],[303274]]},
{"state":"VT","data":[[128879],[149284],[150798],[154742],[147491],[155657],[156903],[159868],[161281],[151119],[148434],[147811],[147510],[134626],[136346],[144867],[140073],[133267],[136042],[136554],[138311],[132586],[126148],[142534],[144633],[137525],[128275],[134543],[132839],[123305],[115159],[120688],[125817],[131796],[134507],[129353],[131810],[114372],[116848],[126445],[123928],[116978],[113230],[106593],[100500],[94564],[90955],[83116],[72087],[74629],[74826],[71983],[68590]]},
{"state":"VA","data":[[2355556],[2388718],[2492281],[2440720],[2557029],[2652510],[2571079],[2625840],[2552017],[2426808],[2354099],[2322883],[2386759],[2290007],[2231710],[2205538],[2209245],[2152487],[2088329],[2066403],[1996111],[1970840],[1963686],[1965264],[1922153],[1847390],[1757102],[1670703],[1637018],[1559266],[1501204],[1514390],[1530986],[1568560],[1515327],[1486381],[1443957],[1359117],[1382438],[1435152],[1375471],[1322418],[1279079],[1237262],[1197552],[1137209],[1117085],[1046197],[969429],[939833],[883813],[854711],[851397]]},
{"state":"WA","data":[[2056679],[2080672],[2045410],[2045940],[2051319],[2056020],[2059640],[1951432],[1920939],[1859308],[1846879],[1991672],[2211405],[2280765],[2195090],[2123532],[2094433],[2110244],[2061623],[2072180],[2072400],[2037223],[2046537],[2013245],[1947937],[1810665],[1758740],[1724866],[1724834],[1625025],[1667946],[1762351],[1636887],[1667855],[1616281],[1524594],[1506985],[1458192],[1494258],[1498574],[1462424],[1320996],[1294162],[1296170],[1210240],[1112766],[1059018],[996505],[961491],[900653],[860093],[823406],[807326]]},
{"state":"WV","data":[[722653],[724854],[738500],[706021],[780047],[793059],[762798],[739190],[738067],[713539],[757250],[732691],[738459],[718767],[736821],[709545],[711473],[739243],[737419],[711635],[687631],[674209],[704527],[748661],[726684],[681406],[668439],[665504],[717856],[681890],[713424],[769966],[788491],[824027],[807866],[819881],[826810],[790485],[841869],[845892],[829078],[779620],[795817],[796709],[807507],[739871],[771733],[754149],[729171],[689768],[656413],[648779],[618085]]},
{"state":"WI","data":[[1733884],[1790086],[1799622],[1775617],[1903965],[1908993],[1880546],[1974873],[1891806],[1866032],[1891874],[1850660],[1873907],[1841327],[1748888],[1769135],[1762611],[1698086],[1635565],[1587947],[1523747],[1526120],[1484770],[1516718],[1510291],[1404219],[1425710],[1501314],[1487799],[1420068],[1404630],[1421461],[1464225],[1469270],[1501958],[1438214],[1373216],[1342083],[1341794],[1354604],[1287765],[1293256],[1289105],[1248434],[1184187],[1137128],[1092310],[1030827],[975114],[940426],[918240],[877371],[854705]]},
{"state":"WY","data":[[546938],[553136],[537903],[522141],[539840],[524729],[480842],[456183],[450802],[461501],[438884],[438544],[428153],[425486],[421169],[415039],[415442],[403461],[408420],[407434],[421659],[388374],[399431],[382201],[370800],[363928],[336066],[357376],[351430],[329336],[363542],[352900],[362377],[378435],[354867],[325349],[300367],[277424],[278940],[283570],[286934],[268505],[255524],[250586],[225624],[205177],[180482],[172875],[163541],[163282],[173552],[154611],[141497]]},
 ];

//var usa = {"state":"USA", "data":[[94970874],[97383851],[97981238],[94573029],[99264648],[101295264],[99592377],[100277287],[100168974],[97942849],[97650017],[96142288],[98805567],[96631780],[95029982],[94750356],[94091390],[91091786],[89117590],[87451383],[85788490],[84435527],[84506671],[84777019],[82760410],[79005567],[76639363],[76464077],[76571095],[72934367],[73058784],[76141756],[78092506],[80882446],[80021769],[77988301],[76002450],[71986573],[73947572],[75755267],[72705040],[69186565],[67741611],[65596682],[62414722],[58926572],[57026015],[54027593],[51826046],[49661147],[47824415],[45731168],[45079292]]};
