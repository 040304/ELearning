// Category 6: Topic 48, Topic 49 & Topic 50 (45 items each: 06 -> 50)
const topic48Items = [
  {
    vietnamese: "Tôi có cần đơn thuốc của bác sĩ để mua loại thuốc này không?",
    standardEnglish: "Do I need a doctor's prescription to buy this medication?",
    acceptedAnswers: [
      "Do I need a doctor's prescription to buy this medication?",
      "Is a doctor's prescription required for this medicine?",
      "Do I need a prescription from a doctor for this?"
    ],
    hint: "Do I need a doctor's prescription to buy this medication?"
  },
  {
    vietnamese: "Bạn có bán thuốc chống say tàu xe không?",
    standardEnglish: "Do you sell motion sickness medicine?",
    acceptedAnswers: [
      "Do you sell motion sickness medicine?",
      "Do you have any pills for motion sickness?",
      "Do you sell medication for car sickness?"
    ],
    hint: "sell motion sickness medicine"
  },
  {
    vietnamese: "Dược sĩ khuyên tôi nên uống thuốc này sau bữa ăn ba mươi phút.",
    standardEnglish: "The pharmacist advised me to take this medicine thirty minutes after meals.",
    acceptedAnswers: [
      "The pharmacist advised me to take this medicine thirty minutes after meals.",
      "The pharmacist recommended taking this pill 30 minutes after eating.",
      "The chemist told me to take this medication half an hour after a meal."
    ],
    hint: "take this medicine thirty minutes after meals"
  },
  {
    vietnamese: "Cho tôi một chai nước muối sinh lý và một gói bông gòn y tế.",
    standardEnglish: "Give me a bottle of saline solution and a pack of medical cotton balls.",
    acceptedAnswers: [
      "Give me a bottle of saline solution and a pack of medical cotton balls.",
      "I'd like a bottle of physiological saline and some medical cotton pads.",
      "Can I get a bottle of saline water and a pack of cotton balls?"
    ],
    hint: "bottle of saline solution and a pack of medical cotton balls"
  },
  {
    vietnamese: "Thuốc này nên được bảo quản ở nơi khô ráo, thoáng mát và tránh ánh nắng trực tiếp.",
    standardEnglish: "This medicine should be stored in a cool, dry place away from direct sunlight.",
    acceptedAnswers: [
      "This medicine should be stored in a cool, dry place away from direct sunlight.",
      "Store this medication in a cool, dry location away from direct sun.",
      "Keep this medicine in a cool and dry area out of direct sunlight."
    ],
    hint: "stored in a cool, dry place away from direct sunlight"
  },
  {
    vietnamese: "Hãy để tất cả các loại thuốc xa tầm với của trẻ nhỏ.",
    standardEnglish: "Keep all medications out of the reach of small children.",
    acceptedAnswers: [
      "Keep all medications out of the reach of small children.",
      "Please keep all drugs out of reach of young children.",
      "Always store medications away from children's reach."
    ],
    hint: "Keep all medications out of the reach of small children"
  },
  {
    vietnamese: "Thuốc hạ sốt này mất khoảng ba mươi phút để phát huy tác dụng.",
    standardEnglish: "This fever-reducing medicine takes about thirty minutes to take effect.",
    acceptedAnswers: [
      "This fever-reducing medicine takes about thirty minutes to take effect.",
      "This antipyretic drug takes around 30 minutes to work.",
      "It takes about half an hour for this fever reducer to work."
    ],
    hint: "fever-reducing medicine takes about thirty minutes to take effect"
  },
  {
    vietnamese: "Cho tôi xin một tuýp kem bôi trị côn trùng cắn và ngứa da.",
    standardEnglish: "Could I have a tube of ointment for insect bites and skin itching?",
    acceptedAnswers: [
      "Could I have a tube of ointment for insect bites and skin itching?",
      "Please give me a tube of cream for bug bites and itchy skin.",
      "I need a tube of topical cream for insect bites and itching."
    ],
    hint: "tube of ointment for insect bites and skin itching"
  },
  {
    vietnamese: "Bạn có loại thuốc tương đương nhưng có giá thành rẻ hơn không?",
    standardEnglish: "Do you have an equivalent generic medicine that is more affordable?",
    acceptedAnswers: [
      "Do you have an equivalent generic medicine that is more affordable?",
      "Do you have a generic alternative that costs less?",
      "Is there a cheaper generic version of this medicine available?"
    ],
    hint: "equivalent generic medicine that is more affordable"
  },
  {
    vietnamese: "Thuốc xịt mũi này chỉ nên dùng tối đa trong vòng năm ngày liên tục.",
    standardEnglish: "This nasal spray should only be used for a maximum of five consecutive days.",
    acceptedAnswers: [
      "This nasal spray should only be used for a maximum of five consecutive days.",
      "Use this nasal spray for no more than 5 days in a row.",
      "You should only use this nasal spray for up to five straight days."
    ],
    hint: "nasal spray should only be used for a maximum of five consecutive days"
  },
  {
    vietnamese: "Tôi muốn mua một hộp khẩu trang y tế và một chai cồn sát trùng.",
    standardEnglish: "I want to buy a box of medical masks and a bottle of antiseptic alcohol.",
    acceptedAnswers: [
      "I want to buy a box of medical masks and a bottle of antiseptic alcohol.",
      "Can I get a box of surgical masks and a bottle of rubbing alcohol?",
      "I'd like to purchase a box of face masks and antiseptic alcohol."
    ],
    hint: "box of medical masks and a bottle of antiseptic alcohol"
  },
  {
    vietnamese: "Vui lòng kiểm tra hạn sử dụng in trên bao bì trước khi dùng thuốc.",
    standardEnglish: "Please check the expiration date printed on the package before taking the medicine.",
    acceptedAnswers: [
      "Please check the expiration date printed on the package before taking the medicine.",
      "Make sure to inspect the expiry date on the box before using the drug.",
      "Check the expiration date on the packaging before consuming any medicine."
    ],
    hint: "check the expiration date printed on the package"
  },
  {
    vietnamese: "Mỗi lần uống cách nhau ít nhất bốn đến sáu tiếng.",
    standardEnglish: "Leave at least four to six hours between each dose.",
    acceptedAnswers: [
      "Leave at least four to six hours between each dose.",
      "Each dose should be spaced at least four to six hours apart.",
      "Take each dose at least 4 to 6 hours apart."
    ],
    hint: "Leave at least four to six hours between each dose"
  },
  {
    vietnamese: "Tôi bị dị ứng với penicillin nên xin hãy lưu ý khi kê đơn.",
    standardEnglish: "I am allergic to penicillin, so please keep that in mind when prescribing.",
    acceptedAnswers: [
      "I am allergic to penicillin, so please keep that in mind when prescribing.",
      "I have a penicillin allergy, so please note that on the prescription.",
      "Please be aware that I am allergic to penicillin."
    ],
    hint: "allergic to penicillin, so please keep that in mind"
  },
  {
    vietnamese: "Thuốc dạng viên sủi này cần hòa tan hoàn toàn vào cốc nước lọc trước khi uống.",
    standardEnglish: "This effervescent tablet must be completely dissolved in a glass of water before drinking.",
    acceptedAnswers: [
      "This effervescent tablet must be completely dissolved in a glass of water before drinking.",
      "Dissolve this effervescent tablet completely in water before taking it.",
      "This fizzing tablet needs to be fully dissolved in a glass of water before drinking."
    ],
    hint: "effervescent tablet must be completely dissolved in a glass of water"
  },
  {
    vietnamese: "Cho tôi một nhiệt kế điện tử để đo thân nhiệt cho em bé.",
    standardEnglish: "Give me a digital thermometer to measure baby body temperature.",
    acceptedAnswers: [
      "Give me a digital thermometer to measure baby body temperature.",
      "I'd like an electronic thermometer to check my baby's fever.",
      "Can I buy a digital thermometer for measuring a baby's temperature?"
    ],
    hint: "digital thermometer to measure baby body temperature"
  },
  {
    vietnamese: "Loại siro ho này có dùng được cho phụ nữ đang mang thai không?",
    standardEnglish: "Can this cough syrup be used by pregnant women?",
    acceptedAnswers: [
      "Can this cough syrup be used by pregnant women?",
      "Is this cough syrup safe for pregnant women to take?",
      "Can women who are pregnant use this cough syrup?"
    ],
    hint: "Can this cough syrup be used by pregnant women?"
  },
  {
    vietnamese: "Bạn có bán men vi sinh hỗ trợ tiêu hóa đường ruột không?",
    standardEnglish: "Do you sell probiotics to support digestive health?",
    acceptedAnswers: [
      "Do you sell probiotics to support digestive health?",
      "Do you carry probiotics for gut health?",
      "Do you have digestive probiotics in stock?"
    ],
    hint: "sell probiotics to support digestive health"
  },
  {
    vietnamese: "Đừng bẻ đôi hoặc nghiền nát viên thuốc bao phim này khi uống.",
    standardEnglish: "Do not break in half or crush this film-coated tablet when taking it.",
    acceptedAnswers: [
      "Do not break in half or crush this film-coated tablet when taking it.",
      "Don't split or crush these coated tablets when swallowing.",
      "Do not chew, break, or crush this coated pill."
    ],
    hint: "Do not break in half or crush this film-coated tablet"
  },
  {
    vietnamese: "Tôi muốn mua viên uống bổ sung vitamin C và kẽm để tăng đề kháng.",
    standardEnglish: "I want to buy vitamin C and zinc supplements to boost my immunity.",
    acceptedAnswers: [
      "I want to buy vitamin C and zinc supplements to boost my immunity.",
      "I'd like to get vitamin C and zinc tablets to enhance my immune system.",
      "Can I buy vitamin C plus zinc supplements to improve immunity?"
    ],
    hint: "vitamin C and zinc supplements to boost my immunity"
  },
  {
    vietnamese: "Nếu bạn quên một liều, hãy uống ngay khi nhớ ra nhưng đừng uống gấp đôi.",
    standardEnglish: "If you miss a dose, take it as soon as you remember, but do not double up.",
    acceptedAnswers: [
      "If you miss a dose, take it as soon as you remember, but do not double up.",
      "If you forget a dose, take it when you recall, but never take a double dose.",
      "Take the missed dose as soon as you remember, without doubling the dose."
    ],
    hint: "take it as soon as you remember, but do not double up"
  },
  {
    vietnamese: "Cho tôi một hộp băng dán cá nhân loại không thấm nước.",
    standardEnglish: "Give me a box of waterproof adhesive bandages.",
    acceptedAnswers: [
      "Give me a box of waterproof adhesive bandages.",
      "I'd like a box of waterproof band-aids, please.",
      "Can I get a pack of waterproof adhesive plasters?"
    ],
    hint: "box of waterproof adhesive bandages"
  },
  {
    vietnamese: "Thuốc nhỏ mắt này có thể sử dụng trong bao lâu sau khi mở nắp?",
    standardEnglish: "How long can these eye drops be used after opening?",
    acceptedAnswers: [
      "How long can these eye drops be used after opening?",
      "How long is this bottle of eye drops good for once opened?",
      "Within how many days should I use this eye drop bottle after opening?"
    ],
    hint: "How long can these eye drops be used after opening?"
  },
  {
    vietnamese: "Hiệu thuốc này có mở cửa suốt đêm không bạn?",
    standardEnglish: "Is this pharmacy open all night?",
    acceptedAnswers: [
      "Is this pharmacy open all night?",
      "Does this chemist stay open overnight?",
      "Is this drugstore open 24 hours?"
    ],
    hint: "Is this pharmacy open all night?"
  },
  {
    vietnamese: "Tôi bị ợ nóng khó chịu, dược sĩ có thể gợi ý loại thuốc kháng axit nào không?",
    standardEnglish: "I have uncomfortable heartburn; can the pharmacist suggest an antacid?",
    acceptedAnswers: [
      "I have uncomfortable heartburn; can the pharmacist suggest an antacid?",
      "I suffer from acid indigestion; which antacid do you recommend?",
      "Can the pharmacist recommend an antacid for my severe heartburn?"
    ],
    hint: "uncomfortable heartburn; can the pharmacist suggest an antacid"
  },
  {
    vietnamese: "Bạn cần uống thuốc với một cốc nước lọc đầy để thuốc ngấm tốt hơn.",
    standardEnglish: "You need to take the medicine with a full glass of water for better absorption.",
    acceptedAnswers: [
      "You need to take the medicine with a full glass of water for better absorption.",
      "Swallow the pills with a full glass of plain water for optimal absorption.",
      "Drink a full glass of water when taking your medication for better effect."
    ],
    hint: "take the medicine with a full glass of water for better absorption"
  },
  {
    vietnamese: "Thuốc bôi này chỉ dùng ngoài da, tuyệt đối không được bôi lên vết thương hở.",
    standardEnglish: "This topical cream is for external use only; never apply it to open wounds.",
    acceptedAnswers: [
      "This topical cream is for external use only; never apply it to open wounds.",
      "This ointment is for external use only and should not be used on open cuts.",
      "For external application only; do not apply to open wounds."
    ],
    hint: "topical cream is for external use only; never apply it to open wounds"
  },
  {
    vietnamese: "Vui lòng cho tôi xem đơn thuốc gốc của bác sĩ điều trị.",
    standardEnglish: "Please show me the original prescription from your treating doctor.",
    acceptedAnswers: [
      "Please show me the original prescription from your treating doctor.",
      "Could you show the original prescription from the attending physician?",
      "Please provide the doctor's original written prescription."
    ],
    hint: "show me the original prescription from your treating doctor"
  },
  {
    vietnamese: "Uống thuốc kháng sinh không đều đặn có thể dẫn đến hiện tượng kháng thuốc.",
    standardEnglish: "Irregular antibiotic intake can lead to antibiotic resistance.",
    acceptedAnswers: [
      "Irregular antibiotic intake can lead to antibiotic resistance.",
      "Taking antibiotics inconsistently can cause drug resistance.",
      "Failing to take antibiotics properly may result in antimicrobial resistance."
    ],
    hint: "Irregular antibiotic intake can lead to antibiotic resistance"
  },
  {
    vietnamese: "Tôi muốn mua một chai dung dịch rửa tay sát khuẩn loại nhỏ bỏ túi.",
    standardEnglish: "I want to buy a pocket-sized hand sanitizer gel.",
    acceptedAnswers: [
      "I want to buy a pocket-sized hand sanitizer gel.",
      "Can I get a travel-sized hand sanitizer bottle?",
      "I'd like to purchase a small bottle of pocket hand disinfectant."
    ],
    hint: "pocket-sized hand sanitizer gel"
  },
  {
    vietnamese: "Thuốc ngủ chỉ được bán khi có đơn chỉ định nghiêm ngặt từ bác sĩ.",
    standardEnglish: "Sleeping pills are only dispensed with a strict prescription from a doctor.",
    acceptedAnswers: [
      "Sleeping pills are only dispensed with a strict prescription from a doctor.",
      "Sleeping medications can only be sold with an official doctor's prescription.",
      "You can only buy sleeping aids with a valid medical prescription."
    ],
    hint: "Sleeping pills are only dispensed with a strict prescription"
  },
  {
    vietnamese: "Cho tôi một hộp trà gừng hòa tan để làm ấm bụng.",
    standardEnglish: "Give me a box of instant ginger tea to warm my stomach.",
    acceptedAnswers: [
      "Give me a box of instant ginger tea to warm my stomach.",
      "I would like a box of instant ginger tea to soothe my stomach.",
      "Can I buy instant ginger tea packets to ease stomach discomfort?"
    ],
    hint: "box of instant ginger tea to warm my stomach"
  },
  {
    vietnamese: "Viên thuốc này có vị đắng nên bạn hãy nuốt nhanh cùng nước ấm.",
    standardEnglish: "This pill tastes bitter, so swallow it quickly with warm water.",
    acceptedAnswers: [
      "This pill tastes bitter, so swallow it quickly with warm water.",
      "This tablet has a bitter taste, so swallow it fast with warm water.",
      "Because this pill is bitter, take it quickly with a sip of warm water."
    ],
    hint: "pill tastes bitter, so swallow it quickly with warm water"
  },
  {
    vietnamese: "Dược sĩ có thể dán nhãn hướng dẫn liều dùng lên từng hộp thuốc được không?",
    standardEnglish: "Could the pharmacist label the dosage instructions on each medicine box?",
    acceptedAnswers: [
      "Could the pharmacist label the dosage instructions on each medicine box?",
      "Can you put dosage instruction stickers on each medication box?",
      "Could you write the directions on each medicine package, please?"
    ],
    hint: "label the dosage instructions on each medicine box"
  },
  {
    vietnamese: "Thuốc này có an toàn đối với người có tiền sử bệnh gan không?",
    standardEnglish: "Is this drug safe for people with a history of liver disease?",
    acceptedAnswers: [
      "Is this drug safe for people with a history of liver disease?",
      "Is this medicine safe if I have preexisting liver problems?",
      "Can patients with a history of liver issues take this medication safely?"
    ],
    hint: "safe for people with a history of liver disease"
  },
  {
    vietnamese: "Tôi muốn mua một chai dầu gió xanh truyền thống để trị nhức đầu.",
    standardEnglish: "I want to buy a traditional bottle of medicated green oil for headaches.",
    acceptedAnswers: [
      "I want to buy a traditional bottle of medicated green oil for headaches.",
      "Can I buy a small bottle of green medicated oil to treat headaches?",
      "I'd like a bottle of traditional green oil for headache relief."
    ],
    hint: "bottle of medicated green oil for headaches"
  },
  {
    vietnamese: "Bạn hãy cất thuốc vào tủ thuốc gia đình có khóa an toàn.",
    standardEnglish: "Please keep the medicine in a locked family medicine cabinet.",
    acceptedAnswers: [
      "Please keep the medicine in a locked family medicine cabinet.",
      "Store these medications inside a lockable home first-aid cabinet.",
      "Put the medicine in a home medicine cabinet with a safety lock."
    ],
    hint: "keep the medicine in a locked family medicine cabinet"
  },
  {
    vietnamese: "Thuốc viên nang này được chiết xuất từ các loại thảo dược thiên nhiên.",
    standardEnglish: "These capsules are extracted from natural herbs.",
    acceptedAnswers: [
      "These capsules are extracted from natural herbs.",
      "This capsule medication is derived from natural herbal extracts.",
      "These pills contain extracts from natural medicinal herbs."
    ],
    hint: "capsules are extracted from natural herbs"
  },
  {
    vietnamese: "Nếu bạn gặp triệu chứng phát ban hoặc khó thở, hãy dừng thuốc ngay lập tức.",
    standardEnglish: "If you experience a rash or shortness of breath, stop taking the medication immediately.",
    acceptedAnswers: [
      "If you experience a rash or shortness of breath, stop taking the medication immediately.",
      "Discontinue the drug right away if you develop skin rash or breathing difficulty.",
      "If you get a rash or difficulty breathing, discontinue the medicine at once."
    ],
    hint: "experience a rash or shortness of breath, stop taking the medication immediately"
  },
  {
    vietnamese: "Cho tôi hỏi tổng số tiền cho đơn thuốc này là bao nhiêu?",
    standardEnglish: "May I ask how much the total is for this prescription?",
    acceptedAnswers: [
      "May I ask how much the total is for this prescription?",
      "What is the total cost for these prescribed medications?",
      "How much do all these prescription drugs cost in total?"
    ],
    hint: "how much the total is for this prescription"
  },
  {
    vietnamese: "Hiệu thuốc có nhận thanh toán bằng chuyển khoản hoặc thẻ tín dụng không?",
    standardEnglish: "Does the pharmacy accept payment by bank transfer or credit card?",
    acceptedAnswers: [
      "Does the pharmacy accept payment by bank transfer or credit card?",
      "Can I pay here by credit card or bank transfer?",
      "Do you take credit cards or mobile banking transfers at this pharmacy?"
    ],
    hint: "accept payment by bank transfer or credit card"
  },
  {
    vietnamese: "Tôi muốn mua một lọ siro bổ sung canxi và vitamin D3 cho trẻ nhỏ.",
    standardEnglish: "I want to buy a syrup containing calcium and vitamin D3 for children.",
    acceptedAnswers: [
      "I want to buy a syrup containing calcium and vitamin D3 for children.",
      "Can I get calcium and vitamin D3 supplement syrup for kids?",
      "I'd like to purchase a bottle of pediatric calcium and vitamin D3 syrup."
    ],
    hint: "syrup containing calcium and vitamin D3 for children"
  },
  {
    vietnamese: "Thuốc nhỏ mũi này có thể dùng được cho trẻ sơ sinh dưới sáu tháng tuổi không?",
    standardEnglish: "Can these nasal drops be used for newborns under six months of age?",
    acceptedAnswers: [
      "Can these nasal drops be used for newborns under six months of age?",
      "Is this nasal drop safe for infants under six months old?",
      "Can I administer these nose drops to a baby under 6 months old?"
    ],
    hint: "nasal drops be used for newborns under six months of age"
  },
  {
    vietnamese: "Bạn hãy lắc đều chai thuốc trước mỗi lần rót ra thìa uống nhé.",
    standardEnglish: "Shake the medicine bottle well before pouring it onto a spoon each time.",
    acceptedAnswers: [
      "Shake the medicine bottle well before pouring it onto a spoon each time.",
      "Please shake the bottle thoroughly before each dose.",
      "Remember to shake the liquid well before pouring each spoonful."
    ],
    hint: "Shake the medicine bottle well before pouring it onto a spoon"
  },
  {
    vietnamese: "Hãy luôn tuân thủ đúng liều lượng và lời khuyên của nhân viên y tế.",
    standardEnglish: "Always adhere strictly to the dosage and medical staff's advice.",
    acceptedAnswers: [
      "Always adhere strictly to the dosage and medical staff's advice.",
      "Always follow the exact dosage and advice of healthcare professionals.",
      "Strictly follow the prescribed dose and instructions from healthcare workers."
    ],
    hint: "Always adhere strictly to the dosage and medical staff's advice"
  }
];

