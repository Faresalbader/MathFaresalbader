var CH=["","التبرير والبرهان","التوازي والتعامد","المثلثات المتطابقة","العلاقات في المثلث"];
var CR=[null,[11,82],[85,142],[145,210],[213,270]];
var L=[
[1,"1-1","التبرير الاستقرائي والتخمين",12,18,["التبرير الاستقرائي: استنتاج قاعدة عامة من ملاحظة أنماط.","التخمين عبارة قد تكون صحيحة أو خاطئة، ويكفي مثال مضاد واحد لإثبات خطئه."],[["ما العدد التالي في النمط 3, 6, 12, 24؟",["36","48","30"],1],["ما المثال المضاد للتخمين: «كل عدد أولي فردي»؟",["3","9","2"],2]]],
[1,"1-2","المنطق",19,25,["العبارة جملة إما صحيحة أو خاطئة. النفي ~p يعاكس قيمة p.","الوصل (p ∧ q) صحيح فقط إذا كانت العبارتان صحيحتين، والفصل (p ∨ q) صحيح إذا صحت إحداهما على الأقل."],[["p صحيحة و q خاطئة، فقيمة p ∧ q:",["صحيحة","خاطئة"],1],["p صحيحة و q خاطئة، فقيمة p ∨ q:",["صحيحة","خاطئة"],0]]],
[1,"1-3","العبارات الشرطية",26,36,["العبارة الشرطية: إذا كان p فإن q (p الفرض، q النتيجة).","العكس: إذا q فإن p. المعكوس: إذا ~p فإن ~q. المعاكس الإيجابي: إذا ~q فإن ~p، وهو يكافئ العبارة الأصلية."],[["ما عكس «إذا كان p فإن q»؟",["إذا كان q فإن p","إذا لم يكن p فإن لم يكن q","إذا لم يكن q فإن لم يكن p"],0],["أي العبارات تكافئ العبارة الشرطية الأصلية دائمًا؟",["العكس","المعكوس","المعاكس الإيجابي"],2]]],
[1,"1-4","التبرير الاستنتاجي",37,44,["التبرير الاستنتاجي: استعمال حقائق وتعريفات وقوانين للوصول إلى نتيجة صحيحة.","قانون الفصل المنطقي: إذا صحت p→q وصحت p فإن q صحيحة. قانون القياس المنطقي: من p→q و q→r نستنتج p→r."],[["إذا كانت p→q صحيحة و p صحيحة، فماذا نستنتج؟",["q صحيحة","q خاطئة","لا شيء"],0],["من p→q و q→r نستنتج:",["r→p","p→r","q→p"],1]]],
[1,"1-5","المسلمات والبراهين الحرة",45,51,["المسلمة عبارة تُقبل دون برهان، والنظرية عبارة تُثبت.","من المسلمات: يمر بأي نقطتين مستقيم واحد فقط، وتقاطع مستويين مستقيم."],[["كم مستقيمًا يمر بنقطتين مختلفتين؟",["واحد فقط","اثنان","عدد لا نهائي"],0],["يتقاطع مستويان في:",["نقطة","مستقيم","مستوى"],1]]],
[1,"1-6","البرهان الجبري",53,59,["من خواص المساواة: الانعكاس، التماثل، التعدي، التعويض، الجمع، الطرح، الضرب، القسمة.","البرهان ذو العمودين يكتب العبارات في عمود والمبررات في عمود آخر."],[["إذا كان a=b و b=c فإن a=c. الخاصية:",["التماثل","التعدي","الانعكاس"],1],["حل 2x+3=11 يعطي x =",["3","4","7"],1]]],
[1,"1-7","إثبات علاقات بين القطع المستقيمة",60,65,["مسلمة جمع الأطوال: إذا وقعت B بين A و C فإن AB + BC = AC.","القطع المستقيمة المتطابقة لها الطول نفسه، والتطابق انعكاسي ومتماثل ومتعدٍّ."],[["B بين A و C ، AB=5 و BC=7 ، فإن AC =",["2","12","35"],1],["نقطة المنتصف لقطعة طولها 18 تقسمها إلى جزأين طول كل منهما:",["6","9","18"],1]]],
[1,"1-8","إثبات علاقات بين الزوايا",66,73,["مسلمة جمع قياسات الزوايا. الزاويتان المتتامتان مجموعهما 90° والمتكاملتان مجموعهما 180°.","الزاويتان المتقابلتان بالرأس متطابقتان."],[["زاويتان متتامتان إحداهما 35°، فالأخرى:",["145°","55°","65°"],1],["الزاويتان المتقابلتان بالرأس:",["متكاملتان","متطابقتان","متتامتان"],1]]],
[2,"2-1","المستقيمان والقاطع",86,93,["المستقيمان المتخالفان لا يتقاطعان ولا يقعان في مستوى واحد.","القاطع مستقيم يقطع مستقيمين أو أكثر، وينتج عنه أزواج زوايا: متناظرة، متبادلة داخليًا، متبادلة خارجيًا، متحالفة."],[["مستقيمان لا يتقاطعان ولا يقعان في مستوى واحد يسميان:",["متوازيين","متخالفين","متعامدين"],1],["زاويتان داخليتان على جانبين مختلفين من القاطع تسميان:",["متناظرتين","متبادلتين داخليًا","متحالفتين"],1]]],
[2,"2-2","الزوايا والمستقيمات المتوازية",94,101,["إذا قطع قاطع مستقيمين متوازيين فالزوايا المتناظرة والمتبادلة متطابقة.","الزاويتان الداخليتان المتحالفتان متكاملتان (مجموعهما 180°)."],[["مستقيمان متوازيان وقاطع، إحدى الزوايا المتناظرة 70°، فالأخرى:",["70°","110°","20°"],0],["إحدى الزاويتين المتحالفتين 70°، فالأخرى:",["70°","110°","90°"],1]]],
[2,"2-3","إثبات توازي مستقيمين",102,107,["عكس المسلمات والنظريات: إذا تطابقت زوايا متناظرة أو متبادلة فالمستقيمان متوازيان.","إذا كانت زاويتان متحالفتان متكاملتين فالمستقيمان متوازيان."],[["إذا تطابقت زاويتان متناظرتان فإن المستقيمين:",["متوازيان","متعامدان","متخالفان"],0],["زاويتان متبادلتان داخليًا قياس كل منهما 55°، فالمستقيمان:",["متوازيان","متقاطعان بالضرورة"],0]]],
[2,"2-4","ميل المستقيم",109,116,["الميل m = (y₂ − y₁) ÷ (x₂ − x₁).","المستقيمان المتوازيان ميلاهما متساويان، والمتعامدان حاصل ضرب ميليهما −1."],[["ميل المستقيم المار بالنقطتين (1,2) و (3,6):",["1","2","4"],1],["ميل المستقيم العمودي على مستقيم ميله 2:",["−2","½","−½"],2]]],
[2,"2-5","صيغ معادلة المستقيم",117,124,["صيغة الميل والمقطع: y = mx + b.","صيغة الميل ونقطة: y − y₁ = m(x − x₁)."],[["معادلة المستقيم الذي ميله 3 ومقطعه الصادي −2:",["y=3x−2","y=−2x+3","y=3x+2"],0],["مستقيم ميله 2 يمر بالنقطة (1,4)، معادلته بصيغة الميل ونقطة:",["y−4=2(x−1)","y−1=2(x−4)","y=2x+4"],0]]],
[2,"2-6","الأعمدة والمسافة",126,134,["المسافة بين نقطة ومستقيم هي طول القطعة العمودية من النقطة إلى المستقيم.","المسافة بين مستقيمين متوازيين تقاس على عمود مشترك بينهما."],[["أقصر مسافة من نقطة إلى مستقيم تقاس على:",["أي مائل","العمود","المستقيم الموازي"],1],["المسافة بين مستقيمين متوازيين تقاس على:",["قطعة عمودية عليهما","قطعة مائلة","قاطع مائل"],0]]],
[3,"3-1","تصنيف المثلثات",146,152,["حسب الزوايا: حاد الزوايا، منفرج، قائم، متطابق الزوايا.","حسب الأضلاع: مختلف الأضلاع، متطابق الضلعين، متطابق الأضلاع."],[["مثلث زواياه 60° و60° و60° هو:",["قائم","متطابق الزوايا","منفرج"],1],["المثلث الذي له زاوية 90° يسمى:",["قائم الزاوية","حاد الزوايا","منفرج الزاوية"],0]]],
[3,"3-2","زوايا المثلث",154,161,["مجموع زوايا المثلث الداخلية 180°.","قياس الزاوية الخارجية = مجموع الزاويتين الداخليتين البعيدتين."],[["مثلث فيه زاويتان 50° و60°، فالثالثة:",["70°","80°","110°"],0],["زاوية خارجية 120° وإحدى الداخليتين البعيدتين 70°، فالأخرى:",["50°","60°","190°"],0]]],
[3,"3-3","المثلثات المتطابقة",162,169,["المثلثان المتطابقان تتطابق فيهما جميع الأضلاع والزوايا المتناظرة.","CPCTC: الأجزاء المتناظرة في المثلثين المتطابقين متطابقة."],[["إذا كان △ABC ≅ △DEF فإن AB ≅",["DE","EF","DF"],0],["تطابق المثلثات علاقة:",["انعكاسية فقط","انعكاسية ومتماثلة ومتعدية"],1]]],
[3,"3-4","إثبات تطابق المثلثات SSS, SAS",170,177,["SSS: تطابق ثلاثة أضلاع في مثلث مع ثلاثة أضلاع في آخر.","SAS: تطابق ضلعين والزاوية المحصورة بينهما."],[["في SAS تكون الزاوية:",["محصورة بين الضلعين","غير محصورة","خارجية"],0],["SSS تعني تطابق:",["ثلاثة أضلاع","ضلعين وزاوية","ثلاث زوايا"],0]]],
[3,"3-5","إثبات تطابق المثلثات ASA, AAS",179,187,["ASA: زاويتان والضلع المحصور بينهما.","AAS: زاويتان وضلع غير محصور. أما SSA فليست شرطًا للتطابق."],[["أي مما يلي ليس شرطًا لتطابق المثلثين؟",["ASA","AAS","SSA"],2],["في ASA يكون الضلع:",["محصورًا بين الزاويتين","غير محصور"],0]]],
[3,"3-6","المثلثات المتطابقة الضلعين والمتطابقة الأضلاع",188,195,["في المثلث المتطابق الضلعين زاويتا القاعدة متطابقتان، والعكس صحيح.","المثلث المتطابق الأضلاع متطابق الزوايا، وقياس كل زاوية فيه 60°."],[["مثلث متطابق الضلعين زاوية رأسه 40°، فكل زاوية قاعدة:",["70°","40°","140°"],0],["قياس كل زاوية في المثلث المتطابق الأضلاع:",["45°","60°","90°"],1]]],
[3,"3-7","المثلثات والبرهان الإحداثي",196,201,["البرهان الإحداثي يضع الشكل في المستوى الإحداثي، ويفضل وضع أحد الرؤوس عند نقطة الأصل.","نستعمل صيغتي المسافة ونقطة المنتصف لإثبات العلاقات."],[["منتصف القطعة بين (0,0) و (6,4):",["(3,2)","(6,4)","(2,3)"],0],["المسافة بين (0,0) و (3,4):",["5","7","25"],0]]],
[4,"4-1","المنصفات في المثلث",215,223,["أي نقطة على العمود المنصف لقطعة تبعد المسافة نفسها عن طرفيها.","نقطة تلاقي الأعمدة المنصفة هي مركز الدائرة المارة بالرؤوس، ونقطة تلاقي منصفات الزوايا مركز الدائرة الداخلية."],[["أي نقطة على العمود المنصف لقطعة:",["تساوي بعديها عن طرفيها","أقرب إلى طرف واحد"],0],["تلاقي منصفات زوايا المثلث هو مركز الدائرة:",["الخارجية","الداخلية"],1]]],
[4,"4-2","القطع المتوسطة والارتفاعات في المثلث",225,232,["المتوسط يصل رأسًا بمنتصف الضلع المقابل، ونقطة تلاقي المتوسطات هي مركز الثقل.","مركز الثقل يبعد عن الرأس ⅔ طول المتوسط. الارتفاع عمود من الرأس على الضلع المقابل."],[["إذا كان طول المتوسط 12 فبعد مركز الثقل عن الرأس:",["4","8","6"],1],["نقطة تلاقي المتوسطات الثلاثة تسمى:",["مركز الثقل","ملتقى الارتفاعات"],0]]],
[4,"4-3","المتباينات في المثلث",233,239,["الزاوية الكبرى تقابل الضلع الأطول، والضلع الأطول يقابل الزاوية الكبرى.","قياس الزاوية الخارجية أكبر من قياس أي من الداخليتين البعيدتين."],[["في مثلث زواياه 30° و60° و90°، أقصر ضلع يقابل:",["30°","60°","90°"],0],["الضلع الأطول في المثلث يقابل:",["الزاوية الصغرى","الزاوية الكبرى"],1]]],
[4,"4-4","البرهان غير المباشر",241,247,["الخطوة 1: افترض أن النتيجة خاطئة.","الخطوة 2: استنتج حتى تصل إلى تناقض، فيكون الافتراض خاطئًا والنتيجة الأصلية صحيحة."],[["أول خطوة في البرهان غير المباشر:",["افتراض نقيض النتيجة","كتابة النتيجة فقط"],0],["ينتهي البرهان غير المباشر بالوصول إلى:",["تناقض","تطابق"],0]]],
[4,"4-5","متباينة المثلث",249,254,["مجموع طولي أي ضلعين في المثلث أكبر من طول الضلع الثالث."],[["هل تكوّن الأطوال 3 و4 و8 مثلثًا؟",["نعم","لا"],1],["هل تكوّن الأطوال 5 و6 و10 مثلثًا؟",["نعم","لا"],0]]],
[4,"4-6","المتباينات في مثلثين",255,262,["نظرية المفصلة: إذا تطابق ضلعان في مثلثين واختلفت الزاوية المحصورة، فالزاوية الأكبر يقابلها ضلع ثالث أطول.","وعكسها: الضلع الثالث الأطول يقابل زاوية محصورة أكبر."],[["بحسب نظرية المفصلة، الزاوية المحصورة الأكبر تقابل ضلعًا ثالثًا:",["أقصر","أطول","مساويًا"],1],["عكس نظرية المفصلة: الضلع الثالث الأطول يقابل زاوية محصورة:",["أكبر","أصغر"],0]]]
];
var X={"1-1":["النمط 2, 5, 8, 11: الفرق ثابت 3، فالعدد التالي 14.","الاكتفاء بمثال أو مثالين لإثبات تخمين. الأمثلة لا تثبت، لكن مثالًا مضادًا واحدًا ينفيه."],
"1-2":["p: 5>3 (صحيحة)، q: 2 عدد فردي (خاطئة). إذن p∧q خاطئة، p∨q صحيحة، ~q صحيحة.","الخلط بين «و» و«أو»: الوصل يحتاج صحة العبارتين معًا."],
"1-3":["إذا قبل العدد القسمة على 4 فهو زوجي. العكس خاطئ، فالعدد 6 زوجي ولا يقبل القسمة على 4.","افتراض أن العكس يكافئ العبارة الأصلية. المكافئ هو المعاكس الإيجابي."],
"1-4":["إذا كان المثلث متطابق الأضلاع فهو متطابق الزوايا. △ABC متطابق الأضلاع، إذن هو متطابق الزوايا (قانون الفصل).","إثبات q ثم استنتاج p. هذه مغالطة وليست قانون فصل."],
"1-5":["ثلاث نقاط ليست على استقامة واحدة تحدد مستوى واحدًا فقط.","ثلاث نقاط على استقامة واحدة لا تحدد مستوى واحدًا، بل تقع في عدد لا نهائي من المستويات."],
"1-6":["أثبت: إذا 3x−5=10 فإن x=5. الخطوة 1: 3x=15 (خاصية الجمع). الخطوة 2: x=5 (خاصية القسمة).","نسيان كتابة المبرر لكل خطوة في البرهان."],
"1-7":["AB=2x+1 و BC=x+4 و AC=14 و B بين A و C: 3x+5=14 فتكون x=3.","جمع الأطوال دون التأكد أن النقطة تقع بين الطرفين."],
"1-8":["زاويتان متكاملتان قياساهما x و 2x: 3x=180 فتكون x=60° والأخرى 120°.","الخلط بين المتتامتين (90°) والمتكاملتين (180°)."],
"2-1":["عندما يقطع قاطع مستقيمين تنتج 8 زوايا، منها 4 أزواج من الزوايا المتناظرة.","الخلط بين الزوايا المتبادلة والمتناظرة."],
"2-2":["مستقيمان متوازيان، والزاويتان المتبادلتان داخليًا 3x+10 و 5x−30: 3x+10=5x−30 فتكون x=20.","اعتبار المتحالفتين متطابقتين. هما متكاملتان."],
"2-3":["زاويتان متناظرتان قياسهما 4x و 80°. إذا تطابقتا فإن x=20 ويكون المستقيمان متوازيين.","استنتاج التوازي من زوايا ليست متناظرة ولا متبادلة."],
"2-4":["ميل المستقيم المار بالنقطتين (−1,3) و (2,−3) هو (−3−3)÷(2+1) = −2.","عكس ترتيب الإحداثيات في البسط والمقام. يجب أن يكون الترتيب ثابتًا."],
"2-5":["مستقيم ميله 2 ومقطعه الصادي 5: y = 2x + 5.","خطأ في إشارة x₁ و y₁ عند التعويض في صيغة الميل ونقطة."],
"2-6":["المسافة بين المستقيمين y=2 و y=7 تساوي 5.","قياس المسافة على قطعة مائلة بدل العمود."],
"3-1":["مثلث أطوال أضلاعه 5, 5, 8 هو مثلث متطابق الضلعين.","الظن أن متطابق الأضلاع ليس متطابق الضلعين. هو حالة خاصة منه."],
"3-2":["زوايا مثلث x و 2x و 3x: 6x=180 فتكون x=30، والزوايا 30° و 60° و 90°.","جمع الزاوية الخارجية مع زاوية داخلية مجاورة لها بدل البعيدتين."],
"3-3":["△ABC ≅ △DEF و ∠A=50° فإن ∠D=50°.","كتابة رؤوس المثلثين المتطابقين بترتيب غير متناظر."],
"3-4":["إذا كان AB=DE و BC=EF و AC=DF فإن △ABC ≅ △DEF (SSS).","استعمال SAS مع زاوية غير محصورة بين الضلعين."],
"3-5":["∠A≅∠D و AB≅DE و ∠B≅∠E، إذن △ABC ≅ △DEF (ASA).","اعتبار AAA شرطًا للتطابق. هو يعطي التشابه فقط."],
"3-6":["في △ABC، AB=AC و ∠B=65° فإن ∠C=65° و ∠A=50°.","تحديد زاويتي القاعدة خطأً. هما المقابلتان للضلعين المتطابقين."],
"3-7":["الرؤوس (0,0) و (4,0) و (2,3): AC = BC = √13، فالمثلث متطابق الضلعين.","اختيار إحداثيات تجعل الشكل حالة خاصة بدل الحالة العامة."],
"4-1":["إذا كانت النقطة على العمود المنصف للقطعة AB وتبعد 5 عن A فإنها تبعد 5 عن B.","الخلط بين العمود المنصف ومنصف الزاوية."],
"4-2":["طول المتوسط 9 من الرأس إلى منتصف الضلع، فبعد مركز الثقل عن الرأس 6.","أخذ ⅔ من الجزء الخطأ، فالمركز أقرب إلى منتصف الضلع."],
"4-3":["أضلاع مثلث 7 و 9 و 12: أكبر زاوية تقابل الضلع 12.","الظن أن الضلع الأقصر يقابل الزاوية الأكبر."],
"4-4":["لإثبات أن المثلث لا يحتوي زاويتين قائمتين: نفترض أنه يحتوي زاويتين قائمتين، فمجموعهما 180° ولا يبقى شيء للثالثة، وهذا تناقض.","افتراض العبارة نفسها بدل نقيضها."],
"4-5":["ضلعان 3 و 7: الضلع الثالث أكبر من 4 وأقل من 10.","فحص زوج واحد من الأضلاع فقط. يجب فحص الأزواج الثلاثة."],
"4-6":["في مثلثين فيهما ضلعان متطابقان، الزاويتان المحصورتان 80° و 60°: الضلع الثالث أطول في المثلث الذي زاويته 80°.","تطبيق النظرية دون التأكد من تطابق الضلعين."]};
var R=[[1,"مراجعة الفصل 1: التبرير والبرهان",74,82,[["يعتمد التبرير الاستقرائي على:",["الأنماط والملاحظات","المسلمات فقط"],0],["العبارة المكافئة دائمًا للشرطية الأصلية هي:",["العكس","المعاكس الإيجابي"],1],["مجموع قياسي زاويتين متتامتين:",["90°","180°"],0]]],
[2,"مراجعة الفصل 2: التوازي والتعامد",135,142,[["ميلا مستقيمين متوازيين:",["متساويان","حاصل ضربهما −1"],0],["مجموع الزاويتين المتحالفتين بين متوازيين:",["90°","180°"],1],["ميل المستقيم y = 3x − 2 هو:",["−2","3"],1]]],
[3,"مراجعة الفصل 3: المثلثات المتطابقة",202,210,[["مجموع زوايا المثلث:",["180°","360°"],0],["أي مما يلي لا يثبت التطابق؟",["SAS","SSA"],1],["زاويتا القاعدة في المثلث المتطابق الضلعين:",["متطابقتان","مختلفتان"],0]]],
[4,"مراجعة الفصل 4: العلاقات في المثلث",263,270,[["هل تكوّن الأطوال 2 و 3 و 6 مثلثًا؟",["نعم","لا"],1],["مركز الثقل يبعد عن الرأس:",["⅓ المتوسط","⅔ المتوسط"],1],["أول خطوة في البرهان غير المباشر:",["افتراض نقيض النتيجة","افتراض النتيجة"],0]]]];
/* ===== أدوات عامة: خلط بذرة ثابتة ===== */
function mk(seed){var s=seed>>>0;return function(){s=(s+0x6D2B79F5)>>>0;var t=s;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
function shuf(a,r){r=r||Math.random;for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1));var x=a[i];a[i]=a[j];a[j]=x}return a}
/* الأسئلة: كل سؤال له مفتاح (key) لتتبع الإتقان، وترتيب الخيارات يُخلط */
function Q(qs,keys,rng){var h="";qs.forEach(function(q,j){var ord=q[1].map(function(_,i){return i});shuf(ord,rng);h+='<div class="q" data-c="'+q[2]+'"'+(keys?' data-key="'+keys[j]+'"':'')+'><b>سؤال '+(j+1)+':</b> '+q[0];ord.forEach(function(k){h+='<button class="o" data-k="'+k+'">'+q[1][k]+'</button>'});h+='<div class="fb sc"></div></div>'});return h}
/* ===== الإتقان: ميداليات برونزية / فضية / ذهبية ===== */
var LI={};L.forEach(function(l){LI[l[1]]=l});
function keysL(l){return l[6].map(function(_,j){return l[1]+"#"+j})}
function keysR(r){return r[4].map(function(_,j){return"R"+r[0]+"#"+j})}
var M={};try{M=JSON.parse(localStorage.getItem("mastery")||"{}")}catch(e){M={}}
function svM(){try{localStorage.setItem("mastery",JSON.stringify(M))}catch(e){}}
var MD=[["○","لا توجد ميدالية بعد",""],["🥉","ميدالية برونزية","bronze"],["🥈","ميدالية فضية","silver"],["🥇","ميدالية ذهبية","gold"]];
/* يرجع {lv, att, good, twice, n} لدرس */
function stat(id){var l=LI[id],n=l[6].length,att=0,good=0,tw=0;for(var j=0;j<n;j++){var m=M[id+"#"+j];if(m){att++;if(m.ok){good++;if(m.st>=2)tw++}}}
  var lv=0;if(att===n){if(good===n&&tw===n)lv=3;else if(good===n)lv=2;else if(good*2>=n)lv=1}
  return{lv:lv,att:att,good:good,tw:tw,n:n}}
