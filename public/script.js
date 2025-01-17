// script.js
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const charCount = document.querySelector(".char-count");
    const maxLength = 250;
  
    // Function to update character count
    const updateCharCount = () => {
      const currentLength = textarea.value.length;
      charCount.textContent = `${currentLength}/${maxLength}`;
      if (currentLength > maxLength) {
        charCount.style.color = "red"; // Change color when exceeding max
      } else {
        charCount.style.color = "#6b7280"; // Default color
      }
    };
  
    // Attach event listener to update character count on input
    textarea.addEventListener("input", updateCharCount);
  
    // Initialize character count on page load
    updateCharCount();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const voiceDropdown = document.querySelector("#voiceID");
    const styleDropdown = document.querySelector("#style");
    let selectedVoice = null;

    // Fetch and parse voiceList (you can load this dynamically or inline)
    const voiceList = [
        {
          "voiceId": "en-UK-hazel",
          "displayName": "Hazel (F)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-cooper",
          "displayName": "Cooper (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Angry",
            "Inspirational",
            "Sad",
            "Newscast"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Angry",
                "Inspirational",
                "Sad",
                "Newscast"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-imani",
          "displayName": "Imani (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "it-IT-giorgio",
          "displayName": "Giorgio (M)",
          "locale": "it-IT",
          "displayLanguage": "Italian",
          "accent": "Italy",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-wayne",
          "displayName": "Wayne (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Narration",
            "Inspirational",
            "Promo",
            "NewsCast",
            "Calm",
            "Sad",
            "Angry"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Narration",
                "Inspirational",
                "Promo",
                "NewsCast",
                "Calm",
                "Sad",
                "Angry"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-shivani",
          "displayName": "Shivani (F)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-daniel",
          "displayName": "Daniel (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Inspirational",
            "Sad",
            "Storytelling"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Inspirational",
                "Sad",
                "Storytelling"
              ]
            }
          }
        },
        {
          "voiceId": "bn-IN-anwesha",
          "displayName": "Anwesha (F)",
          "locale": "bn-IN",
          "displayLanguage": "Bengali",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "bn-IN": {
              "detail": "Spanish (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "es-MX-alejandro",
          "displayName": "Alejandro (M)",
          "locale": "es-MX",
          "displayLanguage": "Spanish",
          "accent": "Mexico",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm"
          ],
          "supportedLocales": {
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-joyce",
          "displayName": "Joyce (F)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Narration"
          ],
          "supportedLocales": {
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational",
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-zion",
          "displayName": "Zion (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Promo"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-isha",
          "displayName": "Isha (F)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-riley",
          "displayName": "Riley (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Promo"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "ko-KR-hwan",
          "displayName": "Hwan (M)",
          "locale": "ko-KR",
          "displayLanguage": "Korean",
          "accent": "Korea",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm",
            "Sad"
          ],
          "supportedLocales": {
            "ko-KR": {
              "detail": "Korean (South Korea)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "fr-FR-adélie",
          "displayName": "Adélie (F)",
          "locale": "fr-FR",
          "displayLanguage": "French",
          "accent": "France",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm",
            "Sad"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-carter",
          "displayName": "Carter (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Narration",
            "Documentary",
            "Calm"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Narration",
                "Documentary",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-gabriel",
          "displayName": "Gabriel (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Documentary",
            "Promo"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Documentary",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-juliet",
          "displayName": "Juliet (F)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-arohi",
          "displayName": "Arohi (F)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "fr-FR-maxime",
          "displayName": "Maxime (M)",
          "locale": "fr-FR",
          "displayLanguage": "French",
          "accent": "France",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "de-DE-josephine",
          "displayName": "Josephine (F)",
          "locale": "de-DE",
          "displayLanguage": "German",
          "accent": "Germany",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm",
            "Sad"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-hugo",
          "displayName": "Hugo (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-hugh",
          "displayName": "Hugh (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Inspirational"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Inspirational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-samantha",
          "displayName": "Samantha (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Luxury",
            "Promo",
            "Angry",
            "Sad",
            "Newscast"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Luxury",
                "Promo",
                "Angry",
                "Sad",
                "Newscast"
              ]
            }
          }
        },
        {
          "voiceId": "de-DE-erna",
          "displayName": "Erna (F)",
          "locale": "de-DE",
          "displayLanguage": "German",
          "accent": "Germany",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "zh-CN-baolin",
          "displayName": "Baolin (F)",
          "locale": "zh-CN",
          "displayLanguage": "Chinese",
          "accent": "China",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Sad"
          ],
          "supportedLocales": {
            "zh-CN": {
              "detail": "Chinese (China)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "pt-BR-isadora",
          "displayName": "Isadora (F)",
          "locale": "pt-BR",
          "displayLanguage": "Portuguese",
          "accent": "Brazil",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "pt-BR": {
              "detail": "Portuguese (Brazil)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "it-IT-vincenzo",
          "displayName": "Vincenzo (M)",
          "locale": "it-IT",
          "displayLanguage": "Italian",
          "accent": "Italy",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-terrell",
          "displayName": "Terrell (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Inspirational",
            "Narration",
            "Calm",
            "Promo",
            "Conversational"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Promo"
              ]
            },
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Promo",
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Inspirational",
                "Narration",
                "Calm",
                "Promo",
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-denzel",
          "displayName": "Denzel (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Promo",
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Promo",
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-heidi",
          "displayName": "Heidi (F)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-miles",
          "displayName": "Miles (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Sports Commentary",
            "Narration",
            "Newscast",
            "Sad",
            "Angry",
            "Calm",
            "Terrified",
            "Inspirational"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Promo"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Promo"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Sports Commentary",
                "Narration",
                "Newscast",
                "Sad",
                "Angry",
                "Calm",
                "Terrified",
                "Inspirational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-abigail",
          "displayName": "Abigail (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Narration",
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration",
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "fr-FR-justine",
          "displayName": "Justine (F)",
          "locale": "fr-FR",
          "displayLanguage": "French",
          "accent": "France",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "it-IT-greta",
          "displayName": "Greta (F)",
          "locale": "it-IT",
          "displayLanguage": "Italian",
          "accent": "Italy",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-shane",
          "displayName": "Shane (M)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Narration"
          ],
          "supportedLocales": {
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational",
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-peter",
          "displayName": "Peter (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "nl-NL-famke",
          "displayName": "Famke (F)",
          "locale": "nl-NL",
          "displayLanguage": "Dutch",
          "accent": "Netherlands",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "nl-NL": {
              "detail": "Dutch (Netherlands)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-ivy",
          "displayName": "Ivy (F)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm",
            "Angry",
            "Sad"
          ],
          "supportedLocales": {
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm",
                "Angry",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "nl-NL-dirk",
          "displayName": "Dirk (M)",
          "locale": "nl-NL",
          "displayLanguage": "Dutch",
          "accent": "Netherlands",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "nl-NL": {
              "detail": "Dutch (Netherlands)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "fr-FR-axel",
          "displayName": "Axel (M)",
          "locale": "fr-FR",
          "displayLanguage": "French",
          "accent": "France",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "es-ES-carla",
          "displayName": "Carla (F)",
          "locale": "es-ES",
          "displayLanguage": "Spanish",
          "accent": "Spain",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-claire",
          "displayName": "Claire (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Luxury"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Luxury"
              ]
            }
          }
        },
        {
          "voiceId": "ko-KR-jangmi",
          "displayName": "Jangmi (F)",
          "locale": "ko-KR",
          "displayLanguage": "Korean",
          "accent": "Korea",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "ko-KR": {
              "detail": "Korean (South Korea)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "ko-KR-sanghoon",
          "displayName": "SangHoon (M)",
          "locale": "ko-KR",
          "displayLanguage": "Korean",
          "accent": "Korea",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "ko-KR": {
              "detail": "Korean (South Korea)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "it-IT-vera",
          "displayName": "Vera (F)",
          "locale": "it-IT",
          "displayLanguage": "Italian",
          "accent": "Italy",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "hi-IN-rahul",
          "displayName": "Rahul (M)",
          "locale": "hi-IN",
          "displayLanguage": "Hindi",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "es-ES-elvira",
          "displayName": "Elvira (F)",
          "locale": "es-ES",
          "displayLanguage": "Spanish",
          "accent": "Spain",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "es-ES-enrique",
          "displayName": "Enrique (M)",
          "locale": "es-ES",
          "displayLanguage": "Spanish",
          "accent": "Spain",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-aiden",
          "displayName": "Aiden (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Narration"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-ronnie",
          "displayName": "Ronnie (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Promo",
            "Conversational",
            "Angry",
            "Sad",
            "NewsCast"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Promo",
                "Conversational",
                "Angry",
                "Sad",
                "NewsCast"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-amber",
          "displayName": "Amber (F)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Documentary"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Documentary"
              ]
            }
          }
        },
        {
          "voiceId": "hi-IN-shweta",
          "displayName": "Shweta (F)",
          "locale": "hi-IN",
          "displayLanguage": "Hindi",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Sad"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "hi-IN-amit",
          "displayName": "Amit (M)",
          "locale": "hi-IN",
          "displayLanguage": "Hindi",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-jimm",
          "displayName": "Jimm (M)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Narration"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Promo",
                "Conversational"
              ]
            },
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational",
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-pearl",
          "displayName": "Pearl (F)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Storytelling"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Storytelling"
              ]
            }
          }
        },
        {
          "voiceId": "pt-BR-benício",
          "displayName": "Benício (M)",
          "locale": "pt-BR",
          "displayLanguage": "Portuguese",
          "accent": "Brazil",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "pt-BR": {
              "detail": "Portuguese (Brazil)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-freddie",
          "displayName": "Freddie (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-ryan",
          "displayName": "Ryan (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Narration",
            "Conversational",
            "Promo",
            "Angry",
            "Sad"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration",
                "Conversational",
                "Promo",
                "Angry",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "pt-BR-eloa",
          "displayName": "Eloa (F)",
          "locale": "pt-BR",
          "displayLanguage": "Portuguese",
          "accent": "Brazil",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "pt-BR": {
              "detail": "Portuguese (Brazil)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-charlotte",
          "displayName": "Charlotte (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Narration"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "de-DE-lia",
          "displayName": "Lia (F)",
          "locale": "de-DE",
          "displayLanguage": "German",
          "accent": "Germany",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-natalie",
          "displayName": "Natalie (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Promo",
            "Narration",
            "Newscast Formal",
            "Meditative",
            "Sad",
            "Angry",
            "Conversational",
            "Newscast Casual",
            "Furious",
            "Sorrowful",
            "Terrified",
            "Inspirational"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Promo"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Promo",
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Promo",
                "Narration",
                "Newscast Formal",
                "Meditative",
                "Sad",
                "Angry",
                "Conversational",
                "Newscast Casual",
                "Furious",
                "Sorrowful",
                "Terrified",
                "Inspirational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-michelle",
          "displayName": "Michelle (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-phoebe",
          "displayName": "Phoebe (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "es-ES-carmen",
          "displayName": "Carmen (F)",
          "locale": "es-ES",
          "displayLanguage": "Spanish",
          "accent": "Spain",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-caleb",
          "displayName": "Caleb (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-iris",
          "displayName": "Iris (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Friendly",
            "Conversational",
            "Narration"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Friendly",
                "Conversational",
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-harrison",
          "displayName": "Harrison (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-marcus",
          "displayName": "Marcus (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Narration"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-josie",
          "displayName": "Josie (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Narration",
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration",
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-daisy",
          "displayName": "Daisy (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Narration",
            "NewsCast",
            "Sad"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Narration",
                "NewsCast",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-charles",
          "displayName": "Charles (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Calm",
            "NewsCast",
            "Inspirational",
            "Sad",
            "Angry",
            "Promo"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Calm",
                "NewsCast",
                "Inspirational",
                "Sad",
                "Angry",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-reggie",
          "displayName": "Reggie (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Promo"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-julia",
          "displayName": "Julia (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Narration",
            "Conversational",
            "Promo",
            "Storytelling",
            "Calm",
            "Newscast",
            "Angry",
            "Sad"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration",
                "Conversational",
                "Promo",
                "Storytelling",
                "Calm",
                "Newscast",
                "Angry",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "en-SCOTT-emily",
          "displayName": "Emily (F)",
          "locale": "en-SCOTT",
          "displayLanguage": "English",
          "accent": "Scotland",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-SCOTT": {
              "detail": "English (Scotland)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-dylan",
          "displayName": "Dylan (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Documentary",
            "Conversational",
            "Inspirational",
            "Newscast"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Documentary",
                "Conversational",
                "Inspirational",
                "Newscast"
              ]
            }
          }
        },
        {
          "voiceId": "es-MX-valeria",
          "displayName": "Valeria (F)",
          "locale": "es-MX",
          "displayLanguage": "Spanish",
          "accent": "Mexico",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-eashwar",
          "displayName": "Eashwar (M)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-evelyn",
          "displayName": "Evelyn (F)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Promo",
                "Conversational"
              ]
            },
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "de-DE-lara",
          "displayName": "Lara (F)",
          "locale": "de-DE",
          "displayLanguage": "German",
          "accent": "Germany",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-evander",
          "displayName": "Evander (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Friendly",
            "Narration",
            "Promo",
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Friendly",
                "Narration",
                "Promo",
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-SCOTT-rory",
          "displayName": "Rory (M)",
          "locale": "en-SCOTT",
          "displayLanguage": "English",
          "accent": "Scotland",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-SCOTT": {
              "detail": "English (Scotland)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "ta-IN-iniya",
          "displayName": "Iniya (F)",
          "locale": "ta-IN",
          "displayLanguage": "Tamil",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "ta-IN": {
              "detail": "Tamil (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-leyton",
          "displayName": "Leyton (M)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Narration",
            "Calm",
            "Angry",
            "Sad",
            "Promo",
            "Newscast",
            "Terrified",
            "Inspirational"
          ],
          "supportedLocales": {
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational",
                "Narration",
                "Calm",
                "Angry",
                "Sad",
                "Promo",
                "Newscast",
                "Terrified",
                "Inspirational"
              ]
            }
          }
        },
        {
          "voiceId": "fr-FR-louise",
          "displayName": "Louise (F)",
          "locale": "fr-FR",
          "displayLanguage": "French",
          "accent": "France",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "zh-CN-wei",
          "displayName": "Wei (F)",
          "locale": "zh-CN",
          "displayLanguage": "Chinese",
          "accent": "China",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm",
            "Sad"
          ],
          "supportedLocales": {
            "zh-CN": {
              "detail": "Chinese (China)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "ko-KR-gyeong",
          "displayName": "Gyeong (F)",
          "locale": "ko-KR",
          "displayLanguage": "Korean",
          "accent": "Korea",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "ko-KR": {
              "detail": "Korean (South Korea)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "de-DE-matthias",
          "displayName": "Matthias (M)",
          "locale": "de-DE",
          "displayLanguage": "German",
          "accent": "Germany",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Calm",
            "Angry"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational",
                "Calm",
                "Angry"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-rohan",
          "displayName": "Rohan (M)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-delilah",
          "displayName": "Delilah (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Narration",
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration",
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "bn-IN-abhik",
          "displayName": "Abhik (M)",
          "locale": "bn-IN",
          "displayLanguage": "Bengali",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "bn-IN": {
              "detail": "Spanish (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-angela",
          "displayName": "Angela (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Promo"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-naomi",
          "displayName": "Naomi (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Inspirational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Inspirational"
              ]
            }
          }
        },
        {
          "voiceId": "es-MX-carlos",
          "displayName": "Carlos (M)",
          "locale": "es-MX",
          "displayLanguage": "Spanish",
          "accent": "Mexico",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "nl-NL-merel",
          "displayName": "Merel (F)",
          "locale": "nl-NL",
          "displayLanguage": "Dutch",
          "accent": "Netherlands",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "nl-NL": {
              "detail": "Dutch (Netherlands)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-alicia",
          "displayName": "Alicia (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Calm"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-alia",
          "displayName": "Alia (F)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Promo",
            "Documentary"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Promo",
                "Documentary"
              ]
            }
          }
        },
        {
          "voiceId": "zh-CN-jiao",
          "displayName": "Jiao (F)",
          "locale": "zh-CN",
          "displayLanguage": "Chinese",
          "accent": "China",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "zh-CN": {
              "detail": "Chinese (China)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-june",
          "displayName": "June (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Promo"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-ashton",
          "displayName": "Ashton (M)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Promo",
            "Promo"
          ],
          "supportedLocales": {
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Promo",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-finley",
          "displayName": "Finley (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Promo",
            "Conversational",
            "Angry",
            "Sad"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Promo",
                "Conversational",
                "Angry",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "pl-PL-blazej",
          "displayName": "Blazej (M)",
          "locale": "pl-PL",
          "displayLanguage": "Polish",
          "accent": "Poland",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "pl-PL": {
              "detail": "Polish (Poland)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "zh-CN-zhang",
          "displayName": "Zhang (M)",
          "locale": "zh-CN",
          "displayLanguage": "Chinese",
          "accent": "China",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm"
          ],
          "supportedLocales": {
            "zh-CN": {
              "detail": "Chinese (China)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-kylie",
          "displayName": "Kylie (F)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-jayden",
          "displayName": "Jayden (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Narration",
            "Friendly",
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration",
                "Friendly",
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-aarav",
          "displayName": "Aarav (M)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "de-DE-björn",
          "displayName": "Björn (M)",
          "locale": "de-DE",
          "displayLanguage": "German",
          "accent": "Germany",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "bn-IN-ishani",
          "displayName": "Ishani (F)",
          "locale": "bn-IN",
          "displayLanguage": "Bengali",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "bn-IN": {
              "detail": "Spanish (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "zh-CN-yuxan",
          "displayName": "Yuxan (M)",
          "locale": "zh-CN",
          "displayLanguage": "Chinese",
          "accent": "China",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "zh-CN": {
              "detail": "Chinese (China)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "fr-FR-louis",
          "displayName": "Louis (M)",
          "locale": "fr-FR",
          "displayLanguage": "French",
          "accent": "France",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "ko-KR-jong-su",
          "displayName": "Jong-su (M)",
          "locale": "ko-KR",
          "displayLanguage": "Korean",
          "accent": "Korea",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "ko-KR": {
              "detail": "Korean (South Korea)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-harper",
          "displayName": "Harper (M)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Casual"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational",
                "Casual"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-ruby",
          "displayName": "Ruby (F)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Angry",
            "Sad",
            "Newscast",
            "Calm"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Angry",
                "Sad",
                "Newscast",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-ken",
          "displayName": "Ken (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Newscast",
            "Storytelling",
            "Calm",
            "Furious",
            "Angry",
            "Sobbing",
            "Sad"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Promo"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Promo"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Newscast",
                "Storytelling",
                "Calm",
                "Furious",
                "Angry",
                "Sobbing",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "ta-IN-mani",
          "displayName": "Mani (M)",
          "locale": "ta-IN",
          "displayLanguage": "Tamil",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "ta-IN": {
              "detail": "Tamil (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "de-DE-ralf",
          "displayName": "Ralf (M)",
          "locale": "de-DE",
          "displayLanguage": "German",
          "accent": "Germany",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "de-DE": {
              "detail": "German (Germany)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-jaxon",
          "displayName": "Jaxon (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-river",
          "displayName": "River (NB)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "NonBinary",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-priya",
          "displayName": "Priya (F)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-theo",
          "displayName": "Theo (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Narration",
            "Promo",
            "Calm",
            "Sad",
            "Angry"
          ],
          "supportedLocales": {
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Narration",
                "Promo",
                "Calm",
                "Sad",
                "Angry"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-katie",
          "displayName": "Katie (F)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "pl-PL-jacek",
          "displayName": "Jacek (M)",
          "locale": "pl-PL",
          "displayLanguage": "Polish",
          "accent": "Poland",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "pl-PL": {
              "detail": "Polish (Poland)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "it-IT-lorenzo",
          "displayName": "Lorenzo (M)",
          "locale": "it-IT",
          "displayLanguage": "Italian",
          "accent": "Italy",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "hi-IN-shaan",
          "displayName": "Shaan (M)",
          "locale": "hi-IN",
          "displayLanguage": "Hindi",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Sad"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-amara",
          "displayName": "Amara (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Narration"
          ],
          "supportedLocales": {
            "fr-FR": {
              "detail": "French (France)",
              "availableStyles": [
                "Promo"
              ]
            },
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "it-IT": {
              "detail": "Italian (Italy)",
              "availableStyles": [
                "Conversational"
              ]
            },
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Narration"
              ]
            }
          }
        },
        {
          "voiceId": "en-UK-mason",
          "displayName": "Mason (M)",
          "locale": "en-UK",
          "displayLanguage": "English",
          "accent": "UK",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Documentary"
          ],
          "supportedLocales": {
            "en-UK": {
              "detail": "English (UK)",
              "availableStyles": [
                "Documentary"
              ]
            }
          }
        },
        {
          "voiceId": "en-IN-surya",
          "displayName": "Surya (M)",
          "locale": "en-IN",
          "displayLanguage": "English",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Documentary"
          ],
          "supportedLocales": {
            "en-IN": {
              "detail": "English (India)",
              "availableStyles": [
                "Documentary"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-finn",
          "displayName": "Finn (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Narration",
            "Promo",
            "Conversational",
            "Calm"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Narration",
                "Promo",
                "Conversational",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "pt-BR-gustavo",
          "displayName": "Gustavo (M)",
          "locale": "pt-BR",
          "displayLanguage": "Portuguese",
          "accent": "Brazil",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "pt-BR": {
              "detail": "Portuguese (Brazil)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "hi-IN-kabir",
          "displayName": "Kabir (M)",
          "locale": "hi-IN",
          "displayLanguage": "Hindi",
          "accent": "India",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "es-ES-javier",
          "displayName": "Javier (M)",
          "locale": "es-ES",
          "displayLanguage": "Spanish",
          "accent": "Spain",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "es-ES": {
              "detail": "Spanish (Spain)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "en-AU-mitch",
          "displayName": "Mitch (M)",
          "locale": "en-AU",
          "displayLanguage": "English",
          "accent": "Australia",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Casual",
            "Promo"
          ],
          "supportedLocales": {
            "en-AU": {
              "detail": "English (Australia)",
              "availableStyles": [
                "Conversational",
                "Casual",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "pt-BR-heitor",
          "displayName": "Heitor (M)",
          "locale": "pt-BR",
          "displayLanguage": "Portuguese",
          "accent": "Brazil",
          "description": "Middle-Aged",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo"
          ],
          "supportedLocales": {
            "pt-BR": {
              "detail": "Portuguese (Brazil)",
              "availableStyles": [
                "Conversational",
                "Promo"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-edmund",
          "displayName": "Edmund (M)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Sports Commentary",
            "Inspirational",
            "Sad",
            "NewsCast"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Sports Commentary",
                "Inspirational",
                "Sad",
                "NewsCast"
              ]
            }
          }
        },
        {
          "voiceId": "hi-IN-ayushi",
          "displayName": "Ayushi (F)",
          "locale": "hi-IN",
          "displayLanguage": "Hindi",
          "accent": "India",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "hi-IN": {
              "detail": "Hindi (India)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "pl-PL-kasia",
          "displayName": "Kasia (F)",
          "locale": "pl-PL",
          "displayLanguage": "Polish",
          "accent": "Poland",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "pl-PL": {
              "detail": "Polish (Poland)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        },
        {
          "voiceId": "es-MX-luisa",
          "displayName": "Luisa (F)",
          "locale": "es-MX",
          "displayLanguage": "Spanish",
          "accent": "Mexico",
          "description": "Middle-Aged",
          "gender": "Female",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm"
          ],
          "supportedLocales": {
            "es-MX": {
              "detail": "Spanish (Mexico)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm"
              ]
            }
          }
        },
        {
          "voiceId": "zh-CN-tao",
          "displayName": "Tao (M)",
          "locale": "zh-CN",
          "displayLanguage": "Chinese",
          "accent": "China",
          "description": "Young Adult",
          "gender": "Male",
          "availableStyles": [
            "Conversational",
            "Promo",
            "Calm",
            "Sad"
          ],
          "supportedLocales": {
            "zh-CN": {
              "detail": "Chinese (China)",
              "availableStyles": [
                "Conversational",
                "Promo",
                "Calm",
                "Sad"
              ]
            }
          }
        },
        {
          "voiceId": "en-US-molly",
          "displayName": "Molly (F)",
          "locale": "en-US",
          "displayLanguage": "English",
          "accent": "US & Canada",
          "description": "Young Adult",
          "gender": "Female",
          "availableStyles": [
            "Conversational"
          ],
          "supportedLocales": {
            "en-US": {
              "detail": "English (US & Canada)",
              "availableStyles": [
                "Conversational"
              ]
            }
          }
        }
      ];

    // Populate the voice dropdown
    voiceList.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.voiceId;
        option.textContent = voice.displayName;
        voiceDropdown.appendChild(option);
    });

    // Update styles when a voice is selected
    voiceDropdown.addEventListener("change", () => {
        styleDropdown.innerHTML = "<option value=''>Select a Style</option>"; // Reset styles
        selectedVoice = voiceList.find(voice => voice.voiceId === voiceDropdown.value);

        if (selectedVoice) {
            selectedVoice.availableStyles.forEach(style => {
                const option = document.createElement("option");
                option.value = style;
                option.textContent = style;
                styleDropdown.appendChild(option);
            });
            styleDropdown.disabled = false;
        } else {
            styleDropdown.disabled = true;
        }
    });

    // Handle play button click
    const playButton = document.querySelector(".play-btn");
    const textarea = document.querySelector("textarea");

    playButton.addEventListener("click", async () => {
        const text = textarea.value.trim();
        const voiceId = voiceDropdown.value;
        const style = styleDropdown.value;

        if (!text || !voiceId || !style) {
            alert("Please fill out all fields!");
            return;
        }

        try {
            const response = await fetch("/generate-speech", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text, voiceId, style }),
            });

            const data = await response.json();

            if (data.audioFileUrl) {
                const audio = new Audio(data.audioFileUrl);
                audio.play();
            } else {
                alert("Failed to generate speech. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while generating speech.");
        }
    });
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBV5h1ywtr6dbiLTB4cldnJS22IS88xV7g",
    authDomain: "voicai.airumi.org",
    projectId: "voicai",
    storageBucket: "voicai.firebasestorage.app",
    messagingSenderId: "674094586742",
    appId: "1:674094586742:web:4c635b4522f45f69813857",
    measurementId: "G-KVCTZ6BGCE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign up with Email and Password
export const signUpUser = (email, password, username) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up:", user);

            // Save the username (optional backend or Firestore integration needed here)
            alert("Signup successful! Please log in.");
            window.location.href = "signin.html";
        })
        .catch((error) => {
            console.error("Error during signup:", error.message);
            alert(error.message);
        });
};

// Sign in with Email and Password
export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged in:", user);
            window.location.href = "index.html"; // Redirect after login
        })
        .catch((error) => {
            console.error("Error during login:", error.message);
            alert(error.message);
        });
};