const topic49Items = [
  {
    vietnamese: "Bạn có rảnh vào tối thứ Bảy này để đi ăn tối cùng tôi không?",
    standardEnglish: "Are you free this Saturday evening to have dinner with me?",
    acceptedAnswers: [
      "Are you free this Saturday evening to have dinner with me?",
      "Would you be free for dinner with me this Saturday night?",
      "Are you available this Saturday night to go out for dinner with me?"
    ],
    hint: "Are you free this Saturday evening to have dinner with me?"
  },
  {
    vietnamese: "Tôi thực sự rất thích buổi trò chuyện thú vị giữa hai chúng ta tối nay.",
    standardEnglish: "I truly enjoyed our lovely conversation tonight.",
    acceptedAnswers: [
      "I truly enjoyed our lovely conversation tonight.",
      "I really loved talking with you tonight.",
      "I had such a wonderful time chatting with you tonight."
    ],
    hint: "truly enjoyed our lovely conversation tonight"
  },
  {
    vietnamese: "Anh ấy đã chuẩn bị một màn cầu hôn vô cùng bất ngờ trên bãi biển.",
    standardEnglish: "He prepared a very romantic surprise proposal on the beach.",
    acceptedAnswers: [
      "He prepared a very romantic surprise proposal on the beach.",
      "He set up an incredible surprise marriage proposal at the beach.",
      "He organized a surprise beach proposal for her."
    ],
    hint: "prepared a very romantic surprise proposal on the beach"
  },
  {
    vietnamese: "Hôm nay là kỷ niệm ba năm ngày hai đứa mình chính thức quen nhau.",
    standardEnglish: "Today marks the three-year anniversary of when we officially started dating.",
    acceptedAnswers: [
      "Today marks the three-year anniversary of when we officially started dating.",
      "Today is our three-year anniversary since we started going out.",
      "It has been three years today since we officially became a couple."
    ],
    hint: "marks the three-year anniversary of when we officially started dating"
  },
  {
    vietnamese: "Sự thấu hiểu và sẻ chia là nền tảng vững chắc cho một mối quan hệ hạnh phúc.",
    standardEnglish: "Mutual understanding and sharing form a solid foundation for a happy relationship.",
    acceptedAnswers: [
      "Mutual understanding and sharing form a solid foundation for a happy relationship.",
      "Understanding and sharing are the bedrock of any blissful relationship.",
      "Empathy and communication build the strong foundation of a lasting partnership."
    ],
    hint: "understanding and sharing form a solid foundation for a happy relationship"
  },
  {
    vietnamese: "Em có muốn cùng anh đi dạo quanh hồ dưới ánh hoàng hôn không?",
    standardEnglish: "Would you like to take a walk around the lake with me at sunset?",
    acceptedAnswers: [
      "Would you like to take a walk around the lake with me at sunset?",
      "Do you want to stroll around the lake with me during sunset?",
      "Shall we walk around the lake together as the sun sets?"
    ],
    hint: "take a walk around the lake with me at sunset"
  },
  {
    vietnamese: "Dù yêu xa nhưng chúng tôi luôn gọi video cho nhau mỗi ngày.",
    standardEnglish: "Despite the long distance, we video call each other every single day.",
    acceptedAnswers: [
      "Despite the long distance, we video call each other every single day.",
      "Even in a long-distance relationship, we make video calls daily.",
      "Although living far apart, we stay in touch via video call every day."
    ],
    hint: "Despite the long distance, we video call each other every single day"
  },
  {
    vietnamese: "Tôi đã phải lòng cô ấy ngay từ cái nhìn đầu tiên khi gặp ở thư viện.",
    standardEnglish: "I fell in love with her at first sight when we met at the library.",
    acceptedAnswers: [
      "I fell in love with her at first sight when we met at the library.",
      "It was love at first sight when I saw her in the library.",
      "I fell for her the very moment I saw her in the library."
    ],
    hint: "fell in love with her at first sight when we met at the library"
  },
  {
    vietnamese: "Anh ấy luôn nhớ những chi tiết nhỏ nhất về sở thích của tôi.",
    standardEnglish: "He always remembers the smallest details about my preferences.",
    acceptedAnswers: [
      "He always remembers the smallest details about my preferences.",
      "He never forgets the little details of things I like.",
      "He pays attention to even the tiniest details about what I enjoy."
    ],
    hint: "always remembers the smallest details about my preferences"
  },
  {
    vietnamese: "Chúng ta cần nói chuyện thẳng thắn với nhau để giải quyết hiểu lầm này.",
    standardEnglish: "We need an honest talk to resolve this misunderstanding.",
    acceptedAnswers: [
      "We need an honest talk to resolve this misunderstanding.",
      "We should speak candidly with each other to clear up this misunderstanding.",
      "Let's talk openly to clear up the confusion between us."
    ],
    hint: "need an honest talk to resolve this misunderstanding"
  },
  {
    vietnamese: "Cô ấy mỉm cười rạng rỡ khi nhận được món quà sinh nhật bất ngờ.",
    standardEnglish: "She smiled radiantly upon receiving the surprise birthday present.",
    acceptedAnswers: [
      "She smiled radiantly upon receiving the surprise birthday present.",
      "She beamed with joy when she got the unexpected birthday gift.",
      "A radiant smile lit up her face as she opened the surprise gift."
    ],
    hint: "smiled radiantly upon receiving the surprise birthday present"
  },
  {
    vietnamese: "Hai người họ trông thật đẹp đôi và rất hòa hợp trong tính cách.",
    standardEnglish: "The two of them look so good together and match in personality.",
    acceptedAnswers: [
      "The two of them look so good together and match in personality.",
      "They make a lovely couple and their personalities complement each other.",
      "They look wonderful together and have compatible personalities."
    ],
    hint: "look so good together and match in personality"
  },
  {
    vietnamese: "Tôi dự định sẽ đưa bạn gái về ra mắt gia đình vào dịp Tết này.",
    standardEnglish: "I plan to bring my girlfriend home to meet my family this Tet holiday.",
    acceptedAnswers: [
      "I plan to bring my girlfriend home to meet my family this Tet holiday.",
      "I intend to introduce my girlfriend to my parents during this Lunar New Year.",
      "I am planning to take my girlfriend home to meet my parents this Tet."
    ],
    hint: "bring my girlfriend home to meet my family this Tet holiday"
  },
  {
    vietnamese: "Cảm ơn em đã luôn là chỗ dựa tinh thần vững chắc cho anh trong lúc khó khăn.",
    standardEnglish: "Thank you for always being my pillar of emotional support during tough times.",
    acceptedAnswers: [
      "Thank you for always being my pillar of emotional support during tough times.",
      "Thanks for being my rock and supporting me through hard moments.",
      "Thank you for always standing by me and comforting me in difficult times."
    ],
    hint: "always being my pillar of emotional support during tough times"
  },
  {
    vietnamese: "Chúng ta có thể cùng nhau nấu một bữa tối ấm cúng tại nhà không?",
    standardEnglish: "Can we cook a cozy dinner together at home?",
    acceptedAnswers: [
      "Can we cook a cozy dinner together at home?",
      "Shall we prepare a cozy home-cooked dinner together?",
      "Would you like to cook a warm dinner with me at home?"
    ],
    hint: "cook a cozy dinner together at home"
  },
  {
    vietnamese: "Anh ấy đã gửi cho tôi một tin nhắn chúc ngủ ngon vô cùng ngọt ngào.",
    standardEnglish: "He sent me an exceptionally sweet goodnight message.",
    acceptedAnswers: [
      "He sent me an exceptionally sweet goodnight message.",
      "He texted me a really sweet good-night text.",
      "He sent a very thoughtful and sweet goodnight text to me."
    ],
    hint: "sent me an exceptionally sweet goodnight message"
  },
  {
    vietnamese: "Tôi muốn tìm một quán cà phê yên tĩnh và lãng mạn cho buổi hẹn hò.",
    standardEnglish: "I want to find a quiet and romantic cafe for our date.",
    acceptedAnswers: [
      "I want to find a quiet and romantic cafe for our date.",
      "I'm looking for a cozy, peaceful cafe for our rendezvous.",
      "I want to look for a quiet, romantic coffee shop for our date."
    ],
    hint: "find a quiet and romantic cafe for our date"
  },
  {
    vietnamese: "Hạnh phúc đôi khi chỉ đơn giản là được ngồi bên cạnh người mình yêu thương.",
    standardEnglish: "Happiness is sometimes simply sitting beside the one you love.",
    acceptedAnswers: [
      "Happiness is sometimes simply sitting beside the one you love.",
      "Sometimes happiness is just being next to someone you cherish.",
      "True happiness can be as simple as sitting next to the person you love."
    ],
    hint: "Happiness is sometimes simply sitting beside the one you love"
  },
  {
    vietnamese: "Cả hai chúng tôi đều có chung niềm đam mê du lịch bụi và khám phá ẩm thực.",
    standardEnglish: "Both of us share a passion for backpacking and culinary exploration.",
    acceptedAnswers: [
      "Both of us share a passion for backpacking and culinary exploration.",
      "We both share a love for backpacking and trying new foods.",
      "Both of us are passionate about traveling and exploring local cuisines."
    ],
    hint: "share a passion for backpacking and culinary exploration"
  },
  {
    vietnamese: "Bạn có tin vào tình yêu đích thực kéo dài suốt cả cuộc đời không?",
    standardEnglish: "Do you believe in true love that lasts a lifetime?",
    acceptedAnswers: [
      "Do you believe in true love that lasts a lifetime?",
      "Do you believe in lifelong true love?",
      "Do you believe genuine love can endure an entire lifetime?"
    ],
    hint: "believe in true love that lasts a lifetime"
  },
  {
    vietnamese: "Anh ấy đã tự tay làm một chiếc bánh kem xinh xắn để tặng sinh nhật tôi.",
    standardEnglish: "He baked a pretty cake by hand to give me for my birthday.",
    acceptedAnswers: [
      "He baked a pretty cake by hand to give me for my birthday.",
      "He made a lovely homemade birthday cake for me.",
      "He personally baked a cute cake as my birthday present."
    ],
    hint: "baked a pretty cake by hand to give me for my birthday"
  },
  {
    vietnamese: "Khi yêu, việc tôn trọng không gian riêng tư của nhau là điều rất cần thiết.",
    standardEnglish: "In love, respecting each other's personal space is essential.",
    acceptedAnswers: [
      "In love, respecting each other's personal space is essential.",
      "Respecting each other's private space is crucial in any relationship.",
      "When in love, giving each other personal space is very important."
    ],
    hint: "respecting each other's personal space is essential"
  },
  {
    vietnamese: "Tôi cảm thấy mình là người may mắn nhất khi có bạn đồng hành trong cuộc sống.",
    standardEnglish: "I feel like the luckiest person to have you as my life companion.",
    acceptedAnswers: [
      "I feel like the luckiest person to have you as my life companion.",
      "I am the luckiest person in the world to share life with you.",
      "Having you by my side as a partner makes me feel so fortunate."
    ],
    hint: "feel like the luckiest person to have you as my life companion"
  },
  {
    vietnamese: "Chúng tôi đã cùng nhau ngắm pháo hoa rực rỡ vào đêm giao thừa.",
    standardEnglish: "We watched the brilliant fireworks together on New Year's Eve.",
    acceptedAnswers: [
      "We watched the brilliant fireworks together on New Year's Eve.",
      "Together we enjoyed the spectacular fireworks on New Year's Eve.",
      "We stood side by side watching the fireworks show on New Year's Eve."
    ],
    hint: "watched the brilliant fireworks together on New Year's Eve"
  },
  {
    vietnamese: "Một lời xin lỗi chân thành có thể hàn gắn mọi rạn nứt trong tình cảm.",
    standardEnglish: "A sincere apology can heal any emotional rift.",
    acceptedAnswers: [
      "A sincere apology can heal any emotional rift.",
      "A heartfelt apology can mend any crack in a relationship.",
      "A genuine apology can heal deep relationship wounds."
    ],
    hint: "sincere apology can heal any emotional rift"
  },
  {
    vietnamese: "Anh ấy đã nắm chặt tay tôi khi hai đứa cùng băng qua con phố đông đúc.",
    standardEnglish: "He held my hand tightly as we crossed the busy street together.",
    acceptedAnswers: [
      "He held my hand tightly as we crossed the busy street together.",
      "He grasped my hand firmly when we walked across the crowded road.",
      "He held onto my hand tightly while crossing the crowded avenue."
    ],
    hint: "held my hand tightly as we crossed the busy street"
  },
  {
    vietnamese: "Chúng ta hãy luôn lắng nghe nhau bằng cả trái tim và sự bao dung.",
    standardEnglish: "Let us always listen to each other with all our hearts and tolerance.",
    acceptedAnswers: [
      "Let us always listen to each other with all our hearts and tolerance.",
      "We should always listen with an open heart and deep empathy.",
      "Let's make sure to listen to one another with patience and understanding."
    ],
    hint: "listen to each other with all our hearts and tolerance"
  },
  {
    vietnamese: "Cô ấy luôn tạo bất ngờ cho bạn trai bằng những lá thư tay chan chứa yêu thương.",
    standardEnglish: "She always surprises her boyfriend with handwritten letters full of love.",
    acceptedAnswers: [
      "She always surprises her boyfriend with handwritten letters full of love.",
      "She frequently leaves affectionate handwritten notes for her boyfriend.",
      "She loves surprising her partner with sweet handwritten letters."
    ],
    hint: "surprises her boyfriend with handwritten letters full of love"
  },
  {
    vietnamese: "Tình yêu không phải là tìm một người hoàn hảo, mà là nhìn thấy sự hoàn hảo ở một người không hoàn hảo.",
    standardEnglish: "Love is not about finding a perfect person, but seeing perfection in an imperfect person.",
    acceptedAnswers: [
      "Love is not about finding a perfect person, but seeing perfection in an imperfect person.",
      "Love is not finding someone perfect, but learning to see an imperfect person perfectly.",
      "True love isn't finding perfection, but embracing someone's imperfections."
    ],
    hint: "not about finding a perfect person, but seeing perfection in an imperfect person"
  },
  {
    vietnamese: "Bạn có muốn cùng tôi đi xem buổi biểu diễn âm nhạc acoustic vào cuối tuần này?",
    standardEnglish: "Would you like to go to an acoustic live music show with me this weekend?",
    acceptedAnswers: [
      "Would you like to go to an acoustic live music show with me this weekend?",
      "Do you want to check out an acoustic music concert with me this weekend?",
      "Would you come with me to an acoustic live gig this weekend?"
    ],
    hint: "go to an acoustic live music show with me this weekend"
  },
  {
    vietnamese: "Mỗi khoảnh khắc ở bên bạn đều trở thành kỷ niệm quý giá trong tim tôi.",
    standardEnglish: "Every moment spent with you becomes a precious memory in my heart.",
    acceptedAnswers: [
      "Every moment spent with you becomes a precious memory in my heart.",
      "Every single minute with you turns into a cherished memory.",
      "Any time spent by your side is a treasure in my heart."
    ],
    hint: "Every moment spent with you becomes a precious memory"
  },
  {
    vietnamese: "Họ đã cùng nhau vượt qua bao nhiêu sóng gió để đi đến một cái kết có hậu.",
    standardEnglish: "They overcame countless storms together to reach a happy ending.",
    acceptedAnswers: [
      "They overcame countless storms together to reach a happy ending.",
      "They weathered many ups and downs together toward a fairytale ending.",
      "Together they surmounted many hardships to achieve their happy ending."
    ],
    hint: "overcame countless storms together to reach a happy ending"
  },
  {
    vietnamese: "Ánh mắt ấm áp của anh ấy khiến mọi lo âu trong tôi đều tan biến.",
    standardEnglish: "His warm gaze makes all my worries melt away.",
    acceptedAnswers: [
      "His warm gaze makes all my worries melt away.",
      "The warmth in his eyes makes all my anxieties disappear.",
      "Looking into his gentle eyes dispels all of my stress."
    ],
    hint: "warm gaze makes all my worries melt away"
  },
  {
    vietnamese: "Chúng tôi cùng nhau lên kế hoạch cho chuyến du lịch kỷ niệm ngày cưới.",
    standardEnglish: "We are planning our wedding anniversary trip together.",
    acceptedAnswers: [
      "We are planning our wedding anniversary trip together.",
      "We are collaborating on a travel plan for our wedding anniversary.",
      "Together we are mapping out a vacation to celebrate our anniversary."
    ],
    hint: "planning our wedding anniversary trip together"
  },
  {
    vietnamese: "Sự chung thủy là phẩm chất quan trọng nhất để giữ lửa cho hôn nhân bền vững.",
    standardEnglish: "Faithfulness is the most important virtue in sustaining a long-lasting marriage.",
    acceptedAnswers: [
      "Faithfulness is the most important virtue in sustaining a long-lasting marriage.",
      "Fidelity is essential to keep the flame burning in a strong marriage.",
      "Loyalty is the cornerstone of preserving a resilient marriage."
    ],
    hint: "Faithfulness is the most important virtue in sustaining a long-lasting marriage"
  },
  {
    vietnamese: "Anh ấy đã tặng cô ấy một chiếc vòng tay khắc tên hai người nhân dịp sinh nhật.",
    standardEnglish: "He gave her a bracelet engraved with their names for her birthday.",
    acceptedAnswers: [
      "He gave her a bracelet engraved with their names for her birthday.",
      "He bought her an engraved bracelet with both their names on it for her birthday.",
      "He presented her with a bracelet featuring their engraved names."
    ],
    hint: "bracelet engraved with their names for her birthday"
  },
  {
    vietnamese: "Tôi thích cách bạn luôn làm cho tôi cười ngay cả trong những ngày tồi tệ nhất.",
    standardEnglish: "I love the way you always make me laugh even on my worst days.",
    acceptedAnswers: [
      "I love the way you always make me laugh even on my worst days.",
      "I adore how you can bring a smile to my face even when times are tough.",
      "I love that you can always make me giggle even on a terrible day."
    ],
    hint: "love the way you always make me laugh even on my worst days"
  },
  {
    vietnamese: "Chúng ta hãy học cách chấp nhận sự khác biệt của đối phương.",
    standardEnglish: "Let us learn to embrace each other's differences.",
    acceptedAnswers: [
      "Let us learn to embrace each other's differences.",
      "We should learn to accept our partner's distinct traits.",
      "Let's appreciate and accept the differences between us."
    ],
    hint: "learn to embrace each other's differences"
  },
  {
    vietnamese: "Buổi hẹn hò đầu tiên của chúng tôi diễn ra tại một quán trà nhỏ trên phố cổ.",
    standardEnglish: "Our very first date took place at a small teahouse in the Old Quarter.",
    acceptedAnswers: [
      "Our very first date took place at a small teahouse in the Old Quarter.",
      "We had our first date in a quaint tea shop located in the old town.",
      "Our first date was at a cozy little tea shop in the Old Quarter."
    ],
    hint: "first date took place at a small teahouse in the Old Quarter"
  },
  {
    vietnamese: "Hãy luôn dành thời gian chất lượng bên người bạn đời dù công việc có bận rộn.",
    standardEnglish: "Always dedicate quality time to your spouse no matter how busy work gets.",
    acceptedAnswers: [
      "Always dedicate quality time to your spouse no matter how busy work gets.",
      "Make time for your partner regardless of your demanding work schedule.",
      "Always spend quality time with your spouse even with a busy schedule."
    ],
    hint: "dedicate quality time to your spouse no matter how busy"
  },
  {
    vietnamese: "Cảm giác bình yên nhất là được trở về nhà và nhìn thấy nụ cười của em.",
    standardEnglish: "The most peaceful feeling is coming home and seeing your smile.",
    acceptedAnswers: [
      "The most peaceful feeling is coming home and seeing your smile.",
      "Nothing feels more serene than returning home to your radiant smile.",
      "True peace is walking through the door and greeting your warm smile."
    ],
    hint: "most peaceful feeling is coming home and seeing your smile"
  },
  {
    vietnamese: "Tình cảm chân thành không cần những lời hoa mỹ mà thể hiện qua từng hành động.",
    standardEnglish: "True affection does not need fancy words; it is shown through every action.",
    acceptedAnswers: [
      "True affection does not need fancy words; it is shown through every action.",
      "Genuine love needs no flowery rhetoric; it speaks through small deeds.",
      "Sincere love doesn't require poetic words, but shows in everyday actions."
    ],
    hint: "does not need fancy words; it is shown through every action"
  },
  {
    vietnamese: "Chúng tôi cùng nhau ngắm bình minh trên đỉnh núi trong chuyến đi phượt vừa rồi.",
    standardEnglish: "We watched the sunrise from the mountain peak together during our recent road trip.",
    acceptedAnswers: [
      "We watched the sunrise from the mountain peak together during our recent road trip.",
      "Together we caught the sunrise atop the mountain on our latest backpacking trip.",
      "We welcomed the morning sun from the mountaintop on our last trip."
    ],
    hint: "watched the sunrise from the mountain peak together"
  },
  {
    vietnamese: "Cảm ơn cuộc đời đã mang một người tuyệt vời như bạn đến bên tôi.",
    standardEnglish: "Thank life for bringing such a wonderful person like you into my world.",
    acceptedAnswers: [
      "Thank life for bringing such a wonderful person like you into my world.",
      "I thank destiny for leading an amazing person like you to my side.",
      "I am grateful that life brought someone as wonderful as you to me."
    ],
    hint: "bringing such a wonderful person like you into my world"
  },
  {
    vietnamese: "Tình yêu thương đích thực luôn mang lại cho chúng ta sức mạnh để vượt qua mọi thử thách.",
    standardEnglish: "Genuine love always grants us the strength to conquer all obstacles.",
    acceptedAnswers: [
      "Genuine love always grants us the strength to conquer all obstacles.",
      "True love invariably empowers us to triumph over every adversity.",
      "Authentic love gives us the courage and strength to overcome any challenge."
    ],
    hint: "grants us the strength to conquer all obstacles"
  }
];