function lvl(id){return stat(id).lv}
function mmsg(id){var s=stat(id);
  if(s.lv===3)return"🏆 أتقنت هذا الدرس: كل الأسئلة صحيحة مرتين متتاليتين!";
  if(s.lv===2)return"🥈 ممتاز! للحصول على 🥇 أجب عن كل سؤال صحيحًا مرة ثانية (اضغط «إعادة المحاولة» أو جرّب الاختبار السريع).";
  if(s.lv===1)return"🥉 بداية جيدة! للحصول على 🥈 أجب عن جميع الأسئلة إجابة صحيحة.";
  if(s.att<s.n)return"أجب عن أسئلة الدرس لتحصل على 🥉 (أجبت عن "+s.att+" من "+s.n+").";
  return"أجوبتك الصحيحة أقل من النصف. شاهد الفيديو وراجع الأفكار ثم اضغط «إعادة المحاولة».";}
function medal(id){var d=MD[lvl(id)];return'<span class="medal '+d[2]+'" data-medal="'+id+'" title="'+d[1]+'" role="img" aria-label="'+d[1]+'">'+d[0]+'</span>'}

var $=function(i){return document.getElementById(i)};
var root=document.documentElement;
try{var t=localStorage.getItem("th");if(t)root.setAttribute("data-theme",t)}catch(e){}
$("th").onclick=function(){
  var dk=root.getAttribute("data-theme")?root.getAttribute("data-theme")==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
  var n=dk?"light":"dark";root.setAttribute("data-theme",n);
  try{localStorage.setItem("th",n)}catch(e){}
};
function render(){
  var a=+$("a").value,b=+$("b").value;
  if(a>b){var x=a;a=b;b=x}
  var ls=L.filter(function(l){return l[3]<=b&&l[4]>=a});
  var rs=R.filter(function(r){return r[2]<=b&&r[3]>=a});
  $("info").textContent=(ls.length||rs.length)?("الصفحات "+a+" – "+b+": "+ls.length+" درس"+(rs.length?" + "+rs.length+" مراجعة":"")):"لا يوجد محتوى في هذا النطاق. جرّب نطاقًا بين 12 و 270.";
  var h="";
  ls.forEach(function(l,i){
    h+=gch(l,i,ls)+'<section class="les" data-l="'+l[1]+'"><div class="ch">الفصل '+l[0]+' – '+CH[l[0]]+'</div><h2><span>'+medal(l[1])+'الدرس '+l[1]+': '+l[2]+'</span><span class="pg">ص '+l[3]+' – '+l[4]+'</span></h2>';
    h+='<details open><summary>📌 أهم الأفكار</summary><ul>'+l[5].map(function(p){return'<li>'+p+'</li>'}).join("")+'</ul></details>';
    var x=X[l[1]];
    if(x){h+='<details class="ex"><summary>✏️ مثال محلول</summary><p>'+x[0]+'</p></details><details class="er"><summary>⚠️ خطأ شائع</summary><p>'+x[1]+'</p></details>'}
    h+='<details open><summary>❓ أسئلة التدريب</summary><div class="qb" data-l="'+l[1]+'">'+Q(l[6],keysL(l))+'</div><div class="ms sc" data-l="'+l[1]+'">'+mmsg(l[1])+'</div><button data-retry="'+l[1]+'">🔄 إعادة المحاولة (ترتيب جديد للخيارات)</button></details><details><summary>✍️ ملاحظاتي على الدرس (بالقلم)</summary>'+pad(l[1])+'</details><details><summary>📜 قوانين الدرس</summary>'+lw(l[1])+'</details><label class="dn"><input type="checkbox" data-d="'+l[1]+'"'+(N["d_"+l[1]]?" checked":"")+'> ✅ أنهيت مذاكرة هذا الدرس</label></section>';
  });
  rs.forEach(function(r){
    h+='<section class="les rev"><div class="ch">الفصل '+r[0]+' – دليل الدراسة والمراجعة</div><h2><span>'+r[1]+'</span><span class="pg">ص '+r[2]+' – '+r[3]+'</span></h2><details open><summary>📝 أسئلة المراجعة</summary>'+Q(r[4],keysR(r))+'</details></section>';
  });
  $("out").innerHTML=h;
}

