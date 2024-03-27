import { useState } from "react";
import "./index.css";

function App() {
  const emojis = [
    { id: "1", emoji: "💯", name: "100" },
    { id: "2", emoji: "🔢", name: "1234" },
    { id: "3", emoji: "😬", name: "Ekşitme" },
    { id: "4", emoji: "😁", name: "Sırıtış" },
    { id: "5", emoji: "😂", name: "Neşeli" },
    { id: "6", emoji: "😀", name: "Gülen Yüz" },
    { id: "7", emoji: "😄", name: "Gülümsemek" },
    { id: "8", emoji: "😅", name: "Tatlı Gülüş" },
    { id: "9", emoji: "😆", name: "Kahkaha Atma" },
    { id: "10", emoji: "😇", name: "Sevimli Melek" },
    { id: "11", emoji: "😉", name: "Göz Kırpma" },
    { id: "12", emoji: "😊", name: "Utanma" },
    { id: "13", emoji: "🙂", name: "Hafif Gülümseme" },
    { id: "14", emoji: "🙃", name: "Baş Aşağı Gülümseme" },
    { id: "15", emoji: "🙂", name: "Relax Gülümseme" },
    { id: "16", emoji: "😋", name: "Yum Yum Gülümseme" },
    { id: "17", emoji: "😌", name: "Huzurlu Gülümseme" },
    { id: "18", emoji: "😍", name: "Sevgi Dolu Gülümseme" },
    { id: "19", emoji: "😘", name: "Öpücük" },
    { id: "20", emoji: "😃", name: "Sırıtma" },
  ];
  const [searchResults, setSearchResults] = useState(emojis);

  const handleSearch = (text) => {
    const newList = emojis.filter((f) =>
      f.name.toUpperCase().startsWith(text.toUpperCase())
    );
    setSearchResults(newList);
  };

  const handleCopy = (emoji) => {
    navigator.clipboard.writeText(emoji);
  };

  return (
    <>
      <h1 className="title">😹Emoji Arama Motoru😺</h1>
      <input
        className="search"
        type="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul>
        {searchResults.map((emoji) => (
          <li key={emoji.id}>
            <p className="insideBar">
              {emoji.emoji} {emoji.name}
            </p>
            <div className="hover">
              <div
                className="copyEmoji"
                onClick={() => handleCopy(emoji.emoji)}
              >
                Emoji'yi Kopyala
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