const topic50Items = [
  {
    vietnamese: "Kế hoạch năm năm tới của bạn sau khi tốt nghiệp đại học là gì?",
    standardEnglish: "What is your five-year plan after graduating from university?",
    acceptedAnswers: [
      "What is your five-year plan after graduating from university?",
      "What are your plans for the next five years following college graduation?",
      "What goals do you have set for the five years after college?"
    ],
    hint: "five-year plan after graduating from university"
  },
  {
    vietnamese: "Tôi muốn học thêm tiếng Trung và tiếng Nhật để mở rộng cơ hội nghề nghiệp.",
    standardEnglish: "I want to learn Chinese and Japanese to broaden my career opportunities.",
    acceptedAnswers: [
      "I want to learn Chinese and Japanese to broaden my career opportunities.",
      "I plan to study Chinese and Japanese to expand my job prospects.",
      "I'd like to pick up Chinese and Japanese to enhance my career options."
    ],
    hint: "broaden my career opportunities"
  },
  {
    vietnamese: "Mục tiêu tài chính của tôi là tiết kiệm đủ tiền để trả trước cho căn nhà đầu tiên.",
    standardEnglish: "My financial goal is to save enough money for the down payment on my first home.",
    acceptedAnswers: [
      "My financial goal is to save enough money for the down payment on my first home.",
      "My target is saving sufficient funds for a down payment on my first apartment.",
      "I aim to save enough cash to put down a deposit on my first house."
    ],
    hint: "save enough money for the down payment on my first home"
  },
  {
    vietnamese: "Cô ấy đặt mục tiêu đọc ít nhất hai mươi cuốn sách trong năm nay.",
    standardEnglish: "She set a goal to read at least twenty books this year.",
    acceptedAnswers: [
      "She set a goal to read at least twenty books this year.",
      "Her target is reading a minimum of 20 books throughout this year.",
      "She aims to finish at least twenty books before the year ends."
    ],
    hint: "set a goal to read at least twenty books this year"
  },
  {
    vietnamese: "Tôi đang nỗ lực học hỏi để sớm được thăng chức lên vị trí quản lý nhóm.",
    standardEnglish: "I am working hard to be promoted to team manager soon.",
    acceptedAnswers: [
      "I am working hard to be promoted to team manager soon.",
      "I'm striving to earn a promotion to team lead in the near future.",
      "I am making an effort to get promoted to a managerial role soon."
    ],
    hint: "working hard to be promoted to team manager soon"
  },
  {
    vietnamese: "Chúng tôi dự định sẽ mở rộng chi nhánh kinh doanh sang thị trường miền Trung.",
    standardEnglish: "We plan to expand our business branches into the central region market.",
    acceptedAnswers: [
      "We plan to expand our business branches into the central region market.",
      "Our plan is to open new branch offices across the central market.",
      "We intend to expand our business operations to central Vietnam."
    ],
    hint: "expand our business branches into the central region market"
  },
  {
    vietnamese: "Học cách quản lý thời gian hiệu quả giúp bạn hoàn thành mọi kế hoạch đúng hạn.",
    standardEnglish: "Learning effective time management helps you accomplish all plans on time.",
    acceptedAnswers: [
      "Learning effective time management helps you accomplish all plans on time.",
      "Mastering time management allows you to finish every goal on schedule.",
      "Good time management skills ensure your plans are executed punctually."
    ],
    hint: "effective time management helps you accomplish all plans on time"
  },
  {
    vietnamese: "Tôi mong muốn có cơ hội đi du học thạc sĩ tại một trường đại học ở châu Âu.",
    standardEnglish: "I desire the opportunity to pursue a master's degree at a European university.",
    acceptedAnswers: [
      "I desire the opportunity to pursue a master's degree at a European university.",
      "I hope to study abroad for a master's program in Europe.",
      "My wish is to do a master's degree at a university in Europe."
    ],
    hint: "pursue a master's degree at a European university"
  },
  {
    vietnamese: "Hãy chia nhỏ những mục tiêu lớn thành các bước hành động cụ thể mỗi ngày.",
    standardEnglish: "Break large goals down into specific daily action steps.",
    acceptedAnswers: [
      "Break large goals down into specific daily action steps.",
      "Divide your big objectives into actionable steps for each day.",
      "Break your big goals into small, manageable daily tasks."
    ],
    hint: "Break large goals down into specific daily action steps"
  },
  {
    vietnamese: "Anh ấy đặt mục tiêu chạy bộ hoàn thành cự ly bán marathon hai mươi mốt kilomet.",
    standardEnglish: "He set a goal to complete a twenty-one kilometer half marathon.",
    acceptedAnswers: [
      "He set a goal to complete a twenty-one kilometer half marathon.",
      "His target is finishing a 21km half marathon run.",
      "He aims to complete a half-marathon of twenty-one kilometers."
    ],
    hint: "complete a twenty-one kilometer half marathon"
  },
  {
    vietnamese: "Tôi muốn xây dựng một quỹ dự phòng khẩn cấp đủ chi tiêu cho sáu tháng.",
    standardEnglish: "I want to build an emergency fund sufficient for six months of living expenses.",
    acceptedAnswers: [
      "I want to build an emergency fund sufficient for six months of living expenses.",
      "I aim to create an emergency reserve covering six months of expenses.",
      "I plan to establish a rainy-day fund equivalent to six months of living costs."
    ],
    hint: "emergency fund sufficient for six months of living expenses"
  },
  {
    vietnamese: "Đầu tư vào tri thức luôn mang lại mức lợi nhuận cao nhất cho tương lai.",
    standardEnglish: "Investing in knowledge always pays the best interest for the future.",
    acceptedAnswers: [
      "Investing in knowledge always pays the best interest for the future.",
      "An investment in knowledge yields the greatest returns for your future.",
      "Putting resources into education always brings the highest dividends."
    ],
    hint: "Investing in knowledge always pays the best interest"
  },
  {
    vietnamese: "Tôi dự định tham gia một khóa học trực tuyến về trí tuệ nhân tạo và phân tích dữ liệu.",
    standardEnglish: "I plan to take an online course on artificial intelligence and data analysis.",
    acceptedAnswers: [
      "I plan to take an online course on artificial intelligence and data analysis.",
      "I intend to enroll in an online class about AI and data analytics.",
      "I'm planning to join an online course covering AI and big data analytics."
    ],
    hint: "online course on artificial intelligence and data analysis"
  },
  {
    vietnamese: "Ước mơ lớn nhất của tôi là có thể đi du lịch vòng quanh thế giới trước tuổi bốn mươi.",
    standardEnglish: "My biggest dream is to travel around the world before turning forty.",
    acceptedAnswers: [
      "My biggest dream is to travel around the world before turning forty.",
      "My ultimate dream is traveling the world before age forty.",
      "To backpack across the globe before I turn 40 is my greatest wish."
    ],
    hint: "travel around the world before turning forty"
  },
  {
    vietnamese: "Viết ra các mục tiêu trên giấy sẽ giúp bạn tăng khả năng hiện thực hóa chúng.",
    standardEnglish: "Writing down your goals on paper increases the likelihood of achieving them.",
    acceptedAnswers: [
      "Writing down your goals on paper increases the likelihood of achieving them.",
      "Putting your goals down on paper makes you much more likely to realize them.",
      "Writing goals on paper boosts your chances of turning them into reality."
    ],
    hint: "Writing down your goals on paper increases the likelihood"
  },
  {
    vietnamese: "Tôi muốn dành nhiều thời gian hơn cho gia đình và sở thích cá nhân.",
    standardEnglish: "I want to spend more quality time with my family and on personal hobbies.",
    acceptedAnswers: [
      "I want to spend more quality time with my family and on personal hobbies.",
      "I wish to dedicate more time to family and my personal pastimes.",
      "I want to carve out more time for loved ones and personal interests."
    ],
    hint: "spend more quality time with my family and personal hobbies"
  },
  {
    vietnamese: "Kế hoạch nghỉ hưu an nhàn bắt đầu từ việc tích lũy và đầu tư thông minh ngay hôm nay.",
    standardEnglish: "A comfortable retirement plan begins with smart saving and investing today.",
    acceptedAnswers: [
      "A comfortable retirement plan begins with smart saving and investing today.",
      "Planning a peaceful retirement starts with wise savings and investments today.",
      "A restful retirement depends on starting smart investments and savings now."
    ],
    hint: "comfortable retirement plan begins with smart saving and investing"
  },
  {
    vietnamese: "Anh ấy mong muốn thành lập một tổ chức từ thiện hỗ trợ trẻ em vùng cao đến trường.",
    standardEnglish: "He aspires to establish a charity supporting highland children to attend school.",
    acceptedAnswers: [
      "He aspires to establish a charity supporting highland children to attend school.",
      "He wants to start a non-profit organization helping mountainous children go to school.",
      "His goal is founding a charity to help underprivileged mountain children get education."
    ],
    hint: "establish a charity supporting highland children to attend school"
  },
  {
    vietnamese: "Đừng để nỗi sợ thất bại ngăn cản bạn bắt đầu những dự định mới mẻ.",
    standardEnglish: "Do not let the fear of failure stop you from embarking on new ventures.",
    acceptedAnswers: [
      "Do not let the fear of failure stop you from embarking on new ventures.",
      "Never let the fear of failing keep you from starting fresh projects.",
      "Don't allow fear of failure to hold you back from pursuing new plans."
    ],
    hint: "fear of failure stop you from embarking on new ventures"
  },
  {
    vietnamese: "Tôi dự định cải thiện kỹ năng giao tiếp và thuyết trình trước đám đông trong quý tới.",
    standardEnglish: "I plan to hone my communication and public speaking skills next quarter.",
    acceptedAnswers: [
      "I plan to hone my communication and public speaking skills next quarter.",
      "I intend to improve my interpersonal and public presentation abilities in the next quarter.",
      "My goal for next quarter is improving my communication and public speaking."
    ],
    hint: "hone my communication and public speaking skills next quarter"
  },
  {
    vietnamese: "Chúng tôi đang hoàn thiện hồ sơ để xin giấy phép thành lập công ty công nghệ mới.",
    standardEnglish: "We are finalizing documents to apply for a license for our new tech company.",
    acceptedAnswers: [
      "We are finalizing documents to apply for a license for our new tech company.",
      "We're completing paperwork to get our new technology startup officially registered.",
      "We are preparing the legal documentation to establish a new tech venture."
    ],
    hint: "finalizing documents to apply for a license for our new tech company"
  },
  {
    vietnamese: "Việc đánh giá lại mục tiêu hàng tháng giúp bạn điều chỉnh hướng đi kịp thời.",
    standardEnglish: "Reviewing goals monthly helps you make timely course corrections.",
    acceptedAnswers: [
      "Reviewing goals monthly helps you make timely course corrections.",
      "A monthly goal review enables you to adjust your direction in time.",
      "Evaluating your progress every month ensures you adjust strategies promptly."
    ],
    hint: "Reviewing goals monthly helps you make timely course corrections"
  },
  {
    vietnamese: "Tôi muốn tự tay thiết kế và xây dựng một ngôi nhà vườn xanh mát ở ngoại ô.",
    standardEnglish: "I want to design and build a green garden house in the suburbs myself.",
    acceptedAnswers: [
      "I want to design and build a green garden house in the suburbs myself.",
      "My dream is to personally design and construct a leafy garden home outside the city.",
      "I plan to design and construct an eco-friendly suburban garden home on my own."
    ],
    hint: "design and build a green garden house in the suburbs myself"
  },
  {
    vietnamese: "Kỷ luật bản thân chính là cây cầu nối giữa ước mơ và thành quả thực tế.",
    standardEnglish: "Self-discipline is the bridge connecting dreams to tangible achievements.",
    acceptedAnswers: [
      "Self-discipline is the bridge connecting dreams to tangible achievements.",
      "Personal discipline is the bridge between aspirations and accomplishments.",
      "Self-discipline serves as the bridge between having goals and achieving them."
    ],
    hint: "Self-discipline is the bridge connecting dreams to tangible achievements"
  },
  {
    vietnamese: "Năm tới, tôi sẽ tham gia một chuyến đi tình nguyện tại vùng sâu vùng xa.",
    standardEnglish: "Next year, I will join a volunteer mission in a remote area.",
    acceptedAnswers: [
      "Next year, I will join a volunteer mission in a remote area.",
      "I am going to participate in a volunteer trip to remote rural communities next year.",
      "Next year I plan to volunteer in remote underprivileged regions."
    ],
    hint: "join a volunteer mission in a remote area"
  },
  {
    vietnamese: "Tôi đặt mục tiêu giảm năm kilôgam và có cơ thể săn chắc hơn vào mùa hè.",
    standardEnglish: "I aim to lose five kilograms and achieve a firmer body by summer.",
    acceptedAnswers: [
      "I aim to lose five kilograms and achieve a firmer body by summer.",
      "My goal is shedding 5 kilos and toning up before summer arrives.",
      "I plan to lose five kilos and get into better shape by this summer."
    ],
    hint: "lose five kilograms and achieve a firmer body by summer"
  },
  {
    vietnamese: "Mỗi bước tiến nhỏ mỗi ngày sẽ tích lũy thành những thành công to lớn sau một năm.",
    standardEnglish: "Small daily progress compounds into huge successes over the course of a year.",
    acceptedAnswers: [
      "Small daily progress compounds into huge successes over the course of a year.",
      "Tiny improvements every day add up to massive achievements after a year.",
      "Consistent small steps each day accumulate into extraordinary success in one year."
    ],
    hint: "Small daily progress compounds into huge successes"
  },
  {
    vietnamese: "Tôi mong muốn viết và xuất bản một cuốn sách chia sẻ kinh nghiệm sống của mình.",
    standardEnglish: "I hope to write and publish a book sharing my life experiences.",
    acceptedAnswers: [
      "I hope to write and publish a book sharing my life experiences.",
      "My aspiration is writing and publishing a memoir of my life lessons.",
      "I wish to author and publish a book about my personal journey."
    ],
    hint: "write and publish a book sharing my life experiences"
  },
  {
    vietnamese: "Hãy tìm kiếm một người cố vấn có kinh nghiệm để dẫn dắt bạn trên con đường sự nghiệp.",
    standardEnglish: "Look for an experienced mentor to guide you along your career path.",
    acceptedAnswers: [
      "Look for an experienced mentor to guide you along your career path.",
      "Seek out a seasoned mentor who can help steer your career trajectory.",
      "Find an experienced mentor to guide your professional journey."
    ],
    hint: "experienced mentor to guide you along your career path"
  },
  {
    vietnamese: "Tôi muốn học cách nấu ăn thành thạo mười món đặc sản truyền thống Việt Nam.",
    standardEnglish: "I want to master cooking ten traditional Vietnamese specialty dishes.",
    acceptedAnswers: [
      "I want to master cooking ten traditional Vietnamese specialty dishes.",
      "My goal is learning to expertly cook 10 traditional Vietnamese delicacies.",
      "I'd like to become proficient at preparing ten authentic Vietnamese specialties."
    ],
    hint: "master cooking ten traditional Vietnamese specialty dishes"
  },
  {
    vietnamese: "Mục tiêu dài hạn của công ty là chuyển đổi hoàn toàn sang năng lượng tái tạo.",
    standardEnglish: "The company's long-term goal is transitioning entirely to renewable energy.",
    acceptedAnswers: [
      "The company's long-term goal is transitioning entirely to renewable energy.",
      "Our firm's long-range target is shifting fully to renewable energy sources.",
      "The corporate long-term vision is switching 100 percent to green renewable energy."
    ],
    hint: "transitioning entirely to renewable energy"
  },
  {
    vietnamese: "Hãy kiên định với mục tiêu nhưng luôn linh hoạt trong phương pháp thực hiện.",
    standardEnglish: "Be stubborn about your goals, but stay flexible with your methods.",
    acceptedAnswers: [
      "Be stubborn about your goals, but stay flexible with your methods.",
      "Stay firm on your objectives while remaining flexible in your approach.",
      "Keep your goals steadfast, but adapt your strategies as needed."
    ],
    hint: "Be stubborn about your goals, but stay flexible with your methods"
  },
  {
    vietnamese: "Tôi đặt kế hoạch hoàn thành luận văn tốt nghiệp xuất sắc trước tháng Sáu.",
    standardEnglish: "I plan to finish my graduation thesis with excellence before June.",
    acceptedAnswers: [
      "I plan to finish my graduation thesis with excellence before June.",
      "I aim to complete my graduation dissertation with distinction by June.",
      "My goal is to submit an outstanding graduation thesis ahead of June."
    ],
    hint: "finish my graduation thesis with excellence before June"
  },
  {
    vietnamese: "Thành công không đến sau một đêm mà là kết quả của cả một hành trình nỗ lực bền bỉ.",
    standardEnglish: "Success does not happen overnight; it is the result of continuous persistent effort.",
    acceptedAnswers: [
      "Success does not happen overnight; it is the result of continuous persistent effort.",
      "Success isn't an overnight phenomenon, but the product of relentless hard work.",
      "Achieving success takes time and stems from a journey of enduring perseverance."
    ],
    hint: "Success does not happen overnight; it is the result of continuous effort"
  },
  {
    vietnamese: "Tôi muốn học chơi đàn piano để có thể tự biểu diễn những bản nhạc cổ điển yêu thích.",
    standardEnglish: "I want to learn to play the piano so I can perform my favorite classical pieces.",
    acceptedAnswers: [
      "I want to learn to play the piano so I can perform my favorite classical pieces.",
      "I'd love to learn piano in order to play my favorite classical compositions.",
      "My wish is to pick up the piano and play beloved classical melodies myself."
    ],
    hint: "learn to play the piano so I can perform my favorite classical pieces"
  },
  {
    vietnamese: "Chúng tôi lên kế hoạch trồng một trăm cây xanh xung quanh khu dân cư vào mùa xuân.",
    standardEnglish: "We plan to plant one hundred trees around the neighborhood in the spring.",
    acceptedAnswers: [
      "We plan to plant one hundred trees around the neighborhood in the spring.",
      "Our project involves planting 100 green trees across the community this spring.",
      "We're organizing to plant one hundred trees in our neighborhood come springtime."
    ],
    hint: "plant one hundred trees around the neighborhood in the spring"
  },
  {
    vietnamese: "Hãy dành ra mười lăm phút mỗi tối để lập danh sách công việc cần làm cho ngày mai.",
    standardEnglish: "Spend fifteen minutes every evening planning your to-do list for tomorrow.",
    acceptedAnswers: [
      "Spend fifteen minutes every evening planning your to-do list for tomorrow.",
      "Take 15 minutes each night to write down tomorrow's to-do items.",
      "Dedicate fifteen minutes at night to organize your schedule for the next day."
    ],
    hint: "planning your to-do list for tomorrow"
  },
  {
    vietnamese: "Tôi muốn rèn luyện thói quen dậy sớm lúc năm giờ ba mươi để tập thể dục và đọc sách.",
    standardEnglish: "I want to build the habit of waking up at five-thirty to exercise and read.",
    acceptedAnswers: [
      "I want to build the habit of waking up at five-thirty to exercise and read.",
      "I aim to establish a routine of rising at 5:30 AM to work out and read books.",
      "I'm cultivating the habit of waking up at 5:30 to read and exercise."
    ],
    hint: "waking up at five-thirty to exercise and read"
  },
  {
    vietnamese: "Chỉ khi bạn dám ước mơ lớn thì bạn mới có động lực bứt phá khỏi vùng an toàn.",
    standardEnglish: "Only when you dare to dream big will you be motivated to step out of your comfort zone.",
    acceptedAnswers: [
      "Only when you dare to dream big will you be motivated to step out of your comfort zone.",
      "Dreaming big is what fuels the courage to break free from your comfort zone.",
      "Daring to think big gives you the drive to push beyond your familiar comfort boundaries."
    ],
    hint: "step out of your comfort zone"
  },
  {
    vietnamese: "Tôi dự định đăng ký một khóa đào tạo chứng chỉ quản trị dự án chuyên nghiệp PMP.",
    standardEnglish: "I plan to enroll in a Project Management Professional PMP certification course.",
    acceptedAnswers: [
      "I plan to enroll in a Project Management Professional PMP certification course.",
      "I intend to take a training course for the PMP professional certification.",
      "I'm planning to sign up for a Project Management Professional (PMP) training course."
    ],
    hint: "Project Management Professional PMP certification course"
  },
  {
    vietnamese: "Học cách từ chối những điều không quan trọng để tập trung vào mục tiêu cốt lõi của bạn.",
    standardEnglish: "Learn to say no to unimportant things to focus on your core goals.",
    acceptedAnswers: [
      "Learn to say no to unimportant things to focus on your core goals.",
      "Master saying no to distractions so you can center on your primary objectives.",
      "Refuse non-essential requests so you have energy for your key goals."
    ],
    hint: "say no to unimportant things to focus on your core goals"
  },
  {
    vietnamese: "Tôi ước mơ được thành lập một quỹ học bổng dành cho học sinh nghèo hiếu học.",
    standardEnglish: "I dream of setting up a scholarship fund for underprivileged studious students.",
    acceptedAnswers: [
      "I dream of setting up a scholarship fund for underprivileged studious students.",
      "My dream is establishing a scholarship endowment for needy, diligent students.",
      "I aspire to found a scholarship grant to assist hardworking poor pupils."
    ],
    hint: "setting up a scholarship fund for underprivileged studious students"
  },
  {
    vietnamese: "Tương lai thuộc về những người luôn tin tưởng vào vẻ đẹp của ước mơ.",
    standardEnglish: "The future belongs to those who believe in the beauty of their dreams.",
    acceptedAnswers: [
      "The future belongs to those who believe in the beauty of their dreams.",
      "Tomorrow belongs to the individuals who have faith in their dreams' beauty.",
      "The future is for those who dare believe in the splendor of what they dream."
    ],
    hint: "The future belongs to those who believe in the beauty of their dreams"
  },
  {
    vietnamese: "Hãy ghi nhận và ăn mừng từng cột mốc nhỏ bạn đã đạt được trên hành trình của mình.",
    standardEnglish: "Acknowledge and celebrate every small milestone you reach on your journey.",
    acceptedAnswers: [
      "Acknowledge and celebrate every small milestone you reach on your journey.",
      "Recognize and celebrate each small achievement along your path.",
      "Don't forget to celebrate every little milestone along your personal journey."
    ],
    hint: "Acknowledge and celebrate every small milestone you reach on your journey"
  },
  {
    vietnamese: "Không bao giờ là quá muộn để bắt đầu đặt ra một mục tiêu mới và vẽ nên một giấc mơ mới.",
    standardEnglish: "It is never too late to set a new goal or dream a new dream.",
    acceptedAnswers: [
      "It is never too late to set a new goal or dream a new dream.",
      "You are never too old to set another goal or to dream a new dream.",
      "It is never too late to define fresh aspirations and chase a new dream."
    ],
    hint: "never too late to set a new goal or dream a new dream"
  }
];

function generate() {
  const results = [];
  topic48Items.forEach((item, idx) => {
    const num = String(idx + 6).padStart(2, '0');
    results.push({
      id: `topic48_${num}`,
      topic: "Hiệu thuốc & Thuốc men (Pharmacy & Medication)",
      category: "Giải trí & Sức khỏe",
      ...item
    });
  });
  topic49Items.forEach((item, idx) => {
    const num = String(idx + 6).padStart(2, '0');
    results.push({
      id: `topic49_${num}`,
      topic: "Hẹn hò & Tình cảm (Dating & Relationships)",
      category: "Giải trí & Sức khỏe",
      ...item
    });
  });
  topic50Items.forEach((item, idx) => {
    const num = String(idx + 6).padStart(2, '0');
    results.push({
      id: `topic50_${num}`,
      topic: "Kế hoạch & Mục tiêu tương lai (Future Plans & Goals)",
      category: "Giải trí & Sức khỏe",
      ...item
    });
  });
  return results;
}

module.exports = { generate };
