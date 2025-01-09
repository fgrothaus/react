Installation der Dependencies für die Nutzung von React

1. Runterladen und installieren von NodeJs, um npm nutzen zu können
   - https://nodejs.org/en (Prüfen mit node -v)
2. Installieren von vite
   - npm create vite@latest ODER my-react-app
   - npm create vite@latest my-react-app --template react (--template react gibt Styling vor mittels CSS)
3. In das Verzeichnis wechseln
   - cd my-react-app
4. Notwendige Abhängigkeiten installieren aus der "package.json"
   - npm install
5. Vite-Entwicklungsserver starten
   - npm run dev


Hilfreich:

npm run build:
- Erstellt eine optimierte Version deines Codes für die Produktion. Diese optimierte Version wird in den dist Ordner geschrieben.
- Diese optimierte Version im dist-Ordner wird dann letztendlich gehostet, wenn die Anwendung über das Internet verfügbar gemacht wird.

- Bsp.
const sayHello = () => {
    console.log("Hello, World!");
};
sayHello();

WIRD ZU

const o=()=>{console.log("Hello, World!")};o();
