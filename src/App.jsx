import React, { useState } from 'react';
import { Globe2, Info, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const timelineData = [
 {
year: "2009 BS | २००९",
title: {
en: "Administrative Reorganization Committee (Buch Commission)",
ne: "प्रशासनिक पुनर्गठन समिति (बुच कमिशन)"
},
description: {
en: "• Known as 'Buch Commission'\n• Led by N.M. Buch (sent by Indian Government)\n• Key recommendations:\n   • New appointments only through Public Service Commission consultation\n   • Review of staff benefits through Public Service Commission\n   • Implementation of decentralization system\n   • Formulation of civil service and financial administration laws\n   • Reorganization of ministries and departments, limiting ministries to 11\n   • Conduct examinations for staff management\n   • Provision of staff training\n   • Investigation measures for corruption\n   • Replacement of Cabinet Secretary system with Chief Secretary\n   • Gradual improvement of law and legal procedures\n   • Recruitment of high-ranking officers from India",
ne: "• बुच कमिशनको नामले चिनिन्छ\n• एन.एम. बुचको नेतृत्वमा गठित (भारत सरकारद्वारा पठाइएको)\n• मुख्य सिफारिसहरू:\n   • लोक सेवा आयोगको परामर्शबाट मात्र नयाँ कर्मचारीको नियुक्ति हुनुपर्ने\n   • कर्मचारीहरूको तलब सुविधाको पुनरावलोकन लोक सेवा आयोगबाट गर्ने\n   • विकेन्द्रीकरणको व्यवस्था अवलम्बन गर्नुपर्ने\n   • निजामती प्रशासन र आर्थिक प्रशासनसम्बन्धी कानूनको तर्जुमा गर्नुपर्ने\n   • मन्त्रालय र विभागको पुनर्गठन गर्ने मन्त्रालयको संख्या ११ वटामा सीमित गर्ने\n   • कर्मचारीको व्यवस्थापन गर्न परीक्षा संचालन गरिनुपर्ने\n   • कर्मचारीलाई तालिमको व्यवस्था गर्ने\n   • भ्रष्टाचारको जाँच गर्ने उपायहरू खोज्नुपर्ने\n   • प्रमुख सचिवको व्यवस्था गरी क्याबिनेट सेक्रेटरीको प्रणाली हटाउनुपर्ने\n   • कानून र कानूनी प्रक्रियाको सुधार क्रमिक रूपमा गरिनुपर्ने\n   • उच्चपदस्थ अधिकृतहरू भारतबाट ल्याउनुपर्ने"
},
category: "reform"
},
 {
year: "2013 BS | २०१३",
title: {
en: "Administrative Reorganization Planning Commission (Tanka Prasad Acharya)",
ne: "प्रशासन पुनर्गठन योजना आयोग (टंकप्रसाद आचार्य)"
},
description: {
en: "• Chairman: Prime Minister Tank Prasad Acharya\n• Key recommendations:\n   • Establish district, village and block systems for administrative decentralization\n   • Form various subject-specific services in civil service\n   • Establish Ministry of Planning Development for plan formulation\n   • Classify current and development budgets\n   • Implement new salary scale\n   • Formulate new laws regarding employee service conditions\n   • Establish administrative training center\n   • Formulate district administration reorganization plan\n   • Initiate five-year planning\n   • Form technical committees in ministries\n   • Emphasize rural development\n   • Reorganize and reduce number of employees\n   • Reorganize ministries",
ne: "• अध्यक्ष: प्रधानमन्त्री टंक प्रसाद आचार्य\n• मुख्य सिफारिसहरू:\n   • प्रशासनिक विकेन्द्रीकरणको लागि जिल्ला, ग्राम र ब्लकहरूको व्यवस्था गर्ने\n   • निजामती सेवामा विभिन्न विषयगत सेवाहरूको गठन गर्ने\n   • योजना तर्जुमाका लागि योजना विकास मन्त्रालयको स्थापना गर्ने\n   • चालु र विकास बजेटको वर्गीकरण गर्ने\n   • नयाँ तलबमान लागू गर्ने\n   • कर्मचारी सेवा शर्तसम्बन्धी नयाँ कानूनको तर्जुमा गर्ने\n   • प्रशासनिक प्रशिक्षण केन्द्रको स्थापना गर्ने\n   • जिल्ला प्रशासन पुनर्गठन योजना तर्जुमा गर्ने\n   • पञ्चवर्षीय योजनाको शुरुवात गर्ने\n   • मन्त्रालयहरूमा टेक्निकल समिति गठन गर्ने\n   • ग्रामीण विकासमा जोड दिने\n   • कर्मचारीहरूको पुनर्गठन गरी कर्मचारीहरूको संख्या घटाउने\n   • मन्त्रालयहरूको पुनर्गठन गर्ने"
},
category: "reform"
},
 {
year: "2025 BS | २०२५",
title: {
en: "Administrative Reform Commission (Vedananda Jha)",
ne: "प्रशासन सुधार आयोग (वेदानन्द झा)"
},
description: {
en: "• Chairman: Vedanand Jha\n• Main Objective: To make administration efficient, fast, streamlined and effective\n• Key recommendations:\n   • Merge institutions with similar nature of work, duties and objectives or operate under single management committee\n   • Make civil servants officer-oriented at central level\n   • Appoint civil service positions only through Public Service Commission recommendation and end political appointments\n   • Reorganize ministries reducing number from 18 to 12\n   • Accept zonal and district administration as local administration to embrace decentralization\n   • Implement position classification system in civil service\n   • Keep personnel administration separate from daily politics\n   • Establish central administration agency to manage civil service\n   • Make administration system hierarchical",
ne: "• अध्यक्ष: वेदानन्द झा\n• मुख्य उद्देश्य: दक्ष प्रशासन र छिटो, छरितो र कार्यदक्ष बनाउने\n <u> मुख्य सिफारिसहरू: </u>\n   • एकै प्रकृतिको काम, कर्तव्य र उद्देश्य भएका संस्थानहरूलाई एक अर्कामा गाभ्ने वा एउटै संचालक समिति द्वारा संचालन गराउने\n   • केन्द्रीय तहमा निजामती कर्मचारीलाई अधिकृतमूलक बनाउने\n   • निजामती सेवाका पदमा लोक सेवा आयोगको सिफारिसमा मात्र नियुक्ति गर्ने र राजनीतिक नियुक्ति प्रथा बन्द गर्ने\n   • मन्त्रालयको पुनर्गठन गरी मन्त्रालयको संख्या १८ बाट १२ कायम गर्ने\n   • विकेन्द्रीकरणको सिद्धान्तलाई आत्मसात गर्न अञ्चल र जिल्ला प्रशासनलाई स्थानीय प्रशासनको रूपमा लिने\n   • निजामती सेवामा पद वर्गीकरण व्यवस्था लागू गर्ने\n   • कर्मचारी प्रशासनलाई दैनिक राजनीतिबाट अलग राख्ने\n   • निजामती सेवाको प्रशासन संचालन गर्न केन्द्रीय प्रशासन एजेन्सीको व्यवस्था गर्ने\n   • प्रशासनयन्त्रलाई श्रृंखलाबद्ध बनाउने"
},
category: "reform"
},

{
year: "2032 BS | २०३२",
title: {
en: "Administrative Reform Commission",
ne: "प्रशासन सुधार आयोग"
},
description: {
en: "• Chairman: Bhesh Bahadur Thapa\n• Key recommendations:\n   • Make administration officer-oriented\n   • Initiate and institutionalize program budget\n   • Define duties, responsibilities, accountability and authority of civil service positions\n   • No political appointments except for Zonal Commissioner position\n   • Implement arrangement through Public Service Commission consultation in civil service\n   • Decentralize decision-making process by delegating authority and reducing decision levels\n   • Prioritize establishment of local bodies over central expectations\n   • Reduce number of ministries",
ne: "• अध्यक्ष: भेष बहादुर थापा\n• मुख्य सिफारिसहरू:\n   • प्रशासनलाई अधिकृतमूलक बनाउने\n   • कार्यक्रम बजेटको थालनी गरी संस्थागत गर्ने\n   • निजामती पदको काम, कर्तव्य, जवाफदेही र अधिकार निश्चित गर्ने\n   • अञ्चलाधीश पद बाहेक अन्य कुनै पदमा राजनीतिक नियुक्ति नगर्ने\n   • लोक सेवा आयोगको परामर्शमा निजामती सेवामा जकेश भएको व्यवस्था गर्ने\n   • अधिकार प्रत्यायोजन गरी निर्णयका तह घटाउँदै निर्णय प्रक्रियामा पनि विकेन्द्रीकरण गर्ने\n   • केन्द्रको अपेक्षा स्थानीय निकायहरूको स्थापनामा बढी प्राथमिकता दिने\n   • मन्त्रालयको संख्या कम गर्ने"
},
category: "reform"
},

{
year: "2048 BS | २०४८",
title: {
en: "Administrative Reform Commission",
ne: "प्रशासन सुधार आयोग"
},
description: {
en: "• Chairman: Prime Minister Girija Prasad Koirala\n• Main Objective: Make administration capable and effective to fulfill demands of democracy and development\n• Key recommendations:\n   • Reduce number of ministries from 21 to 18\n   • Make Citizen's Digest mandatory\n   • Focus National Planning Commission on resource allocation and monitoring/evaluation of development policies\n   • Change civil service structure with position classification and implement unified civil service system\n   • Implement arrangement in civil service\n   • Abolish Assistant Secretary position",
ne: "• अध्यक्ष: प्रधानमन्त्री गिरिजा प्रसाद कोइराला\n• मुख्य उद्देश्य: प्रशासनलाई प्रजातन्त्र र विकासका मागहरू पूरा गर्न सक्षम र प्रभावकारी बनाउने\n• मुख्य सिफारिसहरू:\n   • मन्त्रालयको संख्या २१ बाट १८ कायम गर्ने\n   • नागरिक डाइजेस्ट अनिवार्य राख्ने\n   • राष्ट्रिय योजना आयोगलाई स्रोत साधनको बाँडफाँड तथा विकाससम्बन्धी नीतिहरूको कार्यान्वयनको अनुगमन र मूल्यांकन गर्ने कार्यमा केन्द्रित गर्ने\n   • निजामती सेवाको संरचनामा परिवर्तन गरी पद वर्गीकरण गर्दै एकीकृत निजामती सेवाको व्यवस्था गर्ने\n   • निजामती सेवामा जकेश भएको व्यवस्था गर्ने\n   • सहायक सचिवको पद खारेज गर्ने"
},
category: "reform"
},
  {
    year: "2061 BS | २०६१",
    title: {
      en: "Governance Reform Roadmap",
      ne: "शासकीय सुधारको मार्गचित्र"
    },
    description: {
      en: "• Internal capacity building\n• Civil service efficiency enhancement\n• Anti-corruption measures\n• Performance improvement process\n• Inclusive civil service concept",
      ne: "• आन्तरिक क्षमता अभिबृद्धि\n• निजामती सेवाको दक्षता अभिबृद्धि\n• भ्रष्टाचार घटाउने कार्यक्रम\n• कार्य सम्पादन सुधार\n• समावेशी निजामती सेवा"
    },
    category: "governance"
  }
];

const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5";
  const getColor = () => {
    switch (category) {
      case 'reorganization': return 'text-purple-500';
      case 'planning': return 'text-blue-500';
      case 'reform': return 'text-green-500';
      case 'governance': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };
  
  return (
    <div className={`${getColor()} p-1.5 rounded-full bg-opacity-10 bg-current`}>
      <Info className={iconClass} />
    </div>
  );
};

const HoverCard = ({ description, title, containerRef, isHovered }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  if (!isHovered) return null;
  
  const formattedDescription = description[isFlipped ? 'ne' : 'en'].split('\n').map((item, index) => (
    <p key={index} className="text-sm text-gray-700 mb-1">{item}</p>
  ));

  return (
    <div 
      className="ml-2 mt-2"
      ref={containerRef}
    >
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-sm text-gray-600">
            {isFlipped ? 'नेपाली' : 'English'}
          </h4>
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Switch language"
          >
            <Languages className="w-4 h-4 text-blue-600" />
          </button>
        </div>
        <div className="relative min-h-[60px]">
          <div className={`transition-opacity duration-300 ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          }`}>
            {formattedDescription}
          </div>
          <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
            isFlipped ? 'opacity-100' : 'opacity-0'
          }`}>
            {formattedDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineEntry = ({ data, isActive, onClick, index, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverContainerRef = React.useRef(null);
  const timelineEntryRef = React.useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = (e) => {
    const timelineRect = timelineEntryRef.current?.getBoundingClientRect();
    const hoverRect = hoverContainerRef.current?.getBoundingClientRect();
    
    if (timelineRect && hoverRect) {
      const isMovingToHoverCard = 
        e.clientX >= hoverRect.left && 
        e.clientX <= hoverRect.right && 
        e.clientY >= Math.min(timelineRect.top, hoverRect.top) && 
        e.clientY <= Math.max(timelineRect.bottom, hoverRect.bottom);
      
      if (!isMovingToHoverCard) {
        setIsHovered(false);
      }
    }
  };

  return (
    <div className="relative group" ref={timelineEntryRef}>
      <div className="flex items-start gap-3">
        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200" />
        
        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        } text-sm`}>
          {index + 1}
        </div>

        <div className="flex-1 pb-6">
          <div className="flex flex-col md:flex-row gap-2">
            <div 
              className={`cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-50 border-blue-500 shadow-sm' 
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              } border rounded-lg p-3 flex items-center gap-3 md:w-64`}
              onClick={onClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CategoryIcon category={data.category} />
              <div>
                <div className="font-medium text-base">{data.year}</div>
                <div className={`text-sm ${isActive ? 'text-blue-800' : 'text-gray-600'}`}>
                  {language === 'en' ? data.title.en : data.title.ne}
                </div>
              </div>
            </div>

            <div 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={() => setIsHovered(false)}
            >
              <HoverCard 
                description={data.description} 
                title={data.title}
                containerRef={hoverContainerRef}
                isHovered={isHovered}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function AdminReformsTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ne' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 px-3">
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {language === 'en' ? 
                'Administrative Reforms in Nepal' : 
                'नेपालमा प्रशासन सुधारका प्रयासहरु'
              }
            </h2>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              <Globe2 className="w-5 h-5 text-blue-600" />
              <span className="font-medium">
                {language === 'en' ? 'नेपाली' : 'English'}
              </span>
            </button>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {timelineData.map((entry, index) => (
              <TimelineEntry
                key={entry.year}
                data={entry}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                index={index}
                language={language}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminReformsTimeline;
