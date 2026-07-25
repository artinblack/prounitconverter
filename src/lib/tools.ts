// ─────────────────────────────────────────────────────────────
// TOOLS — converter-style utilities that live at /tools/<slug>.
// This file is the single source of truth for the Tools hub,
// header/footer links, homepage section, and each page's SEO +
// JSON-LD. Mirrors the data-driven philosophy of units.ts.
// ─────────────────────────────────────────────────────────────

export interface ToolFaq {
  q: string;
  a: string;
}

export interface ToolStep {
  title: string;
  text: string;
}

export interface Tool {
  slug: string;
  name: string;
  icon: string;
  group: 'Text' | 'Color' | 'Design' | 'Numbers' | 'Time' | 'Developer' | 'Health';
  /** Short one-liner used on cards and nav. */
  tagline: string;
  /** Page <h1>. */
  h1: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  /** Lead paragraph shown under the widget (plain text, no markup). */
  intro: string;
  /** Second long-form paragraph for content depth. */
  body: string;
  useCases: string[];
  howToSteps: ToolStep[];
  faqs: ToolFaq[];
  /** Slugs of sibling tools to cross-link. */
  related: string[];
  /** Optional deep link into the /convert engine. */
  relatedConvert?: { href: string; label: string };
}

export const tools: Tool[] = [
  // ── TEXT CASE CONVERTER ────────────────────────────────────
  {
    slug: 'text-case-converter',
    name: 'Text Case Converter',
    icon: '🔤',
    group: 'Text',
    tagline: 'Convert text between UPPERCASE, lowercase, Title Case, camelCase & more.',
    h1: 'Text Case Converter',
    seoTitle: 'Text Case Converter — UPPERCASE, lowercase, Title Case & camelCase',
    metaDescription:
      'Free text case converter. Instantly change text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, or kebab-case. Live word & character count.',
    keywords:
      'text case converter, uppercase converter, lowercase converter, title case converter, camelcase converter, snake case, kebab case, capitalize text online',
    intro:
      'The Text Case Converter changes the capitalization of any text in one click — no need to retype a single word. Paste or type your text, choose a case, and copy the result instantly. Everything runs in your browser, so your text is never uploaded anywhere.',
    body:
      'Whether you are cleaning up a heading pasted from a PDF, converting a title into a URL slug, or turning a variable name into camelCase for code, the right case matters. This converter supports UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and alternating case, and it shows a live word, character, and sentence count as you edit.',
    useCases: [
      'Fix ALL-CAPS text pasted from spreadsheets or PDFs without retyping.',
      'Turn a blog title into a lowercase, hyphenated URL slug (kebab-case).',
      'Convert labels into camelCase or snake_case for code and databases.',
      'Capitalize headlines correctly with Title Case.',
      'Count words and characters for essays, tweets, or meta descriptions.',
    ],
    howToSteps: [
      { title: 'Paste your text', text: 'Type or paste any text into the input box.' },
      { title: 'Pick a case', text: 'Click UPPERCASE, lowercase, Title Case, camelCase, or any other option.' },
      { title: 'Copy the result', text: 'The converted text appears instantly — press Copy to grab it.' },
    ],
    faqs: [
      { q: 'What is the difference between Title Case and Sentence case?', a: 'Title Case capitalizes the first letter of every major word (e.g. "The Quick Brown Fox"), while Sentence case only capitalizes the first letter of the sentence (e.g. "The quick brown fox").' },
      { q: 'What is camelCase vs snake_case vs kebab-case?', a: 'camelCase joins words with no spaces and capitalizes each word after the first (myVariableName). snake_case joins words with underscores (my_variable_name). kebab-case joins words with hyphens (my-variable-name). All three are common in programming and URLs.' },
      { q: 'Is my text uploaded to a server?', a: 'No. The Text Case Converter runs entirely in your browser using JavaScript. Your text never leaves your device.' },
      { q: 'Is there a character limit?', a: 'There is no fixed limit — you can convert anything from a single word to many pages of text. Very large documents are handled in your browser.' },
    ],
    related: ['number-to-words-converter', 'base64-converter', 'text-to-binary-converter'],
  },

  // ── HEX / RGB COLOR CONVERTER ──────────────────────────────
  {
    slug: 'color-converter',
    name: 'Hex/RGB Color Converter',
    icon: '🎨',
    group: 'Color',
    tagline: 'Convert colors between HEX, RGB, HSL, HSV and CMYK with a live preview.',
    h1: 'Hex ⇄ RGB Color Converter',
    seoTitle: 'Hex to RGB Color Converter — Convert HEX, RGB, HSL, HSV & CMYK',
    metaDescription:
      'Free color converter. Convert HEX to RGB, RGB to HEX, plus HSL, HSV and CMYK with a live color preview and one-click copy. Perfect for web design and CSS.',
    keywords:
      'hex to rgb, rgb to hex, color converter, hex to hsl, rgb to hsl, cmyk converter, hex color code converter, css color converter',
    intro:
      'The Hex/RGB Color Converter translates a color between every format designers and developers use — HEX, RGB, HSL, HSV and CMYK — and shows a live swatch so you can see exactly what you are working with. Enter a value in any field and the others update automatically.',
    body:
      'Web and CSS work usually needs HEX (#5956f9) or RGB, print work needs CMYK, and adjusting brightness or saturation is easiest in HSL or HSV. Instead of hunting for a separate tool for each, this converter keeps all five formats in sync and gives you a one-click copy button for each. It also accepts shorthand HEX (#f00) and expands it for you.',
    useCases: [
      'Convert a HEX code from a design mockup into RGB or HSL for CSS.',
      'Get the CMYK values of a brand color for print materials.',
      'Fine-tune lightness and saturation using the HSL sliders.',
      'Expand shorthand hex like #0af into full #00aaff.',
      'Copy ready-to-paste rgb() and hsl() strings for stylesheets.',
    ],
    howToSteps: [
      { title: 'Enter a color', text: 'Type a HEX code, or set RGB / HSL values.' },
      { title: 'Read every format', text: 'HEX, RGB, HSL, HSV and CMYK update together, with a live preview swatch.' },
      { title: 'Copy what you need', text: 'Click the copy icon next to any format to use it in your project.' },
    ],
    faqs: [
      { q: 'How do I convert HEX to RGB?', a: 'A HEX color like #5956f9 splits into three pairs — 59, 56, f9 — which are the red, green and blue values in base 16. Converted to decimal that is rgb(89, 86, 249). This tool does the maths instantly and shows the result.' },
      { q: 'What is the difference between HSL and HSV?', a: 'Both describe a color by Hue, but HSL uses Saturation and Lightness while HSV uses Saturation and Value (brightness). HSL is common in CSS; HSV appears in many design apps.' },
      { q: 'Why does CMYK look slightly different?', a: 'CMYK is a subtractive model for printing and cannot reproduce every RGB screen color exactly. The converter gives the standard mathematical CMYK approximation, which is a reliable starting point for print.' },
      { q: 'Does it accept shorthand hex codes?', a: 'Yes. Enter a 3-digit hex like #f0a and the converter expands it to the full 6-digit form (#ff00aa) before converting.' },
    ],
    related: ['aspect-ratio-converter', 'text-to-binary-converter', 'base64-converter'],
    relatedConvert: { href: '/convert/numbase', label: 'Number Base Converter' },
  },

  // ── ASPECT RATIO CONVERTER ─────────────────────────────────
  {
    slug: 'aspect-ratio-converter',
    name: 'Aspect Ratio Converter',
    icon: '📐',
    group: 'Design',
    tagline: 'Calculate aspect ratios and resize width/height while keeping proportions.',
    h1: 'Aspect Ratio Converter & Calculator',
    seoTitle: 'Aspect Ratio Calculator — Resize Dimensions & Find Ratios (16:9)',
    metaDescription:
      'Free aspect ratio calculator. Find the ratio of any width × height (e.g. 1920×1080 → 16:9) and resize dimensions proportionally without stretching or cropping.',
    keywords:
      'aspect ratio calculator, aspect ratio converter, 16:9 calculator, resize image proportionally, ratio calculator, width height ratio, pixel aspect ratio',
    intro:
      'The Aspect Ratio Converter finds the simplified ratio of any width and height, and resizes dimensions while keeping the exact same proportions. Enter a size like 1920 × 1080 to get 16:9, or lock the ratio and scale to a new target width or height without distortion.',
    body:
      'Aspect ratio is what stops images and videos from looking stretched or squashed. Photographers, video editors, and web designers constantly need to resize to a new width while preserving the original shape, or check whether a size fits a standard like 16:9, 4:3, 1:1, or 21:9. This tool reduces any width × height to its simplest whole-number ratio and calculates the matching dimension when you change one side.',
    useCases: [
      'Find the aspect ratio of a photo or screen (e.g. 2560×1440 → 16:9).',
      'Resize an image to a new width while keeping height proportional.',
      'Check if dimensions match a standard ratio like 16:9, 4:3 or 1:1.',
      'Plan responsive video embeds and thumbnails.',
      'Scale artwork to fit a frame without cropping or stretching.',
    ],
    howToSteps: [
      { title: 'Enter original size', text: 'Type the starting width and height in pixels.' },
      { title: 'See the ratio', text: 'The simplified aspect ratio (like 16:9) is calculated instantly.' },
      { title: 'Resize proportionally', text: 'Change the target width or height and the other value updates to keep the ratio.' },
    ],
    faqs: [
      { q: 'What aspect ratio is 1920×1080?', a: '1920×1080 is 16:9, the standard widescreen ratio for HD and Full HD video, most monitors, and YouTube. Dividing both numbers by their greatest common divisor (120) gives 16:9.' },
      { q: 'How do I resize an image without stretching it?', a: 'Keep the aspect ratio constant. Enter your original width and height, then set the new width — this converter calculates the matching height automatically so the image stays proportional.' },
      { q: 'What are common aspect ratios?', a: 'Common ratios include 16:9 (widescreen video), 4:3 (older screens and photos), 1:1 (square, Instagram), 3:2 (DSLR photos), and 21:9 (ultrawide cinema).' },
      { q: 'Does this crop my image?', a: 'No. This is a calculator — it gives you the correct dimensions to use in your editing software. Resizing to the calculated size preserves the whole image with no cropping.' },
    ],
    related: ['color-converter', 'unix-timestamp-converter', 'roman-numeral-converter'],
  },

  // ── ROMAN NUMERAL CONVERTER ────────────────────────────────
  {
    slug: 'roman-numeral-converter',
    name: 'Roman Numeral Converter',
    icon: '🏛️',
    group: 'Numbers',
    tagline: 'Convert numbers to Roman numerals and Roman numerals back to numbers.',
    h1: 'Roman Numeral Converter',
    seoTitle: 'Roman Numeral Converter — Convert Numbers to Roman Numerals & Back',
    metaDescription:
      'Free Roman numeral converter. Convert numbers to Roman numerals (2024 → MMXXIV) and Roman numerals back to numbers, from 1 to 3,999,999. Instant and accurate.',
    keywords:
      'roman numeral converter, number to roman numerals, roman numerals to number, roman numeral date converter, 2024 in roman numerals, roman number translator',
    intro:
      'The Roman Numeral Converter turns ordinary numbers into Roman numerals and translates Roman numerals back into numbers. Enter 2024 to get MMXXIV, or enter MCMLXXXIV to get 1984. It supports values from 1 all the way to 3,999,999 using the standard overline (vinculum) notation for large numbers.',
    body:
      'Roman numerals still appear on clock faces, book chapters, movie credits, monarch names, and Super Bowl numbers. Reading and writing them correctly means following strict subtractive rules — IV is 4, not IIII. This converter applies those rules automatically in both directions and validates your input so you never end up with an impossible numeral.',
    useCases: [
      'Convert a year for a tattoo, ring engraving, or building cornerstone.',
      'Decode Roman numerals in movie copyright dates and credits.',
      'Number book chapters, outlines, and appendices correctly.',
      'Check homework and teach the subtractive numeral rules.',
      'Write monarch or event numbers (e.g. Louis XIV, Super Bowl LVIII).',
    ],
    howToSteps: [
      { title: 'Choose a direction', text: 'Enter a number to convert to Roman, or a Roman numeral to convert to a number.' },
      { title: 'Type your value', text: 'For example 2024, or MMXXIV.' },
      { title: 'Read the result', text: 'The conversion appears instantly and is validated for correct notation.' },
    ],
    faqs: [
      { q: 'What is 2024 in Roman numerals?', a: '2024 is MMXXIV: MM = 2000, XX = 20, and IV = 4. This converter builds it automatically and can convert any year for you.' },
      { q: 'What are the seven Roman numeral symbols?', a: 'I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, and M = 1000. Larger numbers combine these, using subtraction for values like IV (4) and IX (9).' },
      { q: 'What is the largest number in Roman numerals?', a: 'Using standard symbols the practical maximum is 3999 (MMMCMXCIX). With an overline (vinculum), which multiplies a numeral by 1000, this converter supports numbers up to 3,999,999.' },
      { q: 'Why is 4 written as IV and not IIII?', a: 'Standard Roman numerals use subtractive notation: placing a smaller symbol before a larger one subtracts it. So IV means 5 − 1 = 4. (Some clock faces use IIII for style, but IV is the correct standard form.)' },
    ],
    related: ['number-to-words-converter', 'text-to-binary-converter', 'aspect-ratio-converter'],
    relatedConvert: { href: '/convert/numbase', label: 'Number Base Converter' },
  },

  // ── NUMBER TO WORDS CONVERTER ──────────────────────────────
  {
    slug: 'number-to-words-converter',
    name: 'Number to Words Converter',
    icon: '🔢',
    group: 'Numbers',
    tagline: 'Spell out any number in words — including currency and cheque format.',
    h1: 'Number to Words Converter',
    seoTitle: 'Number to Words Converter — Spell Numbers & Amounts in English',
    metaDescription:
      'Free number to words converter. Spell out any number in English words (1234 → one thousand two hundred thirty-four) with an optional currency mode for cheques and invoices.',
    keywords:
      'number to words, spell number in words, number to words converter, amount in words, cheque amount in words, currency to words, number spelling',
    intro:
      'The Number to Words Converter spells out any number in plain English. Enter 1,234 to get "one thousand two hundred thirty-four", or switch on currency mode to write amounts the way they appear on cheques and invoices, such as "one thousand two hundred thirty-four dollars and fifty cents".',
    body:
      'Writing numbers as words is required on cheques, legal documents, and formal invoices to prevent tampering. Doing it by hand for large amounts is error-prone. This converter handles whole numbers and decimals, adds the correct "and" placement, and offers a currency mode that appends the dollars-and-cents wording used on financial paperwork.',
    useCases: [
      'Write the amount in words on a cheque or money order.',
      'Add "amount in words" lines to invoices and contracts.',
      'Check the spelling of large numbers in reports.',
      'Teach place value and number reading to students.',
      'Generate spoken-form numbers for voice scripts and captions.',
    ],
    howToSteps: [
      { title: 'Enter a number', text: 'Type any whole number or decimal, such as 1234.5.' },
      { title: 'Choose a mode', text: 'Use plain words, or turn on currency mode for cheque-style output.' },
      { title: 'Copy the words', text: 'The written form appears instantly, ready to copy.' },
    ],
    faqs: [
      { q: 'How do you write 1234 in words?', a: '1234 is "one thousand two hundred thirty-four". This converter spells out any number automatically, including thousands, millions and billions.' },
      { q: 'Can it write amounts for cheques?', a: 'Yes. Turn on currency mode and an amount like 1234.50 becomes "one thousand two hundred thirty-four dollars and fifty cents" — the standard cheque format.' },
      { q: 'Does it handle decimals?', a: 'Yes. Decimals are read out digit by digit (or as cents in currency mode), so 3.14 becomes "three point one four".' },
      { q: 'How large a number can it convert?', a: 'It handles numbers well into the billions and trillions, spelling each place value correctly.' },
    ],
    related: ['roman-numeral-converter', 'text-case-converter', 'unix-timestamp-converter'],
  },

  // ── UNIX TIMESTAMP CONVERTER ───────────────────────────────
  {
    slug: 'unix-timestamp-converter',
    name: 'Unix Timestamp Converter',
    icon: '⏱️',
    group: 'Time',
    tagline: 'Convert Unix epoch timestamps to human dates and back, in UTC or local.',
    h1: 'Unix Timestamp Converter',
    seoTitle: 'Unix Timestamp Converter — Epoch to Date & Date to Epoch',
    metaDescription:
      'Free Unix timestamp converter. Convert epoch time to a human-readable date and a date back to a Unix timestamp, in UTC or local time, with seconds and milliseconds support.',
    keywords:
      'unix timestamp converter, epoch converter, timestamp to date, date to timestamp, epoch to date, unix time, milliseconds timestamp converter',
    intro:
      'The Unix Timestamp Converter turns an epoch timestamp into a readable date and time, and converts any date back into a Unix timestamp. It handles both seconds and milliseconds, and shows the result in UTC and your local time zone so you can read logs and API responses at a glance.',
    body:
      'Unix time counts the seconds since 1 January 1970 (the epoch) and is the standard way computers store time in databases, logs, JWTs, and APIs. A number like 1700000000 is meaningless to read by eye. This converter decodes it instantly, and also does the reverse — pick a date and get the exact timestamp to paste into your code or query.',
    useCases: [
      'Decode a timestamp from server logs or a database row.',
      'Read the exp / iat fields inside a JWT token.',
      'Generate a Unix timestamp for an API request or test fixture.',
      'Compare UTC and local time for a scheduled event.',
      'Convert between seconds and milliseconds timestamps.',
    ],
    howToSteps: [
      { title: 'Enter a timestamp or date', text: 'Paste a Unix timestamp, or pick a date and time.' },
      { title: 'Choose seconds or ms', text: 'The converter auto-detects, and you can toggle between seconds and milliseconds.' },
      { title: 'Read UTC and local', text: 'The human date appears in both UTC and your local time zone.' },
    ],
    faqs: [
      { q: 'What is a Unix timestamp?', a: 'A Unix timestamp is the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970, known as the Unix epoch. It is the most common way software stores a moment in time.' },
      { q: 'What date is timestamp 1700000000?', a: '1700000000 corresponds to 14 November 2023, 22:13:20 UTC. Enter it in the converter to see it in your local time zone as well.' },
      { q: 'Seconds or milliseconds — how do I tell?', a: 'A seconds timestamp is 10 digits today (e.g. 1700000000); a milliseconds timestamp is 13 digits (e.g. 1700000000000). This converter detects the length and lets you switch.' },
      { q: 'Why does the local time differ from UTC?', a: 'A Unix timestamp is always in UTC. Your local time is UTC plus or minus your time zone offset, which is why the two displayed values can differ by several hours.' },
    ],
    related: ['time-zone-converter', 'number-to-words-converter', 'base64-converter'],
    relatedConvert: { href: '/convert/time', label: 'Time Converter' },
  },

  // ── TIME ZONE CONVERTER ────────────────────────────────────
  {
    slug: 'time-zone-converter',
    name: 'Time Zone Converter',
    icon: '🌍',
    group: 'Time',
    tagline: 'Convert a time from one time zone to another across the world.',
    h1: 'Time Zone Converter',
    seoTitle: 'Time Zone Converter — Convert Time Between Cities & Zones',
    metaDescription:
      'Free time zone converter. Convert a time from one city or zone to another, with automatic daylight-saving handling. Plan meetings and calls across the world instantly.',
    keywords:
      'time zone converter, timezone converter, convert time between zones, world clock converter, meeting time planner, EST to PST, UTC to local time',
    intro:
      'The Time Zone Converter takes a time in one zone and shows what it is everywhere else you care about. Pick a source zone and time, add the zones you want to compare, and see them side by side — with daylight-saving transitions handled automatically by your browser.',
    body:
      'Scheduling across countries is where meetings go wrong. "3 PM" means very different things in New York, London, and Tokyo, and daylight-saving shifts move the goalposts twice a year. This converter uses the browser\'s built-in IANA time-zone database, so conversions stay accurate through DST changes without you having to remember any offsets.',
    useCases: [
      'Find a meeting time that works for teammates in different countries.',
      'Convert a webinar or product-launch time for your audience.',
      'Check what time a live event starts in your local zone.',
      'Coordinate calls between offices in EST, PST, GMT and IST.',
      'Plan travel arrivals and departures across zones.',
    ],
    howToSteps: [
      { title: 'Set the source time', text: 'Choose the starting time zone and enter a date and time.' },
      { title: 'Add target zones', text: 'Pick one or more zones you want to convert to.' },
      { title: 'Compare side by side', text: 'Each zone shows the matching local time, adjusted for daylight saving.' },
    ],
    faqs: [
      { q: 'Does this handle daylight saving time?', a: 'Yes. The converter uses your browser\'s IANA time-zone data, which knows each region\'s daylight-saving rules, so conversions stay correct across DST changes.' },
      { q: 'How do I convert EST to PST?', a: 'Pick Eastern Time as the source and Pacific Time as the target. Pacific is three hours behind Eastern, so 3:00 PM EST becomes 12:00 PM PST.' },
      { q: 'What is UTC?', a: 'UTC (Coordinated Universal Time) is the global reference time with no daylight saving. Every other zone is defined as an offset from UTC, which is why it is used as a neutral baseline.' },
      { q: 'Can I compare more than two zones?', a: 'Yes. Add as many target zones as you need to see one source time translated across all of them at once.' },
    ],
    related: ['unix-timestamp-converter', 'aspect-ratio-converter', 'roman-numeral-converter'],
    relatedConvert: { href: '/convert/time', label: 'Time Converter' },
  },

  // ── BASE64 ENCODE / DECODE ─────────────────────────────────
  {
    slug: 'base64-converter',
    name: 'Base64 Encode/Decode',
    icon: '🧬',
    group: 'Developer',
    tagline: 'Encode text to Base64 and decode Base64 back to text, UTF-8 safe.',
    h1: 'Base64 Encode / Decode',
    seoTitle: 'Base64 Encode & Decode — Convert Text to Base64 Online',
    metaDescription:
      'Free Base64 encoder and decoder. Convert text to Base64 and decode Base64 back to plain text, with full UTF-8 support. Runs in your browser — nothing is uploaded.',
    keywords:
      'base64 encode, base64 decode, base64 converter, text to base64, base64 to text, base64 encoder online, decode base64 string',
    intro:
      'The Base64 tool encodes plain text into Base64 and decodes Base64 strings back into readable text. It fully supports UTF-8, so emoji and accented characters survive the round trip. All processing happens locally in your browser, so sensitive strings never leave your device.',
    body:
      'Base64 encodes binary or text data using 64 printable ASCII characters, which is why it shows up everywhere data needs to travel safely as text — data URIs, email attachments, JSON payloads, JWT segments, and API keys. This converter handles encoding and decoding instantly and correctly for Unicode, avoiding the classic "btoa broke on my emoji" problem.',
    useCases: [
      'Decode a Base64 string from an API response or config file.',
      'Encode text or credentials for a data URI or header.',
      'Inspect the payload segment of a JWT (which is Base64URL).',
      'Embed small assets inline as Base64 data URIs.',
      'Safely round-trip Unicode text through Base64.',
    ],
    howToSteps: [
      { title: 'Paste your input', text: 'Enter plain text to encode, or a Base64 string to decode.' },
      { title: 'Choose the direction', text: 'Switch between Encode and Decode.' },
      { title: 'Copy the output', text: 'The converted result appears instantly, ready to copy.' },
    ],
    faqs: [
      { q: 'What is Base64 encoding?', a: 'Base64 represents data using 64 printable characters (A–Z, a–z, 0–9, + and /). It lets binary or Unicode data travel safely through systems that only handle text, such as email or JSON.' },
      { q: 'Is Base64 encryption?', a: 'No. Base64 is encoding, not encryption — anyone can decode it. It hides nothing and provides no security; it only makes data safe to transmit as text.' },
      { q: 'Does it support emoji and accents?', a: 'Yes. This converter is UTF-8 aware, so emoji, accented letters, and other Unicode characters encode and decode correctly, unlike the raw browser btoa function.' },
      { q: 'Is my data uploaded anywhere?', a: 'No. Encoding and decoding happen entirely in your browser. Nothing you paste is sent to a server.' },
    ],
    related: ['text-to-binary-converter', 'text-case-converter', 'color-converter'],
  },

  // ── TEXT ↔ BINARY CONVERTER ────────────────────────────────
  {
    slug: 'text-to-binary-converter',
    name: 'Text ⇄ Binary Converter',
    icon: '💾',
    group: 'Developer',
    tagline: 'Convert text to binary and binary back to text, plus hex and ASCII codes.',
    h1: 'Text to Binary Converter',
    seoTitle: 'Text to Binary Converter — Convert Text to Binary Code & Back',
    metaDescription:
      'Free text to binary converter. Turn text into binary code and decode binary back into text, with hexadecimal and ASCII/decimal views. Great for learning and coding.',
    keywords:
      'text to binary, binary to text, binary converter, text to binary code, ascii to binary, binary translator, text to hex converter',
    intro:
      'The Text to Binary Converter turns letters and symbols into their binary code and converts binary back into readable text. It also shows the hexadecimal and decimal (ASCII) values for each character, so you can see exactly how text is stored under the hood.',
    body:
      'Every character you type is stored as a number — its character code — which computers keep in binary. This converter makes that visible: type a word and watch it become 8-bit binary, hex, and ASCII decimal. It is a favourite for computer-science classes, puzzle and CTF players, and anyone curious about how text becomes ones and zeros. For pure number-base math (decimal ⇄ binary ⇄ hex ⇄ octal) without text, use our Number Base Converter.',
    useCases: [
      'Convert a message into binary code for a class or puzzle.',
      'Decode a binary string back into readable text.',
      'See the ASCII / Unicode code point of any character.',
      'Get the hexadecimal representation of a string.',
      'Learn how character encoding and binary work.',
    ],
    howToSteps: [
      { title: 'Enter text or binary', text: 'Type text to encode, or paste binary to decode back to text.' },
      { title: 'Pick a format', text: 'View the output as binary, hexadecimal, or ASCII decimal codes.' },
      { title: 'Copy the result', text: 'The converted output updates instantly and is ready to copy.' },
    ],
    faqs: [
      { q: 'How do you convert text to binary?', a: 'Each character is mapped to its character code (for example A = 65), and that number is written in base 2 as 8 bits (65 = 01000001). This converter does it for a whole string at once.' },
      { q: 'What is the letter A in binary?', a: 'The uppercase letter A has ASCII code 65, which in 8-bit binary is 01000001. Lowercase a is 97, or 01100001.' },
      { q: 'What is the difference from a number base converter?', a: 'This tool converts text (characters) to and from binary using character codes. A number base converter changes a single numeric value between decimal, binary, hex and octal. Use whichever matches your input.' },
      { q: 'Does it support spaces and punctuation?', a: 'Yes. Every character, including spaces and punctuation, has a code and is converted. Spaces separate each 8-bit group so the binary stays readable.' },
    ],
    related: ['base64-converter', 'color-converter', 'roman-numeral-converter'],
    relatedConvert: { href: '/convert/numbase', label: 'Number Base Converter' },
  },

  // ── CSS UNIT CONVERTER ─────────────────────────────────────
  {
    slug: 'css-unit-converter',
    name: 'CSS Unit Converter',
    icon: '📏',
    group: 'Developer',
    tagline: 'Convert between px, rem, em, %, and pt for CSS layouts.',
    h1: 'CSS Unit Converter (px, rem, em, %, pt)',
    seoTitle: 'CSS Unit Converter — px to rem, em, % & pt Online',
    metaDescription:
      'Free CSS unit converter. Convert px to rem, rem to px, plus em, percentage and pt, based on a configurable root font size. Perfect for responsive CSS.',
    keywords:
      'css unit converter, px to rem, rem to px, px to em, px to pt, css units, rem calculator, responsive font size converter',
    intro:
      'The CSS Unit Converter turns pixels into rem, em, percentage and points — and back — using a root font size you control (16px by default). Change any field and the rest update instantly, so you can move between absolute and relative CSS units without doing the maths.',
    body:
      'Modern, accessible CSS leans on relative units: rem for scalable typography, em for component-relative spacing, and percentages for fluid layouts. But design tools still hand you pixels. This converter bridges the two — set your base (root) font size, type a value in any unit, and read the equivalents. It uses the standard web relationship where 1in = 96px = 72pt, so pt values line up with print and legacy stylesheets too.',
    useCases: [
      'Convert a pixel value from a design mockup into rem for scalable type.',
      'Work out how many pixels a given rem or em resolves to.',
      'Set a non-default root font size and see every unit recalculate.',
      'Translate legacy pt sizes into px/rem for the web.',
      'Build fluid layouts by checking the % equivalent of a size.',
    ],
    howToSteps: [
      { title: 'Set the root font size', text: 'Enter your base font size (default 16px) — the reference for rem/em/%.' },
      { title: 'Type a value', text: 'Enter a number in px, rem, em, % or pt.' },
      { title: 'Read the equivalents', text: 'Every other unit updates instantly; copy the one you need.' },
    ],
    faqs: [
      { q: 'How do I convert px to rem?', a: 'Divide the pixel value by the root font size. With the default 16px root, 24px ÷ 16 = 1.5rem. This converter does it automatically and lets you change the root size.' },
      { q: 'What is the difference between rem and em?', a: 'rem is always relative to the root (html) font size, so it is predictable. em is relative to the font size of the current element, so it compounds when nested. This tool treats both against your chosen base for a clean comparison.' },
      { q: 'How are pt and px related on the web?', a: 'On the web 1 inch = 96px = 72pt, so 1pt = 96/72 ≈ 1.333px and 1px = 0.75pt. The converter uses this standard ratio.' },
      { q: 'Why would I change the root font size?', a: 'Some sites set the html font size to something other than 16px (e.g. 62.5% = 10px) to make rem maths easier. Set that value here to get matching conversions.' },
    ],
    related: ['scientific-notation-converter', 'fraction-to-decimal-converter', 'data-transfer-time-calculator'],
    relatedConvert: { href: '/convert/length', label: 'Length Converter' },
  },

  // ── DATA-TRANSFER TIME CALCULATOR ──────────────────────────
  {
    slug: 'data-transfer-time-calculator',
    name: 'Download Time Calculator',
    icon: '📶',
    group: 'Developer',
    tagline: 'Estimate how long a file takes to download at a given speed.',
    h1: 'Download / Data-Transfer Time Calculator',
    seoTitle: 'Download Time Calculator — File Size ÷ Internet Speed',
    metaDescription:
      'Free download time calculator. Enter a file size and your internet speed (Mbps, Gbps or MB/s) to estimate how long a download or transfer will take.',
    keywords:
      'download time calculator, data transfer time, file download time, mbps to mb/s, how long to download, bandwidth calculator, transfer time estimate',
    intro:
      'The Download Time Calculator estimates how long it takes to move a file of a given size at a given connection speed. Enter the size (KB, MB, GB or TB) and your speed in Mbps, Gbps or MB/s, and it returns the transfer time in hours, minutes and seconds.',
    body:
      'Internet speeds are advertised in megabits per second (Mbps) while file sizes are in megabytes (MB) — and there are 8 bits in a byte, which is exactly where most people\'s mental maths goes wrong. This calculator handles the bit/byte conversion for you, so a 5 GB download over a 100 Mbps line correctly comes out to about 6.7 minutes, not 50 seconds. It is handy for planning backups, game installs, video uploads, and migrations.',
    useCases: [
      'Estimate how long a large game or OS download will take.',
      'Plan a cloud backup or file migration window.',
      'Compare transfer times across broadband tiers before upgrading.',
      'Convert an advertised Mbps speed into real MB/s throughput.',
      'Work out upload time for a big video before a deadline.',
    ],
    howToSteps: [
      { title: 'Enter the file size', text: 'Type the size and choose KB, MB, GB or TB.' },
      { title: 'Enter your speed', text: 'Type your connection speed and pick Mbps, Gbps or MB/s.' },
      { title: 'Read the time', text: 'The estimated transfer time appears in hours, minutes and seconds.' },
    ],
    faqs: [
      { q: 'Why is my download slower than my Mbps suggests?', a: 'Because 1 byte = 8 bits. A 100 Mbps connection delivers about 12.5 MB/s at best, and real-world overhead (protocol, disk, server limits) makes it slower. This calculator uses the 8-bit conversion so its estimate is realistic.' },
      { q: 'How long to download 1 GB at 100 Mbps?', a: 'About 80 seconds at the theoretical maximum (1 GB = 8000 megabits ÷ 100 Mbps = 80s). Real transfers take a bit longer due to overhead.' },
      { q: 'What is the difference between Mbps and MB/s?', a: 'Mbps is megabits per second (network speed); MB/s is megabytes per second (file throughput). 1 MB/s = 8 Mbps. Pick the unit that matches how your speed is quoted.' },
      { q: 'Does this account for real-world overhead?', a: 'It gives the theoretical best-case time from size and speed. Actual downloads are typically 10–30% slower due to protocol overhead and server/disk limits.' },
    ],
    related: ['css-unit-converter', 'percentage-calculator', 'scientific-notation-converter'],
    relatedConvert: { href: '/convert/digital', label: 'Digital Storage Converter' },
  },

  // ── PERCENTAGE CALCULATOR ──────────────────────────────────
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    icon: '％',
    group: 'Numbers',
    tagline: 'Work out percentages, percentage of a number, and % change.',
    h1: 'Percentage Calculator',
    seoTitle: 'Percentage Calculator — % of a Number & Percentage Change',
    metaDescription:
      'Free percentage calculator. Find X% of a number, what percent one number is of another, and the percentage increase or decrease between two values. Instant results.',
    keywords:
      'percentage calculator, percent of a number, percentage change, percent increase, percentage difference, what percent is x of y, calculate percentage',
    intro:
      'The Percentage Calculator answers the three questions people actually ask: "what is X% of Y", "X is what percent of Y", and "what is the percentage increase or decrease from X to Y". Fill in the numbers and each result appears instantly.',
    body:
      'Percentages come up constantly — tips, discounts, tax, grades, statistics, and price changes. Rather than remembering which number to divide by, this tool gives you three labelled calculators in one place so you pick the one that matches your question. It handles decimals and negative changes and shows results rounded sensibly.',
    useCases: [
      'Calculate a tip, discount, or sales-tax amount.',
      'Find what percentage a score or subtotal is of a total.',
      'Measure a percentage increase or decrease between two figures.',
      'Check a markup or margin quickly.',
      'Verify a "% off" sale price.',
    ],
    howToSteps: [
      { title: 'Pick your question', text: 'Choose "% of a number", "X is what % of Y", or "% change".' },
      { title: 'Enter the numbers', text: 'Type the two values for that calculation.' },
      { title: 'Read the answer', text: 'The result updates instantly as you type.' },
    ],
    faqs: [
      { q: 'How do I find X% of a number?', a: 'Multiply the number by the percentage divided by 100. For example, 20% of 150 = 150 × 0.20 = 30. The first calculator above does this for you.' },
      { q: 'How do I calculate percentage change?', a: 'Subtract the old value from the new value, divide by the old value, and multiply by 100. From 80 to 100 is (100 − 80) ÷ 80 × 100 = 25% increase.' },
      { q: 'What percent is one number of another?', a: 'Divide the part by the whole and multiply by 100. 30 out of 150 is 30 ÷ 150 × 100 = 20%.' },
      { q: 'Can it handle a percentage decrease?', a: 'Yes. If the new value is lower than the old value, the percentage-change result is negative, indicating a decrease.' },
    ],
    related: ['fraction-to-decimal-converter', 'gpa-calculator', 'scientific-notation-converter'],
  },

  // ── GPA CALCULATOR ─────────────────────────────────────────
  {
    slug: 'gpa-calculator',
    name: 'GPA Calculator',
    icon: '🎓',
    group: 'Numbers',
    tagline: 'Calculate your grade point average from letter grades and credits.',
    h1: 'GPA Calculator',
    seoTitle: 'GPA Calculator — Grade Point Average from Letter Grades',
    metaDescription:
      'Free GPA calculator. Enter your letter grades and credit hours to calculate your weighted grade point average on the standard 4.0 scale. Add or remove courses instantly.',
    keywords:
      'gpa calculator, grade point average, college gpa, 4.0 scale, weighted gpa, letter grade to gpa, semester gpa calculator',
    intro:
      'The GPA Calculator computes your grade point average on the standard 4.0 scale. Add a row for each course, choose the letter grade and enter the credit hours, and it returns your credit-weighted GPA — updating live as you edit.',
    body:
      'GPA is a weighted average: courses worth more credit hours count more toward your final number. This calculator maps letter grades (A, A−, B+, …) to their standard grade points, multiplies by credits, and divides by total credits — the same method registrars use. Use it to project a semester, check whether you will hit a scholarship threshold, or see how one more course could move your average.',
    useCases: [
      'Calculate your GPA for a single semester or the whole year.',
      'See if you will meet a scholarship or Dean\'s List cutoff.',
      'Project how a target grade in a course affects your average.',
      'Compare weighted vs unweighted impact of high-credit courses.',
      'Double-check the GPA printed on your transcript.',
    ],
    howToSteps: [
      { title: 'Add your courses', text: 'Add a row per course with its letter grade and credit hours.' },
      { title: 'Choose grades', text: 'Pick each letter grade from the dropdown.' },
      { title: 'Read your GPA', text: 'Your credit-weighted GPA updates automatically.' },
    ],
    faqs: [
      { q: 'How is GPA calculated?', a: 'Multiply each course\'s grade points (A = 4.0, B = 3.0, etc.) by its credit hours, add those up, then divide by the total credit hours. This tool does it automatically as you add courses.' },
      { q: 'What are the grade points for each letter?', a: 'On the standard scale: A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0, B− = 2.7, C+ = 2.3, C = 2.0, C− = 1.7, D+ = 1.3, D = 1.0, F = 0.0.' },
      { q: 'What is a weighted GPA?', a: 'A weighted GPA counts courses by their credit hours, so a 4-credit A affects your average more than a 1-credit A. This calculator produces a credit-weighted GPA.' },
      { q: 'Does this use a 4.0 scale?', a: 'Yes, it uses the common unweighted US 4.0 scale. If your school uses a different scale (e.g. 4.3 or 5.0 for honors), the raw method is the same but the point values differ.' },
    ],
    related: ['percentage-calculator', 'fraction-to-decimal-converter', 'scientific-notation-converter'],
  },

  // ── FRACTION ↔ DECIMAL CONVERTER ───────────────────────────
  {
    slug: 'fraction-to-decimal-converter',
    name: 'Fraction ⇄ Decimal Converter',
    icon: '½',
    group: 'Numbers',
    tagline: 'Convert fractions to decimals and decimals back to simplified fractions.',
    h1: 'Fraction to Decimal Converter',
    seoTitle: 'Fraction to Decimal Converter — and Decimal to Fraction',
    metaDescription:
      'Free fraction and decimal converter. Convert fractions to decimals (3/4 → 0.75) and decimals to simplified fractions (0.75 → 3/4). Handles mixed numbers.',
    keywords:
      'fraction to decimal, decimal to fraction, fraction converter, convert fraction to decimal, mixed number to decimal, simplify fraction, 3/4 as a decimal',
    intro:
      'The Fraction ⇄ Decimal Converter goes both ways: type a fraction like 3/4 (or a mixed number like 1 1/2) to get its decimal, or type a decimal like 0.625 to get the simplified fraction. Results are reduced to lowest terms automatically.',
    body:
      'Recipes, tape measures, and school maths mix fractions and decimals freely, and switching between them by hand is fiddly. This converter parses proper fractions, improper fractions, and mixed numbers, and reduces any decimal to its simplest exact fraction using the greatest common divisor. It is a quick helper for cooking, woodworking, engineering drawings, and homework.',
    useCases: [
      'Convert a measurement like 5/8 inch into a decimal for a caliper.',
      'Turn a decimal reading back into a fraction for a ruler or recipe.',
      'Simplify an ugly fraction to lowest terms.',
      'Handle mixed numbers such as 2 3/4.',
      'Check maths homework answers both ways.',
    ],
    howToSteps: [
      { title: 'Choose a direction', text: 'Fraction → decimal, or decimal → fraction.' },
      { title: 'Enter your value', text: 'Type a fraction (e.g. 3/4 or 1 1/2) or a decimal (e.g. 0.75).' },
      { title: 'Read the result', text: 'The converted, fully-simplified value appears instantly.' },
    ],
    faqs: [
      { q: 'How do I convert a fraction to a decimal?', a: 'Divide the numerator by the denominator. 3/4 = 3 ÷ 4 = 0.75. This converter also handles mixed numbers like 1 1/2 = 1.5.' },
      { q: 'How do I convert a decimal to a fraction?', a: 'Write the decimal over a power of ten and reduce. 0.75 = 75/100 = 3/4. The converter reduces to lowest terms automatically using the greatest common divisor.' },
      { q: 'Can it handle mixed numbers?', a: 'Yes. Enter a mixed number with a space, like 2 3/4, and it converts to 2.75 (or the reverse into a mixed/improper fraction).' },
      { q: 'What about repeating decimals?', a: 'The converter treats your input as a terminating decimal and gives the closest exact fraction for the digits entered. For a repeating decimal, enter more digits for a closer fraction.' },
    ],
    related: ['percentage-calculator', 'scientific-notation-converter', 'gpa-calculator'],
    relatedConvert: { href: '/convert/numbase', label: 'Number Base Converter' },
  },

  // ── SCIENTIFIC NOTATION CONVERTER ──────────────────────────
  {
    slug: 'scientific-notation-converter',
    name: 'Scientific Notation Converter',
    icon: '🔬',
    group: 'Numbers',
    tagline: 'Convert numbers to and from scientific and E-notation.',
    h1: 'Scientific Notation Converter',
    seoTitle: 'Scientific Notation Converter — Standard Form & E-Notation',
    metaDescription:
      'Free scientific notation converter. Convert a plain number to scientific notation (a × 10ⁿ) and E-notation, and convert scientific notation back to a decimal number.',
    keywords:
      'scientific notation converter, standard form converter, e notation, exponential notation, convert to scientific notation, decimal to scientific notation',
    intro:
      'The Scientific Notation Converter rewrites large and small numbers in the compact a × 10ⁿ form (and E-notation), and converts scientific notation back into a plain decimal. Enter 0.00042 to get 4.2 × 10⁻⁴, or enter 6.02e23 to expand it.',
    body:
      'Scientific notation keeps very large or very small numbers readable — Avogadro\'s number, wavelengths, distances in space, tiny tolerances. This converter shows the normalized coefficient and exponent, the equivalent E-notation used in code and calculators, and the fully written-out decimal, so you can move between whichever form your work needs.',
    useCases: [
      'Express a very large or very small measurement compactly.',
      'Expand a value like 6.02e23 into its full decimal form.',
      'Convert calculator/programming E-notation into standard form.',
      'Normalize a number to a single leading digit × 10ⁿ.',
      'Check exponents in physics and chemistry problems.',
    ],
    howToSteps: [
      { title: 'Choose a direction', text: 'Number → scientific notation, or scientific → number.' },
      { title: 'Enter a value', text: 'Type a plain number (0.00042) or scientific form (4.2e-4).' },
      { title: 'Read every form', text: 'See the a × 10ⁿ form, E-notation, and the full decimal.' },
    ],
    faqs: [
      { q: 'What is scientific notation?', a: 'Scientific notation writes a number as a coefficient between 1 and 10 multiplied by a power of ten, e.g. 4.2 × 10⁻⁴. It makes very large or very small numbers easier to read and compare.' },
      { q: 'What is E-notation?', a: 'E-notation is how scientific notation is typed on calculators and in code: 4.2 × 10⁻⁴ becomes 4.2e-4. This converter shows both forms.' },
      { q: 'How do I convert a number to scientific notation?', a: 'Move the decimal point so one non-zero digit remains on the left, and count the moves as the exponent. 5300 = 5.3 × 10³; 0.0071 = 7.1 × 10⁻³. The converter does this automatically.' },
      { q: 'Does it handle negative numbers?', a: 'Yes. The sign is preserved on the coefficient, so −5300 becomes −5.3 × 10³.' },
    ],
    related: ['fraction-to-decimal-converter', 'percentage-calculator', 'css-unit-converter'],
    relatedConvert: { href: '/convert/numbase', label: 'Number Base Converter' },
  },

  // ── MORSE CODE TRANSLATOR ──────────────────────────────────
  {
    slug: 'morse-code-translator',
    name: 'Morse Code Translator',
    icon: '📡',
    group: 'Text',
    tagline: 'Translate text to Morse code and decode Morse code back to text.',
    h1: 'Morse Code Translator',
    seoTitle: 'Morse Code Translator — Text to Morse Code & Back',
    metaDescription:
      'Free Morse code translator. Convert text to Morse code and decode Morse code back into text, with support for letters, numbers and common punctuation.',
    keywords:
      'morse code translator, text to morse code, morse code to text, morse code converter, decode morse code, morse code alphabet',
    intro:
      'The Morse Code Translator converts plain text into Morse code and decodes Morse back into readable text. It covers the full A–Z alphabet, digits 0–9, and common punctuation, using standard spacing — a space between letters and a slash between words.',
    body:
      'Morse code encodes each character as a sequence of dots and dashes, once the backbone of telegraph and radio communication and still used in aviation, amateur radio, and accessibility. This translator makes it two-way: type a message to get its Morse, or paste Morse (dots and dashes, letters separated by spaces, words by "/") to read it back. Great for learning, puzzles, escape rooms, and CTFs.',
    useCases: [
      'Encode a message into Morse code for a puzzle or game.',
      'Decode a Morse string back into plain text.',
      'Learn the Morse alphabet with instant feedback.',
      'Create clues for escape rooms or scavenger hunts.',
      'Solve Morse-based CTF and cipher challenges.',
    ],
    howToSteps: [
      { title: 'Choose a direction', text: 'Text → Morse, or Morse → text.' },
      { title: 'Type your input', text: 'Enter text, or Morse using . and − with spaces between letters and / between words.' },
      { title: 'Copy the result', text: 'The translation appears instantly, ready to copy.' },
    ],
    faqs: [
      { q: 'How does Morse code spacing work?', a: 'Within a word, letters are separated by a single space; words are separated by a slash (/) or a longer gap. For example "HI" is "···· ··" and "HI OK" is "···· ·· / −−− −·−".' },
      { q: 'What is SOS in Morse code?', a: 'SOS is "··· −−− ···" — three dots, three dashes, three dots. It became the international distress signal because the pattern is simple and unmistakable.' },
      { q: 'Does it support numbers and punctuation?', a: 'Yes. All digits 0–9 and common punctuation such as period, comma, question mark and slash are included in both directions.' },
      { q: 'What do the dot and dash represent?', a: 'They are the two signal lengths: a dot (·) is a short signal and a dash (−) is a long one (about three times the dot). Their combinations spell each character.' },
    ],
    related: ['slug-generator', 'text-case-converter', 'base64-converter'],
  },

  // ── SLUG GENERATOR ─────────────────────────────────────────
  {
    slug: 'slug-generator',
    name: 'URL Slug Generator',
    icon: '🔗',
    group: 'Text',
    tagline: 'Turn any title into a clean URL slug — case-preserving optional.',
    h1: 'URL Slug Generator',
    seoTitle: 'URL Slug Generator — Convert Text to a Clean URL Slug',
    metaDescription:
      'Free URL slug generator. Convert any title or text into a clean, SEO-friendly URL slug. Choose hyphen or underscore separators and keep or lowercase the original case.',
    keywords:
      'slug generator, url slug generator, text to slug, seo slug, permalink generator, url friendly text, create slug from title',
    intro:
      'The URL Slug Generator converts a title or any text into a clean, URL-friendly slug. It strips punctuation, collapses spaces, and joins words with your chosen separator — with an option to keep the original capitalization or force lowercase.',
    body:
      'A good slug is the human-readable, SEO-friendly tail of a URL — "my-first-blog-post" instead of "?id=42". This generator handles accented characters, removes symbols that do not belong in URLs, and lets you pick hyphens (the SEO standard) or underscores. The case-preserving toggle is there for systems that are case-sensitive or brand names you want to keep capitalized.',
    useCases: [
      'Generate a permalink slug from a blog-post title.',
      'Create clean, readable URLs for pages and products.',
      'Make file names or IDs URL-safe.',
      'Keep original casing for case-sensitive systems, or force lowercase for SEO.',
      'Batch-clean messy titles into consistent slugs.',
    ],
    howToSteps: [
      { title: 'Enter your text', text: 'Type or paste a title or phrase.' },
      { title: 'Set options', text: 'Choose a hyphen or underscore separator and whether to keep the case.' },
      { title: 'Copy the slug', text: 'The URL-safe slug is generated instantly, ready to copy.' },
    ],
    faqs: [
      { q: 'What is a URL slug?', a: 'A slug is the part of a URL that identifies a page in human-readable words, like the "hello-world" in example.com/hello-world. Clean slugs are easier to read and better for SEO.' },
      { q: 'Should I use hyphens or underscores in slugs?', a: 'Hyphens are the SEO standard — Google treats hyphens as word separators but underscores as joiners. Use hyphens unless a specific system requires underscores.' },
      { q: 'Why lowercase slugs?', a: 'Lowercase avoids duplicate-URL issues on case-sensitive servers (where /Page and /page differ). The generator lowercases by default, but you can keep the original case if you need it.' },
      { q: 'Does it handle accented characters?', a: 'Yes. Accented letters are converted to their closest ASCII equivalents (é → e) so the slug stays URL-safe.' },
    ],
    related: ['morse-code-translator', 'text-case-converter', 'base64-converter'],
  },

  // ── AGE CALCULATOR ─────────────────────────────────────────
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    icon: '🎂',
    group: 'Time',
    tagline: 'Calculate exact age in years, months, and days from a birth date.',
    h1: 'Age Calculator',
    seoTitle: 'Age Calculator — Calculate Your Exact Age in Years, Months, Days',
    metaDescription:
      'Free age calculator. Enter your date of birth to get your exact age in years, months and days, plus total weeks, days, hours, and a countdown to your next birthday.',
    keywords:
      'age calculator, calculate age, age from date of birth, how old am i, date of birth calculator, exact age, chronological age calculator',
    intro:
      'The Age Calculator works out your exact age from your date of birth — in years, months and days — as of today or any date you choose. It also shows your age in total months, weeks, days and hours, and counts down the days to your next birthday.',
    body:
      'Working out an exact age by hand is fiddly because months and years have different lengths and leap years get in the way. This calculator handles all of that: pick your birth date (and optionally an "age at" date), and it computes the precise difference plus a set of fun totals. It is handy for forms, eligibility checks, birthdays, and quick "how old is…" questions.',
    useCases: [
      'Find your exact age in years, months and days for a form or application.',
      'Check age eligibility as of a specific future or past date.',
      'See how many total days, weeks or hours you have been alive.',
      'Count down the days until your next birthday.',
      'Work out someone else\'s age from their date of birth.',
    ],
    howToSteps: [
      { title: 'Enter your birth date', text: 'Pick your date of birth from the date field.' },
      { title: 'Choose the "as of" date', text: 'Leave it as today, or set a different date to check age at that point.' },
      { title: 'Read your age', text: 'Your exact age and totals appear instantly, with a birthday countdown.' },
    ],
    faqs: [
      { q: 'How is exact age calculated?', a: 'Age is the difference between two dates in whole years, then the leftover months, then the leftover days — accounting for different month lengths and leap years. This calculator does it precisely.' },
      { q: 'Does it handle leap years?', a: 'Yes. Leap days (29 February) are counted correctly, so your day and hour totals are accurate.' },
      { q: 'Can I calculate age at a past or future date?', a: 'Yes. Change the "age at" date to any date and the calculator shows the age as of that day rather than today.' },
      { q: 'Is my birth date stored anywhere?', a: 'No. The calculation runs entirely in your browser — nothing you enter is uploaded or saved on a server.' },
    ],
    related: ['unix-timestamp-converter', 'time-zone-converter', 'bmi-calculator'],
    relatedConvert: { href: '/convert/time', label: 'Time Converter' },
  },

  // ── BMI CALCULATOR ─────────────────────────────────────────
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    icon: '⚖️',
    group: 'Health',
    tagline: 'Calculate your Body Mass Index in metric or imperial units.',
    h1: 'BMI Calculator',
    seoTitle: 'BMI Calculator — Body Mass Index (Metric & Imperial)',
    metaDescription:
      'Free BMI calculator. Enter your height and weight in metric or imperial units to get your Body Mass Index, your weight category, and your healthy weight range.',
    keywords:
      'bmi calculator, body mass index, calculate bmi, bmi metric, bmi imperial, healthy weight range, bmi chart, am i overweight',
    intro:
      'The BMI Calculator works out your Body Mass Index from your height and weight, in either metric (kg, cm) or imperial (lb, ft/in) units. It shows your BMI number, the weight category it falls into, and the healthy weight range for your height.',
    body:
      'Body Mass Index is a quick screening number that relates weight to height (BMI = kg ÷ m²). It is not a diagnosis and does not distinguish muscle from fat, but it is a widely used first indicator: below 18.5 is underweight, 18.5–24.9 is normal, 25–29.9 is overweight, and 30+ is obese. This calculator also shows the weight range that would put you in the normal band for your height.',
    useCases: [
      'Check your BMI and which category it falls into.',
      'See the healthy weight range for your height.',
      'Switch between metric and imperial without converting by hand.',
      'Track progress toward a target weight.',
      'Get a quick screening figure before a doctor visit.',
    ],
    howToSteps: [
      { title: 'Pick your units', text: 'Choose metric (kg, cm) or imperial (lb, ft/in).' },
      { title: 'Enter height & weight', text: 'Type your measurements into the fields.' },
      { title: 'Read your BMI', text: 'Your BMI, category, and healthy weight range appear instantly.' },
    ],
    faqs: [
      { q: 'How is BMI calculated?', a: 'BMI = weight in kilograms ÷ (height in metres)². In imperial units: BMI = 703 × weight(lb) ÷ height(in)². This calculator applies the right formula for the units you pick.' },
      { q: 'What is a healthy BMI?', a: 'For most adults a BMI of 18.5–24.9 is considered normal. Below 18.5 is underweight, 25–29.9 is overweight, and 30 or above is obese.' },
      { q: 'Is BMI accurate for everyone?', a: 'BMI is a screening tool, not a diagnosis. It does not distinguish muscle from fat, so very muscular people may read high, and it is interpreted differently for children, athletes, and some ethnic groups. Treat it as a rough guide.' },
      { q: 'What is my ideal weight?', a: 'This calculator shows the weight range that corresponds to a normal BMI (18.5–24.9) for your height, which is a common way to express a healthy target range.' },
    ],
    related: ['age-calculator', 'percentage-calculator', 'fraction-to-decimal-converter'],
    relatedConvert: { href: '/convert/weight', label: 'Weight Converter' },
  },

  // ── WORD & CHARACTER COUNTER ───────────────────────────────
  {
    slug: 'word-counter',
    name: 'Word & Character Counter',
    icon: '📝',
    group: 'Text',
    tagline: 'Count words, characters, sentences, and reading time as you type.',
    h1: 'Word & Character Counter',
    seoTitle: 'Word Counter — Count Words, Characters & Reading Time',
    metaDescription:
      'Free word and character counter. Get live counts of words, characters (with and without spaces), sentences, paragraphs, and estimated reading and speaking time.',
    keywords:
      'word counter, character counter, word count, character count, count words online, reading time calculator, letter counter, text counter',
    intro:
      'The Word & Character Counter gives you a live count of your text as you type or paste — words, characters (with and without spaces), sentences, and paragraphs — plus estimated reading and speaking time. Everything updates instantly and stays in your browser.',
    body:
      'Writers, students, and marketers constantly work to limits: a 160-character meta description, a 280-character post, a 500-word essay, a 1,500-word article. This counter shows all the numbers at once so you can hit any target without guessing, and the reading-time estimate (about 200 words per minute) helps you gauge how long a piece takes to consume.',
    useCases: [
      'Hit an exact word count for an essay, article, or assignment.',
      'Stay within character limits for meta descriptions, tweets, or bios.',
      'Estimate how long a piece takes to read or speak aloud.',
      'Check sentence and paragraph counts for readability.',
      'Count characters with and without spaces for forms and fields.',
    ],
    howToSteps: [
      { title: 'Paste your text', text: 'Type or paste any text into the box.' },
      { title: 'Watch the counts', text: 'Words, characters, sentences and paragraphs update live.' },
      { title: 'Check reading time', text: 'Estimated reading and speaking time appear alongside the counts.' },
    ],
    faqs: [
      { q: 'Does the character count include spaces?', a: 'The counter shows both: total characters (including spaces) and characters excluding spaces, so you can match whichever limit you need.' },
      { q: 'How is reading time estimated?', a: 'Reading time assumes an average adult reading speed of about 200 words per minute; speaking time assumes roughly 130 words per minute. Both are estimates.' },
      { q: 'Is there a word or character limit?', a: 'No. You can count anything from a single tweet to a full document — it all runs in your browser.' },
      { q: 'Is my text saved or uploaded?', a: 'No. The counter processes everything locally in your browser; nothing you type is sent anywhere.' },
    ],
    related: ['text-case-converter', 'slug-generator', 'base64-converter'],
  },
];

export const toolMap = new Map(tools.map(t => [t.slug, t]));

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.related
    .map(slug => toolMap.get(slug))
    .filter((t): t is Tool => Boolean(t));
}
