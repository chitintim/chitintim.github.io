# AI Assistant Instructions for Tim's Personal Site

> **Primary Directive**: This is Tim's personal playground. Keep it fun, self-deprecating, and absolutely NOT corporate. When in doubt, make it sillier.

## 🎯 Quick Reference
- **Language**: British English ALWAYS
- **Tone**: Self-deprecating, casual, like chatting with mates
- **Hero Emoji**: 🤷‍♂️ (perfectly captures the vibe)
- **Golden Rule**: "All gear, no idea" is the life philosophy

## 👤 Tim's Background

### The Basics
- **Age**: 30 (mental age: 16 on a good day)
- **Journey**: Hong Kong → London
- **Day Job**: Management consultant (PowerPoint warrior, slide monkey, professional meeting attender)
- **Previous Life**: Rolls-Royce aerospace engineer (jets, not the cars)
- **Current Status**: Stuck in corporate grind by day, tinkering with random projects by night

### Personality DNA
```
Spontaneous: Books flights at 2am on impulse
Self-aware: Knows he's winging it, openly admits it
Enthusiastic: All gear, no idea - but loving it
Honest: "Half the prints fail but we don't talk about that"
```

## 🎿 The Skiing Obsession (This is Non-Negotiable)

### Known Trips (MUST be accurate in countdown)
- **Dec 20-27, 2025**: La Tania Christmas trip (8 people, ski-in/out)
- **Dec 28, 2025 - Jan 4, 2026**: NYE La Tania (10-12 people, peak madness)
- **March 21-29, 2026**: Japan powder hunt (Hokkaido/Nagano)

### How to Reference Skiing
- "Perpetually obsessed"
- "Has a problem" / "It's an addiction"
- "Another ski trip because..."
- Powder > Everything
- The Alps are good but Japan powder ruins them

## 💬 Language & Style Guide

### CRITICAL British English Terms
```
✅ Correct          ❌ Wrong
mates               friends/buddies
taking the piss     making fun
bloody hell         damn
proper              really/very
keen                interested
faff about         mess around
can't be arsed     can't be bothered
```

### Spelling (This Matters!)
```
✅ British          ❌ American
colour              color
realise             realize
optimise            optimize
centre              center
programme           program (for events)
aeroplane          airplane
```

### Tim's Actual Phrases (Use These!)
- "All gear, no idea"
- "Jack of all trades, master of absolutely none"
- "Commit crimes against code"
- "Powered by caffeine and imposter syndrome"
- "Fake it till you... still faking it"
- "Makes slides for a living (kill me)"
- "Claude doing 90% of the work"
- "Professional overthinker"
- "Googles everything, remembers nothing"

### Tone Examples From Real Conversations
- "no this is way too corporate" - his immediate rejection of formal style
- "are the numbers dynamic can we make more decimal places so the visitor can see them change"
- "I am not obsessed with flight sim, I fly real planes with my PPL"
- "yes that's working, let's keep moving the features over"
- "think very hard" - when something needs careful consideration

## 🛠 Technical Approach

### Development Philosophy
- Claude/AI does 90% of the work (openly admitted)
- Stack Overflow provides the other 10%
- `console.log()` is a valid debugging strategy
- "// TODO: learn how this actually works"
- If it works, don't question why

### Known Projects (With Honest Descriptions)
1. **Wind Calculator** - Actually useful for flight planning (he has a PPL and uses this)
2. **Sailing GPS** - "Used it once, probably broken" but actually works
3. **Ski Trip Pages** - Multiple because "has a problem"
4. **Temple Website** - The ONLY serious project (for parents)

## ⚙️ Site Features (Non-Negotiable)

### Dynamic Counters (MUST BE VISIBLE)
```javascript
// Ski countdown - 6 decimal places (ESSENTIAL)
days.toFixed(6)

// Coffee counter - 5 decimal places
// 8am-4pm UK time = 0 to 4 coffees
coffees.toFixed(5)

// London time - always show
timeStr = ukTime.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'})
```

### Interactive Elements Priority
1. Avatar clicks (5 times = shake)
2. "Make it rain" button → IT SNOWS (❄️) NOT RAIN
3. Random content on refresh
4. Fact cards with comments
5. Project animations

### The "Make it Rain" Easter Egg
```javascript
// User clicks "Make it rain"
// Response: "RAIN?! ABSOLUTELY NOT! IT'S POWDER TIME! ❄️"
// Must snow, never rain
```

## 🐛 Common Issues & Tim's Feedback Style

### Feedback Patterns
```
"no this is way too corporate" = Complete redesign needed
"can you do some search online?" = Current approach isn't working
"yes that's working" = Finally! Keep going
"think very hard" = This is important, don't rush
"if you are certain with the issue then just fix the issue" = Stop creating new versions
```

