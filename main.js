function avviaIntel() {
  const out = document.getElementById("output");
  out.innerHTML = "🛰️ Intelligenza Zefira attivata, raccolta dati in corso...";
  setTimeout(() => {
    out.innerHTML += "<br>✅ Missione iniziata. Pronto al prossimo comando, Imperatore.";
  }, 3000);
}
