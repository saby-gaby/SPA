import Recipe from "./components/Recipe"
import Header from "./components/Header"
import { ContextProvider } from "./Context"

const recipes = [
  {
    title: "Gnocchi-Salat mit Pesto",
    img: "https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2Fp4ZYk-GhSDg95IkZbmLvGsLKKCM%3D%2F864x648%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FR2687-photo-final-1.jpg&w=1440&q=90",
    text: "Dies ist das perfekte Rezept, wenn du ein schnelles, frisches Gericht für unterwegs suchst, für ein zwangloses Potluck-Treffen (jeder bringt was mit) oder wenn du Lust auf ein einfaches Mittagessen hast."
  },
  {
    title: "Bandnudeln mit Hähnchen und Sonnenblumenkerne",
    img: "https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FQ88LL9JOI3RM0EZ3LOgsuu0K5nQ%3D%2F864x648%2Fimages.kitchenstories.io%2FcommunityImages%2Fc4b70cfdc9bcc385d4b7a150ed1c79f1_1846ccd2-2a42-4f08-b255-397b58ca14bf.jpeg&w=1440&q=90",
    text: "Leckere Rezepte müssen nicht immer kompliziert sein. Diese Blitz-Pasta ist das ideale Feierabendrezept, wenn es mal schnell gehen soll. "
  },
  {
    title: "Asiatische Fleischbällchen mit Reis",
    img: "https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FYyq1I2En7W7TMpRIYtUtuxilad8%3D%2F864x648%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FR2571-photo-final-2.jpg&w=1440&q=90",
    text: "Diese Fleischbällchen sind wirklich schnell zubereitet und ein köstliches Mittag- oder Abendessen. Das Rezept kann auch leicht auf vier oder mehr Personen erweitert werden. Die Komponenten sind einfach, enthalten aber eine Menge Geschmack."
  },
]

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <ContextProvider>
          {recipes.map((r, i) => (
            <div key={i} className="col">
              <Recipe recipe={r}/>
            </div>
            ))
          }
          </ContextProvider>
        </div>
      </div>

    </div>
  )
};

export default App