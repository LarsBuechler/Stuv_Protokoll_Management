
# Protokollmanagementsystem für die Studierendenvertretung Würzburg

Dieses Projekt ist ein **Protokollmanagementsystem**, das speziell für die **Studierendenvertretung Würzburg** entwickelt wurde. Es ermöglicht eine einfache, effiziente und strukturierte Verwaltung von Sitzungsprotokollen, um den administrativen Aufwand zu reduzieren und die Transparenz innerhalb der Organisation zu fördern.

---

## 🚀 Funktionen

- **Erstellen und Verwalten von Protokollen**: Sitzungsprotokolle können erstellt, bearbeitet und archiviert werden.
- **Benutzerrollen**: Rollenbasierte Zugriffssteuerung für Administratoren, Mitglieder und Gäste.
- **Such- und Filteroptionen**: Schnelles Auffinden von Protokollen nach Datum, Stichwörtern oder Kategorien.
- **Exportmöglichkeiten**: Protokolle können als PDF oder andere Formate exportiert werden.
- **Benachrichtigungen**: Automatische Erinnerungen und Updates bei neuen oder geänderten Protokollen.

---

## 🛠️ Installation

2. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```

3. **Umgebungsvariablen konfigurieren**: Erstelle eine `.env`-Datei basierend auf der `.env.example` und trage die nötigen Werte ein.

4. **Lokalen Server starten**:
   ```bash
   npm run dev
   ```

Das Projekt ist jetzt unter [http://localhost:3000](http://localhost:3000) verfügbar.

---

## 📝 Nutzung

### Rollenbasierter Zugang
- **Administratoren**: Vollständiger Zugriff auf alle Funktionen.
- **Mitglieder**: Zugriff auf zugewiesene Protokolle und Bearbeitungsrechte.
- **Gäste**: Nur Leserechte für freigegebene Protokolle.

### Protokollverwaltung
1. Neues Protokoll erstellen.
2. Inhalte hinzufügen, einschließlich Teilnehmerlisten, Tagesordnung und Beschlüsse.
3. Protokoll speichern und bei Bedarf mit anderen Mitgliedern teilen.

---

## 📖 Anforderungen

- **Node.js**: Version 16 oder höher
- **Datenbank**: PostgreSQL (oder ein anderes konfiguriertes System)
- **Weitere Tools**: Abhängig von den in der `package.json` angegebenen Abhängigkeiten

---

## 🧑‍💻 Mitwirken

Beiträge zu diesem Projekt sind willkommen!  
Bitte folge diesen Schritten, um beizutragen:
1. Einen Issue erstellen, um Änderungen oder Fehler zu diskutieren.
2. Einen Fork erstellen und Änderungen vornehmen.
3. Pull-Request öffnen.

---

## 📫 Kontakt

Bei Fragen oder Anregungen kannst du dich gerne melden:  
**E-Mail**: info@studierendenvertretung-wuerzburg.de  
**Website**: [https://studierendenvertretung-wuerzburg.de](https://studierendenvertretung-wuerzburg.de)

---

## ⚖️ Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE). Weitere Informationen findest du in der Lizenzdatei.
