# MasterMind-Business-Logic
a pickColor

Entwickeln Sie eine Funktion pickColor, welche Math.random() als parameter entgegen nimmt und basierend auf den Rückgabewerten dieser Funktion Farbwerte aus einer Menge von Farb-Konstanten auswählt. Nutzen Sie für Ihre Tests die Möglichkeit andere Funktionen als Math.random als Parameter  an pickColor zur übergeben, so dass Sie anhand dieser Funktion unterschiedliche Rückgabewerte in pickColor generieren können.

b safety

Stellen Sie sicher, dass pickColor keine Exceptions generiert. Sprich, sollte eine Eingabe-Funktion verwendet werden, welche höhere werte als 1.0 abliefert, so soll lediglch der gebrochene Anteil zur ermittlung des Farbwertes herangezogen werden. Beispiel: Wenn eine Funktion 15,5 zurück gibt, so soll die gleiche Farbe ermittelt werden, die bei einer Zufallszahl von 0,5 ermittelt worden wäre.

b generateCode

Basierend auf pick Color entwickeln Sie eine Funktion namens generateCode, die vier zufällig Farbwerte generiert. Stellen Sie sicher, dass generateCode keine zwei gleiche Farbwerte enthält.

HINWEIS:  Es hat sich heraus gestellt, das eine Lösung basierend auf der in der Vorlesung demonstrierten pickColor-Lösung etwas performance lastig sein wird. Daher sollte überlegt werden pickColor neben der Math.random-funktion auch eine stets verkürzte Liste der verfügbaren Farben zu übergeben, aus der dann zufällig eine Farbe gewählt wird. D.h. die zu Liste der Farben aus denen ausgewählt wird bleibt nicht konstant, sondern müsste pro auswahl reduziert werden.  

c) checkCode

Schreiben Sie eine Funktion checkCode, die zwei Arrays mit jeweils vier Farben entgegen nimmt. Als Ergebnis soll ein Array heraus gegeben werden, welches vier Felder enthält mit einem von drei möglichen Werten:

FITS: Eine Farbe wurde richtig bestimmt und ist an der richtigen Position

PARTIALLY: Eine Farbe wurde richtig bestimmt, ist aber an der falschen Position

WRONG: Dieses Feld enthält weder eine verwendete Farbe noch eine gültige Position



d) scrumble

Schreiben Sie checkCode so um, dass die Tipps nicht 1 zu 1 zu den gewählten Farben korrelieren, sondern die Tipps sollen zufällig im antwort array verteilt sein. Erweitern Sie dafür checkCode um den Parameter einer random-Funktion, so dass Sie im Test statt dessen pseudo random-Funktionen verwenden können, deren Ausgabe Sie ihren Bedürfnissen entsprechend gestalten können. (ähnlich wie pickColor)



e) game

Schreiben Sie eine Funktion, die ein Array von CodeTipps Runden-Ergebnissen entgegennimmt und den Sieger ermittelt. D.h. Wenn 12 Runden nicht genügt haben um den Code zu knacken, gewinnt der Computer (entspricht einer Konstante namens LOST). Wurde ein Tipp so ausgewertet, dass Enthalten die Runden-Ergebnisse jedoch einen Eintrag, in dem alle Felder richtig besetzt und an der richtigen position sind, dann ist der Spieler der Gewinner (WON). Ansonsten gibt game den Wert PENDING zurück.

