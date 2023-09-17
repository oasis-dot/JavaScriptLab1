//ФУНКЦІЯ isIPAddress(ip)
//
function isIPAddress(ip) {
    // Паттерн для перевірки ІР-адреси
    const ipPattern = /^((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])$/;
  
    // Перевіряємо, чи відповідає рядок паттерну
    return ipPattern.test(ip);
  }
  
  console.log(isIPAddress("192.168.0.1")); 
  console.log(isIPAddress("256.0.0.1"));
  console.log(isIPAddress("192.168.0")); 
  console.log(isIPAddress("abc.def.ghi.jkl"));
  

//ФУНКЦІЯ findRGBA(text)
//
  function findRGBA(text) {
    const rgbaPattern = /rgba\(([0-2]?[0-5]?[0-5],\s){3}(0(\.\d{1,2})?|1)\)/;
    const match = text.match(rgbaPattern);
  
    if (match) {
      return match[0];
    }
  
    return null;
  }
  
  // Приклади використання:
  const result1 = findRGBA("background-color: rgba(255, 0, 0, 0.5);");
  console.log(result1); // Виведе: rgba(255, 0, 0, 0.5)
  
  const result2 = findRGBA("color: #ffffff;");
  console.log(result2); // Виведе: null, оскільки рядок формату rgba не знайдено
  

//ФУНКЦІЯ findHexColor(text)
//
  function findHexColor(text) {
    const HexPattern = /#(([0-9]|[A-F])){6}/;
    const match = text.match(HexPattern);
  
    if (match) {
      return match[0];
    }
  
    return null;
  }

  // Приклади використання:
  const result3 = findHexColor("background-color: #00FF2A;");
  console.log(result3); // Виведе: #00FF2A
  
  const result4 = findHexColor("color: #222FFO;");
  console.log(result2); // Виведе: null, оскільки O не може бути тут


//ФУНКЦІЯ findTags(text, tag)
//
  function findTags(text, tag) {
    let regex = new RegExp(`<${tag}\\s[^>]*>`, 'g');
    return text.match(regex) || [];
}

let s = '<img src="image1.jpg"><div><img src="image2.jpg"></div><img src="image3.jpg">';
let tags = findTags(s, "img");
console.log(tags);


//ФУНКЦІЯ findPosNum(text)
//
function findPosNum(text) {
    // Використовуємо регулярний вираз для пошуку додатніх чисел у тексті.
    // \\d+ відповідає одному або більше цифр.
    const regex = /(-?)(\d+)(.?)((\d+)?)/g;
    
    // Використовуємо метод match для пошуку всіх збігів у тексті і створення масиву чисел.
    const matches = text.match(regex);
    
    if (matches) {
        // Фільтруємо знайдені числа, залишаючи лише додатні числа.
        const positiveNumbers = matches.filter(num => parseInt(num) > 0);
        return positiveNumbers;
    } else {
        // Якщо немає збігів, повертаємо порожній масив.
        return [];
    }
}

// Приклад використання:
const text = "Текст з числами: 42, -15, 7, 0, 3.14, 100500";
const positiveNumbers = findPosNum(text);
console.log(positiveNumbers); // Виводить масив додатніх чисел: [42, 7, 3.14, 100500]


//ФУНКЦІЯ findDates(text)
//
function findDates(text) {
    const datePattern = /\d{4}-((0(1|3|5|7|8)|10|12)-(([1-2][0-9])|0[1-9]|3[01])|(0(4|6|9)|11)-(([1-2][0-9])|0[1-9]|30)|02-(0[1-9]|[1-2][0-9]))/g;
    let match = text.match(datePattern);
  
    if (match) {
      return match;
    }
  
    return [];
  }
  
  // Приклади використання:
  const text2 = "Сьогоднішня дата: 2023-09-16. А це інша дата: 2023-09-15.Я";
const dates = findDates(text2);
console.log(dates);
 

//ФУНКЦІЯ findEmail(text)
//
function findEmail(text) {
    // Регулярний вираз для пошуку email адрес
    let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
    
    // Знаходимо всі входження email адрес у тексті
    let emails = text.match(emailRegex);
    
    return emails || [];
  }
  
  // Приклад використання:
  let text3 = "Мій email: test@example.com, і ще один: hello@world.com";
  let emails = findEmail(text3);
  console.log(emails);