// Sign in with Google
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("User Details:", user);
            window.location.href = "index.html"; // Redirect to index.html
        })
        .catch((error) => {
            console.error("Error during Google sign-in:", error.message);
        });
};

// Sign out
export const signOutUser = () => {
    signOut(auth).then(() => {
        console.log("User signed out");
        window.location.reload(); // Reload the page to reset the navbar
    }).catch((error) => {
        console.error("Error during sign-out:", error.message);
    });
};

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        updateNavbarForLoggedInUser(user);
    } else {
        // No user is signed in
        updateNavbarForGuest();
    }
});

// Update Navbar for Logged-in Users
const updateNavbarForLoggedInUser = (user) => {
    const authButtons = document.querySelector(".auth-buttons");

    // Replace Sign In/Sign Up with user profile and logout
    authButtons.innerHTML = `
        <div class="user-profile">
            <img src="${user.photoURL}" alt="${user.displayName}" class="profile-pic">
            <span class="user-name">${user.displayName}</span>
        </div>
        <button class="btn logout-btn">Logout</button>
    `;

    // Add logout functionality
    document.querySelector(".logout-btn").addEventListener("click", signOutUser);
};

// Update Navbar for Guests
const updateNavbarForGuest = () => {
    const authButtons = document.querySelector(".auth-buttons");
    authButtons.innerHTML = `
        <a href="signin.html" class="btn sign-in-btn">Sign In</a>
        <a href="signup.html" class="btn sign-up-btn">Sign Up</a>
    `;
};