var N={};
try{N=JSON.parse(localStorage.getItem("notes")||"{}")}catch(e){N={}}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function sv(){try{localStorage.setItem("notes",JSON.stringify(N))}catch(e){}}
var LW=[["1-1","التخمين والمثال المضاد","التخمين عبارة مبنية على نمط وقد تكون خاطئة، ومثال مضاد واحد يكفي لإثبات خطئها."],["1-2","النفي","~p لها قيمة عكس قيمة p."],["1-2","الوصل p ∧ q","صحيح فقط إذا كانت p و q صحيحتين معًا."],["1-2","الفصل p ∨ q","صحيح إذا صحت إحداهما على الأقل، وخاطئ فقط إذا خطأتا معًا."],["1-3","العبارة الشرطية p → q","خاطئة فقط عندما تكون p صحيحة و q خاطئة."],["1-3","العكس والمعكوس والمعاكس الإيجابي","العكس: q → p. المعكوس: ~p → ~q. المعاكس الإيجابي: ~q → ~p وهو يكافئ العبارة الأصلية."],["1-3","الثنائية الشرطية p ↔ q","تصح إذا كانت العبارة الشرطية وعكسها صحيحتين معًا."],["1-4","قانون الفصل المنطقي","إذا كانت p → q صحيحة و p صحيحة فإن q صحيحة."],["1-4","قانون القياس المنطقي","إذا كانت p → q و q → r صحيحتين فإن p → r صحيحة."],["1-5","مسلمة المستقيم","يوجد مستقيم واحد فقط يمر بأي نقطتين مختلفتين."],["1-5","مسلمة المستوى","يوجد مستوى واحد فقط يمر بأي ثلاث نقاط ليست على استقامة واحدة."],["1-5","تقاطع المستويين","إذا تقاطع مستويان فتقاطعهما مستقيم."],["1-5","تقاطع مستقيمين","يتقاطع مستقيمان في نقطة واحدة على الأكثر."],["1-6","خواص المساواة","الانعكاس a=a، التماثل، التعدي، التعويض، الجمع، الطرح، الضرب، القسمة."],["1-6","خاصية التوزيع","a(b + c) = ab + ac"],["1-7","مسلمة جمع الأطوال","إذا وقعت B بين A و C فإن AB + BC = AC."],["1-7","تطابق القطع المستقيمة","علاقة انعكاسية ومتماثلة ومتعدية."],["1-8","مسلمة جمع الزوايا","إذا وقعت D داخل ∠ABC فإن m∠ABD + m∠DBC = m∠ABC."],["1-8","المتتامتان والمتكاملتان","مجموع المتتامتين 90° ومجموع المتكاملتين 180°."],["1-8","الزوج الخطي","زاويتان تشكلان زوجًا خطيًا متكاملتان."],["1-8","الزاويتان المتقابلتان بالرأس","متطابقتان."],["2-2","المستقيمان المتوازيان والقاطع","الزوايا المتناظرة والمتبادلة داخليًا والمتبادلة خارجيًا متطابقة."],["2-2","الزاويتان المتحالفتان","متكاملتان (مجموعهما 180°)."],["2-3","عكس نظريات التوازي","إذا تطابقت زاويتان متناظرتان أو متبادلتان، أو تكاملت متحالفتان، فالمستقيمان متوازيان."],["2-3","مستقيمان عموديان على ثالث","في المستوى الواحد هما متوازيان."],["2-4","قانون الميل","m = (y₂ − y₁) ÷ (x₂ − x₁)"],["2-4","التوازي والتعامد","المتوازيان: m₁ = m₂. المتعامدان: m₁ × m₂ = −1."],["2-5","صيغة الميل والمقطع","y = mx + b"],["2-5","صيغة الميل ونقطة","y − y₁ = m(x − x₁)"],["2-5","المستقيمات الخاصة","الأفقي y=c ميله 0، والرأسي x=c ميله غير معرّف."],["2-6","المسافة بين نقطة ومستقيم","طول القطعة العمودية من النقطة إلى المستقيم."],["2-6","المسافة بين متوازيين","تُقاس على قطعة عمودية عليهما معًا."],["3-2","مجموع زوايا المثلث","180°."],["3-2","نظرية الزاوية الخارجية","قياسها = مجموع الداخليتين البعيدتين."],["3-2","زاويتا المثلث القائم","الحادتان متتامتان."],["3-3","CPCTC","الأجزاء المتناظرة في مثلثين متطابقين متطابقة."],["3-4","SSS","ثلاثة أضلاع متطابقة تعني مثلثين متطابقين."],["3-4","SAS","ضلعان والزاوية المحصورة بينهما."],["3-5","ASA","زاويتان والضلع المحصور بينهما."],["3-5","AAS","زاويتان وضلع غير محصور."],["3-6","المثلث المتطابق الضلعين","زاويتا القاعدة متطابقتان، والعكس صحيح."],["3-6","المثلث المتطابق الأضلاع","متطابق الزوايا وقياس كل زاوية 60°."],["3-7","صيغة المسافة","d = √[(x₂−x₁)² + (y₂−y₁)²]"],["3-7","صيغة نقطة المنتصف","M = ((x₁+x₂)/2 , (y₁+y₂)/2)"],["4-1","العمود المنصف","كل نقطة عليه تبعد البعد نفسه عن طرفي القطعة، والعكس صحيح."],["4-1","منصف الزاوية","كل نقطة عليه تبعد البعد نفسه عن ضلعي الزاوية، والعكس صحيح."],["4-1","نقاط التلاقي","الأعمدة المنصفة تلتقي في مركز الدائرة المارة بالرؤوس، ومنصفات الزوايا في مركز الدائرة الداخلية."],["4-2","مركز الثقل","نقطة تلاقي المتوسطات، وتبعد ⅔ طول المتوسط عن الرأس."],["4-2","الارتفاعات","ارتفاعات المثلث تلتقي في نقطة واحدة."],["4-3","الزاوية والضلع المقابل","الزاوية الأكبر تقابل الضلع الأطول والعكس."],["4-3","الزاوية الخارجية","أكبر من كل من الداخليتين البعيدتين."],["4-4","خطوات البرهان غير المباشر","1) افترض نقيض النتيجة. 2) استنتج حتى تصل إلى تناقض. 3) الافتراض خاطئ فالنتيجة صحيحة."],["4-5","متباينة المثلث","مجموع طولي أي ضلعين أكبر من طول الضلع الثالث."],["4-6","نظرية المفصلة","ضلعان متطابقان: الزاوية المحصورة الأكبر تقابل ضلعًا ثالثًا أطول."],["4-6","عكس المفصلة","الضلع الثالث الأطول يقابل زاوية محصورة أكبر."]];
var SY=[["A, B, C","حروف كبيرة تسمّي النقاط ورؤوس المثلث."],["ℓ , n","حروف صغيرة تسمّي المستقيمات."],["t","القاطع: مستقيم يقطع مستقيمين أو أكثر."],["AB","القطعة المستقيمة بين A و B، وتعني أيضًا طولها."],["∠ABC","زاوية رأسها B (الحرف الأوسط)."],["m∠ABC","قياس الزاوية بالدرجات."],["△ABC","مثلث رؤوسه A و B و C."],["≅","متطابق (الشكل والقياس نفسهما)."],["= , ≠","يساوي / لا يساوي."],["∥","يوازي، مثل ℓ ∥ n."],["⊥","عمودي على (يصنع زاوية 90°)."],["p, q, r","عبارات منطقية (جمل صحيحة أو خاطئة)."],["~p","نفي p (ليست p)."],["∧ , ∨","و (وصل) ، أو (فصل)."],["→","شرطية: إذا ... فإن ..."],["↔","ثنائية شرطية: ... إذا وفقط إذا ..."],["∴","إذن (ينتج عن ذلك)."],["x","متغير مجهول، وفي المستوى الإحداثي هو الإحداثي السيني (الأفقي)."],["y","متغير، وفي المستوى الإحداثي هو الإحداثي الصادي (الرأسي)."],["(x, y)","زوج مرتب يحدد موقع نقطة."],["(x₁, y₁) , (x₂, y₂)","إحداثيات نقطتين مختلفتين."],["m","ميل المستقيم = التغير الرأسي ÷ التغير الأفقي."],["b","المقطع الصادي: قيمة y عندما x = 0."],["d","المسافة بين نقطتين."],["M","نقطة المنتصف."],["O","نقطة الأصل (0, 0)."],["S , A","في SSS و SAS و ASA و AAS: S ضلع (Side) و A زاوية (Angle)."],["CPCTC","الأجزاء المتناظرة في المثلثين المتطابقين متطابقة."],["°","درجة (وحدة قياس الزوايا)."],["√","الجذر التربيعي."],["< , >","أصغر من / أكبر من."]];
function lw(id){var a=LW.filter(function(x){return x[0]===id});return a.length?a.map(function(x){return'<p><b>'+x[1]+':</b> '+x[2]+'</p>'}).join(""):'<p class="sc">لا توجد قوانين مستقلة في هذا الدرس.</p>'}
function pad(id){return'<div class="pad" data-id="'+id+'"><div class="tb"><button class="sw on" data-c="#111" style="background:#111"></button><button class="sw" data-c="#1d4ed8" style="background:#1d4ed8"></button><button class="sw" data-c="#dc2626" style="background:#dc2626"></button><button class="sw" data-c="#16a34a" style="background:#16a34a"></button><button data-e="1">🧽 ممحاة</button><button data-u="1">↩️ تراجع</button><button data-x="1">🗑️ مسح</button></div><canvas></canvas></div>'}
function initPad(p){
  if(p.dataset.ok)return;p.dataset.ok=1;
  var cv=p.querySelector("canvas"),id=p.dataset.id,dpr=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;
  cv.width=w*dpr;cv.height=h*dpr;var cx=cv.getContext("2d");cx.scale(dpr,dpr);cx.lineCap="round";cx.lineJoin="round";
  var col="#111",er=false,dr=false,lx=0,ly=0,hist=[];
  function blank(){var d=cx.getImageData(0,0,cv.width,cv.height).data;for(var i=3;i<d.length;i+=4)if(d[i])return false;return true}
  function save(){if(blank())delete N["p_"+id];else N["p_"+id]=cv.toDataURL();sv()}
  function put(s,cb){var im=new Image();im.onload=function(){cx.globalCompositeOperation="source-over";cx.clearRect(0,0,w,h);cx.drawImage(im,0,0,w,h);if(cb)cb()};im.src=s}
  if(N["p_"+id])put(N["p_"+id]);
  function seg(e,x,y){cx.globalCompositeOperation=er?"destination-out":"source-over";cx.strokeStyle=col;var pr=e.pointerType==="pen"?(e.pressure||.5):.5;cx.lineWidth=er?22:1.2+pr*3;cx.beginPath();cx.moveTo(lx,ly);cx.lineTo(x,y);cx.stroke();lx=x;ly=y}
  function pos(e){var r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]}
  cv.onpointerdown=function(e){e.preventDefault();dr=true;cv.setPointerCapture(e.pointerId);hist.push(cv.toDataURL());if(hist.length>12)hist.shift();var q=pos(e);lx=q[0];ly=q[1];seg(e,lx+.01,ly)};
  cv.onpointermove=function(e){if(!dr)return;var q=pos(e);seg(e,q[0],q[1])};
  cv.onpointerup=cv.onpointercancel=function(){if(dr){dr=false;save()}};
  p.querySelector(".tb").onclick=function(e){var b=e.target.closest("button");if(!b)return;
    if(b.dataset.c||b.dataset.e){p.querySelectorAll(".tb button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");er=!!b.dataset.e;if(b.dataset.c)col=b.dataset.c}
    else if(b.dataset.u){var s=hist.pop();if(s)put(s,save)}
    else if(b.dataset.x){hist.push(cv.toDataURL());cx.globalCompositeOperation="source-over";cx.clearRect(0,0,w,h);save()}};
}
document.addEventListener("toggle",function(e){var d=e.target;if(d.open&&d.querySelectorAll)d.querySelectorAll(".pad").forEach(initPad)},true);
$("gp").innerHTML=pad("gen");
document.addEventListener("change",function(e){var t=e.target;if(t.dataset&&t.dataset.d){N["d_"+t.dataset.d]=t.checked;sv();prog()}});
prog();
function pdf(){
  var J=window.jspdf&&window.jspdf.jsPDF;if(!J){alert("تعذّر تحميل مكتبة PDF. تأكد من الاتصال بالإنترنت.");return}
  var ids=Object.keys(N).filter(function(k){return k.indexOf("p_")===0&&N[k]});
  if(!ids.length){alert("لا توجد ملاحظات مكتوبة بالقلم بعد.");return}
  var order=["gen"].concat(L.map(function(l){return l[1]}));
  ids.sort(function(a,b){return order.indexOf(a.slice(2))-order.indexOf(b.slice(2))});
  var imgs={};
  Promise.all(ids.map(function(k){return new Promise(function(res){var im=new Image();im.onload=function(){imgs[k]=im;res()};im.src=N[k]})})).then(function(){
    var doc=new J({unit:"pt",format:"a4"}),first=true;
    ids.forEach(function(k){
      var im=imgs[k],id=k.slice(2),ls=L.filter(function(l){return l[1]===id})[0];
      var t=id==="gen"?"ملاحظات عامة":"ملاحظاتي – الدرس "+id+": "+(ls?ls[2]:"");
      var c=document.createElement("canvas");c.width=1240;c.height=1754;var x=c.getContext("2d");
      x.fillStyle="#fff";x.fillRect(0,0,1240,1754);x.direction="rtl";x.textAlign="right";
      x.fillStyle="#1b2333";x.font="bold 40px Cairo,Tahoma,Arial";x.fillText(t,1170,110);
      x.fillStyle="#666";x.font="26px Cairo,Tahoma,Arial";x.fillText("الرياضيات 1-1 · فارس البدر",1170,160);
      var w=1100,h=w*im.height/im.width;x.strokeStyle="#ccc";x.strokeRect(70,200,w,h);x.drawImage(im,70,200,w,h);
      if(!first)doc.addPage();first=false;
      doc.addImage(c.toDataURL("image/jpeg",.92),"JPEG",0,0,595.28,841.89);
    });
    doc.save("math-notes.pdf");
  });
}
$("pd").onclick=pdf;
function lf(){var q=$("ls").value.trim();$("ll").innerHTML=LW.filter(function(x){return!q||(x[1]+x[2]).indexOf(q)>-1}).map(function(x){return'<p><span class="pg">'+x[0]+'</span> <b>'+x[1]+':</b> '+x[2]+'</p>'}).join("")||'<p class="sc">لا توجد نتائج.</p>'}
function sf(){var q=$("ss").value.trim();var r=SY.filter(function(x){return!q||(x[0]+x[1]).indexOf(q)>-1}).map(function(x){return'<tr><td dir="ltr">'+x[0]+'</td><td>'+x[1]+'</td></tr>'}).join("");$("sl").innerHTML=r?'<table>'+r+'</table>':'<p class="sc">لا توجد نتائج.</p>'}
$("ls").oninput=lf;$("ss").oninput=sf;lf();sf();
var tm=1500,ti=null,br=false,lk=false,lv=0,wl=null;
function gm(id,d){var v=parseInt($(id).value);return v>0?Math.min(v,180):d}
function td(){$("tt").textContent=("0"+Math.floor(tm/60)).slice(-2)+":"+("0"+tm%60).slice(-2)}
function lab(){$("tl").textContent=br?"☕ وقت الراحة ("+gm("tmb",5)+" دقائق)":"📚 وقت المذاكرة ("+gm("tms",25)+" دقيقة)"}
function setT(){if(!ti){tm=(br?gm("tmb",5):gm("tms",25))*60;lab();td()}}
$("tms").oninput=$("tmb").oninput=setT;
function fsr(){try{var p=document.documentElement.requestFullscreen();if(p&&p.catch)p.catch(function(){})}catch(e){}}
function lockOn(){lk=true;lv=0;fsr();try{if(navigator.wakeLock)navigator.wakeLock.request("screen").then(function(s){wl=s}).catch(function(){})}catch(e){}$("lm").textContent="🔒 قفل التركيز يعمل حتى ينتهي وقت المذاكرة."}
function lockOff(m){lk=false;try{if(wl){wl.release();wl=null}}catch(e){}try{if(document.fullscreenElement)document.exitFullscreen()}catch(e){}$("lm").textContent=m||""}
window.addEventListener("beforeunload",function(e){if(lk){e.preventDefault();e.returnValue=""}});
document.addEventListener("visibilitychange",function(){if(!lk)return;if(document.hidden){lv++}else{$("lm").textContent="⚠️ غادرت الصفحة "+lv+" مرة أثناء وقت التركيز. ارجع للمذاكرة! 💪";if(!document.fullscreenElement)fsr()}});
$("ts").onclick=function(){
  if(ti){if(lk&&!confirm("إيقاف المؤقت سينهي قفل التركيز. هل أنت متأكد؟"))return;clearInterval(ti);ti=null;lockOff("");this.textContent="▶️ ابدأ";return}
  this.textContent="⏸ إيقاف";
  if($("lk").checked&&!br)lockOn();
  ti=setInterval(function(){tm--;if(tm<=0){var was=!br;br=!br;tm=(br?gm("tmb",5):gm("tms",25))*60;lab();if(was&&lk)lockOff("✅ انتهى وقت المذاكرة وتم فك القفل. خذ راحة!")}td()},1000)};