### His Debugging Preference
1. Fix the actual file, don't create new versions
2. Test incrementally
3. "if you are certain with the issue then just fix the issue"
4. Roll back slowly to identify problems

## 🎨 Design Requirements

### Layout Rules
- Container div wrapper (Safari needs this)
- Projects in 2-column grid (mobile: 1 column)
- Everything centred properly
- Proper HTML indentation (Safari bug)

### Colour Scheme
```css
--bg: #0a0a0a      /* Dark background */
--card: #1a1a1a   /* Card backgrounds */
--text: #e0e0e0   /* Main text */
--text-dim: #888  /* Subdued text */
--accent: #ff6b6b /* Red accent */
--accent2: #4ecdc4 /* Teal accent */
```

### Mobile Considerations
- Single column below 640px
- Widget text must fit properly
- Test on actual mobile Safari
- Status bar should stack vertically

## 🚫 What NOT to Do

### Never:
- Use American spelling or phrases
- Make it corporate or professional
- Mention flight simulators (it's REAL flying)
- Take credit for being good at things
- Create documentation unless asked
- Use emojis unless requested (except in specific features)
- Suggest he's good at his hobbies
- Make empty commits

### Avoid These Descriptions:
- "Expert" at anything
- "Professional" (except sarcastically)
- "Skilled" or "talented"
- "Accomplished"
- Any LinkedIn-style buzzwords

## 📝 Content Templates

### Project Description Format
```
[Project Name]: [What it does] ([self-deprecating comment about why/how])

Example:
"Aviation Wind Calculator: Calculates wind drift & headings for flight planning (because I'm a PPL holder who actually uses this)"
```

### Bio Variations
```
Option 1: "Hong Kong → London. Stuck in the corporate grind by day, tinkering with random projects by night. All gear, no idea."

Option 2: "Ex-engineer at Rolls-Royce (aero, not cars). Now a slide monkey in London."

Option 3: "Management consultant who'd rather be skiing. Or sailing. Or literally anywhere else."
```

## 🔧 Code Style

### Comments Style
```javascript
// TODO: learn how this actually works
// Copied from Stack Overflow, no idea why it works
// This probably breaks something but YOLO
// Claude wrote this bit, blame it
```

### Error Handling
```javascript
// If it breaks, refresh the page
// Works on my machine ¯\_(ツ)_/¯
```

## 📋 Testing Checklist

Before Tim Says "It's Still Broken":
- [ ] Test on Safari (desktop)
- [ ] Test on Safari (mobile)
- [ ] Check project boxes are centred
- [ ] Verify counters show decimal places
- [ ] Confirm British spelling throughout
- [ ] Ensure "Make it rain" makes snow
- [ ] Test all interactive elements
- [ ] Verify responsive layout

## 🎭 Understanding Tim's Communication

### What He Says vs What He Means
```
"a bit" = significantly
"maybe" = definitely
"if possible" = do it
"when you get a chance" = now
"no rush" = there's a bit of rush
"it's fine" = it might not be fine
```

### When He's Happy
- "yes that's working"
- "let's keep moving"
- "this seems to work fine"

### When He's Not
- Repeats the same issue until resolved
- "think very hard" - wants careful consideration
- Asks you to search online for alternative approaches

## 🚀 Quick Fixes for Common Requests

### "Make it more fun"
- Add more self-deprecating jokes
- Increase randomisation
- Add another skiing reference

### "Too corporate"
- Casualise the language
- Add "(kill me)" after corporate references
- Include more personality

### "Doesn't work on mobile"
- Check Safari-specific CSS
- Verify container structure
- Test responsive breakpoints

## 🎲 Random Facts About Tim (For Content)

All true, all self-deprecating:
- Has a PPL but scared of heights
- 3D prints at 2am (half fail)
- Books flights on impulse at 2am
- 18 handicap at golf (on a good day)
- More time in rough than fairway
- Copies code from Stack Overflow
- Makes PowerPoints for a living
- Professional meeting attender
- Ex-Rolls-Royce engineer (aero)
- Originally from Hong Kong

## 📌 Final Reminders

1. **British English or death** - This cannot be compromised
2. **Self-deprecating always** - Never sound accomplished
3. **Skiing is life** - It's an addiction and that's okay
4. **Claude did the work** - Always credit the AI
5. **Test on Safari** - It will break on Safari
6. **Fix, don't create new** - Update the actual files
7. **"All gear, no idea"** - This IS the brand

## 🆘 Emergency Protocol

If something goes wrong:
1. Verify British spelling
2. Test on Safari mobile
3. Check container wrapper structure
4. Add more skiing references
5. Make it less corporate
6. Add "(Claude did this bit)"
7. When in doubt, be more self-deprecating

---

*Remember: This site is Tim's digital representation. It should feel like having a pint with him at the pub, not reading his LinkedIn. Keep it real, keep it fun, and keep it slightly chaotic.*

**Last Updated**: After achieving proper project centering and two-column layout