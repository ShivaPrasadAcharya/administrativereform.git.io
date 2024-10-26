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
      en: "Administrative Reorganization Planning Commission",
      ne: "प्रशासकीय पुनर्गठन योजना आयोग (टंकप्रसाद आचार्य)"
    },
    description: {
      en: "• Formation of various services in civil service\n• Creation of civil service laws\n• Strengthening of Public Service Commission\n• Determination of employee salary scales\n• Establishment of administrative training center",
      ne: "• निजामती सेवामा विभिन सेवाहरुको गठन\n• निजामती सेवा सम्बन्धी कानूनको निर्माण\n• लोक सेवा आयोगको सुदृढीकरण\n• कर्मचारीको तलबमान निर्धारण\n• प्रशासनिक प्रशिक्षण केन्द्रको स्थापना"
    },
    category: "planning"
  },
  {
    year: "2025 BS | २०२५",
    title: {
      en: "Administrative Reform Commission",
      ne: "प्रशासन सुधार आयोग (वेदानन्द झा)"
    },
    description: {
      en: "• Post classification and officer-oriented organization\n• Implementation of tier system instead of grade system\n• Establishment of Administrative Court\n• Establishment of Staff College\n• Implementation of lateral entry system",
      ne: "• पद वर्गीकरण र अधिकृतमूलक संगठनको बयबस्था\n• श्रेणीगत सेवा हटाई तहगत व्यबस्था लागू\n• प्रशासकीय अदालतको स्थापना\n• Staff College को स्थापना\n• छड्के प्रवेशको व्यबस्था"
    },
    category: "reform"
  },
  {
    year: "2032 BS | २०३२",
    title: {
      en: "Administrative Reform Commission",
      ne: "प्रशासन सुधार आयोग (डा. भेषबहादुर थापा)"
    },
    description: {
      en: "• Officer-oriented organizational structure\n• Permanent Administrative Reform Committee\n• Market-based salary determination\n• Institution Coordination Council\n• Anti-corruption measures",
      ne: "• अधिकृतमूलक संगठनको व्यबस्था\n• स्थायी प्रशासन सुधार समिति\n• बजार भाउको आधारमा तलब निर्धारण\n• संस्थान समन्वय परिषद\n• भ्रष्टाचार निवारण उपायहरु"
    },
    category: "reform"
  },
  {
    year: "2048 BS | २०४८",
    title: {
      en: "Administrative Reform Commission",
      ne: "प्रशासन सुधार आयोग (गिरिजाप्रसाद कोईराला)"
    },
    description: {
      en: "• Government work review and allocation\n• Focus on service delivery efficiency\n• Integrated civil service concept\n• Simplification of government procedures\n• Institution management reforms",
      ne: "• सरकारको कायक्षेत्रको पुनरावलोकन\n• सेवा प्रवाहमा प्रभावकारिता\n• एकीकृत निजामती सेवाको अवधारणा\n• सरकारी कार्यविधि सरलीकरण\n• संस्थान व्यबस्थापन सुधार"
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