$("tr").onclick=function(){clearInterval(ti);ti=null;br=false;lockOff("");$("ts").textContent="▶️ ابدأ";setT()};
setT();
var ci=$("ci");
function deg(f){return function(x){return f(x*Math.PI/180)}}
function ev(){
  var s=ci.value.replace(/\s/g,"").replace(/×/g,"*").replace(/÷/g,"/").replace(/√/g,"sqrt").replace(/π/g,"PI").replace(/\^/g,"**");
  if(!s){$("cr").textContent="";return}
  if(s.replace(/sin|cos|tan|sqrt|PI/g,"").search(/[^0-9+\-*\/().%]/)>-1){$("cr").textContent="تعبير غير صالح";return}
  try{var r=new Function("sin","cos","tan","sqrt","PI","return ("+s+")")(deg(Math.sin),deg(Math.cos),deg(Math.tan),Math.sqrt,Math.PI);
    $("cr").textContent=isFinite(r)?"= "+Math.round(r*1e10)/1e10:"تعبير غير صالح"}catch(e){$("cr").textContent="تعبير غير صالح"}
}
ci.onkeydown=function(e){if(e.key==="Enter")ev()};
["7","8","9","÷","C","4","5","6","×","⌫","1","2","3","-","(","0",".","+","^",")","√(","π","sin(","cos(","tan("].forEach(function(k){
  var b=document.createElement("button");b.textContent=k;
  b.onclick=function(){if(k==="C"){ci.value="";$("cr").textContent=""}else if(k==="⌫")ci.value=ci.value.slice(0,-1);else ci.value+=k;if(k!=="C")ev()};
  $("kp").appendChild(b)
});
var eq=document.createElement("button");eq.textContent="=";eq.className="pri";eq.style.gridColumn="1/-1";eq.onclick=ev;$("kp").appendChild(eq);
$("go").onclick=render;
CR.forEach(function(r,i){
  if(!r)return;
  var c=document.createElement("button");c.className="chip";c.textContent="الفصل "+i;
  c.onclick=function(){$("a").value=r[0]+(i===1?1:0);$("b").value=r[1];render()};
  $("chips").appendChild(c);
});
/* ===== GeoGebra: لوحة فارغة لكل فصل رئيسي، يستخدمها الطالب بحرية ===== */
function gch(l,i,ls){var c=l[0];if(i&&ls[i-1][0]===c)return"";
  return'<details class="les ggd" data-ch="'+c+'"><summary>📐 GeoGebra – الفصل '+c+': '+CH[c]+'</summary><p class="sc">لوحة حرة: ارسم نقاطًا ومستقيمات ومثلثات وقِس الزوايا والأطوال بأدوات GeoGebra، أو اكتب الأوامر في شريط الإدخال.</p><div class="gg"></div><a class="lk" target="_blank" rel="noopener" href="https://www.geogebra.org/classic">↗ افتح GeoGebra كاملًا</a></details>'}
