export const testCases = [
  // POSITIVE FUNCTIONAL TESTS
  {
    tcId: 'Pos_Fun_0001',
    name: 'Convert a simple daily sentence',
    input: 'mama yaaluvek ekka sarathchandra ekata giyaa aedhumak ganna dhaen gedhara yanavaa',
    expected: 'මම යාලුවෙක් එක්ක සරත්චන්ඩ්‍ර එකට ගියා ඇදුමක් ගන්න දැන් ගෙදර යනවා'
  },
  {
    tcId: 'Pos_Fun_0002',
    name: 'Compound sentence',
    input: 'api canteen eken kaeema kanna yanavaa saha passe film ekak balanavaa. oyaatath oni nam enna puluvan.',
    expected: 'අපි canteen එකෙන් කෑම කන්න යනවා සහ පස්සෙ film එකක් බලනවා. ඔයාටත් ඔනි නම් එන්න පුලුවන්.'
  },
  {
    tcId: 'Pos_Fun_0003',
    name: 'Complex sentence',
    input: 'mata heta rathnapuree yanna thiyee vaedakata. Oyaa enavanm enna mama oyaa enakm magata velaa balan innavaa.',
    expected: 'මට හෙට රත්නපුරේ යන්න තියේ වැඩකට. ඔයා එනවන්ම් එන්න මම ඔයා එනක්ම් මගට වෙලා බලන් ඉන්නවා.'
  },
  {
    tcId: 'Pos_Fun_0004',
    name: 'Interrogative (question)',
    input: 'iiyee oyaa bike eken vaetuna needha. kakula thuvaala unaa kiyalaa dhaenaganna laebunaa. oyaa hodhindha?',
    expected: 'ඊයේ ඔයා bike එකෙන් වැටුන නේද. කකුල තුවාල උනා කියලා දැනගන්න ලැබුනා. ඔයා හොදින්ද?'
  },
  {
    tcId: 'Pos_Fun_0005',
    name: 'Imperative (command)',
    input: 'mama ennamko.oyaa issarahata yanna.',
    expected: 'මම එන්නම්කො.ඔයා ඉස්සරහට යන්න.'
  },
  {
    tcId: 'Pos_Fun_0006',
    name: 'Positive sentence',
    input: 'kavuru monava kivvath mata vaedak naee mama ehema karanavaa.',
    expected: 'කවුරු මොනව කිව්වත් මට වැඩක් නෑ මම එහෙම කරනවා.'
  },
  {
    tcId: 'Pos_Fun_0007',
    name: 'Negative sentence',
    input: 'mata kammaeli eeka karanna aayee. mama ehema karanne naehae.',
    expected: 'මට කම්මැලි ඒක කරන්න ආයේ. මම එහෙම කරන්නේ නැහැ.'
  },
  {
    tcId: 'Pos_Fun_0008',
    name: 'Greeting',
    input: 'aayuboovan! Oyaava saadharayen piligannavaa naevathath',
    expected: 'ආයුබෝවන්! ඔයාව සාදරයෙන් පිලිගන්නවා නැවතත්'
  },
  {
    tcId: 'Pos_Fun_0009',
    name: 'Polite request',
    input: 'karuNaakaralaa mata mee aedhuma thooraganna udhavvak karanna puLuvandha?',
    expected: 'කරුණාකරලා මට මේ ඇදුම තෝරගන්න උදව්වක් කරන්න පුළුවන්ද?'
  },
  {
    tcId: 'Pos_Fun_0010',
    name: 'Informal phrasing',
    input: 'ee vaedee lassanayi ban dhigatama ehema karapan.',
    expected: 'ඒ වැඩේ ලස්සනයි බන් දිගටම එහෙම කරපන්.'
  },
  {
    tcId: 'Pos_Fun_0011',
    name: 'Day to day expression',
    input: 'mata adha nidhi matha nisaa mama adha kalin nidhaa gannanava.',
    expected: 'මට අද නිදි මත නිසා මම අද කලින් නිදා ගන්නනව.'
  },
  {
    tcId: 'Pos_Fun_0012',
    name: 'Multi word expression',
    input: 'mata oona poddak inna. Mee vaeda tika kalla epaa velaa inne mama',
    expected: 'මට ඕන පොඩ්ඩක් ඉන්න. මේ වැඩ ටික කල්ල එපා වෙලා ඉන්නේ මම'
  },
  {
    tcId: 'Pos_Fun_0013',
    name: 'Proper spacing',
    input: 'heta api naanna yanavaa',
    expected: 'හෙට අපි නාන්න යනවා'
  },
  {
    tcId: 'Pos_Fun_0014',
    name: 'Repeated words',
    input: 'hari hari eeka lassanayi. Mama boruvata kivve eka kaethayi kiyala',
    expected: 'හරි හරි ඒක ලස්සනයි. මම බොරුවට කිව්වෙ එක කැතයි කියල'
  },
  {
    tcId: 'Pos_Fun_0015',
    name: 'Past tense',
    input: 'oyaata mokakdha unee. mama iiyee gedhara giyaa.',
    expected: 'ඔයාට මොකක්ද උනේ. මම ඊයේ ගෙදර ගියා.'
  },
  {
    tcId: 'Pos_Fun_0016',
    name: 'Future tense',
    input: 'oya mokada kiyanne api heta gedhara yamu.',
    expected: 'ඔය මොකඩ කියන්නෙ අපි හෙට ගෙදර යමු.'
  },
  {
    tcId: 'Pos_Fun_0017',
    name: 'Pronoun variation', 
    input: 'mama heta sarasaviyata yanava oyalath mageth ekka enavdha ?',
    expected: 'මම හෙට සරසවියට යනව ඔයලත් මගෙත් එක්ක එනව්ද ?'
  },
  {
    tcId: 'Pos_Fun_0018',
    name: 'Present tense',
    input: 'oyaa enakam idhiyee balan mechchara velaa. api mee kaeema kanavaa.',
    expected: 'ඔයා එනකම් ඉදියේ බලන් මෙච්චර වෙලා. අපි මේ කෑම කනවා.'
  },
  {
    tcId: 'Pos_Fun_0019',
    name: 'Plural usage',
    input: 'eyaalaa lagadhima gedhara enavaa.',
    expected: 'එයාලා ලගදිම ගෙදර එනවා.'
  },
  {
    tcId: 'Pos_Fun_0020',
    name: 'Mixed Singlish + English',
    input: 'iiyee thiyanna thibba Zoom meeting ekak adha thiyenavaa.',
    expected: 'ඊයේ තියන්න තිබ්බ Zoom meeting එකක් අද තියෙනවා.'
  },
  {
    tcId: 'Pos_Fun_0021',
    name: 'Places / names + Pronoun variation',
    input: 'oyaa dhannavadha eyaalaa adha Kandy yanna hadhanavaa.eyaala enakota tikak raee veyi.',
    expected: 'ඔයා දන්නවද එයාලා අද Kandy යන්න හදනවා.එයාල එනකොට ටිකක් රෑ වෙයි.'
  },
  {
    tcId: 'Pos_Fun_0022',
    name: 'Punctuation & numbers',
    input: 'mee ara oyaa sadhudhaa magen gaththa magee Rs. 2000 kavadhdha dhenne?',
    expected: 'මේ අර ඔයා සදුදා මගෙන් ගත්ත මගේ Rs. 2000 කවද්ද දෙන්නෙ?'
  },
  {
    tcId: 'Pos_Fun_0023',
    name: 'Medium paragraph',
    input: 'adha nam epaa venavaa needha udhee paandharama vaessa patan gaththa. mee dhavas tikeema digatama vaessa nisaa harima siithalayi. udheeta aehaerennath harima kammaeli, nindhen nagittinna hithennema nae. ehema unath api kohoma hari office yanna ooneene. kootchchiye yadhdhi thamaa godakma amaruma, mokadha thadhabadha asse themena nisaa. adha dhavasa ikmanata ivara unoth hodhayi.',
    expected: 'අද නම් එපා වෙනවා නේද උදේ පාන්දරම වැස්ස පටන් ගත්ත. මේ දවස් ටිකේම ඩිගටම වැස්ස නිසා හරිම සීතලයි. උදේට ඇහැරෙන්නත් හරිම කම්මැලි, නින්දෙන් නගිට්ටින්න හිතෙන්නෙම නැ. එහෙම උනත් අපි කොහොම හරි office යන්න ඕනේනෙ. කෝට්ච්චියෙ යද්දි තමා ගොඩක්ම අමරුම, මොකද තදබද අස්සෙ තෙමෙන නිසා. අද දවස ඉක්මනට ඉවර උනොත් හොදයි.'
  },
  {
    tcId: 'Pos_Fun_0024',
    name: 'Mixed Singlish + English with polite request',
    input: 'karuNaakaralaa adha Zoom meeting ekee link eka WhatsApp group ekata dhaanna puLuvandha? Mata eka hoyaa ganna baehaenee',
    expected: 'කරුණාකරලා අද Zoom meeting එකේ link එක WhatsApp group එකට දාන්න පුළුවන්ද? මට එක හොයා ගන්න බැහැනේ'
  },

  // NEGATIVE FUNCTIONAL TESTS (Error Handling / Robustness)
  {
    tcId: 'Neg_Fun_0001',
    name: 'Joined words',
    input: 'mata nam dhaenbalanidala athivelaathiyenne. mamagehdarayanavaa',
    expected: 'මට නම් දැන් බලන් ඉඳලා ඇති වෙලා තියෙන්නේ. මම ගෙදර යනවා.'
  },
  {
    tcId: 'Neg_Fun_0002',
    name: 'Heavy spelling errors',
    input: 'adha man class ekata giyaa. Eka adha naellu.mam me den gdr yannva bus eke negala',
    expected: 'අද මම class එකට ගියා. ඒක අද නෑල්ලු. මම දැන් බස් එකට නැගලා ගෙදර යනවා'
  },
  {
    tcId: 'Neg_Fun_0003',
    name: 'Excessive joined words',
    input: 'matapaanekakonee thavajeam ekakuth denna. Thava keselawariyakuth oona',
    expected: 'මට පාන් එකක් ඕනේ, තව ජෑම් එකකුත් දෙන්න. තව කෙසෙල් ඇවරියකුත් ඕනේ.'
  },
  {
    tcId: 'Neg_Fun_0004',
    name: 'Slang-heavy input',
    input: 'adoo obata heta korean exam eka needha. machan ela wedak karapan hode',
    expected: 'අඩෝ ඔබට හෙට korean exam එක නේද. මචන් එල වැඩක් කරපන් හොදේ'
  },
  {
    tcId: 'Neg_Fun_0005',
    name: 'Joined words (no spaces)',
    input: 'api ada maamalae gedara yanava oyath apith ekka ennaone haridha',
    expected: 'අපි අද මාමලැ ගෙඩර යනව ඔයත් අපිත් එක්ක එන්න ඕනේ හරිද'
  },
  {
    tcId: 'Neg_Fun_0006',
    name: 'Heavy spelling errors',
    input: 'man hithnne eya danne ne hariyata oya kawda kiyla. Ekane eema oyata benne.',
    expected: 'මම හිතන්නේ එයා දන්නේ නෑ හරියට ඔයා කවුද කියලා. එකනෙ ඒම ඔයාට බැන්නෙ.'
  },
  {
    tcId: 'Neg_Fun_0007',
    name: 'Extra symbols',
    input: 'marune ee paata oyaata hodhata gaelapenava. kahenda oya aedhuma gaththe. hari!!! lassanai???',
    expected: 'මරුනෙ ඒ පාට ඔයාට හොදට ගැලපෙනව. කොහෙන්ද ඔය ඇදුම ගත්තෙ. හරි ලස්සන්යි'
  },
  {
    tcId: 'Neg_Fun_0008',
    name: 'Informal grammar',
    input: 'me man iye gatta aduma . Eke patata nam man asai eth eka hari nadda',
    expected: 'මේ මම ඊයෙ ගත්ත ඇදුම . එකේ පාට මම ආසයි එත්  එක හරි නැද්ද?'
  },
  {
    tcId: 'Neg_Fun_0009',
    name: 'Repeated words',
    input: 'mee api oyaava haemathenama hevva. Oyaa hitiye naethi nisaa api api mee gedhara yanavaa.',
    expected: 'මේ අපි ඔයාව හැමතෙනම හෙව්ව. ඔයා හිටියෙ නැති නිසා අපි මේ ගෙදර යනවා.'
  },
  {
    tcId: 'Neg_Fun_0010',
    name: 'Wrong word order',
    input: 'enna oyaata puluvandha heta maava ganna',
    expected: 'ඔයාට එන්න පුලුවන්ද හෙට මාව ගන්න'
  },
  {
    tcId: 'Pos_UI_0001',
    name: 'Sinhala output updates automatically in real-time',
    input: 'oya monavadha adhinne heta thiyena uthsavayata',
    expected: 'ඔය මොනවද අදින්නෙ හෙට තියෙන උත්සවයට'
  }
];
