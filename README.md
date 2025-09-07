# ChantMuse — GABC Web Editor

ChantMuse is a modern web-based editor for Gregorian chant using the GABC format. It offers syntax highlighting, validation, and export functionality, helping musicians and liturgists create chant files more efficiently.



## 🚀 Editor (Phase 1)
- [x] Monaco-based editor for GABC syntax
- [x] Basic syntax validation
- [x] Render Chant
- [x] Playback for the chant
- [x] Setting up docker compose
- [ ] Create UI for publishing (Title, tags, description, publish etc)
- [ ] Setup API w/ Postgress DB
- [ ] Publish chants to DB
- [ ] Link Patreon

## 🚀 Scores (Phase 2)
- [ ] View all published chants
- [ ] Create searchbar
- [ ] Add filters to the searchbar
- [ ] Import Gregobase & CantusDB? Chants
- [ ] 

## 🚀 Additional Nice to Haves (Phase 2)
- Login via Gmail SSO and Patreon SSO
- Comprehensive about us page
- Create OMR tech stack
- edit chant using GUI and not only gabc (Maybe intermediate format)
- connect playback to audio plugins with midi?
- 



## 🧰 Tech Stack
- React + TypeScript + Vite
- Monaco Editor (VS Code engine)
- Postgress DB
- 
- Deployed via AWS Amplify



## 🛠 Setup

```bash
# 1. Clone the repo
git clone https://github.com/craiglobo1/ChantMuse.git
cd ChantMuse

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