function ggLoad(cb){if(window.GGBApplet)return cb();var s=document.createElement("script");s.src="https://www.geogebra.org/apps/deployggb.js";s.onload=function(){cb()};s.onerror=function(){cb(1)};document.head.appendChild(s)}
var ggN=0;
function ggOpen(d){var box=d.querySelector(".gg");if(box.dataset.ok)return;box.dataset.ok=1;box.textContent="⏳ جارٍ تحميل GeoGebra…";
  ggLoad(function(err){if(err||!window.GGBApplet){box.dataset.ok="";box.innerHTML='<p class="sc">تعذّر تحميل GeoGebra (تحتاج اتصالًا بالإنترنت). يمكنك فتحه من الرابط أدناه.</p>';return}
    box.innerHTML="";
    var wrap=document.createElement("div");wrap.className="ggw";
    var bar=document.createElement("div");bar.className="ggb";
    var btn=document.createElement("button");btn.type="button";btn.textContent="⛶ ملء الشاشة";bar.appendChild(btn);
    var hd=document.createElement("div");hd.className="gghd";hd.id="ggb_"+(++ggN);
    wrap.appendChild(bar);wrap.appendChild(hd);box.appendChild(wrap);
    var api=null,nat=false;
    function isFs(){return wrap.classList.contains("fs")}
    function fit(){if(!api)return;var w,h;
      if(isFs()){w=Math.floor(wrap.clientWidth||window.innerWidth);h=Math.floor((wrap.clientHeight||window.innerHeight)-bar.offsetHeight)}
      else{w=Math.max(280,Math.min(box.clientWidth||800,860));h=w<520?460:500}
      if(w>0&&h>0)try{api.setSize(w,h)}catch(e){}}
    function enter(){wrap.classList.add("fs");btn.textContent="✕ خروج من ملء الشاشة";document.body.style.overflow="hidden";
      if(!lk&&wrap.requestFullscreen){try{var p=wrap.requestFullscreen();nat=true;if(p&&p.catch)p.catch(function(){nat=false})}catch(e){nat=false}}
      setTimeout(fit,50);setTimeout(fit,300)}
    function leave(){wrap.classList.remove("fs");btn.textContent="⛶ ملء الشاشة";document.body.style.overflow="";
      if(nat&&document.fullscreenElement===wrap){try{document.exitFullscreen()}catch(e){}}nat=false;
      setTimeout(fit,50);setTimeout(fit,300)}
    btn.addEventListener("click",function(){isFs()?leave():enter()});
    document.addEventListener("fullscreenchange",function(){if(nat&&!document.fullscreenElement&&isFs())leave();else if(isFs())setTimeout(fit,100)});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&isFs())leave()});
    window.addEventListener("resize",function(){setTimeout(fit,100)});
    window.addEventListener("orientationchange",function(){setTimeout(fit,300)});
    var w0=Math.max(280,Math.min(box.clientWidth||800,860)),h0=w0<520?460:500;
    new GGBApplet({appName:"classic",width:w0,height:h0,perspective:"AG",showToolBar:true,showAlgebraInput:true,showMenuBar:false,showResetIcon:true,enableRightClick:true,enableUndoRedo:true,showFullscreenButton:false,language:"ar",
      appletOnLoad:function(a){api=a;try{a.setPerspective("AG")}catch(e){}setTimeout(fit,100)}},true).inject(hd.id)})}
