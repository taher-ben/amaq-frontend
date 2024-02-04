// strat loader 
window.addEventListener('load',()=>{
    const load = document.querySelector(".load");
    let lang = localStorage.getItem('lang');
    if(lang === 'ar'){
        setTimeout(() => {
            load.classList.add("load-hedden");
            
        }, 2000);
    }else{
        load.classList.add("load-hedden");
    }

    load.addEventListener("transitioend",() => {
        document.body.removeChild('load');
    })
})
// end loader 

window.onload = function () {
    const translations = {
        'en': {
            // start header
            'home_head': "Home",
            'header_link_1': 'About',
            'header_link_2': "CEO's Message",
            'header_link_3': "Our Vision",
            'header_link_4': "Our Mission",
            'header_link_5': "Our Goals",
            'header_link_6': "Our value",
            'header_link_7': "Our Services",
            'header_link_8': "Company news",
            'header_link_9': "Contact Us",
            // end header
            // start footer
            'co_name': "Amaq Al-Dauleya For Oil Services",
            'footer_link_4': "contact us",
            'footer_link_5': "Hai Alandalus , Tripoli ,Libya",
            'footer_link_6': "Working hours from 8 AM to 4 PM ",
            'footer_link_7': " All rights reserved 2024. Amaq Al-Dauleya Oil Services LLC.",
            // end footer
            // startindex page
            // start slider
            's_line1': `Halliburton's visit to the Amaq Al-Dauleya Company aims to learn more about the company and explore potential collaboration opportunities.`,
            's_line2': `The electricity company conducts a tour at the Amaq Al-Dauleya Company to examine and explore collaboration prospects, gaining a deeper understanding of its operations.`,
            's_line3': 'The Ministry of Environment organizes an exploratory tour to the site of Amaq Al-Dauleya Company to assess its sustainability efforts and environmental protection measures.',
            's_line4': 'Establishment of the First Sanitary Landfill in Libya.',
            's_line5': 'Amaq Al-Dauleya Company Highlights its Modern and Environmental Technologies at Libya Energy and Economy Summit',
            // end slider
            // start video
            'video_h': 'Amaq Al-Dauleya For Oil Services',
            'video_p': 'Amaq Al-Dauleya for Oil Services" is one of the largest companies operating in its field. It was established in 2022 as a private company within the private sector, with a capital of up to ten million Libyan Dinars. Its main headquarters is located in the city of Tripoli. The company specializes in providing high-quality services to public companies and institutions operating in the fields of oil, gas, and their derivatives. The company offers a wide range of services, including the maintenance and cleaning of tanks and pipelines, as well as production units in fields and refineries. Additionally, the company collects, cleans, and processes all oil losses resulting from exploration, drilling, and maintenance operations, including residues and liquids produced from production operations and others.',
            // end video
            // start iso
            'iso_1': 'ISO 45001:2018 Certificate:',
            'iso_2': 'ISO 14001:2015 Certificate:',
            'iso_3': 'ISO 9001:2015 Certificate:',
            'iso_p_1': `The ISO 45001:2018 certificate is an Al-Dauleya certification for the Occupational Health and Safety Management System. This certificate aims to ensure a safe and healthy working environment for employees within the company and to enhance its performance in the field of safety and general protection. This certificate contributes to improving the company's environmental performance and enhances its reputation in the areas of environmental conservation and sustainable development.`,
            'iso_p_2': `The ISO 14001:2015 certificate is an Al-Dauleya certification related to environmental management. It demonstrates the company's commitment to achieving environmental sustainability and reducing the negative environmental impact of its operations and activities.`,
            'iso_p_3': `The ISO 9001:2015 certificate is an Al-Dauleya certification related to the Quality Management System. This certificate confirms the company's commitment to providing high-quality services and continuously meeting customer requirements. It reflects the company's dedication to continuous improvement and the continuity of delivering the best services to its customers.`,
            // end iso
            // endindex page
            // start contact page
            // strat head page
            'head_contact': 'Contact Us',
            // end head page
            // start contact page
            // strat loicton
            'content_email': 'E-mail',
            'content_h4': 'Do you have a question?',
            'contact_p_ms': 'Leave a message with your inquiry, and we will respond to you as soon as possible',
            'contact_name': 'Name',
            'contact_email': 'E-mail',
            'contact_message': 'The message',
            'contact_send': ' Send',
            // end loicton
            // end contact page
            // start goals page
            'head_goals': 'Our Goals',
            'goals_h5_1': 'Improving Productivity',
            'goals_h5_2': 'Environmental Sustainability',
            'goals_h5_3': 'Continuous Improvement',
            'goals_h5_4': 'Diversity and Expansion',
            'goals_h5_5': 'Safety and Security',
            'goals_h5_6': 'Communication and Interaction',
            'goals_p1': `The company aims to improve productivity, reduce costs, and increase profitability by implementing modern and advanced technologies, and by focusing on training and developing qualified staff.`,
            'goals_p2': 'The company strives to reduce its environmental impact by applying good working practices and complying with local and Al-Dauleya legislation related to the environment.',
            'goals_p3': 'Amaq focuses on improving its operations, updating technologies, processes, and services to meet customer requirements and maintain its position as a strategic partner for major oil companies.',
            'goals_p4': ' The company seeks to expand its business scope and increase its diversity in the services provided to customers by developing strong business relationships and strategic partnerships with new and existing customers.',
            'goals_p5': 'The company is committed to providing a safe and healthy working environment for its employees and applying good working practices in all aspects related to safety and security.',
            'goals_p6': `Amaq focuses on effective communication and interaction with customers, suppliers, local communities, and stakeholders to meet their needs, improve its reputation, and enhance the industry's reputation as a whole.`,
            // start message page
            'head_message': 'Our Message',
            'message_p_1': 'The company aims to improve productivity, reduce costs, and increase profitability by implementing modern and advanced technologies, and by focusing on training and developing qualified staff.',
            // end message page
            // start news page
            'head_news': 'Company News',
            'home_head': 'Home',
            'news_h3_1': 'Amaq Al-Dauleya Company Highlights its Modern and Environmental Technologies at Libya Energy and Economy Summit',
            'news_p_1': 'Amaq International, an oil services company, takes pride in participating in the events of the Libya Energy and Economy Summit',
            'news_a_1': 'Read More',
            'news_h3_2': 'Establishment of the First Sanitary Landfill in Libya',
            'news_p_2': 'Amaq Al-Dauleya Company takes pride in offering effective and integrated environmental solutions. The company is earnestly committed to playing a pivotal role in the development and....',
            // end news page
            // start rate page
            'head_rate': 'value',
            'rate_li_1': ' Management and development of engineering, technical, and consulting services at the highest levels of quality, safety, and environmental preservation based on the best scientific technologies.',
            'rate_li_2': 'Commitment to sponsor and develop human capabilities and contribute to social responsibility.',
            'rate_li_3': 'Implementing new and innovative solutions to meet current and future challenges.',
            'rate_li_4': 'Contributing to serving the economy of the Libyan state.',
            // end rate page
            // start servers page
            "head_servce": 'Our Services',
            "servce_li_1": 'Cleaning, maintenance, and installation of tanks, pipes, and other production units in fields, refineries, and oil ports.',
            "servce_li_2": 'Drilling and maintenance of oil and gas wells using modern methods and machinery.',
            "servce_li_3": 'Laying oil and gas pipelines, including excavation and backfilling.',
            "servce_li_4": 'Construction and maintenance of offshore platforms.',
            "servce_li_5": 'Laying oil and gas pipelines, including excavation and backfilling.',
            "servce_li_6": 'Installation and maintenance of firefighting systems.',
            "servce_li_7": 'Transportation and treatment of oil residues and water associated with drilling and production operations, as well as drilling fluids and waste.',
            "servce_li_8": 'Treatment and remediation of contaminated soil.',
            "servce_li_9": 'Containment and suction of oil spills on land and at sea.',
            "servce_li_10": 'Installation and maintenance of treatment stations.',
            "servce_li_11": 'Coating of pipes, tanks, and oil and gas refining plants and factories.',
            "servce_li_12": 'Providing various technical services, including surveying, soil examination, liquid level measurement, inspection operations, lowering and installing gas valves, conducting production tests on wellheads or clusters, determining production quantities, and performing necessary mechanical and civil works.',
            "servce_li_13": 'Removal of sand from fields, factories, and oil ports.',
            "servce_li_14": 'Supply of drilling materials, cement, drilling mud, and oil well maintenance supplies.',
            "servce_li_15": 'Collection, transportation, disposal, and treatment of used and damaged oils.',
            "servce_li_16": 'Conducting environmental studies and surveys within oil fields and ports.',
            "servce_li_17": 'Collecting and transporting industrial waste at oil sites.',
            "servce_li_18": 'Transporting, treating, and finally disposing of oil waste resulting from exploration operations.',
            "servce_li_19": 'Providing technical assistance in the field of oil services.',
            "servce_li_20": 'Providing housing, accommodation, and transportation for companies within oil fields.',
            "servce_li_21": 'Preparing oil engineering studies and designs.',
            "servce_li_22": 'Providing technical consultancy in the field of oil services.',
            "servce_li_23": 'Installation and welding of pipeline and tank lines in oil fields.',
            "servce_li_24": 'Performing chemical and biological treatments for emergency oil spills in both land and marine environments.',
            "servce_li_25": 'Performing excavation, demolition, soil leveling, and tank construction.',
            "servce_li_26": 'Construction and maintenance of oil facilities, including the construction of oil and gas pumping stations, offshore floating platforms for gas and oil exploration, and the installation of oil refining plants and petrochemical factories.',
            "servce_li_27": 'Removal of sand from fields, factories, and oil ports.',
            "servce_li_28": 'Maintenance, drilling, well testing, subsurface measurements, and maintenance of oil and gas wells, oil pump units, compressors, gas turbines, furnaces, diesel engines, air compressors, water tanks, and water transport pipelines.',
            // end servers page
            // start visian page
            'head_visian': 'Our Vision',
            'visian_p': 'We look forward to achieving the deserved position as one of the major companies locally and globally in the field of providing competitive oil services. We also strive to be a key player in driving the development and progress in this vital sector, combining quality and innovation..',
            // end visian page
            // start word page
            'word_h2': 'General Manager Vision',
            'word_p': `Our vision at Amaq Al-Dauleya For Oil Services is to continue growing and expanding in the oil industries sector relying on modern technologies and maintaining the highest safety standards. The Amaq team consists of highly efficient and experienced individuals to achieve the company's goals, implement its strategy, and achieve the highest possible ethical standards. Amaq is characterized by strong and wise management capable of understanding the sector's needs and a staff with extensive scientific and professional experience that works tirelessly to provide services that meet the internationally recognized quality management system to meet customer aspirations and gain their trust to become the leading Amaq company at the local and regional levels in its field. The company relies on continuous improvement and development of its services, believing that keeping up and developing are the keys to success, and leading to building an exemplary relationship with its customers and achieving the deserved status among major local and global companies as the most important provider of oil industry services locally and regionally`,
            // end word page
            // start land page news
            'head_news': 'Company News',
            'head_title_1': 'Establishment of the First Sanitary Landfill in Libya',
            'land_h2': 'Establishment of the First Sanitary Landfill in Libya',
            'land_p': 'Amaq Al-Dauleya Company takes pride in offering effective and integrated environmental solutions. The company is earnestly committed to playing a pivotal role in the development and enhancement of the quality of life in Libya. In pursuit of this goal, the first secure burial site for managing hazardous waste has been established nationwide. The project of establishing the secure burial site aims to organize the management of hazardous waste operations and unify appropriate policies and methods for its proper and sustainable disposal. We place great emphasis on our commitment to best practices and rely on the latest technologies to preserve the environment and reduce harmful impacts on society. The secure burial site for hazardous waste is an integral part of our strategy aimed at minimizing and alleviating potential risks associated with the environment and public health. We are dedicated to delivering our services professionally and systematically, exerting every effort to achieve our goals in protecting the environment and human health. We are confident that our efforts will significantly contribute to building a better future for the coming generations.',
            // end land page news
            // start musem page
            'head_news': 'Company News',
            'musem_p': 'Amaq Al-Dauleya Company Highlights its Modern and Environmental Technologies at Libya Energy and Economy Summit.',
            'musem_h2': 'Amaq Al-Dauleya Company Highlights its Modern and Environmental Technologies at Libya Energy and Economy Summit.',
            'musem_p_1': `Amaq International, an oil services company, takes pride in participating in the events of the Libya Energy and Economy Summit. The company presented a comprehensive showcase that sheds light on its latest advanced technologies, committing to striking a balance between cutting-edge technology and environmental preservation. The company excelled in presenting innovative aspects of its services, particularly in the field of collecting, cleaning, and processing oil waste resulting from exploration, drilling, and maintenance operations. The company reiterated its steadfast commitment to sustainability by adopting environmentally friendly technologies that adhere to the highest Al-Dauleya and local standards. Amaq's participation in this summit is considered a significant opportunity to share its experiences and exchange knowledge with the Libyan oil sector. The company reaffirms its readiness for effective collaboration in enhancing the sector's infrastructure and stimulating economic growth in Libya.`,
            // end musem page
        },
        'ar': {
            // start header
            'home_head': "الرئيسية",
            'header_link_1': "حول الشركة",
            'header_link_2': "كلمة المدير العام",
            'header_link_3': "رؤيتنا",
            'header_link_4': "رسالتنا",
            'header_link_5': "أهدافنا",
            'header_link_6': "قيمنا",
            'header_link_7': "خدماتنا",
            'header_link_8': "أخبار الشركة",
            'header_link_9': "تواصل معنا",
            // end header
            // start footer
            'co_name': "شركة أعماق الدولية للخدمات النفطية",
            'footer_link_4': "أتصل بنا",
            'footer_link_5': "حي الاندلس , طرابلس , ليبيا",
            'footer_link_6': "ساعات العمل من الساعة 8 صباحا الي 4 مساءً",
            'footer_link_7': " جميع الحقوق محفوظة 2024.شركة أعماق الدولية للخدمات النفطية ذ م م.",
            // end footer
            // startindex page
            // start slider
            's_line1': 'زيارة شركة هاليبورتن لشركة اعماق للتعرف على المزيد ورؤية إمكانيات التعاون',
            's_line2': 'شركة الكهرباء تقوم بجولة في شركة أعماق لفحص واستكشاف آفاق التعاون والفهم الأعمق للعمليات',
            's_line3': 'وزارة البيئة تنظم جولة استكشافية لموقع شركة أعماق الدولية لتقييم جهودها الاستدامية وحماية البيئة',
            's_line4': 'إنشاء اول خليه للدفن الآمن ( مطمر صحي) في ليبيا',
            's_line5': 'شركة اعماق الدولية تبرز تقنياتها الحديثة والبيئية في قمة ليبيا للطاقة والاقتصاد',
            // end slider
            // start video
            'video_h': 'شركة أعماق الدولية للخدمات النفطية ',
            'video_p': '"أعماق الدولية للخدمات النفطية" هي واحدة من أكبر الشركات العاملة في مجالها، حيث تأسست في عام2022 كشركة خاصة ضمن شركات القطاع الخاص ،برأس مال يصل إلى عشرة ملايين دينار ليبي، ويقع مقرها الرئيسي في مدينة طرابلس. تتخصص الشركة في تقديم خدمات عالية الجودة للشركات العامة والمؤسسات التي تعمل في مجالات النفط والغاز ومشتقاتهما. تقدم الشركة مجموعة واسعة من الخدمات، بما في ذلك صيانة وتنظيف الخزانات وخطوط الأنابيب، ووحدات الإنتاج في الحقول والمصافي. كما تقوم بجمع وتنظيف ومعالجة جميع فاقدات النفط التي تنشأ نتيجة لعمليات الاستكشاف والحفر والصيانة، بما في ذلك البقايا والسوائل الناتجة عن عمليات الإنتاج وغيرها.',
            // end video
            // start iso
            'iso_1': 'شهادة ISO 45001:2018 ',
            'iso_2': 'شهادة ISO 14001:2015',
            'iso_3': 'شهادة ISO 9001:2015',
            'iso_p_1': 'تُعد شهادة ISO 45001:2018 شهادة دولية لنظام إدارة الصحة والسلامة المهنية. تهدف هذه الشهادة إلى ضمان بيئة عمل آمنة وصحية للعاملين في الشركة وتحسين أداءها في مجال السلامة والحماية العامة.تساهم هذه الشهادة في تحسين أداء الشركة البيئي وتعزز سمعتها في مجال الحفاظ على البيئة والتنمية المستدامة.',
            'iso_p_2': 'تُعد شهادة ISO 14001:2015 شهادة دولية تتعلق بإدارة البيئة. وهي تُثبت التزام الشركة بتحقيق الاستدامة البيئية والحد من التأثير البيئي السلبي لعملياتها وأنشطتها. ',
            'iso_p_3': 'تُعد شهادة ISO 9001:2015 شهادة دولية تتعلق بنظام إدارة الجودة. تؤكد هذه الشهادة التزام الشركة بتقديم خدمات عالية الجودة وتلبية متطلبات العملاء بشكل مستمر. وتعكس الشهادة التزام الشركة بالتحسين المستمر والاستمرارية في تقديم أفضل الخدمات لعملائها.',
            // end iso
            // endindex page
            // start contact page
            // strat head page
            'head_contact': 'أتصل بنا ',
            // end head page
            // start contact page
            // strat loicton
            'content_email': 'البريد الإلكتروني ',
            'content_h4': 'لديك استفسار؟ ',
            'contact_p_ms': 'اترك رسالة باستفسارك وسنقوم بالرد عليك في اقرب وقت',
            'contact_name': 'الأسم',
            'contact_email': 'البريد الالكتروني ',
            'contact_message': 'الرسالة',
            'contact_send': 'أرسال',
            // end loicton
            // end contact page
            // start goals page
            'head_goals': 'أهدافنا',
            'goals_h5_1': 'تحسين الإنتاجية ',
            'goals_h5_2': 'الاستدامة البيئية ',
            'goals_h5_3': 'التحسين المستمر ',
            'goals_h5_4': 'التنوع والتوسع ',
            'goals_h5_5': 'السلامة والأمن ',
            'goals_h5_6': 'التواصل والتفاعل ',
            'goals_p1': 'تهدف الشركة إلى تحسين الإنتاجية وتقليل التكاليف وزيادة الربحية عن طريق تطبيق التقنيات الحديثة والمتطورة والتركيز على التدريب وتطوير العمالة المؤهلة',
            'goals_p2': 'تسعى الشركة إلى تقليل التأثير البيئي لعملياتها من خلال تطبيق ممارسات العمل الجيد والتزامها بالتشريعات واللوائح المحلية والدولية المتعلقة بالبيئة',
            'goals_p3': ' تركز أعماق الدولية على تحسين عملياتها وتحديث التقنيات والعمليات والخدمات لتلبية متطلبات العملاء والمحافظة على مكانتها كشريك استراتيجي للشركات النفطية الكبرى',
            'goals_p4': 'تسعى الشركة إلى توسيع نطاق أعمالها وزيادة تنوعها في الخدمات المقدمة للعملاء، وذلك من خلال تطوير علاقات عمل قوية وشراكات استراتيجية مع عملاء جدد وموجودين',
            'goals_p5': 'تحرص الشركة على توفير بيئة عمل آمنة وصحية للعمال وتطبيق ممارسات العمل الجيدة في جميع الجوانب المتعلقة بالسلامة والأمن',
            'goals_p6': 'تركز أعماق الدولية على تواصل وتفاعل فعال مع العملاء والموردين والمجتمعات المحلية والمهتمين لتلبية احتياجاتهم وتحسين سمعتها وسمعت الصناعة ككل',
            // end goals page
            // start message page
            'head_message': 'رسالتنا',
            'message_p_1': 'تتلخص رسالتنا في استمرارية النمو والتوسع في قطاع الصناعة النفطية، وهو ما يتم تحقيقه عبر تبنينا لأحدث التقنيات والابتكارات. كما نلتزم بالمساهمة في تطوير الصناعة ودفع عجلة التقدم، مع الحفاظ على أعلى معايير السلامة لحماية كل مكون في مجتمعنا.',
            // end message page
            // start news page
            'head_news': 'أخبار الشركة',
            'home_head': 'الرئيسية',
            'news_h3_1': 'شركة اعماق الدولية تبرز تقنياتها الحديثة والبيئية في قمة ليبيا للطاقة والاقتصاد',
            'news_p_1': 'تتشرف شركة أعماق الدولية للخدمات النفطية بالمشاركة في فعاليات قمة ليبيا للطاقة والاقتصاد، حيث قامت الشركة بتقديم عرض شامل يسلط الضوء على أحدث تقنياتها المتقدمة، ملتزمة بتحقيق التوازن بين التقنية المتقدمة والحفاظ على البيئة.',
            'news_a_1': 'أقرا المزيد',
            'news_h3_2': 'إنشاء اول خلية للدفن الآمن ( مطمر صحي) في ليبيا',
            'news_p_2': 'تعتز شركة اعماق الدولية للخدمات النفطية بتقديم حلول بيئية فعّالة ومتكاملة. حيث تسعى الشركة بجدية إلى تحقيق دور رئيسي في التطوير وتعزيز جودة الحياة في ليبيا. وفي سبيل تحقيق هذا الهدف، تم إقامة أول موقع للدفن الآمن لإدارة المخلفات الخطرة على مستوى البلاد.',
            // end news page
            // start rate page
            'head_rate': 'قيمنا',
            'rate_li_1': ' إدارة وتطوير الخدمات الهندسية والفنية والإستشارية بأعلى مستويات الجودة والسلامة والمحافظة على البيئة اعتماداً على أفضل التقنيات العلمية',
            'rate_li_2': 'الإلتزام برعاية وتطوير القدرات البشرية والمساهمة في المسؤولية المجتمعية ',
            'rate_li_3': 'تنفيذ حلول جديدة ومبتكرة لمواجهة التحديات الحالية والمستقبلية ',
            'rate_li_4': 'المساهمة في خدمة اقتصاد الدولة الليبية ',
            // end rate page
            // start servers page
            'head_servce': 'خدماتنا',
            'servce_li_1': 'أعمال تنظيف وصيانة وتركيب الخزانات والأنابيب وباقي الوحدات الإنتاجية بالحقول والمصافي والموانئ النفطية',
            'servce_li_2': 'حفر أبار النفط والغاز وصيانتها بالطرق والآلات الحديثة',
            'servce_li_3': 'مد أنابيب النفط والغاز متضمناً أعمال الحفر والردم',
            'servce_li_4': 'تنفيذ وصيانة المنصات البحرية',
            'servce_li_5': 'مد أنابيب النفط والغاز متضمناً أعمال الحفر والردم',
            'servce_li_6': 'تركيب وصيانة منظومات الإطفاء',
            'servce_li_7': 'نقل ومعالجة الرواسب النفطية والمياه المصاحبة لعمليات الحفر والإنتاج وسوائل ومخلفات الحفر',
            'servce_li_8': 'معالجة التربة الملوثة وتخصيبها',
            'servce_li_9': 'محاصرة الانسكاب النفطي وشفطه براً وبحراً',
            'servce_li_10': 'تركيب وصيانة محطات المعالجة',
            'servce_li_11': 'طلاء الأنابيب والخزانات ومحطات ومصانع تكرير النفط والغاز',
            'servce_li_12': 'توفير الخدمات الفنية بأنواعها بما فيها إعمال المساحية وفحص ودراسة التربة وقياس مستوى السائل وعمليات التفتيش وإنزال صمامات الغاز وتثبيتها وإجراء اختبارات الإنتاج على رؤوس الآبار أو المجمعات وتحديد كمية الإنتاج والأعمال الميكانيكية والمدنية اللازمة لعمل',
            'servce_li_13': 'إزالة الرمال داخل الحقول والمصانع والموانئ النفطية',
            'servce_li_14': 'تقديم مواد وسائل الحفر والإسمنت وطين الحفر ومستلزمات صيانة أبار النفط',
            'servce_li_15': 'جمع ونقل والتخلص ومعالجة الزيوت التالفة والمستهلكة',
            'servce_li_16': 'إجراء الدراسات وأعمال المسح البيئي داخل الحقول والمواني النفطية',
            'servce_li_17': 'تجميع ونقل المخلفات الصناعية بالمواقع النفطية',
            'servce_li_18': 'النقل والمعالجة والتخلص النهائي من المخلفات النفطية الناتجة عن العمليات الاستكشافية',
            'servce_li_19': 'تقديم المساعدة الفنية في مجال الخدمات النفطية',
            'servce_li_20': 'توفير السكن والإقامة والنقل للشركات داخل الحقول النفطية',
            'servce_li_21': 'إعداد الدراسات والتصميمات الهندسية النفطية',
            'servce_li_22': 'تقديم المشورة الفنية في مجال الخدمات النفطية',
            'servce_li_23': 'تركيب ولحام خطوط الأنابيب والخزانات بالحقول النفطية',
            'servce_li_24': 'القيام بإعمال المعالجات الكيميائية والبيولوجية لحالات الطوارئ للانسكابات النفطية في الحالات البرية والبحرية',
            'servce_li_25': 'القيام بأعمال الحفر والهدم وتسوية التربة وإنشاء الخزانات',
            'servce_li_26': 'إنشاء وصيانة المنشات النفطية وإنشاء خزانات ومحطات ضخ النفط والغاز وإنشاء المنصات البحرية العائمة للتنقيب عن الغاز والنفط',
            'servce_li_27': 'تركيب مصافي تكرير النفط ومصانع البتروكيماويات',
            'servce_li_28': 'القيام بصيانة وحفر أبار النفط والغاز واختبار الآبار وإجراء القياسات تحت السطحية وصيانة مضخات النفط والضواغط والتربينات الغازية والأفران ومحركات الديزل وضواغط الهواء وخزانات المياه وأنابيب نقل المياه',
            // end servers page
            // start visian page
            'head_visian': 'رؤيتنا',
            'visian_p': 'م الخدمات النفطية المنافسة. كما نسعى لأن نكون عامل رئيسي في دفع عجلة التطور والتقدم في هذا القطاع الحيوي، حيث نجمع بين الجودة والابتكار.',
            // end visian page
            // start word page
            'head_visian': 'رؤيتنا',
            'visian_p': 'نتطلع إلى تحقيق المكانة المستحقة كواحدة من الشركات الكبرى على الساحة المحلية والعالمية في مجال تقديم الخدمات النفطية المنافسة. كما نسعى لأن نكون عامل رئيسي في دفع عجلة التطور والتقدم في هذا القطاع الحيوي، حيث نجمع بين الجودة والابتكار.',
            // end word page
            // start word page
            'word_h2': 'كلمة مدير عام الشركة ',
            'word_p': 'الحمد لله رب العالمين والصلاة والسلام على أشرف الأنبياء والمرسلين سيدنا محمد وعلى آله وصحبه أجمعين تتمثّل رؤيتنا في شركة أعماق الدولية للخدمات النفطية في استمرارية النمو والتوسع في قطاع الصناعات النفطية بالاعتماد على التقنيات الحديثة والمحافظة على أعلى معايير السلامة ،كما يضمّ فريق عمل أعماق للخدمات النفطية أفراداً يتميّزون بالكفاءة والخبرة لتحقيق أهداف الشركة وتطبيق استراتيجيّتها و تحقيق أعلى المعايير الأخلاقية الممكنة تتميز أعماق بإدارة قوية وحكيمة قادرة على فهم احتياجات القطاع وكادر وظيفي صاحب خبرة علمية ومهنية كبيرة يواصل الليل بالنهار في جهد مخلص وعمل دؤوب سعياً لتقديم الخدمات ذات المواصفات العالمية المتعارف عليها من نظام إدارة الجودة لتُلبي التطلعات وتنال ثقة العملاء لتكون شركة أعماق الرائدة على المستوى المحلي والإقليمي في مجالها تعتمد الشركة على التحسين الدائم و المستمر لخدماتها إيماناً منها بأن المواكبة والتطوير مفتاح النجاح، ومقدمة لبناء علاقة نموذجية مع عملائها وتحقيق المكانة المستحقة بين الشركات الكبرى محلياً وعالمياً كأهم مقدم خدمات للصناعات النفطية محلياً وإقليميا',
            // end word page
            // start land page news
            'head_news': 'أخبار الشركة',
            'head_title_1': 'شركة إنشاء أول خلية للدفن الآمن (مطمر صحي) في ليبيا',
            'land_h2': 'شركة إنشاء أول خلية للدفن الآمن (مطمر صحي) في ليبيا',
            'land_p': 'تعتز شركة اعماق الدولية للخدمات النفطية بتقديم حلول بيئية فعّالة ومتكاملة. حيث تسعى الشركة بجدية إلى تحقيق دور رئيسي في التطوير وتعزيز جودة الحياة في ليبيا. وفي سبيل تحقيق هذا الهدف، تم إقامة أول موقع للدفن الآمن لإدارة المخلفات الخطرة على مستوى البلاد. يهدف مشروع إقامة الموقع الآمن للدفن إلى تنظيم عمليات إدارة المخلفات الخطرة وتوحيد السياسات والطرق المناسبة للتخلص منها بطريقة صحيحة ومستدامة. نحرص بكل اهتمام على التزامنا بأفضل الممارسات واستنادنا إلى أحدث التقنيات للحفاظ على البيئة وتقليل التأثيرات الضارة على المجتمع. يشكل الموقع الآمن لدفن المخلفات الخطرة جزءًا أساسيًا من استراتيجيتنا الرامية لتقليل وتخفيف المخاطر المحتملة المرتبطة بالبيئة والصحة العامة. نحن ملتزمون بتقديم خدماتنا بشكل احترافي ومنظم، مع بذل كل الجهود لتحقيق أهدافنا في حماية البيئة وصحة الإنسان. نثق بأن جهودنا ستسهم بشكل كبير في بناء مستقبل أفضل للأجيال القادمة.',
            // end land page news
            // start musem page
            'head_news': 'أخبار الشركة',
            'musem_p': 'شركة اعماق الدولية تبرز تقنياتها الحديثة والبيئية في قمة ليبيا للطاقة والاقتصاد',
            'musem_h2': 'شركة اعماق الدولية تبرز تقنياتها الحديثة والبيئية في قمة ليبيا للطاقة والاقتصاد',
            'musem_p_1': 'تتشرف شركة أعماق الدولية للخدمات النفطية بالمشاركة في فعاليات قمة ليبيا للطاقة والاقتصاد، حيث قامت الشركة بتقديم عرض شامل يسلط الضوء على أحدث تقنياتها المتقدمة، ملتزمة بتحقيق التوازن بين التقنية المتقدمة والحفاظ على البيئة. وتميزت الشركة في تقديم جوانب مبتكرة من خدماتها، خاصةً في مجال جمع وتنظيف ومعالجة فاقدات النفط، التي تنشأ نتيجة لعمليات الاستكشاف والحفر والصيانة. كما أكدت الشركة التزامها الراسخ بالاستدامة، حيث قامت بتبني تقنيات صديقة للبيئة تلتزم بأعلى المعايير الدولية والمحلية. تعتبر مشاركة أعماق الدولية في هذه القمة مناسبة مهمة لتقديم تجاربها وتبادل المعرفة مع القطاع النفطي الليبي، مع التأكيد على جاهزيتها للتعاون الفعّال في تعزيز البنية التحتية للقطاع وتحفيز النمو الاقتصادي في ليبيا.',
            // end musem page
        }

    };
    let company_name = document.getElementById('company_name');
    let currentLanguage = localStorage.getItem('lang') || 'en';
    console.log(currentLanguage);
    let icon = document.getElementById('trans');

    function checkForTransElement() {
        icon = document.getElementById('trans');
        if (icon) {
            icon.addEventListener('click', function () {
                if(currentLanguage === 'ar'){
                    company_name.innerText = ' Amaq Al-Dauleya For Oil Services ';
                }else{
                    company_name.innerText = ' أعماق الدولية للخدمات النفطية';
                }
                changeLanguage();
            });
            updateContent(currentLanguage);
        } else {
            setTimeout(checkForTransElement, 3000); // إعادة المحاولة كل ثانية
        }
    }

    checkForTransElement();



    function updateContent(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach((element) => {
            const key = element.getAttribute('data-lang');
            element.innerHTML = translations[language][key];
        });
        document.body.style.direction = language === 'en' ? 'ltr' : 'rtl';
        localStorage.setItem('lang', language);
    }

    function changeLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        updateContent(currentLanguage);
    }
};