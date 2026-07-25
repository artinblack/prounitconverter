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
  group: 'Text' | 'Color' | 'Design' | 'Numbers' | 'Time' | 'Developer';
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
];

export const toolMap = new Map(tools.map(t => [t.slug, t]));

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.related
    .map(slug => toolMap.get(slug))
    .filter((t): t is Tool => Boolean(t));
}