document.addEventListener("toggle",function(e){var d=e.target;if(d.open&&d.querySelectorAll)d.querySelectorAll(".pad").forEach(initPad)},true);
$("gp").innerHTML=pad("gen");
document.addEventListener("change",function(e){var t=e.target;if(t.dataset&&t.dataset.d){N["d_"+t.dataset.d]=t.checked;sv();prog()}});
prog();
function pdf(){
  var J=window.jspdf&&window.jspdf.jsPDF;if(!J){alert("تعذّر تحميل مكتبة PDF. تأكد من الاتصال بالإنترنت.");return}
  var ids=Object.keys(N).filter(function(k){return k.indexOf("p_")===0&&N[k]});
  if(!ids.length){alert("لا توجد ملاحظات مكتوبة بالقلم بعد.");return}
  var order=["gen"].concat(L.map(function(l){return l[1]}));
  ids.sort(function(a,b){return order.indexOf(a.slice(2))-order.indexOf(b.slice(2))});
  var imgs={};
  Promise.all(ids.map(function(k){return new Promise(function(res){var im=new Image();im.onload=function(){imgs[k]=im;res()};im.src=N[k]})})).then(function(){
    var doc=new J({unit:"pt",format:"a4"}),first=true;
    ids.forEach(function(k){
      var im=imgs[k],id=k.slice(2),ls=L.filter(function(l){return l[1]===id})[0];
      var t=id==="gen"?"ملاحظات عامة":"ملاحظاتي – الدرس "+id+": "+(ls?ls[2]:"");
      var c=document.createElement("canvas");c.width=1240;c.height=1754;var x=c.getContext("2d");
      x.fillStyle="#fff";x.fillRect(0,0,1240,1754);x.direction="rtl";x.textAlign="right";
      x.fillStyle="#1b2333";x.font="bold 40px Cairo,Tahoma,Arial";x.fillText(t,1170,110);
      x.fillStyle="#666";x.font="26px Cairo,Tahoma,Arial";x.fillText("الرياضيات 1-1 · فارس البدر",1170,160);
      var w=1100,h=w*im.height/im.width;x.strokeStyle="#ccc";x.strokeRect(70,200,w,h);x.drawImage(im,70,200,w,h);
      if(!first)doc.addPage();first=false;
      doc.addImage(c.toDataURL("image/jpeg",.92),"JPEG",0,0,595.28,841.89);
    });
    doc.save("math-notes.pdf");
  });
}
$("pd").onclick=pdf;
function lf(){var q=$("ls").value.trim();$("ll").innerHTML=LW.filter(function(x){return!q||(x[1]+x[2]).indexOf(q)>-1}).map(function(x){return'<p><span class="pg">'+x[0]+'</span> <b>'+x[1]+':</b> '+x[2]+'</p>'}).join("")||'<p class="sc">لا توجد نتائج.</p>'}
function sf(){var q=$("ss").value.trim();var r=SY.filter(function(x){return!q||(x[0]+x[1]).indexOf(q)>-1}).map(function(x){return'<tr><td dir="ltr">'+x[0]+'</td><td>'+x[1]+'</td></tr>'}).join("");$("sl").innerHTML=r?'<table>'+r+'</table>':'<p class="sc">لا توجد نتائج.</p>'}
$("ls").oninput=lf;$("ss").oninput=sf;lf();sf();
var tm=1500,ti=null,br=false,lk=false,lv=0,wl=null;
function gm(id,d){var v=parseInt($(id).value);return v>0?Math.min(v,180):d}
function td(){$("tt").textContent=("0"+Math.floor(tm/60)).slice(-2)+":"+("0"+tm%60).slice(-2)}
function lab(){$("tl").textContent=br?"☕ وقت الراحة ("+gm("tmb",5)+" دقائق)":"📚 وقت المذاكرة ("+gm("tms",25)+" دقيقة)"}
function setT(){if(!ti){tm=(br?gm("tmb",5):gm("tms",25))*60;lab();td()}}
$("tms").oninput=$("tmb").oninput=setT;
function fsr(){try{var p=document.documentElement.requestFullscreen();if(p&&p.catch)p.catch(function(){})}catch(e){}}
function lockOn(){lk=true;lv=0;fsr();try{if(navigator.wakeLock)navigator.wakeLock.request("screen").then(function(s){wl=s}).catch(function(){})}catch(e){}$("lm").textContent="🔒 قفل التركيز يعمل حتى ينتهي وقت المذاكرة."}
function lockOff(m){lk=false;try{if(wl){wl.release();wl=null}}catch(e){}try{if(document.fullscreenElement)document.exitFullscreen()}catch(e){}$("lm").textContent=m||""}
window.addEventListener("beforeunload",function(e){if(lk){e.preventDefault();e.returnValue=""}});
document.addEventListener("visibilitychange",function(){if(!lk)return;if(document.hidden){lv++}else{$("lm").textContent="⚠️ غادرت الصفحة "+lv+" مرة أثناء وقت التركيز. ارجع للمذاكرة! 💪";if(!document.fullscreenElement)fsr()}});
$("ts").onclick=function(){
  if(ti){if(lk&&!confirm("إيقاف المؤقت سينهي قفل التركيز. هل أنت متأكد؟"))return;clearInterval(ti);ti=null;lockOff("");this.textContent="▶️ ابدأ";return}
  this.textContent="⏸ إيقاف";
  if($("lk").checked&&!br)lockOn();
  ti=setInterval(function(){tm--;if(tm<=0){var was=!br;br=!br;tm=(br?gm("tmb",5):gm("tms",25))*60;lab();if(was&&lk)lockOff("✅ انتهى وقت المذاكرة وتم فك القفل. خذ راحة!")}td()},1000)};
$("tr").onclick=function(){clearInterval(ti);ti=null;br=false;lockOff("");$("ts").textContent="▶️ ابدأ";setT()};
setT();
var ci=$("ci");
function deg(f){return function(x){return f(x*Math.PI/180)}}
function ev(){
  var s=ci.value.replace(/\s/g,"").replace(/×/g,"*").replace(/÷/g,"/").replace(/√/g,"sqrt").replace(/π/g,"PI").replace(/\^/g,"**");
  if(!s){$("cr").textContent="";return}
  if(s.replace(/sin|cos|tan|sqrt|PI/g,"").search(/[^0-9+\-*\/().%]/)>-1){$("cr").textContent="تعبير غير صالح";return}
  try{var r=new Function("sin","cos","tan","sqrt","PI","return ("+s+")")(deg(Math.sin),deg(Math.cos),deg(Math.tan),Math.sqrt,Math.PI);
    $("cr").textContent=isFinite(r)?"= "+Math.round(r*1e10)/1e10:"تعبير غير صالح"}catch(e){$("cr").textContent="تعبير غير صالح"}
}
ci.onkeydown=function(e){if(e.key==="Enter")ev()};
["7","8","9","÷","C","4","5","6","×","⌫","1","2","3","-","(","0",".","+","^",")","√(","π","sin(","cos(","tan("].forEach(function(k){
  var b=document.createElement("button");b.textContent=k;
  b.onclick=function(){if(k==="C"){ci.value="";$("cr").textContent=""}else if(k==="⌫")ci.value=ci.value.slice(0,-1);else ci.value+=k;if(k!=="C")ev()};
  $("kp").appendChild(b)
});
var eq=document.createElement("button");eq.textContent="=";eq.className="pri";eq.style.gridColumn="1/-1";eq.onclick=ev;$("kp").appendChild(eq);
$("go").onclick=render;
CR.forEach(function(r,i){
  if(!r)return;
  var c=document.createElement("button");c.className="chip";c.textContent="الفصل "+i;
  c.onclick=function(){$("a").value=r[0]+(i===1?1:0);$("b").value=r[1];render()};
  $("chips").appendChild(c);
});
/* ===== GeoGebra: لوحة فارغة لكل فصل رئيسي، يستخدمها الطالب بحرية ===== */
function gch(l,i,ls){var c=l[0];if(i&&ls[i-1][0]===c)return"";
  return'<details class="les ggd" data-ch="'+c+'"><summary>📐 GeoGebra – الفصل '+c+': '+CH[c]+'</summary><p class="sc">لوحة حرة: ارسم نقاطًا ومستقيمات ومثلثات وقِس الزوايا والأطوال بأدوات GeoGebra، أو اكتب الأوامر في شريط الإدخال.</p><div class="gg"></div><a class="lk" target="_blank" rel="noopener" href="https://www.geogebra.org/classic">↗ افتح GeoGebra كاملًا</a></details>'}
function ggLoad(cb){if(window.GGBApplet)return cb();var s=document.createElement("script");s.src="https://www.geogebra.org/apps/deployggb.js";s.onload=function(){cb()};s.onerror=function(){cb(1)};document.head.appendChild(s)}
var ggN=0;
function ggOpen(d){var box=d.querySelector(".gg");if(box.dataset.ok)return;box.dataset.ok=1;box.textContent="⏳ جارٍ تحميل GeoGebra…";
  ggLoad(function(err){if(err||!window.GGBApplet){box.dataset.ok="";box.innerHTML='<p class="sc">تعذّر تحميل GeoGebra (تحتاج اتصالًا بالإنترنت). يمكنك فتحه من الرابط أدناه.</p>';return}
    box.innerHTML="";var hd=document.createElement("div");hd.id="ggb_"+(++ggN);box.appendChild(hd);
    var w=Math.max(280,Math.min(box.clientWidth||800,860)),h=w<520?420:480;
    new GGBApplet({appName:"classic",width:w,height:h,perspective:"G",showToolBar:true,showAlgebraInput:true,showMenuBar:false,showResetIcon:true,enableRightClick:true,showFullscreenButton:true,language:"ar"},true).inject(hd.id)})}
document.addEventListener("toggle",function(e){var d=e.target;if(d&&d.classList&&d.classList.contains("ggd")&&d.open)ggOpen(d)},true);
/* ===== تحديث الميداليات ===== */
function toast(m){var t=$("toast");if(!t){t=document.createElement("div");t.id="toast";t.setAttribute("role","status");document.body.appendChild(t)}t.textContent=m;t.hidden=false;clearTimeout(t._t);t._t=setTimeout(function(){t.hidden=true},3200)}
function paint(id,pop){var d=MD[lvl(id)];document.querySelectorAll('[data-medal="'+id+'"]').forEach(function(e){e.className="medal "+d[2]+(pop?" pop":"");e.textContent=d[0];e.title=d[1];e.setAttribute("aria-label",d[1])});
  document.querySelectorAll('.ms[data-l="'+id+'"]').forEach(function(e){e.textContent=mmsg(id)})}
function rec(key,ok){var m=M[key]||{n:0,ok:0,st:0};m.n++;m.ok=ok?1:0;m.st=ok?m.st+1:0;M[key]=m;svM();var id=key.split("#")[0];if(!LI[id])return;
  var before=window._lv&&window._lv[id]!=null?window._lv[id]:0;paint(id,false);var now=lvl(id);
  window._lv=window._lv||{};window._lv[id]=now;
  if(now>before){paint(id,true);toast(MD[now][0]+" حصلت على "+MD[now][1]+" في الدرس "+id+"!")}
  board();prog()}
function snapLv(){window._lv={};L.forEach(function(l){window._lv[l[1]]=lvl(l[1])})}
function board(){var h="";[1,2,3,4].forEach(function(c){h+="<h4>الفصل "+c+" – "+CH[c]+"</h4>";L.forEach(function(l){if(l[0]===c)h+='<button data-go="'+l[1]+'">'+medal(l[1])+" "+l[1]+" "+l[2]+"</button>"})});
  var b=$("bl");if(b)b.innerHTML=h}
function prog(){var n=L.filter(function(l){return N["d_"+l[1]]}).length,c=[0,0,0,0];L.forEach(function(l){c[lvl(l[1])]++});
  $("pt").textContent="تقدّمك: أنهيت "+n+" من "+L.length+" درسًا  |  🥇 "+c[3]+"  🥈 "+c[2]+"  🥉 "+c[1];$("pb").style.width=(n/L.length*100)+"%"}
/* ===== معالجة الإجابات (دروس + مراجعة + اختبار سريع) ===== */
function onAns(e){var o=e.target.closest(".o");if(!o)return;var q=o.parentNode;if(q.dataset.done)return;q.dataset.done=1;
  var c=+q.dataset.c,k=+o.dataset.k,ok=k===c;
  q.querySelectorAll(".o").forEach(function(x){if(+x.dataset.k===c)x.classList.add("r")});if(!ok)o.classList.add("w");
  q.querySelector(".fb").textContent=ok?"✅ إجابة صحيحة!":"❌ الإجابة الصحيحة موضّحة باللون الأخضر.";
  if(q.dataset.key)rec(q.dataset.key,ok);
  if(QZ&&q.closest("#qz")){QZ.ans++;if(ok)QZ.score++;$("qs").textContent="النتيجة: "+QZ.score+" / "+QZ.n;if(QZ.ans===QZ.n)finish()}}
$("out").onclick=onAns;$("qz").onclick=onAns;
/* ===== الاختبار السريع + تحدَّ صديقًا ===== */
var QZ=null;
function nm(){var e=$("pnq");return((e&&e.value)||$("pn").value||"").trim().slice(0,20)||"طالب"}
function svName(v){$("pn").value=v;try{localStorage.setItem("pname",v)}catch(e){}}
function better(a,b){return a[1]>b[1]||(a[1]===b[1]&&a[2]<b[2])}
function cmp(a,b){return better(a,b)?-1:better(b,a)?1:0}
function pool(a,b){var p=[];L.forEach(function(l){if(l[3]<=b&&l[4]>=a)l[6].forEach(function(q,j){p.push({q:q,k:l[1]+"#"+j})})});R.forEach(function(r){if(r[2]<=b&&r[3]>=a)r[4].forEach(function(q,j){p.push({q:q,k:"R"+r[0]+"#"+j})})});return p}
function quiz(c){var a,b,seed;
  if(c){a=c.a;b=c.b;seed=c.s}else{a=+$("a").value;b=+$("b").value;if(a>b){var t=a;a=b;b=t}seed=Math.floor(Math.random()*900000)+100000}
  var p=pool(a,b),r=mk(seed);shuf(p,r);p=p.slice(0,10);var z=$("qz");
  if(!p.length){QZ=null;z.innerHTML='<p class="sc">لا توجد أسئلة في هذا النطاق.</p>';return}
  QZ={a:a,b:b,s:seed,n:p.length,score:0,ans:0,t0:Date.now(),t:c?c.t:[]};
  var top=QZ.t[0];
  z.innerHTML='<section class="les rev"><h2><span>🎯 اختبار سريع'+(top?" – تحدّي "+esc(top[0]):"")+'</span><span class="pg" id="qs">النتيجة: 0 / '+p.length+'</span></h2><p class="sc"><label>اسمك في لوحة الصدارة: <input id="pnq" class="nm" maxlength="20" placeholder="اسمك" value="'+esc(($("pn").value||"").trim())+'" oninput="svName(this.value)"></label></p><p class="sc">الصفحات '+a+' – '+b+(top?" · أعلى نتيجة حاليًا: "+esc(top[0])+" "+top[1]+" في "+top[2]+" ث":"")+' · أنهِ الأسئلة ثم اضغط «تحدَّ صديقًا».</p>'+Q(p.map(function(x){return x.q}),p.map(function(x){return x.k}),r)+'<div id="qr"></div></section>';
  z.scrollIntoView({behavior:"smooth"})}
function enc(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}
function dec(s){try{s=s.replace(/-/g,"+").replace(/_/g,"/");while(s.length%4)s+="=";var o=JSON.parse(decodeURIComponent(escape(atob(s))));
  if(o&&isFinite(o.a)&&isFinite(o.b)&&isFinite(o.s)&&Array.isArray(o.t)&&o.t.length){o.t=o.t.slice(0,8).map(function(x){return[String(x[0]).slice(0,20),+x[1]||0,+x[2]||0]});return o}}catch(e){}return null}
function finish(){var secs=Math.max(1,Math.round((Date.now()-QZ.t0)/1000)),me=[nm(),QZ.score,secs],list=QZ.t.map(function(x){return x.slice()}),best=list[0];
  var ix=-1;list.forEach(function(x,i){if(x[0]===me[0])ix=i});
  if(ix<0)list.push(me);else if(better(me,list[ix]))list[ix]=me;else me=list[ix];
  list.sort(cmp);list=list.slice(0,8);QZ.list=list;QZ.me=me;
  var msg="";if(best&&best[0]!==me[0]){msg=better(me,best)?"🏆 كسبت التحدي! تفوّقت على "+esc(best[0]):me[1]===best[1]?"🤝 تعادلتما في الدرجة لكن "+esc(best[0])+" أسرع منك":"💪 خسرت هذه الجولة أمام "+esc(best[0])+". أعد المحاولة بنفس الأسئلة!"}
  else msg=QZ.score===QZ.n?"🌟 درجة كاملة!":"👏 أنهيت الاختبار. حاول رفع نتيجتك!";
  var code=enc({a:QZ.a,b:QZ.b,s:QZ.s,n:QZ.n,t:list}),link=location.href.split("#")[0]+"#ch="+code;QZ.code=code;QZ.link=link;
  var h='<div class="inv"><b>'+msg+'</b><p class="sc" style="margin:4px 0">نتيجتك: '+QZ.score+' / '+QZ.n+' في '+secs+' ثانية</p><table class="lb">';
  list.forEach(function(x,i){h+='<tr'+(x===me?' class="me"':'')+'><td>'+["🥇","🥈","🥉"][i]+(i>2?(i+1):"")+'</td><td>'+esc(x[0])+'</td><td>'+x[1]+' / '+QZ.n+'</td><td>'+x[2]+' ث</td></tr>'});
  h+='</table><div class="row"><button class="pri" data-act="share">👥 تحدَّ صديقًا</button><button data-act="again">🔁 أعد نفس الأسئلة</button></div><div class="shr" hidden><p class="sc">أرسل الرابط أو الرمز لزملائك: يفتحون نفس الأسئلة ويحاولون التفوّق على نتيجتك، وكل من يجيب يضيف اسمه للوحة الصدارة عند إعادة الإرسال.</p><input readonly id="shl" value="'+link+'"><div class="row"><button data-act="copyl">📋 نسخ الرابط</button><button data-act="copyc">🔑 نسخ الرمز فقط</button><button data-act="sys">📤 مشاركة</button><a class="lk" target="_blank" rel="noopener" id="wa" href="https://wa.me/?text='+encodeURIComponent("تحدّيتك في اختبار الرياضيات (الصفحات "+QZ.a+"–"+QZ.b+")! نتيجتي "+me[1]+"/"+QZ.n+" في "+me[2]+" ث. هل تتفوّق عليّ؟ "+link)+'">واتساب</a></div></div></div>';
  $("qr").innerHTML=h;$("qr").scrollIntoView({behavior:"smooth",block:"nearest"})}
function invite(c){$("a").value=c.a;$("b").value=c.b;render();var t=c.t[0],z=$("qz");QZ=null;
  z.innerHTML='<div class="inv"><b>🔥 وصلك تحدٍّ!</b><p>'+esc(t[0])+' حصل على <b>'+t[1]+' / '+(c.n||10)+'</b> في '+t[2]+' ثانية على الصفحات '+c.a+' – '+c.b+'. هل تستطيع التفوّق عليه؟</p><div class="row"><label>اسمك: <input id="pn2" class="nm" maxlength="20" value="'+esc(($("pn").value||"").trim())+'"></label><button class="pri" data-act="begin">ابدأ التحدي</button></div></div>';
  window._inv=c;z.scrollIntoView({behavior:"smooth"})}
function fromText(s){var m=(s||"").match(/ch=([A-Za-z0-9_-]+)/);return dec(m?m[1]:(s||"").trim())}
document.addEventListener("click",function(e){var t=e.target,el;
  if(el=t.closest("[data-retry]")){var i3=el.dataset.retry,qb=document.querySelector('.qb[data-l="'+i3+'"]');if(qb)qb.innerHTML=Q(LI[i3][6],keysL(LI[i3]));return}
  if(el=t.closest("[data-go]")){var l=LI[el.dataset.go];$("a").value=l[3];$("b").value=l[4];render();var s=document.querySelector('section[data-l="'+l[1]+'"]');if(s)s.scrollIntoView({behavior:"smooth"});return}
  if(el=t.closest("[data-act]")){var a=el.dataset.act;
    if(a==="share"){var sh=el.closest(".inv").querySelector(".shr");sh.hidden=!sh.hidden}
    else if(a==="again"){quiz({a:QZ.a,b:QZ.b,s:QZ.s,t:QZ.list})}
    else if(a==="copyl"||a==="copyc"){var txt=a==="copyl"?QZ.link:QZ.code;if(navigator.clipboard)navigator.clipboard.writeText(txt).then(function(){toast("تم النسخ ✅")},function(){$("shl").select()});else{$("shl").select();document.execCommand("copy");toast("تم النسخ ✅")}}
    else if(a==="sys"){if(navigator.share)navigator.share({title:"تحدّي رياضيات",text:"تحدّيتك في اختبار الرياضيات! هل تتفوّق على نتيجتي؟",url:QZ.link}).catch(function(){});else toast("المشاركة غير متاحة هنا، استخدم نسخ الرابط")}
    else if(a==="begin"){var n2=$("pn2").value.trim().slice(0,20);if(n2){$("pn").value=n2;try{localStorage.setItem("pname",n2)}catch(x){}}quiz(window._inv)}
  }});
$("pn").value=(function(){try{return localStorage.getItem("pname")||""}catch(e){return""}})();
$("pn").oninput=function(){try{localStorage.setItem("pname",$("pn").value)}catch(e){}};
$("qb").onclick=function(){quiz()};
$("cjoin").onclick=function(){var c=fromText($("ccode").value);if(!c){toast("الرمز غير صالح. انسخ الرابط أو الرمز كاملًا.");return}invite(c)};
$("mreset").onclick=function(){if(confirm("هل تريد مسح كل الميداليات والبدء من جديد؟")){M={};svM();snapLv();render();board();prog()}};

snapLv();board();prog();
render();
if(/^#ch=/.test(location.hash)){var _c=dec(location.hash.slice(4));if(_c)invite(_c)}